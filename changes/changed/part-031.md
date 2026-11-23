# Changed — Bundle Modifications Report (Part 031 / 104)

- **Updated at**: `2026-11-24T00:51 JST`
- **Part**: `31 / 104` (**325** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 030](part-030.md) · [Part 032 →](part-032.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/229.js` (3lwmg.ecbaa066 → w4ddu.56408518 · continued)

- **File**: `bundles/bloxd.io/chunks/js/229.js` (70 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0)

#### 55. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2310-L2317` → after: `L645-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L645-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L645-L657) · [Before (L2310-L2317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2310-L2317)

```diff
-       getRotationMatrixToRef(kk) {
-         const ek = wk.eH[0];
-         if (!this.decompose(ek)) return Hk.IdentityToRef(kk), kk;
-         const ik = this._m,
-           Dk = 1 / ek._x,
-           fk = 1 / ek._y,
-           Sk = 1 / ek._z;
-         return Hk.FromValuesToRef(ik[0] * Dk, ik[1] * Dk, ik[2] * Dk, 0, ik[4] * fk, ik[5] * fk, ik[6] * fk, 0, ik[8] * Sk, ik[9] * Sk, ik[10] * Sk, 0, 0, 0, 0, 1, kk), kk
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
+         }
+         return this
```

#### 56. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2319-L2321` → after: `L659-L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L659-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L659-L662) · [Before (L2319-L2321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2319-L2321)

```diff
-       toggleModelMatrixHandInPlace() {
-         const kk = this._m;
-         return kk[2] *= -1, kk[6] *= -1, kk[8] *= -1, kk[9] *= -1, kk[14] *= -1, this.markAsUpdated(), this
+       _draw(CC, zC, ZC) {
+         if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
+         const QC = this.Km().mg();
+         return this._unIndexed ? QC.drawArraysType(qC.d.LineListDrawMode, CC.verticesStart, CC.verticesCount, ZC) : QC.drawElementsType(qC.d.LineListDrawMode, CC.indexStart, CC.indexCount, ZC), this
```

#### 57. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2323-L2325` → after: `L664-L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L664-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L664-L666) · [Before (L2323-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2323-L2325)

```diff
-       toggleProjectionMatrixHandInPlace() {
-         const kk = this._m;
-         return kk[8] *= -1, kk[9] *= -1, kk[10] *= -1, kk[11] *= -1, this.markAsUpdated(), this
+       dispose(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || zC) && this.material?.dispose(!1, !1, !0), super.dispose(CC)
```

#### 58. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2327-L2328` → after: `L668-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L668-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L668-L675) · [Before (L2327-L2328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2327-L2328)

```diff
-       _convertProjectionToHalfZRangeInPlace() {
-         return this.multiplyToRef(pk, this), this
+       clone(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           ZC = arguments.length > 2 ? arguments[2] : void 0;
+         if (zC && void 0 === zC._addToSceneRootNodes) {
+           const ZC = zC;
+           return ZC.source = this, new NC(CC, this.Km(), ZC.parent, ZC.source, ZC.doNotCloneChildren)
+         }
+         return new NC(CC, this.Km(), zC, this, ZC)
```

#### 59. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2330-L2443` → after: `L677-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L677-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L677-L681) · [Before (L2330-L2443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2330-L2443)

```diff
-       static FromArray(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const ik = new Hk;
-         return Hk.FromArrayToRef(kk, ek, ik), ik
-       }
-       static FromArrayToRef(kk, ek, ik) {
-         for (let Dk = 0; Dk < 16; Dk++) ik._m[Dk] = kk[Dk + ek];
-         return ik.markAsUpdated(), ik
-       }
-       static FromFloat32ArrayToRefScaled(kk, ek, ik, Dk) {
-         return Dk._m[0] = kk[0 + ek] * ik, Dk._m[1] = kk[1 + ek] * ik, Dk._m[2] = kk[2 + ek] * ik, Dk._m[3] = kk[3 + ek] * ik, Dk._m[4] = kk[4 + ek] * ik, Dk._m[5] = kk[5 + ek] * ik, Dk._m[6] = kk[6 + ek] * ik, Dk._m[7] = kk[7 + ek] * ik, Dk._m[8] = kk[8 + ek] * ik, Dk._m[9] = kk … [truncated]
-       }
-       static get IdentityReadOnly() {
-         return Hk._IdentityReadOnly
-       }
-       static FromValuesToRef(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk, Kk, xk, nk, Uk, Hk, wk) {
- ... (98 more removed lines; see GitHub link above)
+       createInstance(CC) {
+         const zC = new MC(CC, this);
+         if (this.ZE) {
+           zC.ZE = {};
+           for (const CC in this.ZE) zC.ZE[CC] = this.ZE[CC]
```

#### 60. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2445-L2674` → after: `L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L683) · [Before (L2445-L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2445-L2674)

```diff
-         return bk[12] = 0, bk[13] = 0, bk[14] = 0, bk[15] = 1, ik.markAsUpdated(), ik
-       }
-       static RotationYawPitchRoll(kk, ek, ik) {
-         const Dk = new Hk;
-         return Hk.RotationYawPitchRollToRef(kk, ek, ik, Dk), Dk
-       }
-       static RotationYawPitchRollToRef(kk, ek, ik, Dk) {
-         return Uk.RotationYawPitchRollToRef(kk, ek, ik, wk.Quaternion[0]), wk.Quaternion[0].toRotationMatrix(Dk), Dk
-       }
-       static Scaling(kk, ek, ik) {
-         const Dk = new Hk;
-         return Hk.ScalingToRef(kk, ek, ik, Dk), Dk
-       }
-       static ScalingToRef(kk, ek, ik, Dk) {
-         return Hk.FromValuesToRef(kk, 0, 0, 0, 0, ek, 0, 0, 0, 0, ik, 0, 0, 0, 0, 1, Dk), Dk._updateIdentityStatus(1 === kk && 1 === ek && 1 === ik), Dk
-       }
- ... (214 more removed lines; see GitHub link above)
+         return zC
```

#### 61. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2676-L2679` → after: `L685-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L685-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L685-L686) · [Before (L2676-L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2676-L2679)

```diff
-       static GetAsMatrix3x3(kk) {
-         const ek = kk.m,
-           ik = [ek[0], ek[1], ek[2], ek[4], ek[5], ek[6], ek[8], ek[9], ek[10]];
-         return Sk.c.MatrixUse64Bits ? ik : new Float32Array(ik)
+       serialize(CC) {
+         super.serialize(CC), CC.color = this.color.VZC(), CC.alpha = this.alpha
```

#### 62. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2681-L2683` → after: `L688-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L688-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L688-L690) · [Before (L2681-L2683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2681-L2683)

```diff
-       static Transpose(kk) {
-         const ek = new Hk;
-         return Hk.TransposeToRef(kk, ek), ek
+       static Parse(CC, zC) {
+         const ZC = new NC(CC.name, zC);
+         return ZC.color = bC.e.FromArray(CC.color), ZC.alpha = CC.alpha, ZC
```

#### 63. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2685-L2733` → after: `L692-L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L692-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L692-L699) · [Before (L2685-L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2685-L2733)

```diff
-       static TransposeToRef(kk, ek) {
-         const ik = kk.m,
-           Dk = ik[0],
-           fk = ik[4],
-           Sk = ik[8],
-           bk = ik[12],
-           rk = ik[1],
-           Pk = ik[5],
-           mk = ik[9],
-           Mk = ik[13],
-           Kk = ik[2],
-           xk = ik[6],
-           nk = ik[10],
-           Uk = ik[14],
-           Hk = ik[3],
-           wk = ik[7],
- ... (33 more removed lines; see GitHub link above)
+     }
+     NC.ForceGLSL = !1;
+     class MC extends oC.c {
+       constructor(CC, zC) {
+         super(CC, zC), this.intersectionThreshold = zC.intersectionThreshold
+       }
+       getClassName() {
+         return "InstancedLinesMesh"
```

#### 64. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2745-L2781` → after: `L705-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L705-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L705-L706) · [Before (L2745-L2781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2745-L2781)

```diff
-       yk || (yk = !0, Object.defineProperties(Kk.prototype, {
-         dimension: {
-           value: [2]
-         },
-         rank: {
-           value: 1
-         }
-       }), Object.defineProperties(xk.prototype, {
-         dimension: {
-           value: [3]
-         },
-         rank: {
-           value: 1
-         }
-       }), Object.defineProperties(nk.prototype, {
-         dimension: {
- ... (21 more removed lines; see GitHub link above)
+       gC || (gC = !0, fC.b._LinesMeshParser = (CC, zC) => NC.Parse(CC, zC))
+     }(QC = NC.prototype).enableEdgesRendering ?? (QC.enableEdgesRendering = (0, WC.f)("LinesMesh", "enableEdgesRendering")), (wC = MC.prototype).enableEdgesRendering ?? (wC.enableEdgesRendering = (0, WC.f)("InstancedLinesMesh", "enableEdgesRendering"))
```

#### 65. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2783` → after: `L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L708) · [Before (L2783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2783)

```diff
-   36726: (kk, ek, ik) => {
+   38501: (CC, zC, ZC) => {
```

#### 66. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2785` → after: `L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L710) · [Before (L2785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2785)

```diff
-       c: () => bk
+       e: () => bC
```

#### 67. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2787` → after: `L712-L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L712-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L712-L715) · [Before (L2787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2787)

```diff
-     const Dk = "undefined" !== typeof WeakRef;
+     var QC = ZC(38507);
+     const wC = (CC, zC, ZC) => CC ? CC.getClassName && "Mesh" === CC.getClassName() ? null : !CC.getClassName || "SubMesh" !== CC.getClassName() && "PhysicsBody" !== CC.getClassName() ? CC.clone ? CC.clone() : Array.isArray(CC) ? CC.slice() : ZC && "object" === typeof CC ? {
+       ...CC
+     } : null : CC.clone(zC) : null;
```

#### 68. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2789-L2799` → after: `L717-L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L717-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L717-L747) · [Before (L2789-L2799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2789-L2799)

```diff
-       constructor(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           ik = arguments.length > 2 ? arguments[2] : void 0,
-           Dk = arguments.length > 3 ? arguments[3] : void 0;
-         this.initialize(kk, ek, ik, Dk)
-       }
-       initialize(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           ik = arguments.length > 2 ? arguments[2] : void 0,
-           Dk = arguments.length > 3 ? arguments[3] : void 0;
-         return this.mask = kk, this.skipNextObservers = ek, this.target = ik, this.currentTarget = Dk, this
+       static DeepCopy(CC, zC, ZC, bC) {
+         let nC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const fC = function(CC) {
+           const zC = [];
+           do {
+             const ZC = Object.getOwnPropertyNames(CC);
+             for (const CC of ZC) - 1 === zC.indexOf(CC) && zC.push(CC)
+           } while (CC = Object.getPrototypeOf(CC));
+           return zC
+         }(CC);
+         for (const qC of fC) {
+           if ("_" === qC[0] && (!bC || -1 === bC.indexOf(qC))) continue;
+           if (qC.endsWith("Observable")) continue;
+           if (ZC && -1 !== ZC.indexOf(qC)) continue;
+           const fC = CC[qC],
+             FC = typeof fC;
+ ... (15 more added lines; see GitHub link above)
```

#### 69. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2802-L2810` → after: `L750-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L750-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L750-L756) · [Before (L2802-L2810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2802-L2810)

```diff
-     class Sk {
-       constructor(kk, ek) {
-         let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         this.callback = kk, this.mask = ek, this.scope = ik, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
-       }
-       remove() {
-         let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         this._remove && this._remove(kk)
-       }
+   },
+   37731: (CC, zC, ZC) => {
+     function QC() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (CC => {
+         const zC = 16 * Math.random() | 0;
+         return ("x" === CC ? zC : 3 & zC | 8).toString(16)
+       }))
```

#### 70. `bundles/bloxd.io/chunks/js/229.js` (Changed code · before: `L2813-L2915` → after: `L767-L816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6089dbb42ca45be92683ad80e934605edf15e796f816cdcec75f469d6e083df0) · [After (L767-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/229.js#L767-L816) · [Before (L2813-L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/229.js#L2813-L2915)

```diff
-       static FromPromise(kk, ek) {
-         const ik = new bk;
-         return kk.then((kk => {
-           ik.notifyObservers(kk)
-         })).catch((kk => {
-           if (!ek) throw kk;
-           ek.notifyObservers(kk)
-         })), ik
-       }
-       get observers() {
-         return this._observers
-       }
-       constructor(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this.notifyIfTriggered = ek, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new fk(0), kk && (this._onObserverAdded = kk)
-       }
- ... (87 more removed lines; see GitHub link above)
+       static _CheckLimit(CC, zC) {
+         let ZC = QC._LogLimitOutputs[CC];
+         return ZC ? ZC.current++ : (ZC = {
+           limit: zC,
+           current: 1
+         }, QC._LogLimitOutputs[CC] = ZC), ZC.current <= ZC.limit
+       }
+       static _GenerateLimitMessage(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const ZC = QC._LogLimitOutputs[CC];
+         if (!ZC || !QC.MessageLimitReached) return;
+         const wC = this._Levels[zC];
+         ZC.current === ZC.limit && QC[wC.name](QC.MessageLimitReached.replace(/%LIMIT%/g, "" + ZC.limit).replace(/%TYPE%/g, wC.name ?? ""))
+       }
+       static _AddLogEntry(CC) {
+         QC._LogCache = CC + QC._LogCache, QC.OnNewCacheEntry && QC.OnNewCacheEntry(CC)
+ ... (34 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/230.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/230.js` (122 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26)

#### 1. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L2)

```diff
- export const ids = [230];
+ export const ids = [230, 235];
```

#### 2. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L4)

```diff
-   36874: (kk, ek, ik) => {
+   41655: (CC, zC, ZC) => {
```

#### 3. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L6-L9` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L6) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L6-L9)

```diff
-       e: () => Kk,
-       f: () => xk,
-       h: () => Hk,
-       k: () => nk
+       e: () => nC
```

#### 4. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L11-L26` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L8-L10) · [Before (L11-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L11-L26)

```diff
-     var Dk = ik(36707),
-       fk = ik(36703),
-       Sk = ik(36729),
-       bk = ik(36734);
- 
-     function rk(kk) {
-       return Math.pow(kk, fk.i)
-     }
- 
-     function Pk(kk) {
-       return kk <= .04045 ? .0773993808 * kk : Math.pow(.947867299 * (kk + .055), 2.4)
-     }
- 
-     function mk(kk) {
-       return Math.pow(kk, fk.e)
-     }
+     var QC = ZC(41590),
+       wC = ZC(39803);
+     let bC = !1;
```

#### 5. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L28-L29` → after: `L12-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L12-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L12-L30) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L28-L29)

```diff
-     function Mk(kk) {
-       return kk <= .0031308 ? 12.92 * kk : 1.055 * Math.pow(kk, .41666) - .055
+     function nC() {
+       bC || (bC = !0, wC.b.prototype._sphericalPolynomialTargetSize = 0, wC.b.prototype.forceSphericalPolynomialsRecompute = function() {
+         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
+       }, Object.defineProperty(wC.b.prototype, "sphericalPolynomial", {
+         get: function() {
+           if (this._texture) {
+             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
+             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = QC.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
+               this._texture._sphericalPolynomial = CC, this._texture._sphericalPolynomialComputed = !0
+             }))), null
+           }
+           return null
+         },
+         set: function(CC) {
+           this._texture && (this._texture._sphericalPolynomial = CC)
+         },
+ ... (3 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L32-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L47-L50) · [Before (L32-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L32-L50)

```diff
-       constructor() {
-         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         this.r = kk, this.g = ek, this.b = ik
-       }
-       toString() {
-         return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
-       }
-       getClassName() {
-         return "Color3"
-       }
-       getHashCode() {
-         let kk = 255 * this.r | 0;
-         return kk = 397 * kk ^ 255 * this.g, kk = 397 * kk ^ 255 * this.b, kk
-       }
- ... (3 more removed lines; see GitHub link above)
+       static GetPlanes(CC) {
+         const zC = [];
+         for (let ZC = 0; ZC < 6; ZC++) zC.push(new QC.d(0, 0, 0, 0));
+         return wC.GetPlanesToRef(CC, zC), zC
```

#### 7. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L52-L149` → after: `L52-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L52-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L52-L54) · [Before (L52-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L52-L149)

```diff
-       zek(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return Kk.FromArrayToRef(kk, ek, this), this
-       }
-       toColor4() {
-         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
-         return new xk(this.r, this.g, this.b, kk)
-       }
-       Tik() {
-         return [this.r, this.g, this.b]
-       }
-       toLuminance() {
-         return .3 * this.r + .59 * this.g + .11 * this.b
-       }
-       multiply(kk) {
-         return new Kk(this.r * kk.r, this.g * kk.g, this.b * kk.b)
- ... (82 more removed lines; see GitHub link above)
+       static GetNearPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] + ZC[2], zC.normal.y = ZC[7] + ZC[6], zC.normal.z = ZC[11] + ZC[10], zC.d = ZC[15] + ZC[14], zC.normalize()
```

#### 8. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L151-L152` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L56-L58) · [Before (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L151-L152)

```diff
-       add(kk) {
-         return new Kk(this.r + kk.r, this.g + kk.g, this.b + kk.b)
+       static GetFarPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] - ZC[2], zC.normal.y = ZC[7] - ZC[6], zC.normal.z = ZC[11] - ZC[10], zC.d = ZC[15] - ZC[14], zC.normalize()
```

#### 9. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L154-L155` → after: `L60-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L60-L62) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L154-L155)

```diff
-       addInPlace(kk) {
-         return this.r += kk.r, this.g += kk.g, this.b += kk.b, this
+       static GetLeftPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] + ZC[0], zC.normal.y = ZC[7] + ZC[4], zC.normal.z = ZC[11] + ZC[8], zC.d = ZC[15] + ZC[12], zC.normalize()
```

#### 10. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L157-L158` → after: `L64-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L64-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L64-L66) · [Before (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L157-L158)

```diff
-       addInPlaceFromFloats(kk, ek, ik) {
-         return this.r += kk, this.g += ek, this.b += ik, this
+       static GetRightPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] - ZC[0], zC.normal.y = ZC[7] - ZC[4], zC.normal.z = ZC[11] - ZC[8], zC.d = ZC[15] - ZC[12], zC.normalize()
```

#### 11. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L160-L161` → after: `L68-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L68-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L68-L70) · [Before (L160-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L160-L161)

```diff
-       addToRef(kk, ek) {
-         return ek.r = this.r + kk.r, ek.g = this.g + kk.g, ek.b = this.b + kk.b, ek
+       static GetTopPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] - ZC[1], zC.normal.y = ZC[7] - ZC[5], zC.normal.z = ZC[11] - ZC[9], zC.d = ZC[15] - ZC[13], zC.normalize()
```

#### 12. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L163-L164` → after: `L72-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L72-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L72-L74) · [Before (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L163-L164)

```diff
-       subtract(kk) {
-         return new Kk(this.r - kk.r, this.g - kk.g, this.b - kk.b)
+       static GetBottomPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] + ZC[1], zC.normal.y = ZC[7] + ZC[5], zC.normal.z = ZC[11] + ZC[9], zC.d = ZC[15] + ZC[13], zC.normalize()
```

#### 13. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L166-L167` → after: `L76-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L76-L77) · [Before (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L166-L167)

```diff
-       subtractToRef(kk, ek) {
-         return ek.r = this.r - kk.r, ek.g = this.g - kk.g, ek.b = this.b - kk.b, ek
+       static GetPlanesToRef(CC, zC) {
+         wC.GetNearPlaneToRef(CC, zC[0]), wC.GetFarPlaneToRef(CC, zC[1]), wC.GetLeftPlaneToRef(CC, zC[2]), wC.GetRightPlaneToRef(CC, zC[3]), wC.GetTopPlaneToRef(CC, zC[4]), wC.GetBottomPlaneToRef(CC, zC[5])
```

#### 14. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L169-L170` → after: `L79-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L79-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L79-L82) · [Before (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L169-L170)

```diff
-       KDk(kk) {
-         return this.r -= kk.r, this.g -= kk.g, this.b -= kk.b, this
+       static IsPointInFrustum(CC, zC) {
+         for (let ZC = 0; ZC < 6; ZC++)
+           if (zC[ZC].dotCoordinate(CC) < 0) return !1;
+         return !0
```

#### 15. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L172-L173` → after: `L84-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L84-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L84-L93) · [Before (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L172-L173)

```diff
-       subtractFromFloats(kk, ek, ik) {
-         return new Kk(this.r - kk, this.g - ek, this.b - ik)
+     }
+   },
+   37596: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => wC
+     });
+     var QC = ZC(36963);
+     class wC {
+       constructor(CC, zC, ZC, wC) {
+         this.normal = new QC.r(CC, zC, ZC), this.d = wC
```

#### 16. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L175-L176` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L95-L96) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L175-L176)

```diff
-       subtractFromFloatsToRef(kk, ek, ik, Dk) {
-         return Dk.r = this.r - kk, Dk.g = this.g - ek, Dk.b = this.b - ik, Dk
+       VZC() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
```

#### 17. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L179-L228` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L99) · [Before (L179-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L179-L228)

```diff
-         return new Kk(this.r, this.g, this.b)
-       }
-       Fs(kk) {
-         return this.r = kk.r, this.g = kk.g, this.b = kk.b, this
-       }
-       Z6(kk, ek, ik) {
-         return this.r = kk, this.g = ek, this.b = ik, this
-       }
-       set(kk, ek, ik) {
-         return this.Z6(kk, ek, ik)
-       }
-       A_(kk) {
-         return this.r = this.g = this.b = kk, this
-       }
-       toHexString() {
-         const kk = Math.round(255 * this.r),
- ... (34 more removed lines; see GitHub link above)
+         return new wC(this.normal.x, this.normal.y, this.normal.z, this.d)
```

#### 18. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L230-L242` → after: `L101-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L101-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L101-L102) · [Before (L230-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L230-L242)

```diff
-       toGammaSpaceToRef(kk) {
-         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (kk.r = Mk(this.r), kk.g = Mk(this.g), kk.b = Mk(this.b)) : (kk.r = mk(this.r), kk.g = mk(this.g), kk.b = mk(this.b)), this
-       }
-       static HSVtoRGBToRef(kk, ek, ik, Dk) {
-         const fk = ik * ek,
-           Sk = kk / 60,
-           bk = fk * (1 - Math.abs(Sk % 2 - 1));
-         let rk = 0,
-           Pk = 0,
-           mk = 0;
-         Sk >= 0 && Sk <= 1 ? (rk = fk, Pk = bk) : Sk >= 1 && Sk <= 2 ? (rk = bk, Pk = fk) : Sk >= 2 && Sk <= 3 ? (Pk = fk, mk = bk) : Sk >= 3 && Sk <= 4 ? (Pk = bk, mk = fk) : Sk >= 4 && Sk <= 5 ? (rk = bk, mk = fk) : Sk >= 5 && Sk <= 6 && (rk = fk, mk = bk);
-         const Mk = ik - fk;
-         return Dk.r = rk + Mk, Dk.g = Pk + Mk, Dk.b = mk + Mk, Dk
+       getClassName() {
+         return "Plane"
```

#### 19. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L244-L246` → after: `L104-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L104-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L104-L125) · [Before (L244-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L244-L246)

```diff
-       static FromHSV(kk, ek, ik) {
-         const Dk = new Kk(0, 0, 0);
-         return Kk.HSVtoRGBToRef(kk, ek, ik, Dk), Dk
+       getHashCode() {
+         let CC = this.normal.getHashCode();
+         return CC = 397 * CC ^ this.d, CC
+       }
+       normalize() {
+         const CC = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
+         let zC = 0;
+         return 0 !== CC && (zC = 1 / CC), this.normal.x *= zC, this.normal.y *= zC, this.normal.z *= zC, this.d *= zC, this
+       }
+       transform(CC) {
+         const zC = wC._TmpMatrix;
+         CC.invertToRef(zC);
+         const ZC = zC.m,
+           QC = this.normal.x,
+           bC = this.normal.y,
+           nC = this.normal.z,
+ ... (6 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L248-L249` → after: `L127-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L127-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L127-L148) · [Before (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L248-L249)

```diff
-       static FromHexString(kk) {
-         return new Kk(0, 0, 0).fromHexString(kk)
+       dotCoordinate(CC) {
+         return this.normal.x * CC.x + this.normal.y * CC.y + this.normal.z * CC.z + this.d
+       }
+       copyFromPoints(CC, zC, ZC) {
+         const QC = zC.x - CC.x,
+           wC = zC.y - CC.y,
+           bC = zC.z - CC.z,
+           nC = ZC.x - CC.x,
+           fC = ZC.y - CC.y,
+           oC = ZC.z - CC.z,
+           qC = wC * oC - bC * fC,
+           FC = bC * nC - QC * oC,
+           WC = QC * fC - wC * nC,
+           NC = Math.sqrt(qC * qC + FC * FC + WC * WC);
+         let MC;
+         return MC = 0 !== NC ? 1 / NC : 0, this.normal.x = qC * MC, this.normal.y = FC * MC, this.normal.z = WC * MC, this.d = -(this.normal.x * CC.x + this.normal.y * CC.y + this.normal.z * CC.z), this
+ ... (6 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L252-L253` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L151) · [Before (L252-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L252-L253)

```diff
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return new Kk(kk[ek], kk[ek + 1], kk[ek + 2])
+         return new wC(CC[0], CC[1], CC[2], CC[3])
```

#### 22. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L255-L294` → after: `L153-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L153-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L153-L155) · [Before (L255-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L255-L294)

```diff
-       static FromArrayToRef(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           ik = arguments.length > 2 ? arguments[2] : void 0;
-         ik.r = kk[ek], ik.g = kk[ek + 1], ik.b = kk[ek + 2]
-       }
-       static FromInts(kk, ek, ik) {
-         return new Kk(kk / 255, ek / 255, ik / 255)
-       }
-       static Lerp(kk, ek, ik) {
-         const Dk = new Kk(0, 0, 0);
-         return Kk.LerpToRef(kk, ek, ik, Dk), Dk
-       }
-       static LerpToRef(kk, ek, ik, Dk) {
-         Dk.r = kk.r + (ek.r - kk.r) * ik, Dk.g = kk.g + (ek.g - kk.g) * ik, Dk.b = kk.b + (ek.b - kk.b) * ik
-       }
-       static Hermite(kk, ek, ik, Dk, fk) {
- ... (24 more removed lines; see GitHub link above)
+       static FromPoints(CC, zC, ZC) {
+         const QC = new wC(0, 0, 0, 0);
+         return QC.copyFromPoints(CC, zC, ZC), QC
```

#### 23. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L296-L297` → after: `L157-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L157-L159) · [Before (L296-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L296-L297)

```diff
-       static Blue() {
-         return new Kk(0, 0, 1)
+       static FromPositionAndNormal(CC, zC) {
+         const ZC = new wC(0, 0, 0, 0);
+         return this.FromPositionAndNormalToRef(CC, zC, ZC)
```

#### 24. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L299-L300` → after: `L161-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L161-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L161-L162) · [Before (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L299-L300)

```diff
-       static Black() {
-         return new Kk(0, 0, 0)
+       static FromPositionAndNormalToRef(CC, zC, ZC) {
+         return ZC.normal.Av(zC), ZC.normal.normalize(), ZC.d = -CC.dot(ZC.normal), ZC
```

#### 25. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L302-L303` → after: `L164-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L164-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L164-L166) · [Before (L302-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L302-L303)

```diff
-       static get BlackReadOnly() {
-         return Kk._BlackReadOnly
+       static SignedDistanceToPlaneFromPositionAndNormal(CC, zC, ZC) {
+         const wC = -(zC.x * CC.x + zC.y * CC.y + zC.z * CC.z);
+         return QC.r.Dot(ZC, zC) + wC
```

#### 26. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L305-L315` → after: `L168-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L168-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L168-L190) · [Before (L305-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L305-L315)

```diff
-       static White() {
-         return new Kk(1, 1, 1)
-       }
-       static Purple() {
-         return new Kk(.5, 0, .5)
-       }
-       static Magenta() {
-         return new Kk(1, 0, 1)
-       }
-       static Yellow() {
-         return new Kk(1, 1, 0)
+     }
+     wC._TmpMatrix = QC.b.Identity()
+   },
+   36961: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       Matrix: () => QC.b,
+       Quaternion: () => QC.f,
+       RegisterMathVector: () => QC.g,
+       TmpVectors: () => QC.j,
+       Vector2: () => QC.n,
+       Eg: () => QC.r,
+       Vector4: () => QC.u
+     });
+     var QC = ZC(36963);
+     (0, QC.g)()
+   },
+ ... (7 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L317-L318` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L192-L193) · [Before (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L317-L318)

```diff
-       static Gray() {
-         return new Kk(.5, .5, .5)
+       toGlobal(CC, zC) {
+         return new QC(this.x * CC, this.y * zC, this.width * CC, this.height * zC)
```

#### 28. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L320-L321` → after: `L195-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L195-L196) · [Before (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L320-L321)

```diff
-       static Teal() {
-         return new Kk(0, 1, 1)
+       toGlobalToRef(CC, zC, ZC) {
+         return ZC.x = this.x * CC, ZC.y = this.y * zC, ZC.width = this.width * CC, ZC.height = this.height * zC, this
```

#### 29. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L323-L324` → after: `L198-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L198-L199) · [Before (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L323-L324)

```diff
-       static Random() {
-         return new Kk(Math.random(), Math.random(), Math.random())
+       clone() {
+         return new QC(this.x, this.y, this.width, this.height)
```

#### 30. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L327` → after: `L202-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L202-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L202-L211) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L327)

```diff
-     Kk._V8PerformanceHack = new Kk(.5, .5, .5), Kk._BlackReadOnly = Kk.Black();
+   },
+   41590: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => qC
+     });
+     var QC = ZC(36963),
+       wC = ZC(36991),
+       bC = ZC(39800),
+       nC = ZC(36968),
+       fC = ZC(37142);
```

#### 31. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L329-L334` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L213-L214) · [Before (L329-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L329-L334)

```diff
-       constructor() {
-         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-           Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
-         this.r = kk, this.g = ek, this.b = ik, this.a = Dk
+       constructor(CC, zC, ZC, QC) {
+         this.name = CC, this.worldAxisForNormal = zC, this.worldAxisForFileX = ZC, this.worldAxisForFileY = QC
```

#### 32. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L336-L337` → after: `L216-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L216-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L216-L289) · [Before (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L336-L337)

```diff
-       Tik() {
-         return [this.r, this.g, this.b, this.a]
+     }
+     class qC {
+       static _NearestPow2Floor(CC) {
+         return CC <= 1 ? 1 : 1 << Math.floor(Math.log2(CC))
+       }
+       static ConvertCubeMapTextureToSphericalPolynomial(CC) {
+         if (!CC.isCube) return null;
+         CC.Km()?.mg().flushFramebuffer();
+         const zC = CC.getSize().width,
+           ZC = CC._sphericalPolynomialTargetSize,
+           QC = ZC > 0 ? this._NearestPow2Floor(ZC) : 0,
+           wC = !CC.noMipmap && !0 === CC._texture?.generateMipMaps,
+           bC = QC > 0 && QC < zC && wC,
+           nC = bC ? Math.max(0, Math.round(Math.log2(zC / QC))) : 0,
+           fC = bC ? Math.max(1, Math.floor(zC / Math.pow(2, nC))) : zC,
+           oC = CC.readPixels(0, nC, void 0, !1),
+ ... (58 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L339` → after: `L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L291) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L339)

```diff
-       toArray(kk) {
+       static ConvertCubeMapToSphericalPolynomial(CC) {
```

#### 34. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L341` → after: `L293-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L293-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L293-L341) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L341)

```diff
-         return kk[ek] = this.r, kk[ek + 1] = this.g, kk[ek + 2] = this.b, kk[ek + 3] = this.a, this
+         const ZC = zC > 0 ? this._NearestPow2Floor(zC) : 0;
+         if (ZC > 0 && CC.size > ZC) {
+           const zC = 5 === CC.format ? 4 : 3,
+             QC = ["right", "left", "up", "down", "front", "back"],
+             wC = {};
+           for (const bC of QC) wC[bC] = this._DownsampleFace(CC[bC], CC.size, ZC, zC);
+           CC = {
+             ...CC,
+             ...wC,
+             size: ZC
+           }
+         }
+         const QC = new bC.c;
+         let oC = 0;
+         const qC = 2 / CC.size,
+           FC = qC,
+ ... (33 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L343-L345` → after: `L343-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L343-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L343-L402) · [Before (L343-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L343-L345)

```diff
-       zek(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return this.r = kk[ek], this.g = kk[ek + 1], this.b = kk[ek + 2], this.a = kk[ek + 3], this
+     }
+     qC._FileFaces = [new oC("right", new QC.r(1, 0, 0), new QC.r(0, 0, -1), new QC.r(0, -1, 0)), new oC("left", new QC.r(-1, 0, 0), new QC.r(0, 0, 1), new QC.r(0, -1, 0)), new oC("up", new QC.r(0, 1, 0), new QC.r(1, 0, 0), new QC.r(0, 0, 1)), new oC("down", new QC.r(0, -1, 0), ne … [truncated]
+   },
+   41349: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => QC.g,
+       d: () => QC.m
+     });
+     var QC = ZC(39865);
+     (0, QC.p)()
+   },
+   37731: (CC, zC, ZC) => {
+     function QC() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (CC => {
+         const zC = 16 * Math.random() | 0;
+         return ("x" === CC ? zC : 3 & zC | 8).toString(16)
+ ... (44 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L347-L348` → after: `L404-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L404-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L404-L406) · [Before (L347-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L347-L348)

```diff
-       equals(kk) {
-         return kk && this.r === kk.r && this.g === kk.g && this.b === kk.b && this.a === kk.a
+       static async EncodeTextureToRGBD(CC, zC) {
+         let QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         return zC.mg().isWebGPU ? await ZC.e(343).then((() => ZC(61061))) : await ZC.e(325).then((() => ZC(61056))), await (0, wC.b)("rgbdEncode", CC, zC, QC, 1, 5)
```

#### 37. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L350-L351` → after: `L408-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L408-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L408-L451) · [Before (L350-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L350-L351)

```diff
-       add(kk) {
-         return new xk(this.r + kk.r, this.g + kk.g, this.b + kk.b, this.a + kk.a)
+     }
+   },
+   60923: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       AsyncLoop: () => QC.d,
+       RegisterTools: () => QC.e,
+       Tools: () => QC.g,
+       className: () => QC.i
+     });
+     var QC = ZC(39913);
+     (0, QC.e)()
+   },
+   41672: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => wC
+     });
+ ... (28 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L353-L354` → after: `L453-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L453-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L453-L479) · [Before (L353-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L353-L354)

```diff
-       addToRef(kk, ek) {
-         return ek.r = this.r + kk.r, ek.g = this.g + kk.g, ek.b = this.b + kk.b, ek.a = this.a + kk.a, ek
+     }
+     class wC extends QC {
+       constructor(CC, zC) {
+         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wC.DefaultOptions;
+         super([]), this._maxWorkers = CC, this._createWorkerAsync = zC, this._options = ZC
+       }
+       push(CC) {
+         if (!this._executeOnIdleWorker(CC))
+           if (this._workerInfos.length < this._maxWorkers) {
+             const zC = {
+               workerPromise: this._createWorkerAsync(),
+               idle: !1
+             };
+             this._workerInfos.push(zC), this._execute(zC, CC)
+           } else this._pendingActions.push(CC)
+       }
+ ... (11 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L356-L357` → after: `L481-L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L481-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L481-L671) · [Before (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L356-L357)

```diff
-       addInPlace(kk) {
-         return this.r += kk.r, this.g += kk.g, this.b += kk.b, this.a += kk.a, this
+     }
+     wC.DefaultOptions = {
+       idleTimeElapsedBeforeRelease: 1e3
+     }
+   },
+   60950: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       AbstractThreeMfSerializer: () => kf,
+       BVHExporter: () => Kn,
+       ContentTypeFileName: () => Pf,
+       DefaultXmlSerializerFormatOptions: () => jn,
+       DefaultXmlSerializerNumberOptions: () => Dn,
+       EXT_lights_area: () => pw,
+       EXT_mesh_gpu_instancing: () => uQ,
+       EXT_texture_avif: () => bn,
+       EXT_texture_webp: () => zn,
+ ... (175 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L359-L360` → after: `L673-L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L673-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L673-L679) · [Before (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L359-L360)

```diff
-       addInPlaceFromFloats(kk, ek, ik, Dk) {
-         return this.r += kk, this.g += ek, this.b += ik, this.a += Dk, this
+       static MTL(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
+         const ZC = [],
+           QC = CC.material;
+         ZC.push("newmtl " + zC), ZC.push("  Ns " + QC.specularPower.toFixed(4)), ZC.push("  Ni 1.5000"), ZC.push("  d " + QC.alpha.toFixed(4)), ZC.push("  Tr 0.0000"), ZC.push("  Tf 1.0000 1.0000 1.0000"), ZC.push("  illum 2"), ZC.push("  Ka " + QC.ambientColor.r.toFixed(4) + " " … [truncated]
+         QC.ambientTexture && ZC.push("  map_Ka " + QC.ambientTexture.name), QC.diffuseTexture && ZC.push("  map_Kd " + QC.diffuseTexture.name), QC.specularTexture && ZC.push("  map_Ks " + QC.specularTexture.name), QC.bumpTexture && ZC.push("  map_bump -imfchan z " + QC.bumpTextur … [truncated]
+         return ZC.join("\n")
```

#### 41. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L362-L363` → after: `L681-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L681-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L681-L698) · [Before (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L362-L363)

```diff
-       subtract(kk) {
-         return new xk(this.r - kk.r, this.g - kk.g, this.b - kk.b, this.a - kk.a)
+     }
+     var fC = 0,
+       oC = ZC(41349);
+     class qC {
+       constructor() {
+         this.files = {}
+       }
+       get glTFFiles() {
+         return this.files
+       }
+       downloadFiles() {
+         for (const CC in this.files) {
+           const zC = this.files[CC],
+             ZC = new Blob([zC], {
+               type: (0, oC.c)(CC)
+             });
+ ... (2 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L365-L366` → after: `L700-L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L700-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L700-L762) · [Before (L365-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L365-L366)

```diff
-       subtractToRef(kk, ek) {
-         return ek.r = this.r - kk.r, ek.g = this.g - kk.g, ek.b = this.b - kk.b, ek.a = this.a - kk.a, ek
+     }
+     var FC = ZC(40985),
+       WC = ZC(40946),
+       NC = ZC(41438),
+       MC = ZC(40948),
+       gC = ZC(39635),
+       SC = ZC(36985),
+       pC = ZC(37138),
+       PC = ZC(36991);
+     const GC = PC.HighestCommonFactor,
+       RC = {
+         ...PC,
+         TwoPi: 2 * Math.PI,
+         Sign: Math.sign,
+         Log2: Math.log2,
+         HCF: GC
+ ... (47 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L368-L369` → after: `L764-L994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L764-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L764-L994) · [Before (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L368-L369)

```diff
-       KDk(kk) {
-         return this.r -= kk.r, this.g -= kk.g, this.b -= kk.b, this.a -= kk.a, this
+     }
+     let tC = (() => {
+       var CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC;
+       let FC, WC, NC, MC, gC, SC, pC, PC, GC, RC = TC.c,
+         AC = [],
+         xC = [],
+         JC = [],
+         IC = [],
+         iC = [],
+         hC = [],
+         KC = [],
+         YC = [],
+         dC = [],
+         mC = [],
+         HC = [],
+         EC = [],
+ ... (215 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L371-L372` → after: `L996-L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L996-L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L996-L1392) · [Before (L371-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L371-L372)

```diff
-       subtractFromFloats(kk, ek, ik, Dk) {
-         return new xk(this.r - kk, this.g - ek, this.b - ik, this.a - Dk)
+     }
+     let Cz = (() => {
+       var CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC;
+       let FC, WC, NC, MC, gC, SC, pC, PC, GC, RC, AC, xC, JC, IC, iC = TC.c,
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
+ ... (381 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L374-L375` → after: `L1394-L1602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1394-L1602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L1394-L1602) · [Before (L374-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L374-L375)

```diff
-       subtractFromFloatsToRef(kk, ek, ik, Dk, fk) {
-         return fk.r = this.r - kk, fk.g = this.g - ek, fk.b = this.b - ik, fk.a = this.a - Dk, fk
+     }
+     let Zz = (() => {
+       var CC, zC, ZC, QC;
+       let wC, bC, nC, fC, oC, qC, FC, WC = TC.c,
+         NC = [],
+         MC = [],
+         gC = [],
+         SC = [],
+         pC = [],
+         PC = [],
+         GC = [],
+         RC = [],
+         AC = [],
+         xC = [],
+         JC = [],
+         IC = [],
+ ... (193 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L377-L378` → after: `L1604-L1785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1604-L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L1604-L1785) · [Before (L377-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L377-L378)

```diff
-       scale(kk) {
-         return new xk(this.r * kk, this.g * kk, this.b * kk, this.a * kk)
+     }
+     let wz = (() => {
+       var CC, zC, ZC, QC;
+       let wC, bC, nC, fC, oC, qC = TC.c,
+         FC = [],
+         WC = [],
+         NC = [],
+         MC = [],
+         gC = [],
+         SC = [],
+         pC = [],
+         PC = [],
+         GC = [],
+         RC = [];
+       return CC = class extends qC {
+         get isEnabled() {
+ ... (166 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L380-L381` → after: `L1787-L2054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R1787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L1787-L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L1787-L2054) · [Before (L380-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L380-L381)

```diff
-       scaleInPlace(kk) {
-         return this.r *= kk, this.g *= kk, this.b *= kk, this.a *= kk, this
+     }
+     let nz = (() => {
+       var CC, zC, ZC, QC, wC, bC, nC, fC;
+       let oC, qC, FC, WC, NC, MC, gC, SC, pC, PC = TC.c,
+         GC = [],
+         RC = [],
+         AC = [],
+         xC = [],
+         JC = [],
+         IC = [],
+         iC = [],
+         hC = [],
+         KC = [],
+         YC = [],
+         dC = [],
+         mC = [],
+ ... (252 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L383-L384` → after: `L2056-L2844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2056-L2844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L2056-L2844) · [Before (L383-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L383-L384)

```diff
-       scaleToRef(kk, ek) {
-         return ek.r = this.r * kk, ek.g = this.g * kk, ek.b = this.b * kk, ek.a = this.a * kk, ek
+     }
+     let oz = (() => {
+       var CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC, NC, MC, gC, SC, pC;
+       let PC, GC, RC, AC, xC, JC, IC, iC, hC, KC, YC, dC, mC, HC, EC, lC, XC, cC, rC, sC, aC, tC, DC, yC, LC, UC, OC, VC, Cz, zz, Zz = TC.c,
+         Qz = [],
+         wz = [],
+         bz = [],
+         nz = [],
+         oz = [],
+         qz = [],
+         Fz = [],
+         Wz = [],
+         Nz = [],
+         Mz = [],
+         gz = [],
+         Sz = [],
+ ... (773 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L386-L387` → after: `L2846-L3409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R2846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L2846-L3409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L2846-L3409) · [Before (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L386-L387)

```diff
-       scaleAndAddToRef(kk, ek) {
-         return ek.r += this.r * kk, ek.g += this.g * kk, ek.b += this.b * kk, ek.a += this.a * kk, ek
+     }
+     class xz extends((0, pz.c)(UC.e)) {}
+     let Jz = (() => {
+       var CC, zC;
+       let QC, wC = xz,
+         nC = [],
+         fC = [];
+       return CC = class extends wC {
+         get realTimeFiltering() {
+           return this._realTimeFiltering
+         }
+         set realTimeFiltering(CC) {
+           this._realTimeFiltering = CC, this.YzC(1)
+         }
+         get realTimeFilteringQuality() {
+           return this._realTimeFilteringQuality
+ ... (548 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L389-L391` → after: `L3411-L3413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3411-L3413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3411-L3413) · [Before (L389-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L389-L391)

```diff
-       clampToRef() {
-         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+       _rebuild() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
```

#### 51. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L393` → after: `L3415-L3423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3415-L3423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3415-L3423) · [Before (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L393)

```diff
-         return ik.r = (0, Sk.Clamp)(this.r, kk, ek), ik.g = (0, Sk.Clamp)(this.g, kk, ek), ik.b = (0, Sk.Clamp)(this.b, kk, ek), ik.a = (0, Sk.Clamp)(this.a, kk, ek), ik
+         if (this._count < 1 || CC) return;
+         const QC = this._createInternaTextureIndexMapping();
+         this.releaseInternalTextures(), this._createInternalTextures(), zC && (this._releaseTextures(), this._createTextures(ZC));
+         const wC = this._renderTarget.textures;
+         for (let bC = 0; bC < wC.length; bC++) {
+           const CC = this._textures[bC];
+           void 0 !== QC[bC] && this._renderTarget.setTexture(wC[QC[bC]], bC), CC._texture = wC[bC], CC._texture && (CC._noMipmap = !CC._texture.useMipMaps, CC._useSRGBBuffer = CC._texture._useSRGBBuffer)
+         }
+         1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
```

#### 52. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L395-L396` → after: `L3425-L3426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3425-L3426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3425-L3426) · [Before (L395-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L395-L396)

```diff
-       multiply(kk) {
-         return new xk(this.r * kk.r, this.g * kk.g, this.b * kk.b, this.a * kk.a)
+       _createInternalTextures() {
+         this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
```

#### 53. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L398-L399` → after: `L3428-L3430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3428-L3430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3428-L3430) · [Before (L398-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L398-L399)

```diff
-       multiplyToRef(kk, ek) {
-         return ek.r = this.r * kk.r, ek.g = this.g * kk.g, ek.b = this.b * kk.b, ek.a = this.a * kk.a, ek
+       _releaseTextures() {
+         if (this._textures)
+           for (let CC = 0; CC < this._textures.length; CC++) this._textures[CC]._texture = null, this._textures[CC].dispose()
```

#### 54. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L401-L402` → after: `L3432-L3438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3432-L3438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3432-L3438) · [Before (L401-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L401-L402)

```diff
-       multiplyInPlace(kk) {
-         return this.r *= kk.r, this.g *= kk.g, this.b *= kk.b, this.a *= kk.a, this
+       _createTextures(CC) {
+         const zC = this._renderTarget.textures;
+         this._textures = [];
+         for (let ZC = 0; ZC < zC.length; ZC++) {
+           const QC = new YC.h(null, this.Km());
+           CC?.[ZC] && (QC.name = CC[ZC]), QC._texture = zC[ZC], QC._texture && (QC._noMipmap = !QC._texture.useMipMaps, QC._useSRGBBuffer = QC._texture._useSRGBBuffer), this._textures.push(QC)
+         }
```

#### 55. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L404-L405` → after: `L3440-L3445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3440-L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3440-L3445) · [Before (L404-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L404-L405)

```diff
-       multiplyByFloats(kk, ek, ik, Dk) {
-         return new xk(this.r * kk, this.g * ek, this.b * ik, this.a * Dk)
+       setInternalTexture(CC, zC) {
+         let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+         if (this.renderTarget && (0 === zC && (this._texture = CC), this.renderTarget.setTexture(CC, zC, ZC), this.textures[zC] || (this.textures[zC] = new YC.h(null, this.Km()), this.textures[zC].name = this._textureNames?.[zC] ?? this.textures[zC].name), this.textures[zC]._text … [truncated]
+           let ZC;
+           ZC = CC.is2DArray ? 35866 : CC.isCube ? 34067 : CC.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[zC] = ZC
+         }
```

#### 56. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L407-L408` → after: `L3447-L3483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3447-L3483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3447-L3483) · [Before (L407-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L407-L408)

```diff
-       divide(kk) {
-         throw new ReferenceError("Can not divide a color")
+       setLayerAndFaceIndex(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
+           ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
+         this.textures[CC] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[CC] = zC), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[CC] = ZC), this.renderTarget.setLayerAndFace … [truncated]
+       }
+       setLayerAndFaceIndices(CC, zC) {
+         this.renderTarget && (this._multiRenderTargetOptions.layerIndex = CC, this._multiRenderTargetOptions.faceIndex = zC, this.renderTarget.setLayerAndFaceIndices(CC, zC))
+       }
+       get samples() {
+         return this._samples
+       }
+       set samples(CC) {
+         this._renderTarget ? this._samples = this._renderTarget.setSamples(CC) : this._samples = CC
+       }
+       resize(CC) {
+         this._processSizeParameter(CC), this._rebuild(!1, void 0, this._textureNames)
+ ... (21 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L410-L411` → after: `L3485-L3490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3485-L3490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3485-L3490) · [Before (L410-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L410-L411)

```diff
-       divideToRef(kk, ek) {
-         throw new ReferenceError("Can not divide a color")
+       releaseInternalTextures() {
+         const CC = this._renderTarget?.textures;
+         if (CC) {
+           for (let zC = CC.length - 1; zC >= 0; zC--) this._textures[zC]._texture = null;
+           this._renderTarget?.dispose(), this._renderTarget = null
+         }
```

#### 58. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L413-L414` → after: `L3492-L3496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3492-L3496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3492-L3496) · [Before (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L413-L414)

```diff
-       divideInPlace(kk) {
-         throw new ReferenceError("Can not divide a color")
+     }
+     var Ez = ZC(39990);
+     class lz {
+       constructor(CC) {
+         this.name = Ez.b.NAME_GEOMETRYBUFFERRENDERER, this.sS = CC
```

#### 59. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L416-L417` → after: `L3498-L3499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3498-L3499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3498-L3499) · [Before (L416-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L416-L417)

```diff
-       minimizeInPlace(kk) {
-         return this.r = Math.min(this.r, kk.r), this.g = Math.min(this.g, kk.g), this.b = Math.min(this.b, kk.b), this.a = Math.min(this.a, kk.a), this
+       register() {
+         this.sS._gatherRenderTargetsStage.registerStep(Ez.b.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
```

#### 60. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L419-L420` → after: `L3501-L3504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3501-L3504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3501-L3504) · [Before (L419-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L419-L420)

```diff
-       maximizeInPlace(kk) {
-         return this.r = Math.max(this.r, kk.r), this.g = Math.max(this.g, kk.g), this.b = Math.max(this.b, kk.b), this.a = Math.max(this.a, kk.a), this
+       rebuild() {}
+       dispose() {}
+       _gatherRenderTargets(CC) {
+         this.sS._geometryBufferRenderer && CC.push(this.sS._geometryBufferRenderer.getGBuffer())
```

#### 61. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L422-L423` → after: `L3506-L3577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3506-L3577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3506-L3577) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L422-L423)

```diff
-       minimizeInPlaceFromFloats(kk, ek, ik, Dk) {
-         return this.r = Math.min(kk, this.r), this.g = Math.min(ek, this.g), this.b = Math.min(ik, this.b), this.a = Math.min(Dk, this.a), this
+     }
+     let Xz = !1;
+     var cz;
+     ! function(CC) {
+       CC[CC.Small = 0] = "Small", CC[CC.Medium = 1] = "Medium", CC[CC.Large = 2] = "Large", CC[CC.ExtraLarge = 3] = "ExtraLarge"
+     }(cz || (cz = {}));
+     const uz = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
+       rz = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", … [truncated]
+     class sz {
+       get renderTransparentMeshes() {
+         return this._renderTransparentMeshes
+       }
+       set renderTransparentMeshes(CC) {
+         if (CC && this._enableMeshBlendTag && !this._scene.mg().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
+         this._renderTransparentMeshes = CC
+       }
+ ... (56 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L425-L426` → after: `L3579-L3580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3579-L3580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3579-L3580) · [Before (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L425-L426)

```diff
-       maximizeInPlaceFromFloats(kk, ek, ik, Dk) {
-         return this.r = Math.max(kk, this.r), this.g = Math.max(ek, this.g), this.b = Math.max(ik, this.b), this.a = Math.max(Dk, this.a), this
+       get enableDepth() {
+         return this._enableDepth
```

#### 63. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L428-L429` → after: `L3582-L3583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3582-L3583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3582-L3583) · [Before (L428-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L428-L429)

```diff
-       floorToRef(kk) {
-         throw new ReferenceError("Can not floor a color")
+       set enableDepth(CC) {
+         this._enableDepth = CC, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
```

#### 64. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L431-L432` → after: `L3585-L3586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3585-L3586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3585-L3586) · [Before (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L431-L432)

```diff
-       floor() {
-         throw new ReferenceError("Can not floor a color")
+       get enableNormal() {
+         return this._enableNormal
```

#### 65. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L434-L435` → after: `L3588-L3589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3588-L3589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3588-L3589) · [Before (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L434-L435)

```diff
-       fractToRef(kk) {
-         throw new ReferenceError("Can not fract a color")
+       set enableNormal(CC) {
+         this._enableNormal = CC, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
```

#### 66. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L437-L438` → after: `L3591-L3592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3591-L3592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3591-L3592) · [Before (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L437-L438)

```diff
-       fract() {
-         throw new ReferenceError("Can not fract a color")
+       get enablePosition() {
+         return this._enablePosition
```

#### 67. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L440-L441` → after: `L3594-L3595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3594-L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3594-L3595) · [Before (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L440-L441)

```diff
-       ge() {
-         throw new ReferenceError("Can not negate a color")
+       set enablePosition(CC) {
+         this._enablePosition = CC, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
```

#### 68. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L443-L444` → after: `L3597-L3598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3597-L3598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3597-L3598) · [Before (L443-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L443-L444)

```diff
-       negateInPlace() {
-         throw new ReferenceError("Can not negate a color")
+       get enableVelocity() {
+         return this._enableVelocity
```

#### 69. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L446-L447` → after: `L3600-L3601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3600-L3601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3600-L3601) · [Before (L446-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L446-L447)

```diff
-       negateToRef(kk) {
-         throw new ReferenceError("Can not negate a color")
+       set enableVelocity(CC) {
+         this._enableVelocity = CC, CC || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = CC
```

#### 70. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L449-L451` → after: `L3603-L3604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3603-L3604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3603-L3604) · [Before (L449-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L449-L451)

```diff
-       equalsWithEpsilon(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fk.d;
-         return (0, Sk.WithinEpsilon)(this.r, kk.r, ek) && (0, Sk.WithinEpsilon)(this.g, kk.g, ek) && (0, Sk.WithinEpsilon)(this.b, kk.b, ek) && (0, Sk.WithinEpsilon)(this.a, kk.a, ek)
+       get enableVelocityLinear() {
+         return this._enableVelocityLinear
```

#### 71. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L453-L454` → after: `L3606-L3607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3606-L3607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3606-L3607) · [Before (L453-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L453-L454)

```diff
-       Hbk(kk, ek, ik, Dk) {
-         return this.r === kk && this.g === ek && this.b === ik && this.a === Dk
+       set enableVelocityLinear(CC) {
+         this._enableVelocityLinear = CC, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
```

#### 72. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L456-L457` → after: `L3609-L3610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3609-L3610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3609-L3610) · [Before (L456-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L456-L457)

```diff
-       toString() {
-         return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
+       get enableReflectivity() {
+         return this._enableReflectivity
```

#### 73. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L459-L460` → after: `L3612-L3613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3612-L3613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3612-L3613) · [Before (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L459-L460)

```diff
-       getClassName() {
-         return "Color4"
+       set enableReflectivity(CC) {
+         this._enableReflectivity = CC, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
```

#### 74. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L462-L464` → after: `L3615-L3616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3615-L3616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3615-L3616) · [Before (L462-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L462-L464)

```diff
-       getHashCode() {
-         let kk = 255 * this.r | 0;
-         return kk = 397 * kk ^ 255 * this.g, kk = 397 * kk ^ 255 * this.b, kk = 397 * kk ^ 255 * this.a, kk
+       get enableScreenspaceDepth() {
+         return this._enableScreenspaceDepth
```

#### 75. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L466-L467` → after: `L3618-L3619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3618-L3619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3618-L3619) · [Before (L466-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L466-L467)

```diff
-       clone() {
-         return (new xk).Fs(this)
+       set enableScreenspaceDepth(CC) {
+         this._enableScreenspaceDepth = CC, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
```

#### 76. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L469-L470` → after: `L3621-L3622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3621-L3622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3621-L3622) · [Before (L469-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L469-L470)

```diff
-       Fs(kk) {
-         return this.r = kk.r, this.g = kk.g, this.b = kk.b, this.a = kk.a, this
+       get enableIrradiance() {
+         return this._enableIrradiance
```

#### 77. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L472-L473` → after: `L3624-L3625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3624-L3625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3624-L3625) · [Before (L472-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L472-L473)

```diff
-       Z6(kk, ek, ik, Dk) {
-         return this.r = kk, this.g = ek, this.b = ik, this.a = Dk, this
+       set enableIrradiance(CC) {
+         this._enableIrradiance = CC, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
```

#### 78. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L475-L476` → after: `L3627-L3628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3627-L3628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3627-L3628) · [Before (L475-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L475-L476)

```diff
-       set(kk, ek, ik, Dk) {
-         return this.Z6(kk, ek, ik, Dk)
+       get enableObjectId() {
+         return this._enableObjectId
```

#### 79. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L478-L479` → after: `L3630-L3661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3630-L3661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3630-L3661) · [Before (L478-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L478-L479)

```diff
-       A_(kk) {
-         return this.r = this.g = this.b = this.a = kk, this
+       set enableObjectId(CC) {
+         if (CC && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
+         if (CC && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
+         if (CC && !this._enableObjectId && !this._linkedWithPrePass) {
+           const CC = this._scene.mg(),
+             zC = Math.min(CC.getCaps().maxDrawBuffers ?? 1, 8),
+             ZC = this._assignRenderTargetIndices()[0] + 1;
+           if (CC.getCaps().drawBuffersExtension && ZC > zC) throw new Error(`GeometryBufferRenderer: ${ZC} color attachments were requested, but this engine supports at most ${zC}`)
+         }
+         this._enableObjectId = CC, CC || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
+       }
+       get enableMeshBlendingTag() {
+         return this._enableMeshBlendTag
+       }
+       set enableMeshBlendingTag(CC) {
+         if (this._enableMeshBlendTag !== CC) {
+ ... (16 more added lines; see GitHub link above)
```

#### 80. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L481-L488` → after: `L3663-L3958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3663-L3958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3663-L3958) · [Before (L481-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L481-L488)

```diff
-       toHexString() {
-         let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const ek = Math.round(255 * this.r),
-           ik = Math.round(255 * this.g),
-           Dk = Math.round(255 * this.b);
-         if (kk) return "#" + (0, Sk.ToHex)(ek) + (0, Sk.ToHex)(ik) + (0, Sk.ToHex)(Dk);
-         const fk = Math.round(255 * this.a);
-         return "#" + (0, Sk.ToHex)(ek) + (0, Sk.ToHex)(ik) + (0, Sk.ToHex)(Dk) + (0, Sk.ToHex)(fk)
+       get sS() {
+         return this._scene
+       }
+       get ratio() {
+         return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
+       }
+       get shaderLanguage() {
+         return this._shaderLanguage
+       }
+       constructor(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
+           QC = arguments.length > 3 ? arguments[3] : void 0;
+         var wC;
+         this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, t … [truncated]
+           get: function() {
+ ... (280 more added lines; see GitHub link above)
```

#### 81. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L490-L491` → after: `L3960-L3969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3960-L3969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3960-L3969) · [Before (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L490-L491)

```diff
-       fromHexString(kk) {
-         return "#" !== kk.substring(0, 1) || 9 !== kk.length && 7 !== kk.length || (this.r = parseInt(kk.substring(1, 3), 16) / 255, this.g = parseInt(kk.substring(3, 5), 16) / 255, this.b = parseInt(kk.substring(5, 7), 16) / 255, 9 === kk.length && (this.a = parseInt(kk.substrin … [truncated]
+       _getRenderTargetDimensions() {
+         if ("object" === typeof this._ratioOrDimensions) return {
+           width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
+           height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
+         };
+         const CC = this._scene.mg();
+         return {
+           width: Math.max(1, Math.floor(CC.getRenderWidth() * this._ratioOrDimensions)),
+           height: Math.max(1, Math.floor(CC.getRenderHeight() * this._ratioOrDimensions))
+         }
```

#### 82. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L493-L496` → after: `L3971-L3973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3971-L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3971-L3973) · [Before (L493-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L493-L496)

```diff
-       toLinearSpace() {
-         let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const ek = new xk;
-         return this.toLinearSpaceToRef(ek, kk), ek
+       _copyBonesTransformationMatrices(CC, zC) {
+         for (let ZC = 0; ZC < CC.length; ZC++) zC[ZC] = CC[ZC];
+         return zC
```

#### 83. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L498-L499` → after: `L3975-L4001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R3975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L3975-L4001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L3975-L4001) · [Before (L498-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L498-L499)

```diff
-       toLinearSpaceToRef(kk) {
-         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (kk.r = Pk(this.r), kk.g = Pk(this.g), kk.b = Pk(this.b)) : (kk.r = rk(this.r), kk.g = rk(this.g), kk.b = rk(this.b)), kk.a = this.a, this
+     }
+     sz.ForceGLSL = !1, sz.DEPTH_TEXTURE_TYPE = 0, sz.NORMAL_TEXTURE_TYPE = 1, sz.POSITION_TEXTURE_TYPE = 2, sz.VELOCITY_TEXTURE_TYPE = 3, sz.REFLECTIVITY_TEXTURE_TYPE = 4, sz.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, sz.VELOCITY_LINEAR_TEXTURE_TYPE = 6, sz.IRRADIANCE_TEXTURE_TYPE = 7,  … [truncated]
+       throw (0, Pz.i)("GeometryBufferRendererSceneComponent")
+     };
+     var Tz = ZC(37002);
+     const az = {
+       effect: null,
+       subMesh: null
+     };
+ 
+     function tz(CC) {
+       if ("number" === typeof CC) return 1;
+       if (CC instanceof uC.n) return 2;
+       if (CC instanceof uC.r || CC instanceof jC.e) return 3;
+       if (CC instanceof uC.u || CC instanceof jC.g) return 4;
+       throw new Error("Unsupported OpenPBR property type.")
+ ... (11 more added lines; see GitHub link above)
```

#### 84. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L501-L529` → after: `L4003-L4004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R4003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L4003-L4004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L4003-L4004) · [Before (L501-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L501-L529)

```diff
-       toGammaSpace() {
-         let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const ek = new xk;
-         return this.toGammaSpaceToRef(ek, kk), ek
-       }
-       toGammaSpaceToRef(kk) {
-         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (kk.r = Mk(this.r), kk.g = Mk(this.g), kk.b = Mk(this.b)) : (kk.r = mk(this.r), kk.g = mk(this.g), kk.b = mk(this.b)), kk.a = this.a, this
-       }
-       static FromHexString(kk) {
-         return "#" !== kk.substring(0, 1) || 9 !== kk.length && 7 !== kk.length ? new xk(0, 0, 0, 0) : new xk(0, 0, 0, 1).fromHexString(kk)
-       }
-       static Lerp(kk, ek, ik) {
-         return xk.LerpToRef(kk, ek, ik, new xk)
-       }
-       static LerpToRef(kk, ek, ik, Dk) {
-         return Dk.r = kk.r + (ek.r - kk.r) * ik, Dk.g = kk.g + (ek.g - kk.g) * ik, Dk.b = kk.b + (ek.b - kk.b) * ik, Dk.a = kk.a + (ek.a - kk.a) * ik, Dk
- ... (13 more removed lines; see GitHub link above)
+       constructor(CC, zC) {
+         this.linkedProperties = {}, this.firstLinkedKey = "", this.name = CC, this.numComponents = zC
```

#### 85. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L531-L533` → after: `L4006-L4012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R4006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L4006-L4012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L4006-L4012) · [Before (L531-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L531-L533)

```diff
-       static Hermite1stDerivative(kk, ek, ik, Dk, fk) {
-         const Sk = new xk;
-         return this.Hermite1stDerivativeToRef(kk, ek, ik, Dk, fk, Sk), Sk
+     }
+     Dz._tmpArray = [0, 0, 0, 0];
+     class jz {
+       constructor(CC, zC, ZC, QC) {
+         let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
+           bC = arguments.length > 5 ? arguments[5] : void 0;
+         this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = CC, this.targetUniformName = ZC, this.defaultValue = zC, this.value = zC, this.targetUniformComponentNum = QC, this.targetUniformComponentOffset = wC, this.requiredDefine = bC
```

#### 86. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L535-L537` → after: `L4014-L4020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R4014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L4014-L4020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L4014-L4020) · [Before (L535-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L535-L537)

```diff
-       static Hermite1stDerivativeToRef(kk, ek, ik, Dk, fk, Sk) {
-         const bk = fk * fk;
-         Sk.r = 6 * (bk - fk) * kk.r + (3 * bk - 4 * fk + 1) * ek.r + 6 * (-bk + fk) * ik.r + (3 * bk - 2 * fk) * Dk.r, Sk.g = 6 * (bk - fk) * kk.g + (3 * bk - 4 * fk + 1) * ek.g + 6 * (-bk + fk) * ik.g + (3 * bk - 2 * fk) * Dk.g, Sk.b = 6 * (bk - fk) * kk.b + (3 * bk - 4 * fk + 1 … [truncated]
+       get numComponents() {
+         return "number" === typeof this.defaultValue ? 1 : tz(this.defaultValue)
+       }
+     }
+     class yz {
+       get samplerName() {
+         return this.samplerPrefix + "Sampler"
```

#### 87. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L539-L541` → after: `L4022-L4023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R4022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L4022-L4023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L4022-L4023) · [Before (L539-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L539-L541)

```diff
-       static FromColor3(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         return new xk(kk.r, kk.g, kk.b, ek)
+       get samplerInfoName() {
+         return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
```

#### 88. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L543-L545` → after: `L4025-L14162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R4025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L4025-L14162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L4025-L14162) · [Before (L543-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L543-L545)

```diff
-       static FromArray(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return new xk(kk[ek], kk[ek + 1], kk[ek + 2], kk[ek + 3])
+       get samplerMatrixName() {
+         return this.samplerPrefix + "Matrix"
+       }
+       constructor(CC, zC, ZC) {
+         this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = CC, this.samplerPrefix = zC, this.textureDefine = ZC
+       }
+     }
+     class Lz extends((0, Sz.d)((0, gz.e)(sC.b))) {}
+     class Uz extends(function(CC) {
+       return class extends CC {
+         constructor() {
+           super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBO … [truncated]
+         }
+       }
+     }(Lz)) {}
+     class Bz extends((0, yC.e)(Uz)) {
+ ... (10122 more added lines; see GitHub link above)
```

#### 89. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L547-L550` → after: `L14164-L14165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14164-L14165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14164-L14165) · [Before (L547-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L547-L550)

```diff
-       static FromArrayToRef(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           ik = arguments.length > 2 ? arguments[2] : void 0;
-         ik.r = kk[ek], ik.g = kk[ek + 1], ik.b = kk[ek + 2], ik.a = kk[ek + 3]
+       static _IsEndSite(CC) {
+         return 0 === CC.children.length
```

#### 90. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L552-L553` → after: `L14167-L14173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14167-L14173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14167-L14173) · [Before (L552-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L552-L553)

```diff
-       static FromInts(kk, ek, ik, Dk) {
-         return new xk(kk / 255, ek / 255, ik / 255, Dk / 255)
+       static _GetBoneOffset(CC) {
+         try {
+           if (!CC.getParent()) return CC.getRestMatrix().getTranslation();
+           return CC.getLocalMatrix().getTranslation()
+         } catch (zC) {
+           return QC.Eg.Zero()
+         }
```

#### 91. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L555-L556` → after: `L14175-L14177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14175-L14177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14175-L14177) · [Before (L555-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L555-L556)

```diff
-       static CheckColors4(kk, ek) {
-         if (kk.length === 3 * ek) {
+       static _ExportMotionData(CC, zC, ZC, QC) {
+         let wC = "";
+         for (let bC = 0; bC < zC; bC++) {
```

#### 92. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L558-L562` → after: `L14179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14179) · [Before (L558-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L558-L562)

```diff
-           for (let ik = 0; ik < kk.length; ik += 3) {
-             const Dk = ik / 3 * 4;
-             ek[Dk] = kk[ik], ek[Dk + 1] = kk[ik + 1], ek[Dk + 2] = kk[ik + 2], ek[Dk + 3] = 1
-           }
-           return ek
+           this._CollectFrameValues(CC, bC + ZC, zC, QC), wC += zC.map((CC => CC.toFixed(6))).join(" ") + "\n"
```

#### 93. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L603` → after: `L14217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14217) · [Before (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L603)

```diff
-       return parseInt(kk.toString().replace(/\W/g, ""))
+       return "string" === typeof CC?.name
```

#### 94. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L607-L608` → after: `L14223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14223) · [Before (L607-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L607-L608)

```diff
-       let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
-       return Math.abs(kk - ek) <= ik
+       Object.prototype.hasOwnProperty.call(CC.metadata, dn) || (CC.metadata[dn] = []), CC.metadata[dn].push(zC)
```

#### 95. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L611-L613` → after: `L14226-L14229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14226-L14229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14226-L14229) · [Before (L611-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L611-L613)

```diff
-     function Sk(kk, ek, ik) {
-       let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
-       return kk < ek - Dk || kk > ik + Dk
+     function En(CC) {
+       return (zC, ZC) => {
+         zC[mn] = CC
+       }
```

#### 96. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L616-L617` → after: `L14232-L14237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14232-L14237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14232-L14237) · [Before (L616-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L616-L617)

```diff
-     function bk(kk, ek) {
-       return kk === ek ? kk : Math.random() * (ek - kk) + kk
+     function Xn() {
+       return (CC, zC) => Hn(zC, {
+         kind: "none",
+         prop: String(zC.name),
+         ignore: !0
+       })
```

#### 97. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L620-L621` → after: `L14240-L14245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14240-L14245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14240-L14245) · [Before (L620-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L620-L621)

```diff
-     function rk(kk, ek, ik) {
-       return kk + (ek - kk) * ik
+     function cn(CC) {
+       return (zC, ZC) => Hn(ZC, {
+         kind: "attr",
+         prop: String(ZC.name),
+         ...CC
+       })
```

#### 98. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L624-L626` → after: `L14248-L14253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14248-L14253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14248-L14253) · [Before (L624-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L624-L626)

```diff
-     function Pk(kk, ek, ik) {
-       let Dk = wk(ek - kk, 360);
-       return Dk > 180 && (Dk -= 360), kk + Dk * xk(ik)
+     function un(CC) {
+       return (zC, ZC) => Hn(ZC, {
+         kind: "elem",
+         prop: String(ZC.name),
+         ...CC
+       })
```

#### 99. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L629-L631` → after: `L14256-L14263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14256-L14263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14256-L14263) · [Before (L629-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L629-L631)

```diff
-     function mk(kk, ek, ik) {
-       let Dk;
-       return Dk = kk != ek ? xk((ik - kk) / (ek - kk)) : 0, Dk
+     function rn(CC) {
+       const zC = "function" === typeof CC ? CC : CC?.constructor,
+         ZC = zC?.[Symbol.metadata];
+       if (!ZC) return [];
+       const QC = [];
+       let wC = ZC;
+       for (; wC;) Object.prototype.hasOwnProperty.call(wC, dn) && QC.push(...wC[dn]), wC = Object.getPrototypeOf(wC);
+       return QC
```

#### 100. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L634-L637` → after: `L14266-L14268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14266-L14268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14266-L14268) · [Before (L634-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L634-L637)

```diff
-     function Mk(kk, ek, ik, Dk, fk) {
-       const Sk = fk * fk,
-         bk = fk * Sk;
-       return kk * (2 * bk - 3 * Sk + 1) + ik * (-2 * bk + 3 * Sk) + ek * (bk - 2 * Sk + fk) + Dk * (bk - Sk)
+     function sn(CC) {
+       const zC = CC?.constructor?.[mn];
+       return zC || void 0
```

#### 101. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L640-L642` → after: `L14271-L14272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14271-L14272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14271-L14272) · [Before (L640-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L640-L642)

```diff
-     function Kk(kk, ek, ik, Dk, fk) {
-       const Sk = fk * fk;
-       return 6 * (Sk - fk) * kk + (3 * Sk - 4 * fk + 1) * ek + 6 * (-Sk + fk) * ik + (3 * Sk - 2 * fk) * Dk
+     function Tn(CC) {
+       return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(CC)
```

#### 102. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L646-L648` → after: `L14276-L14295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14276-L14295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14276-L14295) · [Before (L646-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L646-L648)

```diff
-       let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-       return Math.min(ik, Math.max(ek, kk))
+       if (Yn(CC)) return CC;
+       const zC = (CC ?? "").trim();
+       if (!zC) return {
+         name: ""
+       };
+       const ZC = zC.indexOf(":");
+       if (-1 === ZC) return {
+         name: zC
+       };
+       if (-1 !== zC.indexOf(":", ZC + 1)) return {
+         name: zC
+       };
+       const QC = zC.slice(0, ZC),
+         wC = zC.slice(ZC + 1);
+       return Tn(QC) && Tn(wC) ? {
+         ns: QC,
+ ... (4 more added lines; see GitHub link above)
```

#### 103. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L651-L652` → after: `L14298-L14299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14298-L14299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14298-L14299) · [Before (L651-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L651-L652)

```diff
-     function nk(kk) {
-       return kk -= 2 * Math.PI * Math.floor((kk + Math.PI) / (2 * Math.PI))
+     function tn(CC, zC) {
+       return zC ? `${zC}:${CC}` : CC
```

#### 104. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L656-L657` → after: `L14313-L14323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14313-L14323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14313-L14323) · [Before (L656-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L656-L657)

```diff
-       const ek = kk.toString(16);
-       return kk <= 15 ? ("0" + ek).toUpperCase() : ek.toUpperCase()
+       const zC = CC?.eps ?? Dn.eps;
+       return {
+         eps: zC,
+         maxDecimalsCap: CC?.maxDecimalsCap ?? Dn.maxDecimalsCap,
+         trimTrailingZeros: CC?.trimTrailingZeros ?? Dn.trimTrailingZeros,
+         fixedDecimals: CC?.fixedDecimals,
+         allowScientific: CC?.allowScientific ?? Dn.allowScientific,
+         snapNearZero: CC?.snapNearZero ?? Dn.snapNearZero,
+         zeroThreshold: CC?.zeroThreshold ?? zC,
+         perAttributeEps: CC?.perAttributeEps
+       }
```

#### 105. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L661-L670` → after: `L14327-L14329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14327-L14329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14327-L14329) · [Before (L661-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L661-L670)

```diff
-       if (Math.log2) return Math.floor(Math.log2(kk));
-       if (kk < 0) return NaN;
-       if (0 === kk) return -1 / 0;
-       let ek = 0;
-       if (kk < 1) {
-         for (; kk < 1;) ek++, kk *= 2;
-         ek = -ek
-       } else if (kk > 1)
-         for (; kk > 1;) ek++, kk = Math.floor(kk / 2);
-       return ek
+       return {
+         number: yn(CC?.number)
+       }
```

#### 106. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L672-L674` → after: `L14331-L14351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14331-L14351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14331-L14351) · [Before (L672-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L672-L674)

```diff
- 
-     function wk(kk, ek) {
-       return kk - Math.floor(kk / ek) * ek
+     class Un {
+       constructor(CC) {
+         if (this.o = CC, this._o = CC.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
+       }
+       toString(CC) {
+         if (!Number.isFinite(CC)) throw new Error(`Cannot format non-finite number: ${CC}`);
+         const zC = this._o,
+           ZC = this._clampInt(zC.maxDecimalsCap ?? 15, 0, 20),
+           QC = zC.trimTrailingZeros ?? !0,
+           wC = zC.snapNearZero ?? !0,
+           bC = zC.zeroThreshold ?? zC.eps,
+           nC = 1 / zC.eps;
+         let fC, oC = Math.round(CC * nC) / nC;
+         if (Object.is(oC, -0) && (oC = 0), wC && Math.abs(oC) <= bC && (oC = 0), fC = void 0 !== zC.fixedDecimals ? this._clampInt(zC.fixedDecimals, 0, ZC) : this._clampInt(Math.ceil(-Math.log10(zC.eps)), 0, ZC), zC.allowScientific, 0 === fC) return String(Math.trunc(oC));
+         let qC = oC.toFixed(fC);
+         if (QC && void 0 === zC.fixedDecimals && (qC = qC.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(qC)) throw new Error(`Scientific notation not allowed in XML output: ${qC}`);
+ ... (5 more added lines; see GitHub link above)
```

#### 107. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L677-L678` → after: `L14354-L14355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14354-L14355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14354-L14355) · [Before (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L677-L678)

```diff
-     function lk(kk, ek, ik) {
-       return (kk - ek) / (ik - ek)
+     function Bn(CC) {
+       return CC instanceof Date
```

#### 108. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L681-L682` → after: `L14358-L14359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14358-L14359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14358-L14359) · [Before (L681-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L681-L682)

```diff
-     function pk(kk, ek, ik) {
-       return kk * (ik - ek) + ek
+     function On(CC) {
+       return "string" === typeof CC
```

#### 109. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L685-L687` → after: `L14362-L14363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14362-L14363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14362-L14363) · [Before (L685-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L685-L687)

```diff
-     function yk(kk, ek) {
-       let ik = wk(ek - kk, 360);
-       return ik > 180 && (ik -= 360), ik
+     function kn(CC) {
+       return "string" === typeof CC || "number" === typeof CC || "boolean" === typeof CC || "bigint" === typeof CC || Bn(CC)
```

#### 110. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L690-L692` → after: `L14366-L14367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14366-L14367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14366-L14367) · [Before (L690-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L690-L692)

```diff
-     function Yk(kk, ek) {
-       const ik = wk(kk, 2 * ek);
-       return ek - Math.abs(ik - ek)
+     function Vn(CC) {
+       return "number" === typeof CC || "boolean" === typeof CC || "bigint" === typeof CC || Bn(CC)
```

#### 111. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L694-L697` → after: `L14369-L14491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14369-L14491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14369-L14491) · [Before (L694-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L694-L697)

```diff
- 
-     function Lk(kk, ek, ik) {
-       let Dk = xk(ik);
-       return Dk = -2 * Dk * Dk * Dk + 3 * Dk * Dk, ek * Dk + kk * (1 - Dk)
+     class Cf {
+       constructor(CC, zC) {
+         this._ns = new Map, this._prefixCount = 0, this._builder = CC, this._format = Ln(zC), this._nFmt = new Un(this._format)
+       }
+       withNamespace() {
+         for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
+         for (const QC of zC) this._assignNamespace(QC);
+         return this
+       }
+       serialize(CC, zC) {
+         if (!(zC = zC ?? sn(CC))) throw new Error("can not find name for given object");
+         const ZC = an(zC);
+         ZC.ns && this._assignNamespace(ZC.ns, "xmlns"), this._gatherNamespaces(CC, new WeakSet);
+         const QC = this._builder.ele(null, ZC.name);
+         for (const [wC, bC] of Array.from(this._ns.entries())) QC.att("xmlns", bC, wC);
+         this._writeObjectContent(QC, CC, (new WeakSet).add(CC)), this._builder.end()
+ ... (107 more added lines; see GitHub link above)
```

#### 112. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L699-L702` → after: `L14493-L14602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14493-L14602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14493-L14602) · [Before (L699-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L699-L702)

```diff
- 
-     function Ck(kk, ek, ik) {
-       let Dk;
-       return Dk = Math.abs(ek - kk) <= ik ? ek : kk + Math.sign(ek - kk) * ik, Dk
+     class zf {}
+     var Zf;
+     zf.OpenTag = "<", zf.CloseTag = ">", zf.Slash = "/", zf.Question = "?", zf.Quote = '"', zf.Equal = "=", zf.Space = " ", zf.Semicolon = ":", zf.Dec = "<?xml", zf.Xml = "xml", zf.Xmlns = "xmlns", zf.Xsi = "xsi", zf.VersionKeyword = "version", zf.EncodingKeyword = "encoding", zf … [truncated]
+       function(CC) {
+         CC[CC.Declaration = 0] = "Declaration", CC[CC.Tag = 1] = "Tag", CC[CC.Attribute = 2] = "Attribute", CC[CC.Text = 3] = "Text"
+       }(Zf || (Zf = {}));
+     class Qf {
+       constructor(CC) {
+         this._ctxStack = [], this._d = 0, this._w = CC
+       }
+       dec(CC, zC, ZC) {
+         return this._w.write(zf.Dec), this._writeAttStr(zf.VersionKeyword, CC), zC && this._writeAttStr(zf.EncodingKeyword, zC), void 0 !== ZC && this._writeAttStr(zf.StandaloneKeyword, ZC ? "yes" : "no"), this._w.write(zf.Question, zf.CloseTag), this
+       }
+       att(CC, zC, ZC) {
+         const QC = this._peekContext();
+         if (!QC) throw new Error("att() without open element");
+ ... (94 more added lines; see GitHub link above)
```

#### 113. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L704-L708` → after: `L14604-L14624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14604-L14624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14604-L14624) · [Before (L704-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L704-L708)

```diff
- 
-     function Ak(kk, ek, ik) {
-       const Dk = yk(kk, ek);
-       let fk;
-       return fk = -ik < Dk && Dk < ik ? ek : Ck(kk, ek = kk + Dk, ik), fk
+     Qf.Context = class {
+       constructor(CC, zC) {
+         this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = CC, this.depth = zC
+       }
+     };
+     class wf {
+       constructor() {
+         this.count = 0, this._chunks = []
+       }
+       write() {
+         for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
+         if (0 === zC.length) return this;
+         const QC = zC.join("");
+         return this._chunks.push(QC), this.count += QC.length, this
+       }
+       toString() {
+ ... (5 more added lines; see GitHub link above)
```

#### 114. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L710-L712` → after: `L14626-L14650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14626-L14650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14626-L14650) · [Before (L710-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L710-L712)

```diff
- 
-     function jk(kk, ek, ik) {
-       return (kk - ek) / (ik - ek)
+     class bf {
+       constructor(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         this._sink = CC, this._opts = zC, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
+       }
+       write() {
+         for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
+         if (0 === zC.length) return this;
+         const QC = zC.join("");
+         if (0 === QC.length) return this;
+         this._pending += QC, this._pendingChars += QC.length;
+         const wC = this._opts.flushChars ?? 65536;
+         return this._pendingChars >= wC && this.flush(), this
+       }
+       flush() {
+         if (0 === this._pendingChars) return this;
+ ... (9 more added lines; see GitHub link above)
```

#### 115. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L714-L716` → after: `L14652-L14678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14652-L14678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14652-L14678) · [Before (L714-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L714-L716)

```diff
- 
-     function sk(kk, ek, ik) {
-       return (ik - ek) * kk + ek
+     const nf = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
+       ff = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
+     var of, qf;
+     ! function(CC) {
+       CC.micron = "micron", CC.millimeter = "millimeter", CC.centimeter = "centimeter", CC.inch = "inch", CC.foot = "foot", CC.meter = "meter"
+     }(of || (of = {})),
+     function(CC) {
+       CC.model = "model", CC.solidsupport = "solidsupport", CC.support = "support", CC.surface = "surface", CC.other = "other"
+     }(qf || (qf = {}));
+     const Ff = "http://schemas.openxmlformats.org/package/2006/content-types",
+       Wf = "http://schemas.openxmlformats.org/package/2006/relationships";
+     var Nf;
+     ! function(CC) {
+       CC.Relationships = "application/vnd.openxmlformats-package.relationships+xml", CC.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", CC.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", CC.Colors = "application/vnd.ms-package.3dmanufactur … [truncated]
+     }(Nf || (Nf = {}));
+     const Mf = "_rels/",
+ ... (11 more added lines; see GitHub link above)
```

#### 116. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L718-L721` → after: `L14680-L14883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14680-L14883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14680-L14883) · [Before (L718-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L718-L721)

```diff
- 
-     function dk(kk, ek) {
-       const ik = kk % ek;
-       return 0 === ik ? ek : dk(ek, ik)
+     Gf.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", Gf.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", Gf.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", Gf.MustPre … [truncated]
+     let Rf = (() => {
+         let CC, zC, ZC = [En({
+             ns: Ff,
+             name: "Types"
+           })],
+           QC = [];
+         zC = class {
+           constructor() {
+             this.items = []
+           }
+         };
+         return (0, vC.o)(zC, "ThreeMfContentTypes"), (() => {
+           const wC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+           (0, vC.j)(null, CC = {
+             value: zC
+ ... (188 more added lines; see GitHub link above)
```

#### 117. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L723-L754` → after: `L14885-L14894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14885-L14894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14885-L14894) · [Before (L723-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L723-L754)

```diff
-     ik.r(ek), ik.d(ek, {
-       Clamp: () => xk,
-       DeltaAngle: () => yk,
-       Denormalize: () => pk,
-       ExtractAsInt: () => Dk,
-       Hermite: () => Mk,
-       Hermite1stDerivative: () => Kk,
-       HighestCommonFactor: () => dk,
-       ILog2: () => Hk,
-       InverseLerp: () => mk,
-       Lerp: () => rk,
-       LerpAngle: () => Pk,
-       MoveTowards: () => Ck,
-       MoveTowardsAngle: () => Ak,
-       Normalize: () => lk,
-       NormalizeRadians: () => nk,
- ... (16 more removed lines; see GitHub link above)
+     class vf {
+       static Zero() {
+         return new vf([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
+       }
+       constructor(CC) {
+         this.values = CC
+       }
+       toString() {
+         return this.values.join(" ")
+       }
```

#### 118. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L756-L758` → after: `L14896-L14902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14896-L14902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14896-L14902) · [Before (L756-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L756-L758)

```diff
- 
-     function fk(kk, ek) {
-       return Dk(kk, ek)
+     class ef {
+       constructor(CC) {
+         this.o = CC, this._f = new Un(CC)
+       }
+       toString(CC) {
+         return CC.values.map((CC => this._f.toString(CC))).join(" ")
+       }
```

#### 119. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L760-L780` → after: `L14904-L15959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R14904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L14904-L15959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L14904-L15959) · [Before (L760-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L760-L780)

```diff
-     ik.d(ek, {
-       c: () => Dk,
-       e: () => fk,
-       h: () => bk
-     });
-     const Sk = ["push", "splice", "pop", "shift", "unshift"];
- 
-     function bk(kk, ek) {
-       const ik = Sk.map((ik => function(kk, ek, ik) {
-         const Dk = kk[ek];
-         if ("function" !== typeof Dk) return null;
-         const fk = function() {
-           const Dk = kk.length,
-             Sk = fk.previous.apply(kk, arguments);
-           return ik(ek, Dk), Sk
-         };
- ... (5 more removed lines; see GitHub link above)
+     let hf = (() => {
+         let CC, zC, ZC, QC, wC, bC = [En({
+             ns: nf,
+             name: "model"
+           })],
+           nC = [],
+           fC = [],
+           oC = [],
+           qC = [],
+           FC = [],
+           WC = [],
+           NC = [];
+         zC = class {
+           constructor() {
+             this.unit = (0, vC.n)(this, fC, of.millimeter), this.requiredextensions = ((0, vC.n)(this, oC), (0, vC.n)(this, qC, void 0)), this.recommendedextensions = ((0, vC.n)(this, FC), (0, vC.n)(this, WC, void 0)), this.metadata = (0, vC.n)(this, NC)
+           }
+ ... (1040 more added lines; see GitHub link above)
```

#### 120. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L782-L784` → after: `L15961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R15961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L15961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L15961) · [Before (L782-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L782-L784)

```diff
-       }(kk, ik, ek)));
-       return () => {
-         for (const kk of ik) kk?.()
+         return `#${ZC}${QC}${wC}`
```

#### 121. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L787-L796` → after: `L15964-L15993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R15964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L15964-L15993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L15964-L15993) · [Before (L787-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L787-L796)

```diff
-   },
-   36734: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => Sk,
-       h: () => fk
-     });
-     const Dk = {};
- 
-     function fk(kk, ek) {
-       Dk[kk] = ek
+     class Bf {
+       constructor() {
+         this._model = new hf, this._objects = new Map
+       }
+       withMetaData(CC, zC, ZC, QC) {
+         return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new Kf(CC, zC, ZC, QC)), this
+       }
+       withMaterial(CC) {
+         return CC instanceof Uf && (CC = CC.build()), CC && (this._model.resources = this._model.resources ?? new df, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(CC)), this
+       }
+       withMesh(CC) {
+         return CC instanceof Lf && (CC = CC.build()), this._model.resources = this._model.resources ?? new df, this._model.resources.object.push(CC), this
+       }
+       withComponents(CC) {
+         return CC instanceof yf && (CC = CC.build()), this._model.resources = this._model.resources ?? new df, this._model.resources.object.push(CC), this
+       }
+ ... (14 more added lines; see GitHub link above)
```

#### 122. `bundles/bloxd.io/chunks/js/230.js` (Changed code · before: `L798-L800` → after: `L15995-L16192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26R15995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-4bd4fe37b1a176a3896fdf77583aed9993fc7a5995d50ce66eed1d0741c67e26) · [After (L15995-L16192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/230.js#L15995-L16192) · [Before (L798-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/230.js#L798-L800)

```diff
- 
-     function Sk(kk) {
-       return Dk[kk]
+     Bf.KnownMetaSet = new Set(hf.KnownMeta.map((CC => CC.toLowerCase())));
+     class Of {
+       withContentType(CC) {
+         this._cts || (this._cts = new Rf);
+         const zC = this._cts.items;
+         return zC.some((zC => zC.ext === CC.ext && zC.ct === CC.ct)) || zC.push(CC), this
+       }
+       withRelationship(CC) {
+         this._rs || (this._rs = new xf);
+         const zC = this._rs.items;
+         return zC.some((zC => zC.id === CC.id)) || zC.push(CC), this.withContentType(new Af("rels", Nf.Relationships)), this
+       }
+       withModel(CC) {
+         return CC instanceof Bf && (CC = CC.build()), this._m = CC, this.withContentType(new Af("model", Nf.Model)), this
+       }
+       build() {
+ ... (182 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/231.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/231.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26)

#### 1. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/231.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/231.js#L4)

```diff
-   36722: (kk, ek, ik) => {
+   36985: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/231.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/231.js#L6)

```diff
-       e: () => fk
+       c: () => wC
```

#### 3. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/231.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/231.js#L8)

```diff
-     var Dk = ik(36726);
+     var QC = ZC(36987);
```

#### 4. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L13-L14` → after: `L13-L1905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L13-L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/231.js#L13-L1905) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/231.js#L13-L14)

```diff
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
+       }
+     }
+     wC.Instances = [], wC.OnEnginesDisposedObservable = new QC.d, wC._LastCreatedScene = null, wC.UseFallbackTexture = !0, wC.FallbackTexture = ""
+   },
+   36977: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => QC
+     });
+     class QC {
+       static SetMatrixPrecision(CC) {
+         if (QC.MatrixTrackPrecisionChange = !1, CC && !QC.MatrixUse64Bits && QC.MatrixTrackedMatrices)
+           for (let zC = 0; zC < QC.MatrixTrackedMatrices.length; ++zC) {
+             const CC = QC.MatrixTrackedMatrices[zC],
+               ZC = CC._m;
+ ... (1877 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L17-L26` → after: `L1908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R1908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L1908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/231.js#L1908) · [Before (L17-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/231.js#L17-L26)

```diff
-     fk.Instances = [], fk.OnEnginesDisposedObservable = new Dk.c, fk._LastCreatedScene = null, fk.UseFallbackTexture = !0, fk.FallbackTexture = ""
-   },
-   38265: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => Sk
-     });
-     var Dk = ik(38272);
-     const fk = (kk, ek, ik) => kk ? kk.getClassName && "Mesh" === kk.getClassName() ? null : !kk.getClassName || "SubMesh" !== kk.getClassName() && "PhysicsBody" !== kk.getClassName() ? kk.clone ? kk.clone() : Array.isArray(kk) ? kk.slice() : ik && "object" === typeof kk ? {
-       ...kk
-     } : null : kk.clone(ek) : null;
+     gC._V8PerformanceHack = new gC(.5, .5, .5, .5);
```

#### 6. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L28-L57` → after: `L1910-L2443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R1910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L1910-L2443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/231.js#L1910-L2443) · [Before (L28-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/231.js#L28-L57)

```diff
-       static DeepCopy(kk, ek, ik, Sk) {
-         let bk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const rk = function(kk) {
-           const ek = [];
-           do {
-             const ik = Object.getOwnPropertyNames(kk);
-             for (const kk of ik) - 1 === ek.indexOf(kk) && ek.push(kk)
-           } while (kk = Object.getPrototypeOf(kk));
-           return ek
-         }(kk);
-         for (const mk of rk) {
-           if ("_" === mk[0] && (!Sk || -1 === Sk.indexOf(mk))) continue;
-           if (mk.endsWith("Observable")) continue;
-           if (ik && -1 !== ik.indexOf(mk)) continue;
-           const rk = kk[mk],
-             Mk = typeof rk;
- ... (14 more removed lines; see GitHub link above)
+       static get Use64Bits() {
+         return bC.c.MatrixUse64Bits
+       }
+       get m() {
+         return this._m
+       }
+       markAsUpdated() {
+         this.updateFlag = oC.m._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
+       }
+       _updateIdentityStatus(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           QC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+         this._isIdentity = CC, this._isIdentity3x2 = CC || ZC, this._isIdentityDirty = !this._isIdentity && zC, this._isIdentity3x2Dirty = !this._isIdentity3x2 && QC
+       }
+       constructor() {
+ ... (518 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L61-L62` → after: `L2736-L2743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R2736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L2736-L2743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/231.js#L2736-L2743) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/231.js#L61-L62)

```diff
-   },
-   37497: (kk, ek, ik) => {
+     SC._IdentityReadOnly = SC.Identity();
+     class pC {}
+     pC.Eg = (0, wC.g)(11, NC.Zero), pC.Matrix = (0, wC.g)(2, SC.Identity), pC.Quaternion = (0, wC.g)(3, gC.Zero);
+     class PC {}
+     PC.Vector2 = (0, wC.g)(3, WC.Zero), PC.Eg = (0, wC.g)(13, NC.Zero), PC.Vector4 = (0, wC.g)(3, MC.Zero), PC.Quaternion = (0, wC.g)(3, gC.Zero), PC.Matrix = (0, wC.g)(8, SC.Identity);
+     const GC = SC.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
+     let RC = !1;
+ 
```

#### 8. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L64-L128` → after: `L2745-L2780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R2745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L2745-L2780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/231.js#L2745-L2780) · [Before (L64-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/231.js#L64-L128)

```diff
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (kk => {
-         const ek = 16 * Math.random() | 0;
-         return ("x" === kk ? ek : 3 & ek | 8).toString(16)
-       }))
-     }
-     ik.d(ek, {
-       b: () => Dk
-     })
-   },
-   38272: (kk, ek, ik) => {
-     ik.d(ek, {
-       b: () => Dk
-     });
-     class Dk {
-       static _CheckLimit(kk, ek) {
-         let ik = Dk._LogLimitOutputs[kk];
- ... (49 more removed lines; see GitHub link above)
+       RC || (RC = !0, Object.defineProperties(WC.prototype, {
+         dimension: {
+           value: [2]
+         },
+         rank: {
+           value: 1
+         }
+       }), Object.defineProperties(NC.prototype, {
+         dimension: {
+           value: [3]
+         },
+         rank: {
+           value: 1
+         }
+       }), Object.defineProperties(MC.prototype, {
+         dimension: {
+ ... (20 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L144` → after: `L2783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R2783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L2783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/231.js#L2783) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/231.js#L144)

```diff
-   36726: (kk, ek, ik) => {
+   36987: (CC, zC, ZC) => {
```

#### 10. `bundles/bloxd.io/chunks/js/231.js` (Changed code · before: `L146` → after: `L2785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26R2785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cfc80624b504e772fb7f409eb26f6c0222d327a13403e6cc71459257101d6e26) · [After (L2785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/231.js#L2785) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/231.js#L146)

```diff
-       c: () => bk
+       d: () => nC
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/232.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/232.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608)

#### 1. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L4` → after: `L4-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L4-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/232.js#L4-L722) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/232.js#L4)

```diff
-   60682: (kk, ek, ik) => {
+   37142: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => WC,
+       g: () => NC,
+       i: () => SC,
+       j: () => MC
+     });
+     var QC = ZC(36971),
+       wC = ZC(36968),
+       bC = ZC(36991),
+       nC = ZC(37002);
+ 
+     function fC(CC) {
+       return Math.pow(CC, wC.i)
+     }
+ 
+ ... (703 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L6-L7` → after: `L724-L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L724-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/232.js#L724-L763) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/232.js#L6-L7)

```diff
-       DEVTOOLS_SHADERS: () => Sk,
-       registerDevtoolsShader: () => bk
+       Clamp: () => NC,
+       DeltaAngle: () => RC,
+       Denormalize: () => GC,
+       ExtractAsInt: () => QC,
+       Hermite: () => FC,
+       Hermite1stDerivative: () => WC,
+       HighestCommonFactor: () => eC,
+       ILog2: () => SC,
+       InverseLerp: () => qC,
+       Lerp: () => fC,
+       LerpAngle: () => oC,
+       MoveTowards: () => JC,
+       MoveTowardsAngle: () => IC,
+       Normalize: () => PC,
+       NormalizeRadians: () => MC,
+       OutsideRange: () => bC,
+ ... (24 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L9-L15` → after: `L765-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L765-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/232.js#L765-L780) · [Before (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/232.js#L9-L15)

```diff
-     var Dk = ik(39412),
-       fk = ik(36773);
-     const Sk = {
-       devtoolsNormal: function(kk) {
-         return {
-           vertex: `\n\t\t\t${(0,fk.e)(kk,"position","vec3")}\n\t\t\t${(0,fk.e)(kk,"normal","vec3")}\n\t\t\t${(0,fk.Db)(kk,"worldViewProjection","mat4")}\n\t\t\t${(0,fk.Db)(kk,"world","mat4")}\n\t\t\t${(0,fk.Kb)(kk,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,fk.Nb)(kk,`\n\t\t\t\t${ … [truncated]
-           fragment: `\n\t\t\t${(0,fk.Kb)(kk,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,fk.S)(kk,`\n\t\t\t\t\n\t\t\t\t${(0,fk.F)(kk,"vec3","normalColor",`abs(${(0,fk.T)(kk,"vNormal")})`)}\n\t\t\t\t${(0,fk.O)(kk)} = ${(0,fk.n)(kk,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
+     const bC = ["push", "splice", "pop", "shift", "unshift"];
+ 
+     function nC(CC, zC) {
+       const ZC = bC.map((ZC => function(CC, zC, ZC) {
+         const QC = CC[zC];
+         if ("function" !== typeof QC) return null;
+         const wC = function() {
+           const QC = CC.length,
+             bC = wC.previous.apply(CC, arguments);
+           return ZC(zC, QC), bC
+         };
+         return QC.next = wC, wC.previous = QC, CC[zC] = wC, () => {
+           const ZC = wC.previous;
+           if (!ZC) return;
+           const QC = wC.next;
+           QC ? (ZC.next = QC, QC.previous = ZC) : (ZC.next = void 0, CC[zC] = ZC), wC.next = void 0, wC.previous = void 0
```

#### 4. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L17-L37` → after: `L782-L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L782-L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/232.js#L782-L785) · [Before (L17-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/232.js#L17-L37)

```diff
-       },
-       devtoolsWhite: function(kk) {
-         return {
-           vertex: `\n\t\t\t${(0,fk.e)(kk,"position","vec3")}\n\t\t\t${(0,fk.Db)(kk,"worldViewProjection","mat4")}\n\n\t\t\t${(0,fk.Nb)(kk,`\n\t\t\t\t${(0,fk.m)(kk)} = ${(0,fk.Hb)(kk,"worldViewProjection")} * ${(0,fk.n)(kk,"vec4",(0,fk.Rb)(kk,"position"),"1.0")};\n\t\t\t`)}\n\t\t` … [truncated]
-           fragment: `\n\t\t\t${(0,fk.S)(kk,`\n\t\t\t\t${(0,fk.O)(kk)} = ${(0,fk.n)(kk,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
-         }
-       },
-       devtoolsDepth: function(kk) {
-         return {
-           vertex: `\n\t\t\t${(0,fk.e)(kk,"position","vec3")}\n\t\t\t${(0,fk.Db)(kk,"worldViewProjection","mat4")}\n\t\t\t${(0,fk.Db)(kk,"world","mat4")}\n\t\t\t${(0,fk.Db)(kk,"cameraPosition","vec3")}\n\t\t\t${(0,fk.Kb)(kk,"vDepth","float","mediump")}\n\n\t\t\t${(0,fk.Nb)(kk,`\n\ … [truncated]
-           fragment: `\n\t\t\t${(0,fk.Kb)(kk,"vDepth","float","mediump")}\n\t\t\t${(0,fk.Db)(kk,"maxDepth","float")}\n\t\t\t${(0,fk.Db)(kk,"minDepth","float")}\n\n\t\t\t${(0,fk.S)(kk,`\n\t\t\t\t\n\t\t\t\t${(0,fk.F)(kk,"float","normalizedDepth",`clamp((${(0,fk.T)(kk,"vDepth")} - ${ … [truncated]
-         }
-       }
-     };
- 
-     function bk(kk, ek) {
- ... (5 more removed lines; see GitHub link above)
+       }(CC, ZC, zC)));
+       return () => {
+         for (const CC of ZC) CC?.()
+       }
```

#### 5. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L40` → after: `L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/232.js#L788) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/232.js#L40)

```diff
-   36773: (kk, ek, ik) => {
+   37002: (CC, zC, ZC) => {
```

#### 6. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L42-L266` → after: `L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/232.js#L790) · [Before (L42-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/232.js#L42-L266)

```diff
-       $: () => fk,
-       A: () => nk,
-       Ab: () => mk,
-       Db: () => lk,
-       E: () => Kk,
-       F: () => Mk,
-       Hb: () => uk,
-       I: () => jk,
-       Kb: () => wk,
-       L: () => Ik,
-       N: () => Sk,
-       Nb: () => yk,
-       O: () => vk,
-       Q: () => Qk,
-       Rb: () => dk,
-       S: () => Yk,
- ... (209 more removed lines; see GitHub link above)
+       c: () => bC,
```

#### 7. `bundles/bloxd.io/chunks/js/232.js` (Changed code · before: `L269-L280` → after: `L793-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608R793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-94489a3353a4ec3cbb29ea6ef404e5e748ca8fe058e812843a379f81cd2e1608) · [After (L793-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/232.js#L793-L801) · [Before (L269-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/232.js#L269-L280)

```diff
-     class Dk {
-       static GetShadersRepository() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Dk.ShadersRepository : Dk.ShadersRepositoryWGSL
-       }
-       static GetShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Dk.ShadersStore : Dk.ShadersStoreWGSL
-       }
-       static GetIncludesShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Dk.IncludesShadersStore : Dk.IncludesShadersStoreWGSL
-       }
-     }
-     Dk.ShadersRepository = "src/Shaders/", Dk.ShadersStore = {}, Dk.IncludesShadersStore = {}, Dk.ShadersRepositoryWGSL = "src/ShadersWGSL/", Dk.ShadersStoreWGSL = {}, Dk.IncludesShadersStoreWGSL = {}
+     const QC = {};
+ 
+     function wC(CC, zC) {
+       QC[CC] = zC
+     }
+ 
+     function bC(CC) {
+       return QC[CC]
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/233.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/233.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c)

#### 1. `bundles/bloxd.io/chunks/js/233.js` (Changed code · before: `L4-L10` → after: `L4-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-8978e6a78602fea86c04c479aab28d4f042dcc48a6fa42ec534b384bd1ab786c) · [After (L4-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/233.js#L4-L303) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/233.js#L4-L10)

```diff
-   36868: (kk, ek, ik) => {
-     ik.d(ek, {
-       Color3: () => Dk.e,
-       e: () => Dk.f
-     });
-     var Dk = ik(36874);
-     (0, Dk.h)()
+   36985: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => wC
+     });
+     var QC = ZC(36987);
+     class wC {
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+       }
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
+       }
+     }
+     wC.Instances = [], wC.OnEnginesDisposedObservable = new QC.d, wC._LastCreatedScene = null, wC.UseFallbackTexture = !0, wC.FallbackTexture = ""
+   },
+   38501: (CC, zC, ZC) => {
+ ... (284 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/234.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/234.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7)

#### 1. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L4` → after: `L4-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L4-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/234.js#L4-L40) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/234.js#L4)

```diff
-   40655: (kk, ek, ik) => {
+   60944: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       DEVTOOLS_SHADERS: () => bC,
+       registerDevtoolsShader: () => nC
+     });
+     var QC = ZC(39674),
+       wC = ZC(37050);
+     const bC = {
+       devtoolsNormal: function(CC) {
+         return {
+           vertex: `\n\t\t\t${(0,wC.f)(CC,"position","vec3")}\n\t\t\t${(0,wC.f)(CC,"normal","vec3")}\n\t\t\t${(0,wC.nb)(CC,"worldViewProjection","mat4")}\n\t\t\t${(0,wC.nb)(CC,"world","mat4")}\n\t\t\t${(0,wC.qb)(CC,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,wC.sb)(CC,`\n\t\t\t\t${ … [truncated]
+           fragment: `\n\t\t\t${(0,wC.qb)(CC,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,wC.F)(CC,`\n\t\t\t\t\n\t\t\t\t${(0,wC.w)(CC,"vec3","normalColor",`abs(${(0,wC.J)(CC,"vNormal")})`)}\n\t\t\t\t${(0,wC.C)(CC)} = ${(0,wC.l)(CC,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
+         }
+       },
+       devtoolsWhite: function(CC) {
+         return {
+ ... (21 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L6` → after: `L42-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L42-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/234.js#L42-L78) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/234.js#L6)

```diff
-       noaDevTools: () => Kk
+       A: () => mC,
+       Ab: () => hC,
+       B: () => bC,
+       C: () => lC,
+       E: () => EC,
+       F: () => AC,
+       J: () => KC,
+       L: () => dC,
+       P: () => uC,
+       S: () => wC,
+       U: () => HC,
+       Y: () => sC,
+       Z: () => aC,
+       _: () => IC,
+       ab: () => JC,
+       bb: () => TC,
+ ... (21 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L8-L238` → after: `L80-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L80-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/234.js#L80-L262) · [Before (L8-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/234.js#L8-L238)

```diff
-     var Dk = ik(37160),
-       fk = ik(37135),
-       Sk = ik(2704),
-       bk = ik(1688);
- 
-     function rk(kk) {
-       const {
-         yH: ek
-       } = kk, ik = ek.engine, Dk = {
-         width: ik.getRenderWidth(),
-         height: ik.getRenderHeight()
-       };
-       return {
-         canvas: ik.getRenderingCanvas(),
-         maxTextureSize: ik.getCaps().maxTextureSize,
-         drawing: () => !kk.FY,
- ... (215 more removed lines; see GitHub link above)
+     const QC = {
+       GLSL: 0,
+       WGSL: 1
+     };
+ 
+     function wC(CC) {
+       return CC === QC.WGSL
+     }
+ 
+     function bC(CC, zC, ZC) {
+       return wC(CC) ? ZC : zC
+     }
+     const nC = new Map([
+       ["int", "i32"],
+       ["float", "f32"],
+       ["vec2", "vec2f"],
+ ... (167 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L241` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/234.js#L265) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/234.js#L241)

```diff
-   40569: (kk, ek, ik) => {
+   39674: (CC, zC, ZC) => {
```

#### 5. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L243` → after: `L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/234.js#L267) · [Before (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/234.js#L243)

```diff
-       d: () => Pk
+       b: () => QC
```

#### 6. `bundles/bloxd.io/chunks/js/234.js` (Changed code · before: `L342-L555` → after: `L270-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-e5a66b2f84262611f5399f55d13c07441be430a220cc9d64b0bd3af1c20379d7) · [After (L270-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/234.js#L270-L280) · [Before (L342-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/234.js#L342-L555)

```diff
-       constructor(kk, ek) {
-         this.oU = kk, this.engine = ek, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
-       }
-       apply(kk, ek) {
-         if (!ek) return;
-         const ik = ek.getProjectionMatrix().m,
-           bk = 0 === Sk && 0 === ik[15],
-           rk = ek.globalPosition,
-           {
-             engine: mk
-           } = this,
-           Mk = bk ? (0, fk.d)(ik, mk.getRenderWidth(), mk.getRenderHeight()) : 0;
-         rk.x === this.eyeX && rk.y === this.eyeY && rk.z === this.eyeZ && Mk === this.focalPx && bk === this.culling || (this.epoch++, this.eyeX = rk.x, this.eyeY = rk.y, this.eyeZ = rk.z, this.focalPx = Mk, this.culling = bk);
-         const {
-           epoch: Kk,
-           range: xk
- ... (198 more removed lines; see GitHub link above)
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QC.ShadersRepository : QC.ShadersRepositoryWGSL
+       }
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QC.ShadersStore : QC.ShadersStoreWGSL
+       }
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QC.IncludesShadersStore : QC.IncludesShadersStoreWGSL
+       }
+     }
+     QC.ShadersRepository = "src/Shaders/", QC.ShadersStore = {}, QC.IncludesShadersStore = {}, QC.ShadersRepositoryWGSL = "src/ShadersWGSL/", QC.ShadersStoreWGSL = {}, QC.IncludesShadersStoreWGSL = {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/235.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/235.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f)

#### 1. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/235.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/235.js#L2)

```diff
- export const ids = [235, 236];
+ export const ids = [235];
```

#### 2. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/235.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/235.js#L4)

```diff
-   39818: (kk, ek, ik) => {
+   37138: (CC, zC, ZC) => {
```

#### 3. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/235.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/235.js#L6-L7)

```diff
-       b: () => Mk,
-       c: () => xk
+       Color3: () => QC.e,
+       e: () => QC.g
```

#### 4. `bundles/bloxd.io/chunks/js/235.js` (Changed code · before: `L9-L1126` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22fR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-33711df323eefbe95b4189ae89adb9e0cb2f219a9fbc2c7eead43839b383d22f) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/235.js#L9-L10) · [Before (L9-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/235.js#L9-L1126)

```diff
-     var Dk = ik(39566),
-       fk = ik(39570),
-       Sk = ik(36698),
-       bk = ik(36874),
-       rk = ik(39822),
-       Pk = ik(39787),
-       mk = ik(36734);
-     let Mk = (() => {
-         var kk;
-         let ek, ik, Pk = rk.d,
-           mk = [],
-           Mk = [],
-           Kk = [],
-           xk = [];
-         return kk = class extends Pk {
-           constructor(kk, ek, ik, fk) {
- ... (1102 more removed lines; see GitHub link above)
+     var QC = ZC(37142);
+     (0, QC.i)()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/236.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/236.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0)

#### 1. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/236.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/236.js#L4)

```diff
-   37365: (kk, ek, ik) => {
+   40899: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/236.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/236.js#L6)

```diff
-       b: () => fk
+       noaDevTools: () => WC
```

#### 3. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L8` → after: `L8-L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L8-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/236.js#L8-L352) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/236.js#L8)

```diff
-     var Dk = ik(37372);
+     var QC = ZC(37404),
+       wC = ZC(37394),
+       bC = ZC(2753),
+       nC = ZC(1645),
+       fC = ZC(40805);
+ 
+     function oC(CC) {
+       const {
+         Vg: zC
+       } = CC, ZC = zC.engine, QC = {
+         width: ZC.getRenderWidth(),
+         height: ZC.getRenderHeight()
+       };
+       return {
+         canvas: ZC.getRenderingCanvas(),
+         maxTextureSize: ZC.getCaps().maxTextureSize,
+ ... (329 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L10` → after: `L354-L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L354-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/236.js#L354-L469) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/236.js#L10)

```diff
-       static GetPlanes(kk) {
+       constructor(CC, zC) {
+         this.Ig = CC, this.engine = zC, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
+       }
+       apply(CC, zC) {
+         if (!zC) return;
+         const ZC = zC.getProjectionMatrix().m,
+           nC = 0 === bC && 0 === ZC[15],
+           fC = zC.globalPosition,
+           {
+             engine: qC
+           } = this,
+           FC = nC ? (0, wC.c)(ZC, qC.getRenderWidth(), qC.getRenderHeight()) : 0;
+         fC.x === this.eyeX && fC.y === this.eyeY && fC.z === this.eyeZ && FC === this.focalPx && nC === this.culling || (this.epoch++, this.eyeX = fC.x, this.eyeY = fC.y, this.eyeZ = fC.z, this.focalPx = FC, this.culling = nC);
+         const {
+           epoch: WC,
+           range: NC
+ ... (100 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L12-L46` → after: `L471-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L471-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/236.js#L471-L476) · [Before (L12-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/236.js#L12-L46)

```diff
-         for (let ik = 0; ik < 6; ik++) ek.push(new Dk.c(0, 0, 0, 0));
-         return fk.GetPlanesToRef(kk, ek), ek
-       }
-       static GetNearPlaneToRef(kk, ek) {
-         const ik = kk.m;
-         ek.normal.x = ik[3] + ik[2], ek.normal.y = ik[7] + ik[6], ek.normal.z = ik[11] + ik[10], ek.d = ik[15] + ik[14], ek.normalize()
-       }
-       static GetFarPlaneToRef(kk, ek) {
-         const ik = kk.m;
-         ek.normal.x = ik[3] - ik[2], ek.normal.y = ik[7] - ik[6], ek.normal.z = ik[11] - ik[10], ek.d = ik[15] - ik[14], ek.normalize()
-       }
-       static GetLeftPlaneToRef(kk, ek) {
-         const ik = kk.m;
-         ek.normal.x = ik[3] + ik[0], ek.normal.y = ik[7] + ik[4], ek.normal.z = ik[11] + ik[8], ek.d = ik[15] + ik[12], ek.normalize()
-       }
-       static GetRightPlaneToRef(kk, ek) {
- ... (19 more removed lines; see GitHub link above)
+         for (let zC = 0; zC < bC; zC++) CC[wC[zC]] = zC;
+         return CC
+       })();
+ 
+     function qC(CC) {
+       return !!CC && CC.backFaceCulling && (0 === CC.transparencyMode || 1 === CC.transparencyMode)
```

#### 6. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L49` → after: `L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/236.js#L479) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/236.js#L49)

```diff
-   37372: (kk, ek, ik) => {
+   37408: (CC, zC, ZC) => {
```

#### 7. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L51` → after: `L481-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L481-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/236.js#L481-L485) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/236.js#L51)

```diff
-       c: () => fk
+       c: () => fC,
+       e: () => oC,
+       f: () => FC,
+       i: () => qC,
+       k: () => gC
```

#### 8. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L53-L171` → after: `L487-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L487-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/236.js#L487-L520) · [Before (L53-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/236.js#L53-L171)

```diff
-     var Dk = ik(36698);
-     class fk {
-       constructor(kk, ek, ik, fk) {
-         this.normal = new Dk.o(kk, ek, ik), this.d = fk
-       }
-       Tik() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new fk(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
-       getClassName() {
-         return "Plane"
-       }
-       getHashCode() {
-         let kk = this.normal.getHashCode();
- ... (103 more removed lines; see GitHub link above)
+     var QC = ZC(37398);
+     const wC = 1 / 16,
+       bC = 1 / 64,
+       nC = 2048;
+     QC.j;
+ 
+     function fC(CC, zC, ZC) {
+       return Math.min(Math.abs(CC[0] * zC), Math.abs(CC[5] * ZC)) / 2
+     }
+ 
+     function oC(CC, zC) {
+       return wC + bC * CC * CC / zC
+     }
+ 
+     function qC(CC, zC, ZC, wC, bC) {
+       const nC = QC.k;
+ ... (18 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/236.js` (Changed code · before: `L174-L257` → after: `L523-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-f0cf2fcde41f1ec6dffe5fa65df330cf72bd15bec5b4bddba89eb93696ef75d0) · [After (L523-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/236.js#L523-L567) · [Before (L174-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/236.js#L174-L257)

```diff
-       }
-     }
-   },
-   37497: (kk, ek, ik) => {
-     function Dk() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (kk => {
-         const ek = 16 * Math.random() | 0;
-         return ("x" === kk ? ek : 3 & ek | 8).toString(16)
-       }))
-     }
-     ik.d(ek, {
-       b: () => Dk
-     })
-   },
-   38272: (kk, ek, ik) => {
-     ik.d(ek, {
- ... (68 more removed lines; see GitHub link above)
+         return CC
+       })(),
+       NC = [];
+ 
+     function MC(CC, zC) {
+       const ZC = QC.g[zC];
+       return CC[ZC + 1] - CC[ZC]
+     }
+ 
+     function gC(CC, zC, ZC) {
+       let wC = 0;
+       for (let nC = 0; nC < QC.j; nC++) MC(CC, nC) > 0 && (wC |= 1 << nC);
+       if (0 === (zC &= wC)) return 0;
+       if (zC === wC) return ZC[0] = 0, ZC[1] = CC[QC.d], 1;
+       let bC = null,
+         fC = 1 / 0;
+ ... (29 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/237.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/237.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3)

#### 1. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/237.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/237.js#L2)

```diff
- export const ids = [236, 237];
+ export const ids = [237, 238];
```

#### 2. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L4-L11` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/237.js#L4-L7) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/237.js#L4-L11)

```diff
-   60665: (kk, ek, ik) => {
-     ik.r(ek), ik.d(ek, {
-       RegisterShaderMaterial: () => Dk.b,
-       ShaderMaterial: () => Dk.o,
-       ShaderMaterialCreateFromSnippetAsync: () => Dk.d,
-       ShaderMaterialParse: () => Dk.l,
-       ShaderMaterialParseFromFileAsync: () => Dk.h,
-       ShaderMaterialParseFromSnippetAsync: () => Dk.j
+   40078: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => FC,
+       e: () => NC
```

#### 3. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L13-L14` → after: `L9-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L9-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/237.js#L9-L96) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/237.js#L13-L14)

```diff
-     var Dk = ik(40049);
-     (0, Dk.b)()
+     var QC = ZC(39811),
+       wC = ZC(39818),
+       bC = ZC(36963),
+       nC = ZC(37142),
+       fC = ZC(40084),
+       oC = ZC(40046),
+       qC = ZC(37002);
+     let FC = (() => {
+         var CC;
+         let zC, ZC, oC = fC.c,
+           qC = [],
+           FC = [],
+           WC = [],
+           NC = [];
+         return CC = class extends oC {
+           constructor(CC, zC, ZC, wC) {
+ ... (72 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L16` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/237.js#L98) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/237.js#L16)

```diff
-   37365: (kk, ek, ik) => {
+   37590: (CC, zC, ZC) => {
```

#### 5. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L18` → after: `L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/237.js#L100) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/237.js#L18)

```diff
-       b: () => fk
+       e: () => wC
```

#### 6. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L20` → after: `L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/237.js#L102) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/237.js#L20)

```diff
-     var Dk = ik(37372);
+     var QC = ZC(37596);
```

#### 7. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L24` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/237.js#L106) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/237.js#L24)

```diff
-         for (let ik = 0; ik < 6; ik++) ek.push(new Dk.c(0, 0, 0, 0));
+         for (let ZC = 0; ZC < 6; ZC++) zC.push(new QC.d(0, 0, 0, 0));
```

#### 8. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L61` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/237.js#L143) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/237.js#L61)

```diff
-   37372: (kk, ek, ik) => {
+   37596: (CC, zC, ZC) => {
```

#### 9. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L63` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/237.js#L145) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/237.js#L63)

```diff
-       c: () => fk
+       d: () => wC
```

#### 10. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L65` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/237.js#L147) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/237.js#L65)

```diff
-     var Dk = ik(36698);
+     var QC = ZC(36963);
```

#### 11. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L68` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/237.js#L150) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/237.js#L68)

```diff
-         this.normal = new Dk.o(kk, ek, ik), this.d = fk
+         this.normal = new QC.r(CC, zC, ZC), this.d = wC
```

#### 12. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L70` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/237.js#L152) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/237.js#L70)

```diff
-       Tik() {
+       VZC() {
```

#### 13. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L117` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/237.js#L199) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/237.js#L117)

```diff
-         return nk = 0 !== xk ? 1 / xk : 0, this.normal.x = mk * nk, this.normal.y = Mk * nk, this.normal.z = Kk * nk, this.d = -(this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z), this
+         return MC = 0 !== NC ? 1 / NC : 0, this.normal.x = qC * MC, this.normal.y = FC * MC, this.normal.z = WC * MC, this.d = -(this.normal.x * CC.x + this.normal.y * CC.y + this.normal.z * CC.z), this
```

#### 14. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L120` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/237.js#L202) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/237.js#L120)

```diff
-         return Dk.o.Dot(this.normal, kk) <= ek
+         return QC.r.Dot(this.normal, CC) <= zC
```

#### 15. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L123` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/237.js#L205) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/237.js#L123)

```diff
-         return Dk.o.Dot(kk, this.normal) + this.d
+         return QC.r.Dot(CC, this.normal) + this.d
```

#### 16. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L137` → after: `L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/237.js#L219) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/237.js#L137)

```diff
-         return ik.normal.Fs(ek), ik.normal.normalize(), ik.d = -kk.dot(ik.normal), ik
+         return ZC.normal.Av(zC), ZC.normal.normalize(), ZC.d = -CC.dot(ZC.normal), ZC
```

#### 17. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L141` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/237.js#L223) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/237.js#L141)

```diff
-         return Dk.o.Dot(ik, ek) + fk
+         return QC.r.Dot(ZC, zC) + wC
```

#### 18. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L146` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/237.js#L228) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/237.js#L146)

```diff
-   38265: (kk, ek, ik) => {
+   37931: (CC, zC, ZC) => {
```

#### 19. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L148` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/237.js#L230) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/237.js#L148)

```diff
-       c: () => Sk
+       d: () => QC
```

#### 20. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L150` → after: `L232-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L232-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/237.js#L232-L251) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/237.js#L150)

```diff
-     var Dk = ik(38272);
+     class QC {
+       constructor(CC, zC, ZC, QC) {
+         this.x = CC, this.y = zC, this.width = ZC, this.height = QC
+       }
+       toGlobal(CC, zC) {
+         return new QC(this.x * CC, this.y * zC, this.width * CC, this.height * zC)
+       }
+       toGlobalToRef(CC, zC, ZC) {
+         return ZC.x = this.x * CC, ZC.y = this.y * zC, ZC.width = this.width * CC, ZC.height = this.height * zC, this
+       }
+       clone() {
+         return new QC(this.x, this.y, this.width, this.height)
+       }
+     }
+   },
+   38501: (CC, zC, ZC) => {
+ ... (4 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L183` → after: `L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/237.js#L284) · [Before (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/237.js#L183)

```diff
-             Dk.b.Warn(Pk.message)
+             QC.c.Warn(oC.message)
```

#### 22. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L189` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/237.js#L290) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/237.js#L189)

```diff
-   37497: (kk, ek, ik) => {
+   37731: (CC, zC, ZC) => {
```

#### 23. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L193` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/237.js#L294) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/237.js#L193)

```diff
-         return ("x" === kk ? ek : 3 & ek | 8).toString(16)
+         return ("x" === CC ? zC : 3 & zC | 8).toString(16)
```

#### 24. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L200` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/237.js#L301) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/237.js#L200)

```diff
-   38272: (kk, ek, ik) => {
+   38507: (CC, zC, ZC) => {
```

#### 25. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L202` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/237.js#L303) · [Before (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/237.js#L202)

```diff
-       b: () => Dk
+       c: () => QC
```

#### 26. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L223` → after: `L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/237.js#L324) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/237.js#L223)

```diff
-         const ek = kk => kk < 10 ? "0" + kk : "" + kk,
+         const zC = CC => CC < 10 ? "0" + CC : "" + CC,
```

#### 27. `bundles/bloxd.io/chunks/js/237.js` (Changed code · before: `L238` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-26d24e9d14520961381c1c3f177e2b3bb6844dd3ed950d8417bb71739618cac3) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/237.js#L339) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/237.js#L238)

```diff
-         const Pk = `<div style='color:${bk.color}'>${Sk}</div><br>`;
+         const oC = `<div style='color:${nC.color}'>${bC}</div><br>`;
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/238.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/238.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf)

#### 1. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/238.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/238.js#L4)

```diff
-   37402: (kk, ek, ik) => {
+   37590: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/238.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/238.js#L6-L7)

```diff
-       e: () => Kk,
-       h: () => bk
+       e: () => wC
```

#### 3. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L9-L3404` → after: `L8-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/238.js#L8-L13) · [Before (L9-L3404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/238.js#L9-L3404)

```diff
-     var Dk = ik(9044),
-       fk = ik(9020),
-       Sk = ik(314);
-     const bk = {
-       "Maple Door": {
-         positions: [{
-           block: "Maple Door",
-           x: 0,
-           y: 0,
-           z: 0
-         }, {
-           block: "_Maple Door Top",
-           x: 0,
-           y: 1,
-           z: 0
-         }]
- ... (3380 more removed lines; see GitHub link above)
+     var QC = ZC(37596);
+     class wC {
+       static GetPlanes(CC) {
+         const zC = [];
+         for (let ZC = 0; ZC < 6; ZC++) zC.push(new QC.d(0, 0, 0, 0));
+         return wC.GetPlanesToRef(CC, zC), zC
```

#### 4. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L3406-L3565` → after: `L15-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/238.js#L15-L17) · [Before (L3406-L3565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/238.js#L3406-L3565)

```diff
-     };
- 
-     function rk(kk) {
-       return {
-         [`${kk} Banner`]: {
-           positions: [{
-             block: `${kk} Banner`,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${kk} Banner Flag|meta|rot1|bot`,
-             x: 0,
-             y: 1,
-             z: 0
-           }]
- ... (144 more removed lines; see GitHub link above)
+       static GetNearPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] + ZC[2], zC.normal.y = ZC[7] + ZC[6], zC.normal.z = ZC[11] + ZC[10], zC.d = ZC[15] + ZC[14], zC.normalize()
```

#### 5. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L3567-L3663` → after: `L19-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/238.js#L19-L21) · [Before (L3567-L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/238.js#L3567-L3663)

```diff
-     }
- 
-     function Pk(kk) {
-       const ek = (0, Sk.Eb)(kk);
-       return {
-         [ek]: {
-           positions: [{
-             block: ek,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${ek} Top Left`,
-             x: 0,
-             y: 1,
-             z: 0
- ... (81 more removed lines; see GitHub link above)
+       static GetFarPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] - ZC[2], zC.normal.y = ZC[7] - ZC[6], zC.normal.z = ZC[11] - ZC[10], zC.d = ZC[15] - ZC[14], zC.normalize()
```

#### 6. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L3665-L3742` → after: `L23-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/238.js#L23-L25) · [Before (L3665-L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/238.js#L3665-L3742)

```diff
-     }
- 
-     function mk(kk) {
-       const ek = `_${kk} Back`,
-         ik = `_${kk} Dish`;
-       return {
-         [kk]: {
-           positions: [{
-             block: kk,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: ek,
-             x: 0,
-             y: 0,
- ... (62 more removed lines; see GitHub link above)
+       static GetLeftPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] + ZC[0], zC.normal.y = ZC[7] + ZC[4], zC.normal.z = ZC[11] + ZC[8], zC.d = ZC[15] + ZC[12], zC.normalize()
```

#### 7. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L3744-L3766` → after: `L27-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/238.js#L27-L29) · [Before (L3744-L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/238.js#L3744-L3766)

```diff
-     }
- 
-     function Mk(kk) {
-       const ek = `Small ${kk} Pod`;
-       return {
-         [ek]: {
-           positions: [{
-             block: ek,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_Small ${kk} Pod Mid`,
-             x: 0,
-             y: 1,
-             z: 0
- ... (7 more removed lines; see GitHub link above)
+       static GetRightPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] - ZC[0], zC.normal.y = ZC[7] - ZC[4], zC.normal.z = ZC[11] - ZC[8], zC.d = ZC[15] - ZC[12], zC.normalize()
```

#### 8. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L3768-L3789` → after: `L31-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/238.js#L31-L33) · [Before (L3768-L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/238.js#L3768-L3789)

```diff
-     }
-     for (const xk in bk) {
-       for (const kk of bk[xk].positions)
-         if (kk.id = fk.g[kk.block].id, xk === kk.block && (0 !== kk.x || 0 !== kk.y || 0 !== kk.z)) throw new Error(`Multiblock "${xk}" has main block "${kk.block}" at non-origin position (${kk.x}, ${kk.y}, ${kk.z}) - if you need to do something like this, you'll need to rethink  … [truncated]
-       bk[fk.g[xk].id] = bk[xk]
-     }
-     const Kk = {};
-     for (const xk in bk)
-       for (const {
-           block: kk,
-           x: ek,
-           y: ik,
-           z: Dk
-         }
-         of bk[xk].positions) {
-         const Sk = {
- ... (6 more removed lines; see GitHub link above)
+       static GetTopPlaneToRef(CC, zC) {
+         const ZC = CC.m;
+         zC.normal.x = ZC[3] - ZC[1], zC.normal.y = ZC[7] - ZC[5], zC.normal.z = ZC[11] - ZC[9], zC.d = ZC[15] - ZC[13], zC.normalize()
```

#### 9. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L3792` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/238.js#L49) · [Before (L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/238.js#L3792)

```diff
-   37809: (kk, ek, ik) => {
+   37596: (CC, zC, ZC) => {
```

#### 10. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L3794-L3795` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/238.js#L51) · [Before (L3794-L3795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/238.js#L3794-L3795)

```diff
-       c: () => Pk,
-       e: () => rk
+       d: () => wC
```

#### 11. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L3797-L3811` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/238.js#L53) · [Before (L3797-L3811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/238.js#L3797-L3811)

```diff
-     var Dk = ik(9020),
-       fk = ik(9069),
-       Sk = ik(9072);
-     const bk = fk.n.map((kk => {
-       let {
-         dx: ek,
-         dz: ik
-       } = kk;
-       return [ek, 0, ik]
-     }));
- 
-     function rk(kk) {
-       const ek = Dk.g[kk];
-       return !!ek && kk !== Dk.b && !ek.model && !ek.qn && !1 !== ek.solid && !ek.yw
-     }
+     var QC = ZC(36963);
```

#### 12. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L3813-L3814` → after: `L55-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L55-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/238.js#L55-L114) · [Before (L3813-L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/238.js#L3813-L3814)

```diff
-       constructor(kk) {
-         this.model = kk, this.reshapeOffsets = [...bk, [0, -1, 0]]
+       constructor(CC, zC, ZC, wC) {
+         this.normal = new QC.r(CC, zC, ZC), this.d = wC
+       }
+       VZC() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       }
+       clone() {
+         return new wC(this.normal.x, this.normal.y, this.normal.z, this.d)
+       }
+       getClassName() {
+         return "Plane"
+       }
+       getHashCode() {
+         let CC = this.normal.getHashCode();
+         return CC = 397 * CC ^ this.d, CC
+       }
+ ... (44 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L3816-L3818` → after: `L116-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L116-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/238.js#L116-L118) · [Before (L3816-L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/238.js#L3816-L3818)

```diff
-       handles(kk) {
-         const ek = Dk.g[kk];
-         return (null === ek || void 0 === ek ? void 0 : ek.model) === this.model && void 0 !== ek.attachedTop
+       static FromPoints(CC, zC, ZC) {
+         const QC = new wC(0, 0, 0, 0);
+         return QC.copyFromPoints(CC, zC, ZC), QC
```

#### 14. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L3820-L3821` → after: `L120-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L120-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/238.js#L120-L122) · [Before (L3820-L3821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/238.js#L3820-L3821)

```diff
-       affects(kk) {
-         return this.handles(kk) || rk(kk) || (0, Sk.z)(Dk.g[kk])
+       static FromPositionAndNormal(CC, zC) {
+         const ZC = new wC(0, 0, 0, 0);
+         return this.FromPositionAndNormalToRef(CC, zC, ZC)
```

#### 15. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L3823-L3835` → after: `L124-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L124-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/238.js#L124-L129) · [Before (L3823-L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/238.js#L3823-L3835)

```diff
-       shape(kk, ek, ik, bk, Pk) {
-         let mk = this.handles(kk(ek, ik + 1, bk)) ? fk.h : 0;
-         return fk.n.forEach(((Pk, Mk) => {
-           let {
-             dx: Kk,
-             dz: xk
-           } = Pk;
-           const nk = kk(ek + Kk, ik, bk + xk);
-           (this.handles(nk) || rk(nk) || function(kk, ek) {
-             const ik = Dk.g[kk];
-             return (0, Sk.z)(ik) && (0, Sk.u)(ik.meta.rot) === (0 !== fk.n[ek].dx)
-           }(nk, Mk)) && (mk |= 1 << Mk)
-         })), (0, Dk.h)((0, fk.i)(Dk.g[Pk].meta.rootName, mk))
+       static FromPositionAndNormalToRef(CC, zC, ZC) {
+         return ZC.normal.Av(zC), ZC.normal.normalize(), ZC.d = -CC.dot(ZC.normal), ZC
+       }
+       static SignedDistanceToPlaneFromPositionAndNormal(CC, zC, ZC) {
+         const wC = -(zC.x * CC.x + zC.y * CC.y + zC.z * CC.z);
+         return QC.r.Dot(ZC, zC) + wC
```

#### 16. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L3839-L3860` → after: `L134-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L134-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/238.js#L134-L171) · [Before (L3839-L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/238.js#L3839-L3860)

```diff
-   37586: (kk, ek, ik) => {
-     function Dk(kk, ek) {
-       var ik;
-       ek || (ek = {});
-       const Dk = null !== (ik = ek.customAttributes) && void 0 !== ik ? ik : {};
-       var fk, Sk, bk;
-       "Gun" === (null === kk || void 0 === kk ? void 0 : kk.type) && (Dk.shotsLeft = null !== (fk = null !== (Sk = Dk.shotsLeft) && void 0 !== Sk ? Sk : null === (bk = Dk.gunStats) || void 0 === bk ? void 0 : bk.clipSize) && void 0 !== fk ? fk : kk.clipSize);
-       if (Dk.enchantmentTier && (Dk.enchantmentTier = Dk.enchantmentTier.toString()), Dk.enchantments)
-         for (const Kk in Dk.enchantments) {
-           const kk = Dk.enchantments[Kk];
-           if ("number" !== typeof kk) {
-             const ek = parseInt(kk);
-             isNaN(ek) || ek < 0 ? Dk.enchantments[Kk] = void 0 : Dk.enchantments[Kk] = ek > 1e9 ? 1e9 : ek
-           }
-         }
-       if (Dk.enchantmentData)
- ... (6 more removed lines; see GitHub link above)
+   38501: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => bC
+     });
+     var QC = ZC(38507);
+     const wC = (CC, zC, ZC) => CC ? CC.getClassName && "Mesh" === CC.getClassName() ? null : !CC.getClassName || "SubMesh" !== CC.getClassName() && "PhysicsBody" !== CC.getClassName() ? CC.clone ? CC.clone() : Array.isArray(CC) ? CC.slice() : ZC && "object" === typeof CC ? {
+       ...CC
+     } : null : CC.clone(zC) : null;
+     class bC {
+       static DeepCopy(CC, zC, ZC, bC) {
+         let nC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const fC = function(CC) {
+           const zC = [];
+           do {
+             const ZC = Object.getOwnPropertyNames(CC);
+             for (const CC of ZC) - 1 === zC.indexOf(CC) && zC.push(CC)
+ ... (22 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L3868` → after: `L174-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L174-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/238.js#L174-L182) · [Before (L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/238.js#L3868)

```diff
-       return ek.customAttributes = Dk, ek
+       }
+     }
+   },
+   37731: (CC, zC, ZC) => {
+     function QC() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (CC => {
+         const zC = 16 * Math.random() | 0;
+         return ("x" === CC ? zC : 3 & zC | 8).toString(16)
+       }))
```

#### 18. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L3871` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/238.js#L185) · [Before (L3871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/238.js#L3871)

```diff
-       c: () => Dk
+       b: () => QC
```

#### 19. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L3874` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/238.js#L188) · [Before (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/238.js#L3874)

```diff
-   37805: (kk, ek, ik) => {
+   38507: (CC, zC, ZC) => {
```

#### 20. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L3876-L3880` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/238.js#L190) · [Before (L3876-L3880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/238.js#L3876-L3880)

```diff
-       e: () => Ak,
-       h: () => lk,
-       i: () => Pk,
-       k: () => Kk,
-       n: () => jk
+       c: () => QC
```

#### 21. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L3882-L3948` → after: `L192-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L192-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/238.js#L192-L198) · [Before (L3882-L3948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/238.js#L3882-L3948)

```diff
-     var Dk = ik(9020),
-       fk = ik(9057),
-       Sk = ik(37809);
-     const bk = (0, Dk.h)("Noticeboard"),
-       rk = (0, Dk.h)("Standing Noticeboard|meta|rot4|lrud");
- 
-     function Pk(kk) {
-       return bk <= kk && kk <= rk
-     }
-     const mk = new Uint8Array(rk - bk + 1);
-     for (let sk = bk; sk <= rk; sk++) mk[sk - bk] = (0, fk.l)(Dk.g[sk].meta.metaStr);
-     const Mk = 64,
-       Kk = Mk * Mk,
-       [xk, nk, Uk, Hk] = [0, 1, 2, 3];
- 
-     function wk(kk) {
- ... (51 more removed lines; see GitHub link above)
+     class QC {
+       static _CheckLimit(CC, zC) {
+         let ZC = QC._LogLimitOutputs[CC];
+         return ZC ? ZC.current++ : (ZC = {
+           limit: zC,
+           current: 1
+         }, QC._LogLimitOutputs[CC] = ZC), ZC.current <= ZC.limit
```

#### 22. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L3950-L3989` → after: `L200-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L200-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/238.js#L200-L205) · [Before (L3950-L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/238.js#L3950-L3989)

```diff
-     }
- 
-     function Ck(kk, ek) {
-       for (const ik of function(kk) {
-           let {
-             anchor: ek,
-             rot: ik,
-             width: Dk,
-             height: Sk
-           } = kk;
-           const [bk, , rk] = fk.q[ik][nk], Pk = [];
-           for (let fk = 0; fk < Sk; fk++)
-             for (let kk = 0; kk < Dk; kk++) Pk.push([ek[0] + bk * kk, ek[1] - fk, ek[2] + rk * kk]);
-           return Pk
-         }(kk))
-         if (wk(ek(ik[0], ik[1], ik[2]))) return ik;
- ... (24 more removed lines; see GitHub link above)
+       static _GenerateLimitMessage(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const ZC = QC._LogLimitOutputs[CC];
+         if (!ZC || !QC.MessageLimitReached) return;
+         const wC = this._Levels[zC];
+         ZC.current === ZC.limit && QC[wC.name](QC.MessageLimitReached.replace(/%LIMIT%/g, "" + ZC.limit).replace(/%TYPE%/g, wC.name ?? ""))
```

#### 23. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L3991-L3995` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/238.js#L207-L208) · [Before (L3991-L3995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/238.js#L3991-L3995)

```diff
-       return Uk ??= Lk(kk, nk[0], nk[1], nk[2]), {
-         cells: Mk,
-         topLeft: nk,
-         rect: Uk,
-         textCell: Ck(Uk, ek)
+       static _AddLogEntry(CC) {
+         QC._LogCache = CC + QC._LogCache, QC.OnNewCacheEntry && QC.OnNewCacheEntry(CC)
```

#### 24. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L3997-L4011` → after: `L210-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L210-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/238.js#L210-L213) · [Before (L3997-L4011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/238.js#L3997-L4011)

```diff
-     }
- 
-     function jk(kk, ek, ik, bk, rk) {
-       if (null !== ik && Pk(ik)) {
-         const {
-           rootName: kk,
-           rot: ek
-         } = Dk.g[ik].meta;
-         if (fk.q[ek].some((kk => {
-             let [ek, ik, Dk] = kk;
-             return ek === bk[0] && ik === bk[1] && Dk === bk[2]
-           }))) return {
-           root: kk,
-           rot: ek
-         }
+       static _FormatMessage(CC) {
+         const zC = CC => CC < 10 ? "0" + CC : "" + CC,
+           ZC = new Date;
+         return "[" + zC(ZC.getHours()) + ":" + zC(ZC.getMinutes()) + ":" + zC(ZC.getSeconds()) + "]: " + CC
```

#### 25. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L4013-L4016` → after: `L215-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L215-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/238.js#L215-L227) · [Before (L4013-L4016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/238.js#L4013-L4016)

```diff
-       const [mk, Mk] = fk.j[rk], Kk = kk(ek[0] - mk, ek[1], ek[2] - Mk);
-       return {
-         root: (0, Sk.e)(Kk) ? fk.v : fk.r,
-         rot: rk
+       static _LogDisabled(CC, zC) {}
+       static _LogEnabled() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           zC = arguments.length > 1 ? arguments[1] : void 0,
+           ZC = arguments.length > 2 ? arguments[2] : void 0;
+         const wC = Array.isArray(zC) ? zC[0] : zC;
+         if (void 0 !== ZC && !QC._CheckLimit(wC, ZC)) return;
+         const bC = QC._FormatMessage(wC),
+           nC = this._Levels[CC],
+           fC = Array.isArray(zC) ? zC.slice(1) : [];
+         nC.logFunc && nC.logFunc("BJS - " + bC, ...fC);
+         const oC = `<div style='color:${nC.color}'>${bC}</div><br>`;
+         QC._AddLogEntry(oC), QC._GenerateLimitMessage(wC, CC)
```

#### 26. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L4018-L4038` → after: `L229-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L229-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/238.js#L229-L242) · [Before (L4018-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/238.js#L4018-L4038)

```diff
-     }
-   },
-   37818: (kk, ek, ik) => {
-     ik.d(ek, {
-       e: () => Sk,
-       h: () => bk,
-       i: () => fk,
-       m: () => rk
-     });
-     var Dk = ik(323);
-     const fk = ["Snowball", "Snowball Launcher", "Pebble", "Reinforced Pebble", "Ball", "Reinforced Ball", "Mango", "Moonstone Orb", ...ik(591).u.map((kk => `${kk} Spawn Orb`)), "Fireball", "RPG", "Obby RPG", "Super RPG", "Grenade Launcher", "Iceball", "Bouncy Bomb", "Coconut", " … [truncated]
-       Sk = ["Obby RPG"];
- 
-     function bk(kk) {
-       const ek = kk.indexOf("|");
-       return -1 === ek ? {
- ... (5 more removed lines; see GitHub link above)
+       static get LogCache() {
+         return QC._LogCache
+       }
+       static ClearLogCache() {
+         QC._LogCache = "", QC._LogLimitOutputs = {}, QC.errorsCount = 0
+       }
+       static set LogLevels(CC) {
+         QC.Log = QC._LogDisabled, QC.Warn = QC._LogDisabled, QC.Error = QC._LogDisabled;
+         const zC = [QC.MessageLogLevel, QC.WarningLogLevel, QC.ErrorLogLevel];
+         for (const ZC of zC)
+           if ((CC & ZC) === ZC) {
+             const CC = this._Levels[ZC];
+             QC[CC.name] = QC._LogEnabled.bind(QC, ZC)
+           }
```

#### 27. `bundles/bloxd.io/chunks/js/238.js` (Changed code · before: `L4041` → after: `L245-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bfR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-189fdd08ba3f2524361cee8d275bffb2264df126076f837a116e0b71a7a405bf) · [After (L245-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/238.js#L245-L257) · [Before (L4041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/238.js#L4041)

```diff
-     const rk = [...fk, "Arrow", "Arrow of Speed", "Arrow of Slowness", "Arrow of Poison", "Arrow of Weakness", "Arrow of Knockback", "Arrow of Strength", "Arrow of Defense", "Arrow of Invisibility", "Arrow of Jumping", "Arrow of Milk", "Arrow of Instant Damage", "Arrow of Regener … [truncated]
+     QC.NoneLogLevel = 0, QC.MessageLogLevel = 1, QC.WarningLogLevel = 2, QC.ErrorLogLevel = 4, QC.AllLogLevel = 7, QC.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", QC._LogCache = "", QC._LogLimitOutputs = {}, QC._Levels =  … [truncated]
+       color: "white",
+       logFunc: console.log,
+       name: "Log"
+     }, {
+       color: "orange",
+       logFunc: console.warn,
+       name: "Warn"
+     }, {}, {
+       color: "red",
+       logFunc: console.error,
+       name: "Error"
+     }], QC.errorsCount = 0, QC.Log = QC._LogEnabled.bind(QC, QC.MessageLogLevel), QC.Warn = QC._LogEnabled.bind(QC, QC.WarningLogLevel), QC.Error = QC._LogEnabled.bind(QC, QC.ErrorLogLevel)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/239.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/239.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f)

#### 1. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/239.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/239.js#L2)

```diff
- export const ids = [239];
+ export const ids = [238, 239];
```

#### 2. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L4-L19` → after: `L4-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L4-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/239.js#L4-L189) · [Before (L4-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/239.js#L4-L19)

```diff
-   37649: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => mk,
-       e: () => Dk,
-       h: () => rk,
-       k: () => fk,
-       o: () => bk,
-       r: () => Sk
-     });
-     const Dk = 1.001,
-       fk = .501,
-       Sk = .025,
-       bk = .75,
-       rk = .08,
-       Pk = 4;
- 
+   60929: (CC, zC, ZC) => {
+     ZC.r(zC), ZC.d(zC, {
+       RegisterShaderMaterial: () => QC.e,
+       ShaderMaterial: () => QC.r,
+       ShaderMaterialCreateFromSnippetAsync: () => QC.f,
+       ShaderMaterialParse: () => QC.o,
+       ShaderMaterialParseFromFileAsync: () => QC.i,
+       ShaderMaterialParseFromSnippetAsync: () => QC.k
+     });
+     var QC = ZC(40297);
+     (0, QC.e)()
+   },
+   37590: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       e: () => wC
+     });
+ ... (170 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L21-L30` → after: `L191-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L191-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/239.js#L191-L253) · [Before (L21-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/239.js#L21-L30)

```diff
-       const kk = fk,
-         ek = Sk,
-         ik = kk - ek / 2,
-         Dk = (2 * kk - 2 * ek) / (2 * Pk - 1),
-         bk = [];
-       for (const fk of [-ik, ik])
-         for (const Sk of [-ik, ik])
-           for (let ik = 0; ik < Pk; ik++) {
-             const rk = -kk + ek + Dk * (2 * ik + .5);
-             bk.push([Dk, ek, ek, rk, fk, Sk]), bk.push([ek, Dk, ek, fk, rk, Sk]), bk.push([ek, ek, Dk, fk, Sk, rk])
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (CC => {
+         const zC = 16 * Math.random() | 0;
+         return ("x" === CC ? zC : 3 & zC | 8).toString(16)
+       }))
+     }
+     ZC.d(zC, {
+       b: () => QC
+     })
+   },
+   38507: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => QC
+     });
+     class QC {
+       static _CheckLimit(CC, zC) {
+         let ZC = QC._LogLimitOutputs[CC];
+ ... (47 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/239.js` (Changed code · before: `L32-L646` → after: `L255-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357fR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-bfd1ece2123281840ca1740a0dae398de56d3bf056e3a72c6210bf5ee59a357f) · [After (L255-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/239.js#L255-L269) · [Before (L32-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/239.js#L32-L646)

```diff
-       for (const fk of [-ik, ik])
-         for (const kk of [-ik, ik])
-           for (const Dk of [-ik, ik]) bk.push([ek, ek, ek, fk, kk, Dk]);
-       return bk
-     }
-   },
-   38017: (kk, ek, ik) => {
-     ik.d(ek, {
-       B: () => Hk,
-       E: () => lk,
-       G: () => fk,
-       c: () => Mk,
-       e: () => Pk,
-       h: () => yk,
-       j: () => mk,
-       k: () => rk,
- ... (599 more removed lines; see GitHub link above)
+       }
+     }
+     QC.NoneLogLevel = 0, QC.MessageLogLevel = 1, QC.WarningLogLevel = 2, QC.ErrorLogLevel = 4, QC.AllLogLevel = 7, QC.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", QC._LogCache = "", QC._LogLimitOutputs = {}, QC._Levels =  … [truncated]
+       color: "white",
+       logFunc: console.log,
+       name: "Log"
+     }, {
+       color: "orange",
+       logFunc: console.warn,
+       name: "Warn"
+     }, {}, {
+       color: "red",
+       logFunc: console.error,
+       name: "Error"
+     }], QC.errorsCount = 0, QC.Log = QC._LogEnabled.bind(QC, QC.MessageLogLevel), QC.Warn = QC._LogEnabled.bind(QC, QC.WarningLogLevel), QC.Error = QC._LogEnabled.bind(QC, QC.ErrorLogLevel)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/240.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/240.js` (46 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1)

#### 1. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L4-L39` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L4) · [Before (L4-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L4-L39)

```diff
-   38676: (kk, ek, ik) => {
-     function Dk(kk) {
-       return !(!kk.lobbyLeaderboardInfo && !kk.lobbyManage)
-     }
-     ik.d(ek, {
-       c: () => Dk
-     })
-   },
-   38601: (kk, ek, ik) => {
-     ik.d(ek, {
-       b: () => Sk
-     });
-     var Dk = ik(26),
-       fk = ik(1911);
- 
-     function Sk(kk) {
- ... (20 more removed lines; see GitHub link above)
+   37640: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L41-L42` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L6) · [Before (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L41-L42)

```diff
-       c: () => ki,
-       e: () => Re,
+       b: () => WC,
```

#### 3. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L45-L155` → after: `L9-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L9-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L9-L18) · [Before (L45-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L45-L155)

```diff
-     var Dk = ik(3642),
-       fk = ik(165),
-       Sk = ik(189),
-       bk = ik(600),
-       rk = ik(38),
-       Pk = ik(2704),
-       mk = ik(3693),
-       Mk = ik(3684),
-       Kk = ik(1207);
-     const xk = new WeakMap;
-     class nk {
-       constructor(kk, ek) {
-         let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
-           GPk: !0
-         };
-         this.callbacks = ek, this.options = ik, this.rik = void 0, this.sessionId = void 0, this.mV = [], this.NPk = !1, this.aU = !1, this.RPk = void 0, this.rV = 0, this.Dfk = 0, this.JPk = (kk, ek) => {
- ... (95 more removed lines; see GitHub link above)
+     var QC = ZC(9217),
+       wC = ZC(9194),
+       bC = ZC(326);
+     const nC = {
+       "Maple Door": {
+         positions: [{
+           block: "Maple Door",
+           x: 0,
+           y: 0,
+           z: 0
```

#### 4. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L157-L1209` → after: `L20-L3138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L20-L3138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L20-L3138) · [Before (L157-L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L157-L1209)

```diff
-           GPk: !1
-         }), (0, Hk.c)(kk)
-       }
-       KV(kk, ek) {
-         return !!(0, Hk.k)((0, Hk.b)(), this.rik, kk, ek) && (this.Pmk(), !0)
-       }
-       imk(kk) {
-         this.Mmk(), super.imk(kk), (0, Hk.c)(kk)
-       }
-       Gl() {
-         super.Gl(), this.Mmk()
-       }
-       Mmk() {
-         this.rik.Rl.dU.lF = void 0
-       }
-     }
- ... (1037 more removed lines; see GitHub link above)
+           block: "_Maple Door Top",
+           x: 0,
+           y: 1,
+           z: 0
+         }]
+       },
+       "Maple Door|meta|rot1|open": {
+         positions: [{
+           block: "Maple Door|meta|rot1|open",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Maple Door Top|meta|rot1|open",
+           x: 0,
+           y: 1,
+ ... (3103 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1211-L1212` → after: `L3140-L3166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3140-L3166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3140-L3166) · [Before (L1211-L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L1211-L1212)

```diff
-           onGaveUp: (kk, ek) => {
-             Dk.onGaveUp(kk, ek)
+           [`${CC}|meta|rot2`]: {
+             positions: [{
+               block: `${CC}|meta|rot2`,
+               x: 0,
+               y: 0,
+               z: 0
+             }, {
+               block: "_Lunite Auto Miner Body|meta|rot2",
+               x: -1,
+               y: 1,
+               z: 0
+             }, {
+               block: "_Lunite Auto Miner Drill Front|meta|rot2",
+               x: -2,
+               y: 1,
+               z: 0
+ ... (11 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1214-L1457` → after: `L3168-L3194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3168-L3194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3168-L3194) · [Before (L1214-L1457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L1214-L1457)

```diff
-           freeze: ek,
-           releaseSeat: ek => {
-             kk(ek).then((kk => {
-               kk.leave(!0)
-             }), (kk => {
-               console.warn("Couldn't release the held seat of a game left while reconnecting", kk)
-             }))
-           }
-         })
-       }
-       onInitialInfo(kk, ek) {
-         this.session.onInitialInfo(kk, ek)
-       }
-       isResuming() {
-         return this.session.isResuming()
-       }
- ... (228 more removed lines; see GitHub link above)
+           [`${CC}|meta|rot3`]: {
+             positions: [{
+               block: `${CC}|meta|rot3`,
+               x: 0,
+               y: 0,
+               z: 0
+             }, {
+               block: "_Lunite Auto Miner Body|meta|rot3",
+               x: 0,
+               y: 1,
+               z: 1
+             }, {
+               block: "_Lunite Auto Miner Drill Front|meta|rot3",
+               x: 0,
+               y: 1,
+               z: 2
+ ... (11 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1459-L1947` → after: `L3196-L3222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3196-L3222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3196-L3222) · [Before (L1459-L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L1459-L1947)

```diff
-           canReconnect: !kk,
-           canPlayAgain: kk,
-           requiresRefresh: !1,
-           automaticallyReconnect: !1
-         }), (0, Ue.navigatePreserveSearch)("/")
-       }
-       sinceJoined() {
-         return null === this.joinedAt ? "" : (0, Qe.e)(performance.now() - this.joinedAt)
-       }
-       onRoomLeft(kk, ek) {
-         var ik;
-         if (kk === Sk.c.gameOrPluginKick.code) return;
-         if (console.log(`Left room with code ${kk}`), kk === Sk.c.serverUpdating.code) return (0, qe.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, Pk.d)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
-         this.Lx.BH(`Kicked from server with code ${kk}`, new Error);
-         const Dk = Object.keys(Sk.c).find((ek => Sk.c[ek].code === kk));
-         (0, qe.reportClientError)("disconnect", "Left room", null !== Dk && void 0 !== Dk ? Dk : String(kk));
- ... (473 more removed lines; see GitHub link above)
+           [`${CC}|meta|rot4`]: {
+             positions: [{
+               block: `${CC}|meta|rot4`,
+               x: 0,
+               y: 0,
+               z: 0
+             }, {
+               block: "_Lunite Auto Miner Body|meta|rot4",
+               x: 1,
+               y: 1,
+               z: 0
+             }, {
+               block: "_Lunite Auto Miner Drill Front|meta|rot4",
+               x: 2,
+               y: 1,
+               z: 0
+ ... (11 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L1981-L2102` → after: `L3225-L3243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3225-L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3225-L3243) · [Before (L1981-L2102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L1981-L2102)

```diff
-       }
-       updateHidingMeshMgr() {
-         var kk, ek, ik;
-         const {
-           Lx: Dk
-         } = this, {
-           mY: fk
-         } = Dk, Sk = this.getCurrentHidingMeshMgrState();
-         if ((0, Li.Sd)(this.previousHidingMeshManagerState, Sk)) return;
-         if (this.previousHidingMeshManagerState = Sk, fk.lq(this.eId, "hidingMeshManager"), null === (kk = Dk.zq[Dk.Qq][this.eId]) || void 0 === kk || !kk.canSee) return;
-         const bk = this.getSpec();
-         if (!bk) return;
-         const {
-           type: rk,
-           opts: Pk
-         } = bk;
- ... (106 more removed lines; see GitHub link above)
+       }(),
+       ... function() {
+         const CC = {
+             1: CC => ({
+               x: 0,
+               z: CC
+             }),
+             2: CC => ({
+               x: CC,
+               z: 0
+             }),
+             3: CC => ({
+               x: 0,
+               z: -CC
+             }),
+             4: CC => ({
+ ... (3 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L2104-L2211` → after: `L3245-L3260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3245-L3260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3245-L3260) · [Before (L2104-L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L2104-L2211)

```diff
-           hideDist: null !== (ek = Pk.hideDist) && void 0 !== ek ? ek : 80,
-           movingHideDist: null !== (ik = Pk.hideDist) && void 0 !== ik ? ik : 120,
-           displayOutsideLoadedChunk: Pk.hideDist > 100,
-           immediatelyUpdate: !0,
-           Qr: "BloxdBlock" === rk ? Pk.blockName : rk
-         })
-       }
-       queueMeshRebuild() {
-         this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
-           this.meshRebuildQueued = !1, this.aU || this.updateHidingMeshMgr()
-         })))
-       }
-       getSpec() {
-         return (0, Yi.l)({
-           meshKind: this.meshKind,
-           meshOpts: this.meshOpts
- ... (92 more removed lines; see GitHub link above)
+           zC = {};
+         for (let ZC = 1; ZC <= 4; ZC++) {
+           const wC = 1 === ZC ? "" : `|meta|rot${ZC}`;
+           zC[`${QC.c[0].block}${wC}`] = {
+             positions: QC.c.map((zC => {
+               let {
+                 block: QC,
+                 y: bC,
+                 z: nC
+               } = zC;
+               return {
+                 block: `${QC}${wC}`,
+                 y: bC,
+                 ...CC[ZC](nC)
+               }
+             }))
```

#### 10. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L2333-L2395` → after: `L3263-L3288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3263-L3288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3263-L3288) · [Before (L2333-L2395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L2333-L2395)

```diff
-         this.detachers.delete(kk)
-       }
-       listenForFutureChanges(kk, ek, ik) {
-         return kk.listen(ek, ik, !1)
-       }
-       onEntityFieldChange(kk, ek, ik, Dk) {
-         switch (ik) {
-           case "ridingVehicleEId": {
-             this.promoteIfQueued(Dk);
-             const ek = this.Lx.mY.eek((0, ti.b)(kk));
-             ek && (ek.ridingVehicleEId = Dk);
-             break
-           }
-           case "armour":
-             this.handleArmourChange(kk, Dk);
-             break;
- ... (47 more removed lines; see GitHub link above)
+         return zC
+       }(),
+       ... function() {
+         const CC = {};
+         for (let zC = 1; zC <= QC.n; zC++) {
+           const ZC = (0, QC.gc)(zC),
+             wC = QC.r[zC - 1],
+             bC = [{
+               block: ZC,
+               x: 0,
+               y: 0,
+               z: 0
+             }];
+           for (const CC of QC.h)
+             for (let zC = 1; zC <= wC; zC++) {
+               if ("southwest" === CC && 1 === zC) continue;
+ ... (10 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L2398-L2824` → after: `L3293-L3404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3293-L3404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3293-L3404) · [Before (L2398-L2824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L2398-L2824)

```diff
-         });
-         else if (!fk) {
-           this.Lx.mY.lkk(Dk, "smoothToServerPos") || this.Lx.mY.wq(Dk, "smoothToServerPos");
-           const kk = this.Lx.mY.getState(Dk, "smoothToServerPos"),
-             ek = this.Lx.mY.ZZ(Dk).position;
-           (0, Oi.setServerPosition)(kk, ek[0], ek[1], ek[2])
-         }
-       }
-       handleRotationChange(kk, ek, ik) {
-         const Dk = "xRotation" === ek ? 0 : "yRotation" === ek ? 1 : 2;
-         for (const fk of (0, ci.d)().getFollowingEntities(kk)) {
-           const kk = this.Lx.mY.getState(fk, "meshRotation"),
-             ek = this.Lx.mY.tek(fk);
-           kk && ek.Xek && (kk.serverSetRotation[Dk] = ik)
-         }
-       }
- ... (411 more removed lines; see GitHub link above)
+         }
+         return CC
+       }(),
+       "Solar Panel": {
+         positions: [{
+           block: "Solar Panel",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Solar Panel SE",
+           x: 1,
+           y: 0,
+           z: 0
+         }, {
+           block: "_Solar Panel NW",
+ ... (96 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L2908-L2972` → after: `L3409-L3421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3409-L3421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3409-L3421) · [Before (L2908-L2972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L2908-L2972)

```diff
-       function ek() {
-         return kk.mY.jek(kk.Qq)
-       }
-       Ke(kk.inputs.down), Ke(kk.inputs.up);
-       for (const Dk of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
-         const ek = (ek, ik) => {
-           var fk, Sk;
-           if (Me()) {
-             var bk;
-             const fk = me[Dk];
-             var rk, Pk;
-             if (fk) null === (rk = (0, Ek.d)().client) || void 0 === rk || null === (Pk = rk.freeCameraController) || void 0 === Pk || Pk.handlefreeCamKeyPress(fk, ek, ik);
-             return void(ik || null !== (bk = (0, Ek.d)().client) && void 0 !== bk && bk.isReplayMode() || (kk.mY.Iek()[Dk] = !1))
-           }
-           if (null !== (fk = (0, Ek.d)().client) && void 0 !== fk && null !== (Sk = fk.freeCameraController) && void 0 !== Sk && Sk.isKeyPressOverriden(ek)) return;
-           kk.mY.Iek()[Dk] = ik
- ... (49 more removed lines; see GitHub link above)
+       return {
+         [`${CC} Banner`]: {
+           positions: [{
+             block: `${CC} Banner`,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_${CC} Banner Flag|meta|rot1|bot`,
+             x: 0,
+             y: 1,
+             z: 0
+           }]
```

#### 13. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L2974-L2987` → after: `L3423-L3434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3423-L3434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3423-L3434) · [Before (L2974-L2987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L2974-L2987)

```diff
-         Uk = (kk, ik) => {
-           ik && ge(Lk.e.TouchDownFirePrimary), kk ? Yk() : ((0, Bk.c)(), ek().Cik()), ik || ge(Lk.e.DownFirePrimary), Oe(!0), bk.click();
-           const fk = bk.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
-             Sk = bk.getMaxClickSeparationInMs(1e4) < 20,
-             rk = bk.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
-           if (fk || Sk || rk) {
-             let kk;
-             if (fk) kk = 30;
-             else if (Sk) kk = 50;
-             else {
-               if (!rk) throw new Error("???");
-               kk = 70
-             }(0, Dk.sendColyMessage)(Mk.vk, kk)
-           }
+         [`${CC} Banner|meta|rot2|bot`]: {
+           positions: [{
+             block: `${CC} Banner|meta|rot2|bot`,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_${CC} Banner Flag|meta|rot2|bot`,
+             x: 0,
+             y: 1,
+             z: 0
+           }]
```

#### 14. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L2989-L3002` → after: `L3436-L3447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3436-L3447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3436-L3447) · [Before (L2989-L3002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L2989-L3002)

```diff
-         Hk = nk((() => {
-           const kk = Date.now() - xk;
-           Kk.registerClickDownDuration(kk), ek().yik(), ge(Lk.e.UpFirePrimary), Oe(!1);
-           const ik = Kk.clickDownDurationsCheck(4e4);
-           (0, Dk.sendColyMessage)(Mk.Qg, ik)
-         }));
-       let wk = 0;
-       kk.inputs.down.on("primary-fire", (function(kk) {
-         wk = Hk.press(), Hk.owns(wk) && (xk = Date.now(), Math.abs(performance.now() - kk.timeStamp) > 5e3 || (Uk(kk.altKey, "changedTouches" in kk), Le(kk)))
-       })), kk.inputs.up.on("primary-fire", (function(kk) {
-         Hk.release(wk) && Le(kk, !0)
-       }));
-       const lk = () => {
-           ek().oPk(), ge(Lk.e.DownFireSecondary), Oe(!0), kk.bkk && !kk.bkk.position && (0, mk.f)()
+         [`${CC} Banner|meta|rot3|bot`]: {
+           positions: [{
+             block: `${CC} Banner|meta|rot3|bot`,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_${CC} Banner Flag|meta|rot3|bot`,
+             x: 0,
+             y: 1,
+             z: 0
+           }]
```

#### 15. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3004-L3018` → after: `L3449-L3460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3449-L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3449-L3460) · [Before (L3004-L3018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3004-L3018)

```diff
-         pk = nk((() => {
-           ek().pik(), ge(Lk.e.UpFireSecondary), Oe(!1)
-         }));
-       let yk = 0;
-       kk.inputs.down.on("alt-fire", (function(kk) {
-         yk = pk.press(), pk.owns(yk) && (lk(), Le(kk))
-       })), kk.inputs.up.on("alt-fire", (function(kk) {
-         pk.release(yk) && Le(kk, !0)
-       }));
-       const Yk = () => ek().gPk();
-       kk.inputs.down.on("mid-fire", (() => {
-         (0, Nk.e)() || Yk()
-       }));
-       const dk = kk => {
-           (0, Dk.sendColyMessage)(Mk.Ph, kk, !0)
+         [`${CC} Banner|meta|rot4|bot`]: {
+           positions: [{
+             block: `${CC} Banner|meta|rot4|bot`,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_${CC} Banner Flag|meta|rot4|bot`,
+             x: 0,
+             y: 1,
+             z: 0
+           }]
```

#### 16. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3020-L3160` → after: `L3462-L3473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3462-L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3462-L3473) · [Before (L3020-L3160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3020-L3160)

```diff
-         uk = kk => {
-           (0, Dk.sendColyMessage)(Mk.Th, {
-             tM: kk,
-             XM: tk()
-           }, !0)
-         };
-       for (const Dk of ["SpecialAction1", "SpecialAction2"]) kk.inputs.down.on(Dk, (() => {
-         dk(Dk)
-       })), kk.inputs.up.on(Dk, (() => {
-         uk(Dk)
-       }));
-       const Wk = () => {
-         const kk = ek();
-         kk.isGun() && kk.reload(Date.now())
-       };
-       kk.inputs.down.on("ReloadGun", Wk);
- ... (125 more removed lines; see GitHub link above)
+         [`${CC} Banner|meta|rot1|side`]: {
+           positions: [{
+             block: `${CC} Banner|meta|rot1|side`,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_${CC} Banner Flag|meta|rot1|side`,
+             x: 0,
+             y: -1,
+             z: 0
+           }]
```

#### 17. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3162-L3248` → after: `L3475-L3564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3475-L3564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3475-L3564) · [Before (L3162-L3248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3162-L3248)

```diff
-         de = kk => {
-           const ek = Gk.g.droppedBlockSize / 2;
-           return [0, 1, 2].every((ik => kk[ik] >= Ae[ik] - ek && kk[ik] <= je[ik] + ek))
-         };
-       kk.on("Px", (function(ek) {
-         Ak.j.tm("noaTick", ek);
-         const ik = (0, Ek.d)().client;
-         if (ik.triggerGameCallback("Px", ek), ik.isClientGameSessionActive()) try {
-           Pk.d.Px(ek)
-         } catch (bk) {
-           console.error("Error ticking audio entities", bk)
-         }
-         if (!kk.mY.Cek(kk.Qq).isAlive) return;
-         Date.now() - Ye > 9e3 && (! function() {
-           const kk = (0, Ek.e)();
-           "number" === typeof kk.bY.speedMultiplier && "number" === typeof kk.bY.jumpAmount && (0, Dk.sendColyMessage)(Mk.mi, {
- ... (71 more removed lines; see GitHub link above)
+         [`${CC} Banner|meta|rot2|side`]: {
+           positions: [{
+             block: `${CC} Banner|meta|rot2|side`,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_${CC} Banner Flag|meta|rot2|side`,
+             x: 0,
+             y: -1,
+             z: 0
+           }]
+         },
+         [`${CC} Banner|meta|rot3|side`]: {
+           positions: [{
+             block: `${CC} Banner|meta|rot3|side`,
+ ... (74 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3250-L3252` → after: `L3566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3566) · [Before (L3250-L3252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3250-L3252)

```diff
-       })), jk.c.subscribe("droppedItemScale", (kk => {
-         He = "number" === typeof kk && isFinite(kk) ? kk : ne
-       }))
+       }
```

#### 19. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3255-L3260` → after: `L3569-L3662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3569-L3662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3569-L3662) · [Before (L3255-L3260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3255-L3260)

```diff
-     function We() {
-       const kk = (0, Ek.e)();
-       if (kk)
-         for (const ek in Vk.u) {
-           kk.inputs.unbind(ek);
-           for (const ik of Vk.u[ek]) kk.inputs.bind(ek, ik)
+     function oC(CC) {
+       const zC = (0, bC.Gb)(CC);
+       return {
+         [zC]: {
+           positions: [{
+             block: zC,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_${zC} Top Left`,
+             x: 0,
+             y: 1,
+             z: 0
+           }, {
+             block: `_${zC} Top Right`,
+ ... (78 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3396-L3398` → after: `L3668-L3743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3668-L3743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3668-L3743) · [Before (L3396-L3398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3396-L3398)

```diff
-       Ak.j.tm("QTEMouseState", {
-         isDown: kk
-       })
+       const zC = `_${CC} Back`,
+         ZC = `_${CC} Dish`;
+       return {
+         [CC]: {
+           positions: [{
+             block: CC,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: zC,
+             x: 0,
+             y: 0,
+             z: -1
+           }, {
+             block: ZC,
+ ... (60 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3402-L3416` → after: `L3747-L3787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3747-L3787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3747-L3787) · [Before (L3402-L3416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3402-L3416)

```diff
-       var ek, ik, fk, Sk, bk, rk, Pk, mk;
-       const Kk = (0, Ek.e)();
-       Kk.bkk = null !== (ek = function(kk, ek) {
-         var ik, Dk;
-         if (!pe) return null;
-         const fk = kk.bloxd;
-         Ue ??= fk.getMetaInfo("Board").rootId;
-         const Sk = null !== (ik = null === ek || void 0 === ek ? void 0 : ek.PJ) && void 0 !== ik ? ik : null;
-         if (!Sk || fk.getMetaInfo(Sk).rootId !== Ue) return null;
-         const bk = null !== (Dk = null === ek || void 0 === ek ? void 0 : ek.position) && void 0 !== Dk ? Dk : null;
-         if (fk.playerCanChangePos(kk.Qq, bk[0], bk[1], bk[2])) return null;
-         const rk = (kk, ek, ik) => {
-           const Dk = fk.blockDataOwner.getBlockData(kk, ek, ik),
-             Sk = null === Dk || void 0 === Dk ? void 0 : Dk.persisted.shared.text.split("\n")[0].toLowerCase().trim();
-           return Xk.singleLineBoardActions.has(Sk)
+       const zC = `Small ${CC} Pod`;
+       return {
+         [zC]: {
+           positions: [{
+             block: zC,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_Small ${CC} Pod Mid`,
+             x: 0,
+             y: 1,
+             z: 0
+           }, {
+             block: `_Small ${CC} Pod Top`,
+             x: 0,
+ ... (25 more added lines; see GitHub link above)
```

#### 22. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3418-L3449` → after: `L3789-L3790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3789-L3790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3789-L3790) · [Before (L3418-L3449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3418-L3449)

```diff
-         if (rk(bk[0], bk[1], bk[2])) return null;
-         let Pk;
-         kk.Ykk && (Pk = [...kk.Ykk], kk.iN(Pk, Pk));
-         const mk = (Pk ? kk.camera.RZ : 0) + fk.getBlockReach(kk.Qq);
-         return kk.pickBlock(Pk, kk.Lkk, mk, ((ek, ik, Dk, Sk) => 0 !== ek && ("Board" !== fk.getMetaInfo(ek).rootName || fk.playerCanChangePos(kk.Qq, ik, Dk, Sk) || rk(ik, Dk, Sk))))
-       }(Kk, Kk.bkk)) && void 0 !== ek ? ek : Kk.bkk;
-       const xk = null !== (ik = null === (fk = Kk.bkk) || void 0 === fk ? void 0 : fk.position) && void 0 !== ik ? ik : null,
-         nk = null !== (Sk = Kk.Lkk) && void 0 !== Sk ? Sk : Kk.camera.yN(),
-         Uk = Ek.h.localPlayerPickActionHelper.getPickEntityResult(nk),
-         Hk = null !== (bk = Kk.bkk) && void 0 !== bk && bk.PJ ? (0, Ok.e)(Kk.bkk.PJ) : "Air",
-         wk = kk === Lk.e.UpFirePrimary || kk === Lk.e.UpFireSecondary,
-         lk = wk ? "onPlayerClickUp" : "onPlayerClick",
-         pk = wk ? kk === Lk.e.UpFireSecondary : kk === Lk.e.DownFireSecondary,
-         yk = !wk && (0, Dk.getWasDoubleClick)();
-       Ak.j.tm("mouseState", {
-         Yr: kk,
- ... (16 more removed lines; see GitHub link above)
+         WC[CC] = bC, WC[wC.g[CC].id] = bC
+       }
```

#### 23. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3451` → after: `L3792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3792) · [Before (L3451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3451)

```diff
-   38664: (kk, ek, ik) => {
+   38047: (CC, zC, ZC) => {
```

#### 24. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3453` → after: `L3794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3794) · [Before (L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3453)

```diff
-       e: () => Sk,
+       d: () => oC,
```

#### 25. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3456-L3461` → after: `L3797-L3806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3797-L3806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3797-L3806) · [Before (L3456-L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3456-L3461)

```diff
-     var Dk = ik(38021);
-     let fk = !1;
- 
-     function Sk() {
-       return fk
-     }
+     var QC = ZC(9194),
+       wC = ZC(9243),
+       bC = ZC(9252);
+     const nC = wC.w.map((CC => {
+       let {
+         dx: zC,
+         dz: ZC
+       } = CC;
+       return [zC, 0, ZC]
+     }));
```

#### 26. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3464` → after: `L3809-L3810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3809-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3809-L3810) · [Before (L3464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3464)

```diff
-       fk = kk, kk ? Dk.h.setMultiplierType("emoteWheel", 0) : Dk.h.removeMultiplier("emoteWheel")
+       const zC = QC.g[CC];
+       return !!zC && CC !== QC.d && !zC.model && !zC.NM && !1 !== zC.solid && !zC.qp
```

#### 27. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3466-L3469` → after: `L3812-L3836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3812-L3836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3812-L3836) · [Before (L3466-L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3466-L3469)

```diff
-   },
-   38666: (kk, ek, ik) => {
-     function Dk(kk) {
-       return Boolean(kk.bY.useInventory && kk.bY.useFullInventory && kk.mY.Sek(kk.Qq))
+     class oC {
+       constructor(CC) {
+         this.model = CC, this.reshapeOffsets = [...nC, [0, -1, 0]]
+       }
+       handles(CC) {
+         const zC = QC.g[CC];
+         return (null === zC || void 0 === zC ? void 0 : zC.model) === this.model && void 0 !== zC.attachedTop
+       }
+       affects(CC) {
+         return this.handles(CC) || fC(CC) || (0, bC.A)(QC.g[CC])
+       }
+       shape(CC, zC, ZC, nC, oC) {
+         let qC = this.handles(CC(zC, ZC + 1, nC)) ? wC.m : 0;
+         return wC.w.forEach(((oC, FC) => {
+           let {
+             dx: WC,
+ ... (9 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3475-L3481` → after: `L3839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3839) · [Before (L3475-L3481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3475-L3481)

```diff
-   38570: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => Sk,
-       h: () => fk
-     });
-     var Dk = ik(36747);
- 
+   37834: (CC, zC, ZC) => {
```

#### 29. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3483-L3506` → after: `L3841-L3868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3841-L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3841-L3868) · [Before (L3483-L3506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3483-L3506)

```diff
-       return {
-         replayedClipName: kk,
-         replayedClipAgeSeconds: ek
-       }
-     }
- 
-     function Sk(kk, ek, ik, fk, Sk) {
-       const bk = function(kk) {
-           if ("object" !== typeof kk || null === kk) return null;
-           const {
-             replayedClipName: ek,
-             replayedClipAgeSeconds: ik
-           } = kk;
-           return "string" === typeof ek && "number" === typeof ik ? {
-             Fi: ek,
-             ui: ik
- ... (8 more removed lines; see GitHub link above)
+       var ZC;
+       zC || (zC = {});
+       const QC = null !== (ZC = zC.customAttributes) && void 0 !== ZC ? ZC : {};
+       var wC, bC, nC;
+       "Gun" === (null === CC || void 0 === CC ? void 0 : CC.type) && (QC.shotsLeft = null !== (wC = null !== (bC = QC.shotsLeft) && void 0 !== bC ? bC : null === (nC = QC.gunStats) || void 0 === nC ? void 0 : nC.clipSize) && void 0 !== wC ? wC : CC.clipSize);
+       if (QC.enchantmentTier && (QC.enchantmentTier = QC.enchantmentTier.toString()), QC.enchantments)
+         for (const WC in QC.enchantments) {
+           const CC = QC.enchantments[WC];
+           if ("number" !== typeof CC) {
+             const zC = parseInt(CC);
+             isNaN(zC) || zC < 0 ? QC.enchantments[WC] = void 0 : QC.enchantments[WC] = zC > 1e9 ? 1e9 : zC
+           }
+         }
+       if (QC.enchantmentData)
+         for (const WC in QC.enchantmentData) {
+           const CC = QC.enchantmentData[WC];
+ ... (12 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3509` → after: `L3874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3874) · [Before (L3509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3509)

```diff
-   38575: (kk, ek, ik) => {
+   38042: (CC, zC, ZC) => {
```

#### 31. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3513-L3514` → after: `L3878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3878) · [Before (L3513-L3514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3513-L3514)

```diff
-       h: () => nk,
-       l: () => xk,
+       k: () => oC,
```

#### 32. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3518-L3569` → after: `L3882-L3886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3882-L3886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3882-L3886) · [Before (L3518-L3569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3518-L3569)

```diff
-     var Dk = ik(38583),
-       fk = ik(36840),
-       Sk = ik(3642),
-       bk = ik(1895),
-       rk = ik(26),
-       Pk = ik(2704);
-     const mk = new Dk.d;
- 
-     function Mk() {
-       return mk
-     }
- 
-     function Kk() {
-       mk.clear()
-     }
- 
- ... (36 more removed lines; see GitHub link above)
+     var QC = ZC(9194),
+       wC = ZC(9230),
+       bC = ZC(38047);
+     const nC = (0, QC.k)("Noticeboard"),
+       fC = (0, QC.k)("Standing Noticeboard|meta|rot4|lrud");
```

#### 33. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3572-L3576` → after: `L3889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3889) · [Before (L3572-L3576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3572-L3576)

```diff
-       let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mk.getSettings(kk);
-       if (ek) {
-         (0, fk.d)(kk);
-         for (const ik in ek)(0, fk.b)(kk, ik, ek[ik])
-       }
+       return nC <= CC && CC <= fC
```

#### 34. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3616-L3650` → after: `L3899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3899) · [Before (L3616-L3650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3616-L3650)

```diff
-       const Sk = Ak(kk, ek);
-       if (Sk) {
-         const kk = Sk.x,
-           ek = Sk.y,
-           ik = kk - 50,
-           Dk = ek - 50;
-         return Math.abs(ik) <= rk.c && Math.abs(Dk) <= (0, rk.k)() ? {
-           x: kk,
-           y: ek
-         } : uk(ik, Dk)
-       }
-       Mk.Z6(ek[0], ek[1], ek[2]),
-         function(kk) {
-           const ek = kk.yH.wik(),
-             ik = ek ? Dk.Matrix.FromArrayToRef(ek.worldMatrix, 0, yk) : kk.yH.XF().activeCamera.getWorldMatrix();
-           Dk.eH.TransformNormalToRef(Hk, ik, Kk), Kk.normalize(), Dk.eH.TransformNormalToRef(wk, ik, xk), xk.normalize()
- ... (19 more removed lines; see GitHub link above)
+       return "string" === typeof(null === CC || void 0 === CC || null === (zC = CC.persisted) || void 0 === zC || null === (ZC = zC.shared) || void 0 === ZC ? void 0 : ZC.text)
```

#### 35. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3653-L3654` → after: `L3902-L3903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3902-L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3902-L3903) · [Before (L3653-L3654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3653-L3654)

```diff
-     function jk(kk, ek) {
-       return Ck(kk, Fk(kk, ek))
+     function PC(CC) {
+       return pC(CC) && "" !== CC.persisted.shared.text.trim()
```

#### 36. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3658-L3667` → after: `L3907-L3909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3907-L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3907-L3909) · [Before (L3658-L3667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3658-L3667)

```diff
-       const ik = Ak(kk, Fk(kk, ek));
-       return ik && {
-         x: ik.x,
-         y: ik.y
-       }
-     }
- 
-     function dk(kk) {
-       var ek, ik;
-       return 1 / (null !== (ek = null === (ik = kk.yH.wik()) || void 0 === ik ? void 0 : ik.projectionMatrix[0]) && void 0 !== ek ? ek : kk.yH.XF().activeCamera.getProjectionMatrix().m[0])
+       let [ZC, , QC] = zC;
+       const [bC, , nC] = wC.q[CC][MC];
+       return ZC * bC + QC * nC
```

#### 37. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3671-L3675` → after: `L3913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3913) · [Before (L3671-L3675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3671-L3675)

```diff
-       const Dk = kk.yH.wik(),
-         fk = Dk ? Dk.worldMatrix : kk.yH.XF().activeCamera.getWorldMatrix().m,
-         Sk = kk.Xx;
-       for (let bk = 0; bk < 3; bk++) ek[bk] = fk[12 + bk] + Sk[bk], ik[bk] = fk[8 + bk];
-       bk().normalize(ik, ik)
+       return ZC[1] - zC[1] || GC(CC, zC) - GC(CC, ZC)
```

#### 38. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3678-L3682` → after: `L3916-L3921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3916-L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3916-L3921) · [Before (L3678-L3682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3678-L3682)

```diff
-     function Fk(kk, ek) {
-       const ik = kk.Xx,
-         Dk = kk.yH.wik(),
-         fk = Dk ? Yk.Z6(Dk.eye[0], Dk.eye[1], Dk.eye[2]) : kk.yH.camera.globalPosition;
-       return nk[0] = ek[0] - ik[0] - fk.x, nk[1] = ek[1] - ik[1] - fk.y, nk[2] = ek[2] - ik[2] - fk.z, bk().normalize(nk, nk), nk
+     function AC(CC, zC, ZC, bC, fC) {
+       var oC;
+       let FC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : CC(zC[0], zC[1], zC[2]);
+       if (!(qC[FC - nC] & 1 << ZC)) return null;
+       const [WC, NC, MC] = wC.q[fC][ZC], gC = [zC[0] + WC, zC[1] + NC, zC[2] + MC], SC = CC(gC[0], gC[1], gC[2]), pC = null === (oC = QC.g[SC]) || void 0 === oC ? void 0 : oC.meta;
+       return (null === pC || void 0 === pC ? void 0 : pC.rootId) === bC && pC.rot === fC && qC[SC - nC] & 1 << (1 ^ ZC) ? gC : null
```

#### 39. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3685-L3751` → after: `L3924-L3948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3924-L3948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3924-L3948) · [Before (L3685-L3751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3685-L3751)

```diff
-     function uk(kk, ek) {
-       return (0, rk.g)(kk, ek, rk.c, (0, rk.k)())
-     }
-   },
-   38550: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => xk
-     });
-     var Dk = ik(189),
-       fk = ik(330),
-       Sk = ik.n(fk),
-       bk = ik(36335),
-       rk = ik(36341),
-       Pk = ik(2704);
-     const mk = Dk.g.Qp * Dk.g.playerEyeToHeightRatio,
-       Mk = 250,
- ... (51 more removed lines; see GitHub link above)
+     function xC(CC, zC, ZC, bC) {
+       const nC = CC(zC, ZC, bC);
+       if (!oC(nC)) return null;
+       const {
+         rootId: fC,
+         rot: qC
+       } = QC.g[nC].meta, WC = (zC, ZC) => {
+         let QC = zC,
+           wC = 1;
+         for (let bC = AC(CC, QC, ZC, fC, qC); bC && wC < FC; bC = AC(CC, QC, ZC, fC, qC)) QC = bC, wC++;
+         return {
+           end: QC,
+           cells: wC
+         }
+       }, pC = WC(WC([zC, ZC, bC], NC).end, gC).end, PC = WC(pC, MC).cells, [GC, , RC] = wC.q[qC][MC];
+       let xC = 1;
+ ... (9 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3811-L3857` → after: `L3953-L3966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3953-L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3953-L3966) · [Before (L3811-L3857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3811-L3857)

```diff
-       Dk.j.tm("newUiRequest", {
-         id: kk,
-         clientParameters: ek
-       }, !0)
-     }
- 
-     function rk(kk) {
-       Dk.j.tm("removeUiRequest", kk, !0);
-       const ek = Sk.get(kk);
-       ek && (ek.tearDownNotification(), Sk.delete(kk))
-     }
- 
-     function Pk() {
-       Dk.j.tm("clearUiRequests");
-       for (const kk of Sk.values()) kk.tearDownNotification();
-       Sk.clear()
- ... (31 more removed lines; see GitHub link above)
+       for (const ZC of function(CC) {
+           let {
+             anchor: zC,
+             rot: ZC,
+             width: QC,
+             height: bC
+           } = CC;
+           const [nC, , fC] = wC.q[ZC][MC], oC = [];
+           for (let wC = 0; wC < bC; wC++)
+             for (let CC = 0; CC < QC; CC++) oC.push([zC[0] + nC * CC, zC[1] - wC, zC[2] + fC * CC]);
+           return oC
+         }(CC))
+         if (pC(zC(ZC[0], ZC[1], ZC[2]))) return ZC;
+       return null
```

#### 41. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3860-L3861` → after: `L3969-L3996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3969-L3996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3969-L3996) · [Before (L3860-L3861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3860-L3861)

```diff
-     function Pk(kk) {
-       return kk.vf === Sk.e.Leave || kk.vf === Sk.e.Cursor
+     function IC(CC, zC, ZC, wC, bC) {
+       const nC = CC(ZC, wC, bC);
+       if (!oC(nC)) return null;
+       const {
+         rootId: fC,
+         rot: qC
+       } = QC.g[nC].meta, FC = [
+         [ZC, wC, bC]
+       ], NC = new Set([FC[0].join()]);
+       let MC = FC[0],
+         gC = null;
+       for (let QC = 0; QC < FC.length; QC++) {
+         const ZC = FC[QC];
+         if (RC(qC, ZC, MC) < 0 && (MC = ZC), pC(zC(ZC[0], ZC[1], ZC[2]))) {
+           const zC = xC(CC, ZC[0], ZC[1], ZC[2]);
+           (!gC || RC(qC, zC.anchor, gC.anchor) < 0) && (gC = zC)
+ ... (12 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3864-L3941` → after: `L3999-L4016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R3999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L3999-L4016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L3999-L4016) · [Before (L3864-L3941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3864-L3941)

```diff
-     function mk(kk) {
-       bk.j.tm("codeCollab", {
-         type: kk.vf,
-         docKey: kk.Ef,
-         version: kk.hf,
-         editorCount: kk.af,
-         peers: kk.Wf,
-         updates: kk.tf,
-         playerId: kk.Xf,
-         playerName: kk.Bf,
-         colour: kk.Tf,
-         anchor: kk.Zf,
-         head: kk.gf,
-         existingCursors: kk.Gf,
-         files: kk.Nf,
-         engineSettings: kk.Rf
- ... (62 more removed lines; see GitHub link above)
+     function iC(CC, zC, ZC, nC, fC) {
+       if (null !== ZC && oC(ZC)) {
+         const {
+           rootName: CC,
+           rot: zC
+         } = QC.g[ZC].meta;
+         if (wC.q[zC].some((CC => {
+             let [zC, ZC, QC] = CC;
+             return zC === nC[0] && ZC === nC[1] && QC === nC[2]
+           }))) return {
+           root: CC,
+           rot: zC
+         }
+       }
+       const [qC, FC] = wC.i[fC], WC = CC(zC[0] - qC, zC[1], zC[2] - FC);
+       return {
+ ... (2 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3945` → after: `L4020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R4020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L4020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L4020) · [Before (L3945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3945)

```diff
-   38612: (kk, ek, ik) => {
+   38055: (CC, zC, ZC) => {
```

#### 44. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3948` → after: `L4023-L4025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R4023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L4023-L4025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L4023-L4025) · [Before (L3948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3948)

```diff
-       h: () => fk
+       e: () => nC,
+       i: () => wC,
+       l: () => fC
```

#### 45. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3950` → after: `L4027-L4029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R4027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L4027-L4029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L4027-L4029) · [Before (L3950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3950)

```diff
-     const Dk = ["description", "label"];
+     var QC = ZC(330);
+     const wC = ["Snowball", "Snowball Launcher", "Pebble", "Reinforced Pebble", "Ball", "Reinforced Ball", "Mango", "Moonstone Orb", ...ZC(597).B.map((CC => `${CC} Spawn Orb`)), "Fireball", "RPG", "Obby RPG", "Super RPG", "Grenade Launcher", "Iceball", "Bouncy Bomb", "Coconut", " … [truncated]
+       bC = ["Obby RPG"];
```

#### 46. `bundles/bloxd.io/chunks/js/240.js` (Changed code · before: `L3953-L3956` → after: `L4032-L4038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1R4032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-9462ac3fd122a3efd31c87d50b5740bfa5380c6cf3a4e3d92676c7fa6a5be4a1) · [After (L4032-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/240.js#L4032-L4038) · [Before (L3953-L3956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/240.js#L3953-L3956)

```diff
-       const ek = kk.type;
-       return {
-         type: ek,
-         params: kk[ek]
+       const zC = CC.indexOf("|");
+       return -1 === zC ? {
+         item: CC,
+         clientPredictedThrower: null
+       } : {
+         item: CC.slice(0, zC),
+         clientPredictedThrower: CC.slice(zC + 1)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/241.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/241.js` (78 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5)

#### 1. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L4)

```diff
-   38086: (kk, ek, ik) => {
+   37900: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L6-L120` → after: `L6-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L6-L11) · [Before (L6-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L6-L120)

```diff
-       e: () => bk
-     });
-     var Dk = ik(38088);
-     const fk = [0, 0, 0];
-     class Sk {
-       constructor(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fk;
-         this.pool = kk, this.origin = ek, this.count = 0, this.free = []
-       }
-       take() {
-         var kk;
-         const ek = null !== (kk = this.free.pop()) && void 0 !== kk ? kk : this.count++;
-         return ek >= this.pool.vK && this.pool.grow(Math.max(2 * this.pool.vK, ek + 1)), this.hide(ek), ek
-       }
-       release(kk) {
-         this.hide(kk), this.free.push(kk)
- ... (99 more removed lines; see GitHub link above)
+       c: () => qC,
+       g: () => QC,
+       i: () => fC,
+       m: () => wC,
+       n: () => nC,
+       r: () => bC
```

#### 3. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L122-L581` → after: `L13-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L13-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L13-L18) · [Before (L122-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L122-L581)

```diff
-     var Dk = ik(60);
-     const fk = [{
-         nameKey: "tierBurner",
-         cost: [],
-         islandRadius: 11.5,
-         machineAllowance: 16,
-         beltAllowance: 64,
-         newDeposits: [],
-         unlocks: [],
-         reward: null
-       }, {
-         nameKey: "tierCurrent",
-         cost: [{
-           item: "Iron Bar",
-           amount: 40
-         }, {
- ... (444 more removed lines; see GitHub link above)
+     const QC = 1.001,
+       wC = .501,
+       bC = .025,
+       nC = .75,
+       fC = .08,
+       oC = 4;
```

#### 4. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L588-L599` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L61) · [Before (L588-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L588-L599)

```diff
-       bk = kk
-     }
-     const mk = {
-       11: "uraniumLine",
-       12: "centrifuge",
-       13: "reactorOnline",
-       14: "cryoCoolant",
-       15: "moreLasers"
-     };
- 
-     function Mk() {
-       return bk ? fk.length : Sk
+       return Math.floor(CC).toLocaleString("en-US")
```

#### 5. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L603-L632` → after: `L72-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L72-L73) · [Before (L603-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L603-L632)

```diff
-       var ek, ik;
-       return null !== (ek = null === (ik = fk[kk - 1]) || void 0 === ik ? void 0 : ik.reactorTier) && void 0 !== ek ? ek : 0
-     }
- 
-     function xk(kk, ek) {
-       let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Kk(kk) > 0;
-       return ik && !bk ? "hidden" : kk <= ek ? "open" : ik ? ek < 5 ? "hidden" : ek < Sk ? "teaser" : "locked" : "locked"
-     }
- 
-     function nk(kk, ek) {
-       let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-       const {
-         kind: Dk,
-         n: fk
-       } = wk(kk);
-       return {
- ... (14 more removed lines; see GitHub link above)
+       const zC = CC.split("|")[0];
+       return (0, QC.h)(zC) ? zC === QC.b ? "cryo" : "water" : null
```

#### 6. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L636-L648` → after: `L86-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L86-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L86-L99) · [Before (L636-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L636-L648)

```diff
-       const ek = Kk(kk);
-       if (ek > 0) return {
-         kind: "atomic",
-         n: ek,
-         short: `A${ek}`
-       };
-       const ik = function(kk) {
-         return kk >= 6 && kk <= 10 ? kk - 6 + 1 : 0
-       }(kk);
-       return ik > 0 ? {
-         kind: "stage",
-         n: ik,
-         short: `S${ik}`
+       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+       const ZC = zC ? function(CC, zC, ZC) {
+         const QC = MC.findIndex((QC => {
+           let [wC, bC, nC] = QC;
+           return wC === CC && bC === zC && nC === ZC
+         }));
+         return QC < 0 ? 0 : 1 << QC
+       }(zC[0], zC[1], zC[2]) : 0;
+       return "maker" === CC ? {
+         kind: CC,
+         faces: ZC
+       } : "user" === CC ? {
+         kind: CC,
+         faces: gC & ~ZC
```

#### 7. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L650-L652` → after: `L101-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L101-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L101-L102) · [Before (L650-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L650-L652)

```diff
-         kind: "tier",
-         n: kk,
-         short: String(kk)
+         kind: CC,
+         faces: gC
```

#### 8. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L657-L690` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L107) · [Before (L657-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L657-L690)

```diff
-       return fk[Math.max(1, Math.min(kk, fk.length)) - 1]
-     }
- 
-     function pk(kk, ek) {
-       return kk < ek ? function(kk) {
-         var ek;
-         return null !== (ek = fk[kk]) && void 0 !== ek ? ek : null
-       }(kk) : null
-     }
-     const yk = "baf2coresubmit",
-       Yk = "baf2corebankpause",
-       Lk = "baf2coredeposit",
-       Ck = "baf2corechargepause";
- 
-     function Ak(kk) {
-       var ek;
- ... (18 more removed lines; see GitHub link above)
+       return "pipe" === CC || "tank" === CC || "maker" === CC
```

#### 9. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L696-L697` → after: `L110-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L110-L111) · [Before (L696-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L696-L697)

```diff
-     function zk(kk) {
-       return "on" === kk
+     function PC(CC, zC, ZC) {
+       return 0 !== (CC.faces & 1 << ZC) && 0 !== (zC.faces & 1 << (1 ^ ZC)) && (pC(CC.kind) || pC(zC.kind))
```

#### 10. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L699-L712` → after: `L113-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L113-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L113-L118) · [Before (L699-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L699-L712)

```diff
-     var Qk = ik(314);
-     const vk = "Mob Farm",
-       Ek = {
-         Pig: 1,
-         Cow: 1,
-         Sheep: 1,
-         Deer: 1,
-         Stag: 1,
-         "Draugr Zombie": 2,
-         "Draugr Skeleton": 2,
-         "Cave Golem": 3,
-         "Magma Golem": 3
-       },
-       hk = ["Pig", "Cow", "Sheep", "Deer", "Stag"],
+     const GC = (CC, zC, ZC, QC) => ({
+         input: CC,
+         inputAmount: QC,
+         output: zC,
+         outputAmount: ZC
+       }),
```

#### 11. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L714-L741` → after: `L120-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L120-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L120-L166) · [Before (L714-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L714-L741)

```diff
-         1: 20,
-         2: 60,
-         3: 120
-       },
-       Wk = "baf2farmvoid",
-       tk = "Caged ",
-       Xk = " Spawner Block";
- 
-     function Bk(kk) {
-       return `lifeform:${(0,Qk.je)(kk)}`
-     }
- 
-     function ck(kk) {
-       if (!kk) return null;
-       if (kk.startsWith(tk)) {
-         const ek = kk.slice(6);
- ... (12 more removed lines; see GitHub link above)
+         Condenser: {
+           kind: "Condenser",
+           opMs: 2e3,
+           inputSlot: null,
+           fuelSlot: null,
+           outputSlots: [],
+           recipes: [],
+           powerPerOp: 60,
+           fluidMade: 12,
+           couplable: !0,
+           couplerSlot: 0
+         },
+         Centrifuge: {
+           kind: "Centrifuge",
+           opMs: 12e3,
+           inputSlot: 0,
+ ... (31 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L744-L768` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L169) · [Before (L744-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L744-L768)

```diff
-       return ak[Ek[ek]] * kk.opMs / 1e3
-     }
-     const Ok = new Map;
-     const gk = "baf2islands",
-       Gk = "baf2islandnew";
- 
-     function Nk(kk) {
-       const ek = fk.findIndex((ek => ek.unlocks.includes(kk)));
-       return ek < 0 ? 1 : ek + 1
-     }
- 
-     function Rk(kk) {
-       return Math.floor(kk).toLocaleString("en-US")
-     }
-     var Jk = ik(38017);
-     const ke = "baf2terminaltake",
- ... (9 more removed lines; see GitHub link above)
+       return 1e3 * (null !== zC && void 0 !== zC ? zC : 0) / CC.opMs
```

#### 13. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L772` → after: `L173-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L173-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L173-L175) · [Before (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L772)

```diff
-       return `${ee} ${kk}`
+       let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+       const ZC = AC(RC["Coolant Mixer"], WC) * zC;
+       return CC <= 0 ? 0 : Math.ceil(CC / ZC - 1e-9)
```

#### 14. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L775-L776` → after: `L189-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L189-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L189-L194) · [Before (L775-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L775-L776)

```diff
-       [`${ke} `, "take"],
-       [`${ee} `, "put"]
+       [1, 0, 0],
+       [-1, 0, 0],
+       [0, 0, 1],
+       [0, 0, -1],
+       [0, 1, 0],
+       [0, -1, 0]
```

#### 15. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L780-L801` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L207-L208) · [Before (L780-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L780-L801)

```diff
-       const ek = be.find((ek => {
-         let [ik] = ek;
-         return kk.startsWith(ik)
-       }));
-       if (!ek) return null;
-       const [ik, Dk] = ek, [fk, Sk, ...bk] = kk.slice(ik.length).trim().split(" "), rk = Number(fk);
-       if (!Number.isSafeInteger(rk) || rk <= 0) return null;
-       if ("put" === Dk && void 0 === Sk) return {
-         kind: "putAll",
-         seq: rk
-       };
-       const Pk = function(kk) {
-         if (ie.includes(kk)) return kk;
-         const ek = Number(kk);
-         return /^\d+$/.test(kk) && Number.isSafeInteger(ek) && ek > 0 ? ek : null
-       }(null !== Sk && void 0 !== Sk ? Sk : "");
- ... (6 more removed lines; see GitHub link above)
+       let [zC, ZC] = CC;
+       return [-ZC, zC]
```

#### 16. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L805-L806` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L212) · [Before (L805-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L805-L806)

```diff
-       const ik = "number" === typeof kk ? kk : "one" === kk ? 1 : "stack" === kk ? 99 : ek;
-       return Math.min(ek, ik)
+       return CC[0] === zC[0] && CC[1] === zC[1]
```

#### 17. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L810-L811` → after: `L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L216) · [Before (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L810-L811)

```diff
-       const ik = kk => "number" === typeof kk ? kk : "one" === kk ? 1 : 99;
-       return "fill" === kk || "fill" === ek ? "fill" : ik(kk) + ik(ek)
+       return CC[0] * zC[0] + CC[1] * zC[1] === 0
```

#### 18. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L814-L830` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L226-L227) · [Before (L814-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L814-L830)

```diff
-     function Me(kk, ek) {
-       const ik = re(kk),
-         Dk = re(ek),
-         fk = ik && Dk ? function(kk, ek) {
-           return "take" === kk.kind || "take" === ek.kind ? "take" === kk.kind && "take" === ek.kind && kk.item === ek.item ? {
-             ...ek,
-             mode: me(kk.mode, ek.mode)
-           } : null : "putAll" === kk.kind || "putAll" === ek.kind ? {
-             kind: "putAll",
-             seq: ek.seq
-           } : kk.item === ek.item ? {
-             ...ek,
-             mode: me(kk.mode, ek.mode)
-           } : null
-         }(ik, Dk) : null;
-       return fk ? "putAll" === (Sk = fk).kind ? Se(Sk.seq) : "put" === Sk.kind ? fe(Sk.seq, Sk.mode, Sk.item) : De(Sk.seq, Sk.mode, Sk.item) : null;
- ... (1 more removed lines; see GitHub link above)
+     function SC(CC, zC, ZC, QC, wC) {
+       return zC < gC.s || zC >= gC.s + gC.v || Math.floor(CC / gC.A) === Math.floor(QC / gC.A) && Math.floor(ZC / gC.A) === Math.floor(wC / gC.A)
```

#### 19. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L832` → after: `L229-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L229-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L229-L241) · [Before (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L832)

```diff
-     const Ke = "baf2rx";
+     const pC = "Splitter",
+       PC = "Sorting Gate",
+       GC = new Set(gC.K),
+       RC = new Set([...gC.K, "Belt Loader", "Fast Loader", PC]),
+       AC = new Set(gC.x),
+       xC = [
+         [1, 0, 0],
+         [-1, 0, 0],
+         [0, 0, 1],
+         [0, 0, -1],
+         [0, 1, 0],
+         [0, -1, 0]
+       ];
```

#### 20. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L834-L836` → after: `L243-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L243-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L243-L245) · [Before (L834-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L834-L836)

```diff
-     function xe(kk, ek) {
-       for (var ik = arguments.length, Dk = new Array(ik > 2 ? ik - 2 : 0), fk = 2; fk < ik; fk++) Dk[fk - 2] = arguments[fk];
-       return [Ke, kk[0], kk[1], kk[2], ek, ...Dk].join(" ")
+     function JC(CC) {
+       var zC, ZC;
+       return null !== (zC = null === (ZC = QC.g[CC]) || void 0 === ZC ? void 0 : ZC.meta.rootName) && void 0 !== zC ? zC : ""
```

#### 21. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L877-L882` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L249) · [Before (L877-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L877-L882)

```diff
-       return {
-         input: je,
-         inputAmount: 1,
-         output: kk,
-         outputAmount: 1
-       }
+       return JC(CC) === gC.j && (0, gC.R)(QC.g[CC].name)
```

#### 22. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L884-L16005` → after: `L251-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L251-L252) · [Before (L884-L16005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L884-L16005)

```diff
-     const Ve = "baf2synth",
-       Fe = ["Burner Drill", "Crusher", "Smelter", "Generator", "Press", "Wire Mill", "Alloy Kiln", "Electric Drill", "Assembler", "Tree Cutter", "Volt Engine", "Deep Drill", "Shatter Mill", "Sky Tap", "Crystal Vat", "Recycler", "Crop Harvester", "Condenser", "Centrifuge", "Synthe … [truncated]
-       ue = ["Raw Porkchop", "Raw Beef", "Raw Mutton", "Raw Venison"],
-       qe = ["Cooked Porkchop", "Steak", "Cooked Mutton", "Cooked Venison"],
-       Ie = function(kk, ek) {
-         return {
-           input: kk,
-           inputAmount: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
-           output: ek,
-           outputAmount: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
-           bonus: arguments.length > 4 ? arguments[4] : void 0
-         }
-       },
-       ze = function(kk, ek) {
-         return {
-           ...Ie(kk, ek, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1),
- ... (15106 more removed lines; see GitHub link above)
+     var iC = ZC(9235),
+       vC = ZC(9260);
```

#### 23. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16015-L16380` → after: `L260-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L260-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L260-L266) · [Before (L16015-L16380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16015-L16380)

```diff
-     function pl(kk) {
-       return kk.endsWith(" Ore")
-     }
-     const yl = {
-         mode: null,
-         detail: null,
-         next: null,
-         nextState: null
-       },
-       Yl = [],
-       Ll = {
-         info: null,
-         visible: !1,
-         tool: null,
-         live: null,
-         wrench: yl,
- ... (350 more removed lines; see GitHub link above)
+     function hC(CC) {
+       var zC, ZC;
+       const wC = null === (zC = QC.g[CC]) || void 0 === zC ? void 0 : zC.meta;
+       return (null === wC || void 0 === wC ? void 0 : wC.rootName) !== vC.q ? null : {
+         rot: null !== (ZC = wC.rot) && void 0 !== ZC ? ZC : 1,
+         half: (0, vC.h)(wC.rootName, wC.metaStr)
+       }
```

#### 24. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16383-L16384` → after: `L269-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L269-L270) · [Before (L16383-L16384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16383-L16384)

```diff
-     function Ql(kk, ek, ik) {
-       return `${kk},${ek},${ik}`
+     function KC(CC, zC, ZC, QC) {
+       return hC(CC(zC, ZC, QC))
```

#### 25. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16387-L16402` → after: `L273-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L273-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L273-L279) · [Before (L16387-L16402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16387-L16402)

```diff
-     function vl(kk) {
-       const ek = kk.split("|")[0];
-       if (!Mi(ek)) return ul;
-       const ik = ve[ek];
-       if (ii(ik)) return ql;
-       const Dk = Iw(kk);
-       return Di(ik) ? [
-         [-Dk[0], -Dk[1], -Dk[2]]
-       ] : Vf(ik) ? function(kk, ek) {
-         const ik = kk[0] - 2 * ek[0],
-           Dk = kk[2] - 2 * ek[2],
-           fk = [];
-         for (let Sk = -1; Sk <= 1; Sk++)
-           for (let ek = -1; ek <= 1; ek++) fk.push([ik + Sk, kk[1], Dk + ek]);
-         return fk
-       }([0, 0, 0], Dk) : ul
+     function YC(CC, zC, ZC, QC, wC) {
+       let {
+         rot: bC,
+         half: nC
+       } = wC;
+       const [fC, oC] = (0, vC.n)(bC, nC), qC = KC(CC, zC + fC, ZC, QC + oC);
+       return null !== qC && qC.rot === bC && qC.half === vC.u[nC]
```

#### 26. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16404-L16407` → after: `L281-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L281-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L281-L282) · [Before (L16404-L16407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16404-L16407)

```diff
-     const El = [.5, .5, .5],
-       hl = [.2, .8, .3],
-       al = [.45, 1, .5];
-     class Wl {
+     var dC = ZC(38256);
+     const mC = [new class {
```

#### 27. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16409` → after: `L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L284) · [Before (L16409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16409)

```diff
-         this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
+         this.reshapeOffsets = MC
```

#### 28. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16411-L16418` → after: `L286-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L286-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L286-L288) · [Before (L16411-L16418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16411-L16418)

```diff
-       index(kk) {
-         this.indexed = !0;
-         for (const ek of Fe)
-           for (const ik of Il(ek)) {
-             const ek = kk.blockNameToBlockId(ik, !0),
-               Dk = vl(ik);
-             null !== ek && Dk.length > 0 && (this.offsetsList.push(Dk), this.offsetsIndexById[ek] = this.offsetsList.length)
-           }
+       handles(CC) {
+         var zC;
+         return "Stairs" === (null === (zC = QC.g[CC]) || void 0 === zC ? void 0 : zC.model)
```

#### 29. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16420-L16455` → after: `L290-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L290-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L290-L291) · [Before (L16420-L16455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16420-L16455)

```diff
-       onAfterRender(kk, ek) {
-         this.indexed || this.index(kk);
-         const ik = performance.now();
-         if (ik - this.lastCheckMs < 100) return;
-         this.lastCheckMs = ik, this.checks++;
-         const Dk = AU.g.oU,
-           [fk, Sk, bk] = zl(ek, Dk);
-         let rk = !1;
-         const Pk = [];
-         let mk = 0;
-         for (let Mk = fk - 2; Mk <= fk + 2; Mk++)
-           for (let ek = Sk - 1; ek <= Sk + 1; ek++)
-             for (let fk = bk - 2; fk <= bk + 2; fk++) {
-               const Sk = mk++,
-                 bk = Ql(Mk, ek, fk),
-                 Kk = kk.getChunkVersion(Mk, ek, fk);
- ... (20 more removed lines; see GitHub link above)
+       affects(CC) {
+         return this.handles(CC)
```

#### 30. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16457-L16458` → after: `L293-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L293-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L293-L297) · [Before (L16457-L16458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16457-L16458)

```diff
-       dispose(kk) {
-         this.clearMeshes(kk), this.chunks.clear(), this.cellChunks.clear(), this.shownKey = ""
+       shape(CC, zC, ZC, wC, bC) {
+         const nC = this.stairsOf(bC),
+           fC = this.cornerAt(CC, zC, ZC, wC, nC),
+           qC = nC.half === oC.c.top ? "top" : "bot";
+         return (0, QC.k)(`${QC.g[bC].meta.rootName}|meta|rot${nC.rot}|${qC}${null===fC?"":`|${fC}`}`)
```

#### 31. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16460-L16477` → after: `L299-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L299-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L299-L306) · [Before (L16460-L16477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16460-L16477)

```diff
-       scanDue(kk, ek) {
-         const ik = Math.max(ek.findIndex((kk => {
-           let {
-             slot: ek
-           } = kk;
-           return ek >= this.scanFrom
-         })), 0);
-         let Dk = 96;
-         for (let fk = 0; fk < ek.length; fk++) {
-           const {
-             slot: Sk,
-             entry: bk,
-             origin: rk
-           } = ek[(ik + fk) % ek.length];
-           if (Dk -= this.scan(kk, bk, rk), Dk <= 0) {
-             this.scanFrom = Sk + 1;
- ... (2 more removed lines; see GitHub link above)
+       stairsOf(CC) {
+         const {
+           rot: zC,
+           halfblockPlacement: ZC
+         } = QC.g[CC].meta;
+         return {
+           rot: zC,
+           half: ZC
```

#### 32. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16517-L16536` → after: `L309-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L309-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L309-L311) · [Before (L16517-L16536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16517-L16536)

```diff
-       refresh(kk) {
-         const ek = function(kk, ek) {
-             const ik = new Set,
-               Dk = [];
-             for (const {
-                 pos: fk,
-                 offsets: Sk
-               }
-               of kk)
-               for (const [kk, bk, rk] of Sk) {
-                 const Sk = fk[0] + kk,
-                   Pk = fk[1] + bk,
-                   mk = fk[2] + rk,
-                   Mk = `${Sk},${Pk},${mk}`;
-                 ik.has(Mk) || (ik.add(Mk), ek(Sk, Pk, mk) && Dk.push([Sk, Pk, mk]))
-               }
- ... (4 more removed lines; see GitHub link above)
+       stairsAt(CC, zC, ZC, QC) {
+         const wC = CC(zC, ZC, QC);
+         return this.handles(wC) ? this.stairsOf(wC) : null
```

#### 33. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16538-L16553` → after: `L313-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L313-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L313-L334) · [Before (L16538-L16553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16538-L16553)

```diff
-       build(kk, ek, ik) {
-         const Dk = ek[0],
-           fk = [],
-           Sk = [];
-         for (const [bk, rk, Pk] of ek)(0, Fl.b)(fk, Sk, [bk - Dk[0] + .5, rk - Dk[1] + .5, Pk - Dk[2] + .5], El, ik);
-         return kk.createGameMesh({
-           positions: fk,
-           indices: Sk
-         }, {
-           rgb: ik ? al : hl,
-           alpha: .4
-         }, Dk)
-       }
-       clearMeshes(kk) {
-         for (const ek of this.meshes) kk.disposeGameMesh(ek);
-         this.meshes = []
+       cornerAt(CC, zC, ZC, QC, wC) {
+         let {
+           rot: bC,
+           half: nC
+         } = wC;
+         const fC = qC[bC],
+           oC = wC => {
+             let [fC, oC] = wC;
+             const qC = this.stairsAt(CC, zC + fC, ZC, QC + oC);
+             return null !== qC && qC.rot === bC && qC.half === nC
+           },
+           MC = this.stairsAt(CC, zC + fC[0], ZC, QC + fC[1]);
+         if (null !== MC && MC.half === nC) {
+           const CC = qC[MC.rot];
+           if (NC(fC, CC) && !oC([-CC[0], -CC[1]])) return WC(CC, FC(fC)) ? "outerLeft" : "outerRight"
+         }
+ ... (6 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16555-L16577` → after: `L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L336) · [Before (L16555-L16577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16555-L16577)

```diff
-     }
-     const tl = 1 / .6,
-       Xl = 200,
-       Bl = {
-         colours: [
-           [127, 233, 255],
-           [180, 140, 255]
-         ],
-         life: [.12, .22],
-         size: [.12, .2],
-         perBlock: 3
-       },
-       cl = {
-         colours: [
-           [120, 255, 150],
-           [200, 255, 120]
- ... (7 more removed lines; see GitHub link above)
+     }, new class {
```

#### 35. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16579-L16583` → after: `L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L338) · [Before (L16579-L16583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16579-L16583)

```diff
-         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bl;
-         this.style = kk, this.particles = null, this.points = new Float32Array(800), this.budget = Xl, this.lastMs = 0
-       }
-       static blade() {
-         return new ol(cl)
+         this.reshapeOffsets = bC, this.rootIds = new Set(wC.f.map((CC => (0, QC.k)(CC))))
```

#### 36. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16585-L16587` → after: `L340-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L340-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L340-L343) · [Before (L16585-L16587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16585-L16587)

```diff
-       Gy(kk, ek) {
-         const ik = Math.min(ek.arcStruck, ek.arcPoints.length);
-         this.draw(kk, [ek.arcFrom, ...ek.arcPoints], ek.arcPoints.slice(0, ik))
+       handles(CC) {
+         var zC;
+         const ZC = null === (zC = QC.g[CC]) || void 0 === zC ? void 0 : zC.meta;
+         return void 0 !== ZC && this.rootIds.has(ZC.rootId)
```

#### 37. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16589-L16595` → after: `L345-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L345-L346) · [Before (L16589-L16595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16589-L16595)

```diff
-       onBlade(kk, ek) {
-         const [ik, Dk, fk] = ek.bladeCentre, [Sk, bk] = ek.bladeFacing, rk = ik - 1.5 * Sk, Pk = fk - 1.5 * bk, mk = Math.atan2(bk, Sk), Mk = [];
-         for (let Kk = 0; Kk <= 8; Kk++) {
-           const kk = mk - Tl / 2 + Tl * Kk / 8;
-           Mk.push([rk + 2.5 * Math.cos(kk), Dk, Pk + 2.5 * Math.sin(kk)])
-         }
-         this.draw(kk, Mk, ek.bladeStruck)
+       affects(CC) {
+         return this.handles(CC)
```

#### 38. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16597-L16599` → after: `L348-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L348-L349) · [Before (L16597-L16599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16597-L16599)

```diff
-       dispose() {
-         var kk;
-         null === (kk = this.particles) || void 0 === kk || kk.stop(), this.particles = null
+       placedBy(CC) {
+         return QC.g[CC].meta.rootName === wC.j ? null : wC.j
```

#### 39. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16601-L16618` → after: `L351-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L351-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L351-L356) · [Before (L16601-L16618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16601-L16618)

```diff
-       draw(kk, ek, ik) {
-         if (!kk.particlesEnabled() || ek.length < 2) return;
-         const Dk = performance.now();
-         this.budget = Math.min(Xl, this.budget + (Dk - this.lastMs) / 1e3 * Xl), this.lastMs = Dk;
-         const fk = [];
-         let Sk = 0,
-           bk = ek[0];
-         for (const lk of ek.slice(1)) {
-           const kk = Math.min(48, Math.round(Math.hypot(lk[0] - bk[0], lk[1] - bk[1], lk[2] - bk[2]) * this.style.perBlock));
-           fk.push([bk, lk, kk]), Sk += kk, bk = lk
-         }
-         const rk = ik.length;
-         Sk += 10 * rk;
-         const Pk = Sk > this.budget ? this.budget / Sk : 1;
-         if (0 === Sk || Pk * Sk < 1) return;
-         const mk = ek[0],
- ... (2 more removed lines; see GitHub link above)
+       shape(CC, zC, ZC, bC, nC) {
+         const {
+           rootId: fC,
+           rootName: oC,
+           rot: qC
+         } = QC.g[nC].meta;
```

#### 40. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16620-L16624` → after: `L358-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L358-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L358-L359) · [Before (L16620-L16624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16620-L16624)

```diff
-         const Hk = (kk, ek, ik, Dk) => {
-           const fk = 4 * Uk;
-           nk[fk] = kk - Mk, nk[fk + 1] = ek - Kk, nk[fk + 2] = ik - xk, nk[fk + 3] = Dk, Uk++
-         };
-         fk.forEach(((kk, ek) => {
+         return wC.q[qC].forEach(((wC, nC) => {
+           var oC;
```

#### 41. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16626-L16678` → after: `L361-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L361-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L361-L363) · [Before (L16626-L16678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16626-L16678)

```diff
-           const Sk = Math.min(Math.floor(fk * Pk), Xl - Uk),
-             bk = Math.hypot(Dk[0] - ik[0], Dk[1] - ik[1], Dk[2] - ik[2]),
-             rk = 0 === ek && bk > 0 ? Math.min(.5, .1 * bk) / bk : 0;
-           for (let Pk = 0; Pk < Sk; Pk++) {
-             const kk = rk + (Pk + .5) / Sk * (1 - rk);
-             Hk(ik[0] + (Dk[0] - ik[0]) * kk, ik[1] + (Dk[1] - ik[1]) * kk, ik[2] + (Dk[2] - ik[2]) * kk, .15)
-           }
-         }));
-         const wk = Math.floor(10 * Pk);
-         for (let lk = 0; lk < rk; lk++) {
-           const [kk, ek, Dk] = ik[lk];
-           for (let ik = 0; ik < wk && Uk < Xl; ik++) Hk(kk, ek, Dk, 2.5)
-         }
-         this.budget -= Uk, this.particles ??= kk.createParticles(function(kk) {
-           const [ek, ik] = kk.colours;
-           return {
- ... (37 more removed lines; see GitHub link above)
+           const gC = null === (oC = QC.g[CC(zC + WC, ZC + NC, bC + MC)]) || void 0 === oC ? void 0 : oC.meta;
+           (null === gC || void 0 === gC ? void 0 : gC.rootId) === fC && gC.rot === qC && (FC |= 1 << nC)
+         })), (0, QC.k)((0, wC.c)(oC, qC, FC))
```

#### 42. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16680-L16685` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L365) · [Before (L16680-L16685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16680-L16685)

```diff
-       isNewPress(kk) {
-         const ek = kk - this.lastTapAt >= 300;
-         return this.lastTapAt = kk, ek
-       }
-     }
-     class Gl {
+     }, ...nC.e.map((CC => new fC.d(CC))), new class {
```

#### 43. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16687-L16694` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L367) · [Before (L16687-L16694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16687-L16694)

```diff
-         this.presses = new gl, this.predicted = null
-       }
-       tap(kk, ek) {
-         const ik = this.presses.isNewPress(ek);
-         return ik && (this.predicted = {
-           station: kk,
-           at: ek
-         }), ik
+         this.reshapeOffsets = xC
```

#### 44. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16696-L16698` → after: `L369-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L369-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L369-L371) · [Before (L16696-L16698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16696-L16698)

```diff
-       consumeServerOpen(kk, ek) {
-         const ik = this.predicted;
-         return !(null === ik || ik.station !== kk || ek - ik.at > 2e3) && (this.predicted = null, !0)
+       handles(CC) {
+         const zC = JC(CC);
+         return GC.has(zC) || zC === gC.j
```

#### 45. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16700-L16703` → after: `L373-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L373-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L373-L375) · [Before (L16700-L16703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16700-L16703)

```diff
-     }
-     class Nl {
-       constructor() {
-         this.thrustAt = -1 / 0
+       affects(CC) {
+         const zC = JC(CC);
+         return RC.has(zC) || AC.has(zC) || zC === pC || zC === gC.j || void 0 !== gC.b[zC]
```

#### 46. `bundles/bloxd.io/chunks/js/241.js` (Changed code · before: `L16705-L16706` → after: `L377-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-6d5c4259fa7b594f7cdea93ee2be8715d030ce5aaee43e860b85e3b3b5a85dc5) · [After (L377-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/241.js#L377-L411) · [Before (L16705-L16706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/241.js#L16705-L16706)

```diff
-       lit(kk, ek) {
-         return kk && (this.thrustAt = ek), ek - this.thrustAt < 200
+       shape(CC, zC, ZC, wC, bC, nC) {
+         const {
+           rootName: fC,
+           rot: oC
+         } = QC.g[bC].meta;
+         return fC === gC.j ? nC ? bC : function(CC, zC, ZC, wC, bC) {
+           const [nC, fC] = gC.f[bC - 1];
+           for (let oC = 1; oC <= gC.H; oC++) {
+             const [qC, FC] = [zC - nC * oC, wC - fC * oC], WC = CC(qC, ZC, FC);
+             if (JC(WC) === gC.j && QC.g[WC].meta.rot === bC && SC(zC, ZC, wC, qC, FC)) return (0, QC.k)((0, gC.Y)(bC, !IC(WC)))
+           }
+           return (0, QC.k)((0, gC.Y)(bC, !1))
+         }(CC, zC, ZC, wC, oC) : (0, QC.k)((0, gC.L)(fC, oC, function(CC, zC, ZC, wC, bC) {
+           const [nC, fC] = gC.f[bC - 1], oC = (bC, nC) => function(CC, zC, ZC) {
+             var wC;
+             const bC = null === (wC = QC.g[CC]) || void 0 === wC ? void 0 : wC.meta;
+ ... (19 more added lines; see GitHub link above)
```
