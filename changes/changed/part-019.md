# Changed — Bundle Modifications Report (Part 019 / 069)

- **Updated at**: `2026-11-25T01:02 JST`
- **Part**: `19 / 69` (**289** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 018](part-018.md) · [Part 020 →](part-020.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/262.js` (w4ddu.56408518 → sn3sfj.2522680a · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/262.js` (113 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b)

#### 101. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2370-L2427` → after: `L791-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L791-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L791-L795) · [Before (L2370-L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L2370-L2427)

```diff
- 
-     function fC(CC, zC, ZC, QC) {
-       let bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
-       const fC = new wC.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-         oC = new wC.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-       return nC.extractMinAndMaxIndexed(CC, zC, ZC, QC, fC, oC), bC && (fC.x -= fC.x * bC.x + bC.y, fC.y -= fC.y * bC.x + bC.y, fC.z -= fC.z * bC.x + bC.y, oC.x += oC.x * bC.x + bC.y, oC.y += oC.y * bC.x + bC.y, oC.z += oC.z * bC.x + bC.y), {
-         minimum: fC,
-         maximum: oC
-       }
-     }
- 
-     function oC(CC, zC, ZC) {
-       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-         bC = arguments.length > 4 ? arguments[4] : void 0;
-       const fC = new wC.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-         oC = new wC.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
- ... (42 more removed lines; see GitHub link above)
+     xp.e.FreeCameraTouchInput = tp;
+     var Hp, dp, ep, jp = cp(40096);
+     class kp extends xp.f {
+       constructor(pp) {
+         super(pp), this._mouseInput = null, this._mouseWheelInput = null
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2429-L2430` → after: `L797-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L797-L798) · [Before (L2429-L2430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L2429-L2430)

```diff
-       _setMainDrawWrapperOverride(CC) {
-         this._mainDrawWrapperOverride = CC
+       addKeyboard() {
+         return this.add(new Dp), this
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2432-L2477` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L800) · [Before (L2432-L2477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L2432-L2477)

```diff
-       setEffect(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           ZC = arguments.length > 2 ? arguments[2] : void 0,
-           QC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-         const wC = this._drawWrapper;
-         wC.setEffect(CC, zC, QC), void 0 !== ZC && (wC.materialContext = ZC), CC || (wC.defines = null, wC.materialContext = void 0)
-       }
-       resetDrawCache(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         if (this._drawWrappers) {
-           if (void 0 !== CC) return void this._removeDrawWrapper(CC, !0, zC);
-           for (const CC of this._drawWrappers) CC?.dispose(zC)
-         }
-         this._drawWrappers = []
-       }
-       static AddToMesh(CC, zC, ZC, QC, wC, bC, nC) {
- ... (30 more removed lines; see GitHub link above)
+       addMouse() {
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2479-L2503` → after: `L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L802) · [Before (L2479-L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L2479-L2503)

```diff
-         const zC = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
-         if (!zC) return CC && this._mesh.Km()._hasDefaultMaterial ? this._mesh.Km().defaultMaterial : null;
-         if (this._isMultiMaterial(zC)) {
-           const CC = zC.getSubMaterial(this.materialIndex);
-           return this._currentMaterial !== CC && (this._currentMaterial = CC, this.resetDrawCache()), CC
-         }
-         return zC
-       }
-       _isMultiMaterial(CC) {
-         return void 0 !== CC.getSubMaterial
-       }
-       refreshBoundingInfo() {
-         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
-         if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
-         if (CC || (CC = this._renderingMesh.getVerticesData(wC.k.PositionKind)), !CC) return this._boundingInfo = this._mesh.WE(), this;
-         const zC = this._renderingMesh.CQC();
- ... (9 more removed lines; see GitHub link above)
+         return this._mouseInput || (this._mouseInput = new Wp(pp), this.add(this._mouseInput)), this
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2505-L2506` → after: `L804-L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L804-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L804-L805) · [Before (L2505-L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L2505-L2506)

```diff
-       _checkCollision(CC) {
-         return this.WE()._checkCollision(CC)
+       removeMouse() {
+         return this._mouseInput && this.remove(this._mouseInput), this
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2508-L2510` → after: `L807-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L807-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L807-L808) · [Before (L2508-L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L2508-L2510)

```diff
-       updateBoundingInfo(CC) {
-         let zC = this.WE();
-         return zC || (this.refreshBoundingInfo(), zC = this.WE()), zC && zC.update(CC), this
+       addMouseWheel() {
+         return this._mouseWheelInput || (this._mouseWheelInput = new vp, this.add(this._mouseWheelInput)), this
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2512-L2514` → after: `L810-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L810-L811) · [Before (L2512-L2514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L2512-L2514)

```diff
-       isInFrustum(CC) {
-         const zC = this.WE();
-         return !!zC && zC.isInFrustum(CC, this._mesh.cullingStrategy)
+       removeMouseWheel() {
+         return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2516-L2518` → after: `L813-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L813-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L813-L814) · [Before (L2516-L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L2516-L2518)

```diff
-       isCompletelyInFrustum(CC) {
-         const zC = this.WE();
-         return !!zC && zC.isCompletelyInFrustum(CC)
+       addTouch() {
+         return this.add(new tp), this
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2520-L2521` → after: `L816-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L816-L817) · [Before (L2520-L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L2520-L2521)

```diff
-       render(CC) {
-         return this._renderingMesh.render(this, CC, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
+       clear() {
+         super.clear(), this._mouseInput = null
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2523-L2586` → after: `L819-L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L819-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L819-L836) · [Before (L2523-L2586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L2523-L2586)

```diff
-       _getLinesIndexBuffer(CC, zC) {
-         if (!this._linesIndexBuffer) {
-           const ZC = 6 * Math.floor(this.indexCount / 3),
-             QC = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(ZC) : new Uint16Array(ZC);
-           let wC = 0;
-           if (0 === CC.length)
-             for (let CC = this.indexStart; CC < this.indexStart + this.indexCount; CC += 3) QC[wC++] = CC, QC[wC++] = CC + 1, QC[wC++] = CC + 1, QC[wC++] = CC + 2, QC[wC++] = CC + 2, QC[wC++] = CC;
-           else
-             for (let zC = this.indexStart; zC < this.indexStart + this.indexCount; zC += 3) QC[wC++] = CC[zC], QC[wC++] = CC[zC + 1], QC[wC++] = CC[zC + 1], QC[wC++] = CC[zC + 2], QC[wC++] = CC[zC + 2], QC[wC++] = CC[zC];
-           this._linesIndexBuffer = zC.createIndexBuffer(QC), this._linesIndexCount = QC.length
-         }
-         return this._linesIndexBuffer
-       }
-       canIntersects(CC) {
-         const zC = this.WE();
-         return !!zC && CC.intersectsBox(zC.boundingBox)
- ... (48 more removed lines; see GitHub link above)
+     }(Hp = kp.prototype).addDeviceOrientation ?? (Hp.addDeviceOrientation = (0, jp.k)("FreeCameraInputsManager", "addDeviceOrientation")), (dp = kp.prototype).addVirtualJoystick ?? (dp.addVirtualJoystick = (0, jp.k)("FreeCameraInputsManager", "addVirtualJoystick")), (ep = kp.prot … [truncated]
+     var mp = cp(40113),
+       Rp = cp(37368);
+     let qp = (() => {
+         var pp;
+         let ip, cp, xp, Lp, Dp = Sp.f,
+           Ap = [],
+           Pp = [],
+           Wp = [],
+           yp = [],
+           Up = [],
+           wp = [],
+           vp = [],
+           tp = [];
+         return pp = class extends Dp {
+           get angularSensibility() {
+ ... (2 more added lines; see GitHub link above)
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2588-L2596` → after: `L838-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L838-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L838-L840) · [Before (L2588-L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L2588-L2596)

```diff
-           const NC = zC[QC],
-             MC = zC[FC],
-             gC = zC[WC];
-           if (!NC || !MC || !gC) continue;
-           if (nC && !nC(NC, MC, gC, CC, QC, FC, WC)) continue;
-           const SC = CC.intersectsTriangle(NC, MC, gC);
-           if (SC) {
-             if (SC.distance < 0) continue;
-             if ((bC || !fC || SC.distance < fC.distance) && (fC = SC, fC.faceId = oC, bC)) break
+           set angularSensibility(pp) {
+             const ip = this.inputs.attached.mouse;
+             ip && (ip.angularSensibility = pp)
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2598-L2611` → after: `L842-L844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L842-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L842-L844) · [Before (L2598-L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L2598-L2611)

```diff
-         }
-         return fC
-       }
-       _intersectUnIndexedTriangles(CC, zC, ZC, QC, wC) {
-         let bC = null;
-         for (let nC = this.verticesStart; nC < this.verticesStart + this.verticesCount; nC += 3) {
-           const ZC = zC[nC],
-             fC = zC[nC + 1],
-             oC = zC[nC + 2];
-           if (wC && !wC(ZC, fC, oC, CC, -1, -1, -1)) continue;
-           const qC = CC.intersectsTriangle(ZC, fC, oC);
-           if (qC) {
-             if (qC.distance < 0) continue;
-             if ((QC || !bC || qC.distance < bC.distance) && (bC = qC, bC.faceId = nC / 3, QC)) break
+           get keysUp() {
+             const pp = this.inputs.attached.keyboard;
+             return pp ? pp.keysUp : []
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2613-L2648` → after: `L846-L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L846-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L846-L1033) · [Before (L2613-L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L2613-L2648)

```diff
-         }
-         return bC
-       }
-       _rebuild() {
-         this._linesIndexBuffer && (this._linesIndexBuffer = null)
-       }
-       clone(CC, zC) {
-         const ZC = new FC(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, CC, zC, !1);
-         if (!this.IsGlobal) {
-           const CC = this.WE();
-           if (!CC) return ZC;
-           ZC._boundingInfo = new nC.d(CC.minimum, CC.maximum)
-         }
-         return ZC
-       }
-       dispose() {
- ... (20 more removed lines; see GitHub link above)
+           set keysUp(pp) {
+             const ip = this.inputs.attached.keyboard;
+             ip && (ip.keysUp = pp)
+           }
+           get keysUpward() {
+             const pp = this.inputs.attached.keyboard;
+             return pp ? pp.keysUpward : []
+           }
+           set keysUpward(pp) {
+             const ip = this.inputs.attached.keyboard;
+             ip && (ip.keysUpward = pp)
+           }
+           get keysDown() {
+             const pp = this.inputs.attached.keyboard;
+             return pp ? pp.keysDown : []
+           }
+ ... (172 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/263.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/263.js` (45 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696)

#### 1. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L4)

```diff
-   41402: (CC, zC, ZC) => {
+   40451: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L8-L19` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L8-L16) · [Before (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L8-L19)

```diff
-     class QC {}
-     QC.AUTOSAMPLERSUFFIX = "Sampler", QC.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", QC.ALPHA_DISABLE = 0, QC.ALPHA_ADD = 1, QC.ALPHA_COMBINE = 2, QC.ALPHA_SUBTRACT = 3, QC.ALPHA_MULTIPLY = 4, QC.ALPHA_MAXIMIZED = 5, QC.ALPHA_ONEONE = 6, QC.ALPHA_PREMULTIPLIED = 7, QC.ALPH … [truncated]
-   },
-   41384: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => oC
-     });
-     var QC = ZC(39811),
-       wC = ZC(39818),
-       bC = ZC(36963),
-       nC = ZC(40084),
-       fC = ZC(40049);
+     var Op = cp(40203),
+       op = cp(40210),
+       Ip = cp(37320),
+       Sp = cp(37487),
+       xp = cp(40415),
+       Lp = cp(40332),
+       Yp = cp(37368),
+       Dp = cp(40398),
+       Ap = cp(40233);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L21-L22` → after: `L18-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L18-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L18-L39) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L21-L22)

```diff
-       var CC;
-       let zC, ZC, oC, qC, FC = nC.c,
+       var pp, ip;
+       let cp, Pp, Wp, yp, Up, wp, vp, tp, Hp, dp, ep, jp, kp, mp = xp.b,
+         Rp = [],
+         qp = [],
+         Mp = [],
+         Cp = [],
+         Ep = [],
+         Xp = [],
+         lp = [],
+         Qp = [],
+         Jp = [],
+         Bp = [],
+         Np = [],
+         Tp = [],
+         fp = [],
+         bp = [],
+ ... (6 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L25-L29` → after: `L42-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L42-L43) · [Before (L25-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L25-L29)

```diff
-         constructor() {
-           super(...arguments), this._position = (0, QC.n)(this, WC), this._needProjectionMatrixCompute = !0, this._viewMatrix = bC.b.Identity(), this._projectionMatrix = bC.b.Identity()
-         }
-         _setPosition(CC) {
-           this._position = CC
+         get range() {
+           return this._range
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L31-L32` → after: `L45-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L45-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L45-L46) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L31-L32)

```diff
-         get position() {
-           return this._position
+         set range(pp) {
+           this._range = pp, this._inverseSquaredRange = 1 / (this.range * this.range)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L34-L35` → after: `L48-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L48-L49) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L34-L35)

```diff
-         set position(CC) {
-           this._setPosition(CC)
+         get intensityMode() {
+           return this._intensityMode
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L37-L38` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L51-L52) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L37-L38)

```diff
-         _setDirection(CC) {
-           this._direction = CC
+         set intensityMode(pp) {
+           this._intensityMode = pp, this._computePhotometricScale()
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L40-L41` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L54-L55) · [Before (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L40-L41)

```diff
-         get direction() {
-           return this._direction
+         get radius() {
+           return this._radius
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L43-L44` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L57-L58) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L43-L44)

```diff
-         set direction(CC) {
-           this._setDirection(CC)
+         set radius(pp) {
+           this._radius = pp, this._computePhotometricScale()
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L46-L47` → after: `L60-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L60-L61) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L46-L47)

```diff
-         get shadowMinZ() {
-           return this._shadowMinZ
+         get renderPriority() {
+           return (0, Op.e)(this, ip, "f")
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L49-L50` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L63-L64) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L49-L50)

```diff
-         set shadowMinZ(CC) {
-           this._shadowMinZ = CC, this.forceProjectionMatrixCompute()
+         set renderPriority(pp) {
+           (0, Op.f)(this, ip, pp, "f")
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L52-L53` → after: `L66-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L66-L67) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L52-L53)

```diff
-         get shadowMaxZ() {
-           return this._shadowMaxZ
+         get shadowEnabled() {
+           return this._shadowEnabled
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L55-L56` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L69-L70) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L55-L56)

```diff
-         set shadowMaxZ(CC) {
-           this._shadowMaxZ = CC, this.forceProjectionMatrixCompute()
+         set shadowEnabled(pp) {
+           this._shadowEnabled !== pp && (this._shadowEnabled = pp, this._markMeshesAsLightDirty())
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L58-L59` → after: `L72-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L72-L73) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L58-L59)

```diff
-         computeTransformedInformation() {
-           return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = bC.r.Zero()), bC.r.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDire … [truncated]
+         get includedOnlyMeshes() {
+           return this._includedOnlyMeshes
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L61-L62` → after: `L75-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L75-L76) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L61-L62)

```diff
-         getDepthScale() {
-           return 50
+         set includedOnlyMeshes(pp) {
+           this._includedOnlyMeshes = pp, this._hookArrayForIncludedOnly(pp)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L64-L65` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L78-L79) · [Before (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L64-L65)

```diff
-         getShadowDirection(CC) {
-           return this.transformedDirection ? this.transformedDirection : this.direction
+         get excludedMeshes() {
+           return this._excludedMeshes
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L67-L77` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L81-L82) · [Before (L67-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L67-L77)

```diff
-         getAbsolutePosition() {
-           return this.transformedPosition ? this.transformedPosition : this.position
-         }
-         setDirectionToTarget(CC) {
-           return this.direction = bC.r.Normalize(CC.subtract(this.position)), this.direction
-         }
-         getRotation() {
-           this.direction.normalize();
-           const CC = bC.r.Cross(this.direction, fC.c.Y),
-             zC = bC.r.Cross(CC, this.direction);
-           return bC.r.RotationFromAxis(CC, zC, this.direction)
+         set excludedMeshes(pp) {
+           this._excludedMeshes = pp, this._hookArrayForExcluded(pp)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L79-L80` → after: `L84-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L84-L85) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L79-L80)

```diff
-         needCube() {
-           return !1
+         get excludeWithLayerMask() {
+           return this._excludeWithLayerMask
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L82-L83` → after: `L87-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L87-L88) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L82-L83)

```diff
-         needProjectionMatrixCompute() {
-           return this._needProjectionMatrixCompute
+         set excludeWithLayerMask(pp) {
+           this._excludeWithLayerMask = pp, this._resyncMeshes()
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L85-L86` → after: `L90-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L90-L91) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L85-L86)

```diff
-         forceProjectionMatrixCompute() {
-           this._needProjectionMatrixCompute = !0
+         get includeOnlyWithLayerMask() {
+           return this._includeOnlyWithLayerMask
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L88-L92` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L93-L94) · [Before (L88-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L88-L92)

```diff
-         _initCache() {
-           super._initCache(), this._cache.position = bC.r.Zero()
-         }
-         _isSynchronized() {
-           return !!this._cache.position.equals(this.position)
+         set includeOnlyWithLayerMask(pp) {
+           this._includeOnlyWithLayerMask = pp, this._resyncMeshes()
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L94-L95` → after: `L96-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L96-L97) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L94-L95)

```diff
-         computeWorldMatrix(CC) {
-           return !CC && this.isSynchronized() ? (this._currentRenderId = this.Km().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.Av(this.position), this._worldMatrix || (this._worldMatrix = bC.b.Identity()), bC.b.TranslationToRef(this.position.x,  … [truncated]
+         get lightmapMode() {
+           return this._lightmapMode
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L97-L98` → after: `L99-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L99-L100) · [Before (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L97-L98)

```diff
-         getDepthMinZ(CC) {
-           return void 0 !== this.shadowMinZ ? this.shadowMinZ : CC?.minZ || 0
+         set lightmapMode(pp) {
+           this._lightmapMode !== pp && (this._lightmapMode = pp, this._markMeshesAsLightDirty())
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L100-L101` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L102-L103) · [Before (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L100-L101)

```diff
-         getDepthMaxZ(CC) {
-           return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : CC?.maxZ || 1e4
+         getViewMatrix(pp) {
+           return null
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L103-L104` → after: `L105-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L105-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L105-L136) · [Before (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L103-L104)

```diff
-         setShadowProjectionMatrix(CC, zC, ZC) {
-           return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(zC, ZC, CC) : this._setDefaultShadowProjectionMatrix(CC, zC, ZC), this
+         getProjectionMatrix(pp, ip) {
+           return null
+         }
+         constructor(cp, op, Ip) {
+           super(cp, op, !1), this.diffuse = ((0, Op.l)(this, Rp), (0, Op.l)(this, qp, new Sp.d(1, 1, 1))), this.specular = ((0, Op.l)(this, Mp), (0, Op.l)(this, Cp, new Sp.d(1, 1, 1))), this.falloffType = ((0, Op.l)(this, Ep), (0, Op.l)(this, Xp, pp.FALLOFF_DEFAULT)), this.intens … [truncated]
+         }
+         transferTexturesToEffect(pp, ip) {
+           return this
+         }
+         _bindLight(pp, ip, cp, Op) {
+           let op = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
+           const Ip = pp.toString();
+           let xp = !1;
+           if (this._uniformBuffer.bindToEffect(cp, "Light" + Ip), this._renderId !== ip.getRenderId() || this._lastUseSpecular !== Op || !this._uniformBuffer.useUbo) {
+             this._renderId = ip.getRenderId(), this._lastUseSpecular = Op;
+             const pp = this.getScaledIntensity();
+ ... (16 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L107` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L139) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L107)

```diff
-           super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
+           super._syncParentEnabledState(), this.uR() || this._resyncMeshes()
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L109-L114` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L141-L142) · [Before (L109-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L109-L114)

```diff
-         getViewMatrix(CC) {
-           const zC = bC.j.Eg[0];
-           let ZC = this.position;
-           this.computeTransformedInformation() && (ZC = this.transformedPosition), bC.r.NormalizeToRef(this.getShadowDirection(CC), zC), 1 === Math.abs(bC.r.Dot(zC, bC.r.Up())) && (zC.z = 1e-13);
-           const QC = bC.j.Eg[1];
-           return ZC.addToRef(zC, QC), bC.b.LookAtLHToRef(ZC, QC, bC.r.Up(), this._viewMatrix), this._viewMatrix
+         eC(pp) {
+           super.eC(pp), this._resyncMeshes()
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L116-L117` → after: `L144-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L144-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L144-L146) · [Before (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L116-L117)

```diff
-         getProjectionMatrix(CC, zC) {
-           return this.setShadowProjectionMatrix(this._projectionMatrix, CC ?? this._viewMatrix, zC ?? []), this._projectionMatrix
+         getShadowGenerator() {
+           let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+           return null === this._shadowGenerators ? null : this._shadowGenerators.get(pp) ?? null
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L119` → after: `L148-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L148-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L148-L307) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L119)

```diff
-       }, (() => {
+         getShadowGenerators() {
+           return this._shadowGenerators
+         }
+         getAbsolutePosition() {
+           return Ip.o.Zero()
+         }
+         canAffectMesh(pp) {
+           return !pp || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(pp)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(pp)) && ((0 === this.includeOnlyWithLayerMask | … [truncated]
+         }
+         dispose(pp) {
+           let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+           if (this._shadowGenerators) {
+             const pp = this._shadowGenerators.values();
+             for (let ip = pp.next(); !0 !== ip.done; ip = pp.next()) {
+               ip.value.dispose()
+             }
+ ... (144 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L121` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L309) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L121)

```diff
-         zC = [(0, wC.J)()], ZC = [(0, wC.J)()], oC = [(0, wC.M)()], qC = [(0, wC.M)()], (0, QC.j)(CC, null, zC, {
+         cp = [(0, op.n)()], Pp = [(0, op.n)()], Wp = [(0, op.K)()], yp = [(0, op.K)()], Up = [(0, op.K)()], wp = [(0, op.K)()], vp = [(0, op.K)()], tp = [(0, op.K)()], Hp = [(0, op.e)("_reorderLightsInScene")], dp = [(0, op.K)("shadowEnabled")], ep = [(0, op.K)("excludeWithLayerM … [truncated]
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L123` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L311) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L123)

```diff
-           name: "position",
+           name: "range",
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L127-L128` → after: `L315-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L315-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L315-L316) · [Before (L127-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L127-L128)

```diff
-             has: CC => "position" in CC,
-             get: CC => CC.position
+             has: pp => "range" in pp,
+             get: pp => pp.range
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L133` → after: `L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L321) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L133)

```diff
-           name: "direction",
+           name: "intensityMode",
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L137-L138` → after: `L325-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L325-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L325-L326) · [Before (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L137-L138)

```diff
-             has: CC => "direction" in CC,
-             get: CC => CC.direction
+             has: pp => "intensityMode" in pp,
+             get: pp => pp.intensityMode
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L143` → after: `L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L331) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L143)

```diff
-           name: "shadowMinZ",
+           name: "radius",
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L147-L148` → after: `L335-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L335-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L335-L336) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L147-L148)

```diff
-             has: CC => "shadowMinZ" in CC,
-             get: CC => CC.shadowMinZ
+             has: pp => "radius" in pp,
+             get: pp => pp.radius
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L152-L153` → after: `L340-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L340-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L340-L406) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L152-L153)

```diff
-           kind: "getter",
-           name: "shadowMaxZ",
+           kind: "accessor",
+           name: "renderPriority",
+           static: !1,
+           private: !1,
+           access: {
+             has: pp => "renderPriority" in pp,
+             get: pp => pp.renderPriority,
+             set: (pp, ip) => {
+               pp.renderPriority = ip
+             }
+           },
+           metadata: ip
+         }, Tp, fp), (0, Op.j)(null, null, cp, {
+           kind: "field",
+           name: "diffuse",
+           static: !1,
+ ... (51 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L157-L158` → after: `L410-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L410-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L410-L414) · [Before (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L157-L158)

```diff
-             has: CC => "shadowMaxZ" in CC,
-             get: CC => CC.shadowMaxZ
+             has: pp => "_renderPriority" in pp,
+             get: pp => pp._renderPriority,
+             set: (pp, ip) => {
+               pp._renderPriority = ip
+             }
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L161` → after: `L417-L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L417-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L417-L469) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L161)

```diff
-         }, null, WC), bC && Object.defineProperty(CC, Symbol.metadata, {
+         }, Bp, Np), (0, Op.j)(null, null, dp, {
+           kind: "field",
+           name: "_shadowEnabled",
+           static: !1,
+           private: !1,
+           access: {
+             has: pp => "_shadowEnabled" in pp,
+             get: pp => pp._shadowEnabled,
+             set: (pp, ip) => {
+               pp._shadowEnabled = ip
+             }
+           },
+           metadata: ip
+         }, bp, hp), (0, Op.j)(null, null, ep, {
+           kind: "field",
+           name: "_excludeWithLayerMask",
+ ... (37 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L167` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L475) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L167)

```diff
-       })(), CC
+       })(), pp.FALLOFF_DEFAULT = Dp.b.FALLOFF_DEFAULT, pp.FALLOFF_PHYSICAL = Dp.b.FALLOFF_PHYSICAL, pp.FALLOFF_GLTF = Dp.b.FALLOFF_GLTF, pp.FALLOFF_STANDARD = Dp.b.FALLOFF_STANDARD, pp.LIGHTMAP_DEFAULT = Dp.b.LIGHTMAP_DEFAULT, pp.LIGHTMAP_SPECULAR = Dp.b.LIGHTMAP_SPECULAR, pp.LIG … [truncated]
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L170` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L478) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L170)

```diff
-   41396: (CC, zC, ZC) => {
+   40415: (pp, ip, cp) => {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L174-L229` → after: `L482-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L482-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L482-L491) · [Before (L174-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L174-L229)

```diff
-     var QC = ZC(40303);
-     class wC extends QC.h {
-       constructor(CC, zC, ZC, wC, bC) {
-         let nC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-           fC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-           oC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
-           qC = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
-           FC = arguments.length > 9 ? arguments[9] : void 0,
-           WC = arguments.length > 10 ? arguments[10] : void 0,
-           NC = arguments.length > 11 ? arguments[11] : void 0,
-           MC = arguments.length > 12 ? arguments[12] : void 0;
-         super(null, bC, !nC, fC, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, FC), this.format = wC, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== qC || (oC = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== qC || (oC = … [truncated]
-       }
-       update(CC) {
-         this.updateMipLevel(CC, 0)
-       }
- ... (40 more removed lines; see GitHub link above)
+     var Op = cp(40203),
+       op = cp(37320),
+       Ip = cp(40210),
+       Sp = cp(37349),
+       xp = cp(37345),
+       Lp = cp(40096),
+       Yp = cp(40233);
+     class Dp {
+       constructor() {
+         this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new Sp.d, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedO … [truncated]
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L232-L283` → after: `L494-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L494-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L494-L508) · [Before (L232-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L232-L283)

```diff
-   },
-   41438: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => QC.b
-     });
-     var QC = ZC(40265);
-     (0, QC.e)()
-   },
-   41392: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => QC.c
-     });
-     var QC = ZC(40283);
-     (0, QC.e)()
-   },
-   40283: (CC, zC, ZC) => {
- ... (36 more removed lines; see GitHub link above)
+     let Ap = (() => {
+       var pp;
+       let ip, cp, Ap, Pp, Wp, yp = [],
+         Up = [],
+         wp = [],
+         vp = [],
+         tp = [],
+         Hp = [],
+         dp = [],
+         ep = [],
+         jp = [],
+         kp = [];
+       return pp = class {
+         static AddNodeConstructor(pp, ip) {
+           this._NodeConstructors[pp] = ip
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L285-L340` → after: `L510-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L510-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L510-L512) · [Before (L285-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L285-L340)

```diff
-       }
-       getClassName() {
-         return "LinesMesh"
-       }
-       get material() {
-         return this._internalAbstractMeshDataInfo._material
-       }
-       set material(CC) {
-         const zC = this.material;
-         if (zC === CC) return;
-         const ZC = zC && this._ownsMaterial;
-         this._ownsMaterial = !1, this._setInternalMaterial(CC), ZC && zC?.dispose()
-       }
-       _setInternalMaterial(CC) {
-         this._setMaterial(CC), this.material && (this.material.fillMode = qC.d.LineListDrawMode, this.material.disableLighting = !0)
-       }
- ... (40 more removed lines; see GitHub link above)
+         static Construct(pp, ip, cp, Op) {
+           const op = this._NodeConstructors[pp];
+           return op ? op(ip, cp, Op) : null
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L342-L365` → after: `L514-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L514-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/263.js#L514-L880) · [Before (L342-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/263.js#L342-L365)

```diff
-         return zC
-       }
-       serialize(CC) {
-         super.serialize(CC), CC.color = this.color.VZC(), CC.alpha = this.alpha
-       }
-       static Parse(CC, zC) {
-         const ZC = new NC(CC.name, zC);
-         return ZC.color = bC.e.FromArray(CC.color), ZC.alpha = CC.alpha, ZC
-       }
-     }
-     NC.ForceGLSL = !1;
-     class MC extends oC.c {
-       constructor(CC, zC) {
-         super(CC, zC), this.intersectionThreshold = zC.intersectionThreshold
-       }
-       getClassName() {
- ... (8 more removed lines; see GitHub link above)
+         set accessibilityTag(pp) {
+           this._accessibilityTag = pp, this.onAccessibilityTagChangedObservable.notifyObservers(pp)
+         }
+         get accessibilityTag() {
+           return this._accessibilityTag
+         }
+         get doNotSerialize() {
+           return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
+         }
+         set doNotSerialize(pp) {
+           this._nodeDataStorage._doNotSerialize = pp
+         }
+         uR() {
+           return this._nodeDataStorage._isDisposed
+         }
+         set parent(pp) {
+ ... (351 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/264.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/264.js` (68 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42)

#### 1. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L4)

```diff
-   40297: (CC, zC, ZC) => {
+   41300: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L6-L11` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L6) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L6-L11)

```diff
-       e: () => IC,
-       f: () => xC,
-       i: () => RC,
-       k: () => AC,
-       o: () => GC,
-       r: () => PC
+       c: () => hp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L13-L45` → after: `L8-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L8-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L8-L117) · [Before (L13-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L13-L45)

```diff
-     var QC = ZC(39842),
-       wC = ZC(39910),
-       bC = ZC(36963),
-       nC = ZC(39959),
-       fC = ZC(40303),
-       oC = ZC(40175),
-       qC = ZC(39867),
-       FC = ZC(40167),
-       WC = ZC(36985),
-       NC = ZC(40157),
-       MC = ZC(40151),
-       gC = ZC(40196),
-       SC = ZC(37002);
-     const pC = {
-       effect: null,
-       subMesh: null
- ... (17 more removed lines; see GitHub link above)
+     var Op = cp(40203),
+       op = cp(40210),
+       Ip = cp(37349),
+       Sp = cp(37320),
+       xp = cp(37356),
+       Lp = cp(40415),
+       Yp = cp(40577),
+       Dp = cp(40372),
+       Ap = cp(40122),
+       Pp = cp(37324);
+     class Wp {
+       constructor() {
+         this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / … [truncated]
+       }
+       get name() {
+         return "AutoRotation"
+ ... (94 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L48-L49` → after: `L121-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L121-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L121-L126) · [Before (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L48-L49)

```diff
-       get shaderPath() {
-         return this._shaderPath
+     }
+     yp.EASINGMODE_EASEIN = 0, yp.EASINGMODE_EASEOUT = 1, yp.EASINGMODE_EASEINOUT = 2;
+     var Up = cp(41315);
+     class wp {
+       constructor() {
+         this.transitionDuration = 450, this.lowerRadiusTransitionRange = 2, this.upperRadiusTransitionRange = -2, this._autoTransitionRange = !1, this._attachedCamera = null, this._radiusIsAnimating = !1, this._radiusBounceTransition = null, this._animatables = new Array
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L51-L52` → after: `L128-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L128-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L128-L129) · [Before (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L51-L52)

```diff
-       set shaderPath(CC) {
-         this._shaderPath = CC
+       get name() {
+         return "Bouncing"
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L54-L55` → after: `L131-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L131-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L131-L143) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L54-L55)

```diff
-       get options() {
-         return this._options
+       get autoTransitionRange() {
+         return this._autoTransitionRange
+       }
+       set autoTransitionRange(pp) {
+         if (this._autoTransitionRange === pp) return;
+         this._autoTransitionRange = pp;
+         const ip = this._attachedCamera;
+         ip && (pp ? this._onMeshTargetChangedObserver = ip.onMeshTargetChangedObservable.add((pp => {
+           if (pp && (pp.computeWorldMatrix(!0), pp.bJ)) {
+             const ip = pp.bJ().diagonalLength;
+             this.lowerRadiusTransitionRange = .05 * ip, this.upperRadiusTransitionRange = .05 * ip
+           }
+         })) : this._onMeshTargetChangedObserver && ip.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L57-L58` → after: `L145-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L145-L146) · [Before (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L57-L58)

```diff
-       get isMultiview() {
-         return this._multiview
+       get attachedNode() {
+         return this._attachedCamera
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L60-L61` → after: `L148-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L148-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L148-L152) · [Before (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L60-L61)

```diff
-       getClassName() {
-         return "ShaderMaterial"
+       init() {}
+       attach(pp) {
+         this._attachedCamera = pp, this._onAfterCheckInputsObserver = pp.onAfterCheckInputsObservable.add((() => {
+           this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTra … [truncated]
+         }))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L63-L64` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L154-L155) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L63-L64)

```diff
-       needAlphaBlending() {
-         return this.alpha < 1 || this._options.needAlphaBlending
+       detach() {
+         this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChange … [truncated]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L66-L67` → after: `L157-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L157-L158) · [Before (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L66-L67)

```diff
-       needAlphaTesting() {
-         return this._options.needAlphaTesting
+       _isRadiusAtLimit(pp) {
+         return !!this._attachedCamera && (this._attachedCamera.radius === pp && !this._radiusIsAnimating)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L69-L70` → after: `L160-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L160-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L160-L164) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L69-L70)

```diff
-       _checkUniform(CC) {
-         -1 === this._options.uniforms.indexOf(CC) && this._options.uniforms.push(CC)
+       _applyBoundRadiusAnimation(pp) {
+         if (!this._attachedCamera) return;
+         this._radiusBounceTransition || (wp.EasingFunction.setEasingMode(wp.EasingMode), this._radiusBounceTransition = Up.e.CreateAnimation("radius", Up.e.ANIMATIONTYPE_FLOAT, 60, wp.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attach … [truncated]
+         const ip = Up.e.TransitionTo("radius", this._attachedCamera.radius + pp, this._attachedCamera, this._attachedCamera.Gl(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
+         ip && this._animatables.push(ip)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L72-L73` → after: `L166-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L166-L167) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L72-L73)

```diff
-       setTexture(CC, zC) {
-         return -1 === this._options.samplers.indexOf(CC) && this._options.samplers.push(CC), this._textures[CC] = zC, this
+       _clearAnimationLocks() {
+         this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L75-L76` → after: `L169-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L169-L170) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L75-L76)

```diff
-       setInternalTexture(CC, zC) {
-         return -1 === this._options.samplers.indexOf(CC) && this._options.samplers.push(CC), this._internalTextures[CC] = zC, this
+       stopAllAnimations() {
+         for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L78-L79` → after: `L172-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L172-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L172-L176) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L78-L79)

```diff
-       removeTexture(CC) {
-         delete this._textures[CC]
+     }
+     wp.EasingFunction = new class extends yp {
+       constructor() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
+         super(), this.amplitude = pp
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L81-L82` → after: `L178-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L178-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L178-L180) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L81-L82)

```diff
-       setTextureArray(CC, zC) {
-         return -1 === this._options.samplers.indexOf(CC) && this._options.samplers.push(CC), this._checkUniform(CC), this._textureArrays[CC] = zC, this
+       easeInCore(pp) {
+         const ip = Math.max(0, this.amplitude);
+         return Math.pow(pp, 3) - pp * ip * Math.sin(3.141592653589793 * pp)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L84-L85` → after: `L182-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L182-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L182-L185) · [Before (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L84-L85)

```diff
-       setExternalTexture(CC, zC) {
-         return -1 === this._options.externalTextures.indexOf(CC) && this._options.externalTextures.push(CC), this._externalTextures[CC] = zC, this
+     }(.3), wp.EasingMode = yp.EASINGMODE_EASEOUT;
+     class vp {
+       constructor() {
+         this.onTargetFramingAnimationEndObservable = new Ip.d, this._mode = vp.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1,  … [truncated]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L87-L88` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L187-L188) · [Before (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L87-L88)

```diff
-       setFloat(CC, zC) {
-         return this._checkUniform(CC), this._floats[CC] = zC, this
+       get name() {
+         return "Framing"
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L90-L91` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L190-L191) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L90-L91)

```diff
-       setInt(CC, zC) {
-         return this._checkUniform(CC), this._ints[CC] = zC, this
+       set mode(pp) {
+         this._mode = pp
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L93-L94` → after: `L193-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L193-L194) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L93-L94)

```diff
-       setUInt(CC, zC) {
-         return this._checkUniform(CC), this._uints[CC] = zC, this
+       get mode() {
+         return this._mode
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L96-L97` → after: `L196-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L196-L197) · [Before (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L96-L97)

```diff
-       setFloats(CC, zC) {
-         return this._checkUniform(CC), this._floatsArrays[CC] = zC, this
+       set radiusScale(pp) {
+         this._radiusScale = pp
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L99-L100` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L199-L200) · [Before (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L99-L100)

```diff
-       setColor3(CC, zC) {
-         return this._checkUniform(CC), this._colors3[CC] = zC, this
+       get radiusScale() {
+         return this._radiusScale
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L102-L103` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L202-L203) · [Before (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L102-L103)

```diff
-       setColor3Array(CC, zC) {
-         return this._checkUniform(CC), this._colors3Arrays[CC] = zC.reduce(((CC, zC) => (CC.push(zC.r, zC.g, zC.b), CC)), []), this
+       set positionScale(pp) {
+         this._positionScale = pp
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L105-L106` → after: `L205-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L205-L206) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L105-L106)

```diff
-       setColor4(CC, zC) {
-         return this._checkUniform(CC), this._colors4[CC] = zC, this
+       get positionScale() {
+         return this._positionScale
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L108-L109` → after: `L208-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L208-L209) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L108-L109)

```diff
-       setColor4Array(CC, zC) {
-         return this._checkUniform(CC), this._colors4Arrays[CC] = zC.reduce(((CC, zC) => (CC.push(zC.r, zC.g, zC.b, zC.a), CC)), []), this
+       set defaultElevation(pp) {
+         this._defaultElevation = pp
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L111-L112` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L211-L212) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L111-L112)

```diff
-       setVector2(CC, zC) {
-         return this._checkUniform(CC), this._vectors2[CC] = zC, this
+       get defaultElevation() {
+         return this._defaultElevation
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L114-L115` → after: `L214-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L214-L215) · [Before (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L114-L115)

```diff
-       setVector3(CC, zC) {
-         return this._checkUniform(CC), this._vectors3[CC] = zC, this
+       set elevationReturnTime(pp) {
+         this._elevationReturnTime = pp
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L117-L118` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L217-L218) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L117-L118)

```diff
-       setVector4(CC, zC) {
-         return this._checkUniform(CC), this._vectors4[CC] = zC, this
+       get elevationReturnTime() {
+         return this._elevationReturnTime
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L120-L121` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L220-L221) · [Before (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L120-L121)

```diff
-       setQuaternion(CC, zC) {
-         return this._checkUniform(CC), this._quaternions[CC] = zC, this
+       set elevationReturnWaitTime(pp) {
+         this._elevationReturnWaitTime = pp
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L123-L124` → after: `L223-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L223-L224) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L123-L124)

```diff
-       setQuaternionArray(CC, zC) {
-         return this._checkUniform(CC), this._quaternionsArrays[CC] = zC.reduce(((CC, zC) => (zC.toArray(CC, CC.length), CC)), []), this
+       get elevationReturnWaitTime() {
+         return this._elevationReturnWaitTime
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L126-L127` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L226-L227) · [Before (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L126-L127)

```diff
-       setMatrix(CC, zC) {
-         return this._checkUniform(CC), this._matrices[CC] = zC, this
+       set zoomStopsAnimation(pp) {
+         this._zoomStopsAnimation = pp
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L129-L135` → after: `L229-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L229-L230) · [Before (L129-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L129-L135)

```diff
-       setMatrices(CC, zC) {
-         this._checkUniform(CC);
-         const ZC = new Float32Array(16 * zC.length);
-         for (let QC = 0; QC < zC.length; QC++) {
-           zC[QC].copyToArray(ZC, 16 * QC)
-         }
-         return this._matrixArrays[CC] = ZC, this
+       get zoomStopsAnimation() {
+         return this._zoomStopsAnimation
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L137-L138` → after: `L232-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L232-L233) · [Before (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L137-L138)

```diff
-       setMatrix3x3(CC, zC) {
-         return this._checkUniform(CC), this._matrices3x3[CC] = zC, this
+       set framingTime(pp) {
+         this._framingTime = pp
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L140-L141` → after: `L235-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L235-L236) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L140-L141)

```diff
-       setMatrix2x2(CC, zC) {
-         return this._checkUniform(CC), this._matrices2x2[CC] = zC, this
+       get framingTime() {
+         return this._framingTime
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L143-L144` → after: `L238-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L238-L239) · [Before (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L143-L144)

```diff
-       setArray2(CC, zC) {
-         return this._checkUniform(CC), this._vectors2Arrays[CC] = zC, this
+       get attachedNode() {
+         return this._attachedCamera
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L146-L147` → after: `L241-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L241-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L241-L253) · [Before (L146-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L146-L147)

```diff
-       setArray3(CC, zC) {
-         return this._checkUniform(CC), this._vectors3Arrays[CC] = zC, this
+       init() {}
+       attach(pp) {
+         this._attachedCamera = pp;
+         const ip = this._attachedCamera.Gl();
+         vp.EasingFunction.setEasingMode(vp.EasingMode), this._onPrePointerObservableObserver = ip.onPrePointerObservable.add((pp => {
+           pp.type !== Dp.d.POINTERDOWN ? pp.type === Dp.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
+         })), this._onMeshTargetChangedObserver = pp.onMeshTargetChangedObservable.add((pp => {
+           pp && pp.bJ && this.zoomOnMesh(pp, void 0, (() => {
+             this.onTargetFramingAnimationEndObservable.notifyObservers()
+           }))
+         })), this._onAfterCheckInputsObserver = pp.onAfterCheckInputsObservable.add((() => {
+           this._applyUserInteraction(), this._maintainCameraAboveGround()
+         }))
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L149-L150` → after: `L255-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L255-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L255-L258) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L149-L150)

```diff
-       setArray4(CC, zC) {
-         return this._checkUniform(CC), this._vectors4Arrays[CC] = zC, this
+       detach() {
+         if (!this._attachedCamera) return;
+         const pp = this._attachedCamera.Gl();
+         this._onPrePointerObservableObserver && pp.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserve … [truncated]
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L152-L153` → after: `L260-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L260-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L260-L265) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L152-L153)

```diff
-       setUniformBuffer(CC, zC) {
-         return -1 === this._options.uniformBuffers.indexOf(CC) && this._options.uniformBuffers.push(CC), this._uniformBuffers[CC] = zC, this
+       zoomOnMesh(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         pp.computeWorldMatrix(!0);
+         const Op = pp.bJ().boundingBox;
+         this.zoomOnBoundingInfo(Op.minimumWorld, Op.maximumWorld, ip, cp)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L155-L156` → after: `L267-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L267-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L267-L272) · [Before (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L155-L156)

```diff
-       setTextureSampler(CC, zC) {
-         return -1 === this._options.samplerObjects.indexOf(CC) && this._options.samplerObjects.push(CC), this._textureSamplers[CC] = zC, this
+       zoomOnMeshHierarchy(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         pp.computeWorldMatrix(!0);
+         const Op = pp.getHierarchyBoundingVectors(!0);
+         this.zoomOnBoundingInfo(Op.min, Op.max, ip, cp)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L158-L159` → after: `L274-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L274-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L274-L283) · [Before (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L158-L159)

```diff
-       setStorageBuffer(CC, zC) {
-         return -1 === this._options.storageBuffers.indexOf(CC) && this._options.storageBuffers.push(CC), this._storageBuffers[CC] = zC, this
+       zoomOnMeshesHierarchy(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         const Op = new Sp.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+           op = new Sp.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+         for (let Ip = 0; Ip < pp.length; Ip++) {
+           const ip = pp[Ip].getHierarchyBoundingVectors(!0);
+           Sp.o.CheckExtends(ip.min, Op, op), Sp.o.CheckExtends(ip.max, Op, op)
+         }
+         this.zoomOnBoundingInfo(Op, op, ip, cp)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L161-L164` → after: `L285-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L285-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L285-L312) · [Before (L161-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L161-L164)

```diff
-       setDefine(CC, zC) {
-         const ZC = CC.trimEnd() + " ",
-           QC = this.options.defines.findIndex((zC => zC === CC || zC.startsWith(ZC)));
-         return QC >= 0 && this.options.defines.splice(QC, 1), ("boolean" !== typeof zC || zC) && this.options.defines.push(ZC + zC), this
+       zoomOnBoundingInfo(pp, ip) {
+         let cp, Op = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
+         if (!this._attachedCamera) return !1;
+         const Ip = pp.y,
+           xp = Ip + (ip.y - Ip) * this._positionScale,
+           Lp = ip.subtract(pp).scale(.5);
+         if (!isFinite(xp)) return !1;
+         if (Op) cp = new Sp.o(0, xp, 0);
+         else {
+           const ip = pp.add(Lp);
+           cp = new Sp.o(ip.x, xp, ip.z)
+         }
+         this._vectorTransition || (this._vectorTransition = Up.e.CreateAnimation("target", Up.e.ANIMATIONTYPE_VECTOR3, 60, vp.EasingFunction)), this._betaIsAnimating = !0;
+         let Yp = Up.e.TransitionTo("target", cp, this._attachedCamera, this._attachedCamera.Gl(), 60, this._vectorTransition, this._framingTime);
+         Yp && this._animatables.push(Yp);
+ ... (12 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L166-L167` → after: `L314-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L314-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L314-L318) · [Before (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L166-L167)

```diff
-       isReadyForSubMesh(CC, zC, ZC) {
-         return this.isReady(CC, ZC, zC)
+       _calculateLowerRadiusFromModelBoundingSphere(pp, ip) {
+         const cp = this._attachedCamera;
+         if (!cp) return 0;
+         let Op = cp._calculateLowerRadiusFromModelBoundingSphere(pp, ip, this._radiusScale);
+         return cp.lowerRadiusLimit && this._mode === vp.IgnoreBoundsSizeMode && (Op = Op < cp.lowerRadiusLimit ? cp.lowerRadiusLimit : Op), cp.upperRadiusLimit && (Op = Op > cp.upperRadiusLimit ? cp.upperRadiusLimit : Op), Op
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L169-L173` → after: `L320-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L320-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L320-L330) · [Before (L169-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L169-L173)

```diff
-       isReady(CC, zC, ZC) {
-         const QC = ZC && this._storeEffectOnSubMeshes;
-         if (this.isFrozen) {
-           const CC = QC ? ZC._drawWrapper : this._drawWrapper;
-           if (CC.effect && CC._wasPreviouslyReady && CC._wasPreviouslyUsingInstances === zC) return !0
+       _maintainCameraAboveGround() {
+         if (this._elevationReturnTime < 0) return;
+         const pp = Ap.e.Now - this._lastInteractionTime,
+           ip = .5 * Math.PI - this._defaultElevation,
+           cp = .5 * Math.PI;
+         if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > cp && pp >= this._elevationReturnWaitTime) {
+           this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = Up.e.CreateAnimation("beta", Up.e.ANIMATIONTYPE_FLOAT, 60, vp.EasingFunction));
+           const pp = Up.e.TransitionTo("beta", ip, this._attachedCamera, this._attachedCamera.Gl(), 60, this._betaTransition, this._elevationReturnTime, (() => {
+             this._clearAnimationLocks(), this.stopAllAnimations()
+           }));
+           pp && this._animatables.push(pp)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L175-L176` → after: `L332-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L332-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L332-L504) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L175-L176)

```diff
-         const bC = this.Km(),
-           fC = bC.mg(),
+       }
+       _clearAnimationLocks() {
+         this._betaIsAnimating = !1
+       }
+       _applyUserInteraction() {
+         this.isUserIsMoving && (this._lastInteractionTime = Ap.e.Now, this.stopAllAnimations(), this._clearAnimationLocks())
+       }
+       stopAllAnimations() {
+         for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
+       }
+       get isUserIsMoving() {
+         return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPannin … [truncated]
+       }
+     }
+     vp.EasingFunction = new class extends yp {
+       constructor() {
+ ... (157 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L179-L187` → after: `L507-L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L507-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L507-L784) · [Before (L179-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L179-L187)

```diff
-         let WC = null,
-           SC = this._shaderPath,
-           PC = this._options.uniforms,
-           GC = this._options.uniformBuffers,
-           RC = this._options.samplers;
-         fC.getCaps().multiview && bC.activeCamera && bC.activeCamera.outputRenderTarget && bC.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, qC.push("#define MULTIVIEW"), -1 !== PC.indexOf("viewProjection") && -1 === PC.indexOf("viewProjectionR") &&  … [truncated]
-         for (let wC = 0; wC < this._options.defines.length; wC++) {
-           const CC = 0 === this._options.defines[wC].indexOf("#define") ? this._options.defines[wC] : `#define ${this._options.defines[wC]}`;
-           qC.push(CC)
+         return pp = class extends Sp {
+           constructor() {
+             super(...arguments), this.pinchZoom = (0, Op.l)(this, xp, !0), this.multiTouchPanning = ((0, Op.l)(this, Lp), (0, Op.l)(this, Yp, !0)), this.multiTouchPanAndZoom = ((0, Op.l)(this, Dp), (0, Op.l)(this, Ap, !0)), this._isPinching = ((0, Op.l)(this, Pp), !1), this._twoF … [truncated]
+           }
+           _computePinchZoom(pp, ip) {}
+           _computeMultiTouchPanning(pp, ip) {}
+           onMultiTouch(pp, ip, cp, Op, op, Ip) {
+             0 === cp && null === op || 0 === Op && null === Ip || (this.multiTouchPanAndZoom ? (this._computePinchZoom(cp, Op), this._computeMultiTouchPanning(op, Ip)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldSt … [truncated]
+           }
+           onButtonUp(pp) {
+             this._twoFingerActivityCount = 0, this._isPinching = !1
+           }
+           onLostFocus() {
+             this._twoFingerActivityCount = 0, this._isPinching = !1
+           }
+         }, (() => {
+ ... (262 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L189-L207` → after: `L786-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L786-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L786-L787) · [Before (L189-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L189-L207)

```diff
-         for (let wC = 0; wC < this._options.attributes.length; wC++) FC.push(this._options.attributes[wC]);
-         if (CC && CC.isVerticesDataPresent(nC.k.ColorKind) && (-1 === FC.indexOf(nC.k.ColorKind) && FC.push(nC.k.ColorKind), qC.push("#define VERTEXCOLOR")), zC && (qC.push("#define INSTANCES"), (0, MC.Ab)(FC, this._materialHelperNeedsPreviousMatrices), CC?.hasThinInstances && (q … [truncated]
-           FC.push(nC.k.MatricesIndicesKind), FC.push(nC.k.MatricesWeightsKind), CC.numBoneInfluencers > 4 && (FC.push(nC.k.MatricesIndicesExtraKind), FC.push(nC.k.MatricesWeightsExtraKind));
-           const zC = CC.skeleton;
-           qC.push("#define NUM_BONE_INFLUENCERS " + CC.numBoneInfluencers), WC = new oC.c, WC.addCPUSkinningFallback(0, CC), zC.isUsingTextureForMatrices ? (qC.push("#define BONETEXTURE"), -1 === PC.indexOf("boneTextureInfo") && PC.push("boneTextureInfo"), -1 === this._options.sa … [truncated]
-         } else qC.push("#define NUM_BONE_INFLUENCERS 0");
-         let AC = 0;
-         const xC = CC ? CC.morphTargetManager : null;
-         if (xC) {
-           const zC = -1 !== qC.indexOf("#define UV1"),
-             ZC = -1 !== qC.indexOf("#define UV2"),
-             QC = -1 !== qC.indexOf("#define TANGENT"),
-             wC = -1 !== qC.indexOf("#define NORMAL"),
-             bC = -1 !== qC.indexOf("#define VERTEXCOLOR");
-           AC = (0, MC.T)(xC, qC, FC, CC, !0, wC, QC, zC, ZC, bC), xC.isUsingTextureForTargets && (-1 === PC.indexOf("morphTargetTextureIndices") && PC.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTar … [truncated]
-         } else qC.push("#define NUM_MORPH_INFLUENCERS 0");
- ... (3 more removed lines; see GitHub link above)
+         get useAltToZoom() {
+           return this._useAltToZoom
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L209-L221` → after: `L789-L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L789-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L789-L790) · [Before (L209-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L209-L221)

```diff
-         for (const wC in this._textures)
-           if (!this._textures[wC].isReady()) return !1;
-         for (const wC in this._internalTextures)
-           if (!this._internalTextures[wC].isReady) return !1;
-         CC && this.needAlphaTestingForMesh(CC) && qC.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, NC.d)(PC), (0, NC.l)(this, bC, qC)), bC.fogEnabled && CC?.applyFog && bC.fogMode !== wC.g.FOGMODE_NONE && (qC.push("#define FOG"), -1 === PC.indexOf("view") & … [truncated]
-         const JC = ZC ? ZC.getRenderingMesh() : CC;
-         if (JC && this.useVertexPulling) {
-           const CC = JC.geometry;
-           CC && (this._vertexPullingMetadata = (0, gC.d)(CC), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((CC, zC) => {
-             PC.push(`vp_${zC}_info`)
-           }))), qC.push("#define USE_VERTEX_PULLING");
-           const zC = JC.geometry?.getIndexBuffer();
-           zC && !JC.isUnIndexed && (qC.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), zC.is32Bits && qC.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
+         set useAltToZoom(pp) {
+           this._useAltToZoom = pp, this._applyUseAltToZoomToInputMap()
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L223-L269` → after: `L792-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L792-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L792-L820) · [Before (L223-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L223-L269)

```diff
-         this.customShaderNameResolve && (PC = PC.slice(), GC = GC.slice(), RC = RC.slice(), SC = this.customShaderNameResolve(this.name, PC, GC, RC, qC, FC));
-         const IC = QC ? ZC._getDrawWrapper(void 0, !0) : this._drawWrapper,
-           iC = IC?.effect ?? null,
-           vC = IC?.defines ?? null,
-           eC = qC.join("\n");
-         let hC = iC;
-         return vC !== eC && (hC = fC.createEffect(SC, {
-           attributes: FC,
-           uniformsNames: PC,
-           uniformBuffersNames: GC,
-           samplers: RC,
-           defines: eC,
-           fallbacks: WC,
-           onCompiled: this.onCompiled,
-           onError: this.onError,
-           indexParameters: {
- ... (31 more removed lines; see GitHub link above)
+         _applyUseAltToZoomToInputMap() {
+           if (!this.camera?.movement) return;
+           const pp = this.camera.movement.input,
+             ip = pp.getEntry("keyboard", "zoom", {
+               modifiers: {
+                 alt: !0
+               }
+             });
+           !this._useAltToZoom && ip ? pp.inputMap.splice(pp.inputMap.indexOf(ip), 1) : this._useAltToZoom && !ip && pp.addEntry({
+             source: "keyboard",
+             modifiers: {
+               alt: !0
+             },
+             interaction: "zoom"
+           })
+         }
+ ... (13 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L271-L314` → after: `L822-L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L822-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L822-L825) · [Before (L271-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L271-L314)

```diff
-           }
-         const qC = zC && wC ? this._mustRebind(nC, bC, QC, zC.visibility) : nC.getCachedMaterial() !== this;
-         if (bC && qC) {
-           let CC;
-           for (CC in oC || -1 === this._options.uniforms.indexOf("view") || bC.setMatrix("view", nC.getViewMatrix()), oC || -1 === this._options.uniforms.indexOf("projection") || bC.setMatrix("projection", nC.getProjectionMatrix()), oC || -1 === this._options.uniforms.indexOf("vi … [truncated]
-           for (CC in this._internalTextures) bC._bindTexture(CC, this._internalTextures[CC]);
-           for (CC in this._textureArrays) bC.setTextureArray(CC, this._textureArrays[CC]);
-           for (CC in this._ints) bC.setInt(CC, this._ints[CC]);
-           for (CC in this._uints) bC.setUInt(CC, this._uints[CC]);
-           for (CC in this._floats) bC.setFloat(CC, this._floats[CC]);
-           for (CC in this._floatsArrays) bC.setArray(CC, this._floatsArrays[CC]);
-           for (CC in this._colors3) bC.setColor3(CC, this._colors3[CC]);
-           for (CC in this._colors3Arrays) bC.setArray3(CC, this._colors3Arrays[CC]);
-           for (CC in this._colors4) {
-             const zC = this._colors4[CC];
-             bC.setFloat4(CC, zC.r, zC.g, zC.b, zC.a)
- ... (28 more removed lines; see GitHub link above)
+           })))
+         }
+         detachControl() {
+           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L316-L321` → after: `L827-L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L827-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L827-L847) · [Before (L316-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L316-L321)

```diff
-         if (bC && zC && (qC || !this.isFrozen)) {
-           (0, MC.u)(zC, bC), zC.morphTargetManager && zC.morphTargetManager.isUsingTextureForTargets && zC.morphTargetManager._bind(bC);
-           const CC = zC.bakedVertexAnimationManager;
-           if (CC && CC.isEnabled) {
-             const CC = wC ? QC._drawWrapper : this._drawWrapper;
-             zC.bakedVertexAnimationManager?.bind(bC, !!CC._wasPreviouslyUsingInstances)
+         checkInputs() {
+           if (this._onKeyboardObserver) {
+             const pp = this.camera,
+               ip = pp.movement.input;
+             this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
+             const cp = this._rotateDirection.set(0, 0),
+               Op = this._panDirection.set(0, 0);
+             let op = 0,
+               Ip = 0;
+             for (let Sp = 0; Sp < this._keys.length; Sp++) {
+               const xp = this._keys[Sp];
+               if (this._keyboardConditions.key = xp, -1 === this.keysReset.indexOf(xp)) {
+                 const pp = ip.resolveInteraction("keyboard", this._keyboardConditions);
+                 if (pp)
+                   if ("pan" === pp.interaction) Ip = Math.max(Ip, pp.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(xp) ? Op.x -= 1 : -1 !== this.keysRight.indexOf(xp) ? Op.x += 1 : -1 !== this.keysUp.indexOf(xp) ? Op.y += 1 : -1 !== this.keysDown.index … [truncated]
+                   else if ("zoom" === pp.interaction) {
+ ... (5 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L324-L331` → after: `L850-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L850-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L850-L851) · [Before (L324-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L324-L331)

```diff
-         this._afterBind(zC, bC, QC)
-       }
-       getActiveTextures() {
-         const CC = super.getActiveTextures();
-         for (const zC in this._textures) CC.push(this._textures[zC]);
-         for (const zC in this._textureArrays) {
-           const ZC = this._textureArrays[zC];
-           for (let zC = 0; zC < ZC.length; zC++) CC.push(ZC[zC])
+         getClassName() {
+           return "ArcRotateCameraKeyboardMoveInput"
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L333-L345` → after: `L853-L854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L853-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L853-L854) · [Before (L333-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L333-L345)

```diff
-         return CC
-       }
-       hasTexture(CC) {
-         if (super.hasTexture(CC)) return !0;
-         for (const ZC in this._textures)
-           if (this._textures[ZC] === CC) return !0;
-         const zC = CC.getInternalTexture();
-         for (const ZC in this._internalTextures)
-           if (this._internalTextures[ZC] === zC) return !0;
-         for (const ZC in this._textureArrays) {
-           const zC = this._textureArrays[ZC];
-           for (let ZC = 0; ZC < zC.length; ZC++)
-             if (zC[ZC] === CC) return !0
+         getSimpleName() {
+           return "keyboard"
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L347-L359` → after: `L856-L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L856-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L856-L1019) · [Before (L347-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L347-L359)

```diff
-         return !1
-       }
-       clone(CC) {
-         const zC = QC.d.Clone((() => new PC(CC, this.Km(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
-         zC.name = CC, zC.id = CC, "object" === typeof zC._shaderPath && (zC._shaderPath = {
-           ...zC._shaderPath
-         }), this._options = {
-           ...this._options
-         };
-         const ZC = Object.keys(this._options);
-         for (const QC of ZC) {
-           const CC = this._options[QC];
-           Array.isArray(CC) && (this._options[QC] = CC.slice(0))
+       }, (() => {
+         const Sp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         ip = [(0, op.K)()], cp = [(0, op.K)()], Ip = [(0, op.K)()], xp = [(0, op.K)()], Lp = [(0, op.K)()], Yp = [(0, op.K)()], Dp = [(0, op.K)()], Ap = [(0, op.K)()], Pp = [(0, op.K)()], Wp = [(0, op.K)()], yp = [(0, op.K)()], (0, Op.j)(pp, null, yp, {
+           kind: "getter",
+           name: "useAltToZoom",
+           static: !1,
+           private: !1,
+           access: {
+             has: pp => "useAltToZoom" in pp,
+             get: pp => pp.useAltToZoom
+           },
+           metadata: Sp
+         }, null, Up), (0, Op.j)(null, null, ip, {
+           kind: "field",
+           name: "keysUp",
+           static: !1,
+ ... (148 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L361-L392` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L1021) · [Before (L361-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L361-L392)

```diff
-         this.stencil.copyTo(zC.stencil);
-         for (const QC in this._textures) zC.setTexture(QC, this._textures[QC]);
-         for (const QC in this._internalTextures) zC.setInternalTexture(QC, this._internalTextures[QC]);
-         for (const QC in this._textureArrays) zC.setTextureArray(QC, this._textureArrays[QC]);
-         for (const QC in this._externalTextures) zC.setExternalTexture(QC, this._externalTextures[QC]);
-         for (const QC in this._ints) zC.setInt(QC, this._ints[QC]);
-         for (const QC in this._uints) zC.setUInt(QC, this._uints[QC]);
-         for (const QC in this._floats) zC.setFloat(QC, this._floats[QC]);
-         for (const QC in this._floatsArrays) zC.setFloats(QC, this._floatsArrays[QC]);
-         for (const QC in this._colors3) zC.setColor3(QC, this._colors3[QC]);
-         for (const QC in this._colors3Arrays) zC._colors3Arrays[QC] = this._colors3Arrays[QC];
-         for (const QC in this._colors4) zC.setColor4(QC, this._colors4[QC]);
-         for (const QC in this._colors4Arrays) zC._colors4Arrays[QC] = this._colors4Arrays[QC];
-         for (const QC in this._vectors2) zC.setVector2(QC, this._vectors2[QC]);
-         for (const QC in this._vectors3) zC.setVector3(QC, this._vectors3[QC]);
-         for (const QC in this._vectors4) zC.setVector4(QC, this._vectors4[QC]);
- ... (16 more removed lines; see GitHub link above)
+         _computeDeltaFromMouseWheelLegacyEvent(pp, ip) {
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L394-L398` → after: `L1023-L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1023-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L1023-L1058) · [Before (L394-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L394-L398)

```diff
-           for (CC in this._textures) this._textures[CC].dispose();
-           for (CC in this._internalTextures) this._internalTextures[CC].dispose();
-           for (CC in this._textureArrays) {
-             const zC = this._textureArrays[CC];
-             for (let CC = 0; CC < zC.length; CC++) zC[CC].dispose()
+           const Op = .01 * pp * this.wheelDeltaPercentage * ip;
+           return cp = pp > 0 ? Op / (1 + this.wheelDeltaPercentage) : Op * (1 + this.wheelDeltaPercentage), cp
+         }
+         attachControl(pp) {
+           pp = ep.i.BackCompatCameraNoPreventDefault(arguments), this._wheel = ip => {
+             if (ip.type !== Dp.d.POINTERWHEEL) return;
+             const cp = ip.event;
+             let Op;
+             const op = cp.deltaMode === Cp.c.DOM_DELTA_LINE ? 40 : 1,
+               Ip = -cp.deltaY * op;
+             if (this.customComputeDeltaFromMouseWheel) Op = this.customComputeDeltaFromMouseWheel(Ip, this, cp);
+             else if (this.wheelDeltaPercentage) {
+               if (Op = this._computeDeltaFromMouseWheelLegacyEvent(Ip, this.camera.radius), Op > 0) {
+                 const pp = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
+                 let ip = this.camera.radius,
+                   cp = pp + Op;
+ ... (20 more added lines; see GitHub link above)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L401-L410` → after: `L1061-L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1061-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L1061-L1062) · [Before (L401-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L401-L410)

```diff
-         this._textures = {}, this._internalTextures = {}, super.dispose(CC, zC, ZC)
-       }
-       serialize() {
-         const CC = QC.d.Serialize(this);
-         let zC;
-         for (zC in CC.customType = "BABYLON.ShaderMaterial", CC.uniqueId = this.uniqueId, CC.options = this._options, CC.shaderPath = this._shaderPath, CC.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, CC.stencil = this.stencil.serialize(), CC.textures = {}, this._texture … [truncated]
-         for (zC in CC.textureArrays = {}, this._textureArrays) {
-           CC.textureArrays[zC] = [];
-           const ZC = this._textureArrays[zC];
-           for (let QC = 0; QC < ZC.length; QC++) CC.textureArrays[zC].push(ZC[QC].serialize())
+         getClassName() {
+           return "ArcRotateCameraMouseWheelInput"
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L412-L418` → after: `L1064-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L1064-L1065) · [Before (L412-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L412-L418)

```diff
-         for (zC in CC.ints = {}, this._ints) CC.ints[zC] = this._ints[zC];
-         for (zC in CC.uints = {}, this._uints) CC.uints[zC] = this._uints[zC];
-         for (zC in CC.floats = {}, this._floats) CC.floats[zC] = this._floats[zC];
-         for (zC in CC.floatsArrays = {}, this._floatsArrays) CC.floatsArrays[zC] = this._floatsArrays[zC];
-         for (zC in CC.colors3 = {}, this._colors3) {
-           const ZC = this._colors3[zC];
-           CC.colors3[zC] = [ZC.r, ZC.g, ZC.b]
+         getSimpleName() {
+           return "mousewheel"
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L420-L423` → after: `L1067-L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1067-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L1067-L1070) · [Before (L420-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L420-L423)

```diff
-         for (zC in CC.colors3Arrays = {}, this._colors3Arrays) CC.colors3Arrays[zC] = this._colors3Arrays[zC];
-         for (zC in CC.colors4 = {}, this._colors4) {
-           const ZC = this._colors4[zC];
-           CC.colors4[zC] = [ZC.r, ZC.g, ZC.b, ZC.a]
+         _updateHitPlane() {
+           const pp = this.camera,
+             ip = pp.target.subtract(pp.position);
+           this._hitPlane = Mp.e.FromPositionAndNormal(pp.target, ip)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L425-L428` → after: `L1072-L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1072-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L1072-L1078) · [Before (L425-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L425-L428)

```diff
-         for (zC in CC.colors4Arrays = {}, this._colors4Arrays) CC.colors4Arrays[zC] = this._colors4Arrays[zC];
-         for (zC in CC.vectors2 = {}, this._vectors2) {
-           const ZC = this._vectors2[zC];
-           CC.vectors2[zC] = [ZC.x, ZC.y]
+         _getPosition() {
+           const pp = this.camera,
+             ip = pp.Gl(),
+             cp = ip.createPickingRay(ip.pointerX, ip.pointerY, Sp.b.Identity(), pp, !1);
+           0 === pp.targetScreenOffset.x && 0 === pp.targetScreenOffset.y || (this._viewOffset.set(pp.targetScreenOffset.x, pp.targetScreenOffset.y, 0), pp.getViewMatrix().invertToRef(pp._cameraTransformMatrix), this._globalOffset = Sp.o.TransformNormal(this._viewOffset, pp._camer … [truncated]
+           let Op = 0;
+           return this._hitPlane && (Op = cp.intersectsPlane(this._hitPlane) ?? 0), cp.origin.addInPlace(cp.direction.scaleInPlace(Op))
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L430-L432` → after: `L1080-L1095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1080-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L1080-L1095) · [Before (L430-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L430-L432)

```diff
-         for (zC in CC.vectors3 = {}, this._vectors3) {
-           const ZC = this._vectors3[zC];
-           CC.vectors3[zC] = [ZC.x, ZC.y, ZC.z]
+         _zoomToMouse(pp) {
+           const ip = this.camera,
+             cp = 1 - ip.inertia,
+             Op = ip.movement.getFrameIndependentInputScale(ip.inertia);
+           if (ip.lowerRadiusLimit) {
+             const op = ip.lowerRadiusLimit ?? 0;
+             ip.radius - (this._zoomToMouseRadiusOffset + pp * Op) / cp < op && (pp = ((ip.radius - op) * cp - this._zoomToMouseRadiusOffset) / Op)
+           }
+           if (ip.upperRadiusLimit) {
+             const op = ip.upperRadiusLimit ?? 0;
+             ip.radius - (this._zoomToMouseRadiusOffset + pp * Op) / cp > op && (pp = ((ip.radius - op) * cp - this._zoomToMouseRadiusOffset) / Op)
+           }
+           const op = pp / cp / ip.radius,
+             Ip = this._getPosition(),
+             xp = Sp.i.Zy[6];
+           Ip.subtractToRef(ip.target, xp), xp.scaleInPlace(op), xp.scaleInPlace(cp), xp.scaleInPlace(Op), this._inertialPanning.addInPlace(xp), this._zoomToMouseRadiusOffset += pp * Op
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L434-L436` → after: `L1097-L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1097-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L1097-L1098) · [Before (L434-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L434-L436)

```diff
-         for (zC in CC.vectors4 = {}, this._vectors4) {
-           const ZC = this._vectors4[zC];
-           CC.vectors4[zC] = [ZC.x, ZC.y, ZC.z, ZC.w]
+         _zeroIfClose(pp) {
+           Math.abs(pp.x) < Pp.b && (pp.x = 0), Math.abs(pp.y) < Pp.b && (pp.y = 0), Math.abs(pp.z) < Pp.b && (pp.z = 0)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L438-L470` → after: `L1100-L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1100-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L1100-L1145) · [Before (L438-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L438-L470)

```diff
-         for (zC in CC.quaternions = {}, this._quaternions) CC.quaternions[zC] = this._quaternions[zC].VZC();
-         for (zC in CC.matrices = {}, this._matrices) CC.matrices[zC] = this._matrices[zC].VZC();
-         for (zC in CC.matrixArray = {}, this._matrixArrays) CC.matrixArray[zC] = this._matrixArrays[zC];
-         for (zC in CC.matrices3x3 = {}, this._matrices3x3) CC.matrices3x3[zC] = this._matrices3x3[zC];
-         for (zC in CC.matrices2x2 = {}, this._matrices2x2) CC.matrices2x2[zC] = this._matrices2x2[zC];
-         for (zC in CC.vectors2Arrays = {}, this._vectors2Arrays) CC.vectors2Arrays[zC] = this._vectors2Arrays[zC];
-         for (zC in CC.vectors3Arrays = {}, this._vectors3Arrays) CC.vectors3Arrays[zC] = this._vectors3Arrays[zC];
-         for (zC in CC.vectors4Arrays = {}, this._vectors4Arrays) CC.vectors4Arrays[zC] = this._vectors4Arrays[zC];
-         for (zC in CC.quaternionsArrays = {}, this._quaternionsArrays) CC.quaternionsArrays[zC] = this._quaternionsArrays[zC];
-         return CC
-       }
-     }
- 
-     function GC(CC, zC, ZC) {
-       const wC = QC.d.Parse((() => new PC(CC.name, zC, CC.shaderPath, CC.options, CC.storeEffectOnSubMeshes)), CC, zC, ZC);
-       let nC;
- ... (17 more removed lines; see GitHub link above)
+       }, (() => {
+         const Sp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         ip = [(0, op.K)()], cp = [(0, op.K)()], Ip = [(0, op.K)()], (0, Op.j)(null, null, ip, {
+           kind: "field",
+           name: "wheelPrecision",
+           static: !1,
+           private: !1,
+           access: {
+             has: pp => "wheelPrecision" in pp,
+             get: pp => pp.wheelPrecision,
+             set: (pp, ip) => {
+               pp.wheelPrecision = ip
+             }
+           },
+           metadata: Sp
+         }, Lp, Yp), (0, Op.j)(null, null, cp, {
+ ... (30 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L473-L488` → after: `L1155-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1155-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L1155-L1156) · [Before (L473-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L473-L488)

```diff
-       for (nC in CC.colors3Arrays) {
-         const zC = CC.colors3Arrays[nC].reduce(((CC, zC, ZC) => (ZC % 3 === 0 ? CC.push([zC]) : CC[CC.length - 1].push(zC), CC)), []).map((CC => ({
-           r: CC[0],
-           g: CC[1],
-           b: CC[2]
-         })));
-         wC.setColor3Array(nC, zC)
-       }
-       for (nC in CC.colors4) {
-         const zC = CC.colors4[nC];
-         wC.setColor4(nC, {
-           r: zC[0],
-           g: zC[1],
-           b: zC[2],
-           a: zC[3]
-         })
+       addMouseWheel() {
+         return this.add(new Ep), this
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L490-L504` → after: `L1158-L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1158-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L1158-L1159) · [Before (L490-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L490-L504)

```diff
-       for (nC in CC.colors4Arrays) {
-         const zC = CC.colors4Arrays[nC].reduce(((CC, zC, ZC) => (ZC % 4 === 0 ? CC.push([zC]) : CC[CC.length - 1].push(zC), CC)), []).map((CC => ({
-           r: CC[0],
-           g: CC[1],
-           b: CC[2],
-           a: CC[3]
-         })));
-         wC.setColor4Array(nC, zC)
-       }
-       for (nC in CC.vectors2) {
-         const zC = CC.vectors2[nC];
-         wC.setVector2(nC, {
-           x: zC[0],
-           y: zC[1]
-         })
+       addPointers() {
+         return this.add(new mp), this
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L506-L512` → after: `L1161-L1162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1161-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L1161-L1162) · [Before (L506-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L506-L512)

```diff
-       for (nC in CC.vectors3) {
-         const zC = CC.vectors3[nC];
-         wC.setVector3(nC, {
-           x: zC[0],
-           y: zC[1],
-           z: zC[2]
-         })
+       addKeyboard() {
+         return this.add(new qp), this
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L514-L521` → after: `L1164-L1220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1164-L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L1164-L1220) · [Before (L514-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L514-L521)

```diff
-       for (nC in CC.vectors4) {
-         const zC = CC.vectors4[nC];
-         wC.setVector4(nC, {
-           x: zC[0],
-           y: zC[1],
-           z: zC[2],
-           w: zC[3]
-         })
+     }(Xp = Jp.prototype).addVRDeviceOrientation ?? (Xp.addVRDeviceOrientation = (0, Qp.k)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (lp = Jp.prototype).addGamepad ?? (lp.addGamepad = (0, Qp.k)("ArcRotateCameraInputsManager", "addGamepad"));
+     var Bp = cp(37368),
+       Np = cp(40430),
+       Tp = cp(40432);
+     class fp extends Np.d {
+       constructor(pp, ip, cp) {
+         super(pp, ip, cp), this.input = new Tp.c({
+           pan: (pp, ip) => {
+             this.panAccumulatedPixels.x += pp, this.panAccumulatedPixels.y += ip
+           },
+           rotate: (pp, ip) => {
+             this.rotationAccumulatedPixels.x += pp, this.rotationAccumulatedPixels.y += ip
+           },
+           zoom: pp => {
+             this.zoomAccumulatedPixels += pp
+           }
+ ... (41 more added lines; see GitHub link above)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L548-L561` → after: `L1223-L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1223-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L1223-L1225) · [Before (L548-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L548-L561)

```diff
-     async function AC(CC, zC) {
-       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
-       const QC = this?.SnippetUrl ?? PC.SnippetUrl;
-       return await new Promise(((wC, bC) => {
-         const nC = new qC.d;
-         nC.addEventListener("readystatechange", (() => {
-           if (4 == nC.readyState)
-             if (200 == nC.status) {
-               const QC = JSON.parse(JSON.parse(nC.responseText).jsonPayload),
-                 bC = GC(JSON.parse(QC.shaderMaterial), zC || WC.c.LastCreatedScene, ZC);
-               bC.snippetId = CC, wC(bC)
-             } else bC("Unable to load the snippet " + CC)
-         })), nC.open("GET", QC + "/" + CC.replace(/#/g, "/")), nC.send()
-       }))
+ 
+     function bp(pp, ip) {
+       return isNaN(pp) ? ip : pp
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L563-L565` → after: `L1227-L2232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R1227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L1227-L2232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L1227-L2232) · [Before (L563-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L563-L565)

```diff
-     PC.SnippetUrl = "https://snippet.babylonjs.com";
-     const xC = AC;
-     let JC = !1;
+     let hp = (() => {
+         var pp;
+         let ip, cp, Lp, Dp, Ap, yp, Up, dp, jp, kp, mp, Rp, qp, Mp, Cp, Ep, Xp, lp, Qp, Bp, Np, Tp, hp, ap, np, Fp, gp, Gp, rp = Hp.f,
+           Zp = [],
+           zp = [],
+           sp = [],
+           Kp = [],
+           Vp = [],
+           ii = [],
+           ci = [],
+           Oi = [],
+           oi = [],
+           Ii = [],
+           Si = [],
+           xi = [],
+           Li = [],
+ ... (990 more added lines; see GitHub link above)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L568` → after: `L2235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R2235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/264.js#L2235) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/264.js#L568)

```diff
-       JC || (JC = !0, PC.Parse = GC, PC.ParseFromFileAsync = RC, PC.ParseFromSnippetAsync = AC, PC.CreateFromSnippetAsync = xC, (0, SC.d)("BABYLON.ShaderMaterial", PC))
+       Ap || (Ap = !0, Lp.b.AddNodeConstructor("Light_Type_3", ((pp, ip) => () => new Dp(pp, Ip.o.Zero(), ip))), (0, Yp.g)("BABYLON.HemisphericLight", Dp))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/265.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/265.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250)

#### 1. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L5-L27` → after: `L4-L2730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L4-L2730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/265.js#L4-L2730) · [Before (L5-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/265.js#L5-L27)

```diff
-   40325: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       FirebaseError: () => QC.e,
-       SDK_VERSION: () => QC.i,
-       _DEFAULT_ENTRY_NAME: () => QC.m,
-       sZC: () => QC.o,
-       _addOrOverwriteComponent: () => QC.q,
-       _apps: () => QC.u,
-       _clearComponents: () => QC.y,
-       _components: () => QC.C,
-       _getProvider: () => QC.D,
-       _registerComponent: () => QC.H,
-       _removeServiceInstance: () => QC.I,
-       deleteApp: () => QC.M,
-       getApp: () => QC.S,
-       getApps: () => QC.Q,
- ... (7 more removed lines; see GitHub link above)
+   40562: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => op
+     });
+     var Op = cp(40217);
+ 
+     function op(pp) {
+       return class extends pp {
+         constructor() {
+           super(...arguments);
+           const pp = new.target;
+           if (!pp[Symbol.metadata]) {
+             const ip = Object.getPrototypeOf(pp)?.[Symbol.metadata];
+             pp[Symbol.metadata] = ip ? Object.create(ip) : {}
+           }
+           const ip = (0, Op.c)(pp[Symbol.metadata]);
+ ... (2711 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/266.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/266.js` (87 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927)

#### 1. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L5` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L4) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L5)

```diff
-   40340: (CC, zC, ZC) => {
+   40489: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L7-L30` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L6) · [Before (L7-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L7-L30)

```diff
-       D: () => dC,
-       E: () => WC,
-       H: () => FC,
-       I: () => NC,
-       L: () => sC,
-       O: () => gC,
-       R: () => pC,
-       U: () => vC,
-       X: () => GC,
-       _: () => RC,
-       cb: () => SC,
-       d: () => MC,
-       g: () => IC,
-       gb: () => PC,
-       hb: () => YC,
-       j: () => JC,
- ... (8 more removed lines; see GitHub link above)
+       e: () => Op
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L32-L37` → after: `L8-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L8-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L8-L65) · [Before (L32-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L32-L37)

```diff
-     const QC = function(CC) {
-         const zC = [];
-         let ZC = 0;
-         for (let QC = 0; QC < CC.length; QC++) {
-           let wC = CC.charCodeAt(QC);
-           wC < 128 ? zC[ZC++] = wC : wC < 2048 ? (zC[ZC++] = wC >> 6 | 192, zC[ZC++] = 63 & wC | 128) : 55296 === (64512 & wC) && QC + 1 < CC.length && 56320 === (64512 & CC.charCodeAt(QC + 1)) ? (wC = 65536 + ((1023 & wC) << 10) + (1023 & CC.charCodeAt(++QC)), zC[ZC++] = wC >> 1 … [truncated]
+     class Op {
+       constructor(pp, ip, cp) {
+         this.bu = pp, this.bv = ip, this.distance = cp, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
+       }
+     }
+   },
+   40504: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Sp
+     });
+     var Op = cp(37329),
+       op = cp(37320),
+       Ip = cp(37324);
+     class Sp {
+       constructor(pp, ip, cp) {
+         this.vectors = (0, Op.d)(8, op.o.Zero), this.center = op.o.Zero(), this.centerWorld = op.o.Zero(), this.extendSize = op.o.Zero(), this.extendSizeWorld = op.o.Zero(), this.directions = (0, Op.d)(3, op.o.Zero), this.vectorsWorld = (0, Op.d)(8, op.o.Zero), this.minimumWorld  … [truncated]
+ ... (42 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L39` → after: `L67-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L67-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L67-L213) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L39)

```diff
-         return zC
+         op.o.FromArrayToRef(pp.m, 0, Op[0]), op.o.FromArrayToRef(pp.m, 4, Op[1]), op.o.FromArrayToRef(pp.m, 8, Op[2]), this._worldMatrix = pp
+       }
+       isInFrustum(pp) {
+         return Sp.IsInFrustum(this.vectorsWorld, pp)
+       }
+       isCompletelyInFrustum(pp) {
+         return Sp.IsCompletelyInFrustum(this.vectorsWorld, pp)
+       }
+       intersectsPoint(pp) {
+         const ip = this.minimumWorld,
+           cp = this.maximumWorld,
+           Op = ip.x,
+           op = ip.y,
+           Sp = ip.z,
+           xp = cp.x,
+           Lp = cp.y,
+ ... (131 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L42-L69` → after: `L216-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L216-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L216-L379) · [Before (L42-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L42-L69)

```diff
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
-         encodeByteArray(CC, zC) {
-           if (!Array.isArray(CC)) throw Error("encodeByteArray takes an array as a parameter");
-           this.init_();
-           const ZC = zC ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
- ... (12 more removed lines; see GitHub link above)
+         min: 0,
+         max: 0
+       },
+       Yp = (pp, ip, cp) => {
+         const Op = op.o.Dot(ip.centerWorld, pp),
+           Ip = Math.abs(op.o.Dot(ip.directions[0], pp)) * ip.extendSize.x + Math.abs(op.o.Dot(ip.directions[1], pp)) * ip.extendSize.y + Math.abs(op.o.Dot(ip.directions[2], pp)) * ip.extendSize.z;
+         cp.min = Op - Ip, cp.max = Op + Ip
+       },
+       Dp = (pp, ip, cp) => (Yp(pp, ip, xp), Yp(pp, cp, Lp), !(xp.min > Lp.max || Lp.min > xp.max));
+     class Ap {
+       constructor(pp, ip, cp) {
+         this._isLocked = !1, this.boundingBox = new Ip.d(pp, ip, cp), this.Yop = new Sp(pp, ip, cp)
+       }
+       reConstruct(pp, ip, cp) {
+         this.boundingBox.reConstruct(pp, ip, cp), this.Yop.reConstruct(pp, ip, cp)
+       }
+ ... (148 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L71-L77` → after: `L381-L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L381-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L381-L999) · [Before (L71-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L71-L77)

```diff
-           return QC.join("")
-         },
-         encodeString(CC, zC) {
-           return this.HAS_NATIVE_SUPPORT && !zC ? btoa(CC) : this.encodeByteArray(QC(CC), zC)
-         },
-         decodeString(CC, zC) {
-           return this.HAS_NATIVE_SUPPORT && !zC ? atob(CC) : function(CC) {
+         } else {
+           const ip = this._defines[this._currentRank];
+           if (ip)
+             for (let cp = 0; cp < ip.length; cp++) pp = pp.replace("#define " + ip[cp], "");
+           this._currentRank++
+         }
+         return pp
+       }
+     }
+   },
+   40476: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => tp
+     });
+     var Op = cp(40203),
+       op = cp(40210),
+ ... (603 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L79-L94` → after: `L1001-L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1001-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1001-L1003) · [Before (L79-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L79-L94)

```diff
-             let ZC = 0,
-               QC = 0;
-             for (; ZC < CC.length;) {
-               const wC = CC[ZC++];
-               if (wC < 128) zC[QC++] = String.fromCharCode(wC);
-               else if (wC > 191 && wC < 224) {
-                 const bC = CC[ZC++];
-                 zC[QC++] = String.fromCharCode((31 & wC) << 6 | 63 & bC)
-               } else if (wC > 239 && wC < 365) {
-                 const bC = ((7 & wC) << 18 | (63 & CC[ZC++]) << 12 | (63 & CC[ZC++]) << 6 | 63 & CC[ZC++]) - 65536;
-                 zC[QC++] = String.fromCharCode(55296 + (bC >> 10)), zC[QC++] = String.fromCharCode(56320 + (1023 & bC))
-               } else {
-                 const bC = CC[ZC++],
-                   nC = CC[ZC++];
-                 zC[QC++] = String.fromCharCode((15 & wC) << 12 | (63 & bC) << 6 | 63 & nC)
-               }
+             for (const ip in this.meshMap) {
+               const cp = this.meshMap[ip];
+               cp && pp.push(cp)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L96-L116` → after: `L1005-L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1005-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1005-L1026) · [Before (L96-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L96-L116)

```diff
-             return zC.join("")
-           }(this.decodeStringToByteArray(CC, zC))
-         },
-         decodeStringToByteArray(CC, zC) {
-           this.init_();
-           const ZC = zC ? this.charToByteMapWebSafe_ : this.charToByteMap_,
-             QC = [];
-           for (let wC = 0; wC < CC.length;) {
-             const zC = ZC[CC.charAt(wC++)],
-               nC = wC < CC.length ? ZC[CC.charAt(wC)] : 0;
-             ++wC;
-             const fC = wC < CC.length ? ZC[CC.charAt(wC)] : 64;
-             ++wC;
-             const oC = wC < CC.length ? ZC[CC.charAt(wC)] : 64;
-             if (++wC, null == zC || null == nC || null == fC || null == oC) throw new bC;
-             const qC = zC << 2 | nC >> 4;
- ... (5 more removed lines; see GitHub link above)
+             return pp
+           }
+           return this._scene.meshes.filter((pp => pp.material === this))
+         }
+         forceCompilation(pp, ip, cp, Op) {
+           const op = {
+               clipPlane: !1,
+               useInstances: !1,
+               ...cp
+             },
+             Ip = this.Gl(),
+             Sp = this.allowShaderHotSwapping;
+           this.allowShaderHotSwapping = !1;
+           const xp = () => {
+             if (!this._scene || !this._scene.gy()) return;
+             const cp = Ip.clipPlane;
+ ... (6 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L118` → after: `L1028-L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1028-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1028-L1106) · [Before (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L118)

```diff
-             }
+               cp && (this.allowShaderHotSwapping = Sp, Ip && Op && Op(Ip), ip && ip(this))
+             } else this.isReady() ? (this.allowShaderHotSwapping = Sp, ip && ip(this)) : setTimeout(xp, 16);
+             op.clipPlane && (Ip.clipPlane = cp)
+           };
+           xp()
+         }
+         async forceCompilationAsync(pp, ip) {
+           return await new Promise(((cp, Op) => {
+             this.forceCompilation(pp, (() => {
+               cp()
+             }), ip, (pp => {
+               Op(pp)
+             }))
+           }))
+         }
+         ocp(ip) {
+ ... (63 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L120-L125` → after: `L1108-L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1108-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1108-L1116) · [Before (L120-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L120-L125)

```diff
-           return QC
-         },
-         init_() {
-           if (!this.byteToCharMap_) {
-             this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
-             for (let CC = 0; CC < this.ENCODED_VALS.length; CC++) this.byteToCharMap_[CC] = this.ENCODED_VALS.charAt(CC), this.charToByteMap_[this.byteToCharMap_[CC]] = CC, this.byteToCharMapWebSafe_[CC] = this.ENCODED_VALS_WEBSAFE.charAt(CC), this.charToByteMapWebSafe_[this.byte … [truncated]
+         }
+         setPrePassRenderer(pp) {
+           return !1
+         }
+         dispose(pp, ip, cp) {
+           const Op = this.Gl();
+           if (Op.stopAnimation(this), Op.freeProcessedMaterials(), Op.removeMaterial(this), this._eventInfo.forceDisposeTextures = ip, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
+             const pp = this._parentContainer.materials.indexOf(this);
+             pp > -1 && this._parentContainer.materials.splice(pp, 1), this._parentContainer = null
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L128-L144` → after: `L1129-L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1129-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1129-L1144) · [Before (L128-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L128-L144)

```diff
-       };
-     class bC extends Error {
-       constructor() {
-         super(...arguments), this.name = "DecodeBase64StringError"
-       }
-     }
-     const nC = function(CC) {
-         return function(CC) {
-           const zC = QC(CC);
-           return wC.encodeByteArray(zC, !0)
-         }(CC).replace(/\./g, "")
-       },
-       fC = function(CC) {
-         try {
-           return wC.decodeString(CC, !0)
-         } catch (zC) {
- ... (1 more removed lines; see GitHub link above)
+         _disposeMeshResources(pp) {
+           if (!pp) return;
+           const ip = pp.geometry,
+             cp = pp._internalAbstractMeshDataInfo._materialForRenderPass;
+           if (this._storeEffectOnSubMeshes) {
+             if (pp.Am && cp)
+               for (const Op of pp.Am) {
+                 const pp = Op._drawWrappers;
+                 for (let op = 0; op < pp.length; op++) {
+                   const Ip = pp[op]?.effect;
+                   if (!Ip) continue;
+                   cp[op] === this && (ip?._releaseVertexArrayObject(Ip), Op._removeDrawWrapper(op, !0, !0))
+                 }
+               }
+           } else ip?._releaseVertexArrayObject(this._drawWrapper.effect);
+           pp.material !== this || pp.aop || (pp.material = null)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L146-L164` → after: `L1146-L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1146-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1146-L1173) · [Before (L146-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L146-L164)

```diff
-         return null
-       };
-     const oC = () => function() {
-         if ("undefined" !== typeof self) return self;
-         if ("undefined" !== typeof window) return window;
-         if ("undefined" !== typeof ZC.g) return ZC.g;
-         throw new Error("Unable to locate global object.")
-       }().__FIREBASE_DEFAULTS__,
-       qC = () => {
-         try {
-           return oC() || (() => {
-             if ("undefined" === typeof process) return
-           })() || (() => {
-             if ("undefined" === typeof document) return;
-             let CC;
-             try {
- ... (3 more removed lines; see GitHub link above)
+         serialize() {
+           const pp = Wp.c.Serialize(this);
+           return pp.stencil = this.stencil.serialize(), pp.uniqueId = this.uniqueId, this._serializePlugins(pp), pp
+         }
+         _serializePlugins(pp) {
+           if (pp.plugins = {}, this.pluginManager)
+             for (const ip of this.pluginManager._plugins) ip.doNotSerialize || (pp.plugins[ip.getClassName()] = ip.serialize())
+         }
+         static ParseAlphaMode(pp, ip) {
+           void 0 !== pp._alphaMode ? ip._alphaMode = Array.isArray(pp._alphaMode) ? [...pp._alphaMode] : [pp._alphaMode] : void 0 !== pp.alphaMode ? ip._alphaMode = Array.isArray(pp.alphaMode) ? [...pp.alphaMode] : [pp.alphaMode] : ip._alphaMode = [2]
+         }
+         static Parse(ip, cp, Op) {
+           if (ip.customType) {
+             if ("BABYLON.PBRMaterial" === ip.customType && ip.overloadedAlbedo && (ip.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return Dp.e.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials  … [truncated]
+           } else ip.customType = "BABYLON.StandardMaterial";
+           const op = Ip.i.Instantiate(ip.customType).Parse(ip, cp, Op);
+ ... (12 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L172-L184` → after: `L1176-L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1176-L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1176-L1563) · [Before (L172-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L172-L184)

```diff
-       },
-       FC = CC => {
-         var zC, ZC;
-         return null === (ZC = null === (zC = qC()) || void 0 === zC ? void 0 : zC.emulatorHosts) || void 0 === ZC ? void 0 : ZC[CC]
-       },
-       WC = () => {
-         var CC;
-         return null === (CC = qC()) || void 0 === CC ? void 0 : CC.config
-       },
-       NC = CC => {
-         var zC;
-         return null === (zC = qC()) || void 0 === zC ? void 0 : zC[`_${CC}`]
-       };
+       }, (() => {
+         const Ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         ip = [(0, op.K)()], cp = [(0, op.K)()], vp = [(0, op.K)()], tp = [(0, op.K)()], Hp = [(0, op.K)()], dp = [(0, op.K)()], ep = [(0, op.K)()], jp = [(0, op.K)("alpha")], kp = [(0, op.K)("backFaceCulling")], mp = [(0, op.K)("textureRepetitionMode")], Rp = [(0, op.K)("textureR … [truncated]
+           kind: "getter",
+           name: "pointsCloud",
+           static: !1,
+           private: !1,
+           access: {
+             has: pp => "pointsCloud" in pp,
+             get: pp => pp.pointsCloud
+           },
+           metadata: Ip
+         }, null, Gp), (0, Op.j)(pp, null, ap, {
+           kind: "getter",
+           name: "fillMode",
+           static: !1,
+ ... (372 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L186-L189` → after: `L1565-L1566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1565-L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1565-L1566) · [Before (L186-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L186-L189)

```diff
-       constructor() {
-         this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise(((CC, zC) => {
-           this.resolve = CC, this.reject = zC
-         }))
+       static get DiffuseTextureEnabled() {
+         return this._DiffuseTextureEnabled
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L191-L194` → after: `L1568-L1713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1568-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1568-L1713) · [Before (L191-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L191-L194)

```diff
-       wrapCallback(CC) {
-         return (zC, ZC) => {
-           zC ? this.reject(zC) : this.resolve(ZC), "function" === typeof CC && (this.promise.catch((() => {})), 1 === CC.length ? CC(zC) : CC(zC, ZC))
-         }
+       static set DiffuseTextureEnabled(pp) {
+         this._DiffuseTextureEnabled !== pp && (this._DiffuseTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+       }
+       static get BaseWeightTextureEnabled() {
+         return this._BaseWeightTextureEnabled
+       }
+       static set BaseWeightTextureEnabled(pp) {
+         this._BaseWeightTextureEnabled !== pp && (this._BaseWeightTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+       }
+       static get BaseDiffuseRoughnessTextureEnabled() {
+         return this._BaseDiffuseRoughnessTextureEnabled
+       }
+       static set BaseDiffuseRoughnessTextureEnabled(pp) {
+         this._BaseDiffuseRoughnessTextureEnabled !== pp && (this._BaseDiffuseRoughnessTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+       }
+       static get DetailTextureEnabled() {
+ ... (130 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L198-L199` → after: `L1776-L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1776-L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1776-L1778) · [Before (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L198-L199)

```diff
-     function gC() {
-       return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : ""
+     function Ap(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       cp && pp.fogEnabled && (!ip || ip.applyFog) && 0 !== pp.fogMode && (cp.setFloat4("vFogInfos", pp.fogMode, pp.fogStart, pp.fogEnd, pp.fogDensity), Op ? (pp.fogColor.toLinearSpaceToRef(Yp, pp.gy().useExactSrgbConversions), cp.setColor3("vFogColor", Yp)) : cp.setColor3("vFogCo … [truncated]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L202-L203` → after: `L1781-L1783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1781-L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1781-L1783) · [Before (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L202-L203)

```diff
-     function SC() {
-       return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gC())
+     function Pp(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp) {
+       const Ap = pp.numMaxInfluencers || pp.numInfluencers;
+       return Ap <= 0 ? 0 : (ip.push("#define MORPHTARGETS"), pp.hasPositions && ip.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), pp.hasNormals && ip.push("#define MORPHTARGETTEXTURE_HASNORMALS"), pp.hasTangents && ip.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), pp.hasUVs && … [truncated]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L206-L208` → after: `L1786-L1800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1786-L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1786-L1800) · [Before (L206-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L206-L208)

```diff
-     function pC() {
-       const CC = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
-       return "object" === typeof CC && void 0 !== CC.id
+     function Wp(pp, ip, cp) {
+       let Ip = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+       const Sp = cp.NUM_MORPH_INFLUENCERS;
+       if (Sp > 0 && op.e.LastCreatedEngine) {
+         const xp = op.e.LastCreatedEngine.getCaps().maxVertexAttribs,
+           Lp = ip.morphTargetManager;
+         if (Lp?.isUsingTextureForTargets) return;
+         const Yp = Lp && Lp.supportsPositions && Ip,
+           Dp = Lp && Lp.supportsNormals && cp.NORMAL,
+           Ap = Lp && Lp.supportsTangents && cp.TANGENT,
+           Pp = Lp && Lp.supportsUVs && cp.UV1,
+           Wp = Lp && Lp.supportsUV2s && cp.UV2,
+           yp = Lp && Lp.supportsColors && cp.VERTEXCOLOR;
+         for (let cp = 0; cp < Sp; cp++) Yp && pp.push("position" + cp), Dp && pp.push("normal" + cp), Ap && pp.push("tangent" + cp), Pp && pp.push("uv_" + cp), Wp && pp.push("uv2_" + cp), yp && pp.push("color" + cp), pp.length > xp && Op.e.Error("Cannot add more vertex attributes … [truncated]
+       }
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L211-L212` → after: `L1803-L1805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1803-L1805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1803-L1805) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L211-L212)

```diff
-     function PC() {
-       return "object" === typeof navigator && "ReactNative" === navigator.product
+     function yp(pp) {
+       let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+       pp.push("world0"), pp.push("world1"), pp.push("world2"), pp.push("world3"), ip && (pp.push("previousWorld0"), pp.push("previousWorld1"), pp.push("previousWorld2"), pp.push("previousWorld3"))
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L215-L217` → after: `L1808-L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1808-L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1808-L1810) · [Before (L215-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L215-L217)

```diff
-     function GC() {
-       const CC = gC();
-       return CC.indexOf("MSIE ") >= 0 || CC.indexOf("Trident/") >= 0
+     function Up(pp, ip) {
+       const cp = pp.morphTargetManager;
+       pp && cp && ip.setFloatArray("morphTargetInfluences", cp.influences)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L220-L225` → after: `L1813-L1814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1813-L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1813-L1814) · [Before (L220-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L220-L225)

```diff
-     function RC() {
-       try {
-         return "object" === typeof indexedDB
-       } catch (CC) {
-         return !1
-       }
+     function wp(pp, ip) {
+       ip.bindToEffect(pp, "Scene")
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L228-L243` → after: `L1817-L1829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1817-L1829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1817-L1829) · [Before (L228-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L228-L243)

```diff
-     function AC() {
-       return new Promise(((CC, zC) => {
-         try {
-           let ZC = !0;
-           const QC = "validate-browser-context-for-indexeddb-analytics-module",
-             wC = self.indexedDB.open(QC);
-           wC.onsuccess = () => {
-             wC.result.close(), ZC || self.indexedDB.deleteDatabase(QC), CC(!0)
-           }, wC.onupgradeneeded = () => {
-             ZC = !1
-           }, wC.onerror = () => {
-             var CC;
-             zC((null === (CC = wC.error) || void 0 === CC ? void 0 : CC.message) || "")
-           }
-         } catch (ZC) {
-           zC(ZC)
+     function vp(pp, ip, cp, Op) {
+       let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+         Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         Sp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         Lp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         Yp = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         Dp = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
+         Ap = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
+         Pp = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
+       if (pp.texturesEnabled && op && xp.c.ReflectionTextureEnabled) {
+         if (cp.I3("reflectionMatrix", op.getReflectionTextureMatrix()), cp.updateFloat2("vReflectionInfos", op.level * pp.iblIntensity, Pp), Lp && op.boundingBoxSize) {
+           const pp = op;
+           cp.updateVector3("vReflectionPosition", pp.boundingBoxPosition), cp.updateVector3("vReflectionSize", pp.boundingBoxSize)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L245` → after: `L1831-L1845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1831-L1845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1831-L1845) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L245)

```diff
-       }))
+         if (Ip) {
+           const pp = op.getSize().width;
+           cp.updateFloat2("vReflectionFilteringInfo", pp, Math.log2(pp))
+         }
+         if (Dp && !ip.USEIRRADIANCEMAP) {
+           const pp = op.sphericalPolynomial;
+           if (ip.USESPHERICALFROMREFLECTIONMAP && pp)
+             if (ip.SPHERICAL_HARMONICS) {
+               const ip = pp.preScaledHarmonics;
+               cp.updateVector3("vSphericalL00", ip.l00), cp.updateVector3("vSphericalL1_1", ip.l1_1), cp.updateVector3("vSphericalL10", ip.l10), cp.updateVector3("vSphericalL11", ip.l11), cp.updateVector3("vSphericalL2_2", ip.l2_2), cp.updateVector3("vSphericalL2_1", ip.l2_1), cp … [truncated]
+             } else cp.updateFloat3("vSphericalX", pp.x.x, pp.x.y, pp.x.z), cp.updateFloat3("vSphericalY", pp.y.x, pp.y.y, pp.y.z), cp.updateFloat3("vSphericalZ", pp.z.x, pp.z.y, pp.z.z), cp.updateFloat3("vSphericalXX_ZZ", pp.xx.x - pp.zz.x, pp.xx.y - pp.zz.y, pp.xx.z - pp.zz.z),  … [truncated]
+         } else Yp && ip.USEIRRADIANCEMAP && ip.USE_IRRADIANCE_DOMINANT_DIRECTION && op.irradianceTexture && cp.updateVector3("vReflectionDominantDirection", op.irradianceTexture._dominantDirection);
+         Sp && cp.updateFloat3("vReflectionMicrosurfaceInfos", op.getSize().width, op.lodGenerationScale, op.lodGenerationOffset)
+       }
+       Ap && cp.updateColor3("vReflectionColor", Op)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L248-L253` → after: `L1848-L1854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1848-L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1848-L1854) · [Before (L248-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L248-L253)

```diff
-     function xC() {
-       return !("undefined" === typeof navigator || !navigator.cookieEnabled)
-     }
-     class JC extends Error {
-       constructor(CC, zC, ZC) {
-         super(zC), this.code = CC, this.customData = ZC, this.name = "FirebaseError", Object.setPrototypeOf(this, JC.prototype), Error.captureStackTrace && Error.captureStackTrace(this, IC.prototype.create)
+     function tp(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+         op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+       if (Op && xp.c.ReflectionTextureEnabled) {
+         ip.LODBASEDMICROSFURACE ? cp.setTexture("reflectionSampler", Op) : (cp.setTexture("reflectionSampler", Op._lodTextureMid || Op), cp.setTexture("reflectionSamplerLow", Op._lodTextureLow || Op), cp.setTexture("reflectionSamplerHigh", Op._lodTextureHigh || Op)), ip.USEIRRADI … [truncated]
+         const Ip = pp.iblCdfGenerator;
+         op && Ip && cp.setTexture("icdfSampler", Ip.getIcdfTexture())
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L256-L272` → after: `L1857-L1859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1857-L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1857-L1859) · [Before (L256-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L256-L272)

```diff
-     class IC {
-       constructor(CC, zC, ZC) {
-         this.service = CC, this.serviceName = zC, this.errors = ZC
-       }
-       create(CC) {
-         const zC = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
-           ZC = `${this.service}/${CC}`,
-           QC = this.errors[CC],
-           wC = QC ? function(CC, zC) {
-             return CC.replace(iC, ((CC, ZC) => {
-               const QC = zC[ZC];
-               return null != QC ? String(QC) : `<${ZC}?>`
-             }))
-           }(QC, zC) : "Error",
-           bC = `${this.serviceName}: ${wC} (${ZC}).`;
-         return new JC(ZC, bC, zC)
- ... (1 more removed lines; see GitHub link above)
+ 
+     function Hp(pp, ip, cp) {
+       ip._needUVs = !0, ip[cp] = !0, pp.optimizeUVAllocation && pp.getTextureMatrix().isIdentityAs3x2() ? (ip[cp + "DIRECTUV"] = pp.coordinatesIndex + 1, ip["MAINUV" + (pp.coordinatesIndex + 1)] = !0) : ip[cp + "DIRECTUV"] = 0
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L276-L279` → after: `L1862-L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1862-L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1862-L1864) · [Before (L276-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L276-L279)

```diff
-     function vC(CC) {
-       for (const zC in CC)
-         if (Object.prototype.hasOwnProperty.call(CC, zC)) return !1;
-       return !0
+     function dp(pp, ip, cp) {
+       const Op = pp.getTextureMatrix();
+       ip.I3(cp + "Matrix", Op)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L282-L296` → after: `L1867-L1868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1867-L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1867-L1868) · [Before (L282-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L282-L296)

```diff
-     function eC(CC, zC) {
-       if (CC === zC) return !0;
-       const ZC = Object.keys(CC),
-         QC = Object.keys(zC);
-       for (const wC of ZC) {
-         if (!QC.includes(wC)) return !1;
-         const ZC = CC[wC],
-           bC = zC[wC];
-         if (hC(ZC) && hC(bC)) {
-           if (!eC(ZC, bC)) return !1
-         } else if (ZC !== bC) return !1
-       }
-       for (const wC of QC)
-         if (!ZC.includes(wC)) return !1;
-       return !0
+     function ep(pp, ip, cp) {
+       cp.BAKED_VERTEX_ANIMATION_TEXTURE && cp.INSTANCES && pp.push("bakedVertexAnimationSettingsInstanced")
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L299-L300` → after: `L1871-L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1871-L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1871-L1882) · [Before (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L299-L300)

```diff
-     function hC(CC) {
-       return null !== CC && "object" === typeof CC
+     function jp(pp, ip, cp) {
+       var Op;
+       if (ip && pp && (pp.computeBonesUsingShaders && ip._bonesComputationForcedToCPU && (pp.computeBonesUsingShaders = !1), pp.useBones && pp.computeBonesUsingShaders && pp.skeleton)) {
+         const op = pp.skeleton;
+         if (op.isUsingTextureForMatrices && ip.getUniformIndex("boneTextureInfo") > -1) {
+           const cp = op.getTransformMatrixTexture(pp);
+           ip.setTexture("boneSampler", cp), ip.setFloat2("boneTextureInfo", op._textureWidth, op._textureHeight)
+         } else {
+           const Ip = op.getTransformMatrices(pp);
+           Ip && (ip.setMatrices("mBones", Ip), cp && pp.Gl().prePassRenderer && pp.Gl().prePassRenderer.getIndex(2) && (cp.previousBones[pp.uniqueId] || (cp.previousBones[pp.uniqueId] = Ip.slice()), ip.setMatrices("mPreviousBones", cp.previousBones[pp.uniqueId]), Op = Ip, cp.prev … [truncated]
+         }
+       }
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L303-L308` → after: `L1885-L1887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1885-L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1885-L1887) · [Before (L303-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L303-L308)

```diff
-     function KC(CC) {
-       const zC = [];
-       for (const [ZC, QC] of Object.entries(CC)) Array.isArray(QC) ? QC.forEach((CC => {
-         zC.push(encodeURIComponent(ZC) + "=" + encodeURIComponent(CC))
-       })) : zC.push(encodeURIComponent(ZC) + "=" + encodeURIComponent(QC));
-       return zC.length ? "&" + zC.join("&") : ""
+     function kp(pp, ip, cp, Op, op) {
+       let Ip = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
+       pp._bindLight(ip, cp, Op, op, Ip)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L311-L318` → after: `L1892-L1897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1892-L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1892-L1897) · [Before (L311-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L311-L318)

```diff
-     function YC(CC) {
-       const zC = {};
-       return CC.replace(/^\?/, "").split("&").forEach((CC => {
-         if (CC) {
-           const [ZC, QC] = CC.split("=");
-           zC[decodeURIComponent(ZC)] = decodeURIComponent(QC)
-         }
-       })), zC
+     function qp(pp, ip, cp, Op) {
+       let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
+       const Ip = Math.min(ip.lightSources.length, op);
+       for (let Sp = 0; Sp < Ip; Sp++) {
+         kp(ip.lightSources[Sp], Sp, pp, cp, "boolean" === typeof Op ? Op : Op.SPECULARTERM, ip.receiveShadows)
+       }
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L321-L325` → after: `L1900-L1901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1900-L1901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1900-L1901) · [Before (L321-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L321-L325)

```diff
-     function dC(CC) {
-       const zC = CC.indexOf("?");
-       if (!zC) return "";
-       const ZC = CC.indexOf("#", zC);
-       return CC.substring(zC, ZC > 0 ? ZC : void 0)
+     function Mp(pp, ip, cp, Op) {
+       cp.NUM_BONE_INFLUENCERS > 0 && (Op.addCPUSkinningFallback(0, ip), pp.push("matricesIndices"), pp.push("matricesWeights"), cp.NUM_BONE_INFLUENCERS > 4 && (pp.push("matricesIndicesExtra"), pp.push("matricesWeightsExtra")))
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L329-L330` → after: `L1905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1905) · [Before (L329-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L329-L330)

```diff
-       const ZC = new HC(CC, zC);
-       return ZC.subscribe.bind(ZC)
+       (ip.INSTANCES || ip.THIN_INSTANCES) && yp(pp, !!ip.PREPASS_VELOCITY), ip.INSTANCESCOLOR && pp.push("instanceColor")
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L332-L394` → after: `L1907-L1927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1907-L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1907-L1927) · [Before (L332-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L332-L394)

```diff
-     class HC {
-       constructor(CC, zC) {
-         this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = zC, this.task.then((() => {
-           CC(this)
-         })).catch((CC => {
-           this.error(CC)
-         }))
-       }
-       next(CC) {
-         this.forEachObserver((zC => {
-           zC.next(CC)
-         }))
-       }
-       error(CC) {
-         this.forEachObserver((zC => {
-           zC.error(CC)
- ... (47 more removed lines; see GitHub link above)
+ 
+     function Ep(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
+         Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+         op = 0;
+       for (let Ip = 0; Ip < cp && pp["LIGHT" + Ip]; Ip++) Ip > 0 && (op = Op + Ip, ip.addFallback(op, "LIGHT" + Ip)), pp.SHADOWS || (pp["SHADOW" + Ip] && ip.addFallback(Op, "SHADOW" + Ip), pp["SHADOWPCF" + Ip] && ip.addFallback(Op, "SHADOWPCF" + Ip), pp["SHADOWPCSS" + Ip] && ip.a … [truncated]
+       return op
+     }
+ 
+     function Xp(pp, ip, cp, Op, op, Ip, Sp) {
+       let xp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         Lp = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         Yp = arguments.length > 9 ? arguments[9] : void 0,
+         Dp = arguments.length > 10 ? arguments[10] : void 0;
+       if (Sp._areMiscDirty) {
+         Sp.LOGARITHMICDEPTH = cp, Sp.POINTSIZE = Op, Sp.FOG = op && function(pp, ip) {
+ ... (5 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L398-L402` → after: `L1931-L1939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1931-L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1931-L1939) · [Before (L398-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L398-L402)

```diff
-     function EC() {}
-     const lC = 1e3,
-       XC = 2,
-       cC = 144e5,
-       uC = .5;
+     function lp(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       if (!pp.lightsEnabled || Op) return !0;
+       const op = ip.lightSources,
+         Ip = Math.min(op.length, cp);
+       for (let Sp = 0; Sp < Ip; Sp++)
+         if (!op[Sp].areLightTexturesReady()) return !1;
+       return !0
+     }
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L404-L408` → after: `L1941-L1973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1941-L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1941-L1973) · [Before (L404-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L404-L408)

```diff
-     function rC(CC) {
-       let zC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : XC;
-       const ZC = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lC) * Math.pow(zC, CC),
-         QC = Math.round(uC * ZC * (Math.random() - .5) * 2);
-       return Math.min(cC, ZC + QC)
+     function Qp(pp, ip, cp, op) {
+       let Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
+         Sp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       if (!cp._areLightsDirty) return cp._needNormals;
+       const xp = Ip;
+       Ip = function(pp, ip) {
+         const cp = pp.gy().getCaps().maxUniformBuffersPerShaderStage;
+         if (null == cp) return ip;
+         const Op = Math.max(cp - mp, 1);
+         return Math.min(ip, Op)
+       }(pp, Ip);
+       let Lp = 0;
+       const Yp = {
+         needNormals: cp._needNormals,
+         needRebuild: !1,
+         lightmapMode: !1,
+ ... (17 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L411-L412` → after: `L1976-L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R1976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L1976-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L1976-L2014) · [Before (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L411-L412)

```diff
-     function sC(CC) {
-       return CC && CC._delegate ? CC._delegate : CC
+     function Jp(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+         op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
+         Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       if (ip && xp.c.ReflectionTextureEnabled) {
+         if (!ip.isReadyOrNotBlocking()) return !1;
+         cp._needNormals = !0, cp.REFLECTION = !0, cp.GAMMAREFLECTION = ip.gammaSpace, cp.RGBDREFLECTION = ip.isRGBD, cp.LODINREFLECTIONALPHA = ip.lodLevelInAlpha, cp.LINEARSPECULARREFLECTION = ip.linearSpecularLOD, cp.USEIRRADIANCEMAP = !1, cp.LODBASEDMICROSFURACE = pp.gy().getCa … [truncated]
+         const Sp = pp.gy();
+         switch (Op && op > 0 ? (cp.NUM_SAMPLES = "" + op, Sp._features.needTypeSuffixInShaderConstants && (cp.NUM_SAMPLES = cp.NUM_SAMPLES + "u"), cp.REALTIME_FILTERING = !0, pp.iblCdfGenerator && (cp.IBL_CDF_FILTERING = !0)) : cp.REALTIME_FILTERING = !1, cp.INVERTCUBICMAP = 6 == … [truncated]
+           case 0:
+             cp.REFLECTIONMAP_EXPLICIT = !0;
+             break;
+           case 2:
+             cp.REFLECTIONMAP_PLANAR = !0;
+             break;
+           case 4:
+ ... (23 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L458-L468` → after: `L2017-L2033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2017-L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2017-L2033) · [Before (L458-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L458-L468)

```diff
-     function gC(CC) {
-       return CC !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (fC || (fC = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(CC) ? function() {
-         for (var zC = arguments.length, ZC = new Array(zC), QC = 0; QC < zC; QC++) ZC[QC] = arguments[QC];
-         return CC.apply(PC(this), ZC), pC(oC.get(this))
-       } : function() {
-         for (var zC = arguments.length, ZC = new Array(zC), QC = 0; QC < zC; QC++) ZC[QC] = arguments[QC];
-         return pC(CC.apply(PC(this), ZC))
-       } : function(zC) {
-         for (var ZC = arguments.length, QC = new Array(ZC > 1 ? ZC - 1 : 0), wC = 1; wC < ZC; wC++) QC[wC - 1] = arguments[wC];
-         const bC = CC.call(PC(this), zC, ...QC);
-         return FC.set(bC, zC.sort ? zC.sort() : [zC]), pC(bC)
+     function Bp(pp, ip, cp, Op, op, Sp, xp) {
+       switch (xp.needNormals = !0, void 0 === op["LIGHT" + Op] && (xp.needRebuild = !0), op["LIGHT" + Op] = !0, op["SPOTLIGHT" + Op] = !1, op["HEMILIGHT" + Op] = !1, op["POINTLIGHT" + Op] = !1, op["DIRLIGHT" + Op] = !1, op["AREALIGHT" + Op] = !1, op["CLUSTLIGHT" + Op] = !1, cp.pr … [truncated]
+         case Ip.b.FALLOFF_GLTF:
+           op["LIGHT_FALLOFF_GLTF" + Op] = !0;
+           break;
+         case Ip.b.FALLOFF_PHYSICAL:
+           op["LIGHT_FALLOFF_PHYSICAL" + Op] = !0;
+           break;
+         case Ip.b.FALLOFF_STANDARD:
+           op["LIGHT_FALLOFF_STANDARD" + Op] = !0
+       }
+       if (Sp && !cp.specular.equalsFloats(0, 0, 0) && (xp.specularEnabled = !0), op["SHADOW" + Op] = !1, op["SHADOWCSM" + Op] = !1, op["SHADOWCSMDEBUG" + Op] = !1, op["SHADOWCSMNUM_CASCADES" + Op] = !1, op["SHADOWCSMUSESHADOWMAXZ" + Op] = !1, op["SHADOWCSMNOBLEND" + Op] = !1, op[ … [truncated]
+         const ip = cp.getShadowGenerator(pp.activeCamera) ?? cp.getShadowGenerator();
+         if (ip) {
+           const pp = ip.getShadowMap();
+           pp && pp.renderList && pp.renderList.length > 0 && (xp.shadowEnabled = !0, ip.prepareDefines(op, Op))
+ ... (1 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L472-L489` → after: `L2038-L2052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2038-L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2038-L2052) · [Before (L472-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L472-L489)

```diff
-     function SC(CC) {
-       return "function" === typeof CC ? gC(CC) : (CC instanceof IDBTransaction && function(CC) {
-         if (qC.has(CC)) return;
-         const zC = new Promise(((zC, ZC) => {
-           const QC = () => {
-               CC.removeEventListener("complete", wC), CC.removeEventListener("error", bC), CC.removeEventListener("abort", bC)
-             },
-             wC = () => {
-               zC(), QC()
-             },
-             bC = () => {
-               ZC(CC.error || new DOMException("AbortError", "AbortError")), QC()
-             };
-           CC.addEventListener("complete", wC), CC.addEventListener("error", bC), CC.addEventListener("abort", bC)
-         }));
-         qC.set(CC, zC)
- ... (2 more removed lines; see GitHub link above)
+     function Np(pp, ip, cp, Op, op) {
+       let Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+         xp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         Lp = function(pp, ip) {
+           let cp = !1;
+           if (pp.activeCamera) {
+             const Op = ip.CAMERA_ORTHOGRAPHIC ? 1 : 0,
+               op = ip.CAMERA_PERSPECTIVE ? 1 : 0,
+               Ip = 1 === pp.activeCamera.mode ? 1 : 0,
+               Sp = 0 === pp.activeCamera.mode ? 1 : 0;
+             (Op ^ Ip || op ^ Sp) && (ip.CAMERA_ORTHOGRAPHIC = 1 === Ip, ip.CAMERA_PERSPECTIVE = 1 === Sp, cp = !0)
+           }
+           return cp
+         }(pp, Op);
+       !1 !== Ip && (Lp = (0, Sp.i)(cp, pp, Op)), Op.DEPTHPREPASS !== !ip.getColorWrite() && (Op.DEPTHPREPASS = !Op.DEPTHPREPASS, Lp = !0), Op.INSTANCES !== op && (Op.INSTANCES = op, Lp = !0), Op.THIN_INSTANCES !== xp && (Op.THIN_INSTANCES = xp, Lp = !0), Lp && Op.markAsUnprocesse … [truncated]
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L492-L512` → after: `L2059-L2103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2059-L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2059-L2103) · [Before (L492-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L492-L512)

```diff
-     function pC(CC) {
-       if (CC instanceof IDBRequest) return function(CC) {
-         const zC = new Promise(((zC, ZC) => {
-           const QC = () => {
-               CC.removeEventListener("success", wC), CC.removeEventListener("error", bC)
-             },
-             wC = () => {
-               zC(pC(CC.result)), QC()
-             },
-             bC = () => {
-               ZC(CC.error), QC()
-             };
-           CC.addEventListener("success", wC), CC.addEventListener("error", bC)
-         }));
-         return zC.then((zC => {
-           zC instanceof IDBCursor && oC.set(zC, CC)
- ... (5 more removed lines; see GitHub link above)
+     function ap(pp, ip, cp, op) {
+       let Ip = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+         Sp = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
+         xp = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
+       if (!ip._areAttributesDirty && ip._needNormals === ip._normals && ip._needUVs === ip._uvs) return !1;
+       ip._normals = ip._needNormals, ip._uvs = ip._needUVs, ip.NORMAL = ip._needNormals && pp.isVerticesDataPresent("normal"), ip._needNormals && pp.isVerticesDataPresent("tangent") && (ip.TANGENT = !0);
+       for (let Op = 1; Op <= 6; ++Op) ip["UV" + Op] = !!ip._needUVs && pp.isVerticesDataPresent(`uv${1===Op?"":Op}`);
+       if (cp) {
+         const cp = pp.useVertexColors && pp.isVerticesDataPresent("color");
+         ip.VERTEXCOLOR = cp, ip.VERTEXALPHA = pp.hasVertexAlpha && cp && Sp
+       }
+       return pp.isVerticesDataPresent("instanceColor") && (pp.fop || pp.hasThinInstances) && (ip.INSTANCESCOLOR = !0), op && function(pp, ip) {
+         if (pp.useBones && pp.computeBonesUsingShaders && pp.skeleton) {
+           ip.NUM_BONE_INFLUENCERS = pp.numBoneInfluencers;
+           const cp = void 0 !== ip.BONETEXTURE;
+           if (pp.skeleton.isUsingTextureForMatrices && cp) ip.BONETEXTURE = !0;
+ ... (29 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L520-L553` → after: `L2107-L2109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2107-L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2107-L2109) · [Before (L520-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L520-L553)

```diff
-       if (!(CC instanceof IDBDatabase) || zC in CC || "string" !== typeof zC) return;
-       if (AC.get(zC)) return AC.get(zC);
-       const ZC = zC.replace(/FromIndex$/, ""),
-         QC = zC !== ZC,
-         wC = RC.includes(ZC);
-       if (!(ZC in (QC ? IDBIndex : IDBObjectStore).prototype) || !wC && !GC.includes(ZC)) return;
-       const bC = async function(CC) {
-         const zC = this.transaction(CC, wC ? "readwrite" : "readonly");
-         let bC = zC.store;
-         for (var nC = arguments.length, fC = new Array(nC > 1 ? nC - 1 : 0), oC = 1; oC < nC; oC++) fC[oC - 1] = arguments[oC];
-         return QC && (bC = bC.index(fC.shift())), (await Promise.all([bC[ZC](...fC), wC && zC.done]))[0]
-       };
-       return AC.set(zC, bC), bC
-     }
-     MC = (CC => ({
-       ...CC,
- ... (18 more removed lines; see GitHub link above)
+       if (pp.activeCamera) {
+         const cp = ip.MULTIVIEW;
+         ip.MULTIVIEW = null !== pp.activeCamera.outputRenderTarget && pp.activeCamera.outputRenderTarget.getViewCount() > 1, ip.MULTIVIEW != cp && ip.markAsUnprocessed()
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L615-L620` → after: `L2113-L2116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2113-L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2113-L2116) · [Before (L615-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L615-L620)

```diff
-     function Zz(CC, zC) {
-       try {
-         CC.container.lH(zC)
-       } catch (ZC) {
-         vC.debug(`Component ${zC.name} failed to register with FirebaseApp ${CC.name}`, ZC)
-       }
+     function Fp(pp, ip, cp) {
+       const Op = ip.ORDER_INDEPENDENT_TRANSPARENCY,
+         op = ip.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
+       ip.ORDER_INDEPENDENT_TRANSPARENCY = pp.useOrderIndependentTransparency && cp, ip.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !pp.gy().getCaps().textureFloatLinearFiltering, Op === ip.ORDER_INDEPENDENT_TRANSPARENCY && op === ip.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || ip.markAsU … [truncated]
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L623-L624` → after: `L2119-L2180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2119-L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2119-L2180) · [Before (L623-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L623-L624)

```diff
-     function Qz(CC, zC) {
-       CC.container.addOrOverwriteComponent(zC)
+     function gp(pp, ip, cp) {
+       const Op = ip.PREPASS;
+       if (!ip._arePrePassDirty) return;
+       const op = [{
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

#### 43. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L627-L632` → after: `L2183-L2190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2183-L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2183-L2190) · [Before (L627-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L627-L632)

```diff
-     function wz(CC) {
-       const zC = CC.name;
-       if (zz.has(zC)) return vC.debug(`There were multiple attempts to register component ${zC}.`), !1;
-       zz.set(zC, CC);
-       for (const ZC of Cz.values()) Zz(ZC, CC);
-       return !0
+     function Gp(pp, ip, cp, Op) {
+       let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+         Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         Sp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         xp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         Lp = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         Yp = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
+       op && op.push("Light" + pp), Ip || (ip.push("vLightData" + pp, "vLightDiffuse" + pp, "vLightSpecular" + pp, "vLightDirection" + pp, "vLightWidth" + pp, "vLightHeight" + pp, "vLightFalloff" + pp, "vLightGround" + pp, "vSliceData" + pp, "vSliceRanges" + pp, "lightMatrix" + pp … [truncated]
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L635-L639` → after: `L2193-L2196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2193-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2193-L2196) · [Before (L635-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L635-L639)

```diff
-     function bz(CC, zC) {
-       const ZC = CC.container.getProvider("heartbeat").getImmediate({
-         optional: !0
-       });
-       return ZC && ZC.triggerHeartbeat(), CC.container.getProvider(zC)
+     function rp(pp, ip, cp) {
+       const Op = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
+       cp && Op.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSpheri … [truncated]
+       ip.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L642-L644` → after: `L2199-L2207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2199-L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2199-L2207) · [Before (L642-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L642-L644)

```diff
-     function nz(CC, zC) {
-       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kC;
-       bz(CC, zC).clearInstance(ZC)
+     function Zp(pp, ip, cp) {
+       let Op, op, Ip = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
+         Sp = null;
+       if (pp.uniformsNames) {
+         const xp = pp;
+         Op = xp.uniformsNames, op = xp.uniformBuffersNames, ip = xp.samplers, cp = xp.defines, Ip = xp.maxSimultaneousLights || 0, Sp = xp.shaderLanguage ?? null
+       } else Op = pp, ip || (ip = []);
+       for (let xp = 0; xp < Ip && cp["LIGHT" + xp]; xp++) Gp(xp, Op, ip, cp["PROJECTEDLIGHTTEXTURE" + xp], op, !1, cp["IESLIGHTTEXTURE" + xp], cp["CLUSTLIGHT" + xp], cp["RECTAREALIGHTEMISSIONTEXTURE" + xp], 1 === Sp);
+       cp.NUM_MORPH_INFLUENCERS && (Op.push("morphTargetInfluences"), Op.push("morphTargetCount")), cp.BAKED_VERTEX_ANIMATION_TEXTURE && (Op.push("bakedVertexAnimationSettings"), Op.push("bakedVertexAnimationTextureSizeInverted"), Op.push("bakedVertexAnimationTime"), ip.push("bake … [truncated]
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L647-L648` → after: `L2210-L2216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2210-L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2210-L2216) · [Before (L647-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L647-L648)

```diff
-     function fz() {
-       zz.clear()
+     function zp(pp) {
+       let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+         cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+         op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+         Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       pp.addUniform("vReflectionInfos", 2), pp.addUniform("reflectionMatrix", 16), ip && pp.addUniform("vReflectionMicrosurfaceInfos", 3), cp && (pp.addUniform("vReflectionPosition", 3), pp.addUniform("vReflectionSize", 3)), Op && (pp.addUniform("vReflectionFilteringInfo", 2), pp … [truncated]
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L650-L666` → after: `L2218-L2228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2218-L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2218-L2228) · [Before (L650-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L650-L666)

```diff
-     const oz = {
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
-       qz = new bC.g("app", "Firebase", oz);
-     class Fz {
-       constructor(CC, zC, ZC) {
- ... (1 more removed lines; see GitHub link above)
+   },
+   40523: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Ip
+     });
+     var Op = cp(37320),
+       op = cp(40476);
+     class Ip extends op.b {
+       constructor(pp, ip) {
+         let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+         super(pp, ip, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new Op.b, this._storeEffectOnSubMeshes = cp
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L668-L669` → after: `L2230-L2231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2230-L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2230-L2231) · [Before (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L668-L669)

```diff
-       get automaticDataCollectionEnabled() {
-         return this.checkDestroyed(), this._automaticDataCollectionEnabled
+       getEffect() {
+         return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L671-L672` → after: `L2233-L2234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2233-L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2233-L2234) · [Before (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L671-L672)

```diff
-       set automaticDataCollectionEnabled(CC) {
-         this.checkDestroyed(), this._automaticDataCollectionEnabled = CC
+       isReady(pp, ip) {
+         return !!pp && (!this._storeEffectOnSubMeshes || (!pp.Am || 0 === pp.Am.length || this.isReadyForSubMesh(pp, pp.Am[0], ip)))
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L674-L675` → after: `L2236-L2238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2236-L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2236-L2238) · [Before (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L674-L675)

```diff
-       get name() {
-         return this.checkDestroyed(), this._name
+       _isReadyForSubMesh(pp) {
+         const ip = pp.materialDefines;
+         return !(this.checkReadyOnEveryCall || !pp.effect || !ip || ip._renderId !== this.Gl().getRenderId())
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L677-L678` → after: `L2240-L2241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2240-L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2240-L2241) · [Before (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L677-L678)

```diff
-       get options() {
-         return this.checkDestroyed(), this._options
+       bindOnlyWorldMatrix(pp) {
+         this._activeEffect.setMatrix("world", pp)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L680-L681` → after: `L2243-L2244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2243-L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2243-L2244) · [Before (L680-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L680-L681)

```diff
-       get config() {
-         return this.checkDestroyed(), this._config
+       bindOnlyNormalMatrix(pp) {
+         this._activeEffect.setMatrix("normalMatrix", pp)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L683-L684` → after: `L2246-L2247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2246-L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2246-L2247) · [Before (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L683-L684)

```diff
-       get container() {
-         return this._container
+       bind(pp, ip) {
+         ip && this.bindForSubMesh(pp, ip, ip.Am[0])
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L686-L687` → after: `L2249-L2252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2249-L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2249-L2252) · [Before (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L686-L687)

```diff
-       get isDeleted() {
-         return this._isDeleted
+       _afterBind(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           cp = arguments.length > 2 ? arguments[2] : void 0;
+         super._afterBind(pp, ip, cp), this.Gl()._cachedEffect = ip, cp ? cp._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L689-L690` → after: `L2254-L2256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2254-L2256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2254-L2256) · [Before (L689-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L689-L690)

```diff
-       set isDeleted(CC) {
-         this._isDeleted = CC
+       _mustRebind(pp, ip, cp) {
+         let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
+         return cp._drawWrapper._forceRebindOnNextCall || pp.isCachedMaterialInvalid(this, ip, Op)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L692-L695` → after: `L2258-L2259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2258-L2259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2258-L2259) · [Before (L692-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L692-L695)

```diff
-       checkDestroyed() {
-         if (this.isDeleted) throw qz.create("app-deleted", {
-           appName: this._name
-         })
+       dispose(pp, ip, cp) {
+         this._activeEffect = void 0, super.dispose(pp, ip, cp)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L698` → after: `L2262-L2268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2262-L2268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2262-L2268) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L698)

```diff
-     const Wz = "9.23.0";
+   },
+   40544: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Ip,
+       i: () => op
+     });
+     const Op = new WeakMap;
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L701-L717` → after: `L2271-L2273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2271-L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2271-L2273) · [Before (L701-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L701-L717)

```diff
-       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-         ZC = CC;
-       if ("object" !== typeof zC) {
-         zC = {
-           name: zC
-         }
-       }
-       const wC = Object.assign({
-           name: kC,
-           automaticDataCollectionEnabled: !1
-         }, zC),
-         nC = wC.name;
-       if ("string" !== typeof nC || !nC) throw qz.create("bad-app-name", {
-         appName: String(nC)
-       });
-       if (ZC || (ZC = (0, bC.E)()), !ZC) throw qz.create("no-options");
- ... (1 more removed lines; see GitHub link above)
+       const ip = pp.getVertexBuffers();
+       if (!ip) return null;
+       let cp = Op.get(pp);
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L719-L722` → after: `L2275-L2295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2275-L2295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2275-L2295) · [Before (L719-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L719-L722)

```diff
-         if ((0, bC.z)(ZC, fC.options) && (0, bC.z)(wC, fC.config)) return fC;
-         throw qz.create("duplicate-app", {
-           appName: nC
-         })
+         let pp = !1;
+         for (const Op in ip)
+           if (!cp.has(Op)) {
+             pp = !0;
+             break
+           } if (!pp) return cp
+       } else cp = new Map, Op.set(pp, cp);
+       for (const Op in ip) {
+         const pp = ip[Op];
+         if (pp) {
+           const ip = pp.byteOffset,
+             op = pp.byteStride,
+             Ip = pp.type,
+             Sp = pp.normalized;
+           cp.set(Op, {
+             offset: ip,
+ ... (5 more added lines; see GitHub link above)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L765-L876` → after: `L2301-L2304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2301-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2301-L2304) · [Before (L765-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L765-L876)

```diff
-       if (null !== CC && "function" !== typeof CC) throw qz.create("invalid-log-argument");
-       (0, wC.f)(CC, zC)
-     }
- 
-     function Gz(CC) {
-       (0, wC.d)(CC)
-     }
-     const Rz = "firebase-heartbeat-store";
-     let Az = null;
- 
-     function xz() {
-       return Az || (Az = function(CC, zC) {
-         let {
-           blocked: ZC,
-           upgrade: QC,
-           blocking: wC,
- ... (96 more removed lines; see GitHub link above)
+       ip.forEach(((ip, cp) => {
+         const Op = `vp_${cp}_info`;
+         pp.setFloat4(Op, ip.offset, ip.stride, ip.type, ip.normalized ? 1 : 0)
+       }))
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L878-L901` → after: `L2306-L2325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2306-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2306-L2325) · [Before (L878-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L878-L901)

```diff
-     class ez {
-       constructor(CC) {
-         this.app = CC, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
-       }
-       async runIndexedDBEnvironmentCheck() {
-         return !!(0, bC._)() && (0, bC.mb)().then((() => !0)).catch((() => !1))
-       }
-       async read() {
-         if (await this._canUseIndexedDBPromise) {
-           return await async function(CC) {
-             try {
-               const zC = await xz();
-               return await zC.transaction(Rz).objectStore(Rz).get(Iz(CC))
-             } catch (zC) {
-               if (zC instanceof bC.j) vC.warn(zC.message);
-               else {
- ... (8 more removed lines; see GitHub link above)
+   },
+   40506: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => xp,
+       f: () => Lp
+     });
+     var Op = cp(40203),
+       op = cp(37320),
+       Ip = cp(40210);
+     let Sp = (() => {
+       var pp;
+       let ip, cp, op = [];
+       return pp = class {
+         static extractMinAndMaxIndexed(pp, ip, cp, Op, op, Ip) {
+           for (let Sp = cp; Sp < cp + Op; Sp++) {
+             const cp = 3 * ip[Sp],
+ ... (4 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L904-L925` → after: `L2328-L2334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2328-L2334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2328-L2334) · [Before (L904-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L904-L925)

```diff
-         return {
-           heartbeats: []
-         }
-       }
-       async overwrite(CC) {
-         var zC;
-         if (await this._canUseIndexedDBPromise) {
-           const ZC = await this.read();
-           return Jz(this.app, {
-             lastSentHeartbeatDate: null !== (zC = CC.lastSentHeartbeatDate) && void 0 !== zC ? zC : ZC.lastSentHeartbeatDate,
-             heartbeats: CC.heartbeats
-           })
-         }
-       }
-       async add(CC) {
-         var zC;
- ... (6 more removed lines; see GitHub link above)
+         static extractMinAndMax(pp, ip, cp, Op, op, Ip) {
+           for (let Sp = ip, xp = ip * Op; Sp < ip + cp; Sp++, xp += Op) {
+             const ip = pp[xp],
+               cp = pp[xp + 1],
+               Op = pp[xp + 2];
+             op.minimizeInPlaceFromFloats(ip, cp, Op), Ip.maximizeInPlaceFromFloats(ip, cp, Op)
+           }
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L930-L934` → after: `L2381-L2389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2381-L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2381-L2389) · [Before (L930-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L930-L934)

```diff
-     function hz(CC) {
-       return (0, bC.r)(JSON.stringify({
-         version: 2,
-         heartbeats: CC
-       })).length
+     function Lp(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+         Ip = arguments.length > 4 ? arguments[4] : void 0;
+       const xp = new op.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+         Lp = new op.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+       return Ip || (Ip = 3), Sp.extractMinAndMax(pp, ip, cp, Ip, xp, Lp), Op && (xp.x -= xp.x * Op.x + Op.y, xp.y -= xp.y * Op.x + Op.y, xp.z -= xp.z * Op.x + Op.y, Lp.x += Lp.x * Op.x + Op.y, Lp.y += Lp.y * Op.x + Op.y, Lp.z += Lp.z * Op.x + Op.y), {
+         minimum: xp,
+         maximum: Lp
+       }
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L939` → after: `L2392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2392) · [Before (L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L939)

```diff
-   40336: (CC, zC, ZC) => {
+   40481: (pp, ip, cp) => {
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L941-L942` → after: `L2394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2394) · [Before (L941-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L941-L942)

```diff
-       e: () => fC,
-       f: () => wC
+       d: () => Dp
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L944` → after: `L2396-L2401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2396-L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2396-L2401) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L944)

```diff
-     var QC = ZC(40340);
+     var Op, op = cp(40342),
+       Ip = cp(40489),
+       Sp = cp(40498),
+       xp = cp(40506),
+       Lp = cp(40509),
+       Yp = cp(40096);
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L946-L950` → after: `L2403-L2445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2403-L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2403-L2445) · [Before (L946-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L946-L950)

```diff
-       constructor(CC, zC, ZC) {
-         this.name = CC, this.instanceFactory = zC, this.type = ZC, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
-       }
-       setInstantiationMode(CC) {
-         return this.instantiationMode = CC, this
+       get materialDefines() {
+         const pp = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
+         return "string" === typeof pp ? null : pp
+       }
+       set materialDefines(pp) {
+         (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = pp
+       }
+       _getDrawWrapper(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         pp = pp ?? this._engine.currentRenderPassId;
+         let cp = this._drawWrappers[pp];
+         return !cp && ip && (this._drawWrappers[pp] = cp = new Lp.e(this._mesh.Gl().gy())), cp
+       }
+       _removeDrawWrapper(pp) {
+         let ip = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[pp]?.dispose(ip), this._drawWrappers[pp] = void 0
+ ... (27 more added lines; see GitHub link above)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L952-L953` → after: `L2447-L2448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2447-L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2447-L2448) · [Before (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L952-L953)

```diff
-       setMultipleInstances(CC) {
-         return this.multipleInstances = CC, this
+       static AddToMesh(pp, ip, cp, Op, op, Ip, Sp) {
+         return new Dp(pp, ip, cp, Op, op, Ip, Sp, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L955-L956` → after: `L2450-L2453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2450-L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2450-L2453) · [Before (L955-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L955-L956)

```diff
-       setServiceProps(CC) {
-         return this.serviceProps = CC, this
+       constructor(pp, ip, cp, Op, op, Ip, Sp) {
+         let xp = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
+           Lp = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
+         this.materialIndex = pp, this.verticesStart = ip, this.verticesCount = cp, this.indexStart = Op, this.indexCount = op, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastCollide … [truncated]
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L958-L959` → after: `L2455-L2456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2455-L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2455-L2456) · [Before (L958-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L958-L959)

```diff
-       setInstanceCreatedCallback(CC) {
-         return this.onInstanceCreated = CC, this
+       get IsGlobal() {
+         return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L961-L1020` → after: `L2458-L2459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2458-L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2458-L2459) · [Before (L961-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L961-L1020)

```diff
-     }
-     const bC = "[DEFAULT]";
-     class nC {
-       constructor(CC, zC) {
-         this.name = CC, this.container = zC, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
-       }
-       get(CC) {
-         const zC = this.normalizeInstanceIdentifier(CC);
-         if (!this.instancesDeferred.has(zC)) {
-           const CC = new QC.d;
-           if (this.instancesDeferred.set(zC, CC), this.isInitialized(zC) || this.shouldAutoInitialize()) try {
-             const ZC = this.getOrInitializeService({
-               instanceIdentifier: zC
-             });
-             ZC && CC.resolve(ZC)
-           } catch (ZC) {}
- ... (44 more removed lines; see GitHub link above)
+       bJ() {
+         return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.bJ() : this._boundingInfo
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1022-L1024` → after: `L2461-L2462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2461-L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2461-L2462) · [Before (L1022-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L1022-L1024)

```diff
-       clearInstance() {
-         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bC;
-         this.instancesDeferred.delete(CC), this.instancesOptions.delete(CC), this.instances.delete(CC)
+       setBoundingInfo(pp) {
+         return this._boundingInfo = pp, this
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1026-L1028` → after: `L2464-L2465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2464-L2465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2464-L2465) · [Before (L1026-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L1026-L1028)

```diff
-       async delete() {
-         const CC = Array.from(this.instances.values());
-         await Promise.all([...CC.filter((CC => "INTERNAL" in CC)).map((CC => CC.INTERNAL.delete())), ...CC.filter((CC => "_delete" in CC)).map((CC => CC._delete()))])
+       getMesh() {
+         return this._mesh
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1030-L1031` → after: `L2467-L2468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2467-L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2467-L2468) · [Before (L1030-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L1030-L1031)

```diff
-       isComponentSet() {
-         return null != this.component
+       getRenderingMesh() {
+         return this._renderingMesh
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1033-L1035` → after: `L2470-L2471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2470-L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2470-L2471) · [Before (L1033-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L1033-L1035)

```diff
-       isInitialized() {
-         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bC;
-         return this.instances.has(CC)
+       getReplacementMesh() {
+         return this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1037-L1039` → after: `L2473-L2475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2473-L2475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2473-L2475) · [Before (L1037-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L1037-L1039)

```diff
-       getOptions() {
-         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bC;
-         return this.instancesOptions.get(CC) || {}
+       getEffectiveMesh() {
+         const pp = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
+         return pp || this._renderingMesh
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1041-L1053` → after: `L2477-L2483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2477-L2483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2477-L2483) · [Before (L1041-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L1041-L1053)

```diff
-       initialize() {
-         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-         const {
-           options: zC = {}
-         } = CC, ZC = this.normalizeInstanceIdentifier(CC.instanceIdentifier);
-         if (this.isInitialized(ZC)) throw Error(`${this.name}(${ZC}) has already been initialized`);
-         if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
-         const QC = this.getOrInitializeService({
-           instanceIdentifier: ZC,
-           options: zC
-         });
-         for (const [wC, bC] of this.instancesDeferred.entries()) {
-           ZC === this.normalizeInstanceIdentifier(wC) && bC.resolve(QC)
+       Ky() {
+         let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         const ip = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
+         if (!ip) return pp && this._mesh.Gl()._hasDefaultMaterial ? this._mesh.Gl().defaultMaterial : null;
+         if (this._isMultiMaterial(ip)) {
+           const pp = ip.getSubMaterial(this.materialIndex);
+           return this._currentMaterial !== pp && (this._currentMaterial = pp, this.resetDrawCache()), pp
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1057-L1169` → after: `L2487-L2488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2487-L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2487-L2488) · [Before (L1057-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L1057-L1169)

```diff
-       Bl(CC, zC) {
-         var ZC;
-         const QC = this.normalizeInstanceIdentifier(zC),
-           wC = null !== (ZC = this.onInitCallbacks.get(QC)) && void 0 !== ZC ? ZC : new Set;
-         wC.add(CC), this.onInitCallbacks.set(QC, wC);
-         const bC = this.instances.get(QC);
-         return bC && CC(bC, QC), () => {
-           wC.delete(CC)
-         }
-       }
-       invokeOnInitCallbacks(CC, zC) {
-         const ZC = this.onInitCallbacks.get(zC);
-         if (ZC)
-           for (const wC of ZC) try {
-             wC(CC, zC)
-           } catch (QC) {}
- ... (97 more removed lines; see GitHub link above)
+       _isMultiMaterial(pp) {
+         return void 0 !== pp.getSubMaterial
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1171-L1176` → after: `L2490-L2554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2490-L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2490-L2554) · [Before (L1171-L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L1171-L1176)

```diff
-       set logHandler(CC) {
-         if ("function" !== typeof CC) throw new TypeError("Value assigned to `logHandler` must be a function");
-         this._logHandler = CC
-       }
-       get userLogHandler() {
-         return this._userLogHandler
+       refreshBoundingInfo() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
+         if (pp || (pp = this._renderingMesh.getVerticesData(op.j.PositionKind)), !pp) return this._boundingInfo = this._mesh.bJ(), this;
+         const ip = this._renderingMesh.NOp();
+         let cp;
+         if (0 === this.indexStart && this.indexCount === ip.length) {
+           const pp = this._renderingMesh.bJ();
+           cp = {
+             minimum: pp.minimum.clone(),
+             maximum: pp.maximum.clone()
+           }
+         } else cp = (0, xp.e)(pp, ip, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
+         return this._boundingInfo ? this._boundingInfo.reConstruct(cp.minimum, cp.maximum) : this._boundingInfo = new Sp.d(cp.minimum, cp.maximum), this
+       }
+       _checkCollision(pp) {
+ ... (49 more added lines; see GitHub link above)
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1178-L1179` → after: `L2556-L2564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2556-L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2556-L2564) · [Before (L1178-L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L1178-L1179)

```diff
-       set userLogHandler(CC) {
-         this._userLogHandler = CC
+       _intersectLines(pp, ip, cp, Op, op) {
+         let Sp = null;
+         for (let xp = this.indexStart; xp < this.indexStart + this.indexCount; xp += 2) {
+           const Lp = ip[cp[xp]],
+             Yp = ip[cp[xp + 1]],
+             Dp = pp.intersectionSegment(Lp, Yp, Op);
+           if (!(Dp < 0) && ((op || !Sp || Dp < Sp.distance) && (Sp = new Ip.e(null, null, Dp), Sp.faceId = xp / 2, op))) break
+         }
+         return Sp
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1181-L1183` → after: `L2566-L2574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2566-L2574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2566-L2574) · [Before (L1181-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L1181-L1183)

```diff
-       debug() {
-         for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
-         this._userLogHandler && this._userLogHandler(this, wC.DEBUG, ...zC), this._logHandler(this, wC.DEBUG, ...zC)
+       _intersectUnIndexedLines(pp, ip, cp, Op, op) {
+         let Sp = null;
+         for (let xp = this.verticesStart; xp < this.verticesStart + this.verticesCount; xp += 2) {
+           const cp = ip[xp],
+             Lp = ip[xp + 1],
+             Yp = pp.intersectionSegment(cp, Lp, Op);
+           if (!(Yp < 0) && ((op || !Sp || Yp < Sp.distance) && (Sp = new Ip.e(null, null, Yp), Sp.faceId = xp / 2, op))) break
+         }
+         return Sp
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1185-L1187` → after: `L2576-L2599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2576-L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2576-L2599) · [Before (L1185-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L1185-L1187)

```diff
-       log() {
-         for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
-         this._userLogHandler && this._userLogHandler(this, wC.VERBOSE, ...zC), this._logHandler(this, wC.VERBOSE, ...zC)
+       _intersectTriangles(pp, ip, cp, Op, op, Ip, Sp) {
+         let xp = null,
+           Lp = -1;
+         for (let Yp = this.indexStart; Yp < this.indexStart + this.indexCount - (3 - Op); Yp += Op) {
+           Lp++;
+           const Op = cp[Yp],
+             Dp = cp[Yp + 1],
+             Ap = cp[Yp + 2];
+           if (op && 4294967295 === Ap) {
+             Yp += 2;
+             continue
+           }
+           const Pp = ip[Op],
+             Wp = ip[Dp],
+             yp = ip[Ap];
+           if (!Pp || !Wp || !yp) continue;
+ ... (8 more added lines; see GitHub link above)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1189-L1191` → after: `L2601-L2614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2601-L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2601-L2614) · [Before (L1189-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L1189-L1191)

```diff
-       info() {
-         for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
-         this._userLogHandler && this._userLogHandler(this, wC.INFO, ...zC), this._logHandler(this, wC.INFO, ...zC)
+       _intersectUnIndexedTriangles(pp, ip, cp, Op, op) {
+         let Ip = null;
+         for (let Sp = this.verticesStart; Sp < this.verticesStart + this.verticesCount; Sp += 3) {
+           const cp = ip[Sp],
+             xp = ip[Sp + 1],
+             Lp = ip[Sp + 2];
+           if (op && !op(cp, xp, Lp, pp, -1, -1, -1)) continue;
+           const Yp = pp.intersectsTriangle(cp, xp, Lp);
+           if (Yp) {
+             if (Yp.distance < 0) continue;
+             if ((Op || !Ip || Yp.distance < Ip.distance) && (Ip = Yp, Ip.faceId = Sp / 3, Op)) break
+           }
+         }
+         return Ip
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1193-L1195` → after: `L2616-L2617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2616-L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2616-L2617) · [Before (L1193-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L1193-L1195)

```diff
-       warn() {
-         for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
-         this._userLogHandler && this._userLogHandler(this, wC.WARN, ...zC), this._logHandler(this, wC.WARN, ...zC)
+       _rebuild() {
+         this._linesIndexBuffer && (this._linesIndexBuffer = null)
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1197-L1199` → after: `L2619-L2626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2619-L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2619-L2626) · [Before (L1197-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L1197-L1199)

```diff
-       error() {
-         for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
-         this._userLogHandler && this._userLogHandler(this, wC.ERROR, ...zC), this._logHandler(this, wC.ERROR, ...zC)
+       clone(pp, ip) {
+         const cp = new Dp(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, pp, ip, !1);
+         if (!this.IsGlobal) {
+           const pp = this.bJ();
+           if (!pp) return cp;
+           cp._boundingInfo = new Sp.d(pp.minimum, pp.maximum)
+         }
+         return cp
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1201-L1230` → after: `L2628-L2644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2628-L2644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2628-L2644) · [Before (L1201-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L1201-L1230)

```diff
-     }
- 
-     function FC(CC) {
-       QC.forEach((zC => {
-         zC.setLogLevel(CC)
-       }))
-     }
- 
-     function WC(CC, zC) {
-       for (const ZC of QC) {
-         let QC = null;
-         zC && zC.level && (QC = bC[zC.level]), ZC.userLogHandler = null === CC ? null : function(zC, ZC) {
-           for (var bC = arguments.length, nC = new Array(bC > 2 ? bC - 2 : 0), fC = 2; fC < bC; fC++) nC[fC - 2] = arguments[fC];
-           const oC = nC.map((CC => {
-             if (null == CC) return null;
-             if ("string" === typeof CC) return CC;
- ... (14 more removed lines; see GitHub link above)
+       dispose() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         this._linesIndexBuffer && (this._mesh.Gl().gy()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
+         const ip = this._mesh.Am.indexOf(this);
+         this._mesh.Am.splice(ip, 1), this.resetDrawCache(void 0, pp)
+       }
+       getClassName() {
+         return "SubMesh"
+       }
+       static CreateFromIndices(pp, ip, cp, Op, op) {
+         let Ip = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
+           Sp = Number.MAX_VALUE,
+           xp = -Number.MAX_VALUE;
+         const Lp = (op || Op).NOp();
+         for (let Yp = ip; Yp < ip + cp; Yp++) {
+           const pp = Lp[Yp];
+ ... (1 more added lines; see GitHub link above)
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1233` → after: `L2648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R2648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/266.js#L2648) · [Before (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/266.js#L1233)

```diff
-     }
+     }(Op = Dp.prototype).projectToRef ?? (Op.projectToRef = (0, Yp.k)("SubMesh", "projectToRef"))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/267.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/267.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L5-L18` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L4-L6) · [Before (L5-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L5-L18)

```diff
-   40357: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       getAnalytics: () => yz,
-       getGoogleAnalyticsClientId: () => Oz,
-       initializeAnalytics: () => Lz,
-       isSupported: () => Uz,
-       logEvent: () => ZZ,
-       setAnalyticsCollectionEnabled: () => CZ,
-       setConsent: () => QZ,
-       setCurrentScreen: () => Bz,
-       setDefaultEventParameters: () => zZ,
-       setUserId: () => kz,
-       setUserProperties: () => Vz,
-       settings: () => Dz
+   41851: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Op
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L20-L35` → after: `L8-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L8-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L8-L26) · [Before (L20-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L20-L35)

```diff
-     var QC = ZC(40329),
-       wC = ZC(40349),
-       bC = ZC(40340),
-       nC = ZC(40336);
-     let fC, oC;
-     const qC = new WeakMap,
-       FC = new WeakMap,
-       WC = new WeakMap,
-       NC = new WeakMap,
-       MC = new WeakMap;
-     let gC = {
-       get(CC, zC, ZC) {
-         if (CC instanceof IDBTransaction) {
-           if ("done" === zC) return FC.get(CC);
-           if ("objectStoreNames" === zC) return CC.objectStoreNames || WC.get(CC);
-           if ("store" === zC) return ZC.objectStoreNames[1] ? void 0 : ZC.objectStore(ZC.objectStoreNames[0])
+     class Op {}
+     Op.AUTOSAMPLERSUFFIX = "Sampler", Op.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", Op.ALPHA_DISABLE = 0, Op.ALPHA_ADD = 1, Op.ALPHA_COMBINE = 2, Op.ALPHA_SUBTRACT = 3, Op.ALPHA_MULTIPLY = 4, Op.ALPHA_MAXIMIZED = 5, Op.ALPHA_ONEONE = 6, Op.ALPHA_PREMULTIPLIED = 7, Op.ALPH … [truncated]
+   },
+   41823: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Lp
+     });
+     var Op = cp(40203),
+       op = cp(40210),
+       Ip = cp(37320),
+       Sp = cp(40451),
+       xp = cp(40423);
+     let Lp = (() => {
+       var pp;
+       let ip, cp, Lp, Yp, Dp = Sp.d,
+         Ap = [];
+ ... (3 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L37-L53` → after: `L28-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L28-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L28-L185) · [Before (L37-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L37-L53)

```diff
-         return PC(CC[zC])
-       },
-       set: (CC, zC, ZC) => (CC[zC] = ZC, !0),
-       has: (CC, zC) => CC instanceof IDBTransaction && ("done" === zC || "store" === zC) || zC in CC
-     };
- 
-     function SC(CC) {
-       return CC !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (oC || (oC = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(CC) ? function() {
-         for (var zC = arguments.length, ZC = new Array(zC), QC = 0; QC < zC; QC++) ZC[QC] = arguments[QC];
-         return CC.apply(GC(this), ZC), PC(qC.get(this))
-       } : function() {
-         for (var zC = arguments.length, ZC = new Array(zC), QC = 0; QC < zC; QC++) ZC[QC] = arguments[QC];
-         return PC(CC.apply(GC(this), ZC))
-       } : function(zC) {
-         for (var ZC = arguments.length, QC = new Array(ZC > 1 ? ZC - 1 : 0), wC = 1; wC < ZC; wC++) QC[wC - 1] = arguments[wC];
-         const bC = CC.call(GC(this), zC, ...QC);
- ... (1 more removed lines; see GitHub link above)
+         _setPosition(pp) {
+           this._position = pp
+         }
+         get position() {
+           return this._position
+         }
+         set position(pp) {
+           this._setPosition(pp)
+         }
+         _setDirection(pp) {
+           this._direction = pp
+         }
+         get direction() {
+           return this._direction
+         }
+         set direction(pp) {
+ ... (142 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L55-L213` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L187-L188) · [Before (L55-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L55-L213)

```diff
-     }
- 
-     function pC(CC) {
-       return "function" === typeof CC ? SC(CC) : (CC instanceof IDBTransaction && function(CC) {
-         if (FC.has(CC)) return;
-         const zC = new Promise(((zC, ZC) => {
-           const QC = () => {
-               CC.removeEventListener("complete", wC), CC.removeEventListener("error", bC), CC.removeEventListener("abort", bC)
-             },
-             wC = () => {
-               zC(), QC()
-             },
-             bC = () => {
-               ZC(CC.error || new DOMException("AbortError", "AbortError")), QC()
-             };
-           CC.addEventListener("complete", wC), CC.addEventListener("error", bC), CC.addEventListener("abort", bC)
- ... (143 more removed lines; see GitHub link above)
+       update(pp) {
+         this.updateMipLevel(pp, 0)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L215-L385` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L190-L191) · [Before (L215-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L215-L385)

```diff
-     }
- 
-     function aC(CC) {
-       return `${CC.appName}!${CC.appId}`
-     }
-     const tC = new Map;
- 
-     function DC(CC, zC) {
-       const ZC = aC(CC);
-       jC(ZC, zC),
-         function(CC, zC) {
-           const ZC = LC();
-           ZC && ZC.postMessage({
-             key: CC,
-             fid: zC
-           });
- ... (155 more removed lines; see GitHub link above)
+       updateMipLevel(pp, ip) {
+         this._getEngine().updateRawTexture(this._texture, pp, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, ip), this._waitingForData = !1
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L387-L396` → after: `L193-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L193-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L193-L196) · [Before (L387-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L387-L396)

```diff
-     }
-     async function Qz(CC) {
-       let zC = await wz(CC.appConfig);
-       for (; 1 === zC.registrationStatus;) await rC(100), zC = await wz(CC.appConfig);
-       if (0 === zC.registrationStatus) {
-         const {
-           installationEntry: zC,
-           registrationPromise: ZC
-         } = await Zz(CC);
-         return ZC || zC
+       clone() {
+         if (!this._texture) return super.clone();
+         const pp = new op(null, this.getSize().width, this.getSize().height, this.format, this.Gl(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
+         return pp._texture = this._texture, this._texture.incrementReferences(), pp
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L398-L432` → after: `L198-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L198-L199) · [Before (L398-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L398-L432)

```diff
-       return zC
-     }
- 
-     function wz(CC) {
-       return zz(CC, (CC => {
-         if (!CC) throw dC.create("installation-not-found");
-         return bz(CC)
-       }))
-     }
- 
-     function bz(CC) {
-       return 1 === (zC = CC).registrationStatus && zC.registrationTime + vC < Date.now() ? {
-         fid: CC.fid,
-         registrationStatus: 0
-       } : CC;
-       var zC
- ... (19 more removed lines; see GitHub link above)
+       isReady() {
+         return super.isReady() && !this._waitingForData
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L434-L447` → after: `L201-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L201-L202) · [Before (L434-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L434-L447)

```diff
-       const fC = {
-           installation: {
-             sdkVersion: eC,
-             appId: ZC.appId
-           }
-         },
-         oC = {
-           method: "POST",
-           headers: bC,
-           body: JSON.stringify(fC)
-         },
-         qC = await uC((() => fetch(wC, oC)));
-       if (qC.ok) {
-         return EC(await qC.json())
+       static CreateLuminanceTexture(pp, ip, cp, Op) {
+         return new op(pp, ip, cp, 1, Op, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L449-L599` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L204-L205) · [Before (L449-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L449-L599)

```diff
-       throw await lC("Generate Auth Token", qC)
-     }
-     async function fz(CC) {
-       let zC, ZC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       const QC = await zz(CC.appConfig, (QC => {
-         if (!qz(QC)) throw dC.create("not-registered");
-         const wC = QC.authToken;
-         if (!ZC && function(CC) {
-             return 2 === CC.requestStatus && ! function(CC) {
-               const zC = Date.now();
-               return zC < CC.creationTime || CC.creationTime + CC.expiresIn < zC + KC
-             }(CC)
-           }(wC)) return QC;
-         if (1 === wC.requestStatus) return zC = async function(CC, zC) {
-           let ZC = await oz(CC.appConfig);
-           for (; 1 === ZC.authToken.requestStatus;) await rC(100), ZC = await oz(CC.appConfig);
- ... (135 more removed lines; see GitHub link above)
+       static CreateLuminanceAlphaTexture(pp, ip, cp, Op) {
+         return new op(pp, ip, cp, 2, Op, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L601-L675` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L207-L208) · [Before (L601-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L601-L675)

```diff
-       return CC
-     }
- 
-     function xz(CC) {
-       return Promise.all(CC.map((CC => CC.catch((CC => CC)))))
-     }
- 
-     function Jz(CC, zC) {
-       const ZC = function(CC, zC) {
-           let ZC;
-           return window.trustedTypes && (ZC = window.trustedTypes.createPolicy(CC, zC)), ZC
-         }("firebase-js-sdk-policy", {
-           createScriptURL: Az
-         }),
-         QC = document.createElement("script"),
-         wC = `${pz}?l=${CC}&id=${zC}`;
- ... (59 more removed lines; see GitHub link above)
+       static CreateAlphaTexture(pp, ip, cp, Op) {
+         return new op(pp, ip, cp, 0, Op, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L677-L682` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L210-L211) · [Before (L677-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L677-L682)

```diff
-     }
-     const iz = new class {
-       constructor() {
-         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
-           zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
-         this.throttleMetadata = CC, this.intervalMillis = zC
+       static CreateRGBTexture(pp, ip, cp, Op) {
+         return new op(pp, ip, cp, 4, Op, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L684-L685` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L213-L214) · [Before (L684-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L684-L685)

```diff
-       getThrottleMetadata(CC) {
-         return this.throttleMetadata[CC]
+       static CreateRGBATexture(pp, ip, cp, Op) {
+         return new op(pp, ip, cp, 5, Op, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L687-L688` → after: `L216-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L216-L217) · [Before (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L687-L688)

```diff
-       setThrottleMetadata(CC, zC) {
-         this.throttleMetadata[CC] = zC
+       static CreateRGBAStorageTexture(pp, ip, cp, Op) {
+         return new op(pp, ip, cp, 5, Op, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arg … [truncated]
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L690-L691` → after: `L219-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L219-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L219-L223) · [Before (L690-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L690-L691)

```diff
-       deleteThrottleMetadata(CC) {
-         delete this.throttleMetadata[CC]
+       static CreateRTexture(pp, ip, cp, Ip) {
+         let Sp = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
+           xp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           Lp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Op.d.TRILINEAR_SAMPLINGMODE;
+         return new op(pp, ip, cp, 6, Ip, Sp, xp, Lp, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L693-L715` → after: `L225-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L225-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L225-L229) · [Before (L693-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L693-L715)

```diff
-     };
- 
-     function vz(CC) {
-       return new Headers({
-         Accept: "application/json",
-         "x-goog-api-key": CC
-       })
-     }
-     async function ez(CC) {
-       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iz,
-         ZC = arguments.length > 2 ? arguments[2] : void 0;
-       const {
-         appId: QC,
-         apiKey: wC,
-         measurementId: bC
-       } = CC.options;
- ... (7 more removed lines; see GitHub link above)
+       static CreateRStorageTexture(pp, ip, cp, Ip) {
+         let Sp = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
+           xp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           Lp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Op.d.TRILINEAR_SAMPLINGMODE;
+         return new op(pp, ip, cp, 6, Ip, Sp, xp, Lp, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L730-L758` → after: `L232-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L232-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L232-L261) · [Before (L730-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L730-L758)

```diff
-     async function hz(CC, zC, ZC) {
-       let {
-         throttleEndTimeMillis: QC,
-         backoffCount: wC
-       } = zC, nC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iz;
-       var fC;
-       const {
-         appId: oC,
-         measurementId: qC
-       } = CC;
-       try {
-         await
-         function(CC, zC) {
-           return new Promise(((ZC, QC) => {
-             const wC = Math.max(zC - Date.now(), 0),
-               bC = setTimeout(ZC, wC);
- ... (13 more removed lines; see GitHub link above)
+   },
+   41884: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Op.b
+     });
+     var Op = cp(40614);
+     (0, Op.d)()
+   },
+   41826: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Op.e
+     });
+     var Op = cp(40631);
+     (0, Op.h)()
+   },
+   40631: (pp, ip, cp) => {
+ ... (14 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L760-L793` → after: `L263-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L263-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L263-L280) · [Before (L760-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L760-L793)

```diff
-       try {
-         const zC = await async function(CC) {
-           var zC;
-           const {
-             appId: ZC,
-             apiKey: QC
-           } = CC, wC = {
-             method: "GET",
-             headers: vz(QC)
-           }, bC = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", ZC), nC = await fetch(bC, wC);
-           if (200 !== nC.status && 304 !== nC.status) {
-             let CC = "";
-             try {
-               const ZC = await nC.json();
-               (null === (zC = ZC.error) || void 0 === zC ? void 0 : zC.message) && (CC = ZC.error.message)
-             } catch (fC) {}
- ... (18 more removed lines; see GitHub link above)
+       constructor(pp) {
+         let ip = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+           Op = arguments.length > 5 ? arguments[5] : void 0,
+           op = arguments.length > 6 ? arguments[6] : void 0,
+           xp = arguments.length > 7 ? arguments[7] : void 0;
+         super(pp, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, ip, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Op, this.useVertexAlpha = op, this.color = new  … [truncated]
+         const Lp = {
+           attributes: [Sp.j.PositionKind],
+           uniforms: ["world", "viewProjection"],
+           needAlphaBlending: !0,
+           defines: [],
+           useClipPlane: null,
+           shaderLanguage: 0
+         };
+         if (this.useVertexAlpha ? Lp.defines.push("#define VERTEXALPHA") : Lp.needAlphaBlending = !1, this.useVertexColor ? (Lp.defines.push("#define VERTEXCOLOR"), Lp.attributes.push(Sp.j.ColorKind)) : (Lp.uniforms.push("color"), this._color4 = new Ip.h), xp) this.material = xp;
+         else {
+ ... (2 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L795` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L282-L283) · [Before (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L795)

```diff
-           throw FC
+           const pp = new Dp.q("colorShader", this.Gl(), "color", Lp, !1);
+           pp.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(pp)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L804-L807` → after: `L286-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L286-L287) · [Before (L804-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L804-L807)

```diff
-     }
-     class Kz {
-       constructor() {
-         this.listeners = []
+       getClassName() {
+         return "LinesMesh"
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L809-L810` → after: `L289-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L289-L290) · [Before (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L809-L810)

```diff
-       addEventListener(CC) {
-         this.listeners.push(CC)
+       get material() {
+         return this._internalAbstractMeshDataInfo._material
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L812-L813` → after: `L292-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L292-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L292-L296) · [Before (L812-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L812-L813)

```diff
-       abort() {
-         this.listeners.forEach((CC => CC()))
+       set material(pp) {
+         const ip = this.material;
+         if (ip === pp) return;
+         const cp = ip && this._ownsMaterial;
+         this._ownsMaterial = !1, this._setInternalMaterial(pp), cp && ip?.dispose()
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L815-L855` → after: `L298-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L298-L299) · [Before (L815-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L815-L855)

```diff
-     }
-     let Yz, dz;
- 
-     function mz(CC) {
-       dz = CC
-     }
- 
-     function Hz(CC) {
-       Yz = CC
-     }
-     async function Ez(CC, zC, ZC, QC, wC, nC, fC) {
-       var oC;
-       const qC = ez(CC);
-       qC.then((zC => {
-         ZC[zC.measurementId] = zC.appId, CC.options.measurementId && zC.measurementId !== CC.options.measurementId && Pz.warn(`The measurement ID in the local Firebase config (${CC.options.measurementId}) does not match the measurement ID fetched from the server (${zC.measurement … [truncated]
-       })).catch((CC => Pz.error(CC))), zC.push(qC);
- ... (25 more removed lines; see GitHub link above)
+       _setInternalMaterial(pp) {
+         this._setMaterial(pp), this.material && (this.material.fillMode = Yp.b.LineListDrawMode, this.material.disableLighting = !0)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L857-L858` → after: `L301-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L301-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L301-L302) · [Before (L857-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L857-L858)

```diff
-       _delete() {
-         return delete Xz[this.app.options.appId], Promise.resolve()
+       get checkCollisions() {
+         return !1
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L860-L881` → after: `L304-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L304-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L304-L314) · [Before (L860-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L860-L881)

```diff
-     }
-     let Xz = {},
-       cz = [];
-     const uz = {};
-     let rz, sz, Tz = "dataLayer",
-       az = "gtag",
-       tz = !1;
- 
-     function Dz(CC) {
-       if (tz) throw Rz.create("already-initialized");
-       CC.dataLayerName && (Tz = CC.dataLayerName), CC.gtagName && (az = CC.gtagName)
-     }
- 
-     function jz(CC, zC, ZC) {
-       ! function() {
-         const CC = [];
- ... (6 more removed lines; see GitHub link above)
+       set checkCollisions(pp) {}
+       _bind(pp, ip) {
+         if (!this._geometry) return this;
+         const cp = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
+         if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(ip, cp) : this._geometry._bind(ip, cp, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMate … [truncated]
+           const {
+             r: pp,
+             g: ip,
+             b: cp
+           } = this.color;
+           this._color4.set(pp, ip, cp, this.alpha), this.material.setColor4("color", this._color4)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L883-L888` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L316) · [Before (L883-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L883-L888)

```diff
-       }();
-       const QC = CC.options.appId;
-       if (!QC) throw Rz.create("no-app-id");
-       if (!CC.options.apiKey) {
-         if (!CC.options.measurementId) throw Rz.create("no-api-key");
-         Pz.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${CC.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
+         return this
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L890-L911` → after: `L318-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L318-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L318-L321) · [Before (L890-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L890-L911)

```diff
-       if (null != Xz[QC]) throw Rz.create("already-exists", {
-         id: QC
-       });
-       if (!tz) {
-         ! function(CC) {
-           let zC = [];
-           Array.isArray(window[CC]) ? zC = window[CC] : window[CC] = zC
-         }(Tz);
-         const {
-           wrappedGtag: CC,
-           gtagCore: zC
-         } = function(CC, zC, ZC, QC, wC) {
-           let bC = function() {
-             for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
-             window[QC].push(arguments)
-           };
- ... (6 more removed lines; see GitHub link above)
+       _draw(pp, ip, cp) {
+         if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
+         const Op = this.Gl().gy();
+         return this._unIndexed ? Op.drawArraysType(Yp.b.LineListDrawMode, pp.verticesStart, pp.verticesCount, cp) : Op.drawElementsType(Yp.b.LineListDrawMode, pp.indexStart, pp.indexCount, cp), this
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L913-L930` → after: `L323-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L323-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L323-L325) · [Before (L913-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L913-L930)

```diff
-       Xz[QC] = Ez(CC, cz, uz, zC, rz, Tz, ZC);
-       return new lz(CC)
-     }
- 
-     function yz() {
-       let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, QC.S)();
-       CC = (0, bC.L)(CC);
-       const zC = (0, QC.D)(CC, Sz);
-       return zC.isInitialized() ? zC.getImmediate() : Lz(CC)
-     }
- 
-     function Lz(CC) {
-       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       const ZC = (0, QC.D)(CC, Sz);
-       if (ZC.isInitialized()) {
-         const CC = ZC.getImmediate();
- ... (2 more removed lines; see GitHub link above)
+       dispose(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || ip) && this.material?.dispose(!1, !1, !0), super.dispose(pp)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L932-L943` → after: `L327-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L327-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L327-L334) · [Before (L932-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L932-L943)

```diff
-       return ZC.initialize({
-         options: zC
-       })
-     }
-     async function Uz() {
-       if ((0, bC.R)()) return !1;
-       if (!(0, bC.n)()) return !1;
-       if (!(0, bC._)()) return !1;
-       try {
-         return await (0, bC.mb)()
-       } catch (CC) {
-         return !1
+       clone(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           cp = arguments.length > 2 ? arguments[2] : void 0;
+         if (ip && void 0 === ip._addToSceneRootNodes) {
+           const cp = ip;
+           return cp.source = this, new Pp(pp, this.Gl(), cp.parent, cp.source, cp.doNotCloneChildren)
+         }
+         return new Pp(pp, this.Gl(), ip, this, cp)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L945-L986` → after: `L336-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L336-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L336-L340) · [Before (L945-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L945-L986)

```diff
-     }
- 
-     function Bz(CC, zC, ZC) {
-       CC = (0, bC.L)(CC), async function(CC, zC, ZC, QC) {
-         if (QC && QC.global) return CC("set", {
-           screen_name: ZC
-         }), Promise.resolve();
-         CC("config", await zC, {
-           update: !0,
-           screen_name: ZC
-         })
-       }(sz, Xz[CC.app.options.appId], zC, ZC).catch((CC => Pz.error(CC)))
-     }
-     async function Oz(CC) {
-       return CC = (0, bC.L)(CC), async function(CC, zC) {
-         const ZC = await zC;
- ... (26 more removed lines; see GitHub link above)
+       createInstance(pp) {
+         const ip = new Wp(pp, this);
+         if (this.MJ) {
+           ip.MJ = {};
+           for (const pp in this.MJ) ip.MJ[pp] = this.MJ[pp]
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L988-L1003` → after: `L342-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L342-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L342-L350) · [Before (L988-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L988-L1003)

```diff
-         CC("config", await zC, {
-           update: !0,
-           user_properties: ZC
-         })
-       }(sz, Xz[CC.app.options.appId], zC, ZC).catch((CC => Pz.error(CC)))
-     }
- 
-     function CZ(CC, zC) {
-       CC = (0, bC.L)(CC), async function(CC, zC) {
-         const ZC = await CC;
-         window[`ga-disable-${ZC}`] = !zC
-       }(Xz[CC.app.options.appId], zC).catch((CC => Pz.error(CC)))
-     }
- 
-     function zZ(CC) {
-       sz ? sz("set", CC) : Hz(CC)
+         return ip
+       }
+       serialize(pp) {
+         super.serialize(pp), pp.color = this.color.BOp(), pp.alpha = this.alpha
+       }
+       static Parse(pp, ip) {
+         const cp = new Pp(pp.name, ip);
+         return cp.color = Ip.d.FromArray(pp.color), cp.alpha = pp.alpha, cp
+       }
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L1005-L1015` → after: `L352-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L352-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L352-L359) · [Before (L1005-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L1005-L1015)

```diff
- 
-     function ZZ(CC, zC, ZC, QC) {
-       CC = (0, bC.L)(CC), async function(CC, zC, ZC, QC, wC) {
-         if (wC && wC.global) CC("event", ZC, QC);
-         else {
-           const wC = await zC;
-           CC("event", ZC, Object.assign(Object.assign({}, QC), {
-             send_to: wC
-           }))
-         }
-       }(sz, Xz[CC.app.options.appId], zC, ZC, QC).catch((CC => Pz.error(CC)))
+     Pp.ForceGLSL = !1;
+     class Wp extends Lp.d {
+       constructor(pp, ip) {
+         super(pp, ip), this.intersectionThreshold = ip.intersectionThreshold
+       }
+       getClassName() {
+         return "InstancedLinesMesh"
+       }
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L1018-L1039` → after: `L363-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L363-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/267.js#L363-L365) · [Before (L1018-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/267.js#L1018-L1039)

```diff
-     function QZ(CC) {
-       sz ? sz("consent", "update", CC) : mz(CC)
-     }
-     const wZ = "@firebase/analytics",
-       bZ = "0.10.0";
-     (0, QC.H)(new nC.f(Sz, ((CC, zC) => {
-       let {
-         options: ZC
-       } = zC;
-       return jz(CC.getProvider("app").getImmediate(), CC.getProvider("installations-internal").getImmediate(), ZC)
-     }), "PUBLIC")), (0, QC.H)(new nC.f("analytics-internal", (function(CC) {
-       try {
-         const zC = CC.getProvider(Sz).getImmediate();
-         return {
-           logEvent: (CC, ZC, QC) => ZZ(zC, CC, ZC, QC)
-         }
- ... (6 more removed lines; see GitHub link above)
+     function Up() {
+       yp || (yp = !0, xp.d._LinesMeshParser = (pp, ip) => Pp.Parse(pp, ip))
+     }(Op = Pp.prototype).enableEdgesRendering ?? (Op.enableEdgesRendering = (0, Ap.k)("LinesMesh", "enableEdgesRendering")), (op = Wp.prototype).enableEdgesRendering ?? (op.enableEdgesRendering = (0, Ap.k)("InstancedLinesMesh", "enableEdgesRendering"))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/268.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/268.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813)

#### 1. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L5-L3926` → after: `L4-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L4-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/268.js#L4-L239) · [Before (L5-L3926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/268.js#L5-L3926)

```diff
-     40364: (CC, zC, ZC) => {
-         ZC.r(zC), ZC.d(zC, {
-           ActionCodeOperation: () => NC,
-           ActionCodeURL: () => Oz,
-           AuthCredential: () => uz,
-           AuthErrorCodes: () => PC,
-           EmailAuthCredential: () => jz,
-           EmailAuthProvider: () => Vz,
-           FacebookAuthProvider: () => QZ,
-           FactorId: () => oC,
-           GithubAuthProvider: () => bZ,
-           GoogleAuthProvider: () => wZ,
-           OAuthCredential: () => Lz,
-           OAuthProvider: () => ZZ,
-           OperationType: () => WC,
-           PhoneAuthCredential: () => Bz,
- ... (3906 more removed lines; see GitHub link above)
+   40647: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => kp,
+       f: () => ep,
+       j: () => Hp,
+       m: () => dp,
+       p: () => tp,
+       q: () => vp
+     });
+     var Op = cp(40233),
+       op = cp(40296),
+       Ip = cp(37320),
+       Sp = cp(40342),
+       xp = cp(40654),
+       Lp = cp(40530),
+       Yp = cp(40261),
+ ... (220 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L3928-L3952` → after: `L241-L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L241-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/268.js#L241-L354) · [Before (L3928-L3952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/268.js#L3928-L3952)

```diff
-           Tw = new Map([
-             ["identitytoolkit.googleapis.com", "p"],
-             ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
-             ["test-identitytoolkit.sandbox.googleapis.com", "t"]
-           ]);
- 
-         function aw(CC) {
-           const zC = CC.config;
-           vC(zC.authDomain, CC, "auth-domain-config-required");
-           const ZC = zC.emulator ? HC(zC, "emulator/auth/iframe") : `https://${CC.config.authDomain}/__/auth/iframe`,
-             bC = {
-               apiKey: zC.apiKey,
-               appName: CC.name,
-               v: wC.i
-             },
-             nC = Tw.get(CC.config.apiHost);
- ... (9 more removed lines; see GitHub link above)
+           shaderLanguage: this._options.shaderLanguage,
+           extraInitializationsAsync: this._options.extraInitializationsAsync
+         }, xp), Op ? cp.setEffect(Mp, qp, this._materialContext) : kp && kp.setEffect(Mp, qp), this._onEffectCreatedObservable && (wp.effect = Mp, wp.subMesh = cp ?? pp?.Am[0] ?? null, this._onEffectCreatedObservable.notifyObservers(wp))), kp._wasPreviouslyUsingInstances = !!ip,  … [truncated]
+       }
+       bindOnlyWorldMatrix(pp, ip) {
+         const cp = ip ?? this.getEffect();
+         if (!cp) return;
+         const Op = this._options.uniforms; - 1 !== Op.indexOf("world") && cp.setMatrix("world", pp);
+         const op = this.Gl(); - 1 !== Op.indexOf("worldView") && (pp.multiplyToRef(op.getViewMatrix(), this._cachedWorldViewMatrix), cp.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== Op.indexOf("worldViewProjection") && (pp.multiplyToRef(op.getTransformMatrix(), thi … [truncated]
+       }
+       bindForSubMesh(pp, ip, cp) {
+         this.bind(pp, ip, cp._drawWrapperOverride?.effect, cp)
+       }
+       bind(pp, ip, cp, Op) {
+         const op = Op && this._storeEffectOnSubMeshes,
+           Ip = cp ?? (op ? Op.effect : this.getEffect());
+ ... (98 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L3954-L4026` → after: `L356-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L356-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/268.js#L356-L573) · [Before (L3954-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/268.js#L3954-L4026)

```diff
-         class Dw {
-           constructor(CC) {
-             this.window = CC, this.associatedEvent = null
-           }
-           close() {
-             if (this.window) try {
-               this.window.close()
-             } catch (CC) {}
-           }
-         }
- 
-         function jw(CC, zC, ZC) {
-           let wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
-             bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
-           const nC = Math.max((window.screen.availHeight - bC) / 2, 0).toString(),
-             fC = Math.max((window.screen.availWidth - wC) / 2, 0).toString();
- ... (57 more removed lines; see GitHub link above)
+         const cp = Object.keys(this._options);
+         for (const Op of cp) {
+           const pp = this._options[Op];
+           Array.isArray(pp) && (this._options[Op] = pp.slice(0))
+         }
+         this.stencil.copyTo(ip.stencil);
+         for (const Op in this._textures) ip.setTexture(Op, this._textures[Op]);
+         for (const Op in this._internalTextures) ip.setInternalTexture(Op, this._internalTextures[Op]);
+         for (const Op in this._textureArrays) ip.setTextureArray(Op, this._textureArrays[Op]);
+         for (const Op in this._externalTextures) ip.setExternalTexture(Op, this._externalTextures[Op]);
+         for (const Op in this._ints) ip.setInt(Op, this._ints[Op]);
+         for (const Op in this._uints) ip.setUInt(Op, this._uints[Op]);
+         for (const Op in this._floats) ip.setFloat(Op, this._floats[Op]);
+         for (const Op in this._floatsArrays) ip.setFloats(Op, this._floatsArrays[Op]);
+         for (const Op in this._colors3) ip.setColor3(Op, this._colors3[Op]);
+         for (const Op in this._colors3Arrays) ip._colors3Arrays[Op] = this._colors3Arrays[Op];
+ ... (202 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/269.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/269.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70)

#### 1. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L4-L141` → after: `L5-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L5-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/269.js#L5-L24) · [Before (L4-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/269.js#L4-L141)

```diff
-   40412: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       $: () => Vz,
-       $d: () => gz,
-       $e: () => BZ,
-       $f: () => cZ,
-       Ab: () => rC,
-       Ac: () => RC,
-       Ad: () => SC,
-       Be: () => ZQ,
-       Bf: () => hZ,
-       Cc: () => Fz,
-       Cg: () => NZ,
-       D: () => DC,
-       Dd: () => gC,
-       Eb: () => ZZ,
- ... (122 more removed lines; see GitHub link above)
+   40682: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       FirebaseError: () => Op.d,
+       SDK_VERSION: () => Op.f,
+       _DEFAULT_ENTRY_NAME: () => Op.g,
+       uOp: () => Op.i,
+       _addOrOverwriteComponent: () => Op.k,
+       _apps: () => Op.o,
+       _clearComponents: () => Op.r,
+       _components: () => Op.u,
+       _getProvider: () => Op.x,
+       _registerComponent: () => Op.z,
+       _removeServiceInstance: () => Op.B,
+       deleteApp: () => Op.D,
+       getApp: () => Op.J,
+       getApps: () => Op.G,
+ ... (4 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L143-L1364` → after: `L26-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/269.js#L26-L27) · [Before (L143-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/269.js#L143-L1364)

```diff
-     const QC = -2147483648,
-       wC = 12,
-       bC = 12,
-       nC = 4095,
-       fC = {
-         Lifeform: 1,
-         Throwable: 2,
-         Mesh: 3,
-         Audio: 4,
-         Item: 5
-       },
-       oC = {
-         Alive: 1,
-         Crouching: 2,
-         OnGround: 4,
-         InFluid: 8,
- ... (1206 more removed lines; see GitHub link above)
+     var Op = cp(40687);
+     (0, Op.S)("firebase", "9.23.0", "app")
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/270.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/270.js` (117 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L4` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L5) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L4)

```diff
-   41418: (CC, zC, ZC) => {
+   40700: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L6` → after: `L7-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L7-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L7-L20) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L6)

```diff
-       c: () => pC,
+       A: () => Xp,
+       B: () => Ap,
+       D: () => Dp,
+       E: () => Pp,
+       F: () => hp,
+       H: () => yp,
+       K: () => wp,
+       L: () => Rp,
+       P: () => tp,
+       Q: () => Hp,
+       T: () => Up,
+       X: () => vp,
+       _: () => Ep,
+       cb: () => Cp,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L8-L9` → after: `L22-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L22-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L22-L30) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L8-L9)

```diff
-       h: () => nC,
-       j: () => qC
+       gb: () => dp,
+       i: () => kp,
+       l: () => jp,
+       o: () => ep,
+       r: () => xp,
+       s: () => Sp,
+       v: () => bp,
+       x: () => lp,
+       y: () => qp
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L11-L21` → after: `L32-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L32-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L32-L181) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L11-L21)

```diff
-     var QC = ZC(37138),
-       wC = ZC(38538),
-       bC = ZC(38529);
- 
-     function nC(CC, zC, ZC, QC) {
-       const wC = bC.x;
-       zC.fill(0), CC.gravity.toArray(zC, wC.gravity), CC.colorDead.toArray(zC, wC.colorDead), ZC[wC.ramp] = CC.useRampGradients ? 1 : 0;
-       const nC = CC.getColorGradients(),
-         fC = NC(CC, nC, "colour", QC);
-       ZC[wC.colorCount] = fC;
-       for (let bC = 0; bC < fC; bC++) {
+     const Op = function(pp) {
+         const ip = [];
+         let cp = 0;
+         for (let Op = 0; Op < pp.length; Op++) {
+           let op = pp.charCodeAt(Op);
+           op < 128 ? ip[cp++] = op : op < 2048 ? (ip[cp++] = op >> 6 | 192, ip[cp++] = 63 & op | 128) : 55296 === (64512 & op) && Op + 1 < pp.length && 56320 === (64512 & pp.charCodeAt(Op + 1)) ? (op = 65536 + ((1023 & op) << 10) + (1023 & pp.charCodeAt(++Op)), ip[cp++] = op >> 1 … [truncated]
+         }
+         return ip
+       },
+       op = {
+         byteToCharMap_: null,
+         charToByteMap_: null,
+         byteToCharMapWebSafe_: null,
+         charToByteMapWebSafe_: null,
+         ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
+         get ENCODED_VALS() {
+ ... (134 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L23-L24` → after: `L183-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L183-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L183-L194) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L23-L24)

```diff
-         const CC = nC[MC(nC, bC)];
-         zC[wC.colorPositions + bC] = CC.gradient, CC.color1.toArray(zC, wC.color1 + 4 * bC), (null !== (oC = CC.color2) && void 0 !== oC ? oC : CC.color1).toArray(zC, wC.color2 + 4 * bC)
+         return null === (ip = Yp()) || void 0 === ip ? void 0 : ip[`_${pp}`]
+       };
+     class Wp {
+       constructor() {
+         this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise(((pp, ip) => {
+           this.resolve = pp, this.reject = ip
+         }))
+       }
+       wrapCallback(pp) {
+         return (ip, cp) => {
+           ip ? this.reject(ip) : this.resolve(cp), "function" === typeof pp && (this.promise.catch((() => {})), 1 === pp.length ? pp(ip) : pp(ip, cp))
+         }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L37-L40` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L199) · [Before (L37-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L37-L40)

```diff
-       return {
-         key: [],
-         texels: new Uint8Array(4 * bC.k)
-       }
+       return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : ""
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L44-L49` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L202-L203) · [Before (L44-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L44-L49)

```diff
-     function qC(CC, zC) {
-       return FC(CC, oC), !PC(oC, zC.key) && (zC.key.length = 0, zC.key.push(...oC), zC.key.length > 0 && function(CC, zC) {
-         for (let ZC = 0; ZC < bC.k; ZC++) wC.k.GetCurrentGradient(ZC / bC.k, CC, ((CC, zC, ZC) => {
-           QC.Color3.LerpToRef(CC.color, zC.color, ZC, WC)
-         })), zC[4 * ZC] = 255 * WC.r, zC[4 * ZC + 1] = 255 * WC.g, zC[4 * ZC + 2] = 255 * WC.b, zC[4 * ZC + 3] = 255
-       }(CC.getRampGradients(), zC.texels), !0)
+     function Up() {
+       return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yp())
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L52-L57` → after: `L206-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L206-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L206-L224) · [Before (L52-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L52-L57)

```diff
-     function FC(CC, zC) {
-       zC.length = 0;
-       const ZC = CC.useRampGradients ? CC.getRampGradients() : null;
-       if (null !== ZC && void 0 !== ZC && ZC.length) {
-         zC.push(ZC.length);
-         for (const CC of ZC) zC.push(CC.gradient, CC.color.r, CC.color.g, CC.color.b)
+     function wp() {
+       const pp = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
+       return "object" === typeof pp && void 0 !== pp.id
+     }
+ 
+     function vp() {
+       return "object" === typeof navigator && "ReactNative" === navigator.product
+     }
+ 
+     function tp() {
+       const pp = yp();
+       return pp.indexOf("MSIE ") >= 0 || pp.indexOf("Trident/") >= 0
+     }
+ 
+     function Hp() {
+       try {
+ ... (3 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L62-L63` → after: `L228-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L228-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L228-L245) · [Before (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L62-L63)

```diff
-     function NC(CC, zC, ZC, QC) {
-       return zC ? zC.length > bC.d ? (QC(`particleStops:${ZC}`, `GPU particles use the first 2 and last ${bC.d-2} of more than ${bC.d} ${ZC} gradient stops (${CC.name})`), bC.d) : zC.length : 0
+     function dp() {
+       return new Promise(((pp, ip) => {
+         try {
+           let cp = !0;
+           const Op = "validate-browser-context-for-indexeddb-analytics-module",
+             op = self.indexedDB.open(Op);
+           op.onsuccess = () => {
+             op.result.close(), cp || self.indexedDB.deleteDatabase(Op), pp(!0)
+           }, op.onupgradeneeded = () => {
+             cp = !1
+           }, op.onerror = () => {
+             var pp;
+             ip((null === (pp = op.error) || void 0 === pp ? void 0 : pp.message) || "")
+           }
+         } catch (cp) {
+           ip(cp)
+ ... (2 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L66-L67` → after: `L248-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L248-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L248-L272) · [Before (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L66-L67)

```diff
-     function MC(CC, zC) {
-       return zC < 2 || CC.length <= bC.d ? zC : CC.length - bC.d + zC
+     function ep() {
+       return !("undefined" === typeof navigator || !navigator.cookieEnabled)
+     }
+     class jp extends Error {
+       constructor(pp, ip, cp) {
+         super(ip), this.code = pp, this.customData = cp, this.name = "FirebaseError", Object.setPrototypeOf(this, jp.prototype), Error.captureStackTrace && Error.captureStackTrace(this, kp.prototype.create)
+       }
+     }
+     class kp {
+       constructor(pp, ip, cp) {
+         this.service = pp, this.serviceName = ip, this.errors = cp
+       }
+       create(pp) {
+         const ip = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
+           cp = `${this.service}/${pp}`,
+           Op = this.errors[pp],
+ ... (9 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L69-L70` → after: `L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L274) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L69-L70)

```diff
-     const gC = new Float32Array(bC.r),
-       SC = new Uint32Array(gC.buffer);
+     const mp = /\{\$([^}]+)}/g;
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L72-L73` → after: `L276-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L276-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L276-L279) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L72-L73)

```diff
-     function pC(CC, zC, ZC) {
-       return nC(CC, gC, SC, ZC), zC && PC(SC, zC) ? null : SC.slice()
+     function Rp(pp) {
+       for (const ip in pp)
+         if (Object.prototype.hasOwnProperty.call(pp, ip)) return !1;
+       return !0
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L77-L79` → after: `L283-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L283-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L283-L295) · [Before (L77-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L77-L79)

```diff
-       if (CC.length !== zC.length) return !1;
-       for (let ZC = 0; ZC < CC.length; ZC++)
-         if (CC[ZC] !== zC[ZC]) return !1;
+       if (pp === ip) return !0;
+       const cp = Object.keys(pp),
+         Op = Object.keys(ip);
+       for (const op of cp) {
+         if (!Op.includes(op)) return !1;
+         const cp = pp[op],
+           Ip = ip[op];
+         if (Mp(cp) && Mp(Ip)) {
+           if (!qp(cp, Ip)) return !1
+         } else if (cp !== Ip) return !1
+       }
+       for (const op of Op)
+         if (!cp.includes(op)) return !1;
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L83-L85` → after: `L299-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L299-L300) · [Before (L83-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L83-L85)

```diff
-     function GC(CC, zC, ZC) {
-       var QC;
-       CC[zC] = ZC.gradient, CC[zC + 1] = ZC.factor1, CC[zC + 2] = null !== (QC = ZC.factor2) && void 0 !== QC ? QC : ZC.factor1
+     function Mp(pp) {
+       return null !== pp && "object" === typeof pp
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L87-L94` → after: `L302-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L302-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L302-L308) · [Before (L87-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L87-L94)

```diff
-   },
-   41411: (CC, zC, ZC) => {
-     function QC() {
-       let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
-       const zC = new Set;
-       return (ZC, QC) => {
-         zC.has(ZC) || (zC.add(ZC), console.warn(CC + QC))
-       }
+ 
+     function Cp(pp) {
+       const ip = [];
+       for (const [cp, Op] of Object.entries(pp)) Array.isArray(Op) ? Op.forEach((pp => {
+         ip.push(encodeURIComponent(cp) + "=" + encodeURIComponent(pp))
+       })) : ip.push(encodeURIComponent(cp) + "=" + encodeURIComponent(Op));
+       return ip.length ? "&" + ip.join("&") : ""
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L96-L132` → after: `L310-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L310-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L310-L316) · [Before (L96-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L96-L132)

```diff
-     ZC.d(zC, {
-       b: () => QC
-     })
-   },
-   41448: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       createLiteRendererAsync: () => uo,
-       liteBabylonBackend: () => rC,
-       setPipelineFailureHook: () => yw
-     });
-     var QC = ZC(37138),
-       wC = ZC(37456),
-       bC = ZC(37729),
-       nC = ZC(37076),
-       fC = ZC(37740);
-     class oC extends fC.b {
- ... (21 more removed lines; see GitHub link above)
+ 
+     function Ep(pp) {
+       const ip = {};
+       return pp.replace(/^\?/, "").split("&").forEach((pp => {
+         if (pp) {
+           const [cp, Op] = pp.split("=");
+           ip[decodeURIComponent(cp)] = decodeURIComponent(Op)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L134-L137` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L318) · [Before (L134-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L134-L137)

```diff
-       }
-       getClassName() {
-         return "LinesMesh"
-       }
+       })), ip
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L148-L150` → after: `L321-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L321-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L321-L325) · [Before (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L148-L150)

```diff
-     function PC(CC, zC, ZC, QC) {
-       let wC = 0;
-       return CC.isVerticesDataPresent("color") && (wC |= WC), "none" !== zC && (wC |= NC), "thin" === zC && (wC |= MC, CC.isVerticesDataPresent("instanceColor") && (wC |= gC)), QC.fogEnabled && CC.applyFog && 0 !== QC.fogMode && (wC |= SC), ZC >= 1 && (wC |= pC), wC
+     function Xp(pp) {
+       const ip = pp.indexOf("?");
+       if (!ip) return "";
+       const cp = pp.indexOf("#", ip);
+       return pp.substring(ip, cp > 0 ? cp : void 0)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L154` → after: `L329-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L329-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L329-L330) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L154)

```diff
-       CC.updateColor4("color", zC.color, zC.alpha)
+       const cp = new Qp(pp, ip);
+       return cp.subscribe.bind(cp)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L168-L178` → after: `L334-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L334-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L334-L338) · [Before (L168-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L168-L178)

```diff
-         this.name = CC, this.sS = zC, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.Tm = {
-           addOnce: CC => {
-             this.disposers.push(CC)
-           }
-         }, this.uniqueId = zC.getUniqueId()
-       }
-       get isFrozen() {
-         return this.checkReadyOnlyOnce
-       }
-       Km() {
-         return this.sS
+         this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = ip, this.task.then((() => {
+           pp(this)
+         })).catch((pp => {
+           this.error(pp)
+         }))
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L180-L181` → after: `L340-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L340-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L340-L343) · [Before (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L180-L181)

```diff
-       getClassName() {
-         return "LiteMaterial"
+       next(pp) {
+         this.forEachObserver((ip => {
+           ip.next(pp)
+         }))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L183-L184` → after: `L345-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L345-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L345-L348) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L183-L184)

```diff
-       freeze() {
-         this.checkReadyOnlyOnce = !0
+       error(pp) {
+         this.forEachObserver((ip => {
+           ip.error(pp)
+         })), this.close(pp)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L186-L187` → after: `L350-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L350-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L350-L353) · [Before (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L186-L187)

```diff
-       unfreeze() {
-         this.checkReadyOnlyOnce = !1
+       complete() {
+         this.forEachObserver((pp => {
+           pp.complete()
+         })), this.close()
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L189-L191` → after: `L355-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L355-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L355-L373) · [Before (L189-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L189-L191)

```diff
-       markDirty() {}
-       get fillMode() {
-         return this.model.fillMode
+       subscribe(pp, ip, cp) {
+         let Op;
+         if (void 0 === pp && void 0 === ip && void 0 === cp) throw new Error("Missing Observer.");
+         Op = function(pp, ip) {
+           if ("object" !== typeof pp || null === pp) return !1;
+           for (const cp of ip)
+             if (cp in pp && "function" === typeof pp[cp]) return !0;
+           return !1
+         }(pp, ["next", "error", "complete"]) ? pp : {
+           next: pp,
+           error: ip,
+           complete: cp
+         }, void 0 === Op.next && (Op.next = Jp), void 0 === Op.error && (Op.error = Jp), void 0 === Op.complete && (Op.complete = Jp);
+         const op = this.unsubscribeOne.bind(this, this.observers.length);
+         return this.finalized && this.task.then((() => {
+           try {
+ ... (3 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L193-L194` → after: `L375-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L375-L376) · [Before (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L193-L194)

```diff
-       needAlphaBlendingForMesh(CC) {
-         return (0, vC.Q)(this.model, CC.visibility, CC.hasVertexAlpha)
+       unsubscribeOne(pp) {
+         void 0 !== this.observers && void 0 !== this.observers[pp] && (delete this.observers[pp], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L196-L197` → after: `L378-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L378-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L378-L380) · [Before (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L196-L197)

```diff
-       needAlphaTestingForMesh(CC) {
-         return (0, vC.R)(this.model, CC.visibility, CC.hasVertexAlpha)
+       forEachObserver(pp) {
+         if (!this.finalized)
+           for (let ip = 0; ip < this.observers.length; ip++) this.sendOne(ip, pp)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L199-L201` → after: `L382-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L382-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L382-L389) · [Before (L199-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L199-L201)

```diff
-       dispose() {
-         (0, AC.k)(this);
-         for (const CC of this.disposers.splice(0)) CC()
+       sendOne(pp, ip) {
+         this.task.then((() => {
+           if (void 0 !== this.observers && void 0 !== this.observers[pp]) try {
+             ip(this.observers[pp])
+           } catch (cp) {
+             "undefined" !== typeof console && console.error && console.error(cp)
+           }
+         }))
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L203-L204` → after: `L391-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L391-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L391-L394) · [Before (L203-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L203-L204)

```diff
-       get model() {
-         return (0, vC.Y)(this)
+       close(pp) {
+         this.finalized || (this.finalized = !0, void 0 !== pp && (this.finalError = pp), this.task.then((() => {
+           this.observers = void 0, this.onNoObservers = void 0
+         })))
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L207` → after: `L397-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L397-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L397-L402) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L207)

```diff
-     const dC = new WeakSet;
+ 
+     function Jp() {}
+     const Bp = 1e3,
+       Np = 2,
+       Tp = 144e5,
+       fp = .5;
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L210` → after: `L405-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L405-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L405-L408) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L210)

```diff
-       return dC.has(CC)
+       let ip = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Np;
+       const cp = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bp) * Math.pow(ip, pp),
+         Op = Math.round(fp * cp * (Math.random() - .5) * 2);
+       return Math.min(Tp, cp + Op)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L214` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L412) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L214)

```diff
-       dC.add(CC)
+       return pp && pp._delegate ? pp._delegate : pp
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L216-L244` → after: `L414-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L414-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L414-L452) · [Before (L216-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L216-L244)

```diff
-     const EC = {
-       create: (CC, zC) => ((0, xC.u)(CC, new YC(CC.name, zC)), eC.c.defines()),
-       write: () => {},
-       addFeature: (CC, zC) => {
-         const ZC = CC.mirror;
-         zC.feature === iC.f && zC.state.dirLightCount > 0 && (CC.disableLighting = !0, (0, vC.W)(CC)), "BLOXD_LIGHTING" in zC.defines && (0, AC.g)(ZC), zC.feature === IC.j && ((0, RC.k)(zC.state, KC), function(CC, zC) {
-           const ZC = CC.Km().mg();
-           zC.textures.forEach(((QC, wC) => {
-             setTimeout((() => {
-               var bC, nC;
-               const {
-                 url: fC
-               } = QC.source;
-               ZC.atlasArray(fC, null !== (bC = null === (nC = zC.sources.pixels) || void 0 === nC ? void 0 : nC[wC]) && void 0 !== bC ? bC : null, zC.sources.layerWidth).then((ZC => {
-                 (0, RC.d)(CC, zC, wC, ZC, ZC.layerWidth, ZC.layers, KC)
-               })).catch((CC => {
- ... (13 more removed lines; see GitHub link above)
+   },
+   40687: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Ip.l,
+       f: () => Wi,
+       g: () => Vp,
+       i: () => oi,
+       k: () => Ii,
+       o: () => ci,
+       r: () => Yi,
+       u: () => Oi,
+       x: () => xi,
+       z: () => Si,
+       B: () => Li,
+       D: () => vi,
+       J: () => Ui,
+ ... (23 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L246-L270` → after: `L454-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L454-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L454-L455) · [Before (L246-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L246-L270)

```diff
-       cube: HC,
-       canvas: (CC, zC, ZC) => {
-         let {
-           width: QC,
-           height: wC,
-           mipmaps: bC,
-           samplingMode: nC = hC.h.trilinear,
-           hasAlpha: fC = !1,
-           wrap: oC = hC.d.clamp
-         } = ZC;
-         const qC = CC.mg().createCanvas(QC, wC),
-           FC = new hC.i("2d", {
-             kind: "canvas",
-             width: QC,
-             height: wC,
-             canvas: qC
- ... (9 more removed lines; see GitHub link above)
+       set: (pp, ip, cp) => (pp[ip] = cp, !0),
+       has: (pp, ip) => pp instanceof IDBTransaction && ("done" === ip || "store" === ip) || ip in pp
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L272-L306` → after: `L457-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L457-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L457-L468) · [Before (L272-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L272-L306)

```diff
-     var lC = ZC(37306),
-       XC = ZC(36987);
-     class cC {
-       constructor(CC, zC, ZC) {
-         this.engine = CC, this.clearColor = zC, this.ambientColor = ZC, this.onBeforeRenderObservable = new XC.d, this.onBeforeCameraRenderObservable = new XC.d, this.onAfterRenderObservable = new XC.d, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = … [truncated]
-       }
-       mg() {
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
+     function yp(pp) {
+       return pp !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (xp || (xp = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(pp) ? function() {
+         for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
+         return pp.apply(vp(this), cp), wp(Lp.get(this))
+       } : function() {
+         for (var ip = arguments.length, cp = new Array(ip), Op = 0; Op < ip; Op++) cp[Op] = arguments[Op];
+         return wp(pp.apply(vp(this), cp))
+       } : function(ip) {
+         for (var cp = arguments.length, Op = new Array(cp > 1 ? cp - 1 : 0), op = 1; op < cp; op++) Op[op - 1] = arguments[op];
+         const Ip = pp.call(vp(this), ip, ...Op);
+         return Dp.set(Ip, ip.sort ? ip.sort() : [ip]), wp(Ip)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L310-L311` → after: `L472-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L472-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L472-L489) · [Before (L310-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L310-L311)

```diff
-     function uC() {
-       throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
+     function Up(pp) {
+       return "function" === typeof pp ? yp(pp) : (pp instanceof IDBTransaction && function(pp) {
+         if (Yp.has(pp)) return;
+         const ip = new Promise(((ip, cp) => {
+           const Op = () => {
+               pp.removeEventListener("complete", op), pp.removeEventListener("error", Ip), pp.removeEventListener("abort", Ip)
+             },
+             op = () => {
+               ip(), Op()
+             },
+             Ip = () => {
+               cp(pp.error || new DOMException("AbortError", "AbortError")), Op()
+             };
+           pp.addEventListener("complete", op), pp.addEventListener("error", Ip), pp.addEventListener("abort", Ip)
+         }));
+         Yp.set(pp, ip)
+ ... (2 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L313-L339` → after: `L491-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L491-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L491-L504) · [Before (L313-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L313-L339)

```diff
-     const rC = {
-       gZC: uC,
-       EQC: (CC, zC) => {
-         const ZC = new cC(CC.engine, QC.e.FromArray(zC.clearColor), QC.Color3.FromArray(zC.ambientColor));
-         (0, nC.c)(EC, ZC), CC.sS = ZC,
-           function(CC, zC) {
-             const ZC = Object.assign((0, lC.h)(CC, "camera"), {
-               layerMask: 268435455
-             });
-             CC.model.nodes.setWorldSource(ZC.row, CC.model.view.worldMatrix), CC.camera = zC.activeCamera = ZC
-           }(CC, ZC), (0, wC.l)(CC, ((CC, zC, ZC) => (0, bC.i)(CC, zC, ZC, fC.b)))
-       },
-       YQC: () => {},
-       setBabylonFog: () => {},
-       XQC: uC,
-       TQC: () => {},
- ... (11 more removed lines; see GitHub link above)
+ 
+     function wp(pp) {
+       if (pp instanceof IDBRequest) return function(pp) {
+         const ip = new Promise(((ip, cp) => {
+           const Op = () => {
+               pp.removeEventListener("success", op), pp.removeEventListener("error", Ip)
+             },
+             op = () => {
+               ip(wp(pp.result)), Op()
+             },
+             Ip = () => {
+               cp(pp.error), Op()
+             };
+           pp.addEventListener("success", op), pp.addEventListener("error", Ip)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L341-L360` → after: `L506-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L506-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L506-L512) · [Before (L341-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L341-L360)

```diff
-         this.deviceLost = Promise.race([CC, zC]), this.deviceLost.then((() => {
-           this.lost = !0
-         }))
-       }
-       frameDrawn() {
-         this.refusedFrames = 0
-       }
-       frameFailed(CC) {
-         (function(CC) {
-           const {
-             name: zC,
-             message: ZC
-           } = null !== CC && void 0 !== CC ? CC : {};
-           return "InvalidStateError" === zC && "string" === typeof ZC && ZC.startsWith("GPUDevice.")
-         })(CC) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
-           reason: "unknown",
- ... (4 more removed lines; see GitHub link above)
+         return ip.then((ip => {
+           ip instanceof IDBCursor && Lp.set(ip, pp)
+         })).catch((() => {})), Pp.set(ip, pp), ip
+       }(pp);
+       if (Ap.has(pp)) return Ap.get(pp);
+       const ip = Up(pp);
+       return ip !== pp && (Ap.set(pp, ip), Pp.set(ip, pp)), ip
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L364-L375` → after: `L541-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L541-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/270.js#L541-L619) · [Before (L364-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/270.js#L364-L375)

```diff
-         this.resources = CC, this.matrixKey = {
-           HW: 0
-         }, this.attributesKey = {
-           HW: 0
-         }, this.inputs = Object.create(null);
-         for (let zC = 0; zC < 4; zC++) this.inputs[`world${zC}`] = new yC(this.matrixKey, 16 * zC, 64, 4)
-       }
-       release() {
-         this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
-       }
-       bind(CC, zC) {
-         this.resources.vertexBufferCreated(this.matrixKey, CC, !0), zC && this.resources.vertexBufferCreated(this.attributesKey, zC, !0)
+         this.container = pp
+       }
+       getPlatformInfoString() {
+         return this.container.getProviders().map((pp => {
+           if (function(pp) {
+               const ip = pp.getComponent();
+               return "VERSION" === (null === ip || void 0 === ip ? void 0 : ip.type)
+             }(pp)) {
+             const ip = pp.getImmediate();
+             return `${ip.library}/${ip.version}`
+           }
+           return null
+         })).filter((pp => pp)).join(" ")
+       }
+     }
+     const kp = "@firebase/app",
+ ... (63 more added lines; see GitHub link above)
```
