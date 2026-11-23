# Changed — Bundle Modifications Report (Part 035 / 104)

- **Updated at**: `2026-11-24T00:51 JST`
- **Part**: `35 / 104` (**303** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 034](part-034.md) · [Part 036 →](part-036.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/258.js` (3lwmg.ecbaa066 → w4ddu.56408518 · continued)

- **File**: `bundles/bloxd.io/chunks/js/258.js` (127 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d)

#### 108. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L2328-L2333` → after: `L729-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L729-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L729-L746) · [Before (L2328-L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L2328-L2333)

```diff
-         static extractMinAndMax(kk, ek, ik, Dk, fk, Sk) {
-           for (let bk = ek, rk = ek * Dk; bk < ek + ik; bk++, rk += Dk) {
-             const ek = kk[rk],
-               ik = kk[rk + 1],
-               Dk = kk[rk + 2];
-             fk.minimizeInPlaceFromFloats(ek, ik, Dk), Sk.maximizeInPlaceFromFloats(ek, ik, Dk)
+         checkInputs() {
+           if (null === this._offsetX || null === this._offsetY) return;
+           if (0 === this._offsetX && 0 === this._offsetY) return;
+           const CC = this.camera,
+             zC = CC.movement.input,
+             ZC = zC.getEntry("touch", "rotate"),
+             QC = zC.getEntry("touch", "translate"),
+             wC = CC._calculateHandednessMultiplier(),
+             nC = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
+           if (ZC) {
+             const zC = ZC.sensitivity ?? 1 / this.touchAngularSensibility;
+             CC.cameraRotation.y = this._offsetX * wC * zC, nC && (CC.cameraRotation.x = -this._offsetY * wC * zC)
+           }
+           if (!nC && QC) {
+             const zC = CC._computeLocalCameraSpeed(),
+               ZC = QC.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
+ ... (2 more added lines; see GitHub link above)
```

#### 109. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L2338-L2345` → after: `L757-L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L757-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L757-L760) · [Before (L2338-L2345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L2338-L2345)

```diff
-         ek = [Sk.i.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
-         }))], ik = [Sk.i.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
-         }))], (0, Dk.d)(kk, null, ek, {
-           kind: "method",
-           name: "extractMinAndMaxIndexed",
-           static: !0,
+         zC = [(0, wC.M)()], ZC = [(0, wC.M)()], (0, QC.j)(null, null, zC, {
+           kind: "field",
+           name: "touchAngularSensibility",
+           static: !1,
```

#### 110. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L2348-L2349` → after: `L763-L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L763-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L763-L767) · [Before (L2348-L2349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L2348-L2349)

```diff
-             has: kk => "extractMinAndMaxIndexed" in kk,
-             get: kk => kk.extractMinAndMaxIndexed
+             has: CC => "touchAngularSensibility" in CC,
+             get: CC => CC.touchAngularSensibility,
+             set: (CC, zC) => {
+               CC.touchAngularSensibility = zC
+             }
```

#### 111. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L2352-L2355` → after: `L770-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L770-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L770-L773) · [Before (L2352-L2355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L2352-L2355)

```diff
-         }, null, fk), (0, Dk.d)(kk, null, ik, {
-           kind: "method",
-           name: "extractMinAndMax",
-           static: !0,
+         }, nC, fC), (0, QC.j)(null, null, ZC, {
+           kind: "field",
+           name: "touchMoveSensibility",
+           static: !1,
```

#### 112. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L2358-L2359` → after: `L776-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L776-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L776-L780) · [Before (L2358-L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L2358-L2359)

```diff
-             has: kk => "extractMinAndMax" in kk,
-             get: kk => kk.extractMinAndMax
+             has: CC => "touchMoveSensibility" in CC,
+             get: CC => CC.touchMoveSensibility,
+             set: (CC, zC) => {
+               CC.touchMoveSensibility = zC
+             }
```

#### 113. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L2362` → after: `L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L783) · [Before (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L2362)

```diff
-         }, null, fk), bk && Object.defineProperty(kk, Symbol.metadata, {
+         }, oC, FC), bC && Object.defineProperty(CC, Symbol.metadata, {
```

#### 114. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L2367` → after: `L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L788) · [Before (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L2367)

```diff
-         }), (0, Dk.e)(kk, fk)
+         })
```

#### 115. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L2370-L2427` → after: `L791-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L791-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L791-L795) · [Before (L2370-L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L2370-L2427)

```diff
- 
-     function rk(kk, ek, ik, Dk) {
-       let Sk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
-       const rk = new fk.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-         Pk = new fk.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-       return bk.extractMinAndMaxIndexed(kk, ek, ik, Dk, rk, Pk), Sk && (rk.x -= rk.x * Sk.x + Sk.y, rk.y -= rk.y * Sk.x + Sk.y, rk.z -= rk.z * Sk.x + Sk.y, Pk.x += Pk.x * Sk.x + Sk.y, Pk.y += Pk.y * Sk.x + Sk.y, Pk.z += Pk.z * Sk.x + Sk.y), {
-         minimum: rk,
-         maximum: Pk
-       }
-     }
- 
-     function Pk(kk, ek, ik) {
-       let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-         Sk = arguments.length > 4 ? arguments[4] : void 0;
-       const rk = new fk.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-         Pk = new fk.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
- ... (42 more removed lines; see GitHub link above)
+     fC.e.FreeCameraTouchInput = GC;
+     var RC, AC, xC, JC = ZC(39694);
+     class IC extends fC.i {
+       constructor(CC) {
+         super(CC), this._mouseInput = null, this._mouseWheelInput = null
```

#### 116. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L2429-L2430` → after: `L797-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L797-L798) · [Before (L2429-L2430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L2429-L2430)

```diff
-       _setMainDrawWrapperOverride(kk) {
-         this._mainDrawWrapperOverride = kk
+       addKeyboard() {
+         return this.add(new FC), this
```

#### 117. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L2432-L2477` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L800) · [Before (L2432-L2477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L2432-L2477)

```diff
-       setEffect(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           ik = arguments.length > 2 ? arguments[2] : void 0,
-           Dk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-         const fk = this._drawWrapper;
-         fk.setEffect(kk, ek, Dk), void 0 !== ik && (fk.materialContext = ik), kk || (fk.defines = null, fk.materialContext = void 0)
-       }
-       resetDrawCache(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         if (this._drawWrappers) {
-           if (void 0 !== kk) return void this._removeDrawWrapper(kk, !0, ek);
-           for (const kk of this._drawWrappers) kk?.dispose(ek)
-         }
-         this._drawWrappers = []
-       }
-       static AddToMesh(kk, ek, ik, Dk, fk, Sk, bk) {
- ... (30 more removed lines; see GitHub link above)
+       addMouse() {
```

#### 118. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L2479-L2503` → after: `L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L802) · [Before (L2479-L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L2479-L2503)

```diff
-         const ek = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
-         if (!ek) return kk && this._mesh.XF()._hasDefaultMaterial ? this._mesh.XF().defaultMaterial : null;
-         if (this._isMultiMaterial(ek)) {
-           const kk = ek.getSubMaterial(this.materialIndex);
-           return this._currentMaterial !== kk && (this._currentMaterial = kk, this.resetDrawCache()), kk
-         }
-         return ek
-       }
-       _isMultiMaterial(kk) {
-         return void 0 !== kk.getSubMaterial
-       }
-       refreshBoundingInfo() {
-         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
-         if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
-         if (kk || (kk = this._renderingMesh.getVerticesData(fk.e.PositionKind)), !kk) return this._boundingInfo = this._mesh.hq(), this;
-         const ek = this._renderingMesh.oik();
- ... (9 more removed lines; see GitHub link above)
+         return this._mouseInput || (this._mouseInput = new MC(CC), this.add(this._mouseInput)), this
```

#### 119. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L2505-L2506` → after: `L804-L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L804-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L804-L805) · [Before (L2505-L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L2505-L2506)

```diff
-       _checkCollision(kk) {
-         return this.hq()._checkCollision(kk)
+       removeMouse() {
+         return this._mouseInput && this.remove(this._mouseInput), this
```

#### 120. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L2508-L2510` → after: `L807-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L807-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L807-L808) · [Before (L2508-L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L2508-L2510)

```diff
-       updateBoundingInfo(kk) {
-         let ek = this.hq();
-         return ek || (this.refreshBoundingInfo(), ek = this.hq()), ek && ek.update(kk), this
+       addMouseWheel() {
+         return this._mouseWheelInput || (this._mouseWheelInput = new PC, this.add(this._mouseWheelInput)), this
```

#### 121. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L2512-L2514` → after: `L810-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L810-L811) · [Before (L2512-L2514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L2512-L2514)

```diff
-       isInFrustum(kk) {
-         const ek = this.hq();
-         return !!ek && ek.isInFrustum(kk, this._mesh.cullingStrategy)
+       removeMouseWheel() {
+         return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
```

#### 122. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L2516-L2518` → after: `L813-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L813-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L813-L814) · [Before (L2516-L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L2516-L2518)

```diff
-       isCompletelyInFrustum(kk) {
-         const ek = this.hq();
-         return !!ek && ek.isCompletelyInFrustum(kk)
+       addTouch() {
+         return this.add(new GC), this
```

#### 123. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L2520-L2521` → after: `L816-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L816-L817) · [Before (L2520-L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L2520-L2521)

```diff
-       render(kk) {
-         return this._renderingMesh.render(this, kk, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
+       clear() {
+         super.clear(), this._mouseInput = null
```

#### 124. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L2523-L2586` → after: `L819-L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L819-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L819-L836) · [Before (L2523-L2586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L2523-L2586)

```diff
-       _getLinesIndexBuffer(kk, ek) {
-         if (!this._linesIndexBuffer) {
-           const ik = 6 * Math.floor(this.indexCount / 3),
-             Dk = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(ik) : new Uint16Array(ik);
-           let fk = 0;
-           if (0 === kk.length)
-             for (let kk = this.indexStart; kk < this.indexStart + this.indexCount; kk += 3) Dk[fk++] = kk, Dk[fk++] = kk + 1, Dk[fk++] = kk + 1, Dk[fk++] = kk + 2, Dk[fk++] = kk + 2, Dk[fk++] = kk;
-           else
-             for (let ek = this.indexStart; ek < this.indexStart + this.indexCount; ek += 3) Dk[fk++] = kk[ek], Dk[fk++] = kk[ek + 1], Dk[fk++] = kk[ek + 1], Dk[fk++] = kk[ek + 2], Dk[fk++] = kk[ek + 2], Dk[fk++] = kk[ek];
-           this._linesIndexBuffer = ek.createIndexBuffer(Dk), this._linesIndexCount = Dk.length
-         }
-         return this._linesIndexBuffer
-       }
-       canIntersects(kk) {
-         const ek = this.hq();
-         return !!ek && kk.intersectsBox(ek.boundingBox)
- ... (48 more removed lines; see GitHub link above)
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
+ ... (2 more added lines; see GitHub link above)
```

#### 125. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L2588-L2596` → after: `L838-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L838-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L838-L840) · [Before (L2588-L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L2588-L2596)

```diff
-           const xk = ek[Dk],
-             nk = ek[Mk],
-             Uk = ek[Kk];
-           if (!xk || !nk || !Uk) continue;
-           if (bk && !bk(xk, nk, Uk, kk, Dk, Mk, Kk)) continue;
-           const Hk = kk.intersectsTriangle(xk, nk, Uk);
-           if (Hk) {
-             if (Hk.distance < 0) continue;
-             if ((Sk || !rk || Hk.distance < rk.distance) && (rk = Hk, rk.faceId = Pk, Sk)) break
+           set angularSensibility(CC) {
+             const zC = this.inputs.attached.mouse;
+             zC && (zC.angularSensibility = CC)
```

#### 126. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L2598-L2611` → after: `L842-L844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L842-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L842-L844) · [Before (L2598-L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L2598-L2611)

```diff
-         }
-         return rk
-       }
-       _intersectUnIndexedTriangles(kk, ek, ik, Dk, fk) {
-         let Sk = null;
-         for (let bk = this.verticesStart; bk < this.verticesStart + this.verticesCount; bk += 3) {
-           const ik = ek[bk],
-             rk = ek[bk + 1],
-             Pk = ek[bk + 2];
-           if (fk && !fk(ik, rk, Pk, kk, -1, -1, -1)) continue;
-           const mk = kk.intersectsTriangle(ik, rk, Pk);
-           if (mk) {
-             if (mk.distance < 0) continue;
-             if ((Dk || !Sk || mk.distance < Sk.distance) && (Sk = mk, Sk.faceId = bk / 3, Dk)) break
+           get keysUp() {
+             const CC = this.inputs.attached.keyboard;
+             return CC ? CC.keysUp : []
```

#### 127. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L2613-L2648` → after: `L846-L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L846-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L846-L1033) · [Before (L2613-L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L2613-L2648)

```diff
-         }
-         return Sk
-       }
-       _rebuild() {
-         this._linesIndexBuffer && (this._linesIndexBuffer = null)
-       }
-       clone(kk, ek) {
-         const ik = new Mk(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, kk, ek, !1);
-         if (!this.IsGlobal) {
-           const kk = this.hq();
-           if (!kk) return ik;
-           ik._boundingInfo = new bk.b(kk.minimum, kk.maximum)
-         }
-         return ik
-       }
-       dispose() {
- ... (20 more removed lines; see GitHub link above)
+           set keysUp(CC) {
+             const zC = this.inputs.attached.keyboard;
+             zC && (zC.keysUp = CC)
+           }
+           get keysUpward() {
+             const CC = this.inputs.attached.keyboard;
+             return CC ? CC.keysUpward : []
+           }
+           set keysUpward(CC) {
+             const zC = this.inputs.attached.keyboard;
+             zC && (zC.keysUpward = CC)
+           }
+           get keysDown() {
+             const CC = this.inputs.attached.keyboard;
+             return CC ? CC.keysDown : []
+           }
+ ... (172 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/259.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/259.js` (48 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b)

#### 1. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L4)

```diff
-   41166: (kk, ek, ik) => {
+   40084: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L8-L19` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L8-L16) · [Before (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L8-L19)

```diff
-     class Dk {}
-     Dk.AUTOSAMPLERSUFFIX = "Sampler", Dk.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", Dk.ALPHA_DISABLE = 0, Dk.ALPHA_ADD = 1, Dk.ALPHA_COMBINE = 2, Dk.ALPHA_SUBTRACT = 3, Dk.ALPHA_MULTIPLY = 4, Dk.ALPHA_MAXIMIZED = 5, Dk.ALPHA_ONEONE = 6, Dk.ALPHA_PREMULTIPLIED = 7, Dk.ALPH … [truncated]
-   },
-   41145: (kk, ek, ik) => {
-     ik.d(ek, {
-       b: () => Pk
-     });
-     var Dk = ik(39566),
-       fk = ik(39570),
-       Sk = ik(36698),
-       bk = ik(39822),
-       rk = ik(39790);
+     var QC = ZC(39811),
+       wC = ZC(39818),
+       bC = ZC(36963),
+       nC = ZC(37142),
+       fC = ZC(40046),
+       oC = ZC(39950),
+       qC = ZC(37002),
+       FC = ZC(40022),
+       WC = ZC(39842);
```

#### 3. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L21-L22` → after: `L18-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L18-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L18-L39) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L21-L22)

```diff
-       var kk;
-       let ek, ik, Pk, mk, Mk = bk.d,
+       var CC, zC;
+       let ZC, NC, MC, gC, SC, pC, PC, GC, RC, AC, xC, JC, IC, iC = fC.d,
+         vC = [],
+         eC = [],
+         hC = [],
+         KC = [],
+         YC = [],
+         dC = [],
+         mC = [],
+         HC = [],
+         EC = [],
+         lC = [],
+         XC = [],
+         cC = [],
+         uC = [],
+         rC = [],
+ ... (6 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L25-L32` → after: `L42-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L42-L43) · [Before (L25-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L25-L32)

```diff
-         constructor() {
-           super(...arguments), this._position = (0, Dk.e)(this, Kk), this._needProjectionMatrixCompute = !0, this._viewMatrix = Sk.b.Identity(), this._projectionMatrix = Sk.b.Identity()
-         }
-         _setPosition(kk) {
-           this._position = kk
-         }
-         get position() {
-           return this._position
+         get range() {
+           return this._range
```

#### 5. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L34-L35` → after: `L45-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L45-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L45-L46) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L34-L35)

```diff
-         set position(kk) {
-           this._setPosition(kk)
+         set range(CC) {
+           this._range = CC, this._inverseSquaredRange = 1 / (this.range * this.range)
```

#### 6. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L37-L38` → after: `L48-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L48-L49) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L37-L38)

```diff
-         _setDirection(kk) {
-           this._direction = kk
+         get intensityMode() {
+           return this._intensityMode
```

#### 7. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L40-L41` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L51-L52) · [Before (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L40-L41)

```diff
-         get direction() {
-           return this._direction
+         set intensityMode(CC) {
+           this._intensityMode = CC, this._computePhotometricScale()
```

#### 8. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L43-L44` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L54-L55) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L43-L44)

```diff
-         set direction(kk) {
-           this._setDirection(kk)
+         get radius() {
+           return this._radius
```

#### 9. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L46-L47` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L57-L58) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L46-L47)

```diff
-         get shadowMinZ() {
-           return this._shadowMinZ
+         set radius(CC) {
+           this._radius = CC, this._computePhotometricScale()
```

#### 10. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L49-L50` → after: `L60-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L60-L61) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L49-L50)

```diff
-         set shadowMinZ(kk) {
-           this._shadowMinZ = kk, this.forceProjectionMatrixCompute()
+         get renderPriority() {
+           return (0, QC.e)(this, zC, "f")
```

#### 11. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L52-L53` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L63-L64) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L52-L53)

```diff
-         get shadowMaxZ() {
-           return this._shadowMaxZ
+         set renderPriority(CC) {
+           (0, QC.f)(this, zC, CC, "f")
```

#### 12. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L55-L56` → after: `L66-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L66-L67) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L55-L56)

```diff
-         set shadowMaxZ(kk) {
-           this._shadowMaxZ = kk, this.forceProjectionMatrixCompute()
+         get shadowEnabled() {
+           return this._shadowEnabled
```

#### 13. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L58-L59` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L69-L70) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L58-L59)

```diff
-         computeTransformedInformation() {
-           return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = Sk.o.Zero()), Sk.o.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDire … [truncated]
+         set shadowEnabled(CC) {
+           this._shadowEnabled !== CC && (this._shadowEnabled = CC, this._markMeshesAsLightDirty())
```

#### 14. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L61-L62` → after: `L72-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L72-L73) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L61-L62)

```diff
-         getDepthScale() {
-           return 50
+         get includedOnlyMeshes() {
+           return this._includedOnlyMeshes
```

#### 15. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L64-L65` → after: `L75-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L75-L76) · [Before (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L64-L65)

```diff
-         getShadowDirection(kk) {
-           return this.transformedDirection ? this.transformedDirection : this.direction
+         set includedOnlyMeshes(CC) {
+           this._includedOnlyMeshes = CC, this._hookArrayForIncludedOnly(CC)
```

#### 16. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L67-L77` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L78-L79) · [Before (L67-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L67-L77)

```diff
-         getAbsolutePosition() {
-           return this.transformedPosition ? this.transformedPosition : this.position
-         }
-         setDirectionToTarget(kk) {
-           return this.direction = Sk.o.Normalize(kk.subtract(this.position)), this.direction
-         }
-         getRotation() {
-           this.direction.normalize();
-           const kk = Sk.o.Cross(this.direction, rk.d.Y),
-             ek = Sk.o.Cross(kk, this.direction);
-           return Sk.o.RotationFromAxis(kk, ek, this.direction)
+         get excludedMeshes() {
+           return this._excludedMeshes
```

#### 17. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L79-L80` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L81-L82) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L79-L80)

```diff
-         needCube() {
-           return !1
+         set excludedMeshes(CC) {
+           this._excludedMeshes = CC, this._hookArrayForExcluded(CC)
```

#### 18. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L82-L83` → after: `L84-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L84-L85) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L82-L83)

```diff
-         needProjectionMatrixCompute() {
-           return this._needProjectionMatrixCompute
+         get excludeWithLayerMask() {
+           return this._excludeWithLayerMask
```

#### 19. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L85-L86` → after: `L87-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L87-L88) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L85-L86)

```diff
-         forceProjectionMatrixCompute() {
-           this._needProjectionMatrixCompute = !0
+         set excludeWithLayerMask(CC) {
+           this._excludeWithLayerMask = CC, this._resyncMeshes()
```

#### 20. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L88-L89` → after: `L90-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L90-L91) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L88-L89)

```diff
-         _initCache() {
-           super._initCache(), this._cache.position = Sk.o.Zero()
+         get includeOnlyWithLayerMask() {
+           return this._includeOnlyWithLayerMask
```

#### 21. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L91-L92` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L93-L94) · [Before (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L91-L92)

```diff
-         _isSynchronized() {
-           return !!this._cache.position.equals(this.position)
+         set includeOnlyWithLayerMask(CC) {
+           this._includeOnlyWithLayerMask = CC, this._resyncMeshes()
```

#### 22. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L94-L95` → after: `L96-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L96-L97) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L94-L95)

```diff
-         computeWorldMatrix(kk) {
-           return !kk && this.isSynchronized() ? (this._currentRenderId = this.XF().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.Fs(this.position), this._worldMatrix || (this._worldMatrix = Sk.b.Identity()), Sk.b.TranslationToRef(this.position.x,  … [truncated]
+         get lightmapMode() {
+           return this._lightmapMode
```

#### 23. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L97-L98` → after: `L99-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L99-L100) · [Before (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L97-L98)

```diff
-         getDepthMinZ(kk) {
-           return void 0 !== this.shadowMinZ ? this.shadowMinZ : kk?.minZ || 0
+         set lightmapMode(CC) {
+           this._lightmapMode !== CC && (this._lightmapMode = CC, this._markMeshesAsLightDirty())
```

#### 24. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L100-L101` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L102-L103) · [Before (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L100-L101)

```diff
-         getDepthMaxZ(kk) {
-           return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : kk?.maxZ || 1e4
+         getViewMatrix(CC) {
+           return null
```

#### 25. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L103-L104` → after: `L105-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L105-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L105-L136) · [Before (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L103-L104)

```diff
-         setShadowProjectionMatrix(kk, ek, ik) {
-           return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(ek, ik, kk) : this._setDefaultShadowProjectionMatrix(kk, ek, ik), this
+         getProjectionMatrix(CC, zC) {
+           return null
+         }
+         constructor(ZC, wC, bC) {
+           super(ZC, wC, !1), this.diffuse = ((0, QC.n)(this, vC), (0, QC.n)(this, eC, new nC.e(1, 1, 1))), this.specular = ((0, QC.n)(this, hC), (0, QC.n)(this, KC, new nC.e(1, 1, 1))), this.falloffType = ((0, QC.n)(this, YC), (0, QC.n)(this, dC, CC.FALLOFF_DEFAULT)), this.intens … [truncated]
+         }
+         transferTexturesToEffect(CC, zC) {
+           return this
+         }
+         _bindLight(CC, zC, ZC, QC) {
+           let wC = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
+           const bC = CC.toString();
+           let fC = !1;
+           if (this._uniformBuffer.bindToEffect(ZC, "Light" + bC), this._renderId !== zC.getRenderId() || this._lastUseSpecular !== QC || !this._uniformBuffer.useUbo) {
+             this._renderId = zC.getRenderId(), this._lastUseSpecular = QC;
+             const CC = this.getScaledIntensity();
+ ... (16 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L107` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L139) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L107)

```diff
-           super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
+           super._syncParentEnabledState(), this.GJ() || this._resyncMeshes()
```

#### 27. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L109-L114` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L141-L142) · [Before (L109-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L109-L114)

```diff
-         getViewMatrix(kk) {
-           const ek = Sk.j.eH[0];
-           let ik = this.position;
-           this.computeTransformedInformation() && (ik = this.transformedPosition), Sk.o.NormalizeToRef(this.getShadowDirection(kk), ek), 1 === Math.abs(Sk.o.Dot(ek, Sk.o.Up())) && (ek.z = 1e-13);
-           const Dk = Sk.j.eH[1];
-           return ik.addToRef(ek, Dk), Sk.b.LookAtLHToRef(ik, Dk, Sk.o.Up(), this._viewMatrix), this._viewMatrix
+         IK(CC) {
+           super.IK(CC), this._resyncMeshes()
```

#### 28. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L116-L117` → after: `L144-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L144-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L144-L146) · [Before (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L116-L117)

```diff
-         getProjectionMatrix(kk, ek) {
-           return this.setShadowProjectionMatrix(this._projectionMatrix, kk ?? this._viewMatrix, ek ?? []), this._projectionMatrix
+         getShadowGenerator() {
+           let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+           return null === this._shadowGenerators ? null : this._shadowGenerators.get(CC) ?? null
```

#### 29. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L119` → after: `L148-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L148-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L148-L307) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L119)

```diff
-       }, (() => {
+         getShadowGenerators() {
+           return this._shadowGenerators
+         }
+         getAbsolutePosition() {
+           return bC.r.Zero()
+         }
+         canAffectMesh(CC) {
+           return !CC || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(CC)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(CC)) && ((0 === this.includeOnlyWithLayerMask | … [truncated]
+         }
+         dispose(CC) {
+           let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+           if (this._shadowGenerators) {
+             const CC = this._shadowGenerators.values();
+             for (let zC = CC.next(); !0 !== zC.done; zC = CC.next()) {
+               zC.value.dispose()
+             }
+ ... (144 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L121` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L309) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L121)

```diff
-         ek = [(0, fk.F)()], ik = [(0, fk.F)()], Pk = [(0, fk.I)()], mk = [(0, fk.I)()], (0, Dk.d)(kk, null, ek, {
+         ZC = [(0, wC.n)()], NC = [(0, wC.n)()], MC = [(0, wC.M)()], gC = [(0, wC.M)()], SC = [(0, wC.M)()], pC = [(0, wC.M)()], PC = [(0, wC.M)()], GC = [(0, wC.M)()], RC = [(0, wC.d)("_reorderLightsInScene")], AC = [(0, wC.M)("shadowEnabled")], xC = [(0, wC.M)("excludeWithLayerM … [truncated]
```

#### 31. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L123` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L311) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L123)

```diff
-           name: "position",
+           name: "range",
```

#### 32. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L127-L128` → after: `L315-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L315-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L315-L316) · [Before (L127-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L127-L128)

```diff
-             has: kk => "position" in kk,
-             get: kk => kk.position
+             has: CC => "range" in CC,
+             get: CC => CC.range
```

#### 33. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L131` → after: `L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L319) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L131)

```diff
-         }, null, Kk), (0, Dk.d)(kk, null, ik, {
+         }, null, vC), (0, QC.j)(CC, null, pC, {
```

#### 34. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L133` → after: `L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L321) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L133)

```diff
-           name: "direction",
+           name: "intensityMode",
```

#### 35. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L137-L138` → after: `L325-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L325-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L325-L326) · [Before (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L137-L138)

```diff
-             has: kk => "direction" in kk,
-             get: kk => kk.direction
+             has: CC => "intensityMode" in CC,
+             get: CC => CC.intensityMode
```

#### 36. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L141` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L329) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L141)

```diff
-         }, null, Kk), (0, Dk.d)(kk, null, Pk, {
+         }, null, vC), (0, QC.j)(CC, null, PC, {
```

#### 37. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L143` → after: `L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L331) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L143)

```diff
-           name: "shadowMinZ",
+           name: "radius",
```

#### 38. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L147-L148` → after: `L335-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L335-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L335-L336) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L147-L148)

```diff
-             has: kk => "shadowMinZ" in kk,
-             get: kk => kk.shadowMinZ
+             has: CC => "radius" in CC,
+             get: CC => CC.radius
```

#### 39. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L151-L153` → after: `L339-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L339-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L339-L458) · [Before (L151-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L151-L153)

```diff
-         }, null, Kk), (0, Dk.d)(kk, null, mk, {
-           kind: "getter",
-           name: "shadowMaxZ",
+         }, null, vC), (0, QC.j)(CC, null, RC, {
+           kind: "accessor",
+           name: "renderPriority",
+           static: !1,
+           private: !1,
+           access: {
+             has: CC => "renderPriority" in CC,
+             get: CC => CC.renderPriority,
+             set: (CC, zC) => {
+               CC.renderPriority = zC
+             }
+           },
+           metadata: zC
+         }, cC, uC), (0, QC.j)(null, null, ZC, {
+           kind: "field",
+           name: "diffuse",
+ ... (104 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L157-L158` → after: `L462-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L462-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L462-L466) · [Before (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L157-L158)

```diff
-             has: kk => "shadowMaxZ" in kk,
-             get: kk => kk.shadowMaxZ
+             has: CC => "_lightmapMode" in CC,
+             get: CC => CC._lightmapMode,
+             set: (CC, zC) => {
+               CC._lightmapMode = zC
+             }
```

#### 41. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L161` → after: `L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L469) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L161)

```diff
-         }, null, Kk), Sk && Object.defineProperty(kk, Symbol.metadata, {
+         }, jC, yC), zC && Object.defineProperty(CC, Symbol.metadata, {
```

#### 42. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L167` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L475) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L167)

```diff
-       })(), kk
+       })(), CC.FALLOFF_DEFAULT = FC.c.FALLOFF_DEFAULT, CC.FALLOFF_PHYSICAL = FC.c.FALLOFF_PHYSICAL, CC.FALLOFF_GLTF = FC.c.FALLOFF_GLTF, CC.FALLOFF_STANDARD = FC.c.FALLOFF_STANDARD, CC.LIGHTMAP_DEFAULT = FC.c.LIGHTMAP_DEFAULT, CC.LIGHTMAP_SPECULAR = FC.c.LIGHTMAP_SPECULAR, CC.LIG … [truncated]
```

#### 43. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L170` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L478) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L170)

```diff
-   41162: (kk, ek, ik) => {
+   40046: (CC, zC, ZC) => {
```

#### 44. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L172` → after: `L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L480) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L172)

```diff
-       c: () => fk
+       d: () => WC
```

#### 45. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L174-L229` → after: `L482-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L482-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L482-L491) · [Before (L174-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L174-L229)

```diff
-     var Dk = ik(40053);
-     class fk extends Dk.f {
-       constructor(kk, ek, ik, fk, Sk) {
-         let bk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-           rk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-           Pk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
-           mk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
-           Mk = arguments.length > 9 ? arguments[9] : void 0,
-           Kk = arguments.length > 10 ? arguments[10] : void 0,
-           xk = arguments.length > 11 ? arguments[11] : void 0,
-           nk = arguments.length > 12 ? arguments[12] : void 0;
-         super(null, Sk, !bk, rk, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, Mk), this.format = fk, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== mk || (Pk = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== mk || (Pk = … [truncated]
-       }
-       update(kk) {
-         this.updateMipLevel(kk, 0)
-       }
- ... (40 more removed lines; see GitHub link above)
+     var QC = ZC(39811),
+       wC = ZC(36963),
+       bC = ZC(39818),
+       nC = ZC(36987),
+       fC = ZC(36985),
+       oC = ZC(39694),
+       qC = ZC(39842);
+     class FC {
+       constructor() {
+         this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new nC.d, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedO … [truncated]
```

#### 46. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L232-L283` → after: `L494-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L494-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L494-L508) · [Before (L232-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L232-L283)

```diff
-   },
-   41196: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => Dk.c
-     });
-     var Dk = ik(40016);
-     (0, Dk.e)()
-   },
-   41151: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => Dk.e
-     });
-     var Dk = ik(40038);
-     (0, Dk.g)()
-   },
-   40038: (kk, ek, ik) => {
- ... (36 more removed lines; see GitHub link above)
+     let WC = (() => {
+       var CC;
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
```

#### 47. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L285-L340` → after: `L510-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L510-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L510-L512) · [Before (L285-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L285-L340)

```diff
-       }
-       getClassName() {
-         return "LinesMesh"
-       }
-       get material() {
-         return this._internalAbstractMeshDataInfo._material
-       }
-       set material(kk) {
-         const ek = this.material;
-         if (ek === kk) return;
-         const ik = ek && this._ownsMaterial;
-         this._ownsMaterial = !1, this._setInternalMaterial(kk), ik && ek?.dispose()
-       }
-       _setInternalMaterial(kk) {
-         this._setMaterial(kk), this.material && (this.material.fillMode = mk.e.LineListDrawMode, this.material.disableLighting = !0)
-       }
- ... (40 more removed lines; see GitHub link above)
+         static Construct(CC, zC, ZC, QC) {
+           const wC = this._NodeConstructors[CC];
+           return wC ? wC(zC, ZC, QC) : null
```

#### 48. `bundles/bloxd.io/chunks/js/259.js` (Changed code · before: `L342-L365` → after: `L514-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1bR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bb9fe9c3ffabf42a3f3fa8d6160855b69f98f5e3cb5a9c94a57cd3273544ee1b) · [After (L514-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/259.js#L514-L880) · [Before (L342-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/259.js#L342-L365)

```diff
-         return ek
-       }
-       serialize(kk) {
-         super.serialize(kk), kk.color = this.color.Tik(), kk.alpha = this.alpha
-       }
-       static Parse(kk, ek) {
-         const ik = new xk(kk.name, ek);
-         return ik.color = Sk.e.FromArray(kk.color), ik.alpha = kk.alpha, ik
-       }
-     }
-     xk.ForceGLSL = !1;
-     class nk extends Pk.b {
-       constructor(kk, ek) {
-         super(kk, ek), this.intersectionThreshold = ek.intersectionThreshold
-       }
-       getClassName() {
- ... (8 more removed lines; see GitHub link above)
+         set accessibilityTag(CC) {
+           this._accessibilityTag = CC, this.onAccessibilityTagChangedObservable.notifyObservers(CC)
+         }
+         get accessibilityTag() {
+           return this._accessibilityTag
+         }
+         get doNotSerialize() {
+           return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
+         }
+         set doNotSerialize(CC) {
+           this._nodeDataStorage._doNotSerialize = CC
+         }
+         GJ() {
+           return this._nodeDataStorage._isDisposed
+         }
+         set parent(CC) {
+ ... (351 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/260.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/260.js` (68 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073)

#### 1. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L4)

```diff
-   40049: (kk, ek, ik) => {
+   40925: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L6-L11` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L6) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L6-L11)

```diff
-       b: () => Ak,
-       d: () => Lk,
-       h: () => yk,
-       j: () => Yk,
-       l: () => pk,
-       o: () => lk
+       d: () => sC
```

#### 3. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L13-L45` → after: `L8-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L8-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L8-L117) · [Before (L13-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L13-L45)

```diff
-     var Dk = ik(39585),
-       fk = ik(39653),
-       Sk = ik(36698),
-       bk = ik(39708),
-       rk = ik(40053),
-       Pk = ik(39946),
-       mk = ik(39612),
-       Mk = ik(39937),
-       Kk = ik(36722),
-       xk = ik(39919),
-       nk = ik(39910),
-       Uk = ik(39964),
-       Hk = ik(36734);
-     const wk = {
-       effect: null,
-       subMesh: null
- ... (17 more removed lines; see GitHub link above)
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
+         this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / … [truncated]
+       }
+       get name() {
+         return "AutoRotation"
+ ... (94 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L48-L49` → after: `L128-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L128-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L128-L129) · [Before (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L48-L49)

```diff
-       get shaderPath() {
-         return this._shaderPath
+       get name() {
+         return "Bouncing"
```

#### 5. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L51-L52` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L131-L132) · [Before (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L51-L52)

```diff
-       set shaderPath(kk) {
-         this._shaderPath = kk
+       get autoTransitionRange() {
+         return this._autoTransitionRange
```

#### 6. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L54-L55` → after: `L134-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L134-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L134-L143) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L54-L55)

```diff
-       get options() {
-         return this._options
+       set autoTransitionRange(CC) {
+         if (this._autoTransitionRange === CC) return;
+         this._autoTransitionRange = CC;
+         const zC = this._attachedCamera;
+         zC && (CC ? this._onMeshTargetChangedObserver = zC.onMeshTargetChangedObservable.add((CC => {
+           if (CC && (CC.computeWorldMatrix(!0), CC.WE)) {
+             const zC = CC.WE().diagonalLength;
+             this.lowerRadiusTransitionRange = .05 * zC, this.upperRadiusTransitionRange = .05 * zC
+           }
+         })) : this._onMeshTargetChangedObserver && zC.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
```

#### 7. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L57-L58` → after: `L145-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L145-L146) · [Before (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L57-L58)

```diff
-       get isMultiview() {
-         return this._multiview
+       get attachedNode() {
+         return this._attachedCamera
```

#### 8. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L60-L61` → after: `L148-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L148-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L148-L152) · [Before (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L60-L61)

```diff
-       getClassName() {
-         return "ShaderMaterial"
+       init() {}
+       attach(CC) {
+         this._attachedCamera = CC, this._onAfterCheckInputsObserver = CC.onAfterCheckInputsObservable.add((() => {
+           this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTra … [truncated]
+         }))
```

#### 9. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L63-L64` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L154-L155) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L63-L64)

```diff
-       needAlphaBlending() {
-         return this.alpha < 1 || this._options.needAlphaBlending
+       detach() {
+         this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChange … [truncated]
```

#### 10. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L66-L67` → after: `L157-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L157-L158) · [Before (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L66-L67)

```diff
-       needAlphaTesting() {
-         return this._options.needAlphaTesting
+       _isRadiusAtLimit(CC) {
+         return !!this._attachedCamera && (this._attachedCamera.radius === CC && !this._radiusIsAnimating)
```

#### 11. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L69-L70` → after: `L160-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L160-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L160-L164) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L69-L70)

```diff
-       _checkUniform(kk) {
-         -1 === this._options.uniforms.indexOf(kk) && this._options.uniforms.push(kk)
+       _applyBoundRadiusAnimation(CC) {
+         if (!this._attachedCamera) return;
+         this._radiusBounceTransition || (pC.EasingFunction.setEasingMode(pC.EasingMode), this._radiusBounceTransition = SC.b.CreateAnimation("radius", SC.b.ANIMATIONTYPE_FLOAT, 60, pC.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attach … [truncated]
+         const zC = SC.b.TransitionTo("radius", this._attachedCamera.radius + CC, this._attachedCamera, this._attachedCamera.Km(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
+         zC && this._animatables.push(zC)
```

#### 12. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L72-L73` → after: `L166-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L166-L167) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L72-L73)

```diff
-       setTexture(kk, ek) {
-         return -1 === this._options.samplers.indexOf(kk) && this._options.samplers.push(kk), this._textures[kk] = ek, this
+       _clearAnimationLocks() {
+         this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
```

#### 13. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L75-L76` → after: `L169-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L169-L170) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L75-L76)

```diff
-       setInternalTexture(kk, ek) {
-         return -1 === this._options.samplers.indexOf(kk) && this._options.samplers.push(kk), this._internalTextures[kk] = ek, this
+       stopAllAnimations() {
+         for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
```

#### 14. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L78-L79` → after: `L172-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L172-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L172-L176) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L78-L79)

```diff
-       removeTexture(kk) {
-         delete this._textures[kk]
+     }
+     pC.EasingFunction = new class extends gC {
+       constructor() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
+         super(), this.amplitude = CC
```

#### 15. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L81-L82` → after: `L178-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L178-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L178-L180) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L81-L82)

```diff
-       setTextureArray(kk, ek) {
-         return -1 === this._options.samplers.indexOf(kk) && this._options.samplers.push(kk), this._checkUniform(kk), this._textureArrays[kk] = ek, this
+       easeInCore(CC) {
+         const zC = Math.max(0, this.amplitude);
+         return Math.pow(CC, 3) - CC * zC * Math.sin(3.141592653589793 * CC)
```

#### 16. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L84-L85` → after: `L182-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L182-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L182-L185) · [Before (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L84-L85)

```diff
-       setExternalTexture(kk, ek) {
-         return -1 === this._options.externalTextures.indexOf(kk) && this._options.externalTextures.push(kk), this._externalTextures[kk] = ek, this
+     }(.3), pC.EasingMode = gC.EASINGMODE_EASEOUT;
+     class PC {
+       constructor() {
+         this.onTargetFramingAnimationEndObservable = new bC.d, this._mode = PC.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1,  … [truncated]
```

#### 17. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L87-L88` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L187-L188) · [Before (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L87-L88)

```diff
-       setFloat(kk, ek) {
-         return this._checkUniform(kk), this._floats[kk] = ek, this
+       get name() {
+         return "Framing"
```

#### 18. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L90-L91` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L190-L191) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L90-L91)

```diff
-       setInt(kk, ek) {
-         return this._checkUniform(kk), this._ints[kk] = ek, this
+       set mode(CC) {
+         this._mode = CC
```

#### 19. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L93-L94` → after: `L193-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L193-L194) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L93-L94)

```diff
-       setUInt(kk, ek) {
-         return this._checkUniform(kk), this._uints[kk] = ek, this
+       get mode() {
+         return this._mode
```

#### 20. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L96-L97` → after: `L196-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L196-L197) · [Before (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L96-L97)

```diff
-       setFloats(kk, ek) {
-         return this._checkUniform(kk), this._floatsArrays[kk] = ek, this
+       set radiusScale(CC) {
+         this._radiusScale = CC
```

#### 21. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L99-L100` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L199-L200) · [Before (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L99-L100)

```diff
-       setColor3(kk, ek) {
-         return this._checkUniform(kk), this._colors3[kk] = ek, this
+       get radiusScale() {
+         return this._radiusScale
```

#### 22. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L102-L103` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L202-L203) · [Before (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L102-L103)

```diff
-       setColor3Array(kk, ek) {
-         return this._checkUniform(kk), this._colors3Arrays[kk] = ek.reduce(((kk, ek) => (kk.push(ek.r, ek.g, ek.b), kk)), []), this
+       set positionScale(CC) {
+         this._positionScale = CC
```

#### 23. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L105-L106` → after: `L205-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L205-L206) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L105-L106)

```diff
-       setColor4(kk, ek) {
-         return this._checkUniform(kk), this._colors4[kk] = ek, this
+       get positionScale() {
+         return this._positionScale
```

#### 24. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L108-L109` → after: `L208-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L208-L209) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L108-L109)

```diff
-       setColor4Array(kk, ek) {
-         return this._checkUniform(kk), this._colors4Arrays[kk] = ek.reduce(((kk, ek) => (kk.push(ek.r, ek.g, ek.b, ek.a), kk)), []), this
+       set defaultElevation(CC) {
+         this._defaultElevation = CC
```

#### 25. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L111-L112` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L211-L212) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L111-L112)

```diff
-       setVector2(kk, ek) {
-         return this._checkUniform(kk), this._vectors2[kk] = ek, this
+       get defaultElevation() {
+         return this._defaultElevation
```

#### 26. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L114-L115` → after: `L214-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L214-L215) · [Before (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L114-L115)

```diff
-       setVector3(kk, ek) {
-         return this._checkUniform(kk), this._vectors3[kk] = ek, this
+       set elevationReturnTime(CC) {
+         this._elevationReturnTime = CC
```

#### 27. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L117-L118` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L217-L218) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L117-L118)

```diff
-       setVector4(kk, ek) {
-         return this._checkUniform(kk), this._vectors4[kk] = ek, this
+       get elevationReturnTime() {
+         return this._elevationReturnTime
```

#### 28. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L120-L121` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L220-L221) · [Before (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L120-L121)

```diff
-       setQuaternion(kk, ek) {
-         return this._checkUniform(kk), this._quaternions[kk] = ek, this
+       set elevationReturnWaitTime(CC) {
+         this._elevationReturnWaitTime = CC
```

#### 29. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L123-L124` → after: `L223-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L223-L224) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L123-L124)

```diff
-       setQuaternionArray(kk, ek) {
-         return this._checkUniform(kk), this._quaternionsArrays[kk] = ek.reduce(((kk, ek) => (ek.toArray(kk, kk.length), kk)), []), this
+       get elevationReturnWaitTime() {
+         return this._elevationReturnWaitTime
```

#### 30. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L126-L127` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L226-L227) · [Before (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L126-L127)

```diff
-       setMatrix(kk, ek) {
-         return this._checkUniform(kk), this._matrices[kk] = ek, this
+       set zoomStopsAnimation(CC) {
+         this._zoomStopsAnimation = CC
```

#### 31. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L129-L135` → after: `L229-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L229-L230) · [Before (L129-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L129-L135)

```diff
-       setMatrices(kk, ek) {
-         this._checkUniform(kk);
-         const ik = new Float32Array(16 * ek.length);
-         for (let Dk = 0; Dk < ek.length; Dk++) {
-           ek[Dk].copyToArray(ik, 16 * Dk)
-         }
-         return this._matrixArrays[kk] = ik, this
+       get zoomStopsAnimation() {
+         return this._zoomStopsAnimation
```

#### 32. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L137-L138` → after: `L232-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L232-L233) · [Before (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L137-L138)

```diff
-       setMatrix3x3(kk, ek) {
-         return this._checkUniform(kk), this._matrices3x3[kk] = ek, this
+       set framingTime(CC) {
+         this._framingTime = CC
```

#### 33. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L140-L141` → after: `L235-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L235-L236) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L140-L141)

```diff
-       setMatrix2x2(kk, ek) {
-         return this._checkUniform(kk), this._matrices2x2[kk] = ek, this
+       get framingTime() {
+         return this._framingTime
```

#### 34. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L143-L144` → after: `L238-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L238-L239) · [Before (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L143-L144)

```diff
-       setArray2(kk, ek) {
-         return this._checkUniform(kk), this._vectors2Arrays[kk] = ek, this
+       get attachedNode() {
+         return this._attachedCamera
```

#### 35. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L146-L147` → after: `L241-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L241-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L241-L253) · [Before (L146-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L146-L147)

```diff
-       setArray3(kk, ek) {
-         return this._checkUniform(kk), this._vectors3Arrays[kk] = ek, this
+       init() {}
+       attach(CC) {
+         this._attachedCamera = CC;
+         const zC = this._attachedCamera.Km();
+         PC.EasingFunction.setEasingMode(PC.EasingMode), this._onPrePointerObservableObserver = zC.onPrePointerObservable.add((CC => {
+           CC.type !== FC.b.POINTERDOWN ? CC.type === FC.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
+         })), this._onMeshTargetChangedObserver = CC.onMeshTargetChangedObservable.add((CC => {
+           CC && CC.WE && this.zoomOnMesh(CC, void 0, (() => {
+             this.onTargetFramingAnimationEndObservable.notifyObservers()
+           }))
+         })), this._onAfterCheckInputsObserver = CC.onAfterCheckInputsObservable.add((() => {
+           this._applyUserInteraction(), this._maintainCameraAboveGround()
+         }))
```

#### 36. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L149-L150` → after: `L255-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L255-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L255-L258) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L149-L150)

```diff
-       setArray4(kk, ek) {
-         return this._checkUniform(kk), this._vectors4Arrays[kk] = ek, this
+       detach() {
+         if (!this._attachedCamera) return;
+         const CC = this._attachedCamera.Km();
+         this._onPrePointerObservableObserver && CC.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserve … [truncated]
```

#### 37. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L152-L153` → after: `L260-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L260-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L260-L265) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L152-L153)

```diff
-       setUniformBuffer(kk, ek) {
-         return -1 === this._options.uniformBuffers.indexOf(kk) && this._options.uniformBuffers.push(kk), this._uniformBuffers[kk] = ek, this
+       zoomOnMesh(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         CC.computeWorldMatrix(!0);
+         const QC = CC.WE().boundingBox;
+         this.zoomOnBoundingInfo(QC.minimumWorld, QC.maximumWorld, zC, ZC)
```

#### 38. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L155-L156` → after: `L267-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L267-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L267-L272) · [Before (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L155-L156)

```diff
-       setTextureSampler(kk, ek) {
-         return -1 === this._options.samplerObjects.indexOf(kk) && this._options.samplerObjects.push(kk), this._textureSamplers[kk] = ek, this
+       zoomOnMeshHierarchy(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         CC.computeWorldMatrix(!0);
+         const QC = CC.getHierarchyBoundingVectors(!0);
+         this.zoomOnBoundingInfo(QC.min, QC.max, zC, ZC)
```

#### 39. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L158-L159` → after: `L274-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L274-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L274-L283) · [Before (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L158-L159)

```diff
-       setStorageBuffer(kk, ek) {
-         return -1 === this._options.storageBuffers.indexOf(kk) && this._options.storageBuffers.push(kk), this._storageBuffers[kk] = ek, this
+       zoomOnMeshesHierarchy(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         const QC = new nC.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+           wC = new nC.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+         for (let bC = 0; bC < CC.length; bC++) {
+           const zC = CC[bC].getHierarchyBoundingVectors(!0);
+           nC.r.CheckExtends(zC.min, QC, wC), nC.r.CheckExtends(zC.max, QC, wC)
+         }
+         this.zoomOnBoundingInfo(QC, wC, zC, ZC)
```

#### 40. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L161-L164` → after: `L285-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L285-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L285-L312) · [Before (L161-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L161-L164)

```diff
-       setDefine(kk, ek) {
-         const ik = kk.trimEnd() + " ",
-           Dk = this.options.defines.findIndex((ek => ek === kk || ek.startsWith(ik)));
-         return Dk >= 0 && this.options.defines.splice(Dk, 1), ("boolean" !== typeof ek || ek) && this.options.defines.push(ik + ek), this
+       zoomOnBoundingInfo(CC, zC) {
+         let ZC, QC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
+         if (!this._attachedCamera) return !1;
+         const bC = CC.y,
+           fC = bC + (zC.y - bC) * this._positionScale,
+           oC = zC.subtract(CC).scale(.5);
+         if (!isFinite(fC)) return !1;
+         if (QC) ZC = new nC.r(0, fC, 0);
+         else {
+           const zC = CC.add(oC);
+           ZC = new nC.r(zC.x, fC, zC.z)
+         }
+         this._vectorTransition || (this._vectorTransition = SC.b.CreateAnimation("target", SC.b.ANIMATIONTYPE_VECTOR3, 60, PC.EasingFunction)), this._betaIsAnimating = !0;
+         let qC = SC.b.TransitionTo("target", ZC, this._attachedCamera, this._attachedCamera.Km(), 60, this._vectorTransition, this._framingTime);
+         qC && this._animatables.push(qC);
+ ... (12 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L166-L167` → after: `L314-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L314-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L314-L318) · [Before (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L166-L167)

```diff
-       isReadyForSubMesh(kk, ek, ik) {
-         return this.isReady(kk, ik, ek)
+       _calculateLowerRadiusFromModelBoundingSphere(CC, zC) {
+         const ZC = this._attachedCamera;
+         if (!ZC) return 0;
+         let QC = ZC._calculateLowerRadiusFromModelBoundingSphere(CC, zC, this._radiusScale);
+         return ZC.lowerRadiusLimit && this._mode === PC.IgnoreBoundsSizeMode && (QC = QC < ZC.lowerRadiusLimit ? ZC.lowerRadiusLimit : QC), ZC.upperRadiusLimit && (QC = QC > ZC.upperRadiusLimit ? ZC.upperRadiusLimit : QC), QC
```

#### 42. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L169-L173` → after: `L320-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L320-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L320-L330) · [Before (L169-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L169-L173)

```diff
-       isReady(kk, ek, ik) {
-         const Dk = ik && this._storeEffectOnSubMeshes;
-         if (this.isFrozen) {
-           const kk = Dk ? ik._drawWrapper : this._drawWrapper;
-           if (kk.effect && kk._wasPreviouslyReady && kk._wasPreviouslyUsingInstances === ek) return !0
+       _maintainCameraAboveGround() {
+         if (this._elevationReturnTime < 0) return;
+         const CC = WC.b.Now - this._lastInteractionTime,
+           zC = .5 * Math.PI - this._defaultElevation,
+           ZC = .5 * Math.PI;
+         if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > ZC && CC >= this._elevationReturnWaitTime) {
+           this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = SC.b.CreateAnimation("beta", SC.b.ANIMATIONTYPE_FLOAT, 60, PC.EasingFunction));
+           const CC = SC.b.TransitionTo("beta", zC, this._attachedCamera, this._attachedCamera.Km(), 60, this._betaTransition, this._elevationReturnTime, (() => {
+             this._clearAnimationLocks(), this.stopAllAnimations()
+           }));
+           CC && this._animatables.push(CC)
```

#### 43. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L175-L176` → after: `L332-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L332-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L332-L504) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L175-L176)

```diff
-         const Sk = this.XF(),
-           rk = Sk.JU(),
+       }
+       _clearAnimationLocks() {
+         this._betaIsAnimating = !1
+       }
+       _applyUserInteraction() {
+         this.isUserIsMoving && (this._lastInteractionTime = WC.b.Now, this.stopAllAnimations(), this._clearAnimationLocks())
+       }
+       stopAllAnimations() {
+         for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
+       }
+       get isUserIsMoving() {
+         return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPannin … [truncated]
+       }
+     }
+     PC.EasingFunction = new class extends gC {
+       constructor() {
+ ... (157 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L179-L187` → after: `L507-L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L507-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L507-L784) · [Before (L179-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L179-L187)

```diff
-         let Kk = null,
-           Hk = this._shaderPath,
-           lk = this._options.uniforms,
-           pk = this._options.uniformBuffers,
-           yk = this._options.samplers;
-         rk.getCaps().multiview && Sk.activeCamera && Sk.activeCamera.outputRenderTarget && Sk.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, mk.push("#define MULTIVIEW"), -1 !== lk.indexOf("viewProjection") && -1 === lk.indexOf("viewProjectionR") &&  … [truncated]
-         for (let fk = 0; fk < this._options.defines.length; fk++) {
-           const kk = 0 === this._options.defines[fk].indexOf("#define") ? this._options.defines[fk] : `#define ${this._options.defines[fk]}`;
-           mk.push(kk)
+         return CC = class extends nC {
+           constructor() {
+             super(...arguments), this.pinchZoom = (0, QC.n)(this, fC, !0), this.multiTouchPanning = ((0, QC.n)(this, oC), (0, QC.n)(this, qC, !0)), this.multiTouchPanAndZoom = ((0, QC.n)(this, FC), (0, QC.n)(this, WC, !0)), this._isPinching = ((0, QC.n)(this, NC), !1), this._twoF … [truncated]
+           }
+           _computePinchZoom(CC, zC) {}
+           _computeMultiTouchPanning(CC, zC) {}
+           onMultiTouch(CC, zC, ZC, QC, wC, bC) {
+             0 === ZC && null === wC || 0 === QC && null === bC || (this.multiTouchPanAndZoom ? (this._computePinchZoom(ZC, QC), this._computeMultiTouchPanning(wC, bC)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldSt … [truncated]
+           }
+           onButtonUp(CC) {
+             this._twoFingerActivityCount = 0, this._isPinching = !1
+           }
+           onLostFocus() {
+             this._twoFingerActivityCount = 0, this._isPinching = !1
+           }
+         }, (() => {
+ ... (262 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L189-L207` → after: `L786-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L786-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L786-L787) · [Before (L189-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L189-L207)

```diff
-         for (let fk = 0; fk < this._options.attributes.length; fk++) Mk.push(this._options.attributes[fk]);
-         if (kk && kk.isVerticesDataPresent(bk.e.ColorKind) && (-1 === Mk.indexOf(bk.e.ColorKind) && Mk.push(bk.e.ColorKind), mk.push("#define VERTEXCOLOR")), ek && (mk.push("#define INSTANCES"), (0, nk.Eb)(Mk, this._materialHelperNeedsPreviousMatrices), kk?.hasThinInstances && (m … [truncated]
-           Mk.push(bk.e.MatricesIndicesKind), Mk.push(bk.e.MatricesWeightsKind), kk.numBoneInfluencers > 4 && (Mk.push(bk.e.MatricesIndicesExtraKind), Mk.push(bk.e.MatricesWeightsExtraKind));
-           const ek = kk.skeleton;
-           mk.push("#define NUM_BONE_INFLUENCERS " + kk.numBoneInfluencers), Kk = new Pk.b, Kk.addCPUSkinningFallback(0, kk), ek.isUsingTextureForMatrices ? (mk.push("#define BONETEXTURE"), -1 === lk.indexOf("boneTextureInfo") && lk.push("boneTextureInfo"), -1 === this._options.sa … [truncated]
-         } else mk.push("#define NUM_BONE_INFLUENCERS 0");
-         let Yk = 0;
-         const Lk = kk ? kk.morphTargetManager : null;
-         if (Lk) {
-           const ek = -1 !== mk.indexOf("#define UV1"),
-             ik = -1 !== mk.indexOf("#define UV2"),
-             Dk = -1 !== mk.indexOf("#define TANGENT"),
-             fk = -1 !== mk.indexOf("#define NORMAL"),
-             Sk = -1 !== mk.indexOf("#define VERTEXCOLOR");
-           Yk = (0, nk.$)(Lk, mk, Mk, kk, !0, fk, Dk, ek, ik, Sk), Lk.isUsingTextureForTargets && (-1 === lk.indexOf("morphTargetTextureIndices") && lk.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTar … [truncated]
-         } else mk.push("#define NUM_MORPH_INFLUENCERS 0");
- ... (3 more removed lines; see GitHub link above)
+         get useAltToZoom() {
+           return this._useAltToZoom
```

#### 46. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L209-L221` → after: `L789-L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L789-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L789-L790) · [Before (L209-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L209-L221)

```diff
-         for (const fk in this._textures)
-           if (!this._textures[fk].isReady()) return !1;
-         for (const fk in this._internalTextures)
-           if (!this._internalTextures[fk].isReady) return !1;
-         kk && this.needAlphaTestingForMesh(kk) && mk.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, xk.d)(lk), (0, xk.m)(this, Sk, mk)), Sk.fogEnabled && kk?.applyFog && Sk.fogMode !== fk.f.FOGMODE_NONE && (mk.push("#define FOG"), -1 === lk.indexOf("view") & … [truncated]
-         const Ck = ik ? ik.getRenderingMesh() : kk;
-         if (Ck && this.useVertexPulling) {
-           const kk = Ck.geometry;
-           kk && (this._vertexPullingMetadata = (0, Uk.f)(kk), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((kk, ek) => {
-             lk.push(`vp_${ek}_info`)
-           }))), mk.push("#define USE_VERTEX_PULLING");
-           const ek = Ck.geometry?.getIndexBuffer();
-           ek && !Ck.isUnIndexed && (mk.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), ek.is32Bits && mk.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
+         set useAltToZoom(CC) {
+           this._useAltToZoom = CC, this._applyUseAltToZoomToInputMap()
```

#### 47. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L223-L269` → after: `L792-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L792-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L792-L820) · [Before (L223-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L223-L269)

```diff
-         this.customShaderNameResolve && (lk = lk.slice(), pk = pk.slice(), yk = yk.slice(), Hk = this.customShaderNameResolve(this.name, lk, pk, yk, mk, Mk));
-         const Ak = Dk ? ik._getDrawWrapper(void 0, !0) : this._drawWrapper,
-           jk = Ak?.effect ?? null,
-           sk = Ak?.defines ?? null,
-           dk = mk.join("\n");
-         let Vk = jk;
-         return sk !== dk && (Vk = rk.createEffect(Hk, {
-           attributes: Mk,
-           uniformsNames: lk,
-           uniformBuffersNames: pk,
-           samplers: yk,
-           defines: dk,
-           fallbacks: Kk,
-           onCompiled: this.onCompiled,
-           onError: this.onError,
-           indexParameters: {
- ... (31 more removed lines; see GitHub link above)
+         _applyUseAltToZoomToInputMap() {
+           if (!this.camera?.movement) return;
+           const CC = this.camera.movement.input,
+             zC = CC.getEntry("keyboard", "zoom", {
+               modifiers: {
+                 alt: !0
+               }
+             });
+           !this._useAltToZoom && zC ? CC.inputMap.splice(CC.inputMap.indexOf(zC), 1) : this._useAltToZoom && !zC && CC.addEntry({
+             source: "keyboard",
+             modifiers: {
+               alt: !0
+             },
+             interaction: "zoom"
+           })
+         }
+ ... (13 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L271-L314` → after: `L822-L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L822-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L822-L825) · [Before (L271-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L271-L314)

```diff
-           }
-         const mk = ek && fk ? this._mustRebind(bk, Sk, Dk, ek.visibility) : bk.getCachedMaterial() !== this;
-         if (Sk && mk) {
-           let kk;
-           for (kk in Pk || -1 === this._options.uniforms.indexOf("view") || Sk.setMatrix("view", bk.getViewMatrix()), Pk || -1 === this._options.uniforms.indexOf("projection") || Sk.setMatrix("projection", bk.getProjectionMatrix()), Pk || -1 === this._options.uniforms.indexOf("vi … [truncated]
-           for (kk in this._internalTextures) Sk._bindTexture(kk, this._internalTextures[kk]);
-           for (kk in this._textureArrays) Sk.setTextureArray(kk, this._textureArrays[kk]);
-           for (kk in this._ints) Sk.setInt(kk, this._ints[kk]);
-           for (kk in this._uints) Sk.setUInt(kk, this._uints[kk]);
-           for (kk in this._floats) Sk.setFloat(kk, this._floats[kk]);
-           for (kk in this._floatsArrays) Sk.setArray(kk, this._floatsArrays[kk]);
-           for (kk in this._colors3) Sk.setColor3(kk, this._colors3[kk]);
-           for (kk in this._colors3Arrays) Sk.setArray3(kk, this._colors3Arrays[kk]);
-           for (kk in this._colors4) {
-             const ek = this._colors4[kk];
-             Sk.setFloat4(kk, ek.r, ek.g, ek.b, ek.a)
- ... (28 more removed lines; see GitHub link above)
+           })))
+         }
+         detachControl() {
+           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
```

#### 49. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L316-L321` → after: `L827-L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L827-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L827-L847) · [Before (L316-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L316-L321)

```diff
-         if (Sk && ek && (mk || !this.isFrozen)) {
-           (0, nk.y)(ek, Sk), ek.morphTargetManager && ek.morphTargetManager.isUsingTextureForTargets && ek.morphTargetManager._bind(Sk);
-           const kk = ek.bakedVertexAnimationManager;
-           if (kk && kk.isEnabled) {
-             const kk = fk ? Dk._drawWrapper : this._drawWrapper;
-             ek.bakedVertexAnimationManager?.bind(Sk, !!kk._wasPreviouslyUsingInstances)
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
+               if (this._keyboardConditions.key = fC, -1 === this.keysReset.indexOf(fC)) {
+                 const CC = zC.resolveInteraction("keyboard", this._keyboardConditions);
+                 if (CC)
+                   if ("pan" === CC.interaction) bC = Math.max(bC, CC.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(fC) ? QC.x -= 1 : -1 !== this.keysRight.indexOf(fC) ? QC.x += 1 : -1 !== this.keysUp.indexOf(fC) ? QC.y += 1 : -1 !== this.keysDown.index … [truncated]
+                   else if ("zoom" === CC.interaction) {
+ ... (5 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L324-L331` → after: `L850-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L850-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L850-L851) · [Before (L324-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L324-L331)

```diff
-         this._afterBind(ek, Sk, Dk)
-       }
-       getActiveTextures() {
-         const kk = super.getActiveTextures();
-         for (const ek in this._textures) kk.push(this._textures[ek]);
-         for (const ek in this._textureArrays) {
-           const ik = this._textureArrays[ek];
-           for (let ek = 0; ek < ik.length; ek++) kk.push(ik[ek])
+         getClassName() {
+           return "ArcRotateCameraKeyboardMoveInput"
```

#### 51. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L333-L345` → after: `L853-L854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L853-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L853-L854) · [Before (L333-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L333-L345)

```diff
-         return kk
-       }
-       hasTexture(kk) {
-         if (super.hasTexture(kk)) return !0;
-         for (const ik in this._textures)
-           if (this._textures[ik] === kk) return !0;
-         const ek = kk.getInternalTexture();
-         for (const ik in this._internalTextures)
-           if (this._internalTextures[ik] === ek) return !0;
-         for (const ik in this._textureArrays) {
-           const ek = this._textureArrays[ik];
-           for (let ik = 0; ik < ek.length; ik++)
-             if (ek[ik] === kk) return !0
+         getSimpleName() {
+           return "keyboard"
```

#### 52. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L347-L359` → after: `L856-L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L856-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L856-L1019) · [Before (L347-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L347-L359)

```diff
-         return !1
-       }
-       clone(kk) {
-         const ek = Dk.b.Clone((() => new lk(kk, this.XF(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
-         ek.name = kk, ek.id = kk, "object" === typeof ek._shaderPath && (ek._shaderPath = {
-           ...ek._shaderPath
-         }), this._options = {
-           ...this._options
-         };
-         const ik = Object.keys(this._options);
-         for (const Dk of ik) {
-           const kk = this._options[Dk];
-           Array.isArray(kk) && (this._options[Dk] = kk.slice(0))
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
+ ... (148 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L361-L392` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L1021) · [Before (L361-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L361-L392)

```diff
-         this.stencil.copyTo(ek.stencil);
-         for (const Dk in this._textures) ek.setTexture(Dk, this._textures[Dk]);
-         for (const Dk in this._internalTextures) ek.setInternalTexture(Dk, this._internalTextures[Dk]);
-         for (const Dk in this._textureArrays) ek.setTextureArray(Dk, this._textureArrays[Dk]);
-         for (const Dk in this._externalTextures) ek.setExternalTexture(Dk, this._externalTextures[Dk]);
-         for (const Dk in this._ints) ek.setInt(Dk, this._ints[Dk]);
-         for (const Dk in this._uints) ek.setUInt(Dk, this._uints[Dk]);
-         for (const Dk in this._floats) ek.setFloat(Dk, this._floats[Dk]);
-         for (const Dk in this._floatsArrays) ek.setFloats(Dk, this._floatsArrays[Dk]);
-         for (const Dk in this._colors3) ek.setColor3(Dk, this._colors3[Dk]);
-         for (const Dk in this._colors3Arrays) ek._colors3Arrays[Dk] = this._colors3Arrays[Dk];
-         for (const Dk in this._colors4) ek.setColor4(Dk, this._colors4[Dk]);
-         for (const Dk in this._colors4Arrays) ek._colors4Arrays[Dk] = this._colors4Arrays[Dk];
-         for (const Dk in this._vectors2) ek.setVector2(Dk, this._vectors2[Dk]);
-         for (const Dk in this._vectors3) ek.setVector3(Dk, this._vectors3[Dk]);
-         for (const Dk in this._vectors4) ek.setVector4(Dk, this._vectors4[Dk]);
- ... (16 more removed lines; see GitHub link above)
+         _computeDeltaFromMouseWheelLegacyEvent(CC, zC) {
```

#### 54. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L394-L398` → after: `L1023-L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1023-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L1023-L1058) · [Before (L394-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L394-L398)

```diff
-           for (kk in this._textures) this._textures[kk].dispose();
-           for (kk in this._internalTextures) this._internalTextures[kk].dispose();
-           for (kk in this._textureArrays) {
-             const ek = this._textureArrays[kk];
-             for (let kk = 0; kk < ek.length; kk++) ek[kk].dispose()
+           const QC = .01 * CC * this.wheelDeltaPercentage * zC;
+           return ZC = CC > 0 ? QC / (1 + this.wheelDeltaPercentage) : QC * (1 + this.wheelDeltaPercentage), ZC
+         }
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
+ ... (20 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L401-L410` → after: `L1061-L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1061-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L1061-L1062) · [Before (L401-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L401-L410)

```diff
-         this._textures = {}, this._internalTextures = {}, super.dispose(kk, ek, ik)
-       }
-       serialize() {
-         const kk = Dk.b.Serialize(this);
-         let ek;
-         for (ek in kk.customType = "BABYLON.ShaderMaterial", kk.uniqueId = this.uniqueId, kk.options = this._options, kk.shaderPath = this._shaderPath, kk.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, kk.stencil = this.stencil.serialize(), kk.textures = {}, this._texture … [truncated]
-         for (ek in kk.textureArrays = {}, this._textureArrays) {
-           kk.textureArrays[ek] = [];
-           const ik = this._textureArrays[ek];
-           for (let Dk = 0; Dk < ik.length; Dk++) kk.textureArrays[ek].push(ik[Dk].serialize())
+         getClassName() {
+           return "ArcRotateCameraMouseWheelInput"
```

#### 56. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L412-L418` → after: `L1064-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L1064-L1065) · [Before (L412-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L412-L418)

```diff
-         for (ek in kk.ints = {}, this._ints) kk.ints[ek] = this._ints[ek];
-         for (ek in kk.uints = {}, this._uints) kk.uints[ek] = this._uints[ek];
-         for (ek in kk.floats = {}, this._floats) kk.floats[ek] = this._floats[ek];
-         for (ek in kk.floatsArrays = {}, this._floatsArrays) kk.floatsArrays[ek] = this._floatsArrays[ek];
-         for (ek in kk.colors3 = {}, this._colors3) {
-           const ik = this._colors3[ek];
-           kk.colors3[ek] = [ik.r, ik.g, ik.b]
+         getSimpleName() {
+           return "mousewheel"
```

#### 57. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L420-L423` → after: `L1067-L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1067-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L1067-L1070) · [Before (L420-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L420-L423)

```diff
-         for (ek in kk.colors3Arrays = {}, this._colors3Arrays) kk.colors3Arrays[ek] = this._colors3Arrays[ek];
-         for (ek in kk.colors4 = {}, this._colors4) {
-           const ik = this._colors4[ek];
-           kk.colors4[ek] = [ik.r, ik.g, ik.b, ik.a]
+         _updateHitPlane() {
+           const CC = this.camera,
+             zC = CC.target.subtract(CC.position);
+           this._hitPlane = hC.d.FromPositionAndNormal(CC.target, zC)
```

#### 58. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L425-L428` → after: `L1072-L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1072-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L1072-L1078) · [Before (L425-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L425-L428)

```diff
-         for (ek in kk.colors4Arrays = {}, this._colors4Arrays) kk.colors4Arrays[ek] = this._colors4Arrays[ek];
-         for (ek in kk.vectors2 = {}, this._vectors2) {
-           const ik = this._vectors2[ek];
-           kk.vectors2[ek] = [ik.x, ik.y]
+         _getPosition() {
+           const CC = this.camera,
+             zC = CC.Km(),
+             ZC = zC.createPickingRay(zC.pointerX, zC.pointerY, nC.b.Identity(), CC, !1);
+           0 === CC.targetScreenOffset.x && 0 === CC.targetScreenOffset.y || (this._viewOffset.set(CC.targetScreenOffset.x, CC.targetScreenOffset.y, 0), CC.getViewMatrix().invertToRef(CC._cameraTransformMatrix), this._globalOffset = nC.r.TransformNormal(this._viewOffset, CC._camer … [truncated]
+           let QC = 0;
+           return this._hitPlane && (QC = ZC.intersectsPlane(this._hitPlane) ?? 0), ZC.origin.addInPlace(ZC.direction.scaleInPlace(QC))
```

#### 59. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L430-L432` → after: `L1080-L1095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1080-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L1080-L1095) · [Before (L430-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L430-L432)

```diff
-         for (ek in kk.vectors3 = {}, this._vectors3) {
-           const ik = this._vectors3[ek];
-           kk.vectors3[ek] = [ik.x, ik.y, ik.z]
+         _zoomToMouse(CC) {
+           const zC = this.camera,
+             ZC = 1 - zC.inertia,
+             QC = zC.movement.getFrameIndependentInputScale(zC.inertia);
+           if (zC.lowerRadiusLimit) {
+             const wC = zC.lowerRadiusLimit ?? 0;
+             zC.radius - (this._zoomToMouseRadiusOffset + CC * QC) / ZC < wC && (CC = ((zC.radius - wC) * ZC - this._zoomToMouseRadiusOffset) / QC)
+           }
+           if (zC.upperRadiusLimit) {
+             const wC = zC.upperRadiusLimit ?? 0;
+             zC.radius - (this._zoomToMouseRadiusOffset + CC * QC) / ZC > wC && (CC = ((zC.radius - wC) * ZC - this._zoomToMouseRadiusOffset) / QC)
+           }
+           const wC = CC / ZC / zC.radius,
+             bC = this._getPosition(),
+             fC = nC.j.Eg[6];
+           bC.subtractToRef(zC.target, fC), fC.scaleInPlace(wC), fC.scaleInPlace(ZC), fC.scaleInPlace(QC), this._inertialPanning.addInPlace(fC), this._zoomToMouseRadiusOffset += CC * QC
```

#### 60. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L434-L436` → after: `L1097-L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1097-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L1097-L1098) · [Before (L434-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L434-L436)

```diff
-         for (ek in kk.vectors4 = {}, this._vectors4) {
-           const ik = this._vectors4[ek];
-           kk.vectors4[ek] = [ik.x, ik.y, ik.z, ik.w]
+         _zeroIfClose(CC) {
+           Math.abs(CC.x) < NC.e && (CC.x = 0), Math.abs(CC.y) < NC.e && (CC.y = 0), Math.abs(CC.z) < NC.e && (CC.z = 0)
```

#### 61. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L438-L470` → after: `L1100-L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1100-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L1100-L1145) · [Before (L438-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L438-L470)

```diff
-         for (ek in kk.quaternions = {}, this._quaternions) kk.quaternions[ek] = this._quaternions[ek].Tik();
-         for (ek in kk.matrices = {}, this._matrices) kk.matrices[ek] = this._matrices[ek].Tik();
-         for (ek in kk.matrixArray = {}, this._matrixArrays) kk.matrixArray[ek] = this._matrixArrays[ek];
-         for (ek in kk.matrices3x3 = {}, this._matrices3x3) kk.matrices3x3[ek] = this._matrices3x3[ek];
-         for (ek in kk.matrices2x2 = {}, this._matrices2x2) kk.matrices2x2[ek] = this._matrices2x2[ek];
-         for (ek in kk.vectors2Arrays = {}, this._vectors2Arrays) kk.vectors2Arrays[ek] = this._vectors2Arrays[ek];
-         for (ek in kk.vectors3Arrays = {}, this._vectors3Arrays) kk.vectors3Arrays[ek] = this._vectors3Arrays[ek];
-         for (ek in kk.vectors4Arrays = {}, this._vectors4Arrays) kk.vectors4Arrays[ek] = this._vectors4Arrays[ek];
-         for (ek in kk.quaternionsArrays = {}, this._quaternionsArrays) kk.quaternionsArrays[ek] = this._quaternionsArrays[ek];
-         return kk
-       }
-     }
- 
-     function pk(kk, ek, ik) {
-       const fk = Dk.b.Parse((() => new lk(kk.name, ek, kk.shaderPath, kk.options, kk.storeEffectOnSubMeshes)), kk, ek, ik);
-       let bk;
- ... (17 more removed lines; see GitHub link above)
+       }, (() => {
+         const nC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         zC = [(0, wC.M)()], ZC = [(0, wC.M)()], bC = [(0, wC.M)()], (0, QC.j)(null, null, zC, {
+           kind: "field",
+           name: "wheelPrecision",
+           static: !1,
+           private: !1,
+           access: {
+             has: CC => "wheelPrecision" in CC,
+             get: CC => CC.wheelPrecision,
+             set: (CC, zC) => {
+               CC.wheelPrecision = zC
+             }
+           },
+           metadata: nC
+         }, oC, qC), (0, QC.j)(null, null, ZC, {
+ ... (30 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L473-L488` → after: `L1155-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1155-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L1155-L1156) · [Before (L473-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L473-L488)

```diff
-       for (bk in kk.colors3Arrays) {
-         const ek = kk.colors3Arrays[bk].reduce(((kk, ek, ik) => (ik % 3 === 0 ? kk.push([ek]) : kk[kk.length - 1].push(ek), kk)), []).map((kk => ({
-           r: kk[0],
-           g: kk[1],
-           b: kk[2]
-         })));
-         fk.setColor3Array(bk, ek)
-       }
-       for (bk in kk.colors4) {
-         const ek = kk.colors4[bk];
-         fk.setColor4(bk, {
-           r: ek[0],
-           g: ek[1],
-           b: ek[2],
-           a: ek[3]
-         })
+       addMouseWheel() {
+         return this.add(new YC), this
```

#### 63. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L490-L504` → after: `L1158-L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1158-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L1158-L1159) · [Before (L490-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L490-L504)

```diff
-       for (bk in kk.colors4Arrays) {
-         const ek = kk.colors4Arrays[bk].reduce(((kk, ek, ik) => (ik % 4 === 0 ? kk.push([ek]) : kk[kk.length - 1].push(ek), kk)), []).map((kk => ({
-           r: kk[0],
-           g: kk[1],
-           b: kk[2],
-           a: kk[3]
-         })));
-         fk.setColor4Array(bk, ek)
-       }
-       for (bk in kk.vectors2) {
-         const ek = kk.vectors2[bk];
-         fk.setVector2(bk, {
-           x: ek[0],
-           y: ek[1]
-         })
+       addPointers() {
+         return this.add(new iC), this
```

#### 64. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L506-L512` → after: `L1161-L1162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1161-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L1161-L1162) · [Before (L506-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L506-L512)

```diff
-       for (bk in kk.vectors3) {
-         const ek = kk.vectors3[bk];
-         fk.setVector3(bk, {
-           x: ek[0],
-           y: ek[1],
-           z: ek[2]
-         })
+       addKeyboard() {
+         return this.add(new eC), this
```

#### 65. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L514-L521` → after: `L1164-L1220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1164-L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L1164-L1220) · [Before (L514-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L514-L521)

```diff
-       for (bk in kk.vectors4) {
-         const ek = kk.vectors4[bk];
-         fk.setVector4(bk, {
-           x: ek[0],
-           y: ek[1],
-           z: ek[2],
-           w: ek[3]
-         })
+     }(dC = EC.prototype).addVRDeviceOrientation ?? (dC.addVRDeviceOrientation = (0, HC.f)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (mC = EC.prototype).addGamepad ?? (mC.addGamepad = (0, HC.f)("ArcRotateCameraInputsManager", "addGamepad"));
+     var lC = ZC(37002),
+       XC = ZC(40054),
+       cC = ZC(40061);
+     class uC extends XC.b {
+       constructor(CC, zC, ZC) {
+         super(CC, zC, ZC), this.input = new cC.d({
+           pan: (CC, zC) => {
+             this.panAccumulatedPixels.x += CC, this.panAccumulatedPixels.y += zC
+           },
+           rotate: (CC, zC) => {
+             this.rotationAccumulatedPixels.x += CC, this.rotationAccumulatedPixels.y += zC
+           },
+           zoom: CC => {
+             this.zoomAccumulatedPixels += CC
+           }
+ ... (41 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L548-L561` → after: `L1223-L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1223-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L1223-L1225) · [Before (L548-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L548-L561)

```diff
-     async function Yk(kk, ek) {
-       let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
-       const Dk = this?.SnippetUrl ?? lk.SnippetUrl;
-       return await new Promise(((fk, Sk) => {
-         const bk = new mk.d;
-         bk.addEventListener("readystatechange", (() => {
-           if (4 == bk.readyState)
-             if (200 == bk.status) {
-               const Dk = JSON.parse(JSON.parse(bk.responseText).jsonPayload),
-                 Sk = pk(JSON.parse(Dk.shaderMaterial), ek || Kk.e.LastCreatedScene, ik);
-               Sk.snippetId = kk, fk(Sk)
-             } else Sk("Unable to load the snippet " + kk)
-         })), bk.open("GET", Dk + "/" + kk.replace(/#/g, "/")), bk.send()
-       }))
+ 
+     function rC(CC, zC) {
+       return isNaN(CC) ? zC : CC
```

#### 67. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L563-L565` → after: `L1227-L2232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R1227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L1227-L2232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L1227-L2232) · [Before (L563-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L563-L565)

```diff
-     lk.SnippetUrl = "https://snippet.babylonjs.com";
-     const Lk = Yk;
-     let Ck = !1;
+     let sC = (() => {
+         var CC;
+         let zC, ZC, oC, FC, WC, gC, SC, AC, JC, IC, iC, vC, eC, hC, KC, YC, dC, mC, HC, lC, XC, cC, sC, TC, aC, tC, DC, jC, yC = RC.h,
+           LC = [],
+           UC = [],
+           BC = [],
+           OC = [],
+           kC = [],
+           VC = [],
+           Cz = [],
+           zz = [],
+           Zz = [],
+           Qz = [],
+           wz = [],
+           bz = [],
+           nz = [],
+ ... (990 more added lines; see GitHub link above)
```

#### 68. `bundles/bloxd.io/chunks/js/260.js` (Changed code · before: `L568` → after: `L2235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073R2235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4cda4ba6f7318ce2a593317e3378685e922bacf61f65ccc3af787ed8dedc3073) · [After (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/260.js#L2235) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/260.js#L568)

```diff
-       Ck || (Ck = !0, lk.Parse = pk, lk.ParseFromFileAsync = yk, lk.ParseFromSnippetAsync = Yk, lk.CreateFromSnippetAsync = Lk, (0, Hk.h)("BABYLON.ShaderMaterial", lk))
+       WC || (WC = !0, oC.d.AddNodeConstructor("Light_Type_3", ((CC, zC) => () => new FC(CC, bC.r.Zero(), zC))), (0, qC.d)("BABYLON.HemisphericLight", FC))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/261.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/261.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9)

#### 1. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L5-L27` → after: `L4-L2730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L4-L2730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/261.js#L4-L2730) · [Before (L5-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/261.js#L5-L27)

```diff
-   40071: (kk, ek, ik) => {
-     ik.r(ek), ik.d(ek, {
-       FirebaseError: () => Dk.b,
-       SDK_VERSION: () => Dk.f,
-       _DEFAULT_ENTRY_NAME: () => Dk.j,
-       qik: () => Dk.l,
-       _addOrOverwriteComponent: () => Dk.n,
-       _apps: () => Dk.q,
-       _clearComponents: () => Dk.r,
-       _components: () => Dk.v,
-       _getProvider: () => Dk.z,
-       _registerComponent: () => Dk.B,
-       _removeServiceInstance: () => Dk.D,
-       deleteApp: () => Dk.E,
-       getApp: () => Dk.H,
-       getApps: () => Dk.F,
- ... (7 more removed lines; see GitHub link above)
+   40216: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => wC
+     });
+     var QC = ZC(39826);
+ 
+     function wC(CC) {
+       return class extends CC {
+         constructor() {
+           super(...arguments);
+           const CC = new.target;
+           if (!CC[Symbol.metadata]) {
+             const zC = Object.getPrototypeOf(CC)?.[Symbol.metadata];
+             CC[Symbol.metadata] = zC ? Object.create(zC) : {}
+           }
+           const zC = (0, QC.e)(CC[Symbol.metadata]);
+ ... (2711 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/262.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/262.js` (84 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e)

#### 1. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L5` → after: `L4-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L4-L296) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L5)

```diff
-   40092: (kk, ek, ik) => {
+   40123: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => QC
+     });
+     class QC {
+       constructor(CC, zC, ZC) {
+         this.bu = CC, this.bv = zC, this.distance = ZC, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
+       }
+     }
+   },
+   40136: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => nC
+     });
+     var QC = ZC(36971),
+       wC = ZC(36963),
+ ... (277 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L20-L30` → after: `L300-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L300-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L300-L301) · [Before (L20-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L20-L30)

```diff
-       gb: () => Hk,
-       j: () => Ck,
-       kb: () => lk,
-       mb: () => uk,
-       n: () => Lk,
-       o: () => rk,
-       qb: () => Fk,
-       r: () => bk,
-       rb: () => Yk,
-       v: () => Wk,
-       y: () => Ik
+       i: () => fC,
+       l: () => nC
```

#### 3. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L32-L37` → after: `L303-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L303-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L303-L385) · [Before (L32-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L32-L37)

```diff
-     const Dk = function(kk) {
-         const ek = [];
-         let ik = 0;
-         for (let Dk = 0; Dk < kk.length; Dk++) {
-           let fk = kk.charCodeAt(Dk);
-           fk < 128 ? ek[ik++] = fk : fk < 2048 ? (ek[ik++] = fk >> 6 | 192, ek[ik++] = 63 & fk | 128) : 55296 === (64512 & fk) && Dk + 1 < kk.length && 56320 === (64512 & kk.charCodeAt(Dk + 1)) ? (fk = 65536 + ((1023 & fk) << 10) + (1023 & kk.charCodeAt(++Dk)), ek[ik++] = fk >> 1 … [truncated]
+     var QC = ZC(39969),
+       wC = ZC(36963);
+ 
+     function bC(CC) {
+       -1 === CC.indexOf("vClipPlane") && CC.push("vClipPlane"), -1 === CC.indexOf("vClipPlane2") && CC.push("vClipPlane2"), -1 === CC.indexOf("vClipPlane3") && CC.push("vClipPlane3"), -1 === CC.indexOf("vClipPlane4") && CC.push("vClipPlane4"), -1 === CC.indexOf("vClipPlane5") &&  … [truncated]
+     }
+ 
+     function nC(CC, zC, ZC) {
+       const QC = !!(CC.clipPlane ?? zC.clipPlane),
+         wC = !!(CC.clipPlane2 ?? zC.clipPlane2),
+         bC = !!(CC.clipPlane3 ?? zC.clipPlane3),
+         nC = !!(CC.clipPlane4 ?? zC.clipPlane4),
+         fC = !!(CC.clipPlane5 ?? zC.clipPlane5),
+         oC = !!(CC.clipPlane6 ?? zC.clipPlane6);
+       QC && ZC.push("#define CLIPPLANE"), wC && ZC.push("#define CLIPPLANE2"), bC && ZC.push("#define CLIPPLANE3"), nC && ZC.push("#define CLIPPLANE4"), fC && ZC.push("#define CLIPPLANE5"), oC && ZC.push("#define CLIPPLANE6")
+     }
+ ... (67 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L40-L69` → after: `L388-L960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L388-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L388-L960) · [Before (L40-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L40-L69)

```diff
-       },
-       fk = {
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
-         encodeByteArray(kk, ek) {
-           if (!Array.isArray(kk)) throw Error("encodeByteArray takes an array as a parameter");
- ... (14 more removed lines; see GitHub link above)
+       }
+     }
+   },
+   40110: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => GC
+     });
+     var QC = ZC(39811),
+       wC = ZC(39818),
+       bC = ZC(39913),
+       nC = ZC(36987),
+       fC = ZC(36985),
+       oC = ZC(40119),
+       qC = ZC(39950),
+       FC = ZC(38507),
+       WC = ZC(37596),
+ ... (557 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L71-L77` → after: `L962-L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L962-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L962-L999) · [Before (L71-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L71-L77)

```diff
-           return Dk.join("")
-         },
-         encodeString(kk, ek) {
-           return this.HAS_NATIVE_SUPPORT && !ek ? btoa(kk) : this.encodeByteArray(Dk(kk), ek)
-         },
-         decodeString(kk, ek) {
-           return this.HAS_NATIVE_SUPPORT && !ek ? atob(kk) : function(kk) {
+           if (0 !== this.depthFunction) {
+             const CC = this._scene.mg();
+             this._cachedDepthFunctionState = CC.getDepthFunction() || 0, CC.setDepthFunction(this.depthFunction)
+           }
+         }
+         unbind() {
+           if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
+             this._scene.mg().setDepthFunction(this._cachedDepthFunctionState)
+           }
+           if (this.disableDepthWrite) {
+             this._scene.mg().setDepthWrite(this._cachedDepthWriteState)
+           }
+           if (this.disableColorWrite) {
+             this._scene.mg().setColorWrite(this._cachedColorWriteState)
+           }
+         }
+ ... (22 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L79-L94` → after: `L1001-L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1001-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L1001-L1003) · [Before (L79-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L79-L94)

```diff
-             let ik = 0,
-               Dk = 0;
-             for (; ik < kk.length;) {
-               const fk = kk[ik++];
-               if (fk < 128) ek[Dk++] = String.fromCharCode(fk);
-               else if (fk > 191 && fk < 224) {
-                 const Sk = kk[ik++];
-                 ek[Dk++] = String.fromCharCode((31 & fk) << 6 | 63 & Sk)
-               } else if (fk > 239 && fk < 365) {
-                 const Sk = ((7 & fk) << 18 | (63 & kk[ik++]) << 12 | (63 & kk[ik++]) << 6 | 63 & kk[ik++]) - 65536;
-                 ek[Dk++] = String.fromCharCode(55296 + (Sk >> 10)), ek[Dk++] = String.fromCharCode(56320 + (1023 & Sk))
-               } else {
-                 const Sk = kk[ik++],
-                   bk = kk[ik++];
-                 ek[Dk++] = String.fromCharCode((15 & fk) << 12 | (63 & Sk) << 6 | 63 & bk)
-               }
+             for (const zC in this.meshMap) {
+               const ZC = this.meshMap[zC];
+               ZC && CC.push(ZC)
```

#### 7. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L96-L116` → after: `L1005-L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1005-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L1005-L1026) · [Before (L96-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L96-L116)

```diff
-             return ek.join("")
-           }(this.decodeStringToByteArray(kk, ek))
-         },
-         decodeStringToByteArray(kk, ek) {
-           this.init_();
-           const ik = ek ? this.charToByteMapWebSafe_ : this.charToByteMap_,
-             Dk = [];
-           for (let fk = 0; fk < kk.length;) {
-             const ek = ik[kk.charAt(fk++)],
-               bk = fk < kk.length ? ik[kk.charAt(fk)] : 0;
-             ++fk;
-             const rk = fk < kk.length ? ik[kk.charAt(fk)] : 64;
-             ++fk;
-             const Pk = fk < kk.length ? ik[kk.charAt(fk)] : 64;
-             if (++fk, null == ek || null == bk || null == rk || null == Pk) throw new Sk;
-             const mk = ek << 2 | bk >> 4;
- ... (5 more removed lines; see GitHub link above)
+             return CC
+           }
+           return this._scene.meshes.filter((CC => CC.material === this))
+         }
+         forceCompilation(CC, zC, ZC, QC) {
+           const wC = {
+               clipPlane: !1,
+               useInstances: !1,
+               ...ZC
+             },
+             bC = this.Km(),
+             nC = this.allowShaderHotSwapping;
+           this.allowShaderHotSwapping = !1;
+           const fC = () => {
+             if (!this._scene || !this._scene.mg()) return;
+             const ZC = bC.clipPlane;
+ ... (6 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L118` → after: `L1028-L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1028-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L1028-L1106) · [Before (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L118)

```diff
-             }
+               ZC && (this.allowShaderHotSwapping = nC, bC && QC && QC(bC), zC && zC(this))
+             } else this.isReady() ? (this.allowShaderHotSwapping = nC, zC && zC(this)) : setTimeout(fC, 16);
+             wC.clipPlane && (bC.clipPlane = ZC)
+           };
+           fC()
+         }
+         async forceCompilationAsync(CC, zC) {
+           return await new Promise(((ZC, QC) => {
+             this.forceCompilation(CC, (() => {
+               ZC()
+             }), zC, (CC => {
+               QC(CC)
+             }))
+           }))
+         }
+         YzC(zC) {
+ ... (63 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L120-L125` → after: `L1108-L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1108-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L1108-L1116) · [Before (L120-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L120-L125)

```diff
-           return Dk
-         },
-         init_() {
-           if (!this.byteToCharMap_) {
-             this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
-             for (let kk = 0; kk < this.ENCODED_VALS.length; kk++) this.byteToCharMap_[kk] = this.ENCODED_VALS.charAt(kk), this.charToByteMap_[this.byteToCharMap_[kk]] = kk, this.byteToCharMapWebSafe_[kk] = this.ENCODED_VALS_WEBSAFE.charAt(kk), this.charToByteMapWebSafe_[this.byte … [truncated]
+         }
+         setPrePassRenderer(CC) {
+           return !1
+         }
+         dispose(CC, zC, ZC) {
+           const QC = this.Km();
+           if (QC.stopAnimation(this), QC.freeProcessedMaterials(), QC.removeMaterial(this), this._eventInfo.forceDisposeTextures = zC, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
+             const CC = this._parentContainer.materials.indexOf(this);
+             CC > -1 && this._parentContainer.materials.splice(CC, 1), this._parentContainer = null
```

#### 10. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L128-L144` → after: `L1129-L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1129-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L1129-L1144) · [Before (L128-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L128-L144)

```diff
-       };
-     class Sk extends Error {
-       constructor() {
-         super(...arguments), this.name = "DecodeBase64StringError"
-       }
-     }
-     const bk = function(kk) {
-         return function(kk) {
-           const ek = Dk(kk);
-           return fk.encodeByteArray(ek, !0)
-         }(kk).replace(/\./g, "")
-       },
-       rk = function(kk) {
-         try {
-           return fk.decodeString(kk, !0)
-         } catch (ek) {
- ... (1 more removed lines; see GitHub link above)
+         _disposeMeshResources(CC) {
+           if (!CC) return;
+           const zC = CC.geometry,
+             ZC = CC._internalAbstractMeshDataInfo._materialForRenderPass;
+           if (this._storeEffectOnSubMeshes) {
+             if (CC.Zx && ZC)
+               for (const QC of CC.Zx) {
+                 const CC = QC._drawWrappers;
+                 for (let wC = 0; wC < CC.length; wC++) {
+                   const bC = CC[wC]?.effect;
+                   if (!bC) continue;
+                   ZC[wC] === this && (zC?._releaseVertexArrayObject(bC), QC._removeDrawWrapper(wC, !0, !0))
+                 }
+               }
+           } else zC?._releaseVertexArrayObject(this._drawWrapper.effect);
+           CC.material !== this || CC.LQC || (CC.material = null)
```

#### 11. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L146-L164` → after: `L1146-L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1146-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L1146-L1173) · [Before (L146-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L146-L164)

```diff
-         return null
-       };
-     const Pk = () => function() {
-         if ("undefined" !== typeof self) return self;
-         if ("undefined" !== typeof window) return window;
-         if ("undefined" !== typeof ik.g) return ik.g;
-         throw new Error("Unable to locate global object.")
-       }().__FIREBASE_DEFAULTS__,
-       mk = () => {
-         try {
-           return Pk() || (() => {
-             if ("undefined" === typeof process) return
-           })() || (() => {
-             if ("undefined" === typeof document) return;
-             let kk;
-             try {
- ... (3 more removed lines; see GitHub link above)
+         serialize() {
+           const CC = MC.d.Serialize(this);
+           return CC.stencil = this.stencil.serialize(), CC.uniqueId = this.uniqueId, this._serializePlugins(CC), CC
+         }
+         _serializePlugins(CC) {
+           if (CC.plugins = {}, this.pluginManager)
+             for (const zC of this.pluginManager._plugins) zC.doNotSerialize || (CC.plugins[zC.getClassName()] = zC.serialize())
+         }
+         static ParseAlphaMode(CC, zC) {
+           void 0 !== CC._alphaMode ? zC._alphaMode = Array.isArray(CC._alphaMode) ? [...CC._alphaMode] : [CC._alphaMode] : void 0 !== CC.alphaMode ? zC._alphaMode = Array.isArray(CC.alphaMode) ? [...CC.alphaMode] : [CC.alphaMode] : zC._alphaMode = [2]
+         }
+         static Parse(zC, ZC, QC) {
+           if (zC.customType) {
+             if ("BABYLON.PBRMaterial" === zC.customType && zC.overloadedAlbedo && (zC.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return FC.c.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials  … [truncated]
+           } else zC.customType = "BABYLON.StandardMaterial";
+           const wC = bC.g.Instantiate(zC.customType).Parse(zC, ZC, QC);
+ ... (12 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L172-L184` → after: `L1176-L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1176-L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L1176-L1563) · [Before (L172-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L172-L184)

```diff
-       },
-       Mk = kk => {
-         var ek, ik;
-         return null === (ik = null === (ek = mk()) || void 0 === ek ? void 0 : ek.emulatorHosts) || void 0 === ik ? void 0 : ik[kk]
-       },
-       Kk = () => {
-         var kk;
-         return null === (kk = mk()) || void 0 === kk ? void 0 : kk.config
-       },
-       xk = kk => {
-         var ek;
-         return null === (ek = mk()) || void 0 === ek ? void 0 : ek[`_${kk}`]
-       };
+       }, (() => {
+         const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         zC = [(0, wC.M)()], ZC = [(0, wC.M)()], PC = [(0, wC.M)()], GC = [(0, wC.M)()], RC = [(0, wC.M)()], AC = [(0, wC.M)()], xC = [(0, wC.M)()], JC = [(0, wC.M)("alpha")], IC = [(0, wC.M)("backFaceCulling")], iC = [(0, wC.M)("textureRepetitionMode")], vC = [(0, wC.M)("textureR … [truncated]
+           kind: "getter",
+           name: "pointsCloud",
+           static: !1,
+           private: !1,
+           access: {
+             has: CC => "pointsCloud" in CC,
+             get: CC => CC.pointsCloud
+           },
+           metadata: bC
+         }, null, jC), (0, QC.j)(CC, null, TC, {
+           kind: "getter",
+           name: "fillMode",
+           static: !1,
+ ... (372 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L186-L189` → after: `L1565-L1566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1565-L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L1565-L1566) · [Before (L186-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L186-L189)

```diff
-       constructor() {
-         this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise(((kk, ek) => {
-           this.resolve = kk, this.reject = ek
-         }))
+       static get DiffuseTextureEnabled() {
+         return this._DiffuseTextureEnabled
```

#### 14. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L191-L194` → after: `L1568-L1665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1568-L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L1568-L1665) · [Before (L191-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L191-L194)

```diff
-       wrapCallback(kk) {
-         return (ek, ik) => {
-           ek ? this.reject(ek) : this.resolve(ik), "function" === typeof kk && (this.promise.catch((() => {})), 1 === kk.length ? kk(ek) : kk(ek, ik))
-         }
+       static set DiffuseTextureEnabled(CC) {
+         this._DiffuseTextureEnabled !== CC && (this._DiffuseTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
+       }
+       static get BaseWeightTextureEnabled() {
+         return this._BaseWeightTextureEnabled
+       }
+       static set BaseWeightTextureEnabled(CC) {
+         this._BaseWeightTextureEnabled !== CC && (this._BaseWeightTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
+       }
+       static get BaseDiffuseRoughnessTextureEnabled() {
+         return this._BaseDiffuseRoughnessTextureEnabled
+       }
+       static set BaseDiffuseRoughnessTextureEnabled(CC) {
+         this._BaseDiffuseRoughnessTextureEnabled !== CC && (this._BaseDiffuseRoughnessTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
+       }
+       static get DetailTextureEnabled() {
+ ... (82 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L198-L199` → after: `L1781-L1800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1781-L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L1781-L1800) · [Before (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L198-L199)

```diff
-     function Uk() {
-       return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : ""
+     function NC(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC) {
+       const WC = CC.numMaxInfluencers || CC.numInfluencers;
+       return WC <= 0 ? 0 : (zC.push("#define MORPHTARGETS"), CC.hasPositions && zC.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), CC.hasNormals && zC.push("#define MORPHTARGETTEXTURE_HASNORMALS"), CC.hasTangents && zC.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), CC.hasUVs && … [truncated]
+     }
+ 
+     function MC(CC, zC, ZC) {
+       let bC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+       const nC = ZC.NUM_MORPH_INFLUENCERS;
+       if (nC > 0 && wC.c.LastCreatedEngine) {
+         const fC = wC.c.LastCreatedEngine.getCaps().maxVertexAttribs,
+           oC = zC.morphTargetManager;
+         if (oC?.isUsingTextureForTargets) return;
+         const qC = oC && oC.supportsPositions && bC,
+           FC = oC && oC.supportsNormals && ZC.NORMAL,
+           WC = oC && oC.supportsTangents && ZC.TANGENT,
+           NC = oC && oC.supportsUVs && ZC.UV1,
+ ... (4 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L202-L203` → after: `L1803-L1805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1803-L1805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L1803-L1805) · [Before (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L202-L203)

```diff
-     function Hk() {
-       return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Uk())
+     function gC(CC) {
+       let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+       CC.push("world0"), CC.push("world1"), CC.push("world2"), CC.push("world3"), zC && (CC.push("previousWorld0"), CC.push("previousWorld1"), CC.push("previousWorld2"), CC.push("previousWorld3"))
```

#### 17. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L206-L208` → after: `L1808-L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1808-L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L1808-L1810) · [Before (L206-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L206-L208)

```diff
-     function wk() {
-       const kk = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
-       return "object" === typeof kk && void 0 !== kk.id
+     function SC(CC, zC) {
+       const ZC = CC.morphTargetManager;
+       CC && ZC && zC.setFloatArray("morphTargetInfluences", ZC.influences)
```

#### 18. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L211-L212` → after: `L1813-L1814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1813-L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L1813-L1814) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L211-L212)

```diff
-     function lk() {
-       return "object" === typeof navigator && "ReactNative" === navigator.product
+     function pC(CC, zC) {
+       zC.bindToEffect(CC, "Scene")
```

#### 19. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L215-L217` → after: `L1817-L1845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1817-L1845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L1817-L1845) · [Before (L215-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L215-L217)

```diff
-     function pk() {
-       const kk = Uk();
-       return kk.indexOf("MSIE ") >= 0 || kk.indexOf("Trident/") >= 0
+     function PC(CC, zC, ZC, QC) {
+       let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+         bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         nC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         oC = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         qC = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         FC = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
+         WC = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
+         NC = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
+       if (CC.texturesEnabled && wC && fC.b.ReflectionTextureEnabled) {
+         if (ZC.x_("reflectionMatrix", wC.getReflectionTextureMatrix()), ZC.updateFloat2("vReflectionInfos", wC.level * CC.iblIntensity, NC), oC && wC.boundingBoxSize) {
+           const CC = wC;
+           ZC.updateVector3("vReflectionPosition", CC.boundingBoxPosition), ZC.updateVector3("vReflectionSize", CC.boundingBoxSize)
+         }
+         if (bC) {
+           const CC = wC.getSize().width;
+ ... (13 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L220-L224` → after: `L1848-L1854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1848-L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L1848-L1854) · [Before (L220-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L220-L224)

```diff
-     function yk() {
-       try {
-         return "object" === typeof indexedDB
-       } catch (kk) {
-         return !1
+     function GC(CC, zC, ZC) {
+       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+         wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+       if (QC && fC.b.ReflectionTextureEnabled) {
+         zC.LODBASEDMICROSFURACE ? ZC.setTexture("reflectionSampler", QC) : (ZC.setTexture("reflectionSampler", QC._lodTextureMid || QC), ZC.setTexture("reflectionSamplerLow", QC._lodTextureLow || QC), ZC.setTexture("reflectionSamplerHigh", QC._lodTextureHigh || QC)), zC.USEIRRADI … [truncated]
+         const bC = CC.iblCdfGenerator;
+         wC && bC && ZC.setTexture("icdfSampler", bC.getIcdfTexture())
```

#### 21. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L228-L245` → after: `L1858-L1859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1858-L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L1858-L1859) · [Before (L228-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L228-L245)

```diff
-     function Yk() {
-       return new Promise(((kk, ek) => {
-         try {
-           let ik = !0;
-           const Dk = "validate-browser-context-for-indexeddb-analytics-module",
-             fk = self.indexedDB.open(Dk);
-           fk.onsuccess = () => {
-             fk.result.close(), ik || self.indexedDB.deleteDatabase(Dk), kk(!0)
-           }, fk.onupgradeneeded = () => {
-             ik = !1
-           }, fk.onerror = () => {
-             var kk;
-             ek((null === (kk = fk.error) || void 0 === kk ? void 0 : kk.message) || "")
-           }
-         } catch (ik) {
-           ek(ik)
- ... (2 more removed lines; see GitHub link above)
+     function RC(CC, zC, ZC) {
+       zC._needUVs = !0, zC[ZC] = !0, CC.optimizeUVAllocation && CC.getTextureMatrix().isIdentityAs3x2() ? (zC[ZC + "DIRECTUV"] = CC.coordinatesIndex + 1, zC["MAINUV" + (CC.coordinatesIndex + 1)] = !0) : zC[ZC + "DIRECTUV"] = 0
```

#### 22. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L248-L272` → after: `L1862-L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1862-L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L1862-L1864) · [Before (L248-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L248-L272)

```diff
-     function Lk() {
-       return !("undefined" === typeof navigator || !navigator.cookieEnabled)
-     }
-     class Ck extends Error {
-       constructor(kk, ek, ik) {
-         super(ek), this.code = kk, this.customData = ik, this.name = "FirebaseError", Object.setPrototypeOf(this, Ck.prototype), Error.captureStackTrace && Error.captureStackTrace(this, Ak.prototype.create)
-       }
-     }
-     class Ak {
-       constructor(kk, ek, ik) {
-         this.service = kk, this.serviceName = ek, this.errors = ik
-       }
-       create(kk) {
-         const ek = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
-           ik = `${this.service}/${kk}`,
-           Dk = this.errors[kk],
- ... (9 more removed lines; see GitHub link above)
+     function AC(CC, zC, ZC) {
+       const QC = CC.getTextureMatrix();
+       zC.x_(ZC + "Matrix", QC)
```

#### 23. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L276-L279` → after: `L1867-L1868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1867-L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L1867-L1868) · [Before (L276-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L276-L279)

```diff
-     function sk(kk) {
-       for (const ek in kk)
-         if (Object.prototype.hasOwnProperty.call(kk, ek)) return !1;
-       return !0
+     function xC(CC, zC, ZC) {
+       ZC.BAKED_VERTEX_ANIMATION_TEXTURE && ZC.INSTANCES && CC.push("bakedVertexAnimationSettingsInstanced")
```

#### 24. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L282-L296` → after: `L1871-L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1871-L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L1871-L1882) · [Before (L282-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L282-L296)

```diff
-     function dk(kk, ek) {
-       if (kk === ek) return !0;
-       const ik = Object.keys(kk),
-         Dk = Object.keys(ek);
-       for (const fk of ik) {
-         if (!Dk.includes(fk)) return !1;
-         const ik = kk[fk],
-           Sk = ek[fk];
-         if (Vk(ik) && Vk(Sk)) {
-           if (!dk(ik, Sk)) return !1
-         } else if (ik !== Sk) return !1
-       }
-       for (const fk of Dk)
-         if (!ik.includes(fk)) return !1;
-       return !0
+     function JC(CC, zC, ZC) {
+       var QC;
+       if (zC && CC && (CC.computeBonesUsingShaders && zC._bonesComputationForcedToCPU && (CC.computeBonesUsingShaders = !1), CC.useBones && CC.computeBonesUsingShaders && CC.skeleton)) {
+         const wC = CC.skeleton;
+         if (wC.isUsingTextureForMatrices && zC.getUniformIndex("boneTextureInfo") > -1) {
+           const ZC = wC.getTransformMatrixTexture(CC);
+           zC.setTexture("boneSampler", ZC), zC.setFloat2("boneTextureInfo", wC._textureWidth, wC._textureHeight)
+         } else {
+           const bC = wC.getTransformMatrices(CC);
+           bC && (zC.setMatrices("mBones", bC), ZC && CC.Km().prePassRenderer && CC.Km().prePassRenderer.getIndex(2) && (ZC.previousBones[CC.uniqueId] || (ZC.previousBones[CC.uniqueId] = bC.slice()), zC.setMatrices("mPreviousBones", ZC.previousBones[CC.uniqueId]), QC = bC, ZC.prev … [truncated]
+         }
+       }
```

#### 25. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L299-L300` → after: `L1885-L1887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1885-L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L1885-L1887) · [Before (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L299-L300)

```diff
-     function Vk(kk) {
-       return null !== kk && "object" === typeof kk
+     function IC(CC, zC, ZC, QC, wC) {
+       let bC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
+       CC._bindLight(zC, ZC, QC, wC, bC)
```

#### 26. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L303-L308` → after: `L1892-L1897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1892-L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L1892-L1897) · [Before (L303-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L303-L308)

```diff
-     function Fk(kk) {
-       const ek = [];
-       for (const [ik, Dk] of Object.entries(kk)) Array.isArray(Dk) ? Dk.forEach((kk => {
-         ek.push(encodeURIComponent(ik) + "=" + encodeURIComponent(kk))
-       })) : ek.push(encodeURIComponent(ik) + "=" + encodeURIComponent(Dk));
-       return ek.length ? "&" + ek.join("&") : ""
+     function eC(CC, zC, ZC, QC) {
+       let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
+       const bC = Math.min(zC.lightSources.length, wC);
+       for (let nC = 0; nC < bC; nC++) {
+         IC(zC.lightSources[nC], nC, CC, ZC, "boolean" === typeof QC ? QC : QC.SPECULARTERM, zC.receiveShadows)
+       }
```

#### 27. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L311-L318` → after: `L1900-L1901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1900-L1901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L1900-L1901) · [Before (L311-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L311-L318)

```diff
-     function uk(kk) {
-       const ek = {};
-       return kk.replace(/^\?/, "").split("&").forEach((kk => {
-         if (kk) {
-           const [ik, Dk] = kk.split("=");
-           ek[decodeURIComponent(ik)] = decodeURIComponent(Dk)
-         }
-       })), ek
+     function hC(CC, zC, ZC, QC) {
+       ZC.NUM_BONE_INFLUENCERS > 0 && (QC.addCPUSkinningFallback(0, zC), CC.push("matricesIndices"), CC.push("matricesWeights"), ZC.NUM_BONE_INFLUENCERS > 4 && (CC.push("matricesIndicesExtra"), CC.push("matricesWeightsExtra")))
```

#### 28. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L321-L325` → after: `L1904-L1905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1904-L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L1904-L1905) · [Before (L321-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L321-L325)

```diff
-     function qk(kk) {
-       const ek = kk.indexOf("?");
-       if (!ek) return "";
-       const ik = kk.indexOf("#", ek);
-       return kk.substring(ek, ik > 0 ? ik : void 0)
+     function KC(CC, zC) {
+       (zC.INSTANCES || zC.THIN_INSTANCES) && gC(CC, !!zC.PREPASS_VELOCITY), zC.INSTANCESCOLOR && CC.push("instanceColor")
```

#### 29. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L329-L330` → after: `L1909-L1913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1909-L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L1909-L1913) · [Before (L329-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L329-L330)

```diff
-       const ik = new zk(kk, ek);
-       return ik.subscribe.bind(ik)
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
+         QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+         wC = 0;
+       for (let bC = 0; bC < ZC && CC["LIGHT" + bC]; bC++) bC > 0 && (wC = QC + bC, zC.addFallback(wC, "LIGHT" + bC)), CC.SHADOWS || (CC["SHADOW" + bC] && zC.addFallback(QC, "SHADOW" + bC), CC["SHADOWPCF" + bC] && zC.addFallback(QC, "SHADOWPCF" + bC), CC["SHADOWPCSS" + bC] && zC.a … [truncated]
+       return wC
```

#### 30. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L332-L394` → after: `L1915-L1927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1915-L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L1915-L1927) · [Before (L332-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L332-L394)

```diff
-     class zk {
-       constructor(kk, ek) {
-         this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = ek, this.task.then((() => {
-           kk(this)
-         })).catch((kk => {
-           this.error(kk)
-         }))
-       }
-       next(kk) {
-         this.forEachObserver((ek => {
-           ek.next(kk)
-         }))
-       }
-       error(kk) {
-         this.forEachObserver((ek => {
-           ek.error(kk)
- ... (47 more removed lines; see GitHub link above)
+ 
+     function dC(CC, zC, ZC, QC, wC, bC, nC) {
+       let fC = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         oC = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         qC = arguments.length > 9 ? arguments[9] : void 0,
+         FC = arguments.length > 10 ? arguments[10] : void 0;
+       if (nC._areMiscDirty) {
+         nC.LOGARITHMICDEPTH = ZC, nC.POINTSIZE = QC, nC.FOG = wC && function(CC, zC) {
+           return zC.fogEnabled && CC.applyFog && 0 !== zC.fogMode
+         }(CC, zC), nC.NONUNIFORMSCALING = CC.nonUniformScaling, nC.ALPHATEST = bC, nC.DECAL_AFTER_DETAIL = fC, nC.USE_VERTEX_PULLING = oC, nC.RIGHT_HANDED = zC.useRightHandedSystem;
+         const WC = oC ? qC?.geometry?.getIndexBuffer() : null,
+           NC = !!qC && qC.isUnIndexed;
+         nC.VERTEX_PULLING_USE_INDEX_BUFFER = !!WC && !NC, nC.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!WC || NC) && WC.is32Bits, nC.VERTEXOUTPUT_INVARIANT = !!FC
```

#### 31. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L398-L402` → after: `L1931-L1939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1931-L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L1931-L1939) · [Before (L398-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L398-L402)

```diff
-     function Qk() {}
-     const vk = 1e3,
-       Ek = 2,
-       hk = 144e5,
-       ak = .5;
+     function mC(CC, zC, ZC) {
+       let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       if (!CC.lightsEnabled || QC) return !0;
+       const wC = zC.lightSources,
+         bC = Math.min(wC.length, ZC);
+       for (let nC = 0; nC < bC; nC++)
+         if (!wC[nC].areLightTexturesReady()) return !1;
+       return !0
+     }
```

#### 32. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L404-L408` → after: `L1941-L1973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1941-L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L1941-L1973) · [Before (L404-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L404-L408)

```diff
-     function Wk(kk) {
-       let ek = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ek;
-       const ik = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vk) * Math.pow(ek, kk),
-         Dk = Math.round(ak * ik * (Math.random() - .5) * 2);
-       return Math.min(hk, ik + Dk)
+     function HC(CC, zC, ZC, wC) {
+       let bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
+         nC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       if (!ZC._areLightsDirty) return ZC._needNormals;
+       const fC = bC;
+       bC = function(CC, zC) {
+         const ZC = CC.mg().getCaps().maxUniformBuffersPerShaderStage;
+         if (null == ZC) return zC;
+         const QC = Math.max(ZC - iC, 1);
+         return Math.min(zC, QC)
+       }(CC, bC);
+       let oC = 0;
+       const qC = {
+         needNormals: ZC._needNormals,
+         needRebuild: !1,
+         lightmapMode: !1,
+ ... (17 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L411-L412` → after: `L1976-L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR1976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L1976-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L1976-L2014) · [Before (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L411-L412)

```diff
-     function tk(kk) {
-       return kk && kk._delegate ? kk._delegate : kk
+     function EC(CC, zC, ZC) {
+       let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+         wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
+         bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       if (zC && fC.b.ReflectionTextureEnabled) {
+         if (!zC.isReadyOrNotBlocking()) return !1;
+         ZC._needNormals = !0, ZC.REFLECTION = !0, ZC.GAMMAREFLECTION = zC.gammaSpace, ZC.RGBDREFLECTION = zC.isRGBD, ZC.LODINREFLECTIONALPHA = zC.lodLevelInAlpha, ZC.LINEARSPECULARREFLECTION = zC.linearSpecularLOD, ZC.USEIRRADIANCEMAP = !1, ZC.LODBASEDMICROSFURACE = CC.mg().getCa … [truncated]
+         const nC = CC.mg();
+         switch (QC && wC > 0 ? (ZC.NUM_SAMPLES = "" + wC, nC._features.needTypeSuffixInShaderConstants && (ZC.NUM_SAMPLES = ZC.NUM_SAMPLES + "u"), ZC.REALTIME_FILTERING = !0, CC.iblCdfGenerator && (ZC.IBL_CDF_FILTERING = !0)) : ZC.REALTIME_FILTERING = !1, ZC.INVERTCUBICMAP = 6 == … [truncated]
+           case 0:
+             ZC.REFLECTIONMAP_EXPLICIT = !0;
+             break;
+           case 2:
+             ZC.REFLECTIONMAP_PLANAR = !0;
+             break;
+           case 4:
+ ... (23 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L458-L468` → after: `L2017-L2033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2017-L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2017-L2033) · [Before (L458-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L458-L468)

```diff
-     function Uk(kk) {
-       return kk !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (rk || (rk = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(kk) ? function() {
-         for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
-         return kk.apply(lk(this), ik), wk(Pk.get(this))
-       } : function() {
-         for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
-         return wk(kk.apply(lk(this), ik))
-       } : function(ek) {
-         for (var ik = arguments.length, Dk = new Array(ik > 1 ? ik - 1 : 0), fk = 1; fk < ik; fk++) Dk[fk - 1] = arguments[fk];
-         const Sk = kk.call(lk(this), ek, ...Dk);
-         return Mk.set(Sk, ek.sort ? ek.sort() : [ek]), wk(Sk)
+     function lC(CC, zC, ZC, QC, wC, nC, fC) {
+       switch (fC.needNormals = !0, void 0 === wC["LIGHT" + QC] && (fC.needRebuild = !0), wC["LIGHT" + QC] = !0, wC["SPOTLIGHT" + QC] = !1, wC["HEMILIGHT" + QC] = !1, wC["POINTLIGHT" + QC] = !1, wC["DIRLIGHT" + QC] = !1, wC["AREALIGHT" + QC] = !1, wC["CLUSTLIGHT" + QC] = !1, ZC.pr … [truncated]
+         case bC.c.FALLOFF_GLTF:
+           wC["LIGHT_FALLOFF_GLTF" + QC] = !0;
+           break;
+         case bC.c.FALLOFF_PHYSICAL:
+           wC["LIGHT_FALLOFF_PHYSICAL" + QC] = !0;
+           break;
+         case bC.c.FALLOFF_STANDARD:
+           wC["LIGHT_FALLOFF_STANDARD" + QC] = !0
+       }
+       if (nC && !ZC.specular.equalsFloats(0, 0, 0) && (fC.specularEnabled = !0), wC["SHADOW" + QC] = !1, wC["SHADOWCSM" + QC] = !1, wC["SHADOWCSMDEBUG" + QC] = !1, wC["SHADOWCSMNUM_CASCADES" + QC] = !1, wC["SHADOWCSMUSESHADOWMAXZ" + QC] = !1, wC["SHADOWCSMNOBLEND" + QC] = !1, wC[ … [truncated]
+         const zC = ZC.getShadowGenerator(CC.activeCamera) ?? ZC.getShadowGenerator();
+         if (zC) {
+           const CC = zC.getShadowMap();
+           CC && CC.renderList && CC.renderList.length > 0 && (fC.shadowEnabled = !0, zC.prepareDefines(wC, QC))
+ ... (1 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L472-L489` → after: `L2038-L2052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2038-L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2038-L2052) · [Before (L472-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L472-L489)

```diff
-     function Hk(kk) {
-       return "function" === typeof kk ? Uk(kk) : (kk instanceof IDBTransaction && function(kk) {
-         if (mk.has(kk)) return;
-         const ek = new Promise(((ek, ik) => {
-           const Dk = () => {
-               kk.removeEventListener("complete", fk), kk.removeEventListener("error", Sk), kk.removeEventListener("abort", Sk)
-             },
-             fk = () => {
-               ek(), Dk()
-             },
-             Sk = () => {
-               ik(kk.error || new DOMException("AbortError", "AbortError")), Dk()
-             };
-           kk.addEventListener("complete", fk), kk.addEventListener("error", Sk), kk.addEventListener("abort", Sk)
-         }));
-         mk.set(kk, ek)
- ... (2 more removed lines; see GitHub link above)
+     function XC(CC, zC, ZC, QC, wC) {
+       let bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+         fC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         oC = function(CC, zC) {
+           let ZC = !1;
+           if (CC.activeCamera) {
+             const QC = zC.CAMERA_ORTHOGRAPHIC ? 1 : 0,
+               wC = zC.CAMERA_PERSPECTIVE ? 1 : 0,
+               bC = 1 === CC.activeCamera.mode ? 1 : 0,
+               nC = 0 === CC.activeCamera.mode ? 1 : 0;
+             (QC ^ bC || wC ^ nC) && (zC.CAMERA_ORTHOGRAPHIC = 1 === bC, zC.CAMERA_PERSPECTIVE = 1 === nC, ZC = !0)
+           }
+           return ZC
+         }(CC, QC);
+       !1 !== bC && (oC = (0, nC.i)(ZC, CC, QC)), QC.DEPTHPREPASS !== !zC.getColorWrite() && (QC.DEPTHPREPASS = !QC.DEPTHPREPASS, oC = !0), QC.INSTANCES !== wC && (QC.INSTANCES = wC, oC = !0), QC.THIN_INSTANCES !== fC && (QC.THIN_INSTANCES = fC, oC = !0), oC && QC.markAsUnprocesse … [truncated]
```

#### 36. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L492-L512` → after: `L2059-L2103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2059-L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2059-L2103) · [Before (L492-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L492-L512)

```diff
-     function wk(kk) {
-       if (kk instanceof IDBRequest) return function(kk) {
-         const ek = new Promise(((ek, ik) => {
-           const Dk = () => {
-               kk.removeEventListener("success", fk), kk.removeEventListener("error", Sk)
-             },
-             fk = () => {
-               ek(wk(kk.result)), Dk()
-             },
-             Sk = () => {
-               ik(kk.error), Dk()
-             };
-           kk.addEventListener("success", fk), kk.addEventListener("error", Sk)
-         }));
-         return ek.then((ek => {
-           ek instanceof IDBCursor && Pk.set(ek, kk)
- ... (5 more removed lines; see GitHub link above)
+     function TC(CC, zC, ZC, wC) {
+       let bC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+         nC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
+         fC = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
+       if (!zC._areAttributesDirty && zC._needNormals === zC._normals && zC._needUVs === zC._uvs) return !1;
+       zC._normals = zC._needNormals, zC._uvs = zC._needUVs, zC.NORMAL = zC._needNormals && CC.isVerticesDataPresent("normal"), zC._needNormals && CC.isVerticesDataPresent("tangent") && (zC.TANGENT = !0);
+       for (let QC = 1; QC <= 6; ++QC) zC["UV" + QC] = !!zC._needUVs && CC.isVerticesDataPresent(`uv${1===QC?"":QC}`);
+       if (ZC) {
+         const ZC = CC.useVertexColors && CC.isVerticesDataPresent("color");
+         zC.VERTEXCOLOR = ZC, zC.VERTEXALPHA = CC.hasVertexAlpha && ZC && nC
+       }
+       return CC.isVerticesDataPresent("instanceColor") && (CC.yQC || CC.hasThinInstances) && (zC.INSTANCESCOLOR = !0), wC && function(CC, zC) {
+         if (CC.useBones && CC.computeBonesUsingShaders && CC.skeleton) {
+           zC.NUM_BONE_INFLUENCERS = CC.numBoneInfluencers;
+           const ZC = void 0 !== zC.BONETEXTURE;
+           if (CC.skeleton.isUsingTextureForMatrices && ZC) zC.BONETEXTURE = !0;
+ ... (29 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L520-L553` → after: `L2107-L2109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2107-L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2107-L2109) · [Before (L520-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L520-L553)

```diff
-       if (!(kk instanceof IDBDatabase) || ek in kk || "string" !== typeof ek) return;
-       if (Yk.get(ek)) return Yk.get(ek);
-       const ik = ek.replace(/FromIndex$/, ""),
-         Dk = ek !== ik,
-         fk = yk.includes(ik);
-       if (!(ik in (Dk ? IDBIndex : IDBObjectStore).prototype) || !fk && !pk.includes(ik)) return;
-       const Sk = async function(kk) {
-         const ek = this.transaction(kk, fk ? "readwrite" : "readonly");
-         let Sk = ek.store;
-         for (var bk = arguments.length, rk = new Array(bk > 1 ? bk - 1 : 0), Pk = 1; Pk < bk; Pk++) rk[Pk - 1] = arguments[Pk];
-         return Dk && (Sk = Sk.index(rk.shift())), (await Promise.all([Sk[ik](...rk), fk && ek.done]))[0]
-       };
-       return Yk.set(ek, Sk), Sk
-     }
-     nk = (kk => ({
-       ...kk,
- ... (18 more removed lines; see GitHub link above)
+       if (CC.activeCamera) {
+         const ZC = zC.MULTIVIEW;
+         zC.MULTIVIEW = null !== CC.activeCamera.outputRenderTarget && CC.activeCamera.outputRenderTarget.getViewCount() > 1, zC.MULTIVIEW != ZC && zC.markAsUnprocessed()
```

#### 38. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L615-L620` → after: `L2113-L2116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2113-L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2113-L2116) · [Before (L615-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L615-L620)

```diff
-     function De(kk, ek) {
-       try {
-         kk.container.wq(ek)
-       } catch (ik) {
-         sk.debug(`Component ${ek.name} failed to register with FirebaseApp ${kk.name}`, ik)
-       }
+     function tC(CC, zC, ZC) {
+       const QC = zC.ORDER_INDEPENDENT_TRANSPARENCY,
+         wC = zC.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
+       zC.ORDER_INDEPENDENT_TRANSPARENCY = CC.useOrderIndependentTransparency && ZC, zC.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !CC.mg().getCaps().textureFloatLinearFiltering, QC === zC.ORDER_INDEPENDENT_TRANSPARENCY && wC === zC.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || zC.markAsU … [truncated]
```

#### 39. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L623-L624` → after: `L2119-L2180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2119-L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2119-L2180) · [Before (L623-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L623-L624)

```diff
-     function fe(kk, ek) {
-       kk.container.addOrOverwriteComponent(ek)
+     function DC(CC, zC, ZC) {
+       const QC = zC.PREPASS;
+       if (!zC._arePrePassDirty) return;
+       const wC = [{
+         type: 1,
+         define: "PREPASS_POSITION",
+         index: "PREPASS_POSITION_INDEX"
+       }, {
+         type: 9,
+         define: "PREPASS_LOCAL_POSITION",
+         index: "PREPASS_LOCAL_POSITION_INDEX"
+       }, {
+         type: 2,
+         define: "PREPASS_VELOCITY",
+         index: "PREPASS_VELOCITY_INDEX"
+       }, {
+ ... (46 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L627-L632` → after: `L2183-L2190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2183-L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2183-L2190) · [Before (L627-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L627-L632)

```diff
-     function Se(kk) {
-       const ek = kk.name;
-       if (ie.has(ek)) return sk.debug(`There were multiple attempts to register component ${ek}.`), !1;
-       ie.set(ek, kk);
-       for (const ik of ee.values()) De(ik, kk);
-       return !0
+     function jC(CC, zC, ZC, QC) {
+       let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+         bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         nC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         fC = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         oC = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         qC = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
+       wC && wC.push("Light" + CC), bC || (zC.push("vLightData" + CC, "vLightDiffuse" + CC, "vLightSpecular" + CC, "vLightDirection" + CC, "vLightWidth" + CC, "vLightHeight" + CC, "vLightFalloff" + CC, "vLightGround" + CC, "vSliceData" + CC, "vSliceRanges" + CC, "lightMatrix" + CC … [truncated]
```

#### 41. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L635-L639` → after: `L2193-L2196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2193-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2193-L2196) · [Before (L635-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L635-L639)

```diff
-     function be(kk, ek) {
-       const ik = kk.container.getProvider("heartbeat").getImmediate({
-         optional: !0
-       });
-       return ik && ik.triggerHeartbeat(), kk.container.getProvider(ek)
+     function yC(CC, zC, ZC) {
+       const QC = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
+       ZC && QC.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSpheri … [truncated]
+       zC.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
```

#### 42. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L642-L644` → after: `L2199-L2207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2199-L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2199-L2207) · [Before (L642-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L642-L644)

```diff
-     function re(kk, ek) {
-       let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Jk;
-       be(kk, ek).clearInstance(ik)
+     function LC(CC, zC, ZC) {
+       let QC, wC, bC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
+         nC = null;
+       if (CC.uniformsNames) {
+         const fC = CC;
+         QC = fC.uniformsNames, wC = fC.uniformBuffersNames, zC = fC.samplers, ZC = fC.defines, bC = fC.maxSimultaneousLights || 0, nC = fC.shaderLanguage ?? null
+       } else QC = CC, zC || (zC = []);
+       for (let fC = 0; fC < bC && ZC["LIGHT" + fC]; fC++) jC(fC, QC, zC, ZC["PROJECTEDLIGHTTEXTURE" + fC], wC, !1, ZC["IESLIGHTTEXTURE" + fC], ZC["CLUSTLIGHT" + fC], ZC["RECTAREALIGHTEMISSIONTEXTURE" + fC], 1 === nC);
+       ZC.NUM_MORPH_INFLUENCERS && (QC.push("morphTargetInfluences"), QC.push("morphTargetCount")), ZC.BAKED_VERTEX_ANIMATION_TEXTURE && (QC.push("bakedVertexAnimationSettings"), QC.push("bakedVertexAnimationTextureSizeInverted"), QC.push("bakedVertexAnimationTime"), zC.push("bake … [truncated]
```

#### 43. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L647-L648` → after: `L2210-L2216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2210-L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2210-L2216) · [Before (L647-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L647-L648)

```diff
-     function Pe() {
-       ie.clear()
+     function UC(CC) {
+       let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+         ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+         wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+         bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       CC.addUniform("vReflectionInfos", 2), CC.addUniform("reflectionMatrix", 16), zC && CC.addUniform("vReflectionMicrosurfaceInfos", 3), ZC && (CC.addUniform("vReflectionPosition", 3), CC.addUniform("vReflectionSize", 3)), QC && (CC.addUniform("vReflectionFilteringInfo", 2), CC … [truncated]
```

#### 44. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L650-L666` → after: `L2218-L2228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2218-L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2218-L2228) · [Before (L650-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L650-L666)

```diff
-     const me = {
-         "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
-         "bad-app-name": "Illegal App name: '{$appName}",
-         "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
-         "app-deleted": "Firebase App named '{$appName}' already deleted",
-         "no-options": "Need to provide options, when not being deployed to hosting via source.",
-         "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
-         "invalid-log-argument": "First argument to `onLog` must be null or a function.",
-         "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
-         "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
-         "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
-         "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
-       },
-       Me = new Sk.g("app", "Firebase", me);
-     class Ke {
-       constructor(kk, ek, ik) {
- ... (1 more removed lines; see GitHub link above)
+   },
+   40167: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => bC
+     });
+     var QC = ZC(36963),
+       wC = ZC(40110);
+     class bC extends wC.d {
+       constructor(CC, zC) {
+         let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+         super(CC, zC, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new QC.b, this._storeEffectOnSubMeshes = ZC
```

#### 45. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L668-L669` → after: `L2230-L2231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2230-L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2230-L2231) · [Before (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L668-L669)

```diff
-       get automaticDataCollectionEnabled() {
-         return this.checkDestroyed(), this._automaticDataCollectionEnabled
+       getEffect() {
+         return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
```

#### 46. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L671-L672` → after: `L2233-L2234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2233-L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2233-L2234) · [Before (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L671-L672)

```diff
-       set automaticDataCollectionEnabled(kk) {
-         this.checkDestroyed(), this._automaticDataCollectionEnabled = kk
+       isReady(CC, zC) {
+         return !!CC && (!this._storeEffectOnSubMeshes || (!CC.Zx || 0 === CC.Zx.length || this.isReadyForSubMesh(CC, CC.Zx[0], zC)))
```

#### 47. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L674-L675` → after: `L2236-L2238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2236-L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2236-L2238) · [Before (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L674-L675)

```diff
-       get name() {
-         return this.checkDestroyed(), this._name
+       _isReadyForSubMesh(CC) {
+         const zC = CC.materialDefines;
+         return !(this.checkReadyOnEveryCall || !CC.effect || !zC || zC._renderId !== this.Km().getRenderId())
```

#### 48. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L677-L678` → after: `L2240-L2241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2240-L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2240-L2241) · [Before (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L677-L678)

```diff
-       get options() {
-         return this.checkDestroyed(), this._options
+       bindOnlyWorldMatrix(CC) {
+         this._activeEffect.setMatrix("world", CC)
```

#### 49. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L680-L681` → after: `L2243-L2244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2243-L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2243-L2244) · [Before (L680-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L680-L681)

```diff
-       get config() {
-         return this.checkDestroyed(), this._config
+       bindOnlyNormalMatrix(CC) {
+         this._activeEffect.setMatrix("normalMatrix", CC)
```

#### 50. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L683-L684` → after: `L2246-L2247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2246-L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2246-L2247) · [Before (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L683-L684)

```diff
-       get container() {
-         return this._container
+       bind(CC, zC) {
+         zC && this.bindForSubMesh(CC, zC, zC.Zx[0])
```

#### 51. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L686-L687` → after: `L2249-L2252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2249-L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2249-L2252) · [Before (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L686-L687)

```diff
-       get isDeleted() {
-         return this._isDeleted
+       _afterBind(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           ZC = arguments.length > 2 ? arguments[2] : void 0;
+         super._afterBind(CC, zC, ZC), this.Km()._cachedEffect = zC, ZC ? ZC._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
```

#### 52. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L689-L690` → after: `L2254-L2256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2254-L2256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2254-L2256) · [Before (L689-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L689-L690)

```diff
-       set isDeleted(kk) {
-         this._isDeleted = kk
+       _mustRebind(CC, zC, ZC) {
+         let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
+         return ZC._drawWrapper._forceRebindOnNextCall || CC.isCachedMaterialInvalid(this, zC, QC)
```

#### 53. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L692-L695` → after: `L2258-L2259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2258-L2259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2258-L2259) · [Before (L692-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L692-L695)

```diff
-       checkDestroyed() {
-         if (this.isDeleted) throw Me.create("app-deleted", {
-           appName: this._name
-         })
+       dispose(CC, zC, ZC) {
+         this._activeEffect = void 0, super.dispose(CC, zC, ZC)
```

#### 54. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L698` → after: `L2262-L2268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2262-L2268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2262-L2268) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L698)

```diff
-     const xe = "9.23.0";
+   },
+   40196: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => bC,
+       d: () => wC
+     });
+     const QC = new WeakMap;
```

#### 55. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L701-L717` → after: `L2271-L2273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2271-L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2271-L2273) · [Before (L701-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L701-L717)

```diff
-       let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-         ik = kk;
-       if ("object" !== typeof ek) {
-         ek = {
-           name: ek
-         }
-       }
-       const fk = Object.assign({
-           name: Jk,
-           automaticDataCollectionEnabled: !1
-         }, ek),
-         bk = fk.name;
-       if ("string" !== typeof bk || !bk) throw Me.create("bad-app-name", {
-         appName: String(bk)
-       });
-       if (ik || (ik = (0, Sk.H)()), !ik) throw Me.create("no-options");
- ... (1 more removed lines; see GitHub link above)
+       const zC = CC.getVertexBuffers();
+       if (!zC) return null;
+       let ZC = QC.get(CC);
```

#### 56. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L719-L722` → after: `L2275-L2295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2275-L2295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2275-L2295) · [Before (L719-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L719-L722)

```diff
-         if ((0, Sk.C)(ik, rk.options) && (0, Sk.C)(fk, rk.config)) return rk;
-         throw Me.create("duplicate-app", {
-           appName: bk
-         })
+         let CC = !1;
+         for (const QC in zC)
+           if (!ZC.has(QC)) {
+             CC = !0;
+             break
+           } if (!CC) return ZC
+       } else ZC = new Map, QC.set(CC, ZC);
+       for (const QC in zC) {
+         const CC = zC[QC];
+         if (CC) {
+           const zC = CC.byteOffset,
+             wC = CC.byteStride,
+             bC = CC.type,
+             nC = CC.normalized;
+           ZC.set(QC, {
+             offset: zC,
+ ... (5 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L765-L876` → after: `L2301-L2304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2301-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2301-L2304) · [Before (L765-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L765-L876)

```diff
-       if (null !== kk && "function" !== typeof kk) throw Me.create("invalid-log-argument");
-       (0, fk.k)(kk, ek)
-     }
- 
-     function ye(kk) {
-       (0, fk.h)(kk)
-     }
-     const Ye = "firebase-heartbeat-store";
-     let Le = null;
- 
-     function Ce() {
-       return Le || (Le = function(kk, ek) {
-         let {
-           blocked: ik,
-           upgrade: Dk,
-           blocking: fk,
- ... (96 more removed lines; see GitHub link above)
+       zC.forEach(((zC, ZC) => {
+         const QC = `vp_${ZC}_info`;
+         CC.setFloat4(QC, zC.offset, zC.stride, zC.type, zC.normalized ? 1 : 0)
+       }))
```

#### 58. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L878-L901` → after: `L2306-L2325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2306-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2306-L2325) · [Before (L878-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L878-L901)

```diff
-     class Ve {
-       constructor(kk) {
-         this.app = kk, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
-       }
-       async runIndexedDBEnvironmentCheck() {
-         return !!(0, Sk.cb)() && (0, Sk.rb)().then((() => !0)).catch((() => !1))
-       }
-       async read() {
-         if (await this._canUseIndexedDBPromise) {
-           return await async function(kk) {
-             try {
-               const ek = await Ce();
-               return await ek.transaction(Ye).objectStore(Ye).get(je(kk))
-             } catch (ek) {
-               if (ek instanceof Sk.j) sk.warn(ek.message);
-               else {
- ... (8 more removed lines; see GitHub link above)
+   },
+   40145: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => fC,
+       d: () => oC
+     });
+     var QC = ZC(39811),
+       wC = ZC(36963),
+       bC = ZC(39818);
+     let nC = (() => {
+       var CC;
+       let zC, ZC, wC = [];
+       return CC = class {
+         static extractMinAndMaxIndexed(CC, zC, ZC, QC, wC, bC) {
+           for (let nC = ZC; nC < ZC + QC; nC++) {
+             const ZC = 3 * zC[nC],
+ ... (4 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L904-L925` → after: `L2328-L2334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2328-L2334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2328-L2334) · [Before (L904-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L904-L925)

```diff
-         return {
-           heartbeats: []
-         }
-       }
-       async overwrite(kk) {
-         var ek;
-         if (await this._canUseIndexedDBPromise) {
-           const ik = await this.read();
-           return Ae(this.app, {
-             lastSentHeartbeatDate: null !== (ek = kk.lastSentHeartbeatDate) && void 0 !== ek ? ek : ik.lastSentHeartbeatDate,
-             heartbeats: kk.heartbeats
-           })
-         }
-       }
-       async add(kk) {
-         var ek;
- ... (6 more removed lines; see GitHub link above)
+         static extractMinAndMax(CC, zC, ZC, QC, wC, bC) {
+           for (let nC = zC, fC = zC * QC; nC < zC + ZC; nC++, fC += QC) {
+             const zC = CC[fC],
+               ZC = CC[fC + 1],
+               QC = CC[fC + 2];
+             wC.minimizeInPlaceFromFloats(zC, ZC, QC), bC.maximizeInPlaceFromFloats(zC, ZC, QC)
+           }
```

#### 60. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L930-L934` → after: `L2381-L2389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2381-L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2381-L2389) · [Before (L930-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L930-L934)

```diff
-     function Fe(kk) {
-       return (0, Sk.r)(JSON.stringify({
-         version: 2,
-         heartbeats: kk
-       })).length
+     function oC(CC, zC, ZC) {
+       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+         bC = arguments.length > 4 ? arguments[4] : void 0;
+       const fC = new wC.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+         oC = new wC.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+       return bC || (bC = 3), nC.extractMinAndMax(CC, zC, ZC, bC, fC, oC), QC && (fC.x -= fC.x * QC.x + QC.y, fC.y -= fC.y * QC.x + QC.y, fC.z -= fC.z * QC.x + QC.y, oC.x += oC.x * QC.x + QC.y, oC.y += oC.y * QC.x + QC.y, oC.z += oC.z * QC.x + QC.y), {
+         minimum: fC,
+         maximum: oC
+       }
```

#### 61. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L939` → after: `L2392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2392) · [Before (L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L939)

```diff
-   40087: (kk, ek, ik) => {
+   40119: (CC, zC, ZC) => {
```

#### 62. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L941-L942` → after: `L2394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2394) · [Before (L941-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L941-L942)

```diff
-       c: () => rk,
-       f: () => fk
+       d: () => FC
```

#### 63. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L944` → after: `L2396-L2401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2396-L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2396-L2401) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L944)

```diff
-     var Dk = ik(40092);
+     var QC, wC = ZC(39959),
+       bC = ZC(40123),
+       nC = ZC(40127),
+       fC = ZC(40145),
+       oC = ZC(40148),
+       qC = ZC(39694);
```

#### 64. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L946-L950` → after: `L2403-L2445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2403-L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2403-L2445) · [Before (L946-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L946-L950)

```diff
-       constructor(kk, ek, ik) {
-         this.name = kk, this.instanceFactory = ek, this.type = ik, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
-       }
-       setInstantiationMode(kk) {
-         return this.instantiationMode = kk, this
+       get materialDefines() {
+         const CC = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
+         return "string" === typeof CC ? null : CC
+       }
+       set materialDefines(CC) {
+         (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = CC
+       }
+       _getDrawWrapper(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         CC = CC ?? this._engine.currentRenderPassId;
+         let ZC = this._drawWrappers[CC];
+         return !ZC && zC && (this._drawWrappers[CC] = ZC = new oC.d(this._mesh.Km().mg())), ZC
+       }
+       _removeDrawWrapper(CC) {
+         let zC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[CC]?.dispose(zC), this._drawWrappers[CC] = void 0
+ ... (27 more added lines; see GitHub link above)
```

#### 65. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L952-L953` → after: `L2447-L2448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2447-L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2447-L2448) · [Before (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L952-L953)

```diff
-       setMultipleInstances(kk) {
-         return this.multipleInstances = kk, this
+       static AddToMesh(CC, zC, ZC, QC, wC, bC, nC) {
+         return new FC(CC, zC, ZC, QC, wC, bC, nC, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
```

#### 66. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L955-L956` → after: `L2450-L2453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2450-L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2450-L2453) · [Before (L955-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L955-L956)

```diff
-       setServiceProps(kk) {
-         return this.serviceProps = kk, this
+       constructor(CC, zC, ZC, QC, wC, bC, nC) {
+         let fC = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
+           oC = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
+         this.materialIndex = CC, this.verticesStart = zC, this.verticesCount = ZC, this.indexStart = QC, this.indexCount = wC, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastCollide … [truncated]
```

#### 67. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L958-L959` → after: `L2455-L2456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2455-L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2455-L2456) · [Before (L958-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L958-L959)

```diff
-       setInstanceCreatedCallback(kk) {
-         return this.onInstanceCreated = kk, this
+       get IsGlobal() {
+         return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
```

#### 68. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L961-L1020` → after: `L2458-L2459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2458-L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2458-L2459) · [Before (L961-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L961-L1020)

```diff
-     }
-     const Sk = "[DEFAULT]";
-     class bk {
-       constructor(kk, ek) {
-         this.name = kk, this.container = ek, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
-       }
-       get(kk) {
-         const ek = this.normalizeInstanceIdentifier(kk);
-         if (!this.instancesDeferred.has(ek)) {
-           const kk = new Dk.d;
-           if (this.instancesDeferred.set(ek, kk), this.isInitialized(ek) || this.shouldAutoInitialize()) try {
-             const ik = this.getOrInitializeService({
-               instanceIdentifier: ek
-             });
-             ik && kk.resolve(ik)
-           } catch (ik) {}
- ... (44 more removed lines; see GitHub link above)
+       WE() {
+         return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.WE() : this._boundingInfo
```

#### 69. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1022-L1024` → after: `L2461-L2462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2461-L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2461-L2462) · [Before (L1022-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L1022-L1024)

```diff
-       clearInstance() {
-         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sk;
-         this.instancesDeferred.delete(kk), this.instancesOptions.delete(kk), this.instances.delete(kk)
+       setBoundingInfo(CC) {
+         return this._boundingInfo = CC, this
```

#### 70. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1026-L1028` → after: `L2464-L2465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2464-L2465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2464-L2465) · [Before (L1026-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L1026-L1028)

```diff
-       async delete() {
-         const kk = Array.from(this.instances.values());
-         await Promise.all([...kk.filter((kk => "INTERNAL" in kk)).map((kk => kk.INTERNAL.delete())), ...kk.filter((kk => "_delete" in kk)).map((kk => kk._delete()))])
+       getMesh() {
+         return this._mesh
```

#### 71. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1030-L1031` → after: `L2467-L2468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2467-L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2467-L2468) · [Before (L1030-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L1030-L1031)

```diff
-       isComponentSet() {
-         return null != this.component
+       getRenderingMesh() {
+         return this._renderingMesh
```

#### 72. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1033-L1035` → after: `L2470-L2471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2470-L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2470-L2471) · [Before (L1033-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L1033-L1035)

```diff
-       isInitialized() {
-         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sk;
-         return this.instances.has(kk)
+       getReplacementMesh() {
+         return this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null
```

#### 73. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1037-L1039` → after: `L2473-L2475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2473-L2475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2473-L2475) · [Before (L1037-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L1037-L1039)

```diff
-       getOptions() {
-         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sk;
-         return this.instancesOptions.get(kk) || {}
+       getEffectiveMesh() {
+         const CC = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
+         return CC || this._renderingMesh
```

#### 74. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1041-L1053` → after: `L2477-L2483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2477-L2483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2477-L2483) · [Before (L1041-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L1041-L1053)

```diff
-       initialize() {
-         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-         const {
-           options: ek = {}
-         } = kk, ik = this.normalizeInstanceIdentifier(kk.instanceIdentifier);
-         if (this.isInitialized(ik)) throw Error(`${this.name}(${ik}) has already been initialized`);
-         if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
-         const Dk = this.getOrInitializeService({
-           instanceIdentifier: ik,
-           options: ek
-         });
-         for (const [fk, Sk] of this.instancesDeferred.entries()) {
-           ik === this.normalizeInstanceIdentifier(fk) && Sk.resolve(Dk)
+       cg() {
+         let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         const zC = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
+         if (!zC) return CC && this._mesh.Km()._hasDefaultMaterial ? this._mesh.Km().defaultMaterial : null;
+         if (this._isMultiMaterial(zC)) {
+           const CC = zC.getSubMaterial(this.materialIndex);
+           return this._currentMaterial !== CC && (this._currentMaterial = CC, this.resetDrawCache()), CC
```

#### 75. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1057-L1169` → after: `L2487-L2488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2487-L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2487-L2488) · [Before (L1057-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L1057-L1169)

```diff
-       Av(kk, ek) {
-         var ik;
-         const Dk = this.normalizeInstanceIdentifier(ek),
-           fk = null !== (ik = this.onInitCallbacks.get(Dk)) && void 0 !== ik ? ik : new Set;
-         fk.add(kk), this.onInitCallbacks.set(Dk, fk);
-         const Sk = this.instances.get(Dk);
-         return Sk && kk(Sk, Dk), () => {
-           fk.delete(kk)
-         }
-       }
-       invokeOnInitCallbacks(kk, ek) {
-         const ik = this.onInitCallbacks.get(ek);
-         if (ik)
-           for (const fk of ik) try {
-             fk(kk, ek)
-           } catch (Dk) {}
- ... (97 more removed lines; see GitHub link above)
+       _isMultiMaterial(CC) {
+         return void 0 !== CC.getSubMaterial
```

#### 76. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1171-L1176` → after: `L2490-L2554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2490-L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2490-L2554) · [Before (L1171-L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L1171-L1176)

```diff
-       set logHandler(kk) {
-         if ("function" !== typeof kk) throw new TypeError("Value assigned to `logHandler` must be a function");
-         this._logHandler = kk
-       }
-       get userLogHandler() {
-         return this._userLogHandler
+       refreshBoundingInfo() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
+         if (CC || (CC = this._renderingMesh.getVerticesData(wC.k.PositionKind)), !CC) return this._boundingInfo = this._mesh.WE(), this;
+         const zC = this._renderingMesh.CQC();
+         let ZC;
+         if (0 === this.indexStart && this.indexCount === zC.length) {
+           const CC = this._renderingMesh.WE();
+           ZC = {
+             minimum: CC.minimum.clone(),
+             maximum: CC.maximum.clone()
+           }
+         } else ZC = (0, fC.c)(CC, zC, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
+         return this._boundingInfo ? this._boundingInfo.reConstruct(ZC.minimum, ZC.maximum) : this._boundingInfo = new nC.d(ZC.minimum, ZC.maximum), this
+       }
+       _checkCollision(CC) {
+ ... (49 more added lines; see GitHub link above)
```

#### 77. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1178-L1179` → after: `L2556-L2564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2556-L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2556-L2564) · [Before (L1178-L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L1178-L1179)

```diff
-       set userLogHandler(kk) {
-         this._userLogHandler = kk
+       _intersectLines(CC, zC, ZC, QC, wC) {
+         let nC = null;
+         for (let fC = this.indexStart; fC < this.indexStart + this.indexCount; fC += 2) {
+           const oC = zC[ZC[fC]],
+             qC = zC[ZC[fC + 1]],
+             FC = CC.intersectionSegment(oC, qC, QC);
+           if (!(FC < 0) && ((wC || !nC || FC < nC.distance) && (nC = new bC.d(null, null, FC), nC.faceId = fC / 2, wC))) break
+         }
+         return nC
```

#### 78. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1181-L1183` → after: `L2566-L2574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2566-L2574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2566-L2574) · [Before (L1181-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L1181-L1183)

```diff
-       debug() {
-         for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
-         this._userLogHandler && this._userLogHandler(this, fk.DEBUG, ...ek), this._logHandler(this, fk.DEBUG, ...ek)
+       _intersectUnIndexedLines(CC, zC, ZC, QC, wC) {
+         let nC = null;
+         for (let fC = this.verticesStart; fC < this.verticesStart + this.verticesCount; fC += 2) {
+           const ZC = zC[fC],
+             oC = zC[fC + 1],
+             qC = CC.intersectionSegment(ZC, oC, QC);
+           if (!(qC < 0) && ((wC || !nC || qC < nC.distance) && (nC = new bC.d(null, null, qC), nC.faceId = fC / 2, wC))) break
+         }
+         return nC
```

#### 79. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1185-L1187` → after: `L2576-L2599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2576-L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2576-L2599) · [Before (L1185-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L1185-L1187)

```diff
-       log() {
-         for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
-         this._userLogHandler && this._userLogHandler(this, fk.VERBOSE, ...ek), this._logHandler(this, fk.VERBOSE, ...ek)
+       _intersectTriangles(CC, zC, ZC, QC, wC, bC, nC) {
+         let fC = null,
+           oC = -1;
+         for (let qC = this.indexStart; qC < this.indexStart + this.indexCount - (3 - QC); qC += QC) {
+           oC++;
+           const QC = ZC[qC],
+             FC = ZC[qC + 1],
+             WC = ZC[qC + 2];
+           if (wC && 4294967295 === WC) {
+             qC += 2;
+             continue
+           }
+           const NC = zC[QC],
+             MC = zC[FC],
+             gC = zC[WC];
+           if (!NC || !MC || !gC) continue;
+ ... (8 more added lines; see GitHub link above)
```

#### 80. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1189-L1191` → after: `L2601-L2614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2601-L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2601-L2614) · [Before (L1189-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L1189-L1191)

```diff
-       info() {
-         for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
-         this._userLogHandler && this._userLogHandler(this, fk.INFO, ...ek), this._logHandler(this, fk.INFO, ...ek)
+       _intersectUnIndexedTriangles(CC, zC, ZC, QC, wC) {
+         let bC = null;
+         for (let nC = this.verticesStart; nC < this.verticesStart + this.verticesCount; nC += 3) {
+           const ZC = zC[nC],
+             fC = zC[nC + 1],
+             oC = zC[nC + 2];
+           if (wC && !wC(ZC, fC, oC, CC, -1, -1, -1)) continue;
+           const qC = CC.intersectsTriangle(ZC, fC, oC);
+           if (qC) {
+             if (qC.distance < 0) continue;
+             if ((QC || !bC || qC.distance < bC.distance) && (bC = qC, bC.faceId = nC / 3, QC)) break
+           }
+         }
+         return bC
```

#### 81. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1193-L1195` → after: `L2616-L2617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2616-L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2616-L2617) · [Before (L1193-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L1193-L1195)

```diff
-       warn() {
-         for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
-         this._userLogHandler && this._userLogHandler(this, fk.WARN, ...ek), this._logHandler(this, fk.WARN, ...ek)
+       _rebuild() {
+         this._linesIndexBuffer && (this._linesIndexBuffer = null)
```

#### 82. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1197-L1199` → after: `L2619-L2626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2619-L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2619-L2626) · [Before (L1197-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L1197-L1199)

```diff
-       error() {
-         for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
-         this._userLogHandler && this._userLogHandler(this, fk.ERROR, ...ek), this._logHandler(this, fk.ERROR, ...ek)
+       clone(CC, zC) {
+         const ZC = new FC(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, CC, zC, !1);
+         if (!this.IsGlobal) {
+           const CC = this.WE();
+           if (!CC) return ZC;
+           ZC._boundingInfo = new nC.d(CC.minimum, CC.maximum)
+         }
+         return ZC
```

#### 83. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1201-L1230` → after: `L2628-L2644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2628-L2644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2628-L2644) · [Before (L1201-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L1201-L1230)

```diff
-     }
- 
-     function Mk(kk) {
-       Dk.forEach((ek => {
-         ek.setLogLevel(kk)
-       }))
-     }
- 
-     function Kk(kk, ek) {
-       for (const ik of Dk) {
-         let Dk = null;
-         ek && ek.level && (Dk = Sk[ek.level]), ik.userLogHandler = null === kk ? null : function(ek, ik) {
-           for (var Sk = arguments.length, bk = new Array(Sk > 2 ? Sk - 2 : 0), rk = 2; rk < Sk; rk++) bk[rk - 2] = arguments[rk];
-           const Pk = bk.map((kk => {
-             if (null == kk) return null;
-             if ("string" === typeof kk) return kk;
- ... (14 more removed lines; see GitHub link above)
+       dispose() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         this._linesIndexBuffer && (this._mesh.Km().mg()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
+         const zC = this._mesh.Zx.indexOf(this);
+         this._mesh.Zx.splice(zC, 1), this.resetDrawCache(void 0, CC)
+       }
+       getClassName() {
+         return "SubMesh"
+       }
+       static CreateFromIndices(CC, zC, ZC, QC, wC) {
+         let bC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
+           nC = Number.MAX_VALUE,
+           fC = -Number.MAX_VALUE;
+         const oC = (wC || QC).CQC();
+         for (let qC = zC; qC < zC + ZC; qC++) {
+           const CC = oC[qC];
+ ... (1 more added lines; see GitHub link above)
```

#### 84. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1233` → after: `L2648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR2648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/262.js#L2648) · [Before (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/262.js#L1233)

```diff
-     }
+     }(QC = FC.prototype).projectToRef ?? (QC.projectToRef = (0, qC.f)("SubMesh", "projectToRef"))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/263.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/263.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2)

#### 1. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L5-L18` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L4-L6) · [Before (L5-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L5-L18)

```diff
-   40106: (kk, ek, ik) => {
-     ik.r(ek), ik.d(ek, {
-       getAnalytics: () => Oe,
-       getGoogleAnalyticsClientId: () => Re,
-       initializeAnalytics: () => ge,
-       isSupported: () => Ge,
-       logEvent: () => Di,
-       setAnalyticsCollectionEnabled: () => ei,
-       setConsent: () => fi,
-       setCurrentScreen: () => Ne,
-       setDefaultEventParameters: () => ii,
-       setUserId: () => Je,
-       setUserProperties: () => ki,
-       settings: () => oe
+   41402: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => QC
```

#### 2. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L20-L35` → after: `L8-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L8-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L8-L26) · [Before (L20-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L20-L35)

```diff
-     var Dk = ik(40078),
-       fk = ik(40099),
-       Sk = ik(40092),
-       bk = ik(40087);
-     let rk, Pk;
-     const mk = new WeakMap,
-       Mk = new WeakMap,
-       Kk = new WeakMap,
-       xk = new WeakMap,
-       nk = new WeakMap;
-     let Uk = {
-       get(kk, ek, ik) {
-         if (kk instanceof IDBTransaction) {
-           if ("done" === ek) return Mk.get(kk);
-           if ("objectStoreNames" === ek) return kk.objectStoreNames || Kk.get(kk);
-           if ("store" === ek) return ik.objectStoreNames[1] ? void 0 : ik.objectStore(ik.objectStoreNames[0])
+     class QC {}
+     QC.AUTOSAMPLERSUFFIX = "Sampler", QC.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", QC.ALPHA_DISABLE = 0, QC.ALPHA_ADD = 1, QC.ALPHA_COMBINE = 2, QC.ALPHA_SUBTRACT = 3, QC.ALPHA_MULTIPLY = 4, QC.ALPHA_MAXIMIZED = 5, QC.ALPHA_ONEONE = 6, QC.ALPHA_PREMULTIPLIED = 7, QC.ALPH … [truncated]
+   },
+   41384: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => oC
+     });
+     var QC = ZC(39811),
+       wC = ZC(39818),
+       bC = ZC(36963),
+       nC = ZC(40084),
+       fC = ZC(40049);
+     let oC = (() => {
+       var CC;
+       let zC, ZC, oC, qC, FC = nC.c,
+         WC = [];
+ ... (3 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L37-L53` → after: `L28-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L28-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L28-L185) · [Before (L37-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L37-L53)

```diff
-         return lk(kk[ek])
-       },
-       set: (kk, ek, ik) => (kk[ek] = ik, !0),
-       has: (kk, ek) => kk instanceof IDBTransaction && ("done" === ek || "store" === ek) || ek in kk
-     };
- 
-     function Hk(kk) {
-       return kk !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (Pk || (Pk = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(kk) ? function() {
-         for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
-         return kk.apply(pk(this), ik), lk(mk.get(this))
-       } : function() {
-         for (var ek = arguments.length, ik = new Array(ek), Dk = 0; Dk < ek; Dk++) ik[Dk] = arguments[Dk];
-         return lk(kk.apply(pk(this), ik))
-       } : function(ek) {
-         for (var ik = arguments.length, Dk = new Array(ik > 1 ? ik - 1 : 0), fk = 1; fk < ik; fk++) Dk[fk - 1] = arguments[fk];
-         const Sk = kk.call(pk(this), ek, ...Dk);
- ... (1 more removed lines; see GitHub link above)
+         _setPosition(CC) {
+           this._position = CC
+         }
+         get position() {
+           return this._position
+         }
+         set position(CC) {
+           this._setPosition(CC)
+         }
+         _setDirection(CC) {
+           this._direction = CC
+         }
+         get direction() {
+           return this._direction
+         }
+         set direction(CC) {
+ ... (142 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L55-L213` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L187-L188) · [Before (L55-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L55-L213)

```diff
-     }
- 
-     function wk(kk) {
-       return "function" === typeof kk ? Hk(kk) : (kk instanceof IDBTransaction && function(kk) {
-         if (Mk.has(kk)) return;
-         const ek = new Promise(((ek, ik) => {
-           const Dk = () => {
-               kk.removeEventListener("complete", fk), kk.removeEventListener("error", Sk), kk.removeEventListener("abort", Sk)
-             },
-             fk = () => {
-               ek(), Dk()
-             },
-             Sk = () => {
-               ik(kk.error || new DOMException("AbortError", "AbortError")), Dk()
-             };
-           kk.addEventListener("complete", fk), kk.addEventListener("error", Sk), kk.addEventListener("abort", Sk)
- ... (143 more removed lines; see GitHub link above)
+       update(CC) {
+         this.updateMipLevel(CC, 0)
```

#### 5. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L215-L385` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L190-L191) · [Before (L215-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L215-L385)

```diff
-     }
- 
-     function Bk(kk) {
-       return `${kk.appName}!${kk.appId}`
-     }
-     const ck = new Map;
- 
-     function Tk(kk, ek) {
-       const ik = Bk(kk);
-       Zk(ik, ek),
-         function(kk, ek) {
-           const ik = gk();
-           ik && ik.postMessage({
-             key: kk,
-             fid: ek
-           });
- ... (155 more removed lines; see GitHub link above)
+       updateMipLevel(CC, zC) {
+         this._getEngine().updateRawTexture(this._texture, CC, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, zC), this._waitingForData = !1
```

#### 6. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L387-L396` → after: `L193-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L193-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L193-L196) · [Before (L387-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L387-L396)

```diff
-     }
-     async function fe(kk) {
-       let ek = await Se(kk.appConfig);
-       for (; 1 === ek.registrationStatus;) await Wk(100), ek = await Se(kk.appConfig);
-       if (0 === ek.registrationStatus) {
-         const {
-           installationEntry: ek,
-           registrationPromise: ik
-         } = await De(kk);
-         return ik || ek
+       clone() {
+         if (!this._texture) return super.clone();
+         const CC = new wC(null, this.getSize().width, this.getSize().height, this.format, this.Km(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
+         return CC._texture = this._texture, this._texture.incrementReferences(), CC
```

#### 7. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L398-L432` → after: `L198-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L198-L199) · [Before (L398-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L398-L432)

```diff
-       return ek
-     }
- 
-     function Se(kk) {
-       return ie(kk, (kk => {
-         if (!kk) throw qk.create("installation-not-found");
-         return be(kk)
-       }))
-     }
- 
-     function be(kk) {
-       return 1 === (ek = kk).registrationStatus && ek.registrationTime + sk < Date.now() ? {
-         fid: kk.fid,
-         registrationStatus: 0
-       } : kk;
-       var ek
- ... (19 more removed lines; see GitHub link above)
+       isReady() {
+         return super.isReady() && !this._waitingForData
```

#### 8. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L434-L447` → after: `L201-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L201-L202) · [Before (L434-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L434-L447)

```diff
-       const rk = {
-           installation: {
-             sdkVersion: dk,
-             appId: ik.appId
-           }
-         },
-         Pk = {
-           method: "POST",
-           headers: Sk,
-           body: JSON.stringify(rk)
-         },
-         mk = await ak((() => fetch(fk, Pk)));
-       if (mk.ok) {
-         return Qk(await mk.json())
+       static CreateLuminanceTexture(CC, zC, ZC, QC) {
+         return new wC(CC, zC, ZC, 1, QC, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
```

#### 9. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L449-L599` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L204-L205) · [Before (L449-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L449-L599)

```diff
-       throw await vk("Generate Auth Token", mk)
-     }
-     async function Pe(kk) {
-       let ek, ik = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       const Dk = await ie(kk.appConfig, (Dk => {
-         if (!Me(Dk)) throw qk.create("not-registered");
-         const fk = Dk.authToken;
-         if (!ik && function(kk) {
-             return 2 === kk.requestStatus && ! function(kk) {
-               const ek = Date.now();
-               return ek < kk.creationTime || kk.creationTime + kk.expiresIn < ek + Fk
-             }(kk)
-           }(fk)) return Dk;
-         if (1 === fk.requestStatus) return ek = async function(kk, ek) {
-           let ik = await me(kk.appConfig);
-           for (; 1 === ik.authToken.requestStatus;) await Wk(100), ik = await me(kk.appConfig);
- ... (135 more removed lines; see GitHub link above)
+       static CreateLuminanceAlphaTexture(CC, zC, ZC, QC) {
+         return new wC(CC, zC, ZC, 2, QC, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
```

#### 10. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L601-L675` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L207-L208) · [Before (L601-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L601-L675)

```diff
-       return kk
-     }
- 
-     function Ce(kk) {
-       return Promise.all(kk.map((kk => kk.catch((kk => kk)))))
-     }
- 
-     function Ae(kk, ek) {
-       const ik = function(kk, ek) {
-           let ik;
-           return window.trustedTypes && (ik = window.trustedTypes.createPolicy(kk, ek)), ik
-         }("firebase-js-sdk-policy", {
-           createScriptURL: Le
-         }),
-         Dk = document.createElement("script"),
-         fk = `${le}?l=${kk}&id=${ek}`;
- ... (59 more removed lines; see GitHub link above)
+       static CreateAlphaTexture(CC, zC, ZC, QC) {
+         return new wC(CC, zC, ZC, 0, QC, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
```

#### 11. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L677-L682` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L210-L211) · [Before (L677-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L677-L682)

```diff
-     }
-     const se = new class {
-       constructor() {
-         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
-           ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
-         this.throttleMetadata = kk, this.intervalMillis = ek
+       static CreateRGBTexture(CC, zC, ZC, QC) {
+         return new wC(CC, zC, ZC, 4, QC, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
```

#### 12. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L684-L685` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L213-L214) · [Before (L684-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L684-L685)

```diff
-       getThrottleMetadata(kk) {
-         return this.throttleMetadata[kk]
+       static CreateRGBATexture(CC, zC, ZC, QC) {
+         return new wC(CC, zC, ZC, 5, QC, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
```

#### 13. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L687-L688` → after: `L216-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L216-L217) · [Before (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L687-L688)

```diff
-       setThrottleMetadata(kk, ek) {
-         this.throttleMetadata[kk] = ek
+       static CreateRGBAStorageTexture(CC, zC, ZC, QC) {
+         return new wC(CC, zC, ZC, 5, QC, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
```

#### 14. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L690-L691` → after: `L219-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L219-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L219-L223) · [Before (L690-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L690-L691)

```diff
-       deleteThrottleMetadata(kk) {
-         delete this.throttleMetadata[kk]
+       static CreateRTexture(CC, zC, ZC, bC) {
+         let nC = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
+           fC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           oC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : QC.h.TRILINEAR_SAMPLINGMODE;
+         return new wC(CC, zC, ZC, 6, bC, nC, fC, oC, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
```

#### 15. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L693-L715` → after: `L225-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L225-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L225-L229) · [Before (L693-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L693-L715)

```diff
-     };
- 
-     function de(kk) {
-       return new Headers({
-         Accept: "application/json",
-         "x-goog-api-key": kk
-       })
-     }
-     async function Ve(kk) {
-       let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : se,
-         ik = arguments.length > 2 ? arguments[2] : void 0;
-       const {
-         appId: Dk,
-         apiKey: fk,
-         measurementId: Sk
-       } = kk.options;
- ... (7 more removed lines; see GitHub link above)
+       static CreateRStorageTexture(CC, zC, ZC, bC) {
+         let nC = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
+           fC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           oC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : QC.h.TRILINEAR_SAMPLINGMODE;
+         return new wC(CC, zC, ZC, 6, bC, nC, fC, oC, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
```

#### 16. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L730-L758` → after: `L232-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L232-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L232-L261) · [Before (L730-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L730-L758)

```diff
-     async function Fe(kk, ek, ik) {
-       let {
-         throttleEndTimeMillis: Dk,
-         backoffCount: fk
-       } = ek, bk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : se;
-       var rk;
-       const {
-         appId: Pk,
-         measurementId: mk
-       } = kk;
-       try {
-         await
-         function(kk, ek) {
-           return new Promise(((ik, Dk) => {
-             const fk = Math.max(ek - Date.now(), 0),
-               Sk = setTimeout(ik, fk);
- ... (13 more removed lines; see GitHub link above)
+   },
+   41438: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => QC.b
+     });
+     var QC = ZC(40265);
+     (0, QC.e)()
+   },
+   41392: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => QC.c
+     });
+     var QC = ZC(40283);
+     (0, QC.e)()
+   },
+   40283: (CC, zC, ZC) => {
+ ... (14 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L760-L793` → after: `L263-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L263-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L263-L280) · [Before (L760-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L760-L793)

```diff
-       try {
-         const ek = await async function(kk) {
-           var ek;
-           const {
-             appId: ik,
-             apiKey: Dk
-           } = kk, fk = {
-             method: "GET",
-             headers: de(Dk)
-           }, Sk = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", ik), bk = await fetch(Sk, fk);
-           if (200 !== bk.status && 304 !== bk.status) {
-             let kk = "";
-             try {
-               const ik = await bk.json();
-               (null === (ek = ik.error) || void 0 === ek ? void 0 : ek.message) && (kk = ik.error.message)
-             } catch (rk) {}
- ... (18 more removed lines; see GitHub link above)
+       constructor(CC) {
+         let zC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+           QC = arguments.length > 5 ? arguments[5] : void 0,
+           wC = arguments.length > 6 ? arguments[6] : void 0,
+           fC = arguments.length > 7 ? arguments[7] : void 0;
+         super(CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, zC, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = QC, this.useVertexAlpha = wC, this.color = new  … [truncated]
+         const oC = {
+           attributes: [nC.k.PositionKind],
+           uniforms: ["world", "viewProjection"],
+           needAlphaBlending: !0,
+           defines: [],
+           useClipPlane: null,
+           shaderLanguage: 0
+         };
+         if (this.useVertexAlpha ? oC.defines.push("#define VERTEXALPHA") : oC.needAlphaBlending = !1, this.useVertexColor ? (oC.defines.push("#define VERTEXCOLOR"), oC.attributes.push(nC.k.ColorKind)) : (oC.uniforms.push("color"), this._color4 = new bC.g), fC) this.material = fC;
+         else {
+ ... (2 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L795` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L282-L283) · [Before (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L795)

```diff
-           throw Mk
+           const CC = new FC.r("colorShader", this.Km(), "color", oC, !1);
+           CC.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(CC)
```

#### 19. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L804-L807` → after: `L286-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L286-L287) · [Before (L804-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L804-L807)

```diff
-     }
-     class ue {
-       constructor() {
-         this.listeners = []
+       getClassName() {
+         return "LinesMesh"
```

#### 20. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L809-L810` → after: `L289-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L289-L290) · [Before (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L809-L810)

```diff
-       addEventListener(kk) {
-         this.listeners.push(kk)
+       get material() {
+         return this._internalAbstractMeshDataInfo._material
```

#### 21. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L812-L813` → after: `L292-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L292-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L292-L296) · [Before (L812-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L812-L813)

```diff
-       abort() {
-         this.listeners.forEach((kk => kk()))
+       set material(CC) {
+         const zC = this.material;
+         if (zC === CC) return;
+         const ZC = zC && this._ownsMaterial;
+         this._ownsMaterial = !1, this._setInternalMaterial(CC), ZC && zC?.dispose()
```

#### 22. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L815-L855` → after: `L298-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L298-L299) · [Before (L815-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L815-L855)

```diff
-     }
-     let qe, Ie;
- 
-     function ze(kk) {
-       Ie = kk
-     }
- 
-     function Qe(kk) {
-       qe = kk
-     }
-     async function ve(kk, ek, ik, Dk, fk, bk, rk) {
-       var Pk;
-       const mk = Ve(kk);
-       mk.then((ek => {
-         ik[ek.measurementId] = ek.appId, kk.options.measurementId && ek.measurementId !== kk.options.measurementId && pe.warn(`The measurement ID in the local Firebase config (${kk.options.measurementId}) does not match the measurement ID fetched from the server (${ek.measurement … [truncated]
-       })).catch((kk => pe.error(kk))), ek.push(mk);
- ... (25 more removed lines; see GitHub link above)
+       _setInternalMaterial(CC) {
+         this._setMaterial(CC), this.material && (this.material.fillMode = qC.d.LineListDrawMode, this.material.disableLighting = !0)
```

#### 23. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L857-L858` → after: `L301-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L301-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L301-L302) · [Before (L857-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L857-L858)

```diff
-       _delete() {
-         return delete he[this.app.options.appId], Promise.resolve()
+       get checkCollisions() {
+         return !1
```

#### 24. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L860-L881` → after: `L304-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L304-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L304-L314) · [Before (L860-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L860-L881)

```diff
-     }
-     let he = {},
-       ae = [];
-     const We = {};
-     let te, Xe, Be = "dataLayer",
-       ce = "gtag",
-       Te = !1;
- 
-     function oe(kk) {
-       if (Te) throw Ye.create("already-initialized");
-       kk.dataLayerName && (Be = kk.dataLayerName), kk.gtagName && (ce = kk.gtagName)
-     }
- 
-     function Ze(kk, ek, ik) {
-       ! function() {
-         const kk = [];
- ... (6 more removed lines; see GitHub link above)
+       set checkCollisions(CC) {}
+       _bind(CC, zC) {
+         if (!this._geometry) return this;
+         const ZC = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
+         if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(zC, ZC) : this._geometry._bind(zC, ZC, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMate … [truncated]
+           const {
+             r: CC,
+             g: zC,
+             b: ZC
+           } = this.color;
+           this._color4.set(CC, zC, ZC, this.alpha), this.material.setColor4("color", this._color4)
```

#### 25. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L883-L888` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L316) · [Before (L883-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L883-L888)

```diff
-       }();
-       const Dk = kk.options.appId;
-       if (!Dk) throw Ye.create("no-app-id");
-       if (!kk.options.apiKey) {
-         if (!kk.options.measurementId) throw Ye.create("no-api-key");
-         pe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${kk.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
+         return this
```

#### 26. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L890-L911` → after: `L318-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L318-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L318-L321) · [Before (L890-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L890-L911)

```diff
-       if (null != he[Dk]) throw Ye.create("already-exists", {
-         id: Dk
-       });
-       if (!Te) {
-         ! function(kk) {
-           let ek = [];
-           Array.isArray(window[kk]) ? ek = window[kk] : window[kk] = ek
-         }(Be);
-         const {
-           wrappedGtag: kk,
-           gtagCore: ek
-         } = function(kk, ek, ik, Dk, fk) {
-           let Sk = function() {
-             for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
-             window[Dk].push(arguments)
-           };
- ... (6 more removed lines; see GitHub link above)
+       _draw(CC, zC, ZC) {
+         if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
+         const QC = this.Km().mg();
+         return this._unIndexed ? QC.drawArraysType(qC.d.LineListDrawMode, CC.verticesStart, CC.verticesCount, ZC) : QC.drawElementsType(qC.d.LineListDrawMode, CC.indexStart, CC.indexCount, ZC), this
```

#### 27. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L913-L930` → after: `L323-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L323-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L323-L325) · [Before (L913-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L913-L930)

```diff
-       he[Dk] = ve(kk, ae, We, ek, te, Be, ik);
-       return new Ee(kk)
-     }
- 
-     function Oe() {
-       let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Dk.H)();
-       kk = (0, Sk.Q)(kk);
-       const ek = (0, Dk.z)(kk, we);
-       return ek.isInitialized() ? ek.getImmediate() : ge(kk)
-     }
- 
-     function ge(kk) {
-       let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const ik = (0, Dk.z)(kk, we);
-       if (ik.isInitialized()) {
-         const kk = ik.getImmediate();
- ... (2 more removed lines; see GitHub link above)
+       dispose(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || zC) && this.material?.dispose(!1, !1, !0), super.dispose(CC)
```

#### 28. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L932-L943` → after: `L327-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L327-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L327-L334) · [Before (L932-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L932-L943)

```diff
-       return ik.initialize({
-         options: ek
-       })
-     }
-     async function Ge() {
-       if ((0, Sk.W)()) return !1;
-       if (!(0, Sk.n)()) return !1;
-       if (!(0, Sk.cb)()) return !1;
-       try {
-         return await (0, Sk.rb)()
-       } catch (kk) {
-         return !1
+       clone(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           ZC = arguments.length > 2 ? arguments[2] : void 0;
+         if (zC && void 0 === zC._addToSceneRootNodes) {
+           const ZC = zC;
+           return ZC.source = this, new NC(CC, this.Km(), ZC.parent, ZC.source, ZC.doNotCloneChildren)
+         }
+         return new NC(CC, this.Km(), zC, this, ZC)
```

#### 29. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L945-L986` → after: `L336-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L336-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L336-L340) · [Before (L945-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L945-L986)

```diff
-     }
- 
-     function Ne(kk, ek, ik) {
-       kk = (0, Sk.Q)(kk), async function(kk, ek, ik, Dk) {
-         if (Dk && Dk.global) return kk("set", {
-           screen_name: ik
-         }), Promise.resolve();
-         kk("config", await ek, {
-           update: !0,
-           screen_name: ik
-         })
-       }(Xe, he[kk.app.options.appId], ek, ik).catch((kk => pe.error(kk)))
-     }
-     async function Re(kk) {
-       return kk = (0, Sk.Q)(kk), async function(kk, ek) {
-         const ik = await ek;
- ... (26 more removed lines; see GitHub link above)
+       createInstance(CC) {
+         const zC = new MC(CC, this);
+         if (this.ZE) {
+           zC.ZE = {};
+           for (const CC in this.ZE) zC.ZE[CC] = this.ZE[CC]
```

#### 30. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L988-L1003` → after: `L342-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L342-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L342-L350) · [Before (L988-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L988-L1003)

```diff
-         kk("config", await ek, {
-           update: !0,
-           user_properties: ik
-         })
-       }(Xe, he[kk.app.options.appId], ek, ik).catch((kk => pe.error(kk)))
-     }
- 
-     function ei(kk, ek) {
-       kk = (0, Sk.Q)(kk), async function(kk, ek) {
-         const ik = await kk;
-         window[`ga-disable-${ik}`] = !ek
-       }(he[kk.app.options.appId], ek).catch((kk => pe.error(kk)))
-     }
- 
-     function ii(kk) {
-       Xe ? Xe("set", kk) : Qe(kk)
+         return zC
+       }
+       serialize(CC) {
+         super.serialize(CC), CC.color = this.color.VZC(), CC.alpha = this.alpha
+       }
+       static Parse(CC, zC) {
+         const ZC = new NC(CC.name, zC);
+         return ZC.color = bC.e.FromArray(CC.color), ZC.alpha = CC.alpha, ZC
+       }
```

#### 31. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1005-L1015` → after: `L352-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L352-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L352-L359) · [Before (L1005-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L1005-L1015)

```diff
- 
-     function Di(kk, ek, ik, Dk) {
-       kk = (0, Sk.Q)(kk), async function(kk, ek, ik, Dk, fk) {
-         if (fk && fk.global) kk("event", ik, Dk);
-         else {
-           const fk = await ek;
-           kk("event", ik, Object.assign(Object.assign({}, Dk), {
-             send_to: fk
-           }))
-         }
-       }(Xe, he[kk.app.options.appId], ek, ik, Dk).catch((kk => pe.error(kk)))
+     NC.ForceGLSL = !1;
+     class MC extends oC.c {
+       constructor(CC, zC) {
+         super(CC, zC), this.intersectionThreshold = zC.intersectionThreshold
+       }
+       getClassName() {
+         return "InstancedLinesMesh"
+       }
```

#### 32. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L1018-L1039` → after: `L363-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L363-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/263.js#L363-L365) · [Before (L1018-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/263.js#L1018-L1039)

```diff
-     function fi(kk) {
-       Xe ? Xe("consent", "update", kk) : ze(kk)
-     }
-     const Si = "@firebase/analytics",
-       bi = "0.10.0";
-     (0, Dk.B)(new bk.f(we, ((kk, ek) => {
-       let {
-         options: ik
-       } = ek;
-       return Ze(kk.getProvider("app").getImmediate(), kk.getProvider("installations-internal").getImmediate(), ik)
-     }), "PUBLIC")), (0, Dk.B)(new bk.f("analytics-internal", (function(kk) {
-       try {
-         const ek = kk.getProvider(we).getImmediate();
-         return {
-           logEvent: (kk, ik, Dk) => Di(ek, kk, ik, Dk)
-         }
- ... (6 more removed lines; see GitHub link above)
+     function SC() {
+       gC || (gC = !0, fC.b._LinesMeshParser = (CC, zC) => NC.Parse(CC, zC))
+     }(QC = NC.prototype).enableEdgesRendering ?? (QC.enableEdgesRendering = (0, WC.f)("LinesMesh", "enableEdgesRendering")), (wC = MC.prototype).enableEdgesRendering ?? (wC.enableEdgesRendering = (0, WC.f)("InstancedLinesMesh", "enableEdgesRendering"))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/264.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/264.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6)

#### 1. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L5-L3926` → after: `L4-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/264.js#L4-L239) · [Before (L5-L3926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/264.js#L5-L3926)

```diff
-     40111: (kk, ek, ik) => {
-         ik.r(ek), ik.d(ek, {
-           ActionCodeOperation: () => xk,
-           ActionCodeURL: () => Re,
-           AuthCredential: () => We,
-           AuthErrorCodes: () => lk,
-           EmailAuthCredential: () => Ze,
-           EmailAuthProvider: () => ki,
-           FacebookAuthProvider: () => fi,
-           FactorId: () => Pk,
-           GithubAuthProvider: () => bi,
-           GoogleAuthProvider: () => Si,
-           OAuthCredential: () => ge,
-           OAuthProvider: () => Di,
-           OperationType: () => Kk,
-           PhoneAuthCredential: () => Ne,
- ... (3906 more removed lines; see GitHub link above)
+   40297: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => IC,
+       f: () => xC,
+       i: () => RC,
+       k: () => AC,
+       o: () => GC,
+       r: () => PC
+     });
+     var QC = ZC(39842),
+       wC = ZC(39910),
+       bC = ZC(36963),
+       nC = ZC(39959),
+       fC = ZC(40303),
+       oC = ZC(40175),
+       qC = ZC(39867),
+ ... (220 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L3928-L3952` → after: `L241-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L241-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/264.js#L241-L354) · [Before (L3928-L3952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/264.js#L3928-L3952)

```diff
-           of = new Map([
-             ["identitytoolkit.googleapis.com", "p"],
-             ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
-             ["test-identitytoolkit.sandbox.googleapis.com", "t"]
-           ]);
- 
-         function Zf(kk) {
-           const ek = kk.config;
-           sk(ek.authDomain, kk, "auth-domain-config-required");
-           const ik = ek.emulator ? zk(ek, "emulator/auth/iframe") : `https://${kk.config.authDomain}/__/auth/iframe`,
-             Sk = {
-               apiKey: ek.apiKey,
-               appName: kk.name,
-               v: fk.f
-             },
-             bk = of.get(kk.config.apiHost);
- ... (9 more removed lines; see GitHub link above)
+           shaderLanguage: this._options.shaderLanguage,
+           extraInitializationsAsync: this._options.extraInitializationsAsync
+         }, fC), QC ? ZC.setEffect(hC, eC, this._materialContext) : IC && IC.setEffect(hC, eC), this._onEffectCreatedObservable && (pC.effect = hC, pC.subMesh = ZC ?? CC?.Zx[0] ?? null, this._onEffectCreatedObservable.notifyObservers(pC))), IC._wasPreviouslyUsingInstances = !!zC,  … [truncated]
+       }
+       bindOnlyWorldMatrix(CC, zC) {
+         const ZC = zC ?? this.getEffect();
+         if (!ZC) return;
+         const QC = this._options.uniforms; - 1 !== QC.indexOf("world") && ZC.setMatrix("world", CC);
+         const wC = this.Km(); - 1 !== QC.indexOf("worldView") && (CC.multiplyToRef(wC.getViewMatrix(), this._cachedWorldViewMatrix), ZC.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== QC.indexOf("worldViewProjection") && (CC.multiplyToRef(wC.getTransformMatrix(), thi … [truncated]
+       }
+       bindForSubMesh(CC, zC, ZC) {
+         this.bind(CC, zC, ZC._drawWrapperOverride?.effect, ZC)
+       }
+       bind(CC, zC, ZC, QC) {
+         const wC = QC && this._storeEffectOnSubMeshes,
+           bC = ZC ?? (wC ? QC.effect : this.getEffect());
+ ... (98 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L3954-L4026` → after: `L356-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L356-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/264.js#L356-L573) · [Before (L3954-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/264.js#L3954-L4026)

```diff
-         class gf {
-           constructor(kk) {
-             this.window = kk, this.associatedEvent = null
-           }
-           close() {
-             if (this.window) try {
-               this.window.close()
-             } catch (kk) {}
-           }
-         }
- 
-         function Gf(kk, ek, ik) {
-           let fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
-             Sk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
-           const bk = Math.max((window.screen.availHeight - Sk) / 2, 0).toString(),
-             rk = Math.max((window.screen.availWidth - fk) / 2, 0).toString();
- ... (57 more removed lines; see GitHub link above)
+         const ZC = Object.keys(this._options);
+         for (const QC of ZC) {
+           const CC = this._options[QC];
+           Array.isArray(CC) && (this._options[QC] = CC.slice(0))
+         }
+         this.stencil.copyTo(zC.stencil);
+         for (const QC in this._textures) zC.setTexture(QC, this._textures[QC]);
+         for (const QC in this._internalTextures) zC.setInternalTexture(QC, this._internalTextures[QC]);
+         for (const QC in this._textureArrays) zC.setTextureArray(QC, this._textureArrays[QC]);
+         for (const QC in this._externalTextures) zC.setExternalTexture(QC, this._externalTextures[QC]);
+         for (const QC in this._ints) zC.setInt(QC, this._ints[QC]);
+         for (const QC in this._uints) zC.setUInt(QC, this._uints[QC]);
+         for (const QC in this._floats) zC.setFloat(QC, this._floats[QC]);
+         for (const QC in this._floatsArrays) zC.setFloats(QC, this._floatsArrays[QC]);
+         for (const QC in this._colors3) zC.setColor3(QC, this._colors3[QC]);
+         for (const QC in this._colors3Arrays) zC._colors3Arrays[QC] = this._colors3Arrays[QC];
+ ... (202 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/265.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/265.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89)

#### 1. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L4-L141` → after: `L5-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L5-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/265.js#L5-L24) · [Before (L4-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/265.js#L4-L141)

```diff
-   40157: (kk, ek, ik) => {
-     ik.d(ek, {
-       $: () => ak,
-       A: () => xk,
-       Ab: () => lk,
-       Ad: () => le,
-       Ae: () => Ei,
-       B: () => Se,
-       Bd: () => Ze,
-       Be: () => Ji,
-       C: () => Vk,
-       Ce: () => Qi,
-       Db: () => ye,
-       Dc: () => Me,
-       Df: () => wi,
-       E: () => uk,
- ... (122 more removed lines; see GitHub link above)
+   40325: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       FirebaseError: () => QC.e,
+       SDK_VERSION: () => QC.i,
+       _DEFAULT_ENTRY_NAME: () => QC.m,
+       sZC: () => QC.o,
+       _addOrOverwriteComponent: () => QC.q,
+       _apps: () => QC.u,
+       _clearComponents: () => QC.y,
+       _components: () => QC.C,
+       _getProvider: () => QC.D,
+       _registerComponent: () => QC.H,
+       _removeServiceInstance: () => QC.I,
+       deleteApp: () => QC.M,
+       getApp: () => QC.S,
+       getApps: () => QC.Q,
+ ... (4 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L143-L1364` → after: `L26-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/265.js#L26-L27) · [Before (L143-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/265.js#L143-L1364)

```diff
-     const Dk = -2147483648,
-       fk = 12,
-       Sk = 12,
-       bk = 4095,
-       rk = {
-         Lifeform: 1,
-         Throwable: 2,
-         Mesh: 3,
-         Audio: 4,
-         Item: 5
-       },
-       Pk = {
-         Alive: 1,
-         Crouching: 2,
-         OnGround: 4,
-         InFluid: 8,
- ... (1206 more removed lines; see GitHub link above)
+     var QC = ZC(40329);
+     (0, QC.$)("firebase", "9.23.0", "app")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/266.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/266.js` (112 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e)

#### 1. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L4` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L5) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L4)

```diff
-   41177: (kk, ek, ik) => {
+   40340: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L6-L7` → after: `L7-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L7-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L7-L21) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L6-L7)

```diff
-       c: () => wk,
-       f: () => rk,
+       D: () => dC,
+       E: () => WC,
+       H: () => FC,
+       I: () => NC,
+       L: () => sC,
+       O: () => gC,
+       R: () => pC,
+       U: () => vC,
+       X: () => GC,
+       _: () => RC,
+       cb: () => SC,
+       d: () => MC,
+       g: () => IC,
+       gb: () => PC,
+       hb: () => YC,
```

#### 3. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L9` → after: `L23-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L23-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L23-L30) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L9)

```diff
-       n: () => mk
+       jb: () => KC,
+       mb: () => AC,
+       n: () => xC,
+       p: () => fC,
+       r: () => nC,
+       s: () => rC,
+       w: () => mC,
+       z: () => eC
```

#### 4. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L11-L21` → after: `L32-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L32-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L32-L177) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L11-L21)

```diff
-     var Dk = ik(36868),
-       fk = ik(38294),
-       Sk = ik(38287);
- 
-     function bk(kk, ek, ik, Dk) {
-       const fk = Sk.t;
-       ek.fill(0), kk.gravity.toArray(ek, fk.gravity), kk.colorDead.toArray(ek, fk.colorDead), ik[fk.ramp] = kk.useRampGradients ? 1 : 0;
-       const bk = kk.getColorGradients(),
-         rk = xk(kk, bk, "colour", Dk);
-       ik[fk.colorCount] = rk;
-       for (let Sk = 0; Sk < rk; Sk++) {
+     const QC = function(CC) {
+         const zC = [];
+         let ZC = 0;
+         for (let QC = 0; QC < CC.length; QC++) {
+           let wC = CC.charCodeAt(QC);
+           wC < 128 ? zC[ZC++] = wC : wC < 2048 ? (zC[ZC++] = wC >> 6 | 192, zC[ZC++] = 63 & wC | 128) : 55296 === (64512 & wC) && QC + 1 < CC.length && 56320 === (64512 & CC.charCodeAt(QC + 1)) ? (wC = 65536 + ((1023 & wC) << 10) + (1023 & CC.charCodeAt(++QC)), zC[ZC++] = wC >> 1 … [truncated]
+         }
+         return zC
+       },
+       wC = {
+         byteToCharMap_: null,
+         charToByteMap_: null,
+         byteToCharMapWebSafe_: null,
+         charToByteMapWebSafe_: null,
+         ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
+         get ENCODED_VALS() {
+ ... (130 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L23-L24` → after: `L179-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L179-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L179-L194) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L23-L24)

```diff
-         const kk = bk[nk(bk, Sk)];
-         ek[fk.colorPositions + Sk] = kk.gradient, kk.color1.toArray(ek, fk.color1 + 4 * Sk), (null !== (Pk = kk.color2) && void 0 !== Pk ? Pk : kk.color1).toArray(ek, fk.color2 + 4 * Sk)
+         return null === (CC = qC()) || void 0 === CC ? void 0 : CC.config
+       },
+       NC = CC => {
+         var zC;
+         return null === (zC = qC()) || void 0 === zC ? void 0 : zC[`_${CC}`]
+       };
+     class MC {
+       constructor() {
+         this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise(((CC, zC) => {
+           this.resolve = CC, this.reject = zC
+         }))
+       }
+       wrapCallback(CC) {
+         return (zC, ZC) => {
+           zC ? this.reject(zC) : this.resolve(ZC), "function" === typeof CC && (this.promise.catch((() => {})), 1 === CC.length ? CC(zC) : CC(zC, ZC))
+         }
```

#### 6. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L37-L40` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L199) · [Before (L37-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L37-L40)

```diff
-       return {
-         key: [],
-         texels: new Uint8Array(4 * Sk.k)
-       }
+       return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : ""
```

#### 7. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L44-L49` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L202-L203) · [Before (L44-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L44-L49)

```diff
-     function mk(kk, ek) {
-       return Mk(kk, Pk), !lk(Pk, ek.key) && (ek.key.length = 0, ek.key.push(...Pk), ek.key.length > 0 && function(kk, ek) {
-         for (let ik = 0; ik < Sk.k; ik++) fk.m.GetCurrentGradient(ik / Sk.k, kk, ((kk, ek, ik) => {
-           Dk.Color3.LerpToRef(kk.color, ek.color, ik, Kk)
-         })), ek[4 * ik] = 255 * Kk.r, ek[4 * ik + 1] = 255 * Kk.g, ek[4 * ik + 2] = 255 * Kk.b, ek[4 * ik + 3] = 255
-       }(kk.getRampGradients(), ek.texels), !0)
+     function SC() {
+       return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gC())
```

#### 8. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L52-L57` → after: `L206-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L206-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L206-L224) · [Before (L52-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L52-L57)

```diff
-     function Mk(kk, ek) {
-       ek.length = 0;
-       const ik = kk.useRampGradients ? kk.getRampGradients() : null;
-       if (null !== ik && void 0 !== ik && ik.length) {
-         ek.push(ik.length);
-         for (const kk of ik) ek.push(kk.gradient, kk.color.r, kk.color.g, kk.color.b)
+     function pC() {
+       const CC = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
+       return "object" === typeof CC && void 0 !== CC.id
+     }
+ 
+     function PC() {
+       return "object" === typeof navigator && "ReactNative" === navigator.product
+     }
+ 
+     function GC() {
+       const CC = gC();
+       return CC.indexOf("MSIE ") >= 0 || CC.indexOf("Trident/") >= 0
+     }
+ 
+     function RC() {
+       try {
+ ... (3 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L62-L63` → after: `L228-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L228-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L228-L245) · [Before (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L62-L63)

```diff
-     function xk(kk, ek, ik, Dk) {
-       return ek ? ek.length > Sk.b ? (Dk(`particleStops:${ik}`, `GPU particles use the first 2 and last ${Sk.b-2} of more than ${Sk.b} ${ik} gradient stops (${kk.name})`), Sk.b) : ek.length : 0
+     function AC() {
+       return new Promise(((CC, zC) => {
+         try {
+           let ZC = !0;
+           const QC = "validate-browser-context-for-indexeddb-analytics-module",
+             wC = self.indexedDB.open(QC);
+           wC.onsuccess = () => {
+             wC.result.close(), ZC || self.indexedDB.deleteDatabase(QC), CC(!0)
+           }, wC.onupgradeneeded = () => {
+             ZC = !1
+           }, wC.onerror = () => {
+             var CC;
+             zC((null === (CC = wC.error) || void 0 === CC ? void 0 : CC.message) || "")
+           }
+         } catch (ZC) {
+           zC(ZC)
+ ... (2 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L66-L67` → after: `L248-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L248-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L248-L272) · [Before (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L66-L67)

```diff
-     function nk(kk, ek) {
-       return ek < 2 || kk.length <= Sk.b ? ek : kk.length - Sk.b + ek
+     function xC() {
+       return !("undefined" === typeof navigator || !navigator.cookieEnabled)
+     }
+     class JC extends Error {
+       constructor(CC, zC, ZC) {
+         super(zC), this.code = CC, this.customData = ZC, this.name = "FirebaseError", Object.setPrototypeOf(this, JC.prototype), Error.captureStackTrace && Error.captureStackTrace(this, IC.prototype.create)
+       }
+     }
+     class IC {
+       constructor(CC, zC, ZC) {
+         this.service = CC, this.serviceName = zC, this.errors = ZC
+       }
+       create(CC) {
+         const zC = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
+           ZC = `${this.service}/${CC}`,
+           QC = this.errors[CC],
+ ... (9 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L69-L70` → after: `L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L274) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L69-L70)

```diff
-     const Uk = new Float32Array(Sk.p),
-       Hk = new Uint32Array(Uk.buffer);
+     const iC = /\{\$([^}]+)}/g;
```

#### 12. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L72-L73` → after: `L276-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L276-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L276-L279) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L72-L73)

```diff
-     function wk(kk, ek, ik) {
-       return bk(kk, Uk, Hk, ik), ek && lk(Hk, ek) ? null : Hk.slice()
+     function vC(CC) {
+       for (const zC in CC)
+         if (Object.prototype.hasOwnProperty.call(CC, zC)) return !1;
+       return !0
```

#### 13. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L77-L79` → after: `L283-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L283-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L283-L295) · [Before (L77-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L77-L79)

```diff
-       if (kk.length !== ek.length) return !1;
-       for (let ik = 0; ik < kk.length; ik++)
-         if (kk[ik] !== ek[ik]) return !1;
+       if (CC === zC) return !0;
+       const ZC = Object.keys(CC),
+         QC = Object.keys(zC);
+       for (const wC of ZC) {
+         if (!QC.includes(wC)) return !1;
+         const ZC = CC[wC],
+           bC = zC[wC];
+         if (hC(ZC) && hC(bC)) {
+           if (!eC(ZC, bC)) return !1
+         } else if (ZC !== bC) return !1
+       }
+       for (const wC of QC)
+         if (!ZC.includes(wC)) return !1;
```

#### 14. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L83-L85` → after: `L299-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L299-L300) · [Before (L83-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L83-L85)

```diff
-     function pk(kk, ek, ik) {
-       var Dk;
-       kk[ek] = ik.gradient, kk[ek + 1] = ik.factor1, kk[ek + 2] = null !== (Dk = ik.factor2) && void 0 !== Dk ? Dk : ik.factor1
+     function hC(CC) {
+       return null !== CC && "object" === typeof CC
```

#### 15. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L87-L94` → after: `L302-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L302-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L302-L308) · [Before (L87-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L87-L94)

```diff
-   },
-   41171: (kk, ek, ik) => {
-     function Dk() {
-       let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
-       const ek = new Set;
-       return (ik, Dk) => {
-         ek.has(ik) || (ek.add(ik), console.warn(kk + Dk))
-       }
+ 
+     function KC(CC) {
+       const zC = [];
+       for (const [ZC, QC] of Object.entries(CC)) Array.isArray(QC) ? QC.forEach((CC => {
+         zC.push(encodeURIComponent(ZC) + "=" + encodeURIComponent(CC))
+       })) : zC.push(encodeURIComponent(ZC) + "=" + encodeURIComponent(QC));
+       return zC.length ? "&" + zC.join("&") : ""
```

#### 16. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L96-L132` → after: `L310-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L310-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L310-L316) · [Before (L96-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L96-L132)

```diff
-     ik.d(ek, {
-       d: () => Dk
-     })
-   },
-   41207: (kk, ek, ik) => {
-     ik.d(ek, {
-       createLiteRendererAsync: () => vP,
-       liteBabylonBackend: () => Wk,
-       setPipelineFailureHook: () => Nf
-     });
-     var Dk = ik(36868),
-       fk = ik(37213),
-       Sk = ik(37489),
-       bk = ik(36812),
-       rk = ik(37506);
-     class Pk extends rk.c {
- ... (21 more removed lines; see GitHub link above)
+ 
+     function YC(CC) {
+       const zC = {};
+       return CC.replace(/^\?/, "").split("&").forEach((CC => {
+         if (CC) {
+           const [ZC, QC] = CC.split("=");
+           zC[decodeURIComponent(ZC)] = decodeURIComponent(QC)
```

#### 17. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L134-L137` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L318) · [Before (L134-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L134-L137)

```diff
-       }
-       getClassName() {
-         return "LinesMesh"
-       }
+       })), zC
```

#### 18. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L148-L150` → after: `L321-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L321-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L321-L325) · [Before (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L148-L150)

```diff
-     function lk(kk, ek, ik, Dk) {
-       let fk = 0;
-       return kk.isVerticesDataPresent("color") && (fk |= Kk), "none" !== ek && (fk |= xk), "thin" === ek && (fk |= nk, kk.isVerticesDataPresent("instanceColor") && (fk |= Uk)), Dk.fogEnabled && kk.applyFog && 0 !== Dk.fogMode && (fk |= Hk), ik >= 1 && (fk |= wk), fk
+     function dC(CC) {
+       const zC = CC.indexOf("?");
+       if (!zC) return "";
+       const ZC = CC.indexOf("#", zC);
+       return CC.substring(zC, ZC > 0 ? ZC : void 0)
```

#### 19. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L154` → after: `L329-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L329-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L329-L330) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L154)

```diff
-       kk.updateColor4("color", ek.color, ek.alpha)
+       const ZC = new HC(CC, zC);
+       return ZC.subscribe.bind(ZC)
```

#### 20. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L168-L178` → after: `L334-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L334-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L334-L338) · [Before (L168-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L168-L178)

```diff
-         this.name = kk, this.bw = ek, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.ZF = {
-           addOnce: kk => {
-             this.disposers.push(kk)
-           }
-         }, this.uniqueId = ek.getUniqueId()
-       }
-       get isFrozen() {
-         return this.checkReadyOnlyOnce
-       }
-       XF() {
-         return this.bw
+         this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = zC, this.task.then((() => {
+           CC(this)
+         })).catch((CC => {
+           this.error(CC)
+         }))
```

#### 21. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L180-L181` → after: `L340-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L340-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L340-L343) · [Before (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L180-L181)

```diff
-       getClassName() {
-         return "LiteMaterial"
+       next(CC) {
+         this.forEachObserver((zC => {
+           zC.next(CC)
+         }))
```

#### 22. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L183-L184` → after: `L345-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L345-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L345-L348) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L183-L184)

```diff
-       freeze() {
-         this.checkReadyOnlyOnce = !0
+       error(CC) {
+         this.forEachObserver((zC => {
+           zC.error(CC)
+         })), this.close(CC)
```

#### 23. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L186-L187` → after: `L350-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L350-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L350-L353) · [Before (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L186-L187)

```diff
-       unfreeze() {
-         this.checkReadyOnlyOnce = !1
+       complete() {
+         this.forEachObserver((CC => {
+           CC.complete()
+         })), this.close()
```

#### 24. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L189-L191` → after: `L355-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L355-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L355-L373) · [Before (L189-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L189-L191)

```diff
-       markDirty() {}
-       get fillMode() {
-         return this.model.fillMode
+       subscribe(CC, zC, ZC) {
+         let QC;
+         if (void 0 === CC && void 0 === zC && void 0 === ZC) throw new Error("Missing Observer.");
+         QC = function(CC, zC) {
+           if ("object" !== typeof CC || null === CC) return !1;
+           for (const ZC of zC)
+             if (ZC in CC && "function" === typeof CC[ZC]) return !0;
+           return !1
+         }(CC, ["next", "error", "complete"]) ? CC : {
+           next: CC,
+           error: zC,
+           complete: ZC
+         }, void 0 === QC.next && (QC.next = EC), void 0 === QC.error && (QC.error = EC), void 0 === QC.complete && (QC.complete = EC);
+         const wC = this.unsubscribeOne.bind(this, this.observers.length);
+         return this.finalized && this.task.then((() => {
+           try {
+ ... (3 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L193-L194` → after: `L375-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L375-L376) · [Before (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L193-L194)

```diff
-       needAlphaBlendingForMesh(kk) {
-         return (0, sk.P)(this.model, kk.visibility, kk.hasVertexAlpha)
+       unsubscribeOne(CC) {
+         void 0 !== this.observers && void 0 !== this.observers[CC] && (delete this.observers[CC], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
```

#### 26. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L196-L197` → after: `L378-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L378-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L378-L380) · [Before (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L196-L197)

```diff
-       needAlphaTestingForMesh(kk) {
-         return (0, sk.R)(this.model, kk.visibility, kk.hasVertexAlpha)
+       forEachObserver(CC) {
+         if (!this.finalized)
+           for (let zC = 0; zC < this.observers.length; zC++) this.sendOne(zC, CC)
```

#### 27. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L199-L201` → after: `L382-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L382-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L382-L389) · [Before (L199-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L199-L201)

```diff
-       dispose() {
-         (0, Yk.m)(this);
-         for (const kk of this.disposers.splice(0)) kk()
+       sendOne(CC, zC) {
+         this.task.then((() => {
+           if (void 0 !== this.observers && void 0 !== this.observers[CC]) try {
+             zC(this.observers[CC])
+           } catch (ZC) {
+             "undefined" !== typeof console && console.error && console.error(ZC)
+           }
+         }))
```

#### 28. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L203-L204` → after: `L391-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L391-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L391-L394) · [Before (L203-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L203-L204)

```diff
-       get model() {
-         return (0, sk.Y)(this)
+       close(CC) {
+         this.finalized || (this.finalized = !0, void 0 !== CC && (this.finalError = CC), this.task.then((() => {
+           this.observers = void 0, this.onNoObservers = void 0
+         })))
```

#### 29. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L207` → after: `L397-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L397-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L397-L402) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L207)

```diff
-     const qk = new WeakSet;
+ 
+     function EC() {}
+     const lC = 1e3,
+       XC = 2,
+       cC = 144e5,
+       uC = .5;
```

#### 30. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L210` → after: `L405-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L405-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L405-L408) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L210)

```diff
-       return qk.has(kk)
+       let zC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : XC;
+       const ZC = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lC) * Math.pow(zC, CC),
+         QC = Math.round(uC * ZC * (Math.random() - .5) * 2);
+       return Math.min(cC, ZC + QC)
```

#### 31. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L214` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L412) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L214)

```diff
-       qk.add(kk)
+       return CC && CC._delegate ? CC._delegate : CC
```

#### 32. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L216-L244` → after: `L414-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L414-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L414-L452) · [Before (L216-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L216-L244)

```diff
-     const Qk = {
-       create: (kk, ek) => ((0, Lk.m)(kk, new uk(kk.name, ek)), dk.d.defines()),
-       write: () => {},
-       addFeature: (kk, ek) => {
-         const ik = kk.mirror;
-         ek.feature === jk.f && ek.state.dirLightCount > 0 && (kk.disableLighting = !0, (0, sk.V)(kk)), "BLOXD_LIGHTING" in ek.defines && (0, Yk.j)(ik), ek.feature === Ak.j && ((0, yk.i)(ek.state, Fk), function(kk, ek) {
-           const ik = kk.XF().JU();
-           ek.textures.forEach(((Dk, fk) => {
-             setTimeout((() => {
-               var Sk, bk;
-               const {
-                 url: rk
-               } = Dk.source;
-               ik.atlasArray(rk, null !== (Sk = null === (bk = ek.sources.pixels) || void 0 === bk ? void 0 : bk[fk]) && void 0 !== Sk ? Sk : null, ek.sources.layerWidth).then((ik => {
-                 (0, yk.e)(kk, ek, fk, ik, ik.layerWidth, ik.layers, Fk)
-               })).catch((kk => {
- ... (13 more removed lines; see GitHub link above)
+   },
+   40329: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => bC.j,
+       i: () => Wz,
+       m: () => kC,
+       o: () => Zz,
+       q: () => Qz,
+       u: () => Cz,
+       y: () => fz,
+       C: () => zz,
+       D: () => bz,
+       H: () => wz,
+       I: () => nz,
+       M: () => Sz,
+       S: () => Mz,
+ ... (23 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L246-L270` → after: `L454-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L454-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L454-L455) · [Before (L246-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L246-L270)

```diff
-       cube: zk,
-       canvas: (kk, ek, ik) => {
-         let {
-           width: Dk,
-           height: fk,
-           mipmaps: Sk,
-           samplingMode: bk = Vk.f.trilinear,
-           hasAlpha: rk = !1,
-           wrap: Pk = Vk.b.clamp
-         } = ik;
-         const mk = kk.JU().createCanvas(Dk, fk),
-           Mk = new Vk.i("2d", {
-             kind: "canvas",
-             width: Dk,
-             height: fk,
-             canvas: mk
- ... (9 more removed lines; see GitHub link above)
+       set: (CC, zC, ZC) => (CC[zC] = ZC, !0),
+       has: (CC, zC) => CC instanceof IDBTransaction && ("done" === zC || "store" === zC) || zC in CC
```

#### 34. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L272-L306` → after: `L457-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L457-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L457-L468) · [Before (L272-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L272-L306)

```diff
-     var vk = ik(37041),
-       Ek = ik(36726);
-     class hk {
-       constructor(kk, ek, ik) {
-         this.engine = kk, this.clearColor = ek, this.ambientColor = ik, this.onBeforeRenderObservable = new Ek.c, this.onBeforeCameraRenderObservable = new Ek.c, this.onAfterRenderObservable = new Ek.c, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = … [truncated]
-       }
-       JU() {
-         return this.engine
-       }
-       getUniqueId() {
-         return ++this.lastId
-       }
-       getFrameId() {
-         return this.frameId
-       }
-       getAnimationRatio() {
- ... (19 more removed lines; see GitHub link above)
+ 
+     function gC(CC) {
+       return CC !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (fC || (fC = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(CC) ? function() {
+         for (var zC = arguments.length, ZC = new Array(zC), QC = 0; QC < zC; QC++) ZC[QC] = arguments[QC];
+         return CC.apply(PC(this), ZC), pC(oC.get(this))
+       } : function() {
+         for (var zC = arguments.length, ZC = new Array(zC), QC = 0; QC < zC; QC++) ZC[QC] = arguments[QC];
+         return pC(CC.apply(PC(this), ZC))
+       } : function(zC) {
+         for (var ZC = arguments.length, QC = new Array(ZC > 1 ? ZC - 1 : 0), wC = 1; wC < ZC; wC++) QC[wC - 1] = arguments[wC];
+         const bC = CC.call(PC(this), zC, ...QC);
+         return FC.set(bC, zC.sort ? zC.sort() : [zC]), pC(bC)
```

#### 35. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L310-L311` → after: `L472-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L472-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L472-L489) · [Before (L310-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L310-L311)

```diff
-     function ak() {
-       throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
+     function SC(CC) {
+       return "function" === typeof CC ? gC(CC) : (CC instanceof IDBTransaction && function(CC) {
+         if (qC.has(CC)) return;
+         const zC = new Promise(((zC, ZC) => {
+           const QC = () => {
+               CC.removeEventListener("complete", wC), CC.removeEventListener("error", bC), CC.removeEventListener("abort", bC)
+             },
+             wC = () => {
+               zC(), QC()
+             },
+             bC = () => {
+               ZC(CC.error || new DOMException("AbortError", "AbortError")), QC()
+             };
+           CC.addEventListener("complete", wC), CC.addEventListener("error", bC), CC.addEventListener("abort", bC)
+         }));
+         qC.set(CC, zC)
+ ... (2 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L313-L339` → after: `L491-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L491-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L491-L504) · [Before (L313-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L313-L339)

```diff
-     const Wk = {
-       bik: ak,
-       sDk: (kk, ek) => {
-         const ik = new hk(kk.engine, Dk.e.FromArray(ek.clearColor), Dk.Color3.FromArray(ek.ambientColor));
-         (0, bk.b)(Qk, ik), kk.bw = ik,
-           function(kk, ek) {
-             const ik = Object.assign((0, vk.f)(kk, "camera"), {
-               layerMask: 268435455
-             });
-             kk.model.nodes.setWorldSource(ik.row, kk.model.view.worldMatrix), kk.camera = ek.activeCamera = ik
-           }(kk, ik), (0, fk.i)(kk, ((kk, ek, ik) => (0, Sk.h)(kk, ek, ik, rk.c)))
-       },
-       LDk: () => {},
-       setBabylonFog: () => {},
-       VDk: ak,
-       IDk: () => {},
- ... (11 more removed lines; see GitHub link above)
+ 
+     function pC(CC) {
+       if (CC instanceof IDBRequest) return function(CC) {
+         const zC = new Promise(((zC, ZC) => {
+           const QC = () => {
+               CC.removeEventListener("success", wC), CC.removeEventListener("error", bC)
+             },
+             wC = () => {
+               zC(pC(CC.result)), QC()
+             },
+             bC = () => {
+               ZC(CC.error), QC()
+             };
+           CC.addEventListener("success", wC), CC.addEventListener("error", bC)
```

#### 37. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L341-L360` → after: `L506-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L506-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L506-L532) · [Before (L341-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L341-L360)

```diff
-         this.deviceLost = Promise.race([kk, ek]), this.deviceLost.then((() => {
-           this.lost = !0
-         }))
-       }
-       frameDrawn() {
-         this.refusedFrames = 0
-       }
-       frameFailed(kk) {
-         (function(kk) {
-           const {
-             name: ek,
-             message: ik
-           } = null !== kk && void 0 !== kk ? kk : {};
-           return "InvalidStateError" === ek && "string" === typeof ik && ik.startsWith("GPUDevice.")
-         })(kk) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
-           reason: "unknown",
- ... (4 more removed lines; see GitHub link above)
+         return zC.then((zC => {
+           zC instanceof IDBCursor && oC.set(zC, CC)
+         })).catch((() => {})), NC.set(zC, CC), zC
+       }(CC);
+       if (WC.has(CC)) return WC.get(CC);
+       const zC = SC(CC);
+       return zC !== CC && (WC.set(CC, zC), NC.set(zC, CC)), zC
+     }
+     const PC = CC => NC.get(CC);
+     const GC = ["get", "getKey", "getAll", "getAllKeys", "count"],
+       RC = ["put", "add", "delete", "clear"],
+       AC = new Map;
+ 
+     function xC(CC, zC) {
+       if (!(CC instanceof IDBDatabase) || zC in CC || "string" !== typeof zC) return;
+       if (AC.get(zC)) return AC.get(zC);
+ ... (11 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L364-L375` → after: `L541-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L541-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L541-L619) · [Before (L364-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L364-L375)

```diff
-         this.resources = kk, this.matrixKey = {
-           vK: 0
-         }, this.attributesKey = {
-           vK: 0
-         }, this.inputs = Object.create(null);
-         for (let ek = 0; ek < 4; ek++) this.inputs[`world${ek}`] = new Ok(this.matrixKey, 16 * ek, 64, 4)
-       }
-       release() {
-         this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
-       }
-       bind(kk, ek) {
-         this.resources.vertexBufferCreated(this.matrixKey, kk, !0), ek && this.resources.vertexBufferCreated(this.attributesKey, ek, !0)
+         this.container = CC
+       }
+       getPlatformInfoString() {
+         return this.container.getProviders().map((CC => {
+           if (function(CC) {
+               const zC = CC.getComponent();
+               return "VERSION" === (null === zC || void 0 === zC ? void 0 : zC.type)
+             }(CC)) {
+             const zC = CC.getImmediate();
+             return `${zC.library}/${zC.version}`
+           }
+           return null
+         })).filter((CC => CC)).join(" ")
+       }
+     }
+     const IC = "@firebase/app",
+ ... (63 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L378` → after: `L622-L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L622-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L622-L664) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L378)

```diff
-     class Tk extends ck {
+ 
+     function Qz(CC, zC) {
+       CC.container.addOrOverwriteComponent(zC)
+     }
+ 
+     function wz(CC) {
+       const zC = CC.name;
+       if (zz.has(zC)) return vC.debug(`There were multiple attempts to register component ${zC}.`), !1;
+       zz.set(zC, CC);
+       for (const ZC of Cz.values()) Zz(ZC, CC);
+       return !0
+     }
+ 
+     function bz(CC, zC) {
+       const ZC = CC.container.getProvider("heartbeat").getImmediate({
+         optional: !0
+ ... (27 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L380-L402` → after: `L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L666) · [Before (L380-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L380-L402)

```diff
-         super(kk), this.mesh = ek, this.rowStride = void 0, this.matrices = null, this.attributes = null;
-         const Dk = this.inputs;
-         let fk = 0;
-         for (const {
-             size: bk
-           }
-           of ik) fk += bk;
-         for (const {
-             name: bk,
-             offset: rk,
-             size: Pk,
-             type: mk
-           }
-           of ik) Dk[bk] = new Ok(this.attributesKey, 4 * rk, 4 * fk, Pk, !0, mk);
-         this.rowStride = fk, kk.i_.set(ek, this);
-         const Sk = ek.isVerticesDataPresent;
- ... (7 more removed lines; see GitHub link above)
+         this._isDeleted = !1, this._options = Object.assign({}, CC), this._config = Object.assign({}, zC), this._name = zC.name, this._automaticDataCollectionEnabled = zC.automaticDataCollectionEnabled, this._container = ZC, this.container.lH(new QC.f("app", (() => this), "PUBLIC … [truncated]
```

#### 41. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L404-L405` → after: `L668-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L668-L669) · [Before (L404-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L404-L405)

```diff
-       J7() {
-         this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
+       get automaticDataCollectionEnabled() {
+         return this.checkDestroyed(), this._automaticDataCollectionEnabled
```

#### 42. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L407-L408` → after: `L671-L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L671-L672) · [Before (L407-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L407-L408)

```diff
-       matrixRows(kk, ek) {
-         this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * kk, 16 * ek)
+       set automaticDataCollectionEnabled(CC) {
+         this.checkDestroyed(), this._automaticDataCollectionEnabled = CC
```

#### 43. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L410-L411` → after: `L674-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L674-L675) · [Before (L410-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L410-L411)

```diff
-       attributeRows(kk, ek) {
-         this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, kk * this.rowStride, ek * this.rowStride)
+       get name() {
+         return this.checkDestroyed(), this._name
```

#### 44. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L413-L414` → after: `L677-L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L677-L678) · [Before (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L413-L414)

```diff
-       release() {
-         super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
+       get options() {
+         return this.checkDestroyed(), this._options
```

#### 45. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L416-L418` → after: `L680-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L680-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/266.js#L680-L681) · [Before (L416-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/266.js#L416-L418)

```diff
-       mirror(kk, ek, ik) {
-         const Dk = this.mesh._thinInstanceDataStorage;
-         Dk.matrixData = kk, Dk.matrixBufferSize = ek, Dk.worldMatrices = null, Dk.instancesCount = ik
+       get config() {
+         return this.checkDestroyed(), this._config
```
