# Changed — Bundle Modifications Report (Part 034 / 116)

- **Updated at**: `2026-11-27T00:59 JST`
- **Part**: `34 / 116` (**334** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 033](part-033.md) · [Part 035 →](part-035.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/281.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/bloxd.io/chunks/js/281.js` (96 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696)

#### 79. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L943-L958` → after: `L9280-L9320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9280-L9320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9280-L9320) · [Before (L943-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L943-L958)

```diff
-           static Parse(eV, xV, JV) {
-             if (eV.customType) {
-               const VV = ZV.e.Instantiate(eV.customType).Parse(eV, xV, JV);
-               return eV.samplingMode && VV.updateSamplingMode && VV._samplingMode && VV._samplingMode !== eV.samplingMode && VV.updateSamplingMode(eV.samplingMode), VV
-             }
-             if (eV.isCube && !eV.isRenderTarget) return VV._CubeTextureParser(eV, xV, JV);
-             const YV = void 0 !== eV.internalTextureUniqueId;
-             if (!eV.name && !eV.isRenderTarget && !YV) return null;
-             let UV;
-             if (YV) {
-               const VV = xV.sk().getLoadedTexturesCache();
-               for (const xV of VV)
-                 if (xV.uniqueId === eV.internalTextureUniqueId) {
-                   UV = xV;
-                   break
-                 }
+           this._toBeDisposed.length = 0
+         }
+         this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
+       }
+       freezeMaterials() {
+         for (let HH = 0; HH < this.materials.length; HH++) this.materials[HH].freeze()
+       }
+       unfreezeMaterials() {
+         for (let HH = 0; HH < this.materials.length; HH++) this.materials[HH].unfreeze()
+       }
+       dispose() {
+         if (this.mV) return;
+         if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStag … [truncated]
+           for (const HH of this._activeAnimatables) HH.onAnimationEndObservable.clear(), HH.onAnimationEnd = null;
+           this.stopAllAnimations()
+         }
+ ... (25 more added lines; see GitHub link above)
```

#### 80. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L960-L1044` → after: `L9322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9322) · [Before (L960-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L960-L1044)

```diff
-             const yV = VV => {
-               if (VV && VV._texture && (VV._texture._cachedWrapU = null, VV._texture._cachedWrapV = null, VV._texture._cachedWrapR = null), eV.samplingMode) {
-                 const xV = eV.samplingMode;
-                 VV && VV.samplingMode !== xV && VV.updateSamplingMode(xV)
-               }
-               if (VV && eV.animations)
-                 for (let xV = 0; xV < eV.animations.length; xV++) {
-                   const JV = eV.animations[xV],
-                     YV = (0, QV.c)("BABYLON.Animation");
-                   YV && VV.animations.push(YV.Parse(JV))
-                 }
-               VV && VV._texture && (YV && !UV && VV._texture._setUniqueId(eV.internalTextureUniqueId), VV._texture.label = eV.internalTextureLabel)
-             };
-             return jV.b.Parse((() => {
-               let YV = !0;
-               if (eV.noMipmap && (YV = !1), eV.mirrorPlane) {
- ... (69 more removed lines; see GitHub link above)
+             HH--
```

#### 81. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1046-L1240` → after: `L9324-L9325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9324-L9325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9324-L9325) · [Before (L1046-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L1046-L1240)

```diff
-         }, (() => {
-           const UV = "function" === typeof Symbol && Symbol.metadata ? Object.create(GV[Symbol.metadata] ?? null) : void 0;
-           eV = [(0, YV.J)()], xV = [(0, YV.J)()], kV = [(0, YV.J)()], qV = [(0, YV.J)()], tV = [(0, YV.J)()], FV = [(0, YV.J)()], TV = [(0, YV.J)()], PV = [(0, YV.J)()], AV = [(0, YV.J)()], NV = [(0, YV.J)()], XV = [(0, YV.J)()], MV = [(0, YV.J)()], zV = [(0, YV.J)()], (0, JV.i)( … [truncated]
-             kind: "getter",
-             name: "isBlocking",
-             static: !1,
-             private: !1,
-             access: {
-               has: VV => "isBlocking" in VV,
-               get: VV => VV.isBlocking
-             },
-             metadata: UV
-           }, null, WV), (0, JV.i)(null, null, eV, {
-             kind: "field",
-             name: "url",
-             static: !1,
- ... (179 more removed lines; see GitHub link above)
+         }
+         AH = this._engine._virtualScenes.indexOf(this), AH > -1 && this._engine._virtualScenes.splice(AH, 1), this._engine.wipeCaches(!0), this.uR.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clea … [truncated]
```

#### 82. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1242-L1243` → after: `L9327-L9331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9327-L9331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9327-L9331) · [Before (L1242-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L1242-L1243)

```diff
-       toString() {
-         return `{W: ${this.width}, H: ${this.height}}`
+       _disposeList(HH, BH) {
+         const LH = HH.slice(0);
+         BH = BH ?? (HH => HH.dispose());
+         for (const AH of LH) BH(AH);
+         HH.length = 0
```

#### 83. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1245-L1246` → after: `L9333-L9334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9333-L9334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9333-L9334) · [Before (L1245-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L1245-L1246)

```diff
-       getClassName() {
-         return "Size"
+       get mV() {
+         return this._isDisposed
```

#### 84. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1248-L1250` → after: `L9336-L9340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9336-L9340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9336-L9340) · [Before (L1248-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L1248-L1250)

```diff
-       getHashCode() {
-         let VV = 0 | this.width;
-         return VV = 397 * VV ^ this.height, VV
+       clearCachedVertexData() {
+         for (let HH = 0; HH < this.meshes.length; HH++) {
+           const BH = this.meshes[HH].geometry;
+           BH && BH.clearCachedData()
+         }
```

#### 85. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1252-L1253` → after: `L9342-L9345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9342-L9345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9342-L9345) · [Before (L1252-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L1252-L1253)

```diff
-       iG(VV) {
-         this.width = VV.width, this.height = VV.height
+       cleanCachedTextureBuffer() {
+         for (const HH of this.textures) {
+           HH._buffer && (HH._buffer = null)
+         }
```

#### 86. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1255-L1256` → after: `L9347-L9365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9347-L9365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9347-L9365) · [Before (L1255-L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L1255-L1256)

```diff
-       FeV(VV, eV) {
-         return this.width = VV, this.height = eV, this
+       getWorldExtends(HH) {
+         const BH = new EH.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+           LH = new EH.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+         HH = HH || (() => !0);
+         const AH = this.meshes.filter(HH);
+         for (const rH of AH) {
+           if (rH.computeWorldMatrix(!0), !rH.jU || 0 === rH.jU.length || rH.infiniteDistance) continue;
+           const HH = rH.jF(),
+             AH = HH.boundingBox.minimumWorld,
+             SH = HH.boundingBox.maximumWorld;
+           EH.o.CheckExtends(AH, BH, LH), EH.o.CheckExtends(SH, BH, LH)
+         }
+         return BH.x === Number.MAX_VALUE ? {
+           min: EH.o.Zero(),
+           max: EH.o.Zero()
+         } : {
+ ... (3 more added lines; see GitHub link above)
```

#### 87. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1258-L1259` → after: `L9367-L9558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9367-L9558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9367-L9558) · [Before (L1258-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L1258-L1259)

```diff
-       set(VV, eV) {
-         return this.FeV(VV, eV)
+       createPickingRay(HH, BH, LH, AH) {
+         throw (0, TH.i)("Ray")
+       }
+       createPickingRayToRef(HH, BH, LH, AH, rH) {
+         throw (0, TH.i)("Ray")
+       }
+       createPickingRayInCameraSpace(HH, BH, LH) {
+         throw (0, TH.i)("Ray")
+       }
+       createPickingRayInCameraSpaceToRef(HH, BH, LH, AH) {
+         throw (0, TH.i)("Ray")
+       }
+       XY(HH, BH, LH, AH, rH, SH) {
+         const hH = (0, TH.i)("Ray", !0);
+         return hH && HL.e.Warn(hH), new YH.b
+       }
+ ... (176 more added lines; see GitHub link above)
```

#### 88. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1261-L1262` → after: `L9560-L9561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9560-L9561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9560-L9561) · [Before (L1261-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L1261-L1262)

```diff
-       multiplyByFloats(VV, eV) {
-         return new JV(this.width * VV, this.height * eV)
+       getGeometryByID(HH) {
+         return this.getGeometryById(HH)
```

#### 89. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1264-L1265` → after: `L9563-L9564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9563-L9564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9563-L9564) · [Before (L1264-L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L1264-L1265)

```diff
-       clone() {
-         return new JV(this.width, this.height)
+       getMeshByID(HH) {
+         return this.getMeshById(HH)
```

#### 90. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1267-L1268` → after: `L9566-L9567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9566-L9567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9566-L9567) · [Before (L1267-L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L1267-L1268)

```diff
-       equals(VV) {
-         return !!VV && (this.width === VV.width && this.height === VV.height)
+       getMeshByUniqueID(HH) {
+         return this.getMeshByUniqueId(HH)
```

#### 91. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1270-L1271` → after: `L9569-L9570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9569-L9570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9569-L9570) · [Before (L1270-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L1270-L1271)

```diff
-       get surface() {
-         return this.width * this.height
+       getLastMeshByID(HH) {
+         return this.getLastMeshById(HH)
```

#### 92. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1273-L1274` → after: `L9572-L9573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9572-L9573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9572-L9573) · [Before (L1273-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L1273-L1274)

```diff
-       static Zero() {
-         return new JV(0, 0)
+       getMeshesByID(HH) {
+         return this.getMeshesById(HH)
```

#### 93. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1276-L1277` → after: `L9575-L9576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9575-L9576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9575-L9576) · [Before (L1276-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L1276-L1277)

```diff
-       add(VV) {
-         return new JV(this.width + VV.width, this.height + VV.height)
+       getTransformNodeByID(HH) {
+         return this.getTransformNodeById(HH)
```

#### 94. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1279-L1280` → after: `L9578-L9579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9578-L9579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9578-L9579) · [Before (L1279-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L1279-L1280)

```diff
-       subtract(VV) {
-         return new JV(this.width - VV.width, this.height - VV.height)
+       getTransformNodeByUniqueID(HH) {
+         return this.getTransformNodeByUniqueId(HH)
```

#### 95. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1282-L1283` → after: `L9581-L9582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9581-L9582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9581-L9582) · [Before (L1282-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L1282-L1283)

```diff
-       scale(VV) {
-         return new JV(this.width * VV, this.height * VV)
+       getTransformNodesByID(HH) {
+         return this.getTransformNodesById(HH)
```

#### 96. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L1285-L1288` → after: `L9584-L9585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9584-L9585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9584-L9585) · [Before (L1285-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L1285-L1288)

```diff
-       static Lerp(VV, eV, xV) {
-         const YV = VV.width + (eV.width - VV.width) * xV,
-           UV = VV.height + (eV.height - VV.height) * xV;
-         return new JV(YV, UV)
+       getNodeByID(HH) {
+         return this.getNodeById(HH)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/282.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/282.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8)

#### 1. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/282.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/282.js#L2)

```diff
- export const ids = [282];
+ export const ids = [282, 662];
```

#### 2. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L4-L96` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/282.js#L4) · [Before (L4-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/282.js#L4-L96)

```diff
-   41506: (VV, eV, xV) => {
-     xV.d(eV, {
-       b: () => yV,
-       e: () => pV
-     });
-     var JV = xV(39870),
-       YV = xV(41279),
-       UV = xV(41478),
-       yV = {};
-     class pV {
-       constructor(VV) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = VV, this.checkInputs = () => {}
-       }
-       add(VV) {
-         const eV = VV.getSimpleName();
-         this.attached[eV] ? JV.b.Warn("camera input of type " + eV + " already exists on camera") : (this.attached[eV] = VV, VV.camera = this.camera, VV.checkInputs && (this.checkInputs = this._addCheckInputs(VV.checkInputs.bind(VV))), this.attachedToElement && VV.attachControl(t … [truncated]
- ... (77 more removed lines; see GitHub link above)
+   41138: (HH, BH, LH) => {
```

#### 3. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L100-L511` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/282.js#L8-L10) · [Before (L100-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/282.js#L100-L511)

```diff
-     var JV = xV(41257),
-       YV = xV(41263),
-       UV = xV(41145),
-       yV = xV(38269),
-       pV = xV(41252),
-       QV = xV(41738),
-       nV = xV(38318),
-       wV = xV(38296),
-       ZV = xV(41279),
-       vV = xV(41077),
-       rV = xV(39870),
-       kV = xV(41300),
-       bV = xV(39058),
-       EV = xV(41329);
-     var BV = xV(41150);
-     let jV = !1;
- ... (396 more removed lines; see GitHub link above)
+     class AH {
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? AH.ShadersRepository : AH.ShadersRepositoryWGSL
```

#### 4. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L513-L514` → after: `L12-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/282.js#L12-L13) · [Before (L513-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/282.js#L513-L514)

```diff
-       getClassName() {
-         return "DynamicTexture"
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? AH.ShadersStore : AH.ShadersStoreWGSL
```

#### 5. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L516-L575` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/282.js#L15-L16) · [Before (L516-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/282.js#L516-L575)

```diff
-       get canRescale() {
-         return !0
-       }
-       _recreate(VV) {
-         this._canvas.width = VV.width, this._canvas.height = VV.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(VV.width, VV.height, this._generateMipMaps, this.samplingMode)
-       }
-       scale(VV) {
-         const eV = this.getSize();
-         eV.width *= VV, eV.height *= VV, this._recreate(eV)
-       }
-       scaleTo(VV, eV) {
-         const xV = this.getSize();
-         xV.width = VV, xV.height = eV, this._recreate(xV)
-       }
-       getContext() {
-         return this._context
- ... (44 more removed lines; see GitHub link above)
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? AH.IncludesShadersStore : AH.IncludesShadersStoreWGSL
```

#### 6. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L579-L581` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/282.js#L21-L23) · [Before (L579-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/282.js#L579-L581)

```diff
-   42487: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => YV
+   64110: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       postprocessVertexShader: () => hH
```

#### 7. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L583-L605` → after: `L25-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L25-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/282.js#L25-L31) · [Before (L583-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/282.js#L583-L605)

```diff
-     var JV = xV(41738);
-     class YV extends JV.f {
-       get depth() {
-         return this._depth
-       }
-       constructor(VV, eV, xV, YV, UV, yV) {
-         let pV = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
-           QV = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-           nV = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : JV.f.TRILINEAR_SAMPLINGMODE,
-           wV = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
-           ZV = arguments.length > 10 ? arguments[10] : void 0,
-           vV = arguments.length > 11 ? arguments[11] : void 0;
-         super(null, yV, !pV, QV), this.format = UV, this._texture = yV.sk().createRawTexture2DArray(VV, eV, xV, YV, UV, pV, QV, nV, null, wV, ZV ?? 0, vV), this._depth = YV, this.is2DArray = !0
-       }
-       update(VV) {
-         this.updateMipLevel(VV, 0)
- ... (7 more removed lines; see GitHub link above)
+     var AH = LH(41138);
+     const rH = "postprocessVertexShader",
+       SH = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
+     AH.c.ShadersStore[rH] || (AH.c.ShadersStore[rH] = SH);
+     const hH = {
+       name: rH,
+       shader: SH
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/283.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/283.js` (48 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e)

#### 1. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L4)

```diff
-   41466: (VV, eV, xV) => {
+   41356: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L6` → after: `L6-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L6-L12) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L6)

```diff
-       d: () => XV
+       e: () => GH,
+       f: () => XH,
+       j: () => zH,
+       m: () => YH,
+       p: () => CH,
+       q: () => tH,
+       r: () => EH
```

#### 3. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L8-L41` → after: `L14-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L14-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L14-L21) · [Before (L8-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L8-L41)

```diff
-     var JV = xV(41257),
-       YV = xV(41263),
-       UV = xV(38269),
-       yV = xV(41470),
-       pV = xV(41506),
-       QV = xV(41439),
-       nV = xV(41341);
-     let wV = (() => {
-       var VV;
-       let eV, xV, yV, pV, wV, ZV, vV, rV, kV, bV, EV, BV = [],
-         jV = [],
-         qV = [],
-         tV = [],
-         FV = [],
-         TV = [],
-         PV = [],
- ... (18 more removed lines; see GitHub link above)
+     var AH = LH(39595),
+       rH = LH(41364);
+ 
+     function SH(HH, BH, LH, AH) {
+       switch (BH) {
+         case 5120: {
+           let BH = HH.getInt8(LH);
+           return AH && (BH = Math.max(BH / 127, -1)), BH
```

#### 4. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L43-L57` → after: `L23-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L23-L25) · [Before (L43-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L43-L57)

```diff
-         attachControl(VV) {
-           VV = nV.j.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.dD(), this._engine = this._scene.sk(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
-             this._keys.length = 0
-           })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((eV => {
-             const xV = eV.event;
-             if (!xV.metaKey)
-               if (eV.type === QV.d.KEYDOWN) {
-                 if (-1 !== this.keysUp.indexOf(xV.keyCode) || -1 !== this.keysDown.indexOf(xV.keyCode) || -1 !== this.keysLeft.indexOf(xV.keyCode) || -1 !== this.keysRight.indexOf(xV.keyCode) || -1 !== this.keysUpward.indexOf(xV.keyCode) || -1 !== this.keysDownward.indexOf(xV.key … [truncated]
-                   -1 === this._keys.indexOf(xV.keyCode) && this._keys.push(xV.keyCode), VV || xV.preventDefault()
-                 }
-               } else if (-1 !== this.keysUp.indexOf(xV.keyCode) || -1 !== this.keysDown.indexOf(xV.keyCode) || -1 !== this.keysLeft.indexOf(xV.keyCode) || -1 !== this.keysRight.indexOf(xV.keyCode) || -1 !== this.keysUpward.indexOf(xV.keyCode) || -1 !== this.keysDownward.indexOf(x … [truncated]
-               const eV = this._keys.indexOf(xV.keyCode);
-               eV >= 0 && this._keys.splice(eV, 1), VV || xV.preventDefault()
-             }
-           })))
+         case 5121: {
+           let BH = HH.getUint8(LH);
+           return AH && (BH /= 255), BH
```

#### 5. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L59-L60` → after: `L27-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L27-L29) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L59-L60)

```diff
-         detachControl() {
-           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
+         case 5122: {
+           let BH = HH.getInt16(LH, !0);
+           return AH && (BH = Math.max(BH / 32767, -1)), BH
```

#### 6. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L62-L77` → after: `L31-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L31-L33) · [Before (L62-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L62-L77)

```diff
-         checkInputs() {
-           if (this._onKeyboardObserver) {
-             const VV = this.camera,
-               eV = VV.movement.input,
-               xV = eV.getEntry("keyboard", "translate"),
-               JV = eV.getEntry("keyboard", "rotate"),
-               YV = JV?.sensitivity ?? 1,
-               yV = VV._localDirection.FeV(0, 0, 0);
-             for (let UV = 0; UV < this._keys.length; UV++) {
-               const eV = this._keys[UV]; - 1 !== this.keysLeft.indexOf(eV) ? yV.x -= 1 : -1 !== this.keysUp.indexOf(eV) ? yV.z += 1 : -1 !== this.keysRight.indexOf(eV) ? yV.x += 1 : -1 !== this.keysDown.indexOf(eV) ? yV.z -= 1 : -1 !== this.keysUpward.indexOf(eV) ? yV.y += 1 : -1 … [truncated]
-             }
-             if (xV && (0 !== yV.x || 0 !== yV.y || 0 !== yV.z)) {
-               const eV = VV._computeLocalCameraSpeed() * (xV.sensitivity ?? 1);
-               yV.normalize().scaleInPlace(eV), VV.dD().useRightHandedSystem && (yV.z *= -1), VV.getViewMatrix().invertToRef(VV._cameraTransformMatrix), UV.o.TransformNormalToRef(yV, VV._cameraTransformMatrix, VV._transformedDirection), VV.cameraDirection.addInPlace(VV._transforme … [truncated]
-             }
-           }
+         case 5123: {
+           let BH = HH.getUint16(LH, !0);
+           return AH && (BH /= 65535), BH
```

#### 7. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L79-L80` → after: `L35-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L35-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L35-L107) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L79-L80)

```diff
-         getClassName() {
-           return "FreeCameraKeyboardMoveInput"
+         case 5131:
+           return (0, rH.d)(HH.getUint16(LH, !0));
+         case 5124:
+           return HH.getInt32(LH, !0);
+         case 5125:
+           return HH.getUint32(LH, !0);
+         case 5126:
+           return HH.getFloat32(LH, !0);
+         default:
+           throw new Error(`Invalid component type ${BH}`)
+       }
+     }
+ 
+     function hH(HH, BH, LH, AH, SH) {
+       switch (BH) {
+         case 5120:
+ ... (57 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L82-L83` → after: `L109-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L109-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L109-L116) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L82-L83)

```diff
-         _onLostFocus() {
-           this._keys.length = 0
+       } else {
+         const YH = ArrayBuffer.isView(HH) ? new DataView(HH.buffer, HH.byteOffset, HH.byteLength) : new DataView(HH),
+           uH = tH(rH);
+         for (let HH = 0; HH < zH; HH += AH) {
+           for (let HH = 0, LH = BH; HH < AH; HH++, LH += uH) XH[HH] = GH[HH] = SH(YH, rH, LH, CH);
+           EH(GH, HH);
+           for (let HH = 0, LH = BH; HH < AH; HH++, LH += uH) XH[HH] !== GH[HH] && hH(YH, rH, LH, CH, GH[HH]);
+           BH += LH
```

#### 9. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L85-L86` → after: `L118-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L118-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L118-L133) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L85-L86)

```diff
-         getSimpleName() {
-           return "keyboard"
+       }
+     }
+ 
+     function CH(HH, BH, LH, rH, SH, hH, CH, EH) {
+       const XH = BH * tH(LH),
+         GH = CH * BH;
+       if (5126 !== LH || SH !== XH) {
+         const AH = new Float32Array(GH);
+         return zH(HH, rH, SH, BH, LH, GH, hH, ((HH, LH) => {
+           for (let rH = 0; rH < BH; rH++) AH[LH + rH] = HH[rH]
+         })), AH
+       }
+       if (!(HH instanceof Array || HH instanceof Float32Array) || 0 !== rH || HH.length !== GH) {
+         if (HH instanceof Array) {
+           const BH = rH / 4;
+           return HH.slice(BH, BH + GH)
```

#### 10. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L88-L90` → after: `L135-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L135-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L135-L137) · [Before (L88-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L88-L90)

```diff
-         _getLocalRotation() {
-           const VV = this.camera._calculateHandednessMultiplier();
-           return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * VV
+         if (ArrayBuffer.isView(HH)) {
+           const BH = HH.byteOffset + rH;
+           return 0 !== (3 & BH) && (AH.e.Warn("Float array must be aligned to 4-bytes border"), EH = !0), EH ? new Float32Array(HH.buffer.slice(BH, BH + GH * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(HH.buffer, BH, GH)
```

#### 11. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L92-L265` → after: `L139-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L139-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L139-L178) · [Before (L92-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L92-L265)

```diff
-       }, (() => {
-         const UV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         eV = [(0, YV.J)()], xV = [(0, YV.J)()], yV = [(0, YV.J)()], pV = [(0, YV.J)()], wV = [(0, YV.J)()], ZV = [(0, YV.J)()], vV = [(0, YV.J)()], rV = [(0, YV.J)()], kV = [(0, YV.J)()], bV = [(0, YV.J)()], EV = [(0, YV.J)()], (0, JV.i)(null, null, eV, {
-           kind: "field",
-           name: "keysUp",
-           static: !1,
-           private: !1,
-           access: {
-             has: VV => "keysUp" in VV,
-             get: VV => VV.keysUp,
-             set: (VV, eV) => {
-               VV.keysUp = eV
-             }
-           },
-           metadata: UV
-         }, BV, jV), (0, JV.i)(null, null, xV, {
- ... (158 more removed lines; see GitHub link above)
+         return new Float32Array(HH, rH, GH)
+       }
+       return EH ? HH.slice() : HH
+     }
+ 
+     function EH(HH, BH, LH, rH, SH, hH, CH) {
+       const EH = tH(LH),
+         XH = function(HH) {
+           switch (HH) {
+             case 5120:
+               return Int8Array;
+             case 5121:
+               return Uint8Array;
+             case 5122:
+               return Int16Array;
+             case 5123:
+ ... (24 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L267-L304` → after: `L180-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L180-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L180-L267) · [Before (L267-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L267-L304)

```diff
-         attachControl(VV) {
-           VV = nV.j.BackCompatCameraNoPreventDefault(arguments);
-           const eV = this.camera.sk(),
-             xV = eV.getInputElement();
-           this._pointerInput || (this._pointerInput = JV => {
-             const YV = JV.event,
-               UV = "touch" === YV.pointerType;
-             if (!this.touchEnabled && UV) return;
-             if (JV.type !== vV.b.POINTERMOVE && -1 === this.buttons.indexOf(YV.button)) return;
-             const yV = YV.target;
-             if (JV.type === vV.b.POINTERDOWN) {
-               if (UV && -1 !== this._activePointerId || !UV && -1 !== this._currentActiveButton) return;
-               this._activePointerId = YV.pointerId;
-               try {
-                 yV?.setPointerCapture(YV.pointerId)
-               } catch (pV) {} - 1 === this._currentActiveButton && (this._currentActiveButton = YV.button), this._previousPosition = {
- ... (22 more removed lines; see GitHub link above)
+         return new XH(HH.slice(AH, AH + GH))
+       }
+       let YH, uH = rH;
+       ArrayBuffer.isView(HH) ? (YH = HH.buffer, uH += HH.byteOffset) : YH = HH;
+       if (uH + (hH - 1) * SH + BH * EH > YH.byteLength) throw new Error("Last accessed byte is out of bounds.");
+       const QH = BH * EH;
+       if (SH < QH) throw new Error("Byte stride cannot be smaller than the component's byte size.");
+       if (SH !== QH) {
+         const HH = new XH(GH),
+           LH = new Uint8Array(YH, uH),
+           AH = new Uint8Array(HH.buffer),
+           rH = BH * EH;
+         for (let BH = 0, tH = 0, zH = 0; BH < hH; BH++, tH += SH, zH += rH) AH.set(LH.subarray(tH, tH + rH), zH);
+         return HH
+       }
+       return 1 !== EH && 0 !== (uH & EH - 1) && (AH.e.Warn("Array must be aligned to border of element size. Data will be copied."), CH = !0), CH ? new XH(YH.slice(uH, uH + GH * EH)) : new XH(YH, uH, GH)
+ ... (72 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L306-L313` → after: `L269-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L269-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L269-L271) · [Before (L306-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L306-L313)

```diff
-           }), this._onMouseMove = xV => {
-             if (!eV.isPointerLock) return;
-             const JV = this.camera._calculateHandednessMultiplier();
-             this._applyPointerRotation(xV.movementX * JV, xV.movementY * JV), this._previousPosition = null, VV || xV.preventDefault()
-           }, this._observer = this.camera.dD()._inputManager._addCameraPointerObserver(this._pointerInput, vV.b.POINTERDOWN | vV.b.POINTERUP | vV.b.POINTERMOVE), xV && (this._contextMenuBind = VV => this.onContextMenu(VV), xV.addEventListener("contextmenu", this._contextMenuBind, … [truncated]
-         }
-         onContextMenu(VV) {
-           VV.preventDefault()
+             BH.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (BH.lookForClosingBracketForUniformBuffer = !1, rH.endOfUniformBufferProcessor && (LH = rH.endOfUniformBufferProcessor(this.line, BH.isFragment, BH.processingContext)))
+           }
+           AH += LH + "\n"
```

#### 14. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L315-L319` → after: `L273-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L273-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L273-L308) · [Before (L315-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L315-L319)

```diff
-         detachControl() {
-           if (this._observer) {
-             if (this.camera.dD()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
-               const VV = this.camera.sk().getInputElement();
-               VV && VV.removeEventListener("contextmenu", this._contextMenuBind)
+         for (const rH of this.children) AH += rH.process(HH, BH, LH);
+         return this.additionalDefineKey && (HH[this.additionalDefineKey] = this.additionalDefineValue || "true", LH[this.additionalDefineKey] = HH[this.additionalDefineKey]), AH
+       }
+     }
+     class rH {
+       constructor() {
+         this._lines = []
+       }
+       get currentLine() {
+         return this._lines[this.lineIndex]
+       }
+       get canRead() {
+         return this.lineIndex < this._lines.length - 1
+       }
+       set lines(HH) {
+         this._lines.length = 0;
+ ... (20 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L325-L329` → after: `L312-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L312-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L312-L318) · [Before (L325-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L325-L329)

```diff
-         getClassName() {
-           return "FreeCameraMouseInput"
-         }
-         getSimpleName() {
-           return "mouse"
+       }
+     }
+     class SH extends AH {
+       process(HH, BH, LH) {
+         for (let AH = 0; AH < this.children.length; AH++) {
+           const rH = this.children[AH];
+           if (rH.isValid(HH)) return rH.process(HH, BH, LH)
```

#### 16. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L331-L343` → after: `L320-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L320-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L320-L349) · [Before (L331-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L331-L343)

```diff
-       }, (() => {
-         const nV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         eV = [(0, YV.J)()], xV = [(0, YV.J)()], (0, JV.i)(null, null, eV, {
-           kind: "field",
-           name: "buttons",
-           static: !1,
-           private: !1,
-           access: {
-             has: VV => "buttons" in VV,
-             get: VV => VV.buttons,
-             set: (VV, eV) => {
-               VV.buttons = eV
-             }
+         return ""
+       }
+     }
+     class hH extends AH {
+       isValid(HH) {
+         return this.testExpression.isTrue(HH)
+       }
+     }
+     class tH {
+       isTrue(HH) {
+         return !0
+       }
+       static postfixToInfix(HH) {
+         const BH = [];
+         for (const LH of HH)
+           if (void 0 === tH._OperatorPriority[LH]) BH.push(LH);
+ ... (14 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L345-L356` → after: `L351-L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L351-L352) · [Before (L345-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L345-L356)

```diff
-           metadata: nV
-         }, UV, yV), (0, JV.i)(null, null, xV, {
-           kind: "field",
-           name: "angularSensibility",
-           static: !1,
-           private: !1,
-           access: {
-             has: VV => "angularSensibility" in VV,
-             get: VV => VV.angularSensibility,
-             set: (VV, eV) => {
-               VV.angularSensibility = eV
-             }
+           SH = HH => {
+             AH < tH._Stack.length - 1 && (tH._Stack[++AH] = HH)
```

#### 18. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L358-L379` → after: `L354-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L354-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L354-L369) · [Before (L358-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L358-L379)

```diff
-           metadata: nV
-         }, pV, QV), nV && Object.defineProperty(VV, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: nV
-         })
-       })(), VV
-     })();
-     pV.b.FreeCameraMouseInput = rV;
-     var kV = xV(41445);
-     let bV = (() => {
-       var VV;
-       let eV, xV, UV, yV = [],
-         pV = [],
-         QV = [],
- ... (6 more removed lines; see GitHub link above)
+           hH = () => tH._Stack[AH],
+           zH = () => -1 === AH ? "!!INVALID EXPRESSION!!" : tH._Stack[AH--];
+         let CH = 0,
+           EH = "";
+         for (; CH < HH.length;) {
+           const BH = HH.charAt(CH),
+             XH = CH < HH.length - 1 ? HH.substring(CH, 2 + CH) : "";
+           if ("(" === BH) EH = "", SH(BH);
+           else if (")" === BH) {
+             for (rH(); - 1 !== AH && "(" !== hH();) LH.push(zH());
+             zH()
+           } else if (tH._OperatorPriority[XH] > 1) {
+             for (rH(); - 1 !== AH && tH._OperatorPriority[hH()] >= tH._OperatorPriority[XH];) LH.push(zH());
+             SH(XH), CH++
+           } else EH += BH;
+           CH++
```

#### 19. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L381-L390` → after: `L371-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L371-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L371-L437) · [Before (L381-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L381-L390)

```diff
-         attachControl(VV) {
-           VV = nV.j.BackCompatCameraNoPreventDefault(arguments), this._wheel = eV => {
-             if (eV.type !== vV.b.POINTERWHEEL) return;
-             const xV = eV.event,
-               JV = xV.deltaMode === kV.b.DOM_DELTA_LINE ? this._ffMultiplier : 1;
-             this._wheelDeltaX += this.wheelPrecisionX * JV * xV.deltaX / this._normalize, this._wheelDeltaY -= this.wheelPrecisionY * JV * xV.deltaY / this._normalize, this._wheelDeltaZ += this.wheelPrecisionZ * JV * xV.deltaZ / this._normalize, xV.preventDefault && (VV || xV.pre … [truncated]
-           }, this._observer = this.camera.dD()._inputManager._addCameraPointerObserver(this._wheel, vV.b.POINTERWHEEL)
-         }
-         detachControl() {
-           this._observer && (this.camera.dD()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
+         for (rH(); - 1 !== AH;) "(" === hH() ? zH() : LH.push(zH());
+         return tH._InfixToPostfixCache.size >= tH.InfixToPostfixCacheLimitSize && tH.ClearCache(), tH._InfixToPostfixCache.set(HH, {
+           result: LH,
+           accessTime: Date.now()
+         }), LH
+       }
+       static ClearCache() {
+         const HH = Array.from(tH._InfixToPostfixCache.entries()).sort(((HH, BH) => HH[1].accessTime - BH[1].accessTime));
+         for (let BH = 0; BH < tH.InfixToPostfixCacheCleanupSize; BH++) tH._InfixToPostfixCache.delete(HH[BH][0])
+       }
+     }
+     tH.InfixToPostfixCacheLimitSize = 5e4, tH.InfixToPostfixCacheCleanupSize = 25e3, tH._InfixToPostfixCache = new Map, tH._OperatorPriority = {
+       ")": 0,
+       "(": 1,
+       "||": 2,
+       "&&": 3
+ ... (51 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L392-L397` → after: `L439-L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L439-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L439-L518) · [Before (L392-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L392-L397)

```diff
-         checkInputs() {
-           this.onChangedObservable.notifyObservers({
-             wheelDeltaX: this._wheelDeltaX,
-             wheelDeltaY: this._wheelDeltaY,
-             wheelDeltaZ: this._wheelDeltaZ
-           }), this._wheelDeltaX = 0, this._wheelDeltaY = 0, this._wheelDeltaZ = 0
+         return BH
+       }
+     }
+     var GH = LH(41169),
+       YH = LH(41164);
+     const uH = /defined\s*?\((.+?)\)/g,
+       QH = /defined\s*?\[(.+?)\]/g,
+       WH = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
+       MH = /__decl__/,
+       xH = /light\{X\}.(\w*)/g,
+       vH = /\{X\}/g,
+       PH = [],
+       TH = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;
+ 
+     function UH(HH) {
+       HH.processor && HH.processor.initializeShaders && HH.processor.initializeShaders(HH.processingContext)
+ ... (64 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L399-L400` → after: `L520-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L520-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L520-L532) · [Before (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L399-L400)

```diff
-         getClassName() {
-           return "BaseCameraMouseWheelInput"
+         let AH = LH[LH.length - 1];
+         return "string" === typeof AH && (AH = AH.replace(QH, "defined($1)")), "string" === typeof AH ? bH(AH) : AH
+       }(rH), LH
+     }
+ 
+     function mH(HH, BH, LH, rH) {
+       let SH;
+       for (; oH(HH, LH, rH);) {
+         SH = HH.currentLine;
+         const hH = SH.substring(0, 5).toLowerCase();
+         if ("#else" === hH) {
+           const LH = new AH;
+           return BH.children.push(LH), void oH(HH, LH, rH)
```

#### 22. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L402-L403` → after: `L534-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L534-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L534-L536) · [Before (L402-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L402-L403)

```diff
-         getSimpleName() {
-           return "mousewheel"
+         if ("#elif" === hH) {
+           const HH = kH(SH, 5);
+           BH.children.push(HH), LH = HH
```

#### 23. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L405-L442` → after: `L538-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L538-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L538-L573) · [Before (L405-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L405-L442)

```diff
-       }, (() => {
-         const nV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         eV = [(0, YV.J)()], xV = [(0, YV.J)()], UV = [(0, YV.J)()], (0, JV.i)(null, null, eV, {
-           kind: "field",
-           name: "wheelPrecisionX",
-           static: !1,
-           private: !1,
-           access: {
-             has: VV => "wheelPrecisionX" in VV,
-             get: VV => VV.wheelPrecisionX,
-             set: (VV, eV) => {
-               VV.wheelPrecisionX = eV
-             }
-           },
-           metadata: nV
-         }, yV, pV), (0, JV.i)(null, null, xV, {
- ... (22 more removed lines; see GitHub link above)
+       }
+     }
+ 
+     function oH(HH, BH, LH) {
+       for (; HH.canRead;) {
+         HH.lineIndex++;
+         const rH = HH.currentLine;
+         if (rH.indexOf("#") >= 0) {
+           const AH = TH.exec(rH);
+           if (AH && AH.length) {
+             switch (AH[0]) {
+               case "#ifdef": {
+                 const AH = new SH;
+                 BH.children.push(AH);
+                 const hH = kH(rH, 6);
+                 AH.children.push(hH), mH(HH, AH, hH, LH);
+ ... (20 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L444-L491` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L575-L576) · [Before (L444-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L444-L491)

```diff
-           },
-           metadata: nV
-         }, rV, bV), nV && Object.defineProperty(VV, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: nV
-         })
-       })(), VV
-     })();
-     var EV;
-     ! function(VV) {
-       VV[VV.MoveRelative = 0] = "MoveRelative", VV[VV.RotateRelative = 1] = "RotateRelative", VV[VV.MoveScene = 2] = "MoveScene"
-     }(EV || (EV = {}));
-     let BV = (() => {
-       var VV;
- ... (32 more removed lines; see GitHub link above)
+             continue
+           }
```

#### 25. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L493-L494` → after: `L578-L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L578-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L578-L581) · [Before (L493-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L493-L494)

```diff
-         set wheelYRotateRelative(VV) {
-           null === VV && this._wheelYAction !== EV.RotateRelative || (this._wheelYAction = EV.RotateRelative, this._wheelYActionCoordinate = VV)
+         const hH = new AH;
+         if (hH.line = rH, BH.children.push(hH), "#" === rH[0] && "d" === rH[1]) {
+           const HH = rH.replace(";", "").split(" ");
+           hH.additionalDefineKey = HH[1], 3 === HH.length && (hH.additionalDefineValue = HH[2])
```

#### 26. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L496-L497` → after: `L583-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L583-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L583-L642) · [Before (L496-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L496-L497)

```diff
-         get wheelYRotateRelative() {
-           return this._wheelYAction !== EV.RotateRelative ? null : this._wheelYActionCoordinate
+       }
+       return !1
+     }
+ 
+     function IH(HH, BH, LH, SH) {
+       const hH = new AH,
+         tH = new rH;
+       return tH.lineIndex = -1, tH.lines = HH.split("\n"), oH(tH, hH, SH), hH.process(BH, LH, SH)
+     }
+ 
+     function fH(HH, BH) {
+       const LH = HH.defines,
+         AH = {};
+       for (const rH of LH) {
+         const HH = rH.replace("#define", "").replace(";", "").trim().split(" ");
+         AH[HH[0]] = HH.length > 1 ? HH[1] : ""
+ ... (44 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L499-L500` → after: `L644-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L644-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L644-L690) · [Before (L499-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L499-L500)

```diff
-         set wheelZRotateRelative(VV) {
-           null === VV && this._wheelZAction !== EV.RotateRelative || (this._wheelZAction = EV.RotateRelative, this._wheelZActionCoordinate = VV)
+       }
+       PH.length = 0;
+       const hH = rH.join("");
+       SH ? lH(hH.toString(), BH, LH) : LH(hH)
+     }
+     const KH = {
+       loadFile: (HH, BH, LH, AH, rH, SH) => {
+         throw (0, GH.i)("FileTools")
+       }
+     }
+   },
+   41164: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => rH,
+       c: () => SH,
+       f: () => tH,
+ ... (31 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L502-L503` → after: `L692-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L692-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L692-L694) · [Before (L502-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L502-L503)

```diff
-         get wheelZRotateRelative() {
-           return this._wheelZAction !== EV.RotateRelative ? null : this._wheelZActionCoordinate
+         case 0: {
+           const HH = new Uint8Array(BH);
+           return AH && HH.set(new Uint8Array(AH)), HH
```

#### 29. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L505-L506` → after: `L696-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L696-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L696-L698) · [Before (L505-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L505-L506)

```diff
-         set wheelXMoveScene(VV) {
-           null === VV && this._wheelXAction !== EV.MoveScene || (this._wheelXAction = EV.MoveScene, this._wheelXActionCoordinate = VV)
+         case 4: {
+           const HH = "number" !== typeof BH ? new Int16Array(BH) : new Int16Array(LH ? BH / 2 : BH);
+           return AH && HH.set(new Int16Array(AH)), HH
```

#### 30. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L508-L509` → after: `L700-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L700-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L700-L706) · [Before (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L508-L509)

```diff
-         get wheelXMoveScene() {
-           return this._wheelXAction !== EV.MoveScene ? null : this._wheelXActionCoordinate
+         case 5:
+         case 8:
+         case 9:
+         case 10:
+         case 2: {
+           const HH = "number" !== typeof BH ? new Uint16Array(BH) : new Uint16Array(LH ? BH / 2 : BH);
+           return AH && HH.set(new Uint16Array(AH)), HH
```

#### 31. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L511-L512` → after: `L708-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L708-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L708-L710) · [Before (L511-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L511-L512)

```diff
-         set wheelYMoveScene(VV) {
-           null === VV && this._wheelYAction !== EV.MoveScene || (this._wheelYAction = EV.MoveScene, this._wheelYActionCoordinate = VV)
+         case 6: {
+           const HH = "number" !== typeof BH ? new Int32Array(BH) : new Int32Array(LH ? BH / 4 : BH);
+           return AH && HH.set(new Int32Array(AH)), HH
```

#### 32. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L514-L515` → after: `L712-L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L712-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L712-L719) · [Before (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L514-L515)

```diff
-         get wheelYMoveScene() {
-           return this._wheelYAction !== EV.MoveScene ? null : this._wheelYActionCoordinate
+         case 7:
+         case 11:
+         case 12:
+         case 13:
+         case 14:
+         case 15: {
+           const HH = "number" !== typeof BH ? new Uint32Array(BH) : new Uint32Array(LH ? BH / 4 : BH);
+           return AH && HH.set(new Uint32Array(AH)), HH
```

#### 33. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L517-L518` → after: `L721-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L721-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L721-L723) · [Before (L517-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L517-L518)

```diff
-         set wheelZMoveScene(VV) {
-           null === VV && this._wheelZAction !== EV.MoveScene || (this._wheelZAction = EV.MoveScene, this._wheelZActionCoordinate = VV)
+         case 1: {
+           const HH = "number" !== typeof BH ? new Float32Array(BH) : new Float32Array(LH ? BH / 4 : BH);
+           return AH && HH.set(new Float32Array(AH)), HH
```

#### 34. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L520-L521` → after: `L725-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L725-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L725-L751) · [Before (L520-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L520-L521)

```diff
-         get wheelZMoveScene() {
-           return this._wheelZAction !== EV.MoveScene ? null : this._wheelZActionCoordinate
+       }
+       const rH = new Uint8Array(BH);
+       return AH && rH.set(new Uint8Array(AH)), rH
+     }
+   },
+   41169: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => CH,
+       e: () => EH,
+       f: () => zH,
+       i: () => rH
+     });
+     const AH = {};
+ 
+     function rH(HH) {
+       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !AH[HH]) return AH[HH] = !0, `${HH} needs to be imported before as it contains a side-effect required by your code.`
+ ... (11 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L523-L529` → after: `L753-L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L753-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L753-L914) · [Before (L523-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L523-L529)

```diff
-         checkInputs() {
-           if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
-           this._moveRelative.HVV(0), this._rotateRelative.HVV(0), this._moveScene.HVV(0), this._updateCamera(), this.camera.dD().useRightHandedSystem && (this._moveRelative.z *= -1);
-           const VV = UV.d.Zero();
-           this.camera.getViewMatrix().invertToRef(VV);
-           const eV = UV.o.Zero();
-           UV.o.TransformNormalToRef(this._moveRelative, VV, eV), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(eV), this.camera.cameraDirection.addInPlace(this._mo … [truncated]
+       };
+       return AH.__isSideEffectStub = !0, AH
+     }
+ 
+     function CH(HH) {
+       return !!HH && !HH.__isSideEffectStub
+     }
+ 
+     function EH(HH, BH) {
+       return {
+         get() {},
+         set(HH) {
+           Object.defineProperty(this, BH, {
+             value: HH,
+             writable: !0,
+             configurable: !0,
+ ... (146 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L531-L532` → after: `L916-L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L916-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L916-L949) · [Before (L531-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L531-L532)

```diff
-         _updateCamera() {
-           this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._whee … [truncated]
+         let GH = !1;
+         if (HH instanceof ArrayBuffer || ArrayBuffer.isView(HH))
+           if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
+             let BH;
+             BH = HH instanceof ArrayBuffer ? HH : (0, uH.m)(HH), SH = URL.createObjectURL(new Blob([BH], {
+               type: tH
+             })), GH = !0
+           } else SH = `data:${tH};base64,` + (0, zH.f)(HH);
+         else HH instanceof Blob ? (SH = URL.createObjectURL(HH), GH = !0) : (SH = vH.CleanUrl(HH), SH = vH.PreprocessUrl(SH));
+         const YH = BH => {
+           if (LH) {
+             const AH = SH || HH.toString();
+             LH(`Error while trying to load image: ${0===AH.indexOf("http")||AH.length<=128?AH:AH.slice(0,128)+"..."}`, BH)
+           }
+         };
+         if (XH?._features.forceBitmapOverHTMLImageElement) return OH(SH, (AH => {
+ ... (18 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L534-L546` → after: `L951-L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L951-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L951-L961) · [Before (L534-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L534-L546)

```diff
-         _updateCameraProperty(VV, eV, xV) {
-           if (0 === VV) return;
-           if (null === eV || null === xV) return;
-           let JV = null;
-           switch (eV) {
-             case EV.MoveRelative:
-               JV = this._moveRelative;
-               break;
-             case EV.RotateRelative:
-               JV = this._rotateRelative;
-               break;
-             case EV.MoveScene:
-               JV = this._moveScene
+         PH(SH, QH);
+         const WH = [],
+           MH = () => {
+             for (const HH of WH) HH.target.removeEventListener(HH.name, HH.handler);
+             WH.length = 0
+           };
+         WH.push({
+           target: QH,
+           name: "load",
+           handler: () => {
+             MH(), BH(QH), GH && QH.src && URL.revokeObjectURL(QH.src)
```

#### 38. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L548-L556` → after: `L963-L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L963-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L963-L967) · [Before (L548-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L548-L556)

```diff
-           switch (xV) {
-             case 0:
-               JV.set(VV, 0, 0);
-               break;
-             case 1:
-               JV.set(0, VV, 0);
-               break;
-             case 2:
-               JV.set(0, 0, VV)
+         }), WH.push({
+           target: QH,
+           name: "error",
+           handler: HH => {
+             MH(), YH(HH), GH && QH.src && URL.revokeObjectURL(QH.src)
```

#### 39. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L558-L666` → after: `L969-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L969-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L969-L992) · [Before (L558-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L558-L666)

```diff
-         }
-       }, (() => {
-         const UV = "function" === typeof Symbol && Symbol.metadata ? Object.create(rV[Symbol.metadata] ?? null) : void 0;
-         eV = [(0, YV.J)()], xV = [(0, YV.J)()], yV = [(0, YV.J)()], pV = [(0, YV.J)()], QV = [(0, YV.J)()], nV = [(0, YV.J)()], wV = [(0, YV.J)()], ZV = [(0, YV.J)()], vV = [(0, YV.J)()], (0, JV.i)(VV, null, eV, {
-           kind: "setter",
-           name: "wheelXMoveRelative",
-           static: !1,
-           private: !1,
-           access: {
-             has: VV => "wheelXMoveRelative" in VV,
-             set: (VV, eV) => {
-               VV.wheelXMoveRelative = eV
-             }
-           },
-           metadata: UV
-         }, null, kV), (0, JV.i)(VV, null, xV, {
- ... (93 more removed lines; see GitHub link above)
+         }), WH.push({
+           target: document,
+           name: "securitypolicyviolation",
+           handler: HH => {
+             if (HH.blockedURI !== QH.src || "XX" === HH.disposition) return;
+             MH();
+             const BH = new Error(`CSP violation of policy ${HH.effectiveDirective} ${HH.blockedURI}. Current policy is ${HH.originalPolicy}`);
+             CH.d.UseFallbackTexture = !1, YH(BH), GH && QH.src && URL.revokeObjectURL(QH.src), QH.src = ""
+           }
+         }), (() => {
+           for (const HH of WH) HH.target.addEventListener(HH.name, HH.handler)
+         })();
+         const xH = "blob:" === SH.substring(0, 5),
+           UH = "data:" === SH.substring(0, 5),
+           VH = () => {
+             xH || UH || !AH.d.IsCustomRequestAvailable ? QH.src = SH : OH(SH, ((HH, BH, LH) => {
+ ... (8 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L668-L713` → after: `L994-L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L994-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L994-L1011) · [Before (L668-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L668-L713)

```diff
-           metadata: UV
-         }, null, kV), UV && Object.defineProperty(VV, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: UV
-         })
-       })(), VV
-     })();
-     pV.b.FreeCameraMouseWheelInput = BV;
-     let jV = (() => {
-       var VV;
-       let eV, xV, yV = [],
-         pV = [],
-         QV = [],
-         wV = [];
- ... (30 more removed lines; see GitHub link above)
+           bH = () => {
+             rH && rH.loadImage(SH, QH)
+           };
+         if (!xH && !UH && rH && rH.enableTexturesOffline) rH.open(bH, VH);
+         else {
+           if (-1 !== SH.indexOf("file:")) {
+             const HH = decodeURIComponent(SH.substring(5).toLowerCase());
+             if (hH.FilesToLoad[HH] && "undefined" !== typeof URL) {
+               try {
+                 let BH;
+                 try {
+                   BH = URL.createObjectURL(hH.FilesToLoad[HH])
+                 } catch (kH) {
+                   BH = URL.createObjectURL(hH.FilesToLoad[HH])
+                 }
+                 QH.src = BH, GH = !0
+ ... (2 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L715-L724` → after: `L1013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L1013) · [Before (L715-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L715-L724)

```diff
-             }), this._observer = this.camera.dD()._inputManager._addCameraPointerObserver(this._pointerInput, vV.b.POINTERDOWN | vV.b.POINTERUP | vV.b.POINTERMOVE), this._onLostFocus) {
-             const VV = this.camera.sk().getInputElement();
-             VV && VV.addEventListener("blur", this._onLostFocus)
-           }
-         }
-         detachControl() {
-           if (this._pointerInput) {
-             if (this._observer && (this.camera.dD()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
-               const VV = this.camera.sk().getInputElement();
-               VV && VV.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
+               return QH
```

#### 42. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L729-L746` → after: `L1018-L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1018-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L1018-L1056) · [Before (L729-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L729-L746)

```diff
-         checkInputs() {
-           if (null === this._offsetX || null === this._offsetY) return;
-           if (0 === this._offsetX && 0 === this._offsetY) return;
-           const VV = this.camera,
-             eV = VV.movement.input,
-             xV = eV.getEntry("touch", "rotate"),
-             JV = eV.getEntry("touch", "translate"),
-             YV = VV._calculateHandednessMultiplier(),
-             yV = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
-           if (xV) {
-             const eV = xV.sensitivity ?? 1 / this.touchAngularSensibility;
-             VV.cameraRotation.y = this._offsetX * YV * eV, yV && (VV.cameraRotation.x = -this._offsetY * YV * eV)
-           }
-           if (!yV && JV) {
-             const eV = VV._computeLocalCameraSpeed(),
-               xV = JV.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
- ... (2 more removed lines; see GitHub link above)
+         return QH
+       },
+       VH = (HH, BH, LH, AH, rH) => {
+         const hH = new FileReader,
+           tH = {
+             onCompleteObservable: new SH.d,
+             abort: () => hH.abort()
+           };
+         return hH.onloadend = () => tH.onCompleteObservable.notifyObservers(tH), rH && (hH.onerror = () => {
+           rH(new xH(`Unable to read ${HH.name}`, HH))
+         }), hH.onload = HH => {
+           BH(HH.target.result)
+         }, LH && (hH.onprogress = LH), AH ? hH.readAsArrayBuffer(HH) : hH.readAsText(HH), tH
+       },
+       OH = (HH, BH, LH, AH, rH, zH, CH) => {
+         if (HH.name) return VH(HH, BH, LH, rH, zH ? HH => {
+ ... (23 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L749-L750` → after: `L1062-L1168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1062-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L1062-L1168) · [Before (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L749-L750)

```diff
-         getClassName() {
-           return "FreeCameraTouchInput"
+         return bH(EH, ((HH, LH) => {
+           BH(HH, LH?.responseURL, LH?.getResponseHeader("content-type"))
+         }), LH, AH, rH, zH ? HH => {
+           zH(HH.request, new WH(HH.message, HH.request))
+         } : void 0, CH)
+       },
+       bH = (HH, BH, LH, hH, tH, zH, EH) => {
+         null !== hH && (hH ?? (hH = CH.d.LastCreatedScene?.offlineProvider)), HH = vH.CleanUrl(HH), HH = vH.PreprocessUrl(HH);
+         const XH = vH.BaseUrl + HH;
+         let YH = !1;
+         const uH = {
+             onCompleteObservable: new SH.d,
+             abort: () => YH = !0
+           },
+           QH = () => {
+             let HH, SH = new AH.d,
+ ... (91 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L752-L753` → after: `L1170-L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1170-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L1170-L1181) · [Before (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L752-L753)

```diff
-         getSimpleName() {
-           return "touch"
+       },
+       mH = () => "undefined" !== typeof location && "file:" === location.protocol,
+       oH = HH => QH.test(HH),
+       IH = HH => {
+         const BH = QH.exec(HH);
+         if (null === BH || 0 === BH.length) return {
+           match: !1,
+           type: ""
+         };
+         return {
+           match: !0,
+           type: BH[0].replace("data:", "").replace(";base64,", "")
```

#### 45. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L755-L831` → after: `L1183-L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1183-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L1183-L1334) · [Before (L755-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L755-L831)

```diff
-       }, (() => {
-         const UV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         eV = [(0, YV.J)()], xV = [(0, YV.J)()], (0, JV.i)(null, null, eV, {
-           kind: "field",
-           name: "touchAngularSensibility",
-           static: !1,
-           private: !1,
-           access: {
-             has: VV => "touchAngularSensibility" in VV,
-             get: VV => VV.touchAngularSensibility,
-             set: (VV, eV) => {
-               VV.touchAngularSensibility = eV
-             }
-           },
-           metadata: UV
-         }, yV, pV), (0, JV.i)(null, null, xV, {
- ... (61 more removed lines; see GitHub link above)
+       };
+ 
+     function fH(HH) {
+       return (0, zH.b)(HH.split(",")[1])
+     }
+     const lH = HH => (0, zH.d)(HH.split(",")[1]);
+     let KH;
+     const cH = (HH, BH, LH, AH, rH, SH, hH, tH, zH, CH) => {
+       KH = {
+         DecodeBase64UrlToBinary: HH,
+         DecodeBase64UrlToString: BH,
+         DefaultRetryStrategy: LH.DefaultRetryStrategy,
+         BaseUrl: LH.BaseUrl,
+         CorsBehavior: LH.CorsBehavior,
+         PreprocessUrl: LH.PreprocessUrl,
+         IsBase64DataUrl: AH,
+ ... (136 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L833-L968` → after: `L1336-L1391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1336-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L1336-L1391) · [Before (L833-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L833-L968)

```diff
-         return VV = class extends wV {
-           get angularSensibility() {
-             const VV = this.inputs.attached.mouse;
-             return VV ? VV.angularSensibility : 0
-           }
-           set angularSensibility(VV) {
-             const eV = this.inputs.attached.mouse;
-             eV && (eV.angularSensibility = VV)
-           }
-           get keysUp() {
-             const VV = this.inputs.attached.keyboard;
-             return VV ? VV.keysUp : []
-           }
-           set keysUp(VV) {
-             const eV = this.inputs.attached.keyboard;
-             eV && (eV.keysUp = VV)
- ... (120 more removed lines; see GitHub link above)
+           for (const BH of HH) BH()
+         }), 1), AH.push(HH)
+       }
+     }
+ 
+     function SH(HH, BH, LH) {
+       try {
+         if (HH()) return BH(), !0
+       } catch (AH) {
+         return LH?.(AH), !0
+       }
+       return !1
+     }
+     const hH = function(HH, BH, LH) {
+       let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
+         rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
+ ... (40 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L970-L1028` → after: `L1393-L1415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1393-L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L1393-L1415) · [Before (L970-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L970-L1028)

```diff
-         }, (() => {
-           const UV = "function" === typeof Symbol && Symbol.metadata ? Object.create(wV[Symbol.metadata] ?? null) : void 0;
-           eV = [(0, YV.I)()], xV = [(0, YV.I)()], pV = [(0, YV.J)()], QV = [(0, YV.J)()], (0, JV.i)(null, null, eV, {
-             kind: "field",
-             name: "ellipsoid",
-             static: !1,
-             private: !1,
-             access: {
-               has: VV => "ellipsoid" in VV,
-               get: VV => VV.ellipsoid,
-               set: (VV, eV) => {
-                 VV.ellipsoid = eV
-               }
-             },
-             metadata: UV
-           }, ZV, vV), (0, JV.i)(null, null, xV, {
- ... (43 more removed lines; see GitHub link above)
+         };
+         for (const rH of AH.CustomRequestModifiers) {
+           if (AH._ShouldSkipRequestModifications(HH)) break;
+           const BH = rH(LH, HH);
+           "string" === typeof BH && (HH = BH)
+         }
+         return {
+           url: HH,
+           headers: BH
+         }
+       }
+       static async FetchAsync(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         const LH = BH.method ?? "GET";
+         if ("undefined" !== typeof fetch) {
+           const {
+ ... (7 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L1030-L1033` → after: `L1417-L1508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR1417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L1417-L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/283.js#L1417-L1508) · [Before (L1030-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/283.js#L1030-L1033)

```diff
-         })(), VV
-       })(),
-       MV = !1;
-     MV || (MV = !0, (0, NV.d)("BABYLON.FreeCamera", XV))
+         }
+         return await new Promise(((rH, SH) => {
+           const hH = new AH;
+           hH.responseType = "arraybuffer", hH.addEventListener("readystatechange", (() => {
+             if (4 === hH.readyState)
+               if (hH.status >= 200 && hH.status < 300) {
+                 const HH = "undefined" !== typeof Headers ? new Headers : void 0,
+                   BH = hH.getResponseHeader("Content-Type");
+                 BH && HH && HH.set("Content-Type", BH), "undefined" !== typeof Response ? rH(new Response(hH.response, {
+                   status: hH.status,
+                   statusText: hH.statusText,
+                   headers: HH
+                 })) : rH({
+                   ok: !0,
+                   status: hH.status,
+                   statusText: hH.statusText,
+ ... (76 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/284.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/284.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887)

#### 1. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/284.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/284.js#L4)

```diff
-   41521: (VV, eV, xV) => {
+   41392: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/284.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/284.js#L6)

```diff
-       d: () => vV
+       c: () => SH
```

#### 3. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L8-L476` → after: `L8-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L8-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/284.js#L8-L22) · [Before (L8-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/284.js#L8-L476)

```diff
-     var JV = xV(41257),
-       YV = xV(41263),
-       UV = xV(38269),
-       yV = xV(38389),
-       pV = xV(41486),
-       QV = xV(41383),
-       nV = xV(38318),
-       wV = xV(41458),
-       ZV = xV(41279);
-     let vV = (() => {
-       var VV, eV;
-       let xV, vV, rV, kV, bV, EV, BV, jV, qV, tV, FV, TV, PV, AV = pV.e,
-         NV = [],
-         XV = [],
-         MV = [],
-         zV = [],
- ... (453 more removed lines; see GitHub link above)
+     var AH = LH(39595),
+       rH = LH(38012);
+     class SH {
+       static Instantiate(HH) {
+         if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[HH]) return this.RegisteredExternalClasses[HH];
+         const BH = (0, rH.b)(HH);
+         if (BH) return BH;
+         AH.e.Warn(HH + " not found, you may have missed an import.");
+         const LH = HH.split(".");
+         let SH = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
+         for (let AH = 0, rH = LH.length; AH < rH; AH++) SH = SH[LH[AH]];
+         return "function" !== typeof SH ? null : SH
+       }
+     }
+     SH.RegisteredExternalClasses = {}
```

#### 4. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L478` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/284.js#L24) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/284.js#L478)

```diff
-   41486: (VV, eV, xV) => {
+   41190: (HH, BH, LH) => {
```

#### 5. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L482-L488` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/284.js#L28) · [Before (L482-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/284.js#L482-L488)

```diff
-     var JV = xV(41257),
-       YV = xV(38269),
-       UV = xV(41263),
-       yV = xV(38296),
-       pV = xV(38287),
-       QV = xV(41138),
-       nV = xV(41279);
+     var AH = LH(41154);
```

#### 6. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L490-L491` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/284.js#L30-L31) · [Before (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/284.js#L490-L491)

```diff
-       constructor() {
-         this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new yV.c, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedO … [truncated]
+       static get Now() {
+         return (0, AH.k)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
```

#### 7. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L494-L668` → after: `L34-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L34-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/284.js#L34-L243) · [Before (L494-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/284.js#L494-L668)

```diff
-     let ZV = (() => {
-       var VV;
-       let eV, xV, ZV, vV, rV, kV = [],
-         bV = [],
-         EV = [],
-         BV = [],
-         jV = [],
-         qV = [],
-         tV = [],
-         FV = [],
-         TV = [],
-         PV = [];
-       return VV = class {
-         static AddNodeConstructor(VV, eV) {
-           this._NodeConstructors[VV] = eV
-         }
- ... (159 more removed lines; see GitHub link above)
+   },
+   41222: (HH, BH, LH) => {
+     function AH(HH) {
+       let BH = 1;
+       do {
+         BH *= 2
+       } while (BH < HH);
+       return BH === HH
+     }
+ 
+     function rH(HH, BH, LH) {
+       return HH * (1 - LH) + BH * LH
+     }
+ 
+     function SH(HH) {
+       const BH = hH(HH),
+ ... (194 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L670-L676` → after: `L245-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L245-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/284.js#L245-L269) · [Before (L670-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/284.js#L670-L676)

```diff
-         pW(VV) {
-           if (this._nodeDataStorage._isEnabled === VV) return;
-           const eV = this._hasEffectiveEnabledStateObservers(),
-             xV = eV ? this.isEnabled() : null;
-           if (this._nodeDataStorage._isEnabled = VV, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(VV), eV) {
-             const VV = this.isEnabled();
-             VV !== xV && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(VV)
+         return HH
+       }
+       static GetBabylonScriptURL(HH, BH) {
+         if (!HH) return "";
+         if (HH.startsWith(AH._DefaultCdnUrl))
+           if (AH.ScriptBaseUrl) {
+             const BH = AH.ScriptBaseUrl.endsWith("/") ? AH.ScriptBaseUrl.slice(0, -1) : AH.ScriptBaseUrl;
+             HH = HH.replace(AH._DefaultCdnUrl, BH)
+           } else if (AH._CdnVersion) {
+           const BH = `${AH._DefaultCdnUrl}/v${AH._CdnVersion}`;
+           HH.startsWith(BH) || (HH = HH.replace(AH._DefaultCdnUrl, BH))
+         }
+         return HH = AH.ScriptPreprocessUrl(HH), BH && !AH.IsAbsoluteUrl(HH) && (HH = AH.GetAbsoluteUrl(HH)), HH
+       }
+       static LoadBabylonScript(HH, BH, LH, rH) {
+         HH = AH.GetBabylonScriptURL(HH), AH.LoadScript(HH, BH, LH)
+ ... (9 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L678-L688` → after: `L271-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L271-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/284.js#L271-L275) · [Before (L678-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/284.js#L678-L688)

```diff
-         }
-         isDescendantOf(VV) {
-           return !!this.parent && (this.parent === VV || this.parent.isDescendantOf(VV))
-         }
-         _getDescendants(VV) {
-           let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-             xV = arguments.length > 2 ? arguments[2] : void 0;
-           if (this._children)
-             for (let JV = 0; JV < this._children.length; JV++) {
-               const YV = this._children[JV];
-               xV && !xV(YV) || VV.push(YV), eV || YV._getDescendants(VV, !1, xV)
+           AH.LoadFile(HH, (HH => {
+             try {
+               Function(HH).apply(null), BH && BH()
+             } catch (AH) {
+               LH && LH("LoadScript Error", AH)
```

#### 10. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L691-L716` → after: `L281-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L281-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/284.js#L281-L288) · [Before (L691-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/284.js#L691-L716)

```diff
-         getDescendants(VV, eV) {
-           const xV = [];
-           return this._getDescendants(xV, VV, eV), xV
-         }
-         getChildMeshes(VV, eV) {
-           const xV = [];
-           return this._getDescendants(xV, VV, (VV => (!eV || eV(VV)) && void 0 !== VV.cullingStrategy)), xV
-         }
-         getChildren(VV) {
-           let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-           return this.getDescendants(eV, VV)
-         }
-         _setReady(VV) {
-           VV !== this._nodeDataStorage._isReady && (VV ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
-         }
-         getAnimationByName(VV) {
- ... (10 more removed lines; see GitHub link above)
+       }
+       static _LoadScriptWeb(HH, BH, LH, AH) {
+         let rH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         if ("function" === typeof importScripts) {
+           try {
+             importScripts(HH), BH && BH()
+           } catch (zH) {
+             LH?.(`Unable to load script '${HH}' in worker`, zH)
```

#### 11. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L719-L725` → after: `L349-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L349-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/284.js#L349-L356) · [Before (L719-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/284.js#L719-L725)

```diff
-         deleteAnimationRange(VV) {
-           let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-           for (let xV = 0, JV = this.animations.length; xV < JV; xV++) this.animations[xV] && this.animations[xV].deleteRange(VV, eV);
-           this._ranges[VV] = null
-         }
-         getAnimationRange(VV) {
-           return this._ranges[VV] || null
+       }
+       static UnregisterTopRootEvents(HH, BH) {
+         for (let AH = 0; AH < BH.length; AH++) {
+           const rH = BH[AH];
+           HH.removeEventListener(rH.name, rH.handler);
+           try {
+             HH.parent && HH.parent.removeEventListener(rH.name, rH.handler)
+           } catch (LH) {}
```

#### 12. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L727-L734` → after: `L358-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L358-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/284.js#L358-L393) · [Before (L727-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/284.js#L727-L734)

```diff
-         clone(eV, xV, JV) {
-           const YV = nV.b.Clone((() => new VV(eV, this.dD())), this);
-           if (xV && (YV.parent = xV), !JV) {
-             const VV = this.getDescendants(!0);
-             for (let xV = 0; xV < VV.length; xV++) {
-               const JV = VV[xV];
-               JV.clone(eV + "." + JV.name, YV)
-             }
+       }
+       static async DumpFramebuffer(HH, BH, LH, AH) {
+         throw (0, CH.i)("DumpTools")
+       }
+       static DumpData(HH, BH, LH, AH) {
+         throw (0, CH.i)("DumpTools")
+       }
+       static async DumpDataAsync(HH, BH, LH) {
+         throw (0, CH.i)("DumpTools")
+       }
+       static _IsOffScreenCanvas(HH) {
+         return void 0 !== HH.convertToBlob
+       }
+       static ToBlob(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
+           rH = arguments.length > 3 ? arguments[3] : void 0;
+ ... (20 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L736-L742` → after: `L395-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L395-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/284.js#L395-L403) · [Before (L736-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/284.js#L736-L742)

```diff
-           return YV
-         }
-         getAnimationRanges() {
-           const VV = [];
-           let eV;
-           for (eV in this._ranges) VV.push(this._ranges[eV]);
-           return VV
+           AH.Download(HH, BH)
+         } else if (HH && "undefined" !== typeof URL) {
+           const BH = URL.createObjectURL(HH),
+             LH = window.open("");
+           if (!LH) return;
+           const AH = LH.document.createElement("img");
+           AH.onload = function() {
+             URL.revokeObjectURL(BH)
+           }, AH.src = BH, LH.document.body.appendChild(AH)
```

#### 14. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L744-L754` → after: `L405-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L405-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/284.js#L405-L423) · [Before (L744-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/284.js#L744-L754)

```diff
-         beginAnimation(VV, eV, xV, JV) {
-           const YV = this.getAnimationRange(VV);
-           return YV ? this._scene.beginAnimation(this, YV.from, YV.to, eV, xV, JV) : null
-         }
-         serializeAnimationRanges() {
-           const VV = [];
-           for (const eV in this._ranges) {
-             const xV = this._ranges[eV];
-             if (!xV) continue;
-             const JV = {};
-             JV.name = eV, JV.from = xV.from, JV.to = xV.to, VV.push(JV)
+       }
+       static EncodeScreenshotCanvasData(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
+           rH = arguments.length > 3 ? arguments[3] : void 0,
+           SH = arguments.length > 4 ? arguments[4] : void 0;
+         if ("string" !== typeof rH && BH) {
+           if (BH) {
+             if (AH._IsOffScreenCanvas(HH)) return void HH.convertToBlob({
+               type: LH,
+               quality: SH
+             }).then((HH => {
+               const LH = new FileReader;
+               LH.readAsDataURL(HH), LH.onloadend = () => {
+                 const HH = LH.result;
+                 BH(HH)
+               }
+ ... (3 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L756-L765` → after: `L425-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L425-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/284.js#L425-L511) · [Before (L756-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/284.js#L756-L765)

```diff
-           return VV
-         }
-         computeWorldMatrix(VV) {
-           return this._worldMatrix || (this._worldMatrix = YV.d.Identity()), this._worldMatrix
-         }
-         dispose(VV) {
-           let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-           if (this._nodeDataStorage._isDisposed = !0, !VV) {
-             const xV = this.getDescendants(!0);
-             for (const JV of xV) JV.dispose(VV, eV)
+         } else this.ToBlob(HH, (function(HH) {
+           HH && AH.DownloadBlob(HH, rH), BH && BH("")
+         }), LH, SH)
+       }
+       static Download(HH, BH) {
+         if ("undefined" === typeof URL) return;
+         const LH = window.URL.createObjectURL(HH),
+           AH = document.createElement("a");
+         document.body.appendChild(AH), AH.style.display = "none", AH.href = LH, AH.download = BH, AH.addEventListener("click", (() => {
+           AH.parentElement && AH.parentElement.removeChild(AH)
+         })), AH.click(), window.URL.revokeObjectURL(LH)
+       }
+       static BackCompatCameraNoPreventDefault(HH) {
+         return "boolean" === typeof HH[0] ? HH[0] : "boolean" === typeof HH[1] && HH[1]
+       }
+       static CreateScreenshot(HH, BH, LH, AH) {
+ ... (71 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L767-L776` → after: `L513-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L513-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/284.js#L513-L517) · [Before (L767-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/284.js#L767-L776)

```diff
-           this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.eC.notifyObservers(this), this.eC.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
-           for (const xV of this._behaviors) xV.detach();
-           this._behaviors.length = 0, this.metadata = null
-         }
-         static ParseAnimationRanges(VV, eV, xV) {
-           if (eV.TE)
-             for (let JV = 0; JV < eV.TE.length; JV++) {
-               const xV = eV.TE[JV];
-               VV.createAnimationRange(xV.name, xV.from, xV.to)
-             }
+       }
+       static _EndMarkNative(HH) {
+         if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
+           const BH = AH._NativePerformanceCounterHandles.get(HH);
+           BH ? (_native.endPerformanceCounter(BH), AH._NativePerformanceCounterHandles.delete(HH)) : AH.Warn(`Performance counter with name ${HH} was not started.`)
```

#### 17. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L778-L797` → after: `L519-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L519-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/284.js#L519-L529) · [Before (L778-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/284.js#L778-L797)

```diff
-         getHierarchyBoundingVectors() {
-           let VV, eV, xV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
-             JV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-           this.dD().incrementRenderId(), this.computeWorldMatrix(!0);
-           const UV = this;
-           if (UV.qL && UV.hT) {
-             const xV = UV.qL();
-             VV = xV.boundingBox.minimumWorld.clone(), eV = xV.boundingBox.maximumWorld.clone()
-           } else VV = new YV.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), eV = new YV.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-           if (xV) {
-             const xV = this.getDescendants(!1);
-             for (const UV of xV) {
-               const xV = UV;
-               if (xV.computeWorldMatrix(!0), JV && !JV(xV)) continue;
-               if (!xV.qL || 0 === xV.getTotalVertices()) continue;
-               const yV = xV.qL().boundingBox,
- ... (4 more removed lines; see GitHub link above)
+       }
+       static get Now() {
+         return zH.e.Now
+       }
+       static GetClassName(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           LH = null;
+         if (!BH && HH.getClassName) LH = HH.getClassName();
+         else {
+           if (HH instanceof Object) {
+             LH = (BH ? HH : Object.getPrototypeOf(HH)).constructor.__bjsclassName__
```

#### 18. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L799-L801` → after: `L531-L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L531-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/284.js#L531-L548) · [Before (L799-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/284.js#L799-L801)

```diff
-           return {
-             min: VV,
-             max: eV
+           LH || (LH = typeof HH)
+         }
+         return LH
+       }
+       static First(HH, BH) {
+         for (const LH of HH)
+           if (BH(LH)) return LH;
+         return null
+       }
+       static getFullClassName(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           LH = null,
+           AH = null;
+         if (!BH && HH.getClassName) LH = HH.getClassName();
+         else {
+           if (HH instanceof Object) {
+ ... (2 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L804-L867` → after: `L552-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L552-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/284.js#L552-L602) · [Before (L804-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/284.js#L804-L867)

```diff
-       }, (() => {
-         const YV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         eV = [(0, UV.J)()], xV = [(0, UV.J)()], ZV = [(0, UV.J)()], vV = [(0, UV.J)()], rV = [(0, UV.J)()], (0, JV.i)(null, null, eV, {
-           kind: "field",
-           name: "name",
-           static: !1,
-           private: !1,
-           access: {
-             has: VV => "name" in VV,
-             get: VV => VV.name,
-             set: (VV, eV) => {
-               VV.name = eV
-             }
-           },
-           metadata: YV
-         }, kV, bV), (0, JV.i)(null, null, xV, {
- ... (48 more removed lines; see GitHub link above)
+         return LH ? (null != AH ? AH + "." : "") + LH : null
+       }
+       static async DelayAsync(HH) {
+         await new Promise((BH => {
+           setTimeout((() => {
+             BH()
+           }), HH)
+         }))
+       }
+       static IsSafari() {
+         return !!(0, SH.h)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
+       }
+     }
+ 
+     function xH(HH, BH) {
+       return LH => {
+ ... (35 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L869-L880` → after: `L604-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L604-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/284.js#L604-L613) · [Before (L869-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/284.js#L869-L880)

```diff
-           },
-           metadata: YV
-         }, TV, PV), YV && Object.defineProperty(VV, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: YV
-         })
-       })(), VV._AnimationRangeFactory = (VV, eV, xV) => {
-         throw (0, QV.n)("AnimationRange")
-       }, VV._NodeConstructors = {}, VV
-     })()
+             AH.executeNext()
+           }), SH)
+         }), AH)
+       }
+     }
+     let PH = !1;
+ 
+     function TH() {
+       PH || (PH = !0, MH.Mix = WH.k, MH.IsExponentOfTwo = WH.g, XH.d.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAE … [truncated]
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/285.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/285.js` (169 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2)

#### 1. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L4)

```diff
-   42419: (VV, eV, xV) => {
+   41721: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L8-L182` → after: `L8-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L8-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L8-L20) · [Before (L8-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L8-L182)

```diff
-     var JV = xV(41257),
-       YV = xV(41263),
-       UV = xV(38296),
-       yV = xV(38269),
-       pV = xV(38303),
-       QV = xV(41486),
-       nV = xV(41664),
-       wV = xV(41433),
-       ZV = xV(41154),
-       vV = xV(38272);
-     class rV {
-       constructor() {
-         this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / … [truncated]
-       }
-       get name() {
-         return "AutoRotation"
- ... (159 more removed lines; see GitHub link above)
+     let AH = !1
+   },
+   41283: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => uH
+     });
+     var AH = LH(41290),
+       rH = LH(41297),
+       SH = LH(37997),
+       hH = LH(37963),
+       tH = LH(37989),
+       zH = LH(38790),
+       CH = LH(41312);
```

#### 3. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L184-L206` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L22-L23) · [Before (L184-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L184-L206)

```diff
-       constructor() {
-         this.onTargetFramingAnimationEndObservable = new UV.c, this._mode = BV.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1,  … [truncated]
-       }
-       get name() {
-         return "Framing"
-       }
-       set mode(VV) {
-         this._mode = VV
-       }
-       get mode() {
-         return this._mode
-       }
-       set radiusScale(VV) {
-         this._radiusScale = VV
-       }
-       get radiusScale() {
- ... (7 more removed lines; see GitHub link above)
+       get wrapU() {
+         return this._wrapU
```

#### 4. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L208-L209` → after: `L25-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L25-L26) · [Before (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L208-L209)

```diff
-       set defaultElevation(VV) {
-         this._defaultElevation = VV
+       set wrapU(HH) {
+         this._wrapU = HH
```

#### 5. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L211-L212` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L28-L29) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L211-L212)

```diff
-       get defaultElevation() {
-         return this._defaultElevation
+       get wrapV() {
+         return this._wrapV
```

#### 6. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L214-L215` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L31-L32) · [Before (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L214-L215)

```diff
-       set elevationReturnTime(VV) {
-         this._elevationReturnTime = VV
+       set wrapV(HH) {
+         this._wrapV = HH
```

#### 7. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L217-L218` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L34-L35) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L217-L218)

```diff
-       get elevationReturnTime() {
-         return this._elevationReturnTime
+       get coordinatesMode() {
+         return 0
```

#### 8. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L220-L221` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L37-L38) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L220-L221)

```diff
-       set elevationReturnWaitTime(VV) {
-         this._elevationReturnWaitTime = VV
+       get isCube() {
+         return !!this._texture && this._texture.isCube
```

#### 9. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L223-L224` → after: `L40-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L40-L41) · [Before (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L223-L224)

```diff
-       get elevationReturnWaitTime() {
-         return this._elevationReturnWaitTime
+       set isCube(HH) {
+         this._texture && (this._texture.isCube = HH)
```

#### 10. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L226-L227` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L43-L44) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L226-L227)

```diff
-       set zoomStopsAnimation(VV) {
-         this._zoomStopsAnimation = VV
+       get is3D() {
+         return !!this._texture && this._texture.is3D
```

#### 11. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L229-L230` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L46-L47) · [Before (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L229-L230)

```diff
-       get zoomStopsAnimation() {
-         return this._zoomStopsAnimation
+       set is3D(HH) {
+         this._texture && (this._texture.is3D = HH)
```

#### 12. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L232-L233` → after: `L49-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L49-L50) · [Before (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L232-L233)

```diff
-       set framingTime(VV) {
-         this._framingTime = VV
+       get is2DArray() {
+         return !!this._texture && this._texture.is2DArray
```

#### 13. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L235-L236` → after: `L52-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L52-L53) · [Before (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L235-L236)

```diff
-       get framingTime() {
-         return this._framingTime
+       set is2DArray(HH) {
+         this._texture && (this._texture.is2DArray = HH)
```

#### 14. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L238-L239` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L55-L56) · [Before (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L238-L239)

```diff
-       get attachedNode() {
-         return this._attachedCamera
+       getClassName() {
+         return "ThinTexture"
```

#### 15. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L241-L253` → after: `L58-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L58-L59) · [Before (L241-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L241-L253)

```diff
-       init() {}
-       attach(VV) {
-         this._attachedCamera = VV;
-         const eV = this._attachedCamera.dD();
-         BV.EasingFunction.setEasingMode(BV.EasingMode), this._onPrePointerObservableObserver = eV.onPrePointerObservable.add((VV => {
-           VV.type !== wV.b.POINTERDOWN ? VV.type === wV.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
-         })), this._onMeshTargetChangedObserver = VV.onMeshTargetChangedObservable.add((VV => {
-           VV && VV.qL && this.zoomOnMesh(VV, void 0, (() => {
-             this.onTargetFramingAnimationEndObservable.notifyObservers()
-           }))
-         })), this._onAfterCheckInputsObserver = VV.onAfterCheckInputsObservable.add((() => {
-           this._applyUserInteraction(), this._maintainCameraAboveGround()
-         }))
+       static _IsRenderTargetWrapper(HH) {
+         return void 0 !== HH?.shareDepth
```

#### 16. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L255-L265` → after: `L61-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L61-L62) · [Before (L255-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L255-L265)

```diff
-       detach() {
-         if (!this._attachedCamera) return;
-         const VV = this._attachedCamera.dD();
-         this._onPrePointerObservableObserver && VV.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserve … [truncated]
-       }
-       zoomOnMesh(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         VV.computeWorldMatrix(!0);
-         const JV = VV.qL().boundingBox;
-         this.zoomOnBoundingInfo(JV.minimumWorld, JV.maximumWorld, eV, xV)
+       constructor(HH) {
+         this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = CH.c.Zero(), this._cachedBaseSize = CH.c.Zero(), this._initialSamplingMode = 2, this._texture = EH. … [truncated]
```

#### 17. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L267-L272` → after: `L64-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L64-L65) · [Before (L267-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L267-L272)

```diff
-       zoomOnMeshHierarchy(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         VV.computeWorldMatrix(!0);
-         const JV = VV.getHierarchyBoundingVectors(!0);
-         this.zoomOnBoundingInfo(JV.min, JV.max, eV, xV)
+       isReady() {
+         return 4 === this.delayLoadState ? (this.delayLoad(), !1) : !!this._texture && this._texture.isReady
```

#### 18. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L274-L283` → after: `L67-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L67-L69) · [Before (L274-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L274-L283)

```diff
-       zoomOnMeshesHierarchy(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         const JV = new yV.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-           YV = new yV.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-         for (let UV = 0; UV < VV.length; UV++) {
-           const eV = VV[UV].getHierarchyBoundingVectors(!0);
-           yV.o.CheckExtends(eV.min, JV, YV), yV.o.CheckExtends(eV.max, JV, YV)
-         }
-         this.zoomOnBoundingInfo(JV, YV, eV, xV)
+       delayLoad() {}
+       getInternalTexture() {
+         return this._texture
```

#### 19. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L285-L308` → after: `L71-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L71-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L71-L74) · [Before (L285-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L285-L308)

```diff
-       zoomOnBoundingInfo(VV, eV) {
-         let xV, JV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         if (!this._attachedCamera) return !1;
-         const UV = VV.y,
-           pV = UV + (eV.y - UV) * this._positionScale,
-           QV = eV.subtract(VV).scale(.5);
-         if (!isFinite(pV)) return !1;
-         if (JV) xV = new yV.o(0, pV, 0);
-         else {
-           const eV = VV.add(QV);
-           xV = new yV.o(eV.x, pV, eV.z)
-         }
-         this._vectorTransition || (this._vectorTransition = bV.c.CreateAnimation("target", bV.c.ANIMATIONTYPE_VECTOR3, 60, BV.EasingFunction)), this._betaIsAnimating = !0;
-         let nV = bV.c.TransitionTo("target", xV, this._attachedCamera, this._attachedCamera.dD(), 60, this._vectorTransition, this._framingTime);
-         nV && this._animatables.push(nV);
- ... (8 more removed lines; see GitHub link above)
+       getSize() {
+         if (this._texture) {
+           if (this._texture.width) return this._cachedSize.width = this._texture.width, this._cachedSize.height = this._texture.height, this._cachedSize;
+           if (this._texture._size) return this._cachedSize.width = this._texture._size, this._cachedSize.height = this._texture._size, this._cachedSize
```

#### 20. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L310-L312` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L76) · [Before (L310-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L310-L312)

```diff
-         return this._radiusTransition || (this._radiusTransition = bV.c.CreateAnimation("radius", bV.c.ANIMATIONTYPE_FLOAT, 60, BV.EasingFunction)), nV = bV.c.TransitionTo("radius", wV, this._attachedCamera, this._attachedCamera.dD(), 60, this._radiusTransition, this._framingTime … [truncated]
-           this.stopAllAnimations(), YV && YV(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
-         })), nV && this._animatables.push(nV), !0
+         return this._cachedSize
```

#### 21. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L314-L318` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L78-L79) · [Before (L314-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L314-L318)

```diff
-       _calculateLowerRadiusFromModelBoundingSphere(VV, eV) {
-         const xV = this._attachedCamera;
-         if (!xV) return 0;
-         let JV = xV._calculateLowerRadiusFromModelBoundingSphere(VV, eV, this._radiusScale);
-         return xV.lowerRadiusLimit && this._mode === BV.IgnoreBoundsSizeMode && (JV = JV < xV.lowerRadiusLimit ? xV.lowerRadiusLimit : JV), xV.upperRadiusLimit && (JV = JV > xV.upperRadiusLimit ? xV.upperRadiusLimit : JV), JV
+       getBaseSize() {
+         return this.isReady() && this._texture ? this._texture._size ? (this._cachedBaseSize.width = this._texture._size, this._cachedBaseSize.height = this._texture._size, this._cachedBaseSize) : (this._cachedBaseSize.width = this._texture.baseWidth, this._cachedBaseSize.height  … [truncated]
```

#### 22. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L320-L334` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L81-L82) · [Before (L320-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L320-L334)

```diff
-       _maintainCameraAboveGround() {
-         if (this._elevationReturnTime < 0) return;
-         const VV = ZV.b.Now - this._lastInteractionTime,
-           eV = .5 * Math.PI - this._defaultElevation,
-           xV = .5 * Math.PI;
-         if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > xV && VV >= this._elevationReturnWaitTime) {
-           this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = bV.c.CreateAnimation("beta", bV.c.ANIMATIONTYPE_FLOAT, 60, BV.EasingFunction));
-           const VV = bV.c.TransitionTo("beta", eV, this._attachedCamera, this._attachedCamera.dD(), 60, this._betaTransition, this._elevationReturnTime, (() => {
-             this._clearAnimationLocks(), this.stopAllAnimations()
-           }));
-           VV && this._animatables.push(VV)
-         }
-       }
-       _clearAnimationLocks() {
-         this._betaIsAnimating = !1
+       get samplingMode() {
+         return this._texture ? this._texture.samplingMode : this._initialSamplingMode
```

#### 23. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L336-L337` → after: `L84-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L84-L86) · [Before (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L336-L337)

```diff
-       _applyUserInteraction() {
-         this.isUserIsMoving && (this._lastInteractionTime = ZV.b.Now, this.stopAllAnimations(), this._clearAnimationLocks())
+       updateSamplingMode(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         this._texture && this._engine && this._engine.updateTextureSamplingMode(HH, this._texture, this._texture.generateMipMaps && BH)
```

#### 24. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L339-L340` → after: `L88-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L88-L89) · [Before (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L339-L340)

```diff
-       stopAllAnimations() {
-         for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
+       releaseInternalTexture() {
+         this._texture && (this._texture.dispose(), this._texture = null)
```

#### 25. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L342-L343` → after: `L91-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L91-L92) · [Before (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L342-L343)

```diff
-       get isUserIsMoving() {
-         return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPannin … [truncated]
+       dispose() {
+         this._texture && (this.releaseInternalTexture(), this._engine = null)
```

#### 26. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L346-L753` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L95-L96) · [Before (L346-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L346-L753)

```diff
-     BV.EasingFunction = new class extends kV {
-       constructor() {
-         let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
-         super(), this.exponent = VV
-       }
-       easeInCore(VV) {
-         return this.exponent <= 0 ? VV : (Math.exp(this.exponent * VV) - 1) / (Math.exp(this.exponent) - 1)
-       }
-     }, BV.EasingMode = kV.EASINGMODE_EASEINOUT, BV.IgnoreBoundsSizeMode = 0, BV.FitFrustumSidesMode = 1;
-     var jV = xV(41478),
-       qV = xV(41470),
-       tV = xV(41506),
-       FV = xV(41341);
-     let TV = (() => {
-         var VV;
-         let eV, xV = [],
- ... (392 more removed lines; see GitHub link above)
+     var XH, GH = LH(41319),
+       YH = LH(41169);
```

#### 27. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L756` → after: `L99-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L99-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L99-L110) · [Before (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L756)

```diff
-       let eV, xV, UV, pV, QV, nV, wV, ZV, vV, rV, kV, bV = [],
+       let BH, LH, CH, XH, YH, uH, QH, WH, MH, xH, vH, PH, TH, UH, VH, OH, bH, kH, mH, oH, IH, fH, lH, KH, cH, eH = EH,
+         qH = [],
+         gH = [],
+         NH = [],
+         RH = [],
+         jH = [],
+         nH = [],
+         FH = [],
+         DH = [],
+         wH = [],
+         ZH = [],
+         dH = [],
```

#### 28. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L777-L784` → after: `L131-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L131-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L131-L133) · [Before (L777-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L777-L784)

```diff
-       return VV = class {
-         constructor() {
-           this.camera = (0, JV.l)(this, bV), this.keysUp = (0, JV.l)(this, EV, [38]), this.keysDown = ((0, JV.l)(this, BV), (0, JV.l)(this, jV, [40])), this.keysLeft = ((0, JV.l)(this, qV), (0, JV.l)(this, tV, [37])), this.keysRight = ((0, JV.l)(this, TV), (0, JV.l)(this, PV, [39 … [truncated]
-             ctrl: !1,
-             alt: !1
-           }, this._keyboardConditions = {
-             modifiers: this._keyboardModifiers
-           }, this._rotateDirection = new yV.n, this._panDirection = new yV.n
+       return HH = class extends eH {
+         set hasAlpha(HH) {
+           this._hasAlpha = HH
```

#### 29. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L786-L787` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L135-L136) · [Before (L786-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L786-L787)

```diff
-         get useAltToZoom() {
-           return this._useAltToZoom
+         get hasAlpha() {
+           return this._hasAlpha
```

#### 30. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L789-L790` → after: `L138-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L138-L139) · [Before (L789-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L789-L790)

```diff
-         set useAltToZoom(VV) {
-           this._useAltToZoom = VV, this._applyUseAltToZoomToInputMap()
+         set getAlphaFromRGB(HH) {
+           this._getAlphaFromRGB !== HH && (this._getAlphaFromRGB = HH, this._scene && this._scene.markAllMaterialsAsDirty(1, (HH => HH.hasTexture(this))))
```

#### 31. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L792-L806` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L141-L142) · [Before (L792-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L792-L806)

```diff
-         _applyUseAltToZoomToInputMap() {
-           if (!this.camera?.movement) return;
-           const VV = this.camera.movement.input,
-             eV = VV.getEntry("keyboard", "zoom", {
-               modifiers: {
-                 alt: !0
-               }
-             });
-           !this._useAltToZoom && eV ? VV.inputMap.splice(VV.inputMap.indexOf(eV), 1) : this._useAltToZoom && !eV && VV.addEntry({
-             source: "keyboard",
-             modifiers: {
-               alt: !0
-             },
-             interaction: "zoom"
-           })
+         get getAlphaFromRGB() {
+           return this._getAlphaFromRGB
```

#### 32. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L808-L822` → after: `L144-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L144-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L144-L239) · [Before (L808-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L808-L822)

```diff
-         attachControl(VV) {
-           VV = FV.j.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.dD(), this._engine = this._scene.sk(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
-             this._keys.length = 0
-           })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((eV => {
-             const xV = eV.event;
-             if (!xV.metaKey)
-               if (eV.type === NV.d.KEYDOWN) {
-                 if (this._ctrlPressed = xV.ctrlKey, this._altPressed = xV.altKey, -1 !== this.keysUp.indexOf(xV.keyCode) || -1 !== this.keysDown.indexOf(xV.keyCode) || -1 !== this.keysLeft.indexOf(xV.keyCode) || -1 !== this.keysRight.indexOf(xV.keyCode) || -1 !== this.keysReset.i … [truncated]
-                   -1 === this._keys.indexOf(xV.keyCode) && this._keys.push(xV.keyCode), xV.preventDefault && (VV || xV.preventDefault())
-                 }
-               } else if (-1 !== this.keysUp.indexOf(xV.keyCode) || -1 !== this.keysDown.indexOf(xV.keyCode) || -1 !== this.keysLeft.indexOf(xV.keyCode) || -1 !== this.keysRight.indexOf(xV.keyCode) || -1 !== this.keysReset.indexOf(xV.keyCode) || -1 !== this.keysZoomIn.indexOf(xV.k … [truncated]
-               const eV = this._keys.indexOf(xV.keyCode);
-               eV >= 0 && this._keys.splice(eV, 1), xV.preventDefault && (VV || xV.preventDefault())
-             }
-           })))
+         set coordinatesIndex(HH) {
+           this._coordinatesIndex !== HH && (this._coordinatesIndex = HH, this._scene && this._scene.markAllMaterialsAsDirty(1, (HH => HH.hasTexture(this))))
+         }
+         get coordinatesIndex() {
+           return this._coordinatesIndex
+         }
+         set coordinatesMode(HH) {
+           this._coordinatesMode !== HH && (this._coordinatesMode = HH, this._scene && this._scene.markAllMaterialsAsDirty(1, (HH => HH.hasTexture(this))))
+         }
+         get coordinatesMode() {
+           return this._coordinatesMode
+         }
+         get wrapU() {
+           return this._wrapU
+         }
+         set wrapU(HH) {
+ ... (80 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L824-L825` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L241-L242) · [Before (L824-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L824-L825)

```diff
-         detachControl() {
-           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
+         set onDispose(HH) {
+           this._onDisposeObserver && this.uR.remove(this._onDisposeObserver), this._onDisposeObserver = this.uR.add(HH)
```

#### 34. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L827-L845` → after: `L244-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L244-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L244-L361) · [Before (L827-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L827-L845)

```diff
-         checkInputs() {
-           if (this._onKeyboardObserver) {
-             const VV = this.camera,
-               eV = VV.movement.input;
-             this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
-             const xV = this._rotateDirection.set(0, 0),
-               JV = this._panDirection.set(0, 0);
-             let YV = 0,
-               UV = 0;
-             for (let yV = 0; yV < this._keys.length; yV++) {
-               const pV = this._keys[yV];
-               if (this._keyboardConditions.key = pV, -1 === this.keysReset.indexOf(pV)) {
-                 const VV = eV.resolveInteraction("keyboard", this._keyboardConditions);
-                 if (VV)
-                   if ("pan" === VV.interaction) UV = Math.max(UV, VV.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(pV) ? JV.x -= 1 : -1 !== this.keysRight.indexOf(pV) ? JV.x += 1 : -1 !== this.keysUp.indexOf(pV) ? JV.y += 1 : -1 !== this.keysDown.index … [truncated]
-                   else if ("zoom" === VV.interaction) {
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
+         constructor(BH) {
+           let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+           super(null), this.uniqueId = ((0, AH.k)(this, qH), (0, AH.k)(this, gH, void 0)), this.name = ((0, AH.k)(this, NH), (0, AH.k)(this, RH, void 0)), this.displayName = ((0, AH.k)(this, jH), (0, AH.k)(this, nH, void 0)), this.metadata = ((0, AH.k)(this, FH), (0, AH.k)(this,  … [truncated]
+         }
+         yN() {
+           return this._scene
+         }
+ ... (102 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L850-L851` → after: `L366-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L366-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L366-L384) · [Before (L850-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L850-L851)

```diff
-         getClassName() {
-           return "ArcRotateCameraKeyboardMoveInput"
+         serialize() {
+           let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+           if (!this.name && !HH) return null;
+           const BH = GH.c.Serialize(this);
+           return GH.c.AppendSerializedAnimations(this, BH), BH
+         }
+         static WhenAllReady(HH, BH) {
+           let LH = HH.length;
+           if (0 !== LH)
+             for (let AH = 0; AH < HH.length; AH++) {
+               const rH = HH[AH];
+               if (rH.isReady()) 0 === --LH && BH();
+               else {
+                 const HH = rH.onLoadObservable;
+                 HH ? HH.addOnce((() => {
+                   0 === --LH && BH()
+ ... (3 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L853-L854` → after: `L386-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L386-L387) · [Before (L853-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L853-L854)

```diff
-         getSimpleName() {
-           return "keyboard"
+         static _IsScene(HH) {
+           return "Scene" === HH.getClassName()
```

#### 37. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L857-L858` → after: `L390-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L390-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L390-L441) · [Before (L857-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L857-L858)

```diff
-         const yV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         eV = [(0, YV.J)()], xV = [(0, YV.J)()], UV = [(0, YV.J)()], pV = [(0, YV.J)()], QV = [(0, YV.J)()], nV = [(0, YV.J)()], wV = [(0, YV.J)()], ZV = [(0, YV.J)()], vV = [(0, YV.J)()], rV = [(0, YV.J)()], kV = [(0, YV.J)()], (0, JV.i)(VV, null, kV, {
+         const SH = "function" === typeof Symbol && Symbol.metadata ? Object.create(eH[Symbol.metadata] ?? null) : void 0;
+         BH = [(0, rH.H)()], LH = [(0, rH.H)()], CH = [(0, rH.H)()], XH = [(0, rH.H)()], YH = [(0, rH.H)("hasAlpha")], uH = [(0, rH.H)("getAlphaFromRGB")], QH = [(0, rH.H)()], WH = [(0, rH.H)("coordinatesIndex")], MH = [(0, rH.H)()], xH = [(0, rH.H)("coordinatesMode")], vH = [(0,  … [truncated]
+           kind: "getter",
+           name: "wrapU",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "wrapU" in HH,
+             get: HH => HH.wrapU
+           },
+           metadata: SH
+         }, null, qH), (0, AH.g)(HH, null, PH, {
+           kind: "getter",
+           name: "wrapV",
+           static: !1,
+           private: !1,
+ ... (36 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L860` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L443) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L860)

```diff
-           name: "useAltToZoom",
+           name: "gammaSpace",
```

#### 39. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L864-L865` → after: `L447-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L447-L448) · [Before (L864-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L864-L865)

```diff
-             has: VV => "useAltToZoom" in VV,
-             get: VV => VV.useAltToZoom
+             has: HH => "gammaSpace" in HH,
+             get: HH => HH.gammaSpace
```

#### 40. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L868` → after: `L451-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L451-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L451-L491) · [Before (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L868)

```diff
-         }, null, bV), (0, JV.i)(null, null, eV, {
+         }, null, qH), (0, AH.g)(HH, null, IH, {
+           kind: "getter",
+           name: "lodGenerationOffset",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "lodGenerationOffset" in HH,
+             get: HH => HH.lodGenerationOffset
+           },
+           metadata: SH
+         }, null, qH), (0, AH.g)(HH, null, fH, {
+           kind: "getter",
+           name: "lodGenerationScale",
+           static: !1,
+           private: !1,
+           access: {
+ ... (25 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L870` → after: `L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L493) · [Before (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L870)

```diff
-           name: "keysUp",
+           name: "uniqueId",
```

#### 42. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L874-L875` → after: `L497-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L497-L498) · [Before (L874-L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L874-L875)

```diff
-             has: VV => "keysUp" in VV,
-             get: VV => VV.keysUp,
+             has: HH => "uniqueId" in HH,
+             get: HH => HH.uniqueId,
```

#### 43. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L877` → after: `L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L500) · [Before (L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L877)

```diff
-               VV.keysUp = eV
+               HH.uniqueId = BH
```

#### 44. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L881` → after: `L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L504) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L881)

```diff
-         }, EV, BV), (0, JV.i)(null, null, xV, {
+         }, gH, NH), (0, AH.g)(null, null, LH, {
```

#### 45. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L883` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L506) · [Before (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L883)

```diff
-           name: "keysDown",
+           name: "name",
```

#### 46. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L887-L888` → after: `L510-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L510-L511) · [Before (L887-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L887-L888)

```diff
-             has: VV => "keysDown" in VV,
-             get: VV => VV.keysDown,
+             has: HH => "name" in HH,
+             get: HH => HH.name,
```

#### 47. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L890` → after: `L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L513) · [Before (L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L890)

```diff
-               VV.keysDown = eV
+               HH.name = BH
```

#### 48. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L894` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L517) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L894)

```diff
-         }, jV, qV), (0, JV.i)(null, null, UV, {
+         }, RH, jH), (0, AH.g)(null, null, CH, {
```

#### 49. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L896` → after: `L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L519) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L896)

```diff
-           name: "keysLeft",
+           name: "displayName",
```

#### 50. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L900-L901` → after: `L523-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L523-L524) · [Before (L900-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L900-L901)

```diff
-             has: VV => "keysLeft" in VV,
-             get: VV => VV.keysLeft,
+             has: HH => "displayName" in HH,
+             get: HH => HH.displayName,
```

#### 51. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L903` → after: `L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L526) · [Before (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L903)

```diff
-               VV.keysLeft = eV
+               HH.displayName = BH
```

#### 52. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L907` → after: `L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L530) · [Before (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L907)

```diff
-         }, tV, TV), (0, JV.i)(null, null, pV, {
+         }, nH, FH), (0, AH.g)(null, null, XH, {
```

#### 53. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L909` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L532) · [Before (L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L909)

```diff
-           name: "keysRight",
+           name: "metadata",
```

#### 54. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L913-L914` → after: `L536-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L536-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L536-L537) · [Before (L913-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L913-L914)

```diff
-             has: VV => "keysRight" in VV,
-             get: VV => VV.keysRight,
+             has: HH => "metadata" in HH,
+             get: HH => HH.metadata,
```

#### 55. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L916` → after: `L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L539) · [Before (L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L916)

```diff
-               VV.keysRight = eV
+               HH.metadata = BH
```

#### 56. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L920` → after: `L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L543) · [Before (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L920)

```diff
-         }, PV, AV), (0, JV.i)(null, null, QV, {
+         }, DH, wH), (0, AH.g)(null, null, YH, {
```

#### 57. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L922` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L545) · [Before (L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L922)

```diff
-           name: "keysReset",
+           name: "_hasAlpha",
```

#### 58. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L926-L927` → after: `L549-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L549-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L549-L550) · [Before (L926-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L926-L927)

```diff
-             has: VV => "keysReset" in VV,
-             get: VV => VV.keysReset,
+             has: HH => "_hasAlpha" in HH,
+             get: HH => HH._hasAlpha,
```

#### 59. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L929` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L552) · [Before (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L929)

```diff
-               VV.keysReset = eV
+               HH._hasAlpha = BH
```

#### 60. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L933` → after: `L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L556) · [Before (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L933)

```diff
-         }, XV, MV), (0, JV.i)(null, null, nV, {
+         }, ZH, dH), (0, AH.g)(null, null, uH, {
```

#### 61. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L935` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L558) · [Before (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L935)

```diff
-           name: "keysZoomIn",
+           name: "_getAlphaFromRGB",
```

#### 62. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L939-L940` → after: `L562-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L562-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L562-L563) · [Before (L939-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L939-L940)

```diff
-             has: VV => "keysZoomIn" in VV,
-             get: VV => VV.keysZoomIn,
+             has: HH => "_getAlphaFromRGB" in HH,
+             get: HH => HH._getAlphaFromRGB,
```

#### 63. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L942` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L565) · [Before (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L942)

```diff
-               VV.keysZoomIn = eV
+               HH._getAlphaFromRGB = BH
```

#### 64. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L946` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L569) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L946)

```diff
-         }, zV, GV), (0, JV.i)(null, null, wV, {
+         }, aH, sH), (0, AH.g)(null, null, QH, {
```

#### 65. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L948` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L571) · [Before (L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L948)

```diff
-           name: "keysZoomOut",
+           name: "level",
```

#### 66. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L952-L953` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L575-L576) · [Before (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L952-L953)

```diff
-             has: VV => "keysZoomOut" in VV,
-             get: VV => VV.keysZoomOut,
+             has: HH => "level" in HH,
+             get: HH => HH.level,
```

#### 67. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L955` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L578) · [Before (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L955)

```diff
-               VV.keysZoomOut = eV
+               HH.level = BH
```

#### 68. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L959` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L582) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L959)

```diff
-         }, WV, RV), (0, JV.i)(null, null, ZV, {
+         }, JH, iH), (0, AH.g)(null, null, WH, {
```

#### 69. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L961` → after: `L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L584) · [Before (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L961)

```diff
-           name: "panningSensibility",
+           name: "_coordinatesIndex",
```

#### 70. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L965-L966` → after: `L588-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L588-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L588-L589) · [Before (L965-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L965-L966)

```diff
-             has: VV => "panningSensibility" in VV,
-             get: VV => VV.panningSensibility,
+             has: HH => "_coordinatesIndex" in HH,
+             get: HH => HH._coordinatesIndex,
```

#### 71. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L968` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L591) · [Before (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L968)

```diff
-               VV.panningSensibility = eV
+               HH._coordinatesIndex = BH
```

#### 72. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L972` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L595) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L972)

```diff
-         }, gV, DV), (0, JV.i)(null, null, vV, {
+         }, pH, yH), (0, AH.g)(null, null, MH, {
```

#### 73. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L974` → after: `L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L597) · [Before (L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L974)

```diff
-           name: "zoomingSensibility",
+           name: "optimizeUVAllocation",
```

#### 74. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L978-L979` → after: `L601-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L601-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L601-L602) · [Before (L978-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L978-L979)

```diff
-             has: VV => "zoomingSensibility" in VV,
-             get: VV => VV.zoomingSensibility,
+             has: HH => "optimizeUVAllocation" in HH,
+             get: HH => HH.optimizeUVAllocation,
```

#### 75. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L981` → after: `L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L604) · [Before (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L981)

```diff
-               VV.zoomingSensibility = eV
+               HH.optimizeUVAllocation = BH
```

#### 76. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L985` → after: `L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L608) · [Before (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L985)

```diff
-         }, iV, CV), (0, JV.i)(null, null, rV, {
+         }, HB, BB), (0, AH.g)(null, null, xH, {
```

#### 77. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L987` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L610) · [Before (L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L987)

```diff
-           name: "angularSpeed",
+           name: "_coordinatesMode",
```

#### 78. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L991-L992` → after: `L614-L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L614-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L614-L615) · [Before (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L991-L992)

```diff
-             has: VV => "angularSpeed" in VV,
-             get: VV => VV.angularSpeed,
+             has: HH => "_coordinatesMode" in HH,
+             get: HH => HH._coordinatesMode,
```

#### 79. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L994` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L617) · [Before (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L994)

```diff
-               VV.angularSpeed = eV
+               HH._coordinatesMode = BH
```

#### 80. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L998-L1044` → after: `L621-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L621-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L621-L630) · [Before (L998-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L998-L1044)

```diff
-         }, aV, oV), yV && Object.defineProperty(VV, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: yV
-         })
-       })(), VV
-     })();
-     tV.b.ArcRotateCameraKeyboardMoveInput = XV;
-     var MV = xV(38917),
-       zV = xV(41445);
-     let GV = (() => {
-       var VV;
-       let eV, xV, UV, QV = [],
-         nV = [],
-         ZV = [],
- ... (31 more removed lines; see GitHub link above)
+         }, LB, AB), (0, AH.g)(null, null, TH, {
+           kind: "field",
+           name: "wrapR",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "wrapR" in HH,
+             get: HH => HH.wrapR,
+             set: (HH, BH) => {
+               HH.wrapR = BH
```

#### 81. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1046-L1102` → after: `L632-L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L632-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L632-L634) · [Before (L1046-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1046-L1102)

```diff
-             JV && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(JV)) : this.camera.movement.zoomAccumulatedPixels += JV), xV.preventDefault && (VV || xV.preventDefault())
-           }, this._observer = this.camera.dD()._inputManager._addCameraPointerObserver(this._wheel, wV.b.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.HVV(0)
-         }
-         detachControl() {
-           this._observer && (this.camera.dD()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
-         }
-         checkInputs() {
-           if (!this.zoomToMouseLocation) return;
-           const VV = this.camera;
-           if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(VV.inertialAlphaOffset) + Math.abs(VV.inertialBetaOffset) + Math.abs(VV.inertialRadiusOffset)) {
-             this._updateHitPlane(), VV.target.addInPlace(this._inertialPanning), VV.radius -= this._zoomToMouseRadiusOffset;
-             const eV = VV.movement.getFrameIndependentDecay(VV.inertia);
-             this._inertialPanning.scaleInPlace(eV), this._zoomToMouseRadiusOffset *= eV, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < vV.b && (this._zoomToMouseRadiusOffset = 0)
-           }
-         }
-         getClassName() {
- ... (41 more removed lines; see GitHub link above)
+           },
+           metadata: SH
+         }, rB, SB), (0, AH.g)(null, null, UH, {
```

#### 82. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1104` → after: `L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L636) · [Before (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1104)

```diff
-           name: "wheelPrecision",
+           name: "anisotropicFilteringLevel",
```

#### 83. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1108-L1109` → after: `L640-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L640-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L640-L641) · [Before (L1108-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1108-L1109)

```diff
-             has: VV => "wheelPrecision" in VV,
-             get: VV => VV.wheelPrecision,
+             has: HH => "anisotropicFilteringLevel" in HH,
+             get: HH => HH.anisotropicFilteringLevel,
```

#### 84. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1111` → after: `L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L643) · [Before (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1111)

```diff
-               VV.wheelPrecision = eV
+               HH.anisotropicFilteringLevel = BH
```

#### 85. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1115` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L647) · [Before (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1115)

```diff
-         }, QV, nV), (0, JV.i)(null, null, xV, {
+         }, hB, tB), (0, AH.g)(null, null, mH, {
```

#### 86. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1117` → after: `L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L649) · [Before (L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1117)

```diff
-           name: "zoomToMouseLocation",
+           name: "invertZ",
```

#### 87. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1121-L1122` → after: `L653-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L653-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L653-L654) · [Before (L1121-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1121-L1122)

```diff
-             has: VV => "zoomToMouseLocation" in VV,
-             get: VV => VV.zoomToMouseLocation,
+             has: HH => "invertZ" in HH,
+             get: HH => HH.invertZ,
```

#### 88. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1124` → after: `L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L656) · [Before (L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1124)

```diff
-               VV.zoomToMouseLocation = eV
+               HH.invertZ = BH
```

#### 89. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1128` → after: `L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L660) · [Before (L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1128)

```diff
-         }, ZV, rV), (0, JV.i)(null, null, UV, {
+         }, zB, CB), (0, AH.g)(null, null, oH, {
```

#### 90. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1130` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L662) · [Before (L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1130)

```diff
-           name: "wheelDeltaPercentage",
+           name: "lodLevelInAlpha",
```

#### 91. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1134-L1135` → after: `L666-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L666-L667) · [Before (L1134-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1134-L1135)

```diff
-             has: VV => "wheelDeltaPercentage" in VV,
-             get: VV => VV.wheelDeltaPercentage,
+             has: HH => "lodLevelInAlpha" in HH,
+             get: HH => HH.lodLevelInAlpha,
```

#### 92. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1137` → after: `L669-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L669-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L669-L682) · [Before (L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1137)

```diff
-               VV.wheelDeltaPercentage = eV
+               HH.lodLevelInAlpha = BH
+             }
+           },
+           metadata: SH
+         }, EB, XB), (0, AH.g)(null, null, cH, {
+           kind: "field",
+           name: "isRenderTarget",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "isRenderTarget" in HH,
+             get: HH => HH.isRenderTarget,
+             set: (HH, BH) => {
+               HH.isRenderTarget = BH
```

#### 93. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1147` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L692) · [Before (L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1147)

```diff
-       })(), VV
+       })(), HH.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, HH
```

#### 94. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1149-L1222` → after: `L694-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L694-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L694-L711) · [Before (L1149-L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1149-L1222)

```diff
-     tV.b.ArcRotateCameraMouseWheelInput = GV;
-     var WV, RV, gV = xV(41138);
-     class DV extends tV.e {
-       constructor(VV) {
-         super(VV)
-       }
-       addMouseWheel() {
-         return this.add(new GV), this
-       }
-       addPointers() {
-         return this.add(new AV), this
-       }
-       addKeyboard() {
-         return this.add(new XV), this
-       }
-     }(WV = DV.prototype).addVRDeviceOrientation ?? (WV.addVRDeviceOrientation = (0, gV.j)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (RV = DV.prototype).addGamepad ?? (RV.addGamepad = (0, gV.j)("ArcRotateCameraInputsManager", "addGamepad"));
- ... (58 more removed lines; see GitHub link above)
+     (XH = uH.prototype).forceSphericalPolynomialsRecompute ?? (XH.forceSphericalPolynomialsRecompute = (0, YH.f)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(uH.prototype, "sphericalPolynomial") || Object.defineProperty(uH.prototype, "sph … [truncated]
+   },
+   41777: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => TH,
+       g: () => vH
+     });
+     var AH = LH(41290),
+       rH = LH(41297),
+       SH = LH(37997),
+       hH = LH(37963),
+       tH = LH(41283),
+       zH = LH(38012),
+       CH = LH(41169),
+       EH = LH(41179),
+       XH = LH(41392),
+ ... (2 more added lines; see GitHub link above)
```

#### 95. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1225` → after: `L714-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L714-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L714-L746) · [Before (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1225)

```diff
-       return isNaN(VV) ? eV : VV
+       let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+       const AH = BH.width,
+         rH = BH.height;
+       if (HH instanceof Float32Array) {
+         let BH = HH.byteLength / HH.BYTES_PER_ELEMENT;
+         const LH = new Uint8Array(BH);
+         for (; --BH >= 0;) {
+           let AH = HH[BH];
+           AH < 0 ? AH = 0 : AH > 1 && (AH = 1), LH[BH] = 255 * AH
+         }
+         HH = LH
+       }
+       const SH = document.createElement("canvas");
+       SH.width = AH, SH.height = rH;
+       const hH = SH.getContext("2d");
+       if (!hH) return null;
+ ... (17 more added lines; see GitHub link above)
```

#### 96. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1229-L1235` → after: `L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L760) · [Before (L1229-L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1229-L1235)

```diff
-         let eV, xV, QV, wV, ZV, kV, bV, tV, TV, PV, AV, NV, XV, MV, zV, GV, WV, RV, gV, iV, CV, aV, hV, lV, LV, fV, mV, KV, HV = qV.g,
-           uV = [],
-           sV = [],
-           SV = [],
-           IV = [],
-           dV = [],
-           OV = [],
+         let BH, LH, uH, vH, PH, TH, UH, VH, OH, bH, kH, mH, oH, IH = tH.e,
```

#### 97. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1256-L1433` → after: `L781-L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L781-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L781-L789) · [Before (L1256-L1433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1256-L1433)

```diff
-           te = [],
-           Fe = [],
-           Te = [],
-           Pe = [],
-           Ae = [],
-           Ne = [],
-           Xe = [],
-           Me = [],
-           ze = [],
-           Ge = [],
-           We = [],
-           Re = [],
-           ge = [],
-           De = [],
-           ie = [],
-           Ce = [],
- ... (162 more removed lines; see GitHub link above)
+           pH = [],
+           yH = [],
+           HB = [],
+           BB = [],
+           LB = [];
+         return HH = class extends IH {
+           static _CreateVideoTexture(BH, LH, AH) {
+             arguments.length > 5 && void 0 !== arguments[5] || HH.TRILINEAR_SAMPLINGMODE;
+             throw (0, CH.i)("VideoTexture")
```

#### 98. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1435-L1437` → after: `L791-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L791-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L791-L792) · [Before (L1435-L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1435-L1437)

```diff
-           get zoomToMouseLocation() {
-             const VV = this.inputs.attached.mousewheel;
-             return !!VV && VV.zoomToMouseLocation
+           get noMipmap() {
+             return this._noMipmap
```

#### 99. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1439-L1441` → after: `L794-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L794-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L794-L795) · [Before (L1439-L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1439-L1441)

```diff
-           set zoomToMouseLocation(VV) {
-             const eV = this.inputs.attached.mousewheel;
-             eV && (eV.zoomToMouseLocation = VV)
+           get mimeType() {
+             return this._mimeType
```

#### 100. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1443-L1445` → after: `L797-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L797-L798) · [Before (L1443-L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1443-L1445)

```diff
-           get wheelDeltaPercentage() {
-             const VV = this.inputs.attached.mousewheel;
-             return VV ? VV.wheelDeltaPercentage : 0
+           set isBlocking(HH) {
+             this._isBlocking = HH
```

#### 101. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1447-L1449` → after: `L800-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L800-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L800-L801) · [Before (L1447-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1447-L1449)

```diff
-           set wheelDeltaPercentage(VV) {
-             const eV = this.inputs.attached.mousewheel;
-             eV && (eV.wheelDeltaPercentage = VV)
+           get isBlocking() {
+             return this._isBlocking
```

#### 102. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1451-L1452` → after: `L803-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L803-L804) · [Before (L1451-L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1451-L1452)

```diff
-           get _useCtrlForPanning() {
-             return this._useCtrlForPanningInternal
+           get invertY() {
+             return this._invertY
```

#### 103. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1454-L1465` → after: `L806-L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L806-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L806-L827) · [Before (L1454-L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1454-L1465)

```diff
-           set _useCtrlForPanning(VV) {
-             this._useCtrlForPanningInternal = VV;
-             const eV = this.movement.input,
-               xV = eV.getEntry("keyboard", "pan", {
-                 modifiers: {
-                   ctrl: !0
-                 }
-               });
-             !VV && xV ? eV.inputMap.splice(eV.inputMap.indexOf(xV), 1) : VV && !xV && eV.addEntry({
-               source: "keyboard",
-               modifiers: {
-                 ctrl: !0
+           constructor(BH, LH, rH, hH) {
+             let tH, zH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : HH.TRILINEAR_SAMPLINGMODE,
+               CH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+               XH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
+               GH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
+               YH = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+               uH = arguments.length > 9 ? arguments[9] : void 0,
+               QH = arguments.length > 10 ? arguments[10] : void 0,
+               WH = arguments.length > 11 ? arguments[11] : void 0,
+               xH = arguments.length > 12 ? arguments[12] : void 0,
+               vH = arguments.length > 13 ? arguments[13] : void 0;
+             super(LH), this.url = ((0, AH.k)(this, fH), (0, AH.k)(this, lH, null)), this.uOffset = ((0, AH.k)(this, KH), (0, AH.k)(this, cH, 0)), this.vOffset = ((0, AH.k)(this, eH), (0, AH.k)(this, qH, 0)), this.uScale = ((0, AH.k)(this, gH), (0, AH.k)(this, NH, 1)), this.vScale … [truncated]
+             let PH = !1,
+               TH = null,
+               UH = !0;
+             "object" === typeof rH && null !== rH ? (tH = rH.noMipmap ?? !1, hH = rH.invertY ?? !MH.c, zH = rH.samplingMode ?? HH.TRILINEAR_SAMPLINGMODE, CH = rH.onLoad ?? null, XH = rH.onError ?? null, GH = rH.buffer ?? null, YH = rH.deleteBuffer ?? !1, uH = rH.format, QH = rH.m … [truncated]
+ ... (6 more added lines; see GitHub link above)
```

#### 104. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1467-L1471` → after: `L829-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L829-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L829-L842) · [Before (L1467-L1471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1467-L1471)

```diff
-               interaction: "pan"
-             });
-             const JV = eV.getEntry("pointer", "pan", {
-               modifiers: {
-                 ctrl: !0
+               kH = (BH, LH) => {
+                 this._loadingError = !0, this._errorObject = {
+                   message: BH,
+                   exception: LH
+                 }, XH && XH(BH, LH), HH.OnTextureLoadErrorObservable.notifyObservers(this)
+               };
+             if (!this.url && !TH) return this._delayedOnLoad = bH, void(this._delayedOnError = kH);
+             if (this._texture = TH ?? this._getFromCache(this.url, tH, zH, this._invertY, PH, this.isCube), this._texture)
+               if (this._texture.isReady) EH.d.SetImmediate((() => bH()));
+               else {
+                 const HH = this._texture.onLoadedObservable.add(bH);
+                 this._texture.onErrorObservable.add((BH => {
+                   kH(BH.message, BH.exception), this._texture?.onLoadedObservable.remove(HH)
+                 }))
```

#### 105. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1473-L1549` → after: `L844-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L844-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L844-L851) · [Before (L1473-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1473-L1549)

```diff
-             });
-             !VV && JV ? eV.inputMap.splice(eV.inputMap.indexOf(JV), 1) : VV && !JV && eV.addEntry({
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
-           set _panningMouseButton(VV) {
-             this._panningMouseButtonInternal = VV;
-             const eV = this.movement.input.getEntry("pointer", "pan", {
- ... (61 more removed lines; see GitHub link above)
+             else if (VH && VH.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = bH, this._delayedOnError = kH;
+             else {
+               try {
+                 this._texture = OH.createTexture(this.url, tH, this._invertY, VH, zH, bH, kH, this._buffer, void 0, this._format, this._forcedExtension, QH, WH, xH, PH)
+               } catch (mH) {
+                 throw kH("error loading", mH), mH
+               }
+               YH && (this._buffer = null)
```

#### 106. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1575-L1580` → after: `L854-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L854-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L854-L888) · [Before (L1575-L1580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1575-L1580)

```diff
-           attachControl(VV, eV) {
-             let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
-               JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
-             const YV = arguments;
-             eV = FV.j.BackCompatCameraNoPreventDefault(YV), this._useCtrlForPanning = xV, this._panningMouseButton = JV, "boolean" === typeof YV[0] && (YV.length > 1 && (this._useCtrlForPanning = YV[1]), YV.length > 2 && (this._panningMouseButton = YV[2])), this.inputs.attachElem … [truncated]
-               this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
+           updateURL(HH) {
+             let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+               LH = arguments.length > 2 ? arguments[2] : void 0,
+               AH = arguments.length > 3 ? arguments[3] : void 0;
+             this.url && (this.releaseInternalTexture(), this.yN().markAllMaterialsAsDirty(1, (HH => HH.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = HH), this.url = HH, this._buffer = BH, this._forcedExtension = AH, this.delayLoadState = 4;
+             const rH = this._delayedOnLoad;
+             this._delayedOnLoad = () => {
+               rH ? rH() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), LH && LH()
+             }, this.delayLoad()
+           }
+           delayLoad() {
+             if (4 !== this.delayLoadState) return;
+             const HH = this.yN();
+             if (!HH) return;
+             let BH = this.url;
+             !BH && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (BH = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(BH, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delay … [truncated]
+ ... (19 more added lines; see GitHub link above)
```

#### 107. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1583-L1584` → after: `L937-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L937-L938) · [Before (L1583-L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1583-L1584)

```diff
-           detachControl() {
-             this.inputs.detachElement(), this._reset && this._reset()
+           getClassName() {
+             return "Texture"
```

#### 108. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1586-L1589` → after: `L940-L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L940-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L940-L941) · [Before (L1586-L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1586-L1589)

```diff
-           _applyRotationAndZoomDelta(VV, eV, xV) {
-             const JV = this.invertRotation ? -1 : 1;
-             let YV = VV * this._calculateHandednessMultiplier();
-             this.beta < 0 && (YV *= -1), this.alpha += YV * JV, this.beta += eV * JV, this.radius -= xV
+           dispose() {
+             super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
```

#### 109. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1591-L1605` → after: `L943-L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L943-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L943-L957) · [Before (L1591-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1591-L1605)

```diff
-           _applyPanDelta(VV, eV) {
-             const xV = yV.l.Ik[0].FeV(VV, eV, eV);
-             if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), xV.multiplyInPlace(this.panningAxis), yV.o.TransformNormalToRef(xV, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
-               const VV = this.upVector,
-                 eV = yV.o.CrossToRef(this._transformedDirection, VV, this._transformedDirection);
-               yV.o.CrossToRef(VV, eV, this._transformedDirection)
-             } else this.panningAxis.y || (this._transformedDirection.y = 0);
-             if (!this._targetHost)
-               if (null !== this.panningDistanceLimit) {
-                 this._transformedDirection.addInPlace(this.CZ);
-                 yV.o.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.CZ.iG(this._transformedDirection)
-               } else {
-                 if (this.parent) {
-                   const VV = yV.l.Matrix[0];
-                   this.parent.getWorldMatrix().getRotationMatrixToRef(VV), VV.transposeToRef(VV), yV.o.TransformCoordinatesToRef(this._transformedDirection, VV, this._transformedDirection)
+           static Parse(BH, LH, AH) {
+             if (BH.customType) {
+               const HH = XH.c.Instantiate(BH.customType).Parse(BH, LH, AH);
+               return BH.samplingMode && HH.updateSamplingMode && HH._samplingMode && HH._samplingMode !== BH.samplingMode && HH.updateSamplingMode(BH.samplingMode), HH
+             }
+             if (BH.isCube && !BH.isRenderTarget) return HH._CubeTextureParser(BH, LH, AH);
+             const rH = void 0 !== BH.internalTextureUniqueId;
+             if (!BH.name && !BH.isRenderTarget && !rH) return null;
+             let SH;
+             if (rH) {
+               const HH = LH.Iu().getLoadedTexturesCache();
+               for (const LH of HH)
+                 if (LH.uniqueId === BH.internalTextureUniqueId) {
+                   SH = LH;
+                   break
```

#### 110. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1623-L1631` → after: `L960-L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L960-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L960-L963) · [Before (L1623-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1623-L1631)

```diff
-             if (VV) this.stopInterpolation();
-             else if (this._isInterpolating) {
-               let VV = !1;
-               const eV = this._scene.sk().getDeltaTime() / 1e3,
-                 xV = 1 - Math.pow(2, -eV / this._currentInterpolationFactor),
-                 JV = cV(this._goalRadius, this.radius);
-               if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
-                 const eV = yV.l.Ik[0].set(cV(this._goalTarget.x, this.CZ.x), cV(this._goalTarget.y, this.CZ.y), cV(this._goalTarget.z, this.CZ.z));
-                 yV.o.LerpToRef(this.target, eV, xV, this.CZ), 10 * yV.o.Distance(this.target, eV) / JV < vV.b ? (this._goalTarget.set(NaN, NaN, NaN), this.target.iG(eV), this.setTarget(this.target, !1, !0, !0)) : VV = !0
+             const hH = HH => {
+               if (HH && HH._texture && (HH._texture._cachedWrapU = null, HH._texture._cachedWrapV = null, HH._texture._cachedWrapR = null), BH.samplingMode) {
+                 const LH = BH.samplingMode;
+                 HH && HH.samplingMode !== LH && HH.updateSamplingMode(LH)
```

#### 111. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1633-L1643` → after: `L965-L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L965-L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L965-L977) · [Before (L1633-L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1633-L1643)

```diff
-               if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
-                 const eV = yV.h.RotationAlphaBetaGammaToRef(cV(this._goalAlpha, this.alpha), cV(this._goalBeta, this.beta), 0, yV.l.Quaternion[0]),
-                   JV = yV.h.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, yV.l.Quaternion[1]),
-                   YV = yV.h.SlerpToRef(JV, eV, xV, yV.l.Quaternion[2]);
-                 YV.normalize();
-                 const UV = YV.toAlphaBetaGammaToRef(yV.l.Ik[0]);
-                 if (this.alpha = UV.x, this.beta = UV.y, YV.isApprox(eV, vV.b / 5)) {
-                   this._goalAlpha = NaN, this._goalBeta = NaN;
-                   const VV = eV.toAlphaBetaGammaToRef(yV.l.Ik[0]);
-                   this.alpha = VV.x, this.beta = VV.y
-                 } else VV = !0
+               if (HH && BH.animations)
+                 for (let LH = 0; LH < BH.animations.length; LH++) {
+                   const AH = BH.animations[LH],
+                     rH = (0, zH.b)("BABYLON.Animation");
+                   rH && HH.animations.push(rH.Parse(AH))
+                 }
+               HH && HH._texture && (rH && !SH && HH._texture._setUniqueId(BH.internalTextureUniqueId), HH._texture.label = BH.internalTextureLabel)
+             };
+             return xH.c.Parse((() => {
+               let rH = !0;
+               if (BH.noMipmap && (rH = !1), BH.mirrorPlane) {
+                 const AH = HH._CreateMirror(BH.name, BH.renderTargetSize, LH, rH);
+                 return AH._waitingRenderList = BH.renderList, AH.mirrorPlane = GH.d.FromArray(BH.mirrorPlane), hH(AH), AH
```

#### 112. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1645-L1647` → after: `L979-L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L979-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L979-L988) · [Before (L1645-L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1645-L1647)

```diff
-               if (isNaN(this._goalRadius) || (this.radius += (JV - this.radius) * xV, Math.abs(JV / this.radius - 1) < vV.b ? (this._goalRadius = NaN, this.radius = JV) : VV = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
-                 const eV = yV.l.Vector2[0].set(cV(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), cV(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
-                 yV.n.LerpToRef(this.targetScreenOffset, eV, xV, this.targetScreenOffset), yV.n.Distance(this.targetScreenOffset, eV) < vV.b ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.iG(eV)) : VV = !0
+               if (BH.isRenderTarget && !BH.base64String) {
+                 let AH = null;
+                 if (BH.isCube) {
+                   if (LH.reflectionProbes)
+                     for (let HH = 0; HH < LH.reflectionProbes.length; HH++) {
+                       const AH = LH.reflectionProbes[HH];
+                       if (AH.name === BH.name) return AH.cubeTexture
+                     }
+                 } else AH = HH._CreateRenderTargetTexture(BH.name, BH.renderTargetSize, LH, rH, BH._creationFlags ?? 0), AH._waitingRenderList = BH.renderList;
+                 return hH(AH), AH
```

#### 113. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1649-L1773` → after: `L990-L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L990-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L990-L1044) · [Before (L1649-L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1649-L1773)

```diff
-               this._isInterpolating = VV
-             }
-             this._checkLimits(), super._checkInputs()
-           }
-           _checkLimits() {
-             null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === thi … [truncated]
-           }
-           rebuildAnglesAndRadius() {
-             this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || yV.o.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.ra … [truncated]
-             const VV = this.alpha;
-             var eV, xV;
-             this.alpha = function(VV) {
-               let eV = Math.PI / 2;
-               return 0 === VV.x && 0 === VV.z || (eV = Math.acos(VV.x / Math.sqrt(Math.pow(VV.x, 2) + Math.pow(VV.z, 2)))), VV.z < 0 && (eV = 2 * Math.PI - eV), eV
-             }(this._computationVector), this.beta = (eV = this._computationVector.y, xV = this.radius, Math.acos(eV / xV));
-             const JV = Math.round((VV - this.alpha) / (2 * Math.PI));
- ... (109 more removed lines; see GitHub link above)
+               if (BH.isVideo) {
+                 const SH = HH._CreateVideoTexture(AH + (BH.url || BH.name), AH + (BH.src || BH.url), LH, rH, BH.invertY, BH.samplingMode, BH.settings || {});
+                 return hH(SH), SH
+               } {
+                 let tH;
+                 if ("string" === typeof BH.base64String && BH.base64String && !SH) {
+                   const AH = {
+                       buffer: BH.base64String,
+                       noMipmap: !rH,
+                       invertY: BH.invertY,
+                       samplingMode: BH.samplingMode,
+                       useSRGBBuffer: BH._useSRGBBuffer ?? !1,
+                       creationFlags: BH._creationFlags ?? 0,
+                       onLoad: () => {
+                         hH(tH)
+                       }
+ ... (39 more added lines; see GitHub link above)
```

#### 114. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1777-L1817` → after: `L1048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1048) · [Before (L1777-L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1777-L1817)

```diff
-           eV = [(0, YV.J)()], xV = [(0, YV.J)()], QV = [(0, YV.J)()], wV = [(0, YV.J)()], ZV = [(0, YV.I)("target")], kV = [(0, YV.C)("targetHost")], bV = [(0, YV.J)()], tV = [(0, YV.J)()], TV = [(0, YV.J)()], PV = [(0, YV.J)()], AV = [(0, YV.J)()], NV = [(0, YV.J)()], XV = [(0,  … [truncated]
-             kind: "getter",
-             name: "inertialAlphaOffset",
-             static: !1,
-             private: !1,
-             access: {
-               has: VV => "inertialAlphaOffset" in VV,
-               get: VV => VV.inertialAlphaOffset
-             },
-             metadata: UV
-           }, null, uV), (0, JV.i)(VV, null, tV, {
-             kind: "getter",
-             name: "inertialBetaOffset",
-             static: !1,
-             private: !1,
-             access: {
- ... (25 more removed lines; see GitHub link above)
+           BH = [(0, rH.H)()], LH = [(0, rH.H)()], uH = [(0, rH.H)()], vH = [(0, rH.H)()], PH = [(0, rH.H)()], TH = [(0, rH.H)()], UH = [(0, rH.H)()], VH = [(0, rH.H)()], OH = [(0, rH.H)()], bH = [(0, rH.H)()], kH = [(0, rH.H)()], mH = [(0, rH.H)()], oH = [(0, rH.H)()], (0, AH.g)( … [truncated]
```

#### 115. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1819-L1959` → after: `L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1050) · [Before (L1819-L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1819-L1959)

```diff
-             name: "zoomToMouseLocation",
-             static: !1,
-             private: !1,
-             access: {
-               has: VV => "zoomToMouseLocation" in VV,
-               get: VV => VV.zoomToMouseLocation
-             },
-             metadata: UV
-           }, null, uV), (0, JV.i)(null, null, eV, {
-             kind: "field",
-             name: "alpha",
-             static: !1,
-             private: !1,
-             access: {
-               has: VV => "alpha" in VV,
-               get: VV => VV.alpha,
- ... (125 more removed lines; see GitHub link above)
+             name: "isBlocking",
```

#### 116. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1963-L1967` → after: `L1054-L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1054-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1054-L1055) · [Before (L1963-L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1963-L1967)

```diff
-               has: VV => "lowerRadiusLimit" in VV,
-               get: VV => VV.lowerRadiusLimit,
-               set: (VV, eV) => {
-                 VV.lowerRadiusLimit = eV
-               }
+               has: HH => "isBlocking" in HH,
+               get: HH => HH.isBlocking
```

#### 117. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1970` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1058) · [Before (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1970)

```diff
-           }, be, Ee), (0, JV.i)(null, null, zV, {
+           }, null, fH), (0, AH.g)(null, null, BH, {
```

#### 118. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1972` → after: `L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1060) · [Before (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1972)

```diff
-             name: "upperRadiusLimit",
+             name: "url",
```

#### 119. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1976-L1977` → after: `L1064-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1064-L1065) · [Before (L1976-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1976-L1977)

```diff
-               has: VV => "upperRadiusLimit" in VV,
-               get: VV => VV.upperRadiusLimit,
+               has: HH => "url" in HH,
+               get: HH => HH.url,
```

#### 120. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1979` → after: `L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1067) · [Before (L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1979)

```diff
-                 VV.upperRadiusLimit = eV
+                 HH.url = BH
```

#### 121. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1983` → after: `L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1071) · [Before (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1983)

```diff
-           }, Be, je), (0, JV.i)(null, null, GV, {
+           }, lH, KH), (0, AH.g)(null, null, LH, {
```

#### 122. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1985` → after: `L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1073) · [Before (L1985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1985)

```diff
-             name: "lowerTargetYLimit",
+             name: "uOffset",
```

#### 123. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1989-L1990` → after: `L1077-L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1077-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1077-L1078) · [Before (L1989-L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1989-L1990)

```diff
-               has: VV => "lowerTargetYLimit" in VV,
-               get: VV => VV.lowerTargetYLimit,
+               has: HH => "uOffset" in HH,
+               get: HH => HH.uOffset,
```

#### 124. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1992` → after: `L1080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1080) · [Before (L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1992)

```diff
-                 VV.lowerTargetYLimit = eV
+                 HH.uOffset = BH
```

#### 125. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1996` → after: `L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1084) · [Before (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1996)

```diff
-           }, qe, te), (0, JV.i)(null, null, WV, {
+           }, cH, eH), (0, AH.g)(null, null, uH, {
```

#### 126. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L1998` → after: `L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1086) · [Before (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L1998)

```diff
-             name: "inertialPanningX",
+             name: "vOffset",
```

#### 127. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2002-L2003` → after: `L1090-L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1090-L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1090-L1091) · [Before (L2002-L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2002-L2003)

```diff
-               has: VV => "inertialPanningX" in VV,
-               get: VV => VV.inertialPanningX,
+               has: HH => "vOffset" in HH,
+               get: HH => HH.vOffset,
```

#### 128. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2005` → after: `L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1093) · [Before (L2005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2005)

```diff
-                 VV.inertialPanningX = eV
+                 HH.vOffset = BH
```

#### 129. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2009` → after: `L1097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1097) · [Before (L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2009)

```diff
-           }, Fe, Te), (0, JV.i)(null, null, RV, {
+           }, qH, gH), (0, AH.g)(null, null, vH, {
```

#### 130. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2011` → after: `L1099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1099) · [Before (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2011)

```diff
-             name: "inertialPanningY",
+             name: "uScale",
```

#### 131. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2015-L2016` → after: `L1103-L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1103-L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1103-L1104) · [Before (L2015-L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2015-L2016)

```diff
-               has: VV => "inertialPanningY" in VV,
-               get: VV => VV.inertialPanningY,
+               has: HH => "uScale" in HH,
+               get: HH => HH.uScale,
```

#### 132. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2018` → after: `L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1106) · [Before (L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2018)

```diff
-                 VV.inertialPanningY = eV
+                 HH.uScale = BH
```

#### 133. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2022` → after: `L1110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1110) · [Before (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2022)

```diff
-           }, Pe, Ae), (0, JV.i)(null, null, gV, {
+           }, NH, RH), (0, AH.g)(null, null, PH, {
```

#### 134. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2024` → after: `L1112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1112) · [Before (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2024)

```diff
-             name: "pinchToPanMaxDistance",
+             name: "vScale",
```

#### 135. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2028-L2029` → after: `L1116-L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1116-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1116-L1117) · [Before (L2028-L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2028-L2029)

```diff
-               has: VV => "pinchToPanMaxDistance" in VV,
-               get: VV => VV.pinchToPanMaxDistance,
+               has: HH => "vScale" in HH,
+               get: HH => HH.vScale,
```

#### 136. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2031` → after: `L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1119) · [Before (L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2031)

```diff
-                 VV.pinchToPanMaxDistance = eV
+                 HH.vScale = BH
```

#### 137. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2035` → after: `L1123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1123) · [Before (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2035)

```diff
-           }, Ne, Xe), (0, JV.i)(null, null, iV, {
+           }, jH, nH), (0, AH.g)(null, null, TH, {
```

#### 138. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2037` → after: `L1125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1125) · [Before (L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2037)

```diff
-             name: "panningDistanceLimit",
+             name: "uAng",
```

#### 139. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2041-L2042` → after: `L1129-L1130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1129-L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1129-L1130) · [Before (L2041-L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2041-L2042)

```diff
-               has: VV => "panningDistanceLimit" in VV,
-               get: VV => VV.panningDistanceLimit,
+               has: HH => "uAng" in HH,
+               get: HH => HH.uAng,
```

#### 140. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2044` → after: `L1132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1132) · [Before (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2044)

```diff
-                 VV.panningDistanceLimit = eV
+                 HH.uAng = BH
```

#### 141. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2048` → after: `L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1136) · [Before (L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2048)

```diff
-           }, Me, ze), (0, JV.i)(null, null, CV, {
+           }, FH, DH), (0, AH.g)(null, null, UH, {
```

#### 142. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2050` → after: `L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1138) · [Before (L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2050)

```diff
-             name: "panningOriginTarget",
+             name: "vAng",
```

#### 143. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2054-L2055` → after: `L1142-L1143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1142-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1142-L1143) · [Before (L2054-L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2054-L2055)

```diff
-               has: VV => "panningOriginTarget" in VV,
-               get: VV => VV.panningOriginTarget,
+               has: HH => "vAng" in HH,
+               get: HH => HH.vAng,
```

#### 144. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2057` → after: `L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1145) · [Before (L2057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2057)

```diff
-                 VV.panningOriginTarget = eV
+                 HH.vAng = BH
```

#### 145. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2061` → after: `L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1149) · [Before (L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2061)

```diff
-           }, Ge, We), (0, JV.i)(null, null, lV, {
+           }, wH, ZH), (0, AH.g)(null, null, VH, {
```

#### 146. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2063` → after: `L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1151) · [Before (L2063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2063)

```diff
-             name: "zoomOnFactor",
+             name: "wAng",
```

#### 147. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2067-L2068` → after: `L1155-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1155-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1155-L1156) · [Before (L2067-L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2067-L2068)

```diff
-               has: VV => "zoomOnFactor" in VV,
-               get: VV => VV.zoomOnFactor,
+               has: HH => "wAng" in HH,
+               get: HH => HH.wAng,
```

#### 148. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2070` → after: `L1158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1158) · [Before (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2070)

```diff
-                 VV.zoomOnFactor = eV
+                 HH.wAng = BH
```

#### 149. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2074` → after: `L1162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1162) · [Before (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2074)

```diff
-           }, Re, ge), (0, JV.i)(null, null, LV, {
+           }, dH, aH), (0, AH.g)(null, null, OH, {
```

#### 150. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2076` → after: `L1164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1164) · [Before (L2076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2076)

```diff
-             name: "targetScreenOffset",
+             name: "uRotationCenter",
```

#### 151. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2080-L2081` → after: `L1168-L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1168-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1168-L1169) · [Before (L2080-L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2080-L2081)

```diff
-               has: VV => "targetScreenOffset" in VV,
-               get: VV => VV.targetScreenOffset,
+               has: HH => "uRotationCenter" in HH,
+               get: HH => HH.uRotationCenter,
```

#### 152. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2083` → after: `L1171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1171) · [Before (L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2083)

```diff
-                 VV.targetScreenOffset = eV
+                 HH.uRotationCenter = BH
```

#### 153. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2087` → after: `L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1175) · [Before (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2087)

```diff
-           }, De, ie), (0, JV.i)(null, null, fV, {
+           }, sH, JH), (0, AH.g)(null, null, bH, {
```

#### 154. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2089` → after: `L1177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1177) · [Before (L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2089)

```diff
-             name: "allowUpsideDown",
+             name: "vRotationCenter",
```

#### 155. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2093-L2094` → after: `L1181-L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1181-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1181-L1182) · [Before (L2093-L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2093-L2094)

```diff
-               has: VV => "allowUpsideDown" in VV,
-               get: VV => VV.allowUpsideDown,
+               has: HH => "vRotationCenter" in HH,
+               get: HH => HH.vRotationCenter,
```

#### 156. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2096` → after: `L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1184) · [Before (L2096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2096)

```diff
-                 VV.allowUpsideDown = eV
+                 HH.vRotationCenter = BH
```

#### 157. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2100` → after: `L1188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1188) · [Before (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2100)

```diff
-           }, Ce, ae), (0, JV.i)(null, null, mV, {
+           }, iH, pH), (0, AH.g)(null, null, kH, {
```

#### 158. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2102` → after: `L1190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1190) · [Before (L2102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2102)

```diff
-             name: "useInputToRestoreState",
+             name: "wRotationCenter",
```

#### 159. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2106-L2107` → after: `L1194-L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1194-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1194-L1195) · [Before (L2106-L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2106-L2107)

```diff
-               has: VV => "useInputToRestoreState" in VV,
-               get: VV => VV.useInputToRestoreState,
+               has: HH => "wRotationCenter" in HH,
+               get: HH => HH.wRotationCenter,
```

#### 160. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2109` → after: `L1197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1197) · [Before (L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2109)

```diff
-                 VV.useInputToRestoreState = eV
+                 HH.wRotationCenter = BH
```

#### 161. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2113` → after: `L1201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1201) · [Before (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2113)

```diff
-           }, oe, ce), (0, JV.i)(null, null, KV, {
+           }, yH, HB), (0, AH.g)(null, null, mH, {
```

#### 162. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2115` → after: `L1203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1203) · [Before (L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2115)

```diff
-             name: "restoreStateInterpolationFactor",
+             name: "homogeneousRotationInUVTransform",
```

#### 163. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2119-L2120` → after: `L1207-L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1207-L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1207-L1208) · [Before (L2119-L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2119-L2120)

```diff
-               has: VV => "restoreStateInterpolationFactor" in VV,
-               get: VV => VV.restoreStateInterpolationFactor,
+               has: HH => "homogeneousRotationInUVTransform" in HH,
+               get: HH => HH.homogeneousRotationInUVTransform,
```

#### 164. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2122` → after: `L1210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1210) · [Before (L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2122)

```diff
-                 VV.restoreStateInterpolationFactor = eV
+                 HH.homogeneousRotationInUVTransform = BH
```

#### 165. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2132` → after: `L1220-L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1220-L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1220-L1226) · [Before (L2132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2132)

```diff
-         })(), VV
+         })(), HH.SerializeBuffers = !0, HH.ForceSerializeBuffers = !1, HH.OnTextureLoadErrorObservable = new SH.d, HH._SerializeInternalTextureUniqueId = !1, HH._CubeTextureParser = (HH, BH, LH) => {
+           throw (0, CH.i)("CubeTexture")
+         }, HH._CreateMirror = (HH, BH, LH, AH) => {
+           throw (0, CH.i)("MirrorTexture")
+         }, HH._CreateRenderTargetTexture = (HH, BH, LH, AH, rH) => {
+           throw (0, CH.i)("RenderTargetTexture")
+         }, HH.NEAREST_SAMPLINGMODE = 1, HH.NEAREST_NEAREST_MIPLINEAR = 8, HH.BILINEAR_SAMPLINGMODE = 2, HH.LINEAR_LINEAR_MIPNEAREST = 11, HH.TRILINEAR_SAMPLINGMODE = 3, HH.LINEAR_LINEAR_MIPLINEAR = 3, HH.NEAREST_NEAREST_MIPNEAREST = 4, HH.NEAREST_LINEAR_MIPNEAREST = 5, HH.NEAREST … [truncated]
```

#### 166. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2135-L2142` → after: `L1229-L1232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1229-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1229-L1232) · [Before (L2135-L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2135-L2142)

```diff
-     lV || (lV = !0, QV.e.AddNodeConstructor("ArcRotateCamera", ((VV, eV) => () => new hV(VV, 0, 0, 1, yV.o.Zero(), eV))), (0, iV.d)("BABYLON.ArcRotateCamera", hV))
-   },
-   41510: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => JV.c
-     });
-     var JV = xV(41512);
-     (0, JV.g)()
+ 
+     function TH() {
+       PH || (PH = !0, (0, zH.f)("BABYLON.Texture", vH), xH.c._TextureParser = vH.Parse)
+     }
```

#### 167. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2144` → after: `L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1234) · [Before (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2144)

```diff
-   41512: (VV, eV, xV) => {
+   41312: (HH, BH, LH) => {
```

#### 168. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2146-L2147` → after: `L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1236) · [Before (L2146-L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2146-L2147)

```diff
-       c: () => wV,
-       g: () => vV
+       c: () => AH
```

#### 169. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L2149-L2235` → after: `L1238-L1289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L1238-L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/285.js#L1238-L1289) · [Before (L2149-L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/285.js#L2149-L2235)

```diff
-     var JV = xV(41257),
-       YV = xV(41263),
-       UV = xV(38269),
-       yV = xV(38389),
-       pV = xV(41521),
-       QV = xV(41486),
-       nV = xV(38318);
-     let wV = (() => {
-         var VV;
-         let eV, xV, QV = pV.d,
-           nV = [],
-           wV = [],
-           ZV = [],
-           vV = [];
-         return VV = class extends QV {
-           constructor(VV, eV, xV, YV) {
- ... (71 more removed lines; see GitHub link above)
+     class AH {
+       constructor(HH, BH) {
+         this.width = HH, this.height = BH
+       }
+       toString() {
+         return `{W: ${this.width}, H: ${this.height}}`
+       }
+       getClassName() {
+         return "Size"
+       }
+       getHashCode() {
+         let HH = 0 | this.width;
+         return HH = 397 * HH ^ this.height, HH
+       }
+       Tm(HH) {
+         this.width = HH.width, this.height = HH.height
+ ... (36 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/286.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/286.js` (55 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469)

#### 1. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L4-L81` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L4) · [Before (L4-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L4-L81)

```diff
-   41655: (VV, eV, xV) => {
-     xV.d(eV, {
-       c: () => YV
-     });
-     var JV = xV(41266);
- 
-     function YV(VV) {
-       return class extends VV {
-         constructor() {
-           super(...arguments);
-           const VV = new.target;
-           if (!VV[Symbol.metadata]) {
-             const eV = Object.getPrototypeOf(VV)?.[Symbol.metadata];
-             VV[Symbol.metadata] = eV ? Object.create(eV) : {}
-           }
-           const eV = (0, JV.e)(VV[Symbol.metadata]);
- ... (62 more removed lines; see GitHub link above)
+   41520: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L86-L299` → after: `L9-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L9-L12) · [Before (L86-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L86-L299)

```diff
-     var JV = xV(41544);
- 
-     function YV(VV) {
-       return class extends VV {
-         constructor() {
-           super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING … [truncated]
-         }
-       }
-     }
-     class UV extends JV.e {
-       constructor() {
-         super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this. … [truncated]
-       }
-     }
-   },
-   41616: (VV, eV, xV) => {
- ... (198 more removed lines; see GitHub link above)
+     var AH = LH(39595),
+       rH = LH(41319),
+       SH = LH(41489),
+       hH = {};
```

#### 3. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L302-L334` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L15) · [Before (L302-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L302-L334)

```diff
-         if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, … [truncated]
-           for (const eV in VV) Object.prototype.hasOwnProperty.call(VV, eV) && this._setDefaultValue(eV)
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
- ... (17 more removed lines; see GitHub link above)
+         this.attachedToElement = !1, this.attached = {}, this.camera = HH, this.checkInputs = () => {}
```

#### 4. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L336-L337` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L17-L19) · [Before (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L336-L337)

```diff
-       markAsPrePassDirty() {
-         this._arePrePassDirty = !0, this._isDirty = !0
+       add(HH) {
+         const BH = HH.getSimpleName();
+         this.attached[BH] ? AH.e.Warn("camera input of type " + BH + " already exists on camera") : (this.attached[BH] = HH, HH.camera = this.camera, HH.checkInputs && (this.checkInputs = this._addCheckInputs(HH.checkInputs.bind(HH))), this.attachedToElement && HH.attachControl(t … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L339-L357` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L21-L24) · [Before (L339-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L339-L357)

```diff
-       rebuild() {
-         this._keys.length = 0;
-         for (const VV of Object.keys(this)) "_" !== VV[0] && this._keys.push(VV);
-         if (this._externalProperties)
-           for (const VV in this._externalProperties) - 1 === this._keys.indexOf(VV) && this._keys.push(VV)
-       }
-       isEqual(VV) {
-         if (this._keys.length !== VV._keys.length) return !1;
-         for (let eV = 0; eV < this._keys.length; eV++) {
-           const xV = this._keys[eV];
-           if (this[xV] !== VV[xV]) return !1
-         }
-         return !0
-       }
-       cloneTo(VV) {
-         this._keys.length !== VV._keys.length && (VV._keys = this._keys.slice(0));
- ... (3 more removed lines; see GitHub link above)
+       remove(HH) {
+         for (const BH in this.attached) {
+           const LH = this.attached[BH];
+           if (LH === HH) return LH.detachControl(), LH.camera = null, delete this.attached[BH], void this.rebuildInputCheck()
```

#### 6. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L360-L374` → after: `L27-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L27-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L27-L30) · [Before (L360-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L360-L374)

```diff
-       reset() {
-         for (const VV of this._keys) this._setDefaultValue(VV)
-       }
-       _setDefaultValue(VV) {
-         const eV = this._externalProperties?.[VV]?.type ?? typeof this[VV],
-           xV = this._externalProperties?.[VV]?.default;
-         switch (eV) {
-           case "number":
-             this[VV] = xV ?? 0;
-             break;
-           case "string":
-             this[VV] = xV ?? "";
-             break;
-           default:
-             this[VV] = xV ?? !1
+       removeByType(HH) {
+         for (const BH in this.attached) {
+           const LH = this.attached[BH];
+           LH.getClassName() === HH && (LH.detachControl(), LH.camera = null, delete this.attached[BH], this.rebuildInputCheck())
```

#### 7. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L377-L389` → after: `L33-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L33-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L33-L36) · [Before (L377-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L377-L389)

```diff
-       toString() {
-         let VV = "";
-         for (let eV = 0; eV < this._keys.length; eV++) {
-           const xV = this._keys[eV],
-             JV = this[xV];
-           switch (typeof JV) {
-             case "number":
-             case "string":
-               VV += "#define " + xV + " " + JV + "\n";
-               break;
-             default:
-               JV && (VV += "#define " + xV + "\n")
-           }
+       _addCheckInputs(HH) {
+         const BH = this.checkInputs;
+         return () => {
+           BH(), HH()
```

#### 8. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L434-L435` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L39-L40) · [Before (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L434-L435)

```diff
-       static GetConfiguration(VV) {
-         return pV._Configurations[VV]
+       attachInput(HH) {
+         this.attachedToElement && HH.attachControl(this.noPreventDefault)
```

#### 9. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L437-L443` → after: `L42-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L42-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L42-L46) · [Before (L437-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L437-L443)

```diff
-       static _PrepareConfiguration(VV, eV, xV) {
-         const JV = pV._Configurations[VV];
-         JV._attachments = eV, JV._colorAttachments = xV, JV._mrtCount = eV.length;
-         let YV = "#define PREPASS\n";
-         for (const UV of pV.GeometryTextureDescriptions) {
-           const VV = JV.defines[UV.defineIndex];
-           void 0 !== VV && (YV += `#define ${UV.define}\n#define ${UV.defineIndex} ${VV}\n`)
+       attachElement() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         if (!this.attachedToElement) {
+           HH = !SH.d.ForceAttachControlToAlwaysPreventDefault && HH, this.attachedToElement = !0, this.noPreventDefault = HH;
+           for (const BH in this.attached) this.attached[BH].attachControl(HH)
```

#### 10. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L459-L495` → after: `L49-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L49-L52) · [Before (L459-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L459-L495)

```diff
-       static _BindColorAttachments(VV) {
-         const eV = pV._Configurations[VV.currentRenderPassId];
-         return !eV?._colorAttachments || (VV.bindAttachments(eV._colorAttachments), void 0 !== eV.defines.PREPASS_COLOR_INDEX)
-       }
-       static _IsColorAttachmentEnabled(VV) {
-         const eV = pV._Configurations[VV.currentRenderPassId];
-         return !eV?._colorAttachments || void 0 !== eV.defines.PREPASS_COLOR_INDEX
-       }
-       static _BindZeroAlphaDiscard(VV, eV) {
-         const xV = pV._Configurations[VV.currentRenderPassId];
-         if (!xV) return;
-         const JV = VV.getAlphaMode(),
-           YV = void 0 === xV.defines.PREPASS_COLOR_INDEX || 2 === JV || 1 === JV || 17 === JV;
-         eV.setFloat("geometryZeroAlphaDiscard", YV ? 1 : 0)
-       }
-       static AddUniformsAndSamplers(VV, eV) {
- ... (21 more removed lines; see GitHub link above)
+       detachElement() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         for (const BH in this.attached) this.attached[BH].detachControl(), HH && (this.attached[BH].camera = null);
+         this.attachedToElement = !1
```

#### 11. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L497-L522` → after: `L54-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L54-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L54-L58) · [Before (L497-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L497-L522)

```diff
-       static Bind(VV, eV, xV, JV, YV) {
-         const QV = pV._Configurations[VV];
-         if (!QV) return;
-         const nV = xV.dD(),
-           wV = nV.sk();
-         if (QV.reverseCulling && wV.setStateCullFaceType(nV._mirroredCameraPosition ? YV.cullBackFaces : !YV.cullBackFaces), void 0 !== QV.defines.PREPASS_OBJECT_ID_INDEX) {
-           const VV = QV.objectIdIsRedFormat ? 255 : 16777215;
-           let JV = xV.uniqueId;
-           if (QV.objectIdProvider) JV = UV(xV, QV.objectIdProvider, VV);
-           else if (JV > VV) throw new Error(`Invalid geometry object ID ${JV} for mesh "${xV.name}". Object IDs must be integers between 0 and 0x${VV.toString(16).toUpperCase()}.`);
-           eV.setFloat("objectId", JV)
-         }
-         if (void 0 !== QV.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
-           const VV = QV.meshBlendTagProvider ? yV(xV, QV.meshBlendTagProvider) : xV.meshBlendingTag;
-           eV.setInt("meshBlendTag", VV)
-         }
- ... (10 more removed lines; see GitHub link above)
+       rebuildInputCheck() {
+         this.checkInputs = () => {};
+         for (const HH in this.attached) {
+           const BH = this.attached[HH];
+           BH.checkInputs && (this.checkInputs = this._addCheckInputs(BH.checkInputs.bind(BH)))
```

#### 12. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L525-L642` → after: `L61-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L61-L62) · [Before (L525-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L525-L642)

```diff
-     }
-     pV.GeometryTextureDescriptions = [{
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

#### 13. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L644-L649` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L64) · [Before (L644-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L644-L649)

```diff
-       _addPlugin(VV) {
-         for (let JV = 0; JV < this._plugins.length; ++JV)
-           if (this._plugins[JV].name === VV.name) return !1;
-         if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !VV.isCompatible(this._material.shaderLanguage)) throw `The plugin "${VV.name}" can't be added to the material "${this._material.name}" because the pl … [truncated]
-         const eV = VV.getClassName();
-         QV._MaterialPluginClassToMainDefine[eV] || (QV._MaterialPluginClassToMainDefine[eV] = "MATERIALPLUGIN_" + ++QV._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (VV, eV) => this._handlePluginEvent(VV, eV), this._plugins.push(VV), this._plugins.sort(((V … [truncated]
+       serialize(HH) {
```

#### 14. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L651-L756` → after: `L66-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L66-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L66-L82) · [Before (L651-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L651-L756)

```diff
-         xV[QV._MaterialPluginClassToMainDefine[eV]] = {
-           type: "boolean",
-           default: !0
-         };
-         for (const JV of this._plugins) JV.collectDefines(xV), this._collectPointNames("vertex", JV.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", JV.getCustomCode("fragment", this._material.shaderLanguage));
-         return this._defineNamesFromPlugins = xV, !0
-       }
-       _activatePlugin(VV) {
-         -1 === this._activePlugins.indexOf(VV) && (this._activePlugins.push(VV), this._activePlugins.sort(((VV, eV) => VV.priority - eV.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callback … [truncated]
-       }
-       getPlugin(VV) {
-         for (let eV = 0; eV < this._plugins.length; ++eV)
-           if (this._plugins[eV].name === VV) return this._plugins[eV];
-         return null
-       }
-       _handlePluginEventIsReadyForSubMesh(VV) {
- ... (90 more removed lines; see GitHub link above)
+         for (const LH in this.attached) {
+           const HH = this.attached[LH],
+             AH = rH.c.Serialize(HH);
+           BH[HH.getClassName()] = AH
+         }
+         HH.inputsmgr = BH
+       }
+       parse(HH) {
+         const BH = HH.inputsmgr;
+         if (BH) {
+           this.clear();
+           for (const HH in BH) {
+             const LH = hH[HH];
+             if (LH) {
+               const AH = BH[HH],
+                 SH = rH.c.Parse((() => new LH), AH, null);
+ ... (1 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L760-L792` → after: `L85-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L85-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L85-L90) · [Before (L760-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L760-L792)

```diff
-         }
-       }
-       _collectPointNames(VV, eV) {
-         if (eV)
-           for (const xV in eV) this._codeInjectionPoints[VV] || (this._codeInjectionPoints[VV] = {}), this._codeInjectionPoints[VV][xV] = !0
-       }
-       _injectCustomCode(VV, eV) {
-         return (xV, JV) => {
-           eV && (JV = eV(xV, JV)), this._uboDeclaration && (JV = JV.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (JV = JV.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && ( … [truncated]
-           const YV = this._codeInjectionPoints?.[xV];
-           if (!YV) return JV;
-           let QV = null;
-           for (let eV in YV) {
-             let YV = "";
-             for (const JV of this._activePlugins) {
-               const pV = this._material.shaderLanguage;
- ... (17 more removed lines; see GitHub link above)
+         } else
+           for (const LH in this.attached) {
+             const BH = hH[this.attached[LH].getClassName()];
+             if (BH) {
+               const AH = rH.c.Parse((() => new BH), HH, null);
+               this.remove(this.attached[LH]), this.add(AH)
```

#### 16. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L821-L830` → after: `L95-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L95-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L95-L115) · [Before (L821-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L821-L830)

```diff
-     QV._MaterialPluginClassToMainDefine = {}, QV._MaterialPluginCounter = 0;
- 
-     function nV(VV, eV) {
-       return VV.replace(/\$(\d+)/g, ((VV, xV) => {
-         const JV = Number(xV);
-         return JV < eV.length ? eV[JV] : ""
-       }))
-     }
-     var wV = xV(41279),
-       ZV = xV(38318);
+   },
+   42427: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => vH
+     });
+     var AH = LH(41290),
+       rH = LH(41297),
+       SH = LH(41179),
+       hH = LH(37963),
+       tH = LH(41283),
+       zH = LH(41777),
+       CH = LH(38012),
+       EH = LH(37997),
+       XH = LH(41319),
+       GH = LH(41122),
+       YH = LH(39595),
+ ... (5 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L833` → after: `L118-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L118-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L118-L126) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L833)

```diff
-         let eV, xV, UV, yV, pV = [],
+         let BH, LH, CH, vH, PH, TH, UH, VH, OH, bH = tH.e,
+           kH = [],
+           mH = [],
+           oH = [],
+           IH = [],
+           fH = [],
+           lH = [],
+           KH = [],
+           cH = [],
```

#### 18. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L841-L877` → after: `L134-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L134-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L134-L139) · [Before (L841-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L841-L877)

```diff
-         return VV = class {
-           isCompatible(VV) {
-             return 0 === VV
-           }
-           _enable(VV) {
-             VV && this._pluginManager._activatePlugin(this)
-           }
-           constructor(VV, eV, xV, YV) {
-             let UV = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
-               yV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-               wV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-             this.name = (0, JV.l)(this, pV, void 0), this.priority = ((0, JV.l)(this, nV), (0, JV.l)(this, ZV, 500)), this.resolveIncludes = ((0, JV.l)(this, vV), (0, JV.l)(this, rV, !1)), this.registerForExtraEvents = ((0, JV.l)(this, kV), (0, JV.l)(this, bV, !1)), this.doNotSer … [truncated]
-               VV.pluginManager = void 0
-             }))), this._pluginDefineNames = YV, this._pluginManager = VV.pluginManager, UV && this._pluginManager._addPlugin(this), yV && this._enable(!0), this.markAllDefinesAsDirty = VV._dirtyCallbacks[127]
-           }
-           getClassName() {
- ... (21 more removed lines; see GitHub link above)
+         return HH = class extends bH {
+           set boundingBoxSize(HH) {
+             if (this._boundingBoxSize && this._boundingBoxSize.equals(HH)) return;
+             this._boundingBoxSize = HH;
+             const BH = this.yN();
+             BH && BH.markAllMaterialsAsDirty(1)
```

#### 19. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L879-L882` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L141-L142) · [Before (L879-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L879-L882)

```diff
-           prepareDefinesBeforeAttributes(VV, eV, xV) {}
-           prepareDefines(VV, eV, xV) {}
-           hasTexture(VV) {
-             return !1
+           get boundingBoxSize() {
+             return this._boundingBoxSize
```

#### 20. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L884-L885` → after: `L144-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L144-L145) · [Before (L884-L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L884-L885)

```diff
-           hasRenderTargetTextures() {
-             return !1
+           set rotationY(HH) {
+             this._rotationY = HH, this.setReflectionTextureMatrix(hH.e.RotationY(this._rotationY))
```

#### 21. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L887-L891` → after: `L147-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L147-L148) · [Before (L887-L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L887-L891)

```diff
-           fillRenderTargetTextures(VV) {}
-           getActiveTextures(VV) {}
-           getAnimatables(VV) {}
-           addFallbacks(VV, eV, xV) {
-             return xV
+           get rotationY() {
+             return this._rotationY
```

#### 22. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L893-L897` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L150-L151) · [Before (L893-L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L893-L897)

```diff
-           getSamplers(VV) {}
-           getAttributes(VV, eV, xV) {}
-           getUniformBuffersNames(VV) {}
-           getUniforms() {
-             return {}
+           get noMipmap() {
+             return this._noMipmap
```

#### 23. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L899-L900` → after: `L153-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L153-L154) · [Before (L899-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L899-L900)

```diff
-           copyTo(VV) {
-             wV.b.Clone((() => VV), this)
+           get forcedExtension() {
+             return this._forcedExtension
```

#### 24. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L902-L903` → after: `L156-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L156-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L156-L243) · [Before (L902-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L902-L903)

```diff
-           serialize() {
-             return wV.b.Serialize(this)
+           constructor(HH, BH) {
+             let LH, rH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+               SH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+               tH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+               CH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+               XH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
+               vH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
+               PH = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+               TH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
+               UH = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
+               VH = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
+               OH = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
+               bH = arguments.length > 13 ? arguments[13] : void 0,
+               FH = arguments.length > 14 ? arguments[14] : void 0;
+             super(BH), this._delayedOnLoad = (0, AH.k)(this, kH), this.onLoadObservable = new EH.d, this.url = (0, AH.k)(this, mH, void 0), this.boundingBoxPosition = ((0, AH.k)(this, oH), (0, AH.k)(this, IH, hH.o.Zero())), this._boundingBoxSize = (0, AH.k)(this, fH), this._rotat … [truncated]
+               let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
+ ... (72 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L905-L906` → after: `L245-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L245-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L245-L311) · [Before (L905-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L905-L906)

```diff
-           parse(VV, eV, xV) {
-             wV.b.Parse((() => this), VV, eV, xV)
+           getClassName() {
+             return "CubeTexture"
+           }
+           updateURL(HH) {
+             let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+               LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+               AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+               rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+               SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+               hH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+               tH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
+               zH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
+             this.name && !this.name.startsWith("data:") || (this.name = HH), this.url = HH, BH && (this._forcedExtension = BH);
+             const CH = HH.lastIndexOf("."),
+               EH = BH || (CH > -1 ? HH.substring(CH).toLowerCase() : ""),
+               XH = 0 === EH.indexOf(".dds"),
+ ... (51 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L909-L910` → after: `L314-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L314-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L314-L376) · [Before (L909-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L909-L910)

```diff
-           const QV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-           eV = [(0, YV.J)()], xV = [(0, YV.J)()], UV = [(0, YV.J)()], yV = [(0, YV.J)()], (0, JV.i)(null, null, eV, {
+           const SH = "function" === typeof Symbol && Symbol.metadata ? Object.create(bH[Symbol.metadata] ?? null) : void 0;
+           BH = [(0, rH.H)()], LH = [(0, rH.F)()], CH = [(0, rH.F)()], vH = [(0, rH.H)("rotationY")], PH = [(0, rH.H)("files")], TH = [(0, rH.H)("forcedExtension")], UH = [(0, rH.H)("extensions")], VH = [(0, rH.t)("textureMatrix")], OH = [(0, rH.t)("textureMatrixRefraction")], (0, … [truncated]
+             kind: "getter",
+             name: "boundingBoxSize",
+             static: !1,
+             private: !1,
+             access: {
+               has: HH => "boundingBoxSize" in HH,
+               get: HH => HH.boundingBoxSize
+             },
+             metadata: SH
+           }, null, kH), (0, AH.g)(HH, null, vH, {
+             kind: "setter",
+             name: "rotationY",
+             static: !1,
+             private: !1,
+ ... (47 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L912` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L378) · [Before (L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L912)

```diff
-             name: "name",
+             name: "_forcedExtension",
```

#### 28. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L916-L917` → after: `L382-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L382-L383) · [Before (L916-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L916-L917)

```diff
-               has: VV => "name" in VV,
-               get: VV => VV.name,
+               has: HH => "_forcedExtension" in HH,
+               get: HH => HH._forcedExtension,
```

#### 29. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L919` → after: `L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L385) · [Before (L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L919)

```diff
-                 VV.name = eV
+                 HH._forcedExtension = BH
```

#### 30. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L923` → after: `L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L389) · [Before (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L923)

```diff
-           }, pV, nV), (0, JV.i)(null, null, xV, {
+           }, cH, eH), (0, AH.g)(null, null, UH, {
```

#### 31. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L925` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L391) · [Before (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L925)

```diff
-             name: "priority",
+             name: "_extensions",
```

#### 32. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L929-L930` → after: `L395-L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L395-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L395-L396) · [Before (L929-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L929-L930)

```diff
-               has: VV => "priority" in VV,
-               get: VV => VV.priority,
+               has: HH => "_extensions" in HH,
+               get: HH => HH._extensions,
```

#### 33. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L932` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L398) · [Before (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L932)

```diff
-                 VV.priority = eV
+                 HH._extensions = BH
```

#### 34. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L936` → after: `L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L402) · [Before (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L936)

```diff
-           }, ZV, vV), (0, JV.i)(null, null, UV, {
+           }, qH, gH), (0, AH.g)(null, null, VH, {
```

#### 35. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L938` → after: `L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L404) · [Before (L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L938)

```diff
-             name: "resolveIncludes",
+             name: "_textureMatrix",
```

#### 36. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L942-L943` → after: `L408-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L408-L409) · [Before (L942-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L942-L943)

```diff
-               has: VV => "resolveIncludes" in VV,
-               get: VV => VV.resolveIncludes,
+               has: HH => "_textureMatrix" in HH,
+               get: HH => HH._textureMatrix,
```

#### 37. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L945` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L411) · [Before (L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L945)

```diff
-                 VV.resolveIncludes = eV
+                 HH._textureMatrix = BH
```

#### 38. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L949` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L415) · [Before (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L949)

```diff
-           }, rV, kV), (0, JV.i)(null, null, yV, {
+           }, NH, RH), (0, AH.g)(null, null, OH, {
```

#### 39. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L951` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L417) · [Before (L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L951)

```diff
-             name: "registerForExtraEvents",
+             name: "_textureMatrixRefraction",
```

#### 40. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L955-L956` → after: `L421-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L421-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L421-L422) · [Before (L955-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L955-L956)

```diff
-               has: VV => "registerForExtraEvents" in VV,
-               get: VV => VV.registerForExtraEvents,
+               has: HH => "_textureMatrixRefraction" in HH,
+               get: HH => HH._textureMatrixRefraction,
```

#### 41. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L958` → after: `L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L424) · [Before (L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L958)

```diff
-                 VV.registerForExtraEvents = eV
+                 HH._textureMatrixRefraction = BH
```

#### 42. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L972-L973` → after: `L438-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L438-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L438-L464) · [Before (L972-L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L972-L973)

```diff
-     function kV() {
-       rV || (rV = !0, (0, ZV.d)("BABYLON.MaterialPluginBase", vV))
+     function TH(HH, BH, LH) {
+       let AH = "";
+       for (const rH of HH) AH += rH;
+       return new vH(AH, BH, null, LH, HH)
+     }
+ 
+     function UH(HH, BH) {
+       let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+         AH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+       const rH = BH.useDelayedTextureLoading;
+       BH.useDelayedTextureLoading = !1;
+       const SH = new vH(HH, BH, null, !1, null, null, null, void 0, !0, LH, AH);
+       return BH.useDelayedTextureLoading = rH, SH
+     }
+ 
+     function VH(HH, BH, LH) {
+ ... (11 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L976` → after: `L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L468) · [Before (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L976)

```diff
-   41529: (VV, eV, xV) => {
+   42472: (HH, BH, LH) => {
```

#### 44. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L978` → after: `L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L470) · [Before (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L978)

```diff
-       b: () => JV
+       e: () => CH
```

#### 45. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L980-L982` → after: `L472-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L472-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L472-L511) · [Before (L980-L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L980-L982)

```diff
-     class JV {
-       constructor() {
-         this.previousWorldMatrices = {}, this.previousBones = {}
+     var AH = LH(39595),
+       rH = LH(41777),
+       SH = LH(41222),
+       hH = LH(41129),
+       tH = LH(41122);
+     let zH = !1;
+     class CH extends rH.g {
+       constructor(HH, BH, LH) {
+         let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           CH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
+           EH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
+           XH = arguments.length > 6 ? arguments[6] : void 0;
+         const GH = !LH || LH._isScene;
+         super(null, GH ? LH : LH?.NQ, GH ? !AH : LH, XH, CH, void 0, void 0, void 0, void 0, EH), zH || (zH = !0, hH.ThinEngine.prototype.createDynamicTexture = function(HH, BH, LH, AH) {
+           const rH = new tH.e(this, 4);
+           return rH.baseWidth = HH, rH.baseHeight = BH, LH && (HH = this.needPOTTextures ? (0, SH.c)(HH, this._caps.maxTextureSize) : HH, BH = this.needPOTTextures ? (0, SH.c)(BH, this._caps.maxTextureSize) : BH), rH.width = HH, rH.height = BH, rH.isReady = !1, rH.generateMipMaps … [truncated]
+ ... (24 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L984-L985` → after: `L513-L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L513-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L513-L514) · [Before (L984-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L984-L985)

```diff
-       static AddUniforms(VV) {
-         VV.push("previousWorld", "previousViewProjection", "mPreviousBones")
+       getClassName() {
+         return "DynamicTexture"
```

#### 47. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L987-L993` → after: `L516-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L516-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L516-L517) · [Before (L987-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L987-L993)

```diff
-       static AddSamplers(VV) {}
-       bindForSubMesh(VV, eV, xV, JV, YV) {
-         if (eV.prePassRenderer && eV.prePassRenderer.enabled && eV.prePassRenderer.currentRTisSceneRT && (-1 !== eV.prePassRenderer.getIndex(2) || -1 !== eV.prePassRenderer.getIndex(11))) {
-           this.previousWorldMatrices[xV.uniqueId] || (this.previousWorldMatrices[xV.uniqueId] = JV.clone()), this.previousViewProjection || (this.previousViewProjection = eV.getTransformMatrix().clone(), this.currentViewProjection = eV.getTransformMatrix().clone());
-           const YV = eV.sk();
-           this.currentViewProjection.updateFlag !== eV.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = YV.frameId, this.previousViewProjection.iG(this.currentViewProjection), this.currentViewProjection.iG(eV.getTransformMatrix())) : this._lastUpdateFrameId !== YV.fra … [truncated]
-         }
+       get canRescale() {
+         return !0
```

#### 48. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L995-L1001` → after: `L519-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L519-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L519-L551) · [Before (L995-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L995-L1001)

```diff
-     }
-   },
-   41646: (VV, eV, xV) => {
-     function JV(VV) {
-       return class extends VV {
-         constructor() {
-           super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, th … [truncated]
+       _recreate(HH) {
+         this._canvas.width = HH.width, this._canvas.height = HH.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(HH.width, HH.height, this._generateMipMaps, this.samplingMode)
+       }
+       scale(HH) {
+         const BH = this.getSize();
+         BH.width *= HH, BH.height *= HH, this._recreate(BH)
+       }
+       scaleTo(HH, BH) {
+         const LH = this.getSize();
+         LH.width = HH, LH.height = BH, this._recreate(LH)
+       }
+       getContext() {
+         return this._context
+       }
+       clear(HH) {
+         const BH = this.getSize();
+ ... (17 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L1007` → after: `L582-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L582-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L582-L606) · [Before (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L1007)

```diff
-     })
+     });
+     var AH = LH(41777);
+     class rH extends AH.g {
+       get depth() {
+         return this._depth
+       }
+       constructor(HH, BH, LH, rH, SH, hH) {
+         let tH = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
+           zH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+           CH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : AH.g.TRILINEAR_SAMPLINGMODE,
+           EH = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
+           XH = arguments.length > 10 ? arguments[10] : void 0,
+           GH = arguments.length > 11 ? arguments[11] : void 0;
+         super(null, hH, !tH, zH), this.format = SH, this._texture = hH.Iu().createRawTexture2DArray(HH, BH, LH, rH, SH, tH, zH, CH, null, EH, XH ?? 0, GH), this._depth = rH, this.is2DArray = !0
+       }
+       update(HH) {
+ ... (9 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L1009` → after: `L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L608) · [Before (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L1009)

```diff
-   41524: (VV, eV, xV) => {
+   42439: (HH, BH, LH) => {
```

#### 51. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L1011` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L610) · [Before (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L1011)

```diff
-       StandardMaterial: () => JV.e
+       e: () => AH.b
```

#### 52. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L1013-L1014` → after: `L612-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L612-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L612-L613) · [Before (L1013-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L1013-L1014)

```diff
-     var JV = xV(41526);
-     (0, JV.b)()
+     var AH = LH(41648);
+     (0, AH.e)()
```

#### 53. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L1016` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L615) · [Before (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L1016)

```diff
-   41526: (VV, eV, xV) => {
+   41374: (HH, BH, LH) => {
```

#### 54. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L1018-L1019` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L617) · [Before (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L1018-L1019)

```diff
-       b: () => CV,
-       e: () => DV
+       e: () => AH.d
```

#### 55. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L1021-L2730` → after: `L619-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/286.js#L619-L620) · [Before (L1021-L2730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/286.js#L1021-L2730)

```diff
-     var JV = xV(41257),
-       YV = xV(41263),
-       UV = xV(41353),
-       yV = xV(41337),
-       pV = xV(38389),
-       QV = xV(41394),
-       nV = xV(41529),
-       wV = xV(41535),
-       ZV = xV(41360),
-       vV = xV(41553),
-       rV = xV(41544),
-       kV = xV(41606),
-       bV = xV(41598),
-       EV = xV(41610),
-       BV = xV(41616),
-       jV = xV(41591),
- ... (1694 more removed lines; see GitHub link above)
+     var AH = LH(41383);
+     (0, AH.c)()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/287.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/287.js` (126 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1)

#### 1. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4-L144` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/287.js#L4) · [Before (L4-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/287.js#L4-L144)

```diff
-   41563: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => JV
-     });
-     class JV {
-       constructor(VV, eV, xV) {
-         this.bu = VV, this.bv = eV, this.distance = xV, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
-       }
-     }
-   },
-   41572: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => yV
-     });
-     var JV = xV(38278),
-       YV = xV(38269),
- ... (125 more removed lines; see GitHub link above)
+   41478: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L148-L632` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/287.js#L8-L14) · [Before (L148-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/287.js#L148-L632)

```diff
-     var JV = xV(38278),
-       YV = xV(38269),
-       UV = xV(41572);
-     class yV {
-       constructor(VV, eV, xV) {
-         this.center = YV.o.Zero(), this.centerWorld = YV.o.Zero(), this.minimum = YV.o.Zero(), this.maximum = YV.o.Zero(), this.reConstruct(VV, eV, xV)
-       }
-       reConstruct(VV, eV, xV) {
-         this.minimum.iG(VV), this.maximum.iG(eV);
-         const JV = YV.o.Distance(VV, eV);
-         eV.addToRef(VV, this.center).scaleInPlace(.5), this.radius = .5 * JV, this._update(xV || YV.d.IdentityReadOnly)
-       }
-       scale(VV) {
-         const eV = yV._TmpVector3,
-           xV = this.maximum.subtractToRef(this.minimum, eV[0]),
-           JV = xV.length();
- ... (469 more removed lines; see GitHub link above)
+     var AH = LH(41290),
+       rH = LH(41297),
+       SH = LH(37963),
+       hH = LH(41483),
+       tH = LH(41520),
+       zH = LH(41464),
+       CH = LH(41387);
```

#### 3. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L635-L664` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/287.js#L17) · [Before (L635-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/287.js#L635-L664)

```diff
-       let eV, xV, BV, jV, qV, tV, FV, TV, PV, AV, NV, XV, MV, zV, GV, WV, RV, gV, DV, iV, CV, aV, oV, cV, hV, lV, LV, fV, mV, KV = [],
-         HV = [],
-         uV = [],
-         sV = [],
-         SV = [],
-         IV = [],
-         dV = [],
-         OV = [],
-         Ve = [],
-         ee = [],
-         xe = [],
-         Je = [],
-         Ye = [],
-         Ue = [],
-         ye = [],
-         pe = [],
- ... (14 more removed lines; see GitHub link above)
+       let BH, LH, hH, tH, EH, XH, GH, YH, uH, QH, WH, MH = [],
```

#### 4. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L687-L995` → after: `L40-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L40-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/287.js#L40-L55) · [Before (L687-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/287.js#L687-L995)

```diff
-         get useVertexPulling() {
-           return this._useVertexPulling
-         }
-         set useVertexPulling(eV) {
-           this._useVertexPulling !== eV && (this._useVertexPulling = eV, this.nJV(VV.MiscDirtyFlag))
-         }
-         get _supportGlowLayer() {
-           return !1
-         }
-         set _glowModeEnabled(VV) {}
-         get shaderLanguage() {
-           return this._shaderLanguage
-         }
-         get canRenderToMRT() {
-           return !1
-         }
- ... (293 more removed lines; see GitHub link above)
+         constructor() {
+           this.keysUp = (0, AH.k)(this, MH, [38]), this.keysUpward = ((0, AH.k)(this, xH), (0, AH.k)(this, vH, [33])), this.keysDown = ((0, AH.k)(this, PH), (0, AH.k)(this, TH, [40])), this.keysDownward = ((0, AH.k)(this, UH), (0, AH.k)(this, VH, [34])), this.keysLeft = ((0, AH.k … [truncated]
+         }
+         attachControl(HH) {
+           HH = CH.i.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.yN(), this._engine = this._scene.Iu(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
+             this._keys.length = 0
+           })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((BH => {
+             const LH = BH.event;
+             if (!LH.metaKey)
+               if (BH.type === zH.c.KEYDOWN) {
+                 if (-1 !== this.keysUp.indexOf(LH.keyCode) || -1 !== this.keysDown.indexOf(LH.keyCode) || -1 !== this.keysLeft.indexOf(LH.keyCode) || -1 !== this.keysRight.indexOf(LH.keyCode) || -1 !== this.keysUpward.indexOf(LH.keyCode) || -1 !== this.keysDownward.indexOf(LH.key … [truncated]
+                   -1 === this._keys.indexOf(LH.keyCode) && this._keys.push(LH.keyCode), HH || LH.preventDefault()
+                 }
+               } else if (-1 !== this.keysUp.indexOf(LH.keyCode) || -1 !== this.keysDown.indexOf(LH.keyCode) || -1 !== this.keysLeft.indexOf(LH.keyCode) || -1 !== this.keysRight.indexOf(LH.keyCode) || -1 !== this.keysUpward.indexOf(LH.keyCode) || -1 !== this.keysDownward.indexOf(L … [truncated]
+               const BH = this._keys.indexOf(LH.keyCode);
+               BH >= 0 && this._keys.splice(BH, 1), HH || LH.preventDefault()
```

#### 5. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L997-L1003` → after: `L57-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L57-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/287.js#L57-L75) · [Before (L997-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/287.js#L997-L1003)

```diff
-         }
-         getBindedMeshes() {
-           if (this.meshMap) {
-             const VV = [];
-             for (const eV in this.meshMap) {
-               const xV = this.meshMap[eV];
-               xV && VV.push(xV)
+           })))
+         }
+         detachControl() {
+           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
+         }
+         checkInputs() {
+           if (this._onKeyboardObserver) {
+             const HH = this.camera,
+               BH = HH.movement.input,
+               LH = BH.getEntry("keyboard", "translate"),
+               AH = BH.getEntry("keyboard", "rotate"),
+               rH = AH?.sensitivity ?? 1,
+               hH = HH._localDirection.SBH(0, 0, 0);
+             for (let SH = 0; SH < this._keys.length; SH++) {
+               const BH = this._keys[SH]; - 1 !== this.keysLeft.indexOf(BH) ? hH.x -= 1 : -1 !== this.keysUp.indexOf(BH) ? hH.z += 1 : -1 !== this.keysRight.indexOf(BH) ? hH.x += 1 : -1 !== this.keysDown.indexOf(BH) ? hH.z -= 1 : -1 !== this.keysUpward.indexOf(BH) ? hH.y += 1 : -1 … [truncated]
+             }
+ ... (3 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1146-L1152` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/287.js#L79-L80) · [Before (L1146-L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/287.js#L1146-L1152)

```diff
-         serialize() {
-           const VV = rV.b.Serialize(this);
-           return VV.stencil = this.stencil.serialize(), VV.uniqueId = this.uniqueId, this._serializePlugins(VV), VV
-         }
-         _serializePlugins(VV) {
-           if (VV.plugins = {}, this.pluginManager)
-             for (const eV of this.pluginManager._plugins) eV.doNotSerialize || (VV.plugins[eV.getClassName()] = eV.serialize())
+         getClassName() {
+           return "FreeCameraKeyboardMoveInput"
```

#### 7. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1154-L1155` → after: `L82-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/287.js#L82-L83) · [Before (L1154-L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/287.js#L1154-L1155)

```diff
-         static ParseAlphaMode(VV, eV) {
-           void 0 !== VV._alphaMode ? eV._alphaMode = Array.isArray(VV._alphaMode) ? [...VV._alphaMode] : [VV._alphaMode] : void 0 !== VV.alphaMode ? eV._alphaMode = Array.isArray(VV.alphaMode) ? [...VV.alphaMode] : [VV.alphaMode] : eV._alphaMode = [2]
+         _onLostFocus() {
+           this._keys.length = 0
```

#### 8. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1157-L1162` → after: `L85-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/287.js#L85-L86) · [Before (L1157-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/287.js#L1157-L1162)

```diff
-         static Parse(eV, xV, JV) {
-           if (eV.customType) {
-             if ("BABYLON.PBRMaterial" === eV.customType && eV.overloadedAlbedo && (eV.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return wV.b.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials  … [truncated]
-           } else eV.customType = "BABYLON.StandardMaterial";
-           const YV = UV.j.Instantiate(eV.customType).Parse(eV, xV, JV);
-           return YV._loadedUniqueId = eV.uniqueId, VV.ParseAlphaMode(eV, YV), YV
+         getSimpleName() {
+           return "keyboard"
```

#### 9. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1164-L1174` → after: `L88-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L88-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/287.js#L88-L90) · [Before (L1164-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/287.js#L1164-L1174)

```diff
-         static _ParsePlugins(VV, eV, xV, JV) {
-           if (VV.plugins)
-             for (const YV in VV.plugins) {
-               const yV = VV.plugins[YV];
-               let pV = eV.pluginManager?.getPlugin(yV.name);
-               if (!pV) {
-                 const VV = UV.j.Instantiate("BABYLON." + YV);
-                 VV && (pV = new VV(eV))
-               }
-               pV?.parse(yV, xV, JV)
-             }
+         _getLocalRotation() {
+           const HH = this.camera._calculateHandednessMultiplier();
+           return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * HH
```

#### 10. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1178-L1218` → after: `L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/287.js#L94) · [Before (L1178-L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/287.js#L1178-L1218)

```diff
-         eV = [(0, YV.J)()], xV = [(0, YV.J)()], BV = [(0, YV.J)()], jV = [(0, YV.J)()], qV = [(0, YV.J)()], tV = [(0, YV.J)()], FV = [(0, YV.J)()], TV = [(0, YV.J)("alpha")], PV = [(0, YV.J)("backFaceCulling")], AV = [(0, YV.J)("textureRepetitionMode")], NV = [(0, YV.J)("textureR … [truncated]
-           kind: "getter",
-           name: "pointsCloud",
-           static: !1,
-           private: !1,
-           access: {
-             has: VV => "pointsCloud" in VV,
-             get: VV => VV.pointsCloud
-           },
-           metadata: UV
-         }, null, KV), (0, JV.i)(VV, null, lV, {
-           kind: "getter",
-           name: "fillMode",
-           static: !1,
-           private: !1,
-           access: {
- ... (25 more removed lines; see GitHub link above)
+         BH = [(0, rH.H)()], LH = [(0, rH.H)()], hH = [(0, rH.H)()], tH = [(0, rH.H)()], EH = [(0, rH.H)()], XH = [(0, rH.H)()], GH = [(0, rH.H)()], YH = [(0, rH.H)()], uH = [(0, rH.H)()], QH = [(0, rH.H)()], WH = [(0, rH.H)()], (0, AH.g)(null, null, BH, {
```

#### 11. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1220` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/287.js#L96) · [Before (L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/287.js#L1220)

```diff
-           name: "id",
+           name: "keysUp",
```

#### 12. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1224-L1225` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/287.js#L100-L101) · [Before (L1224-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/287.js#L1224-L1225)

```diff
-             has: VV => "id" in VV,
-             get: VV => VV.id,
+             has: HH => "keysUp" in HH,
+             get: HH => HH.keysUp,
```

#### 13. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1227` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/287.js#L103) · [Before (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/287.js#L1227)

```diff
-               VV.id = eV
+               HH.keysUp = BH
```

#### 14. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1231` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/287.js#L107) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/287.js#L1231)

```diff
-         }, HV, uV), (0, JV.i)(null, null, xV, {
+         }, MH, xH), (0, AH.g)(null, null, LH, {
```

#### 15. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1233` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/287.js#L109) · [Before (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/287.js#L1233)

```diff
-           name: "uniqueId",
+           name: "keysUpward",
```

#### 16. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1237-L1238` → after: `L113-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/287.js#L113-L114) · [Before (L1237-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/287.js#L1237-L1238)

```diff
-             has: VV => "uniqueId" in VV,
-             get: VV => VV.uniqueId,
+             has: HH => "keysUpward" in HH,
+             get: HH => HH.keysUpward,
```

#### 17. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L1240` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/287.js#L116) · [Before (L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/287.js#L1240)

```diff
-               VV.uniqueId = eV
+               HH.keysUpward = BH
```
