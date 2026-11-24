# Changed — Bundle Modifications Report (Part 024 / 069)

- **Updated at**: `2026-11-25T01:02 JST`
- **Part**: `24 / 69` (**257** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 023](part-023.md) · [Part 025 →](part-025.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/303.js` (w4ddu.56408518 → sn3sfj.2522680a · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/303.js` (222 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405)

#### 152. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2448-L2453` → after: `L3366-L3377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3366-L3377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3366-L3377) · [Before (L2448-L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L2448-L2453)

```diff
-       setYawPitchRoll(CC, zC, ZC) {
-         let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-           wC = arguments.length > 4 ? arguments[4] : void 0;
-         if (0 === QC) {
-           const nC = cC._TmpQuat;
-           return bC.f.RotationYawPitchRollToRef(CC, zC, ZC, nC), void this.setRotationQuaternion(nC, QC, wC)
+ 
+       function yO(pp, ip, cp, Op, op, Ip) {
+         Ip ?? (Ip = Ac);
+         let Sp = 0,
+           xp = 0;
+         const Lp = pp.length,
+           Yp = ip.length;
+         let Dp = !1;
+         for (; Sp < Lp && xp < Yp;) {
+           const Lp = pp[Sp],
+             Yp = ip[xp],
+             Ap = cp(Lp, Yp); - 1 === Ap ? (Op(Lp), Sp++, Dp = !0) : 1 === Ap ? (op(Yp), xp++, Dp = !0) : (Ip(Yp, Lp), Sp++, xp++)
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2455-L2458` → after: `L3379-L3381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3379-L3381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3379-L3381) · [Before (L2455-L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L2455-L2458)

```diff
-         const nC = cC._TmpMats[0];
-         if (!this._getAbsoluteInverseMatrixUnscaledToRef(nC, wC)) return;
-         const fC = cC._TmpMats[1];
-         bC.b.RotationYawPitchRollToRef(CC, zC, ZC, fC), nC.multiplyToRef(fC, fC), this._rotateWithMatrix(fC, QC, wC)
+         for (; Sp < Lp;) Op(pp[Sp++]), Dp = !0;
+         for (; xp < Yp;) op(ip[xp++]), Dp = !0;
+         return Dp
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2460-L2464` → after: `L3383-L3386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3383-L3386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3383-L3386) · [Before (L2460-L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L2460-L2464)

```diff
-       rotate(CC, zC) {
-         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-           QC = arguments.length > 3 ? arguments[3] : void 0;
-         const wC = cC._TmpMats[0];
-         wC.setTranslationFromFloats(0, 0, 0), bC.b.RotationAxisToRef(CC, zC, wC), this._rotateWithMatrix(wC, ZC, QC)
+ 
+       function UO(pp) {
+         const ip = [];
+         return wO(pp, ip, void 0, 0), ip
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2466-L2471` → after: `L3388-L3392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3388-L3392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3388-L3392) · [Before (L2466-L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L2466-L2471)

```diff
-       setAxisAngle(CC, zC) {
-         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-           QC = arguments.length > 3 ? arguments[3] : void 0;
-         if (0 === ZC) {
-           const wC = cC._TmpQuat;
-           return bC.f.RotationAxisToRef(CC, zC, wC), void this.setRotationQuaternion(wC, ZC, QC)
+ 
+       function wO(pp, ip, cp, Op) {
+         for (const op of pp[Op]) {
+           let Ip;
+           cp ? (Ip = cp.slice(), Ip.push(op)) : Ip = [op], Op === pp.length - 1 ? ip.push(Ip) : wO(pp, ip, Ip, Op + 1)
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2483-L2497` → after: `L3395-L3401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3395-L3401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3395-L3401) · [Before (L2483-L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L2483-L2497)

```diff
-       setRotationQuaternion(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           ZC = arguments.length > 2 ? arguments[2] : void 0;
-         if (0 === zC) return this._decompose(), this._localRotation.Av(CC), void this._markAsDirtyAndCompose();
-         const QC = cC._TmpMats[0];
-         if (!this._getAbsoluteInverseMatrixUnscaledToRef(QC, ZC)) return;
-         const wC = cC._TmpMats[1];
-         bC.b.FromQuaternionToRef(CC, wC), QC.multiplyToRef(wC, wC), this._rotateWithMatrix(wC, zC, ZC)
-       }
-       setRotationMatrix(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           ZC = arguments.length > 2 ? arguments[2] : void 0;
-         if (0 === zC) {
-           const QC = cC._TmpQuat;
-           return bC.f.FromRotationMatrixToRef(CC, QC), void this.setRotationQuaternion(QC, zC, ZC)
+ 
+       function vO(pp, ip) {
+         if (void 0 !== pp) {
+           const cp = pp.length;
+           let Op = 0;
+           for (; Op < cp && ip(pp[Op]);) Op++;
+           return pp.slice(0, Op)
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2504-L2534` → after: `L3404-L3410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3404-L3410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3404-L3410) · [Before (L2504-L2534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L2504-L2534)

```diff
-       _rotateWithMatrix(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           ZC = arguments.length > 2 ? arguments[2] : void 0;
-         const QC = this.getLocalMatrix(),
-           wC = QC.m[12],
-           bC = QC.m[13],
-           nC = QC.m[14],
-           fC = this.getParent(),
-           oC = cC._TmpMats[3],
-           qC = cC._TmpMats[4];
-         fC && 1 == zC ? (ZC ? (oC.Av(ZC.getWorldMatrix()), fC.getAbsoluteMatrix().multiplyToRef(oC, oC)) : oC.Av(fC.getAbsoluteMatrix()), qC.Av(oC), qC.invert(), QC.multiplyToRef(oC, QC), QC.multiplyToRef(CC, QC), QC.multiplyToRef(qC, QC)) : 1 == zC && ZC ? (oC.Av(ZC.getWorldMatr … [truncated]
-       }
-       _getAbsoluteInverseMatrixUnscaledToRef(CC, zC) {
-         const ZC = cC._TmpMats[2];
-         return CC.Av(this.getAbsoluteMatrix()), zC ? (CC.multiplyToRef(zC.getWorldMatrix(), CC), bC.b.ScalingToRef(zC.sq.x, zC.sq.y, zC.sq.z, ZC)) : bC.b.IdentityToRef(ZC), CC.invert(), !isNaN(CC.m[0]) && (ZC.multiplyAtIndex(0, this._scalingDeterminant), CC.multiplyToRef(ZC, CC), … [truncated]
-       }
- ... (15 more removed lines; see GitHub link above)
+ 
+       function tO(pp, ip) {
+         if (void 0 !== pp) {
+           const cp = pp.length;
+           let Op = 0;
+           for (; Op < cp && ip(pp[Op]);) Op++;
+           return pp.slice(Op)
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2537-L2543` → after: `L3413-L3415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3413-L3415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3413-L3415) · [Before (L2537-L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L2537-L2543)

```diff
-       getAbsolutePosition() {
-         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
-         const zC = bC.r.Zero();
-         return this.getPositionToRef(1, CC, zC), zC
-       }
-       getAbsolutePositionToRef(CC, zC) {
-         this.getPositionToRef(1, CC, zC)
+ 
+       function HO() {
+         return "undefined" !== typeof process && !!process.nextTick && !process.browser && !0
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2545-L2550` → after: `L3417-L3422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3417-L3422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3417-L3422) · [Before (L2545-L2550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L2545-L2550)

```diff
-       computeAbsoluteMatrices() {
-         if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
-         else {
-           this._absoluteMatrix.Av(this._localMatrix);
-           const CC = this._skeleton.getPoseMatrix();
-           CC && this._absoluteMatrix.multiplyToRef(CC, this._absoluteMatrix)
+       var dO, eO = (pp => (pp[pp.Off = 0] = "Off", pp[pp.Error = 1] = "Error", pp[pp.Warning = 2] = "Warning", pp[pp.Info = 3] = "Info", pp[pp.Verbose = 4] = "Verbose", pp))(eO || {});
+       (pp => {
+         let ip = 0;
+ 
+         function cp(ip) {
+           return pp.currentLogLevel <= ip
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2552-L2596` → after: `L3424-L3426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3424-L3426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3424-L3426) · [Before (L2552-L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L2552-L2596)

```diff
-         const CC = this.children,
-           zC = CC.length;
-         for (let ZC = 0; ZC < zC; ZC++) CC[ZC].computeAbsoluteMatrices()
-       }
-       computeAbsoluteTransforms() {
-         this.computeAbsoluteMatrices()
-       }
-       yB(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-         const ZC = bC.r.Zero();
-         return this.getDirectionToRef(CC, zC, ZC), ZC
-       }
-       getDirectionToRef(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           ZC = arguments.length > 2 ? arguments[2] : void 0;
-         const QC = cC._TmpMats[0].Av(this.getAbsoluteMatrix());
- ... (29 more removed lines; see GitHub link above)
+ 
+         function Op(ip, Op) {
+           pp.loggingHost && cp(ip) && pp.loggingHost.log(ip, Op)
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2598-L2612` → after: `L3428-L3430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3428-L3430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3428-L3430) · [Before (L2598-L2612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L2598-L2612)

```diff
-       }
-       getRotationMatrix() {
-         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           zC = arguments.length > 1 ? arguments[1] : void 0;
-         const ZC = bC.b.Identity();
-         return this.getRotationMatrixToRef(CC, zC, ZC), ZC
-       }
-       getRotationMatrixToRef() {
-         let CC = arguments.length > 1 ? arguments[1] : void 0,
-           zC = arguments.length > 2 ? arguments[2] : void 0;
-         if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(zC);
-         else {
-           const ZC = cC._TmpMats[0],
-             QC = this.getAbsoluteMatrix();
-           CC ? QC.multiplyToRef(CC.getWorldMatrix(), ZC) : ZC.Av(QC), ZC.multiplyAtIndex(0, this._scalingDeterminant), ZC.multiplyAtIndex(1, this._scalingDeterminant), ZC.multiplyAtIndex(2, this._scalingDeterminant), ZC.getRotationMatrixToRef(zC)
+ 
+         function op(pp) {
+           Op(3, pp)
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L2614-L3176` → after: `L3432-L3445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3432-L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3432-L3445) · [Before (L2614-L3176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L2614-L3176)

```diff
-       }
-       getAbsolutePositionFromLocal(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-         const ZC = bC.r.Zero();
-         return this.getAbsolutePositionFromLocalToRef(CC, zC, ZC), ZC
-       }
-       getAbsolutePositionFromLocalToRef(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           ZC = arguments.length > 2 ? arguments[2] : void 0;
-         const QC = cC._TmpMats[0].Av(this.getAbsoluteMatrix());
-         zC && QC.multiplyToRef(zC.getWorldMatrix(), QC), bC.r.TransformCoordinatesToRef(CC, QC, ZC)
-       }
-       getLocalPositionFromAbsolute(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-         const ZC = bC.r.Zero();
-         return this.getLocalPositionFromAbsoluteToRef(CC, zC, ZC), ZC
- ... (547 more removed lines; see GitHub link above)
+         var Ip;
+         pp.currentLogLevel = 2, pp.isDebugging = !1, pp.shouldLog = cp, pp.log = op, (Ip = op = pp.log || (pp.log = {})).error = function(pp) {
+           Op(1, pp)
+         }, Ip.warn = function(pp) {
+           Op(2, pp)
+         }, Ip.log = function(pp) {
+           Op(3, pp)
+         }, Ip.trace = function(pp) {
+           Op(4, pp)
+         };
+         const Sp = {};
+ 
+         function xp(pp) {
+           return ip >= pp
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3178-L3210` → after: `L3447-L3452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3447-L3452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3447-L3452) · [Before (L3178-L3210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3178-L3210)

```diff
-         this._rampGradientsTexture = fC.b.CreateRGBATexture(CC, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
-       }
-       getRampGradients() {
-         return this._rampGradients
-       }
-       forceRefreshGradients() {
-         this._syncRampGradientTexture()
-       }
-       _syncRampGradientTexture() {
-         this._rampGradients && (this._rampGradients.sort(((CC, zC) => CC.gradient < zC.gradient ? -1 : CC.gradient > zC.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
-       }
-       addRampGradient(CC, zC) {
-         this._rampGradients || (this._rampGradients = []);
-         const ZC = new QC.f(CC, zC);
-         return this._rampGradients.push(ZC), this._syncRampGradientTexture(), this
-       }
- ... (17 more removed lines; see GitHub link above)
+ 
+         function Lp(ip, cp) {
+           return !!xp(ip) || (Sp[cp] = {
+             level: ip,
+             assertion: pp[cp]
+           }, pp[cp] = Ac, !1)
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3212-L3219` → after: `L3454-L3457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3454-L3457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3454-L3457) · [Before (L3212-L3219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3212-L3219)

```diff
-         return 0 === this._colorGradients.length && (this._colorCreation.process = jC, this._colorProcessing.process = BC), this
-       }
-       resetDrawCache() {
-         if (this._drawWrappers) {
-           for (const CC of this._drawWrappers)
-             if (CC)
-               for (const zC of CC) zC?.dispose();
-           this._drawWrappers = []
+ 
+         function Yp(pp, ip) {
+           const cp = new Error(pp ? `Debug Failure. ${pp}` : "Debug Failure.");
+           throw Error.captureStackTrace && Error.captureStackTrace(cp, ip || Yp), cp
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3221-L3254` → after: `L3459-L3461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3459-L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3459-L3461) · [Before (L3221-L3254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3221-L3254)

```diff
-       }
-       _fetchR(CC, zC, ZC, QC, wC) {
-         return wC[4 * (((CC = .5 * Math.abs(CC) + .5) * ZC % ZC | 0) + ((zC = .5 * Math.abs(zC) + .5) * QC % QC | 0) * ZC)] / 255
-       }
-       _reset() {
-         this._resetEffect()
-       }
-       _resetEffect() {
-         this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayO … [truncated]
-       }
-       _createVertexBuffers() {
-         this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertex … [truncated]
-         const CC = this._engine,
-           zC = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
-         this._vertexData = new Float32Array(this._capacity * zC), this._vertexBuffer = new nC.c(CC, this._vertexData, !0, zC);
-         let ZC = 0;
- ... (18 more removed lines; see GitHub link above)
+ 
+         function Dp(pp, ip, cp, Op) {
+           pp || (ip = ip ? `False expression: ${ip}` : "False expression.", cp && (ip += "\r\nVerbose Debug Information: " + ("string" === typeof cp ? cp : cp())), Yp(ip, Op || Dp))
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3256-L3296` → after: `L3463-L3465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3463-L3465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3463-L3465) · [Before (L3256-L3296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3256-L3296)

```diff
-         let oC;
-         if (this._useInstancing) {
-           const zC = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
-           this._spriteBuffer = new nC.c(CC, zC, !1, 2), oC = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
-         } else oC = this._vertexBuffer.createVertexBuffer("offset", ZC, 2, this._vertexBufferSize, this._useInstancing);
-         this._vertexBuffers.offset = oC, this.resetDrawCache()
-       }
-       _createIndexBuffer() {
-         if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
-         const CC = [],
-           zC = [];
-         let ZC = 0;
-         for (let QC = 0; QC < this._capacity; QC++) CC.push(ZC), CC.push(ZC + 1), CC.push(ZC + 2), CC.push(ZC), CC.push(ZC + 2), CC.push(ZC + 3), zC.push(ZC, ZC + 1, ZC + 1, ZC + 2, ZC + 2, ZC + 3, ZC + 3, ZC, ZC, ZC + 3), ZC += 4;
-         this._indexBuffer = this._engine.createIndexBuffer(CC), this._linesIndexBuffer = this._engine.createIndexBuffer(zC)
-       }
-       getCapacity() {
- ... (25 more removed lines; see GitHub link above)
+ 
+         function Ap(pp, ip, cp) {
+           void 0 !== pp && null !== pp || Yp(ip, cp || Ap)
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3298-L3317` → after: `L3467-L3469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3467-L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3467-L3469) · [Before (L3298-L3317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3298-L3317)

```diff
-         this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
-       }
-       stop() {
-         let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(CC))
-       }
-       _postStop(CC) {}
-       reset() {
-         this._stockParticles.length = 0, this._particles.length = 0
-       }
-       _appendParticleVertex(CC, zC, ZC, QC) {
-         let wC = CC * this._vertexBufferSize;
-         const nC = bC.j.Eg[0].Av(this._scene?.floatingOriginOffset || bC.r.ZeroReadOnly);
-         if (this._vertexData[wC++] = zC.position.x + this.worldOffset.x - nC.x, this._vertexData[wC++] = zC.position.y + this.worldOffset.y - nC.y, this._vertexData[wC++] = zC.position.z + this.worldOffset.z - nC.z, this._vertexData[wC++] = zC.color.r, this._vertexData[wC++] = zC … [truncated]
-         else if (zC._properties.initialDirection) {
-           let CC = zC._properties.initialDirection;
- ... (4 more removed lines; see GitHub link above)
+ 
+         function Pp(pp, ip, cp) {
+           for (const Op of pp) Ap(Op, ip, cp || Pp)
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3319-L3328` → after: `L3471-L3474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3471-L3474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3471-L3474) · [Before (L3319-L3328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3319-L3328)

```diff
-         this._useRampGradients && zC.remapData && (this._vertexData[wC++] = zC.remapData.x, this._vertexData[wC++] = zC.remapData.y, this._vertexData[wC++] = zC.remapData.z, this._vertexData[wC++] = zC.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 ===  … [truncated]
-       }
-       _prepareParticle(CC) {}
-       _createNewOnes(CC) {
-         let zC;
-         for (let ZC = 0; ZC < CC && this._particles.length !== this._capacity; ZC++) {
-           zC = this._createParticle(), this._particles.push(zC);
-           let CC = this._createQueueStart;
-           for (; CC;) CC.process(zC, this), CC = CC.nextItem;
-           zC._inheritParticleInfoToSubEmitters()
+ 
+         function Wp(pp) {
+           let ip = arguments.length > 2 ? arguments[2] : void 0;
+           return Yp(`${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Illegal value:"} ${"object"===typeof pp&&Qi(pp,"kind")&&Qi(pp,"pos")?"SyntaxKind: "+dp(pp.kind):JSON.stringify(pp)}`, ip || Wp)
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3330-L3366` → after: `L3476-L3486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3476-L3486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3476-L3486) · [Before (L3330-L3366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3330-L3366)

```diff
-       }
-       _update(CC) {
-         if (this._alive = this._particles.length > 0, this.emitter.position) {
-           const CC = this.emitter;
-           this._emitterWorldMatrix = CC.getWorldMatrix()
-         } else {
-           const CC = this.emitter;
-           this._emitterWorldMatrix = bC.b.Translation(CC.x, CC.y, CC.z)
-         }
-         this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(CC)
-       }
-       static _GetAttributeNamesOrOptions() {
-         let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         const QC = [nC.k.PositionKind, nC.k.ColorKind, "angle", "offset", "size"];
- ... (21 more removed lines; see GitHub link above)
+ 
+         function yp(pp) {}
+ 
+         function Up(pp) {
+           if ("function" !== typeof pp) return "";
+           if (Qi(pp, "name")) return pp.name;
+           {
+             const ip = Function.prototype.toString.call(pp),
+               cp = /^function\s+([\w$]+)\s*\(/.exec(ip);
+             return cp ? cp[1] : ""
+           }
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3368-L3394` → after: `L3488-L3789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3488-L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3488-L3789) · [Before (L3368-L3394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3368-L3394)

```diff
-         ZC && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), CC.push(this._imageProcessingConfigurationDefines.toString()))
-       }
-       fillUniformsAttributesAndSamplerNames(CC, zC, ZC) {
-         zC.push(...mz._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), CC.push(...mz._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDep … [truncated]
-       }
-       _getWrapper(CC) {
-         var zC;
-         const ZC = this._getCustomDrawWrapper(CC);
-         if (ZC?.effect) return ZC;
-         const QC = [];
-         this.fillDefines(QC, CC);
-         const bC = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
-           nC = dz.e._PrepareStringDefines(bC, QC),
-           fC = nC ? dz.e.GetConfiguration(bC) : void 0;
-         let oC = this._drawWrappers[bC];
-         oC || (oC = this._drawWrappers[bC] = [], 0 === bC || this._renderPassObserver || (this._renderPassObserver = ((zC = this._engine)._onReleaseRenderPassObservable ?? (zC._onReleaseRenderPassObservable = new wC.d)).add((CC => {
- ... (11 more removed lines; see GitHub link above)
+ 
+         function wp() {
+           let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+             ip = arguments.length > 2 ? arguments[2] : void 0;
+           const cp = function(pp) {
+             const ip = tp.get(pp);
+             if (ip) return ip;
+             const cp = [];
+             for (const op in pp) {
+               const ip = pp[op];
+               "number" === typeof ip && cp.push([ip, op])
+             }
+             const Op = Ui(cp, ((pp, ip) => qc(pp[0], ip[0])));
+             return tp.set(pp, Op), Op
+           }(arguments.length > 1 ? arguments[1] : void 0);
+           if (0 === pp) return cp.length > 0 && 0 === cp[0][0] ? cp[0][1] : "0";
+ ... (286 more added lines; see GitHub link above)
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3396-L3407` → after: `L3791-L3996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3791-L3996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3791-L3996) · [Before (L3396-L3407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3396-L3407)

```diff
-             ZC = [];
-           this.fillUniformsAttributesAndSamplerNames(zC, CC, ZC), nC && (zC.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== fC?.defines.PREPASS_LOCAL_POSITION_INDEX && zC.push("inverseEmitterWM", "geometryWorldOffset")), qC.s … [truncated]
-             attributes: CC,
-             uniformsNames: zC,
-             samplers: ZC,
-             defines: FC,
-             shaderLanguage: this._shaderLanguage,
-             multiTarget: nC,
-             indexParameters: nC ? {
-               buffersCount: fC?._mrtCount ?? 0
-             } : void 0
-           }, this._engine), FC)
+             Yp = [],
+             Dp = Up(pp, new Set);
+           for (const kp of Lp) kp.text = Hp(kp.flowNode, kp.circular), vp(kp);
+           const Ap = function pp(ip) {
+               let cp = 0;
+               for (const Op of Wp(ip)) cp = Math.max(cp, pp(Op));
+               return cp + 1
+             }(Dp),
+             Pp = function(pp) {
+               const ip = ep(Array(pp), 0);
+               for (const cp of Lp) ip[cp.level] = Math.max(ip[cp.level], cp.text.length);
+               return ip
+             }(Ap);
+           return function pp(ip, cp) {
+               if (-1 === ip.lane) {
+                 ip.lane = cp, ip.endLane = cp;
+ ... (190 more added lines; see GitHub link above)
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3409-L3420` → after: `L3998-L4106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R3998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L3998-L4106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L3998-L4106) · [Before (L3409-L3420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3409-L3420)

```diff
-         return qC
-       }
-       _bindGeometryRendering(CC) {
-         const zC = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
-           ZC = dz.e.GetConfiguration(zC);
-         if (!ZC?._defines) return;
-         CC.setFloat("objectId", 0), CC.setInt("meshBlendTag", 0);
-         const QC = this._scene?.activeCamera;
-         if (CC.setFloat2("cameraInfo", QC?.minZ ?? 0, QC?.maxZ ?? 1), this.isLocal && void 0 !== ZC.defines.PREPASS_LOCAL_POSITION_INDEX) {
-           CC.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
-           const zC = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || bC.r.ZeroReadOnly, bC.j.Eg[0]);
-           CC.setVector3("geometryWorldOffset", zC)
+         pp.DebugTypeMapper = Tp, pp.attachDebugPrototypeIfDebug = function(ip) {
+           return pp.isDebugging ? Object.setPrototypeOf(ip, Tp.prototype) : ip
+         }, pp.printControlFlowGraph = function(pp) {
+           return console.log(fp(pp))
+         }, pp.formatControlFlowGraph = fp
+       })(dO || (dO = {}));
+       var uO = /^(0|[1-9]\d*)(?:\.(0|[1-9]\d*)(?:\.(0|[1-9]\d*)(?:-([a-z0-9-.]+))?(?:\+([a-z0-9-.]+))?)?)?$/i,
+         jO = /^(?:0|[1-9]\d*|[a-z-][a-z0-9-]*)(?:\.(?:0|[1-9]\d*|[a-z-][a-z0-9-]*))*$/i,
+         kO = /^(?:0|[1-9]\d*|[a-z-][a-z0-9-]*)$/i,
+         mO = /^[a-z0-9-]+(?:\.[a-z0-9-]+)*$/i,
+         RO = /^[a-z0-9-]+$/i,
+         qO = /^(?:0|[1-9]\d*)$/,
+         MO = class pp {
+           constructor(pp) {
+             let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+               cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+ ... (93 more added lines; see GitHub link above)
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3423-L3429` → after: `L4109-L4111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4109-L4111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4109-L4111) · [Before (L3423-L3429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3423-L3429)

```diff
-       animate() {
-         let CC, zC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         if (this._started && !this.paused) {
-           if (!zC && this._scene) {
-             if (!this.isReady()) return;
-             if (this._currentRenderId === this._scene.getFrameId()) return;
-             this._currentRenderId = this._scene.getFrameId()
+       var XO = class pp {
+           constructor(pp) {
+             this._alternatives = pp ? dO.checkDefined(TO(pp), "Invalid range spec.") : Yp
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3431-L3434` → after: `L4113-L4118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4113-L4118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4113-L4118) · [Before (L3431-L3434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3431-L3434)

```diff
-           if (this._scaledUpdateSpeed = this.updateSpeed * (zC ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) CC = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
-           else {
-             const zC = this._calculateEmitRate();
-             CC = zC * this._scaledUpdateSpeed | 0, this._newPartsExcess += zC * this._scaledUpdateSpeed - CC
+           static tryParse(ip) {
+             const cp = TO(ip);
+             if (cp) {
+               const ip = new pp("");
+               return ip._alternatives = cp, ip
+             }
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3436-L3466` → after: `L4120-L4153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4120-L4153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4120-L4153) · [Before (L3436-L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3436-L3466)

```diff
-           if (this._newPartsExcess > 1 && (CC += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? CC = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopD … [truncated]
-             let CC = 0;
-             for (let zC = 0; zC < this._particles.length; zC++) {
-               const ZC = this._particles[zC];
-               this._appendParticleVertices(CC, ZC), CC += this._useInstancing ? 1 : 4
-             }
-             if (this._vertexBuffer)
-               if (this._useFixedCapacityForSnapshot) {
-                 const CC = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
-                   zC = this._particles.length;
-                 zC < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, zC * CC, this._fixedCapacityHighWaterMark * CC), this._fixedCapacityHighWaterMark = zC, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
-               } else this._vertexBuffer.updateDirectly(this._vertexData, 0, this._particles.length)
-           }
-           0 === this.manualEmitCount && this.disposeOnStop && this.stop()
-         }
-       }
- ... (15 more removed lines; see GitHub link above)
+           test(pp) {
+             return "string" === typeof pp && (pp = new CO(pp)),
+               function(pp, ip) {
+                 if (0 === ip.length) return !0;
+                 for (const cp of ip)
+                   if (FO(pp, cp)) return !0;
+                 return !1
+               }(pp, this._alternatives)
+           }
+           toString() {
+             return Xp(this._alternatives, GO).join(" || ") || "*"
+           }
+         },
+         lO = /\|\|/,
+         QO = /\s+/,
+         JO = /^([x*0]|[1-9]\d*)(?:\.([x*0]|[1-9]\d*)(?:\.([x*0]|[1-9]\d*)(?:-([a-z0-9-.]+))?(?:\+([a-z0-9-.]+))?)?)?$/i,
+ ... (18 more added lines; see GitHub link above)
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3470-L3474` → after: `L4157-L4167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4157-L4167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4157-L4167) · [Before (L3470-L3474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3470-L3474)

```diff
-       _appendParticleVertices(CC, zC) {
-         this._appendParticleVertex(CC++, zC, 0, 0), this._useInstancing || (this._appendParticleVertex(CC++, zC, 1, 0), this._appendParticleVertex(CC++, zC, 1, 1), this._appendParticleVertex(CC, zC, 0, 1))
-       }
-       rebuild() {
-         this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
+ 
+       function fO(pp) {
+         const ip = JO.exec(pp);
+         if (!ip) return;
+         const [, cp, Op = "*", op = "*", Ip, Sp] = ip;
+         return {
+           version: new CO(aO(cp) ? 0 : parseInt(cp, 10), aO(cp) || aO(Op) ? 0 : parseInt(Op, 10), aO(cp) || aO(Op) || aO(op) ? 0 : parseInt(op, 10), Ip, Sp),
+           major: cp,
+           minor: Op,
+           patch: op
+         }
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3476-L3477` → after: `L4169-L4174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4169-L4174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4169-L4174) · [Before (L3476-L3477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3476-L3477)

```diff
-       async _initShaderSourceAsync() {
-         this._engine.isWebGPU && !mz.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([ZC.e(346).then((() => ZC(60966))), ZC.e(340).then((() => ZC(60972)))])) : await Promise.all([ZC.e(329).then((() => ZC(60981))), Promise.all([ZC.e(322), ZC.e(356)]).then((() => ZC(60987) … [truncated]
+ 
+       function bO(pp, ip, cp) {
+         const Op = fO(pp);
+         if (!Op) return !1;
+         const op = fO(ip);
+         return !!op && (aO(Op.major) || cp.push(nO(">=", Op.version)), aO(op.major) || cp.push(aO(op.minor) ? nO("<", op.version.increment("major")) : aO(op.patch) ? nO("<", op.version.increment("minor")) : nO("<=", op.version)), !0)
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3479-L3486` → after: `L4176-L4217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4176-L4217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4176-L4217) · [Before (L3479-L3486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3479-L3486)

```diff
-       isReady() {
-         if (!this._shadersLoaded) return !1;
-         if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
-         if (this.blendMode !== JC.BLENDMODE_MULTIPLYADD) {
-           if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
-         } else {
-           if (!this._getWrapper(JC.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
-           if (!this._getWrapper(JC.BLENDMODE_ADD).effect.isReady()) return !1
+ 
+       function hO(pp, ip, cp) {
+         const Op = fO(ip);
+         if (!Op) return !1;
+         const {
+           version: op,
+           major: Ip,
+           minor: Sp,
+           patch: xp
+         } = Op;
+         if (aO(Ip)) "<" !== pp && ">" !== pp || cp.push(nO("<", CO.zero));
+         else switch (pp) {
+           case "~":
+             cp.push(nO(">=", op)), cp.push(nO("<", op.increment(aO(Sp) ? "major" : "minor")));
+             break;
+           case "^":
+ ... (26 more added lines; see GitHub link above)
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3490-L3513` → after: `L4221-L4229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4221-L4229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4221-L4229) · [Before (L3490-L3513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3490-L3513)

```diff
-       _render(CC) {
-         const zC = this._getWrapper(CC),
-           ZC = zC.effect,
-           QC = this._engine;
-         QC.enableEffect(zC);
-         const wC = this.defaultViewMatrix ?? this._scene.getViewMatrix();
-         ZC.setTexture("diffuseSampler", this.particleTexture), ZC.setMatrix("view", wC);
-         const nC = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
-         if (ZC.setMatrix("projection", nC), this._isAnimationSheetEnabled && this.particleTexture) {
-           const CC = this.particleTexture.getBaseSize();
-           ZC.setFloat3("particlesInfos", this.spriteCellWidth / CC.width, this.spriteCellHeight / CC.height, this.spriteCellWidth / CC.width)
-         }
-         if (ZC.setVector2("translationPivot", this.translationPivot), ZC.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
-           const CC = this._scene.activeCamera;
-           ZC.setVector3("eyePosition", CC.globalPosition)
-         }
- ... (8 more removed lines; see GitHub link above)
+ 
+       function aO(pp) {
+         return "*" === pp || "x" === pp || "X" === pp
+       }
+ 
+       function nO(pp, ip) {
+         return {
+           operator: pp,
+           operand: ip
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3517-L3556` → after: `L4232-L4236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4232-L4236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4232-L4236) · [Before (L3517-L3556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3517-L3556)

```diff
-       render() {
-         if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
-         const CC = this._engine;
-         let zC;
-         return CC.setState && (CC.setState(!1), this.forceDepthWrite && CC.setDepthWrite(!0)), zC = this.blendMode === JC.BLENDMODE_MULTIPLYADD ? this._render(JC.BLENDMODE_MULTIPLY) + this._render(JC.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttrib … [truncated]
-       }
-       _onDispose() {}
-       dispose() {
-         let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
-           zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), … [truncated]
-           const CC = this._scene.Ix.indexOf(this);
-           CC > -1 && this._scene.Ix.splice(CC, 1), this._scene._activeParticleSystems.dispose()
-         }
-         this.Tm.notifyObservers(this), this.Tm.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
- ... (24 more removed lines; see GitHub link above)
+ 
+       function FO(pp, ip) {
+         for (const cp of ip)
+           if (!gO(pp, cp.operator, cp.operand)) return !1;
+         return !0
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3558-L3645` → after: `L4238-L4253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4238-L4253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4238-L4253) · [Before (L3558-L3645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3558-L3645)

```diff
-       serialize() {
-         let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const zC = {};
-         return zC.type = this.type, zC.inheritDirection = this.inheritDirection, zC.inheritedVelocityAmount = this.inheritedVelocityAmount, zC.particleSystem = this.particleSystem.serialize(CC), zC
-       }
-       static _ParseParticleSystem(CC, zC, ZC) {
-         throw (0, XC.i)("ParseParticle")
-       }
-       static Parse(CC, zC, ZC) {
-         const QC = CC.particleSystem,
-           wC = new lz(lz._ParseParticleSystem(QC, zC, ZC, !0));
-         return wC.type = CC.type, wC.inheritDirection = CC.inheritDirection, wC.inheritedVelocityAmount = CC.inheritedVelocityAmount, wC.particleSystem._isSubEmitter = !0, wC
-       }
-       dispose() {
-         this.particleSystem.dispose()
-       }
- ... (72 more removed lines; see GitHub link above)
+ 
+       function gO(pp, ip, cp) {
+         const Op = pp.compareTo(cp);
+         switch (ip) {
+           case "<":
+             return Op < 0;
+           case "<=":
+             return Op <= 0;
+           case ">":
+             return Op > 0;
+           case ">=":
+             return Op >= 0;
+           case "=":
+             return 0 === Op;
+           default:
+             return dO.assertNever(ip)
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3648-L3649` → after: `L4256-L4258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4256-L4258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4256-L4258) · [Before (L3648-L3649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3648-L3649)

```diff
-       get source() {
-         return this._source
+ 
+       function GO(pp) {
+         return Xp(pp, rO).join(" ")
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3651-L3652` → after: `L4260-L4262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4260-L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4260-L4262) · [Before (L3651-L3652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3651-L3652)

```diff
-       get isNodeGenerated() {
-         return null !== this._source
+ 
+       function rO(pp) {
+         return `${pp.operator}${pp.operand}`
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3654-L3655` → after: `L4264-L4294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4264-L4294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4264-L4294) · [Before (L3654-L3655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3654-L3655)

```diff
-       get flowMap() {
-         return this._flowMap
+       var ZO = function() {
+           const pp = function() {
+             if (HO()) try {
+               const {
+                 performance: pp
+               } = cp(41653);
+               if (pp) return {
+                 shouldWriteNativeEvents: !1,
+                 performance: pp
+               }
+             } catch {}
+             if ("object" === typeof performance) return {
+               shouldWriteNativeEvents: !0,
+               performance: performance
+             }
+           }();
+ ... (15 more added lines; see GitHub link above)
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3657-L3665` → after: `L4296-L4300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4296-L4300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4296-L4300) · [Before (L3657-L3665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3657-L3665)

```diff
-       set flowMap(CC) {
-         this._flowMap !== CC && (this._flowMap = CC, this._flowMapUpdate && (Yz(this._flowMapUpdate), this._flowMapUpdate = null), CC && (this._flowMapUpdate = {
-           process: CC => {
-             const zC = this.Km()?.getTransformMatrix();
-             this._flowMap._processParticle(CC, this.flowMapStrength * this._tempScaledUpdateSpeed, zC)
-           },
-           previousItem: null,
-           nextItem: null
-         }, Kz(this._flowMapUpdate, this._directionProcessing)))
+       var KO, VO, po = zO ? () => zO.now() : Date.now,
+         io = {};
+ 
+       function co(pp, ip, cp, Op) {
+         return pp ? Oo(ip, cp, Op) : So
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3667-L3670` → after: `L4302-L4307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4302-L4307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4302-L4307) · [Before (L3667-L3670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3667-L3670)

```diff
-       addAttractor(CC) {
-         super.addAttractor(CC), 1 === this._attractors.length && (this._attractorUpdate = {
-           process: CC => {
-             for (const zC of this._attractors) zC._processParticle(CC, this)
+ 
+       function Oo(pp, ip, cp) {
+         let Op = 0;
+         return {
+           enter: function() {
+             1 === ++Op && Po(ip)
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3672-L3674` → after: `L4309-L4312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4309-L4312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4309-L4312) · [Before (L3672-L3674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3672-L3674)

```diff
-           previousItem: null,
-           nextItem: null
-         }, Kz(this._attractorUpdate, this._directionProcessing))
+           exit: function() {
+             0 === --Op ? (Po(cp), Wo(pp, ip, cp)) : Op < 0 && dO.fail("enter/exit count does not match.")
+           }
+         }
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3676-L3677` → after: `L4314-L4344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4314-L4344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4314-L4344) · [Before (L3676-L3677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3676-L3677)

```diff
-       removeAttractor(CC) {
-         super.removeAttractor(CC), 0 === this._attractors.length && this._attractorUpdate && Yz(this._attractorUpdate)
+       op(io, {
+         clearMarks: () => Ho,
+         clearMeasures: () => to,
+         createTimer: () => Oo,
+         createTimerIf: () => co,
+         disable: () => jo,
+         enable: () => uo,
+         forEachMark: () => vo,
+         forEachMeasure: () => wo,
+         getCount: () => yo,
+         getDuration: () => Uo,
+         isEnabled: () => eo,
+         mark: () => Po,
+         measure: () => Wo,
+         nullTimer: () => So
+       });
+ ... (15 more added lines; see GitHub link above)
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3679-L3681` → after: `L4346-L4353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4346-L4353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4346-L4353) · [Before (L3679-L3681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3679-L3681)

```diff
-       start() {
-         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
-         this.canStart() && super.start(CC)
+ 
+       function Wo(pp, ip, cp) {
+         if (xo) {
+           const Op = (void 0 !== cp ? Yo.get(cp) : void 0) ?? po(),
+             op = (void 0 !== ip ? Yo.get(ip) : void 0) ?? Lo,
+             Ip = Ao.get(pp) || 0;
+           Ao.set(pp, Ip + (Op - op)), null == VO || VO.measure(pp, ip, cp)
+         }
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3683-L3685` → after: `L4355-L4357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4355-L4357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4355-L4357) · [Before (L3683-L3685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3683-L3685)

```diff
-       _prepareSubEmitterInternalArray() {
-         if (this._subEmitters = new Array, this.subEmitters)
-           for (const CC of this.subEmitters) CC instanceof jz ? this._subEmitters.push([new lz(CC)]) : CC instanceof lz ? this._subEmitters.push([CC]) : CC instanceof Array && this._subEmitters.push(CC)
+ 
+       function yo(pp) {
+         return Do.get(pp) || 0
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3687-L3691` → after: `L4359-L4361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4359-L4361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4359-L4361) · [Before (L3687-L3691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3687-L3691)

```diff
-       _stopSubEmitters() {
-         if (this.activeSubSystems) {
-           for (const CC of this.activeSubSystems) CC.stop(!0);
-           this.activeSubSystems = []
-         }
+ 
+       function Uo(pp) {
+         return Ao.get(pp) || 0
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3693-L3695` → after: `L4363-L4365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4363-L4365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4363-L4365) · [Before (L3693-L3695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3693-L3695)

```diff
-       _removeFromRoot() {
-         if (!this._rootParticleSystem) return;
-         const CC = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== CC && this._rootParticleSystem.activeSubSystems.splice(CC, 1), this._rootParticleSystem = null
+ 
+       function wo(pp) {
+         Ao.forEach(((ip, cp) => pp(cp, ip)))
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3697-L3698` → after: `L4367-L4369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4367-L4369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4367-L4369) · [Before (L3697-L3698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3697-L3698)

```diff
-       _preStart() {
-         this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
+ 
+       function vo(pp) {
+         Yo.forEach(((ip, cp) => pp(cp)))
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3700-L3701` → after: `L4371-L4373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4371-L4373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4371-L4373) · [Before (L3700-L3701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3700-L3701)

```diff
-       _postStop(CC) {
-         CC && this._stopSubEmitters()
+ 
+       function to(pp) {
+         void 0 !== pp ? Ao.delete(pp) : Ao.clear(), null == VO || VO.clearMeasures(pp)
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3703-L3712` → after: `L4375-L4377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4375-L4377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4375-L4377) · [Before (L3703-L3712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3703-L3712)

```diff
-       _prepareParticle(CC) {
-         if (this._subEmitters && this._subEmitters.length > 0) {
-           const zC = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
-           CC._properties.attachedSubEmitters = [];
-           for (const ZC of zC)
-             if (0 === ZC.type) {
-               const zC = ZC.clone();
-               CC._properties.attachedSubEmitters.push(zC), zC.particleSystem.start()
-             }
-         }
+ 
+       function Ho(pp) {
+         void 0 !== pp ? (Do.delete(pp), Yo.delete(pp)) : (Do.clear(), Yo.clear()), null == VO || VO.clearMarks(pp)
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3714-L3728` → after: `L4379-L4387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4379-L4387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4379-L4387) · [Before (L3714-L3728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3714-L3728)

```diff
-       _onDispose() {
-         let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), CC && this.particles)
-           for (const ZC of this.particles)
-             if (ZC._properties.attachedSubEmitters)
-               for (let CC = ZC._properties.attachedSubEmitters.length - 1; CC >= 0; CC -= 1) ZC._properties.attachedSubEmitters[CC].dispose();
-         if (zC && this.activeSubSystems)
-           for (let ZC = this.activeSubSystems.length - 1; ZC >= 0; ZC -= 1) this.activeSubSystems[ZC].dispose();
-         if (this._subEmitters && this._subEmitters.length) {
-           for (let CC = 0; CC < this._subEmitters.length; CC++)
-             for (const zC of this._subEmitters[CC]) zC.dispose();
-           this._subEmitters = [], this.subEmitters = []
-         }
-         this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
+ 
+       function eo() {
+         return xo
+       }
+ 
+       function uo() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RS;
+         var ip;
+         return xo || (xo = !0, KO || (KO = sO()), (null == KO ? void 0 : KO.performance) && (Lo = KO.performance.timeOrigin, (KO.shouldWriteNativeEvents || (null == (ip = null == pp ? void 0 : pp.cpuProfilingEnabled) ? void 0 : ip.call(pp)) || (null == pp ? void 0 : pp.debugMode) … [truncated]
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3730` → after: `L4389-L4395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4389-L4395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4389-L4395) · [Before (L3730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3730)

```diff
-       static _Parse(CC, zC, ZC, QC) {
+ 
+       function jo() {
+         xo && (Yo.clear(), Do.clear(), Ao.clear(), VO = void 0, xo = !1)
+       }(pp => {
+         let ip, Op, op = 0,
+           Ip = 0;
+         const Sp = [];
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3732-L3782` → after: `L4397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4397) · [Before (L3732-L3782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3732-L3782)

```diff
-         wC = ZC instanceof Xz.b ? null : ZC;
-         const nC = (0, Ez.c)("BABYLON.Texture");
-         if (nC && wC)
-           if (CC.texture) zC.particleTexture = nC.Parse(CC.texture, wC, QC);
-           else if (CC.textureName) {
-           const ZC = CC.textureSettings;
-           if (zC.particleTexture = new nC(QC + CC.textureName, wC, !1, void 0 === CC.invertY || CC.invertY, ZC ? ZC.samplingMode : void 0), zC.particleTexture.name = CC.textureName, ZC) {
-             const CC = zC.particleTexture;
-             for (const zC of Dz) void 0 !== ZC[zC] && (CC[zC] = ZC[zC])
-           }
-         }
-         if (CC.emitterId || 0 === CC.emitterId || void 0 !== CC.emitter ? (CC.emitterId || 0 === CC.emitterId) && wC ? (zC.emitter = wC.getLastMeshById(CC.emitterId), zC.emitter || (zC.emitter = bC.r.Zero())) : zC.emitter = bC.r.FromArray(CC.emitter) : zC.emitter = bC.r.Zero(), z … [truncated]
-           for (let ZC = 0; ZC < CC.animations.length; ZC++) {
-             const QC = CC.animations[ZC],
-               wC = (0, Ez.c)("BABYLON.Animation");
-             wC && zC.animations.push(wC.Parse(QC))
- ... (35 more removed lines; see GitHub link above)
+         const Lp = [];
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3784-L3847` → after: `L4399-L4404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4399-L4404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4399-L4404) · [Before (L3784-L3847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3784-L3847)

```diff
-         if (CC.particleEmitterType) {
-           switch (CC.particleEmitterType.type) {
-             case "SphereParticleEmitter":
-               fC = new pC;
-               break;
-             case "SphereDirectedParticleEmitter":
-               fC = new PC;
-               break;
-             case "ConeEmitter":
-             case "ConeParticleEmitter":
-               fC = new RC;
-               break;
-             case "ConeDirectedParticleEmitter":
-               fC = new AC;
-               break;
-             case "CylinderParticleEmitter":
- ... (48 more removed lines; see GitHub link above)
+         var Dp;
+         pp.startTracing = function(Yp, Dp, Ap) {
+           if (dO.assert(!oo, "Tracing already started"), void 0 === ip) try {
+             ip = cp(41659)
+           } catch (wp) {
+             throw new Error(`tracing requires having fs\n(original error: ${wp.message||wp})`)
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3849-L3859` → after: `L4406-L4594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4406-L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4406-L4594) · [Before (L3849-L3859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3849-L3859)

```diff
-         return jz._Parse(CC, NC, zC, ZC), CC.textureMask && (NC.textureMask = FC.g.FromArray(CC.textureMask)), CC.worldOffset && (NC.worldOffset = bC.r.FromArray(CC.worldOffset)), CC.preventAutoStart && (NC.preventAutoStart = CC.preventAutoStart), CC.metadata && (NC.metadata = CC … [truncated]
-       }
-       serialize() {
-         let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const zC = {};
-         if (jz._Serialize(zC, this, CC), zC.textureMask = this.textureMask.VZC(), zC.customShader = this.customShader, zC.preventAutoStart = this.preventAutoStart, zC.worldOffset = this.worldOffset.VZC(), this.metadata && (zC.metadata = this.metadata), this.subEmitters) {
-           zC.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
-           for (const ZC of this._subEmitters) {
-             const QC = [];
-             for (const zC of ZC) zC.particleSystem.doNotSerialize || QC.push(zC.serialize(CC));
-             zC.subEmitters.push(QC)
+           Op = Yp, Sp.length = 0, void 0 === xp && (xp = cx(Dp, "legend.json")), ip.existsSync(Dp) || ip.mkdirSync(Dp, {
+             recursive: !0
+           });
+           const Pp = "build" === Op ? `.${process.pid}-${++op}` : "server" === Op ? `.${process.pid}` : "",
+             Wp = cx(Dp, `trace${Pp}.json`),
+             yp = cx(Dp, `types${Pp}.json`);
+           Lp.push({
+             configFilePath: Ap,
+             tracePath: Wp,
+             typesPath: yp
+           }), Ip = ip.openSync(Wp, "w"), oo = pp;
+           const Up = {
+             cat: "__metadata",
+             ph: "M",
+             ts: 1e3 * po(),
+             pid: 1,
+ ... (173 more added lines; see GitHub link above)
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3862-L3864` → after: `L4597-L4598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4597-L4598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4597-L4598) · [Before (L3862-L3864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3862-L3864)

```diff
-         if (this._attractors && this._attractors.length) {
-           zC.attractors = [];
-           for (const CC of this._attractors) zC.attractors.push(CC.serialize())
+         pp.dumpLegend = function() {
+           xp && ip.writeFileSync(xp, JSON.stringify(Lp))
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3866` → after: `L4600-L4655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4600-L4655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4600-L4655) · [Before (L3866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3866)

```diff
-         return zC
+       })(Io || (Io = {}));
+       var ko = Io.startTracing,
+         mo = Io.dumpLegend,
+         Ro = (pp => (pp[pp.Unknown = 0] = "Unknown", pp[pp.EndOfFileToken = 1] = "EndOfFileToken", pp[pp.SingleLineCommentTrivia = 2] = "SingleLineCommentTrivia", pp[pp.MultiLineCommentTrivia = 3] = "MultiLineCommentTrivia", pp[pp.NewLineTrivia = 4] = "NewLineTrivia", pp[pp.White … [truncated]
+         qo = (pp => (pp[pp.None = 0] = "None", pp[pp.Let = 1] = "Let", pp[pp.Const = 2] = "Const", pp[pp.Using = 4] = "Using", pp[pp.AwaitUsing = 6] = "AwaitUsing", pp[pp.NestedNamespace = 8] = "NestedNamespace", pp[pp.Synthesized = 16] = "Synthesized", pp[pp.Namespace = 32] = "N … [truncated]
+         Mo = (pp => (pp[pp.None = 0] = "None", pp[pp.Public = 1] = "Public", pp[pp.Private = 2] = "Private", pp[pp.Protected = 4] = "Protected", pp[pp.Readonly = 8] = "Readonly", pp[pp.Override = 16] = "Override", pp[pp.Export = 32] = "Export", pp[pp.Abstract = 64] = "Abstract",  … [truncated]
+         Co = (pp => (pp[pp.None = 0] = "None", pp[pp.IntrinsicNamedElement = 1] = "IntrinsicNamedElement", pp[pp.IntrinsicIndexedElement = 2] = "IntrinsicIndexedElement", pp[pp.IntrinsicElement = 3] = "IntrinsicElement", pp))(Co || {}),
+         Eo = (pp => (pp[pp.None = 0] = "None", pp[pp.Succeeded = 1] = "Succeeded", pp[pp.Failed = 2] = "Failed", pp[pp.ReportsUnmeasurable = 8] = "ReportsUnmeasurable", pp[pp.ReportsUnreliable = 16] = "ReportsUnreliable", pp[pp.ReportsMask = 24] = "ReportsMask", pp[pp.ComplexityO … [truncated]
+         Xo = (pp => (pp[pp.None = 0] = "None", pp[pp.Always = 1] = "Always", pp[pp.Never = 2] = "Never", pp[pp.Sometimes = 3] = "Sometimes", pp))(Xo || {}),
+         Qo = (pp => (pp[pp.None = 0] = "None", pp[pp.Auto = 1] = "Auto", pp[pp.Loop = 2] = "Loop", pp[pp.Unique = 3] = "Unique", pp[pp.Node = 4] = "Node", pp[pp.KindMask = 7] = "KindMask", pp[pp.ReservedInNestedScopes = 8] = "ReservedInNestedScopes", pp[pp.Optimistic = 16] = "Opt … [truncated]
+         Jo = (pp => (pp[pp.None = 0] = "None", pp[pp.HasIndices = 1] = "HasIndices", pp[pp.Global = 2] = "Global", pp[pp.IgnoreCase = 4] = "IgnoreCase", pp[pp.Multiline = 8] = "Multiline", pp[pp.DotAll = 16] = "DotAll", pp[pp.Unicode = 32] = "Unicode", pp[pp.UnicodeSets = 64] = " … [truncated]
+         Bo = (pp => (pp[pp.None = 0] = "None", pp[pp.PrecedingLineBreak = 1] = "PrecedingLineBreak", pp[pp.PrecedingJSDocComment = 2] = "PrecedingJSDocComment", pp[pp.Unterminated = 4] = "Unterminated", pp[pp.ExtendedUnicodeEscape = 8] = "ExtendedUnicodeEscape", pp[pp.Scientific  … [truncated]
+         No = (pp => (pp[pp.Unreachable = 1] = "Unreachable", pp[pp.Start = 2] = "Start", pp[pp.BranchLabel = 4] = "BranchLabel", pp[pp.LoopLabel = 8] = "LoopLabel", pp[pp.Assignment = 16] = "Assignment", pp[pp.TrueCondition = 32] = "TrueCondition", pp[pp.FalseCondition = 64] = "F … [truncated]
+         To = (pp => (pp[pp.ExpectError = 0] = "ExpectError", pp[pp.Ignore = 1] = "Ignore", pp))(To || {}),
+         fo = class {},
+         bo = (pp => (pp[pp.RootFile = 0] = "RootFile", pp[pp.SourceFromProjectReference = 1] = "SourceFromProjectReference", pp[pp.OutputFromProjectReference = 2] = "OutputFromProjectReference", pp[pp.Import = 3] = "Import", pp[pp.ReferenceFile = 4] = "ReferenceFile", pp[pp.TypeR … [truncated]
+ ... (40 more added lines; see GitHub link above)
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3868-L3874` → after: `L4657-L4813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4657-L4813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4657-L4813) · [Before (L3868-L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3868-L3874)

```diff
-       static _Serialize(CC, zC, ZC) {
-         if (CC.name = zC.name, CC.id = zC.id, CC.HW = zC.getCapacity(), CC.disposeOnStop = zC.disposeOnStop, CC.manualEmitCount = zC.manualEmitCount, zC.emitter.position) {
-           const ZC = zC.emitter;
-           CC.emitterId = ZC.id
-         } else {
-           const ZC = zC.emitter;
-           CC.emitter = ZC.VZC()
+       var kI = (pp => (pp[pp.Classic = 1] = "Classic", pp[pp.NodeJs = 2] = "NodeJs", pp[pp.Node10 = 2] = "Node10", pp[pp.Node16 = 3] = "Node16", pp[pp.NodeNext = 99] = "NodeNext", pp[pp.Bundler = 100] = "Bundler", pp))(kI || {}),
+         mI = (pp => (pp[pp.Legacy = 1] = "Legacy", pp[pp.Auto = 2] = "Auto", pp[pp.Force = 3] = "Force", pp))(mI || {}),
+         RI = (pp => (pp[pp.FixedPollingInterval = 0] = "FixedPollingInterval", pp[pp.PriorityPollingInterval = 1] = "PriorityPollingInterval", pp[pp.DynamicPriorityPolling = 2] = "DynamicPriorityPolling", pp[pp.FixedChunkSizePolling = 3] = "FixedChunkSizePolling", pp[pp.UseFsEven … [truncated]
+         qI = (pp => (pp[pp.UseFsEvents = 0] = "UseFsEvents", pp[pp.FixedPollingInterval = 1] = "FixedPollingInterval", pp[pp.DynamicPriorityPolling = 2] = "DynamicPriorityPolling", pp[pp.FixedChunkSizePolling = 3] = "FixedChunkSizePolling", pp))(qI || {}),
+         MI = (pp => (pp[pp.FixedInterval = 0] = "FixedInterval", pp[pp.PriorityInterval = 1] = "PriorityInterval", pp[pp.DynamicPriority = 2] = "DynamicPriority", pp[pp.FixedChunkSize = 3] = "FixedChunkSize", pp))(MI || {}),
+         CI = (pp => (pp[pp.None = 0] = "None", pp[pp.CommonJS = 1] = "CommonJS", pp[pp.AMD = 2] = "AMD", pp[pp.UMD = 3] = "UMD", pp[pp.System = 4] = "System", pp[pp.ES2015 = 5] = "ES2015", pp[pp.ES2020 = 6] = "ES2020", pp[pp.ES2022 = 7] = "ES2022", pp[pp.ESNext = 99] = "ESNext",  … [truncated]
+         EI = (pp => (pp[pp.None = 0] = "None", pp[pp.Preserve = 1] = "Preserve", pp[pp.React = 2] = "React", pp[pp.ReactNative = 3] = "ReactNative", pp[pp.ReactJSX = 4] = "ReactJSX", pp[pp.ReactJSXDev = 5] = "ReactJSXDev", pp))(EI || {}),
+         XI = (pp => (pp[pp.Remove = 0] = "Remove", pp[pp.Preserve = 1] = "Preserve", pp[pp.Error = 2] = "Error", pp))(XI || {}),
+         lI = (pp => (pp[pp.CarriageReturnLineFeed = 0] = "CarriageReturnLineFeed", pp[pp.LineFeed = 1] = "LineFeed", pp))(lI || {}),
+         QI = (pp => (pp[pp.Unknown = 0] = "Unknown", pp[pp.JS = 1] = "JS", pp[pp.JSX = 2] = "JSX", pp[pp.TS = 3] = "TS", pp[pp.TSX = 4] = "TSX", pp[pp.External = 5] = "External", pp[pp.JSON = 6] = "JSON", pp[pp.Deferred = 7] = "Deferred", pp))(QI || {}),
+         JI = (pp => (pp[pp.ES3 = 0] = "ES3", pp[pp.ES5 = 1] = "ES5", pp[pp.ES2015 = 2] = "ES2015", pp[pp.ES2016 = 3] = "ES2016", pp[pp.ES2017 = 4] = "ES2017", pp[pp.ES2018 = 5] = "ES2018", pp[pp.ES2019 = 6] = "ES2019", pp[pp.ES2020 = 7] = "ES2020", pp[pp.ES2021 = 8] = "ES2021", p … [truncated]
+         BI = (pp => (pp[pp.Standard = 0] = "Standard", pp[pp.JSX = 1] = "JSX", pp))(BI || {}),
+         NI = (pp => (pp[pp.None = 0] = "None", pp[pp.Recursive = 1] = "Recursive", pp))(NI || {}),
+         TI = (pp => (pp[pp.EOF = -1] = "EOF", pp[pp.nullCharacter = 0] = "nullCharacter", pp[pp.maxAsciiCharacter = 127] = "maxAsciiCharacter", pp[pp.lineFeed = 10] = "lineFeed", pp[pp.carriageReturn = 13] = "carriageReturn", pp[pp.lineSeparator = 8232] = "lineSeparator", pp[pp.p … [truncated]
+         fI = (pp => (pp.Ts = ".ts", pp.Tsx = ".tsx", pp.Dts = ".d.ts", pp.Js = ".js", pp.Jsx = ".jsx", pp.Json = ".json", pp.TsBuildInfo = ".tsbuildinfo", pp.Mjs = ".mjs", pp.Mts = ".mts", pp.Dmts = ".d.mts", pp.Cjs = ".cjs", pp.Cts = ".cts", pp.Dcts = ".d.cts", pp))(fI || {}),
+         bI = (pp => (pp[pp.None = 0] = "None", pp[pp.ContainsTypeScript = 1] = "ContainsTypeScript", pp[pp.ContainsJsx = 2] = "ContainsJsx", pp[pp.ContainsESNext = 4] = "ContainsESNext", pp[pp.ContainsES2022 = 8] = "ContainsES2022", pp[pp.ContainsES2021 = 16] = "ContainsES2021",  … [truncated]
+ ... (141 more added lines; see GitHub link above)
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3876-L3893` → after: `L4815-L4831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4815-L4831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4815-L4831) · [Before (L3876-L3893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3876-L3893)

```diff
-         if (zC.particleEmitterType && (CC.particleEmitterType = zC.particleEmitterType.serialize()), zC.particleTexture)
-           if (ZC) CC.texture = zC.particleTexture.serialize();
-           else {
-             const ZC = zC.particleTexture;
-             CC.textureName = zC.particleTexture.name, CC.invertY = !!ZC._invertY;
-             const QC = {};
-             for (const CC of Dz) QC[CC] = ZC[CC];
-             QC.samplingMode = ZC.samplingMode, CC.textureSettings = QC
-           } CC.isLocal = zC.isLocal, cz.d.AppendSerializedAnimations(zC, CC), CC.beginAnimationOnStart = zC.beginAnimationOnStart, CC.beginAnimationFrom = zC.beginAnimationFrom, CC.beginAnimationTo = zC.beginAnimationTo, CC.beginAnimationLoop = zC.beginAnimationLoop, CC.startDela … [truncated]
-         const QC = zC.getColorGradients();
-         if (QC) {
-           CC.colorGradients = [];
-           for (const zC of QC) {
-             const ZC = {
-               gradient: zC.gradient,
-               color1: zC.color1.VZC()
- ... (2 more removed lines; see GitHub link above)
+       }
+       var xS = {
+           Low: 32,
+           Medium: 64,
+           High: 256
+         },
+         LS = SS(xS),
+         YS = SS(xS);
+ 
+       function DS(pp, ip, cp, Op, op) {
+         let Ip = cp;
+         for (let xp = ip.length; Op && xp; Sp(), xp--) {
+           const Sp = ip[cp];
+           if (!Sp) continue;
+           if (Sp.isClosed) {
+             ip[cp] = void 0;
+ ... (1 more added lines; see GitHub link above)
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3896-L3904` → after: `L4837-L4860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4837-L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4837-L4860) · [Before (L3896-L3904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3896-L3904)

```diff
-         const wC = zC.getRampGradients();
-         if (wC) {
-           CC.rampGradients = [];
-           for (const zC of wC) {
-             const ZC = {
-               gradient: zC.gradient,
-               color: zC.color.VZC()
-             };
-             CC.rampGradients.push(ZC)
+         return cp;
+ 
+         function Sp() {
+           ++cp === ip.length && (Ip < cp && (ip.length = Ip), cp = 0, Ip = 0)
+         }
+       }
+ 
+       function AS(pp) {
+         const ip = [],
+           cp = [],
+           Op = Sp(250),
+           op = Sp(500),
+           Ip = Sp(2e3);
+         return function(cp, Op, op) {
+           const Ip = {
+             fileName: cp,
+ ... (8 more added lines; see GitHub link above)
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3906` → after: `L4862-L4866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4862-L4866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4862-L4866) · [Before (L3906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3906)

```diff
-           CC.useRampGradients = zC.useRampGradients
+         };
+ 
+         function Sp(pp) {
+           const ip = [];
+           return ip.pollingInterval = pp, ip.pollIndex = 0, ip.pollScheduled = !1, ip
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3908-L3916` → after: `L4868-L4891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4868-L4891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4868-L4891) · [Before (L3908-L3916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3908-L3916)

```diff
-         const bC = zC.getColorRemapGradients();
-         if (bC) {
-           CC.colorRemapGradients = [];
-           for (const zC of bC) {
-             const ZC = {
-               gradient: zC.gradient,
-               factor1: zC.factor1
-             };
-             void 0 !== zC.factor2 ? ZC.factor2 = zC.factor2 : ZC.factor2 = zC.factor1, CC.colorRemapGradients.push(ZC)
+ 
+         function xp(pp, ip) {
+           ip.pollIndex = Yp(ip, ip.pollingInterval, ip.pollIndex, LS[ip.pollingInterval]), ip.length ? Wp(ip.pollingInterval) : (dO.assert(0 === ip.pollIndex), ip.pollScheduled = !1)
+         }
+ 
+         function Lp(pp, ip) {
+           Yp(cp, 250, 0, cp.length), xp(0, ip), !ip.pollScheduled && cp.length && Wp(250)
+         }
+ 
+         function Yp(ip, Op, op, Ip) {
+           return DS(pp, ip, op, Ip, (function(pp, op, Ip) {
+             Ip ? (pp.unchangedPolls = 0, ip !== cp && (ip[op] = void 0, Sp = pp, cp.push(Sp), Pp(250))) : pp.unchangedPolls !== YS[Op] ? pp.unchangedPolls++ : ip === cp ? (pp.unchangedPolls = 1, ip[op] = void 0, Ap(pp, 250)) : 2e3 !== Op && (pp.unchangedPolls++, ip[op] = void 0,  … [truncated]
+             var Sp
+           }))
+         }
+ 
+ ... (8 more added lines; see GitHub link above)
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3919-L3927` → after: `L4894-L4938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4894-L4938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4894-L4938) · [Before (L3919-L3927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3919-L3927)

```diff
-         const nC = zC.getAlphaRemapGradients();
-         if (nC) {
-           CC.alphaRemapGradients = [];
-           for (const zC of nC) {
-             const ZC = {
-               gradient: zC.gradient,
-               factor1: zC.factor1
-             };
-             void 0 !== zC.factor2 ? ZC.factor2 = zC.factor2 : ZC.factor2 = zC.factor1, CC.alphaRemapGradients.push(ZC)
+ 
+         function Ap(pp, ip) {
+           Dp(ip).push(pp), Pp(ip)
+         }
+ 
+         function Pp(pp) {
+           Dp(pp).pollScheduled || Wp(pp)
+         }
+ 
+         function Wp(ip) {
+           Dp(ip).pollScheduled = pp.setTimeout(250 === ip ? Lp : xp, ip, 250 === ip ? "pollLowPollingIntervalQueue" : "pollPollingIntervalQueue", Dp(ip))
+         }
+       }
+ 
+       function PS(pp, ip, cp, Op) {
+         const op = pc(),
+ ... (29 more added lines; see GitHub link above)
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3930-L3938` → after: `L4941-L4955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4941-L4955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4941-L4955) · [Before (L3930-L3938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3930-L3938)

```diff
-         const fC = zC.getSizeGradients();
-         if (fC) {
-           CC.sizeGradients = [];
-           for (const zC of fC) {
-             const ZC = {
-               gradient: zC.gradient,
-               factor1: zC.factor1
-             };
-             void 0 !== zC.factor2 ? ZC.factor2 = zC.factor2 : ZC.factor2 = zC.factor1, CC.sizeGradients.push(ZC)
+       }
+ 
+       function WS(pp, ip, cp, Op, op) {
+         const Ip = iO(ip)(cp),
+           Sp = pp.get(Ip);
+         return Sp ? Sp.callbacks.push(Op) : pp.set(Ip, {
+           watcher: op(((ip, cp, Op) => {
+             var op;
+             return null == (op = pp.get(Ip)) ? void 0 : op.callbacks.slice().forEach((pp => pp(ip, cp, Op)))
+           })),
+           callbacks: [Op]
+         }), {
+           close: () => {
+             const ip = pp.get(Ip);
+             ip && sc(ip.callbacks, Op) && !ip.callbacks.length && (pp.delete(Ip), Fr(ip))
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3941-L3949` → after: `L4958-L5036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R4958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L4958-L5036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L4958-L5036) · [Before (L3941-L3949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3941-L3949)

```diff
-         const oC = zC.getAngularSpeedGradients();
-         if (oC) {
-           CC.angularSpeedGradients = [];
-           for (const zC of oC) {
-             const ZC = {
-               gradient: zC.gradient,
-               factor1: zC.factor1
-             };
-             void 0 !== zC.factor2 ? ZC.factor2 = zC.factor2 : ZC.factor2 = zC.factor1, CC.angularSpeedGradients.push(ZC)
+       }
+ 
+       function yS(pp, ip) {
+         const cp = pp.mtime.getTime(),
+           Op = ip.getTime();
+         return cp !== Op && (pp.mtime = ip, pp.callback(pp.fileName, US(cp, Op), ip), !0)
+       }
+ 
+       function US(pp, ip) {
+         return 0 === pp ? 0 : 0 === ip ? 2 : 1
+       }
+       var wS = ["/node_modules/.", "/.git", "/.#"],
+         vS = Ac;
+ 
+       function tS(pp) {
+         return vS(pp)
+ ... (63 more added lines; see GitHub link above)
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3952-L3960` → after: `L5039-L5079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R5039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L5039-L5079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L5039-L5079) · [Before (L3952-L3960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3952-L3960)

```diff
-         const qC = zC.getVelocityGradients();
-         if (qC) {
-           CC.velocityGradients = [];
-           for (const zC of qC) {
-             const ZC = {
-               gradient: zC.gradient,
-               factor1: zC.factor1
-             };
-             void 0 !== zC.factor2 ? ZC.factor2 = zC.factor2 : ZC.factor2 = zC.factor1, CC.velocityGradients.push(ZC)
+ 
+         function vp(pp, ip, cp, Op) {
+           var op, Ip;
+           let Sp, xp;
+           xc(cp) ? Sp = cp : xp = cp, Ap.forEach(((pp, cp) => {
+             if ((!xp || !0 !== xp.get(cp)) && (cp === ip || IO(ip, cp) && ip[cp.length] === MS))
+               if (xp)
+                 if (Op) {
+                   const pp = xp.get(cp);
+                   pp ? pp.push(...Op) : xp.set(cp, Op.slice())
+                 } else xp.set(cp, !0);
+             else pp.forEach((pp => {
+               let {
+                 callback: ip
+               } = pp;
+               return ip(Sp)
+ ... (25 more added lines; see GitHub link above)
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3963-L3971` → after: `L5093-L5118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R5093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L5093-L5118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L5093-L5118) · [Before (L3963-L3971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3963-L3971)

```diff
-         const FC = zC.getDragGradients();
-         if (FC) {
-           CC.dragGradients = [];
-           for (const zC of FC) {
-             const ZC = {
-               gradient: zC.gradient,
-               factor1: zC.factor1
-             };
-             void 0 !== zC.factor2 ? ZC.factor2 = zC.factor2 : ZC.factor2 = zC.factor1, CC.dragGradients.push(ZC)
+ 
+         function Hp(pp) {
+           if (!pp) return;
+           const ip = pp.childWatches;
+           pp.childWatches = Yp;
+           for (const cp of ip) cp.close(), Hp(Dp.get(Up(cp.dirName)))
+         }
+ 
+         function dp(pp) {
+           (null == pp ? void 0 : pp.targetWatcher) && (pp.targetWatcher.close(), pp.targetWatcher = void 0)
+         }
+ 
+         function ep(pp, ip, cp) {
+           const Op = Dp.get(ip);
+           if (!Op) return !1;
+           const xp = Sx(Sp(pp));
+ ... (10 more added lines; see GitHub link above)
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3974-L3982` → after: `L5121-L5138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R5121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L5121-L5138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L5121-L5138) · [Before (L3974-L3982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3974-L3982)

```diff
-         const WC = zC.getEmitRateGradients();
-         if (WC) {
-           CC.emitRateGradients = [];
-           for (const zC of WC) {
-             const ZC = {
-               gradient: zC.gradient,
-               factor1: zC.factor1
-             };
-             void 0 !== zC.factor2 ? ZC.factor2 = zC.factor2 : ZC.factor2 = zC.factor1, CC.emitRateGradients.push(ZC)
+ 
+         function jp(pp, ip) {
+           return Zp(wS, (ip => function(pp, ip) {
+             return !!pp.includes(ip) || !cp && Up(pp).includes(ip)
+           }(pp, ip))) || uS(pp, ip, cp, Op)
+         }
+       }
+       var eS = (pp => (pp[pp.File = 0] = "File", pp[pp.Directory = 1] = "Directory", pp))(eS || {});
+ 
+       function uS(pp, ip, cp, Op) {
+         return ((null == ip ? void 0 : ip.excludeDirectories) || (null == ip ? void 0 : ip.excludeFiles)) && (Rb(pp, null == ip ? void 0 : ip.excludeFiles, cp, Op()) || Rb(pp, null == ip ? void 0 : ip.excludeDirectories, cp, Op()))
+       }
+ 
+       function jS(pp, ip, cp, Op, op) {
+         return (Ip, Sp) => {
+           if ("rename" === Ip) {
+ ... (2 more added lines; see GitHub link above)
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3985-L3993` → after: `L5141-L5228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R5141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L5141-L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L5141-L5228) · [Before (L3985-L3993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3985-L3993)

```diff
-         const NC = zC.getStartSizeGradients();
-         if (NC) {
-           CC.startSizeGradients = [];
-           for (const zC of NC) {
-             const ZC = {
-               gradient: zC.gradient,
-               factor1: zC.factor1
-             };
-             void 0 !== zC.factor2 ? ZC.factor2 = zC.factor2 : ZC.factor2 = zC.factor1, CC.startSizeGradients.push(ZC)
+       }
+ 
+       function kS(pp) {
+         let {
+           pollingWatchFileWorker: ip,
+           getModifiedTime: cp,
+           setTimeout: Op,
+           clearTimeout: op,
+           fsWatchWorker: Ip,
+           fileSystemEntryExists: Sp,
+           useCaseSensitiveFileNames: xp,
+           getCurrentDirectory: Lp,
+           fsSupportsRecursiveFsWatch: Yp,
+           getAccessibleSortedChildDirectories: Dp,
+           realpath: Ap,
+           tscWatchFile: Pp,
+ ... (72 more added lines; see GitHub link above)
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L3996-L4002` → after: `L5231-L5253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R5231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L5231-L5253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L5231-L5253) · [Before (L3996-L4002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L3996-L4002)

```diff
-         const MC = zC.getLifeTimeGradients();
-         if (MC) {
-           CC.lifeTimeGradients = [];
-           for (const zC of MC) {
-             const ZC = {
-               gradient: zC.gradient,
-               factor1: zC.factor1
+ 
+         function Mp() {
+           return ep || (ep = AS({
+             getModifiedTime: cp,
+             setTimeout: Op
+           }))
+         }
+ 
+         function Cp() {
+           return jp || (jp = function(pp) {
+             const ip = [];
+             let cp, Op = 0;
+             return function(cp, Op) {
+               const op = {
+                 fileName: cp,
+                 callback: Op,
+ ... (7 more added lines; see GitHub link above)
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L4004` → after: `L5255-L5273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R5255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L5255-L5273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L5255-L5273) · [Before (L4004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L4004)

```diff
-             void 0 !== zC.factor2 ? ZC.factor2 = zC.factor2 : ZC.factor2 = zC.factor1, CC.lifeTimeGradients.push(ZC)
+ 
+             function op() {
+               cp = void 0, Op = DS(pp, ip, Op, LS[250]), Ip()
+             }
+ 
+             function Ip() {
+               ip.length && !cp && (cp = pp.setTimeout(op, 2e3, "pollQueue"))
+             }
+           }({
+             getModifiedTime: cp,
+             setTimeout: Op
+           }))
+         }
+ 
+         function Ep(pp, ip, cp) {
+           const Op = null == cp ? void 0 : cp.fallbackPolling;
+ ... (3 more added lines; see GitHub link above)
```

#### 217. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L4007-L4015` → after: `L5276-L5308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R5276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L5276-L5308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L5276-L5308) · [Before (L4007-L4015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L4007-L4015)

```diff
-         const gC = zC.getLimitVelocityGradients();
-         if (gC) {
-           CC.limitVelocityGradients = [];
-           for (const zC of gC) {
-             const ZC = {
-               gradient: zC.gradient,
-               factor1: zC.factor1
-             };
-             void 0 !== zC.factor2 ? ZC.factor2 = zC.factor2 : ZC.factor2 = zC.factor1, CC.limitVelocityGradients.push(ZC)
+ 
+         function Xp(pp, ip, cp, Op) {
+           dO.assert(!cp);
+           const op = function(pp) {
+               if (pp && void 0 !== pp.watchDirectory) return pp;
+               switch (yp) {
+                 case "RecursiveDirectoryUsingFsWatchFile":
+                   return {
+                     watchDirectory: 1
+                   };
+                 case "RecursiveDirectoryUsingDynamicPriorityPolling":
+                   return {
+                     watchDirectory: 2
+                   };
+                 default:
+                   const ip = null == pp ? void 0 : pp.fallbackPolling;
+ ... (17 more added lines; see GitHub link above)
```

#### 218. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L4019-L4115` → after: `L5311-L5313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R5311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L5311-L5313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L5311-L5313) · [Before (L4019-L4115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L4019-L4115)

```diff
-         zC.noiseTexture && (CC.noiseTexture = zC.noiseTexture.serialize())
-       }
-       clone(CC, zC) {
-         let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         const QC = {
-           ...this._customWrappers
-         };
-         let wC = null;
-         const bC = this._engine;
-         if ((0, XC.b)(bC.createEffectForParticles) && null != this.customShader) {
-           wC = this.customShader;
-           const CC = wC.shaderOptions.defines.length > 0 ? wC.shaderOptions.defines.join("\n") : "",
-             zC = bC.createEffectForParticles(wC.shaderPath.fragmentElement, wC.shaderOptions.uniforms, wC.shaderOptions.samplers, CC);
-           QC[0] ? QC[0].effect = zC : this.setCustomEffect(zC, 0)
-         }
-         const nC = this.serialize(ZC),
- ... (81 more removed lines; see GitHub link above)
+ 
+         function lp(pp, cp, Op, op) {
+           return WS(tp, xp, pp, cp, (cp => ip(pp, cp, Op, op)))
```

#### 219. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L4117-L4118` → after: `L5315-L5363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R5315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L5315-L5363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L5315-L5363) · [Before (L4117-L4118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L4117-L4118)

```diff
-         needAlphaBlending() {
-           return this.alpha < 1
+ 
+         function Qp(pp, ip, Op, op, Lp, Yp) {
+           return WS(op ? dp : Hp, xp, pp, Op, (Op => function(pp, ip, Op, op, xp, Lp) {
+             let Yp, Dp;
+             Up && (Yp = pp.substring(pp.lastIndexOf(MS)), Dp = Yp.slice(MS.length));
+             let Ap = Sp(pp, ip) ? Wp() : Hp();
+             return {
+               close: () => {
+                 Ap && (Ap.close(), Ap = void 0)
+               }
+             };
+ 
+             function Pp(ip) {
+               Ap && (vp(`sysLog:: ${pp}:: Changing watcher to ${ip===Wp?"Present":"Missing"}FileSystemEntryWatcher`), Ap.close(), Ap = ip())
+             }
+ 
+ ... (33 more added lines; see GitHub link above)
```

#### 220. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L4120-L4121` → after: `L5365-L5370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R5365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L5365-L5370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L5365-L5370) · [Before (L4120-L4121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L4120-L4121)

```diff
-         needAlphaTesting() {
-           return !1
+ 
+         function Jp(pp, ip, Op) {
+           let op = cp(pp) || oS;
+           return Ip(pp, ip, ((ip, Ip, Sp) => {
+             "change" === ip && (Sp || (Sp = cp(pp) || oS), Sp.getTime() === op.getTime()) || (op = Sp || cp(pp) || oS, Op(ip, Ip, op))
+           }))
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L4123-L4162` → after: `L5372-L121652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R5372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L5372-L121652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L5372-L121652) · [Before (L4123-L4162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L4123-L4162)

```diff
-         getAlphaTestTexture() {
-           return null
-         }
-         isReadyForSubMesh(zC, ZC) {
-           const QC = ZC._drawWrapper;
-           if (this.isFrozen && QC.effect && QC._wasPreviouslyReady) return !0;
-           ZC.materialDefines || (ZC.materialDefines = new PC);
-           const wC = ZC.materialDefines,
-             bC = this.Km();
-           if (this._isReadyForSubMesh(ZC)) return !0;
-           if ((0, pC.ib)(zC, bC, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, wC, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, pC.X)(zC, wC, !0, !1), wC.IMAGEPROCESSINGPOSTPROCESS !== bC.imageProcessingConfiguration.applyByPostProcess && wC.mar … [truncated]
-             wC.markAsProcessed(), bC.resetCachedMaterial();
-             const zC = new gC.c;
-             wC.FOG && zC.addFallback(1, "FOG"), wC.IMAGEPROCESSINGPOSTPROCESS = bC.imageProcessingConfiguration.applyByPostProcess, wC.DITHER = this.dithering, wC.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
-             const QC = [FC.f.PositionKind];
-             wC.VERTEXCOLOR && QC.push(FC.f.ColorKind);
- ... (24 more removed lines; see GitHub link above)
+       }
+ 
+       function mS(pp) {
+         const ip = pp.writeFile;
+         pp.writeFile = (cp, Op, op) => Kd(cp, Op, !!op, ((cp, Op, op) => ip.call(pp, cp, Op, op)), (ip => pp.createDirectory(ip)), (ip => pp.directoryExists(ip)))
+       }
+       var RS = (() => {
+         let pp;
+         return HO() && (pp = function() {
+           const pp = /^native |^\([^)]+\)$|^(?:internal[\\/]|[\w\s]+(?:\.js)?$)/,
+             ip = cp(41659),
+             op = cp(41661),
+             Ip = cp(41666);
+           let Sp, xp;
+           try {
+             Sp = cp(41672)
+ ... (116265 more added lines; see GitHub link above)
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/303.js` (Changed code · before: `L4164-L4405` → after: `L121654-L125586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405R121654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-be40d24ff9e5e20f7731bb0aa7aea2ee746cbbd4d4f8b80708387c96eb4c7405) · [After (L121654-L125586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/303.js#L121654-L125586) · [Before (L4164-L4405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/303.js#L4164-L4405)

```diff
-           this._activeEffect = bC, this.bindOnlyWorldMatrix(CC), this._activeEffect.setMatrix("viewProjection", QC.getTransformMatrix()), this._mustRebind(QC, bC, ZC) && ((0, SC.g)(bC, this, QC), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._ … [truncated]
-           const fC = QC.activeCamera;
-           if (fC) {
-             const CC = fC.getWorldMatrix();
-             this._cameraPosition.x = CC.m[12], this._cameraPosition.y = CC.m[13], this._cameraPosition.z = CC.m[14], this._activeEffect.setVector3("cameraPosition", nC.TmpVectors.Eg[0].Av(this._cameraPosition).RQC(QC.floatingOriginOffset))
-           }
-           if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbi … [truncated]
-             const CC = QC.mg()._currentRenderTarget;
-             this._activeEffect.setFloat("maxColorValue", GC(CC?.texture?.type))
-           }
-           if (!this.useSunPosition) {
-             const CC = Math.PI * (this.inclination - .5),
-               zC = 2 * Math.PI * (this.azimuth - .5);
-             this.sunPosition.x = this.distance * Math.cos(zC) * Math.cos(CC), this.sunPosition.y = this.distance * Math.sin(-CC), this.sunPosition.z = this.distance * Math.sin(zC) * Math.cos(CC), nC.Quaternion.FromUnitVectorsToRef(nC.Eg.UpReadOnly, this.up, this._skyOrientation), … [truncated]
-           }
-           this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(zC, this._activeEffect, ZC)
- ... (226 more removed lines; see GitHub link above)
+           const {
+             fileName: op
+           } = Op, Ip = this.getScriptInfo(op);
+           if (!Ip && !this.host.fileExists(op)) return;
+           const Sp = {
+               fileName: jdp(op),
+               path: this.toPath(op)
+             },
+             xp = this.getConfigFileNameForFile(Sp, !1);
+           if (!xp) return;
+           let Lp = this.findConfiguredProjectByProjectName(xp);
+           if (!Lp) {
+             if (pp.getCompilerOptions().disableReferencedProjectLoad) return cp ? ip : (null == Ip ? void 0 : Ip.containingProjects.length) ? Op : ip;
+             Lp = this.createConfiguredProject(xp, `Creating project for original file: ${Sp.fileName}${ip!==Op?" for location: "+ip.fileName:""}`)
+           }
+           const Yp = this.tryFindDefaultConfiguredProjectForOpenScriptInfoOrClosedFileInfo(Sp, 5, oup(Lp, 4), (pp => `Creating project referenced in solution ${pp.projectName} to find possible configured project for original file: ${Sp.fileName}${ip!==Op?" for location: "+ip.file … [truncated]
+ ... (3917 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/304.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/304.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/304.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/304.js#L4)

```diff
-   41514: (CC, zC, ZC) => {
+   41728: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L6-L11` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/304.js#L6) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/304.js#L6-L11)

```diff
-       e: () => NC,
-       i: () => PC,
-       j: () => MC,
-       n: () => gC,
-       q: () => RC,
-       s: () => GC
+       collectImportedWorldCodePluginNames: () => Yp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L13-L15` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/304.js#L8-L11) · [Before (L13-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/304.js#L13-L15)

```diff
-     var QC = ZC(41459);
-     var wC = "Babylon Lite v1.32.0",
-       bC = ZC(41519);
+     var Op = cp(2487),
+       op = cp(37055),
+       Ip = cp(41647),
+       Sp = cp.n(Ip);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L18` → after: `L14-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L14-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/304.js#L14-L22) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/304.js#L18)

```diff
-       return "clientWidth" in CC
+       return Sp().isImportDeclaration(pp) && Sp().isStringLiteral(pp.moduleSpecifier) && function(pp) {
+         const ip = pp.importClause;
+         if (!ip) return !0;
+         if (ip.isTypeOnly) return !1;
+         const cp = ip.namedBindings;
+         return !(cp && !Sp().isNamespaceImport(cp)) || !!ip.name || cp.elements.some((pp => !pp.isTypeOnly))
+       }(pp) || Sp().isExportDeclaration(pp) && pp.moduleSpecifier && Sp().isStringLiteral(pp.moduleSpecifier) && function(pp) {
+         return !pp.isTypeOnly && (!pp.exportClause || !Sp().isNamedExports(pp.exportClause) || 0 === pp.exportClause.elements.length || pp.exportClause.elements.some((pp => !pp.isTypeOnly)))
+       }(pp) ? pp.moduleSpecifier.text : Sp().isImportEqualsDeclaration(pp) && !pp.isTypeOnly && Sp().isExternalModuleReference(pp.moduleReference) && pp.moduleReference.expression && Sp().isStringLiteral(pp.moduleReference.expression) ? pp.moduleReference.expression.text : Sp().i … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L23-L940` → after: `L26-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L26-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/304.js#L26-L57) · [Before (L23-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/304.js#L23-L940)

```diff
-       const oC = zC.getContext("webgpu");
-       oC || (0, QC.b)(54), nC(zC) && zC.setAttribute("data-engine", wC);
-       const qC = ZC?.format ?? navigator.gpu.getPreferredCanvasFormat(),
-         FC = ZC?.srgb ? (WC = qC).endsWith("-srgb") ? WC : `${WC}-srgb` : qC;
-       var WC;
-       const NC = ZC?.alphaMode ?? "opaque";
-       oC.configure({
-         device: CC._device,
-         format: qC,
-         alphaMode: NC,
-         viewFormats: [FC]
-       });
-       const MC = 1 === ZC?.msaaSamples ? 1 : 4,
-         gC = (0, bC.e)({
-           lbl: "swapchain",
-           format: FC,
- ... (902 more removed lines; see GitHub link above)
+       if (!ip.startsWith("./") && !ip.startsWith("../")) return;
+       const op = ((pp.includes("/") ? pp.slice(0, pp.lastIndexOf("/") + 1) : "") + ip).split("/"),
+         Ip = [];
+       for (const Op of op)
+         if ("" !== Op && "." !== Op)
+           if (".." !== Op) Ip.push(Op);
+           else {
+             if (0 === Ip.length) return;
+             Ip.pop()
+           } const Sp = Ip.join("/");
+       for (const xp of [Sp, `${Sp}.ts`, `${Sp}.js`])
+         if (xp in cp && !(0, Op.m)(xp)) return xp
+     }
+ 
+     function Yp(pp) {
+       const ip = new Set,
+ ... (16 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L943-L975` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/304.js#L61) · [Before (L943-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/304.js#L943-L975)

```diff
-           return CC
-         }();
-       if (wC._frameGraph = nC, !1 !== zC?.defaultRenderTask) {
-         const zC = CC.msaaSamples > 1,
-           bC = zC ? (0, QC.e)({
-             lbl: "scene-color",
-             format: CC.format,
-             dFormat: "depth24plus-stencil8",
-             samples: CC.msaaSamples,
-             size: CC
-           }) : CC.scRT,
-           fC = zC ? void 0 : (0, QC.e)({
-             lbl: "scene-depth",
-             dFormat: "depth24plus-stencil8",
-             samples: 1,
-             size: CC
- ... (17 more removed lines; see GitHub link above)
+         Dp(Yp)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L977-L1055` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/304.js#L63) · [Before (L977-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/304.js#L977-L1055)

```diff
-       await lC(zC), XC?.get(zC)?.() || (zC._runtimeBuilds?._e(), zC._renderableVersion++, zC._built = !0), await (zC._rebuildHook?.(zC))
-     }
-     var rC = null;
-     async function sC(CC) {
-       const zC = CC,
-         QC = zC.surface;
-       (0, wC.j)(QC, zC) || (await uC(CC), zC._renderables.sort(TC), await Promise.all(zC._frameGraph._tasks.map((CC => CC._preload?.()))), rC && await rC(zC), zC._frameGraph.build(), QC._renderingContexts[0] && (await ZC.e(361).then((() => ZC(61027)))).configureSwapchainOverlaySc … [truncated]
-     }
-     var TC = (CC, zC) => CC.order - zC.order
-   },
-   41507: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => qC,
-       g: () => FC
-     });
-     var QC = ZC(41459),
- ... (63 more removed lines; see GitHub link above)
+       return [...ip].sort()
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L1058-L1180` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/304.js#L66) · [Before (L1058-L1180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/304.js#L1058-L1180)

```diff
-   41498: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => oC
-     });
-     var QC = ZC(41459),
-       wC = ZC(41462),
-       bC = ZC(41470),
-       nC = ZC(41476),
-       fC = ZC(41487);
-     async function oC(CC, zC) {
-       let oC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-       const [qC, FC] = function(CC) {
-         const zC = CC,
-           ZC = [
-             [zC.displayWidth, zC.displayHeight],
-             [zC.videoWidth, zC.videoHeight],
- ... (107 more removed lines; see GitHub link above)
+   41688: pp => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L1182-L1275` → after: `L68-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/304.js#L68-L69) · [Before (L1182-L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/304.js#L1182-L1275)

```diff
-       const zC = CC._device;
-       zC !== WC && (fC?.clear(), fC = null, oC = null, qC = null, FC = null, WC = null, WC = zC), oC ??= zC.createShaderModule({
-         code: nC
-       }), qC ??= function(CC) {
-         return (0, wC.b)(CC, bC)
-       }(CC), FC ??= zC.createBindGroupLayout({
-         entries: [{
-           binding: 0,
-           visibility: QC.g.FRAGMENT,
-           texture: {
-             sampleType: "float"
-           }
-         }, {
-           binding: 1,
-           visibility: QC.g.FRAGMENT,
-           sampler: {}
- ... (78 more removed lines; see GitHub link above)
+       var ip = new Error("Cannot find module '" + pp + "'");
+       throw ip.code = "MODULE_NOT_FOUND", ip
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/304.js` (Changed code · before: `L1278-L1349` → after: `L73-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0aR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2f65f2f2ea48276c8bfe3083a240d714536923a74f19c26915d11fbbf55ee0a) · [After (L73-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/304.js#L73-L79) · [Before (L1278-L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/304.js#L1278-L1349)

```diff
-   41487: (CC, zC, ZC) => {
-     function QC(CC, zC) {
-       return Math.floor(Math.log2(Math.max(CC, zC))) + 1
-     }
-     ZC.d(zC, {
-       e: () => QC
-     })
-   },
-   41457: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => qC,
-       d: () => FC
-     });
-     var QC = ZC(41459),
-       wC = ZC(41462),
-       bC = ZC(41470),
- ... (56 more removed lines; see GitHub link above)
+   41672: () => {},
+   41659: () => {},
+   41695: () => {},
+   41666: () => {},
+   41661: () => {},
+   41653: () => {},
+   41681: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/305.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/305.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/305.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961f) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/305.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/305.js#L4-L6)

```diff
-   41563: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       parseShaderPack: () => QC
+   41709: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       default: () => jp
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/305.js` (Changed code · before: `L10-L15` → after: `L21-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961fR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961f) · [After (L21-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/305.js#L21-L44) · [Before (L10-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/305.js#L10-L15)

```diff
-       var zC, ZC;
-       const QC = CC.get("shaderPackUrl"),
-         wC = null !== (zC = CC.get("shaderPackMode")) && void 0 !== zC ? zC : "strict";
-       if (null === QC) {
-         if (CC.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
-         return null
+       return pp.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
+     }
+     Dp.d.registerLanguage("javascript", Ap.d), Dp.d.registerLanguage("typescript", Pp.d);
+ 
+     function Up(pp, ip) {
+       const cp = yp(pp).replace(/"/g, "&quot;");
+       return `<button type="button" class="DocsCopyButton ${ip}" title="${cp}" aria-label="${cp}"><svg class="DocsCopyIcon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8.5" height="8.5"/><path d="M10.5 3.5V1.5H1.5v9h2"/></svg><svg class="DocsCopiedIcon" vi … [truncated]
+     }
+ 
+     function wp(pp, ip) {
+       const cp = [],
+         Op = pp.toLowerCase(),
+         op = ip.toLowerCase();
+       let Ip = 0;
+       for (; Ip < pp.length;) {
+         const Sp = Op.indexOf(op, Ip);
+ ... (8 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/305.js` (Changed code · before: `L17-L26` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961fR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-0d6f0a6cafce04761432c5d365c1717203286bfd19908c3df172ca97a68d961f) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/305.js#L46) · [Before (L17-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/305.js#L17-L26)

```diff
-       if ("lite" !== CC.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
-       if (! function(CC) {
-           return "strict" === CC || "allow" === CC
-         }(wC)) throw new Error(`Unknown shaderPackMode "${wC}" - use strict or allow`);
-       const bC = (null !== (ZC = CC.get("variants")) && void 0 !== ZC ? ZC : "").split(",").find((CC => CC.trim().startsWith("liteShaderPack")));
-       if (void 0 !== bC) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${bC.trim()}`);
-       return {
-         url: QC,
-         mode: wC
-       }
+       return cp
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/306.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/306.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/306.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/306.js#L4)

```diff
-   41590: (CC, zC, ZC) => {
+   41736: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/306.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/306.js#L6)

```diff
-       b: () => qC
+       ensureLocalBloxdTypes: () => vp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L8-L15` → after: `L8-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L8-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/306.js#L8-L66) · [Before (L8-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/306.js#L8-L15)

```diff
-     var QC = ZC(36963),
-       wC = ZC(36991),
-       bC = ZC(39800),
-       nC = ZC(36968),
-       fC = ZC(37142);
-     class oC {
-       constructor(CC, zC, ZC, QC) {
-         this.name = CC, this.worldAxisForNormal = zC, this.worldAxisForFileX = ZC, this.worldAxisForFileY = QC
+     var Op = cp(4874),
+       op = cp(41630),
+       Ip = cp(41621),
+       Sp = cp(37053),
+       xp = cp(37055),
+       Lp = cp(37070);
+     const Yp = JSON.stringify({
+       name: "@bloxd",
+       types: "index.d.ts"
+     }, null, "\t") + "\n";
+ 
+     function Dp(pp) {
+       return pp.replace(/^\//, "")
+     }
+ 
+     function Ap(pp) {
+ ... (43 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L159` → after: `L71-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L71-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/306.js#L71-L94) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/306.js#L159)

```diff
-       return CC.charCodeAt(0) + (CC.charCodeAt(1) << 8) + (CC.charCodeAt(2) << 16) + (CC.charCodeAt(3) << 24)
+       const ip = {
+         "@bloxd": ["./node_modules/@bloxd/index.d.ts"]
+       };
+       for (const Op of Object.values(Sp.e)) ip[Op.specifier] = [`.${Op.typesVfsPath}`];
+       const cp = [];
+       for (const Op of pp)
+         for (const pp of Object.keys(Op.files)) cp.push(Dp((0, xp.s)(Op.name, pp)));
+       return JSON.stringify({
+         compilerOptions: {
+           allowJs: !0,
+           checkJs: !1,
+           strict: !1,
+           module: "ESNext",
+           moduleResolution: "bundler",
+           target: "ES2015",
+           noEmit: !0,
+ ... (8 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/306.js` (Changed code · before: `L161-L427` → after: `L96-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-683fc6d2b1494739993f71ce6ce1a498ff24c15367e648423dc07b78dc0c03f4) · [After (L96-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/306.js#L96-L107) · [Before (L161-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/306.js#L161-L427)

```diff
-     const FC = qC("DXT1"),
-       WC = qC("DXT3"),
-       NC = qC("DXT5"),
-       MC = qC("DX10");
-     class gC {
-       static GetDDSInfo(CC) {
-         const zC = new Int32Array(CC.buffer, CC.byteOffset, 31),
-           ZC = new Int32Array(CC.buffer, CC.byteOffset, 35);
-         let QC = 1;
-         zC[2] & fC && (QC = Math.max(1, zC[7]));
-         const wC = zC[21],
-           bC = wC === MC ? ZC[32] : 0;
-         let nC = 0;
-         switch (wC) {
-           case 113:
-             nC = 2;
- ... (251 more removed lines; see GitHub link above)
+     async function vp(pp) {
+       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
+       const cp = new Set(ip.map((pp => pp.name))),
+         Pp = Object.values(Sp.e).flatMap((ip => {
+           const Op = Dp(ip.typesVfsPath),
+             op = `${Ap(ip)}/package.json`;
+           return [...cp.has(ip.name) ? Object.entries(ip.files).map((cp => {
+             let [Op, op] = cp;
+             return (0, Lp.E)(pp, Dp((0, xp.s)(ip.name, Op)), op)
+           })) : [], (0, Lp.E)(pp, Op, ip.types), (0, Lp.E)(pp, op, Wp(ip))]
+         }));
+       await Promise.all([(0, Lp.E)(pp, "node_modules/@bloxd/index.d.ts", Op.default), (0, Lp.E)(pp, "node_modules/@bloxd/globals.d.ts", Ip.d), (0, Lp.E)(pp, "node_modules/@bloxd/lib.d.ts", op.b), (0, Lp.E)(pp, "node_modules/@bloxd/package.json", Yp), (0, Lp.E)(pp, "tsconfig.json" … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/307.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/307.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710)

#### 1. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/307.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/307.js#L2)

```diff
- export const ids = [306, 307];
+ export const ids = [307];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/307.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/307.js#L4)

```diff
-   41600: (CC, zC, ZC) => {
+   41792: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/307.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/307.js#L6)

```diff
-       _DDSTextureLoader: () => bC
+       installImageBitmapTextureLoader: () => Yp
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L8-L12` → after: `L8-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/307.js#L8-L17) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/307.js#L8-L12)

```diff
-     var QC = ZC(39800),
-       wC = ZC(41585);
-     class bC {
-       constructor() {
-         this.supportCascades = !0
+     var Op = cp(40088),
+       op = cp(41798),
+       Ip = cp(3309);
+ 
+     function Sp(pp, ip) {
+       if ("string" === typeof pp) {
+         const cp = (0, Ip.h)(pp);
+         return cp ? new Blob([(0, Ip.d)(cp.base64)], {
+           type: cp.mimeType || ip
+         }) : null
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L14-L32` → after: `L19-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L19-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/307.js#L19-L30) · [Before (L14-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/307.js#L14-L32)

```diff
-       loadCubeData(CC, zC, ZC, bC) {
-         const nC = zC.mg();
-         let fC, oC = !1,
-           qC = 1e3;
-         if (Array.isArray(CC))
-           for (let QC = 0; QC < CC.length; QC++) {
-             const ZC = CC[QC];
-             fC = wC.DDSTools.GetDDSInfo(ZC), zC.width = fC.width, zC.height = fC.height, oC = (fC.isRGB || fC.isLuminance || fC.mipmapCount > 1) && zC.generateMipMaps, nC._unpackFlipY(fC.isCompressed), wC.DDSTools.UploadDDSLevels(nC, zC, ZC, fC, oC, 6, -1, QC), fC.isFourCC || 1 ! … [truncated]
-           } else {
-             const bC = CC;
-             fC = wC.DDSTools.GetDDSInfo(bC), zC.width = fC.width, zC.height = fC.height, ZC && (fC.sphericalPolynomial = new QC.g), oC = (fC.isRGB || fC.isLuminance || fC.mipmapCount > 1) && zC.generateMipMaps, nC._unpackFlipY(fC.isCompressed), wC.DDSTools.UploadDDSLevels(nC, zC, … [truncated]
-           }
-         nC._setCubeMapTextureParams(zC, oC, qC), zC.isReady = !0, zC.onLoadedObservable.notifyObservers(zC), zC.onLoadedObservable.clear(), bC && bC({
-           isDDS: !0,
-           width: zC.width,
-           info: fC,
- ... (3 more removed lines; see GitHub link above)
+       return pp instanceof Blob ? pp : new Blob([pp], {
+         type: ip
+       })
+     }
+     const xp = function(pp, ip, cp, Op) {
+       let Ip, xp = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
+         Lp = arguments.length > 5 ? arguments[5] : void 0,
+         Yp = arguments.length > 6 ? arguments[6] : void 0;
+       try {
+         Ip = Sp(pp, xp)
+       } catch {
+         Ip = null
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L34-L40` → after: `L32-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L32-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/307.js#L32-L63) · [Before (L34-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/307.js#L34-L40)

```diff
-       loadData(CC, zC, ZC) {
-         const QC = wC.DDSTools.GetDDSInfo(CC),
-           bC = (QC.isRGB || QC.isLuminance || QC.mipmapCount > 1) && zC.generateMipMaps && Math.max(QC.width, QC.height) >> QC.mipmapCount - 1 === 1;
-         ZC(QC.width, QC.height, bC, QC.isFourCC, (() => {
-           wC.DDSTools.UploadDDSLevels(zC.mg(), zC, CC, QC, bC, 1)
-         }))
-       }
+       return Ip ? (createImageBitmap(Ip, {
+         premultiplyAlpha: "none",
+         colorSpaceConversion: "none",
+         ...Lp
+       }).then((pp => {
+         ip(pp)
+       }), (() => {
+         (0, op.d)(pp, ip, cp, Op, xp, Lp, Yp)
+       })), null) : (0, op.d)(pp, ip, cp, Op, xp, Lp, Yp)
+     };
+     let Lp = "idle";
+ 
+     function Yp() {
+       "idle" === Lp && "function" === typeof createImageBitmap && (Lp = "pending", async function() {
+         const pp = document.createElement("canvas");
+         pp.width = 1, pp.height = 2;
+ ... (16 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L43` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/307.js#L66) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/307.js#L43)

```diff
-   41590: (CC, zC, ZC) => {
+   41798: (pp, ip, cp) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L45` → after: `L68-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/307.js#L68-L69) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/307.js#L45)

```diff
-       b: () => qC
+       b: () => Op.g,
+       d: () => Op.p
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/307.js` (Changed code · before: `L47-L468` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-1b40e6cbde8f76b3ee83c5a47f6798e00a5cba3f1c1ae7eb3d5267433ce40710) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/307.js#L71-L72) · [Before (L47-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/307.js#L47-L468)

```diff
-     var QC = ZC(36963),
-       wC = ZC(36991),
-       bC = ZC(39800),
-       nC = ZC(36968),
-       fC = ZC(37142);
-     class oC {
-       constructor(CC, zC, ZC, QC) {
-         this.name = CC, this.worldAxisForNormal = zC, this.worldAxisForFileX = ZC, this.worldAxisForFileY = QC
-       }
-     }
-     class qC {
-       static _NearestPow2Floor(CC) {
-         return CC <= 1 ? 1 : 1 << Math.floor(Math.log2(CC))
-       }
-       static ConvertCubeMapTextureToSphericalPolynomial(CC) {
-         if (!CC.isCube) return null;
- ... (406 more removed lines; see GitHub link above)
+     var Op = cp(40257);
+     (0, Op.u)()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/308.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/308.js` (30 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L4-L6)

```diff
-   41612: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       _ENVTextureLoader: () => vC
+   41869: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Ip
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L8-L36` → after: `L8-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L8-L13) · [Before (L8-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L8-L36)

```diff
-     var QC = ZC(39747),
-       wC = ZC(36963),
-       bC = ZC(36991),
-       nC = ZC(39800),
-       fC = ZC(39650),
-       oC = ZC(39803),
-       qC = (ZC(39910), ZC(41618)),
-       FC = ZC(38507),
-       WC = (ZC(41630), ZC(41648), ZC(39882));
-     const NC = "image/png",
-       MC = [134, 22, 135, 150, 246, 214, 150, 54];
- 
-     function gC(CC) {
-       const zC = new DataView(CC.buffer, CC.byteOffset, CC.byteLength);
-       let ZC = 0;
-       for (let nC = 0; nC < MC.length; nC++)
- ... (13 more removed lines; see GitHub link above)
+     var Op = cp(40314),
+       op = cp(41871);
+     class Ip {
+       constructor(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
+         this.maxDepth = cp, this.sOp = [], this._maxBlockCapacity = ip || 64, this._selectionContent = new Op.d(1024), this._creationFunc = pp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L38-L49` → after: `L15-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L15-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L15-L20) · [Before (L38-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L38-L49)

```diff
-     }
- 
-     function pC(CC, zC) {
-       const ZC = (zC = SC(zC)).specular;
-       let QC = Math.log2(zC.width);
-       if (QC = Math.round(QC) + 1, ZC.mipmaps.length !== 6 * QC) throw new Error(`Unsupported specular mipmaps number "${ZC.mipmaps.length}"`);
-       const wC = new Array(QC);
-       for (let bC = 0; bC < QC; bC++) {
-         wC[bC] = new Array(6);
-         for (let QC = 0; QC < 6; QC++) {
-           const nC = ZC.mipmaps[6 * bC + QC];
-           wC[bC][QC] = new Uint8Array(CC.buffer, CC.byteOffset + zC.binaryDataPosition + nC.position, nC.length)
+       update(pp, ip, cp) {
+         op.b._CreateBlocks(pp, ip, cp, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
+       }
+       TOp(pp) {
+         for (let ip = 0; ip < this.blocks.length; ip++) {
+           this.blocks[ip].addEntry(pp)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L52-L63` → after: `L23-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L23-L25) · [Before (L52-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L52-L63)

```diff
-       return wC
-     }
- 
-     function PC(CC, zC) {
-       zC = SC(zC);
-       const ZC = new Array(6),
-         QC = zC.irradiance?.irradianceTexture;
-       if (QC) {
-         if (6 !== QC.faces.length) throw new Error(`Incorrect irradiance texture faces number "${QC.faces.length}"`);
-         for (let wC = 0; wC < 6; wC++) {
-           const bC = QC.faces[wC];
-           ZC[wC] = new Uint8Array(CC.buffer, CC.byteOffset + zC.binaryDataPosition + bC.position, bC.length)
+       xJ(pp) {
+         for (let ip = 0; ip < this.blocks.length; ip++) {
+           this.blocks[ip].removeEntry(pp)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L66-L80` → after: `L28-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L28-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L28-L47) · [Before (L66-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L66-L80)

```diff
-       return ZC
-     }
- 
-     function GC(CC, zC, ZC) {
-       const QC = (ZC = SC(ZC)).specular;
-       if (!QC) return Promise.resolve([]);
-       CC._lodGenerationScale = QC.lodGenerationScale;
-       const bC = [],
-         nC = pC(zC, ZC);
-       bC.push(AC(CC, nC, ZC.imageType));
-       const fC = ZC.irradiance?.irradianceTexture;
-       if (fC) {
-         const QC = PC(zC, ZC);
-         let nC = null;
-         ZC.irradiance?.irradianceTexture?.dominantDirection && (nC = wC.r.FromArray(ZC.irradiance.irradianceTexture.dominantDirection)), bC.push(xC(CC, QC, fC.size, ZC.imageType, nC))
+       select(pp, ip) {
+         this._selectionContent.reset();
+         for (let cp = 0; cp < this.blocks.length; cp++) {
+           this.blocks[cp].select(pp, this._selectionContent, ip)
+         }
+         return ip ? this._selectionContent.concat(this.sOp) : this._selectionContent.concatWithNoDuplicate(this.sOp), this._selectionContent
+       }
+       intersects(pp, ip, cp) {
+         this._selectionContent.reset();
+         for (let Op = 0; Op < this.blocks.length; Op++) {
+           this.blocks[Op].intersects(pp, ip, this._selectionContent, cp)
+         }
+         return cp ? this._selectionContent.concat(this.sOp) : this._selectionContent.concatWithNoDuplicate(this.sOp), this._selectionContent
+       }
+       intersectsRay(pp) {
+         this._selectionContent.reset();
+ ... (4 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L84-L100` → after: `L50-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L50-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L50-L85) · [Before (L84-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L84-L100)

```diff
-     async function RC(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC) {
-       return await new Promise(((WC, NC) => {
-         if (ZC) {
-           const ZC = zC.createTexture(null, !0, !0, null, 1, null, (CC => {
-             NC(CC)
-           }), CC);
-           QC?.onEffectCreatedObservable.addOnce((fC => {
-             fC.executeWhenCompiled((() => {
-               QC.externalTextureSamplerBinding = !0, QC.onApply = QC => {
-                 QC._bindTexture("textureSampler", ZC), QC.setFloat2("scale", 1, zC._features.needsInvertingBitmap && CC instanceof ImageBitmap ? -1 : 1)
-               }, zC.scenes.length && (zC.scenes[0].postProcessManager.directRender([QC], qC, !0, bC, nC), zC.restoreDefaultFramebuffer(), ZC.dispose(), URL.revokeObjectURL(wC), WC())
-             }))
-           }))
-         } else {
-           if (zC._uploadImageToTexture(FC, CC, bC, nC), fC) {
-             const ZC = oC[nC];
- ... (1 more removed lines; see GitHub link above)
+     Ip.CreationFuncForMeshes = (pp, ip) => {
+       const cp = pp.bJ();
+       !pp.isBlocked && cp.boundingBox.intersectsMinMax(ip.nOp, ip.aOp) && ip.entries.push(pp)
+     }, Ip.CreationFuncForSubMeshes = (pp, ip) => {
+       pp.bJ().boundingBox.intersectsMinMax(ip.nOp, ip.aOp) && ip.entries.push(pp)
+     }
+   },
+   41871: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Ip
+     });
+     var Op = cp(37320),
+       op = cp(40504);
+     class Ip {
+       constructor(pp, ip, cp, Op, op, Ip) {
+         this.entries = [], this.KOp = new Array, this._capacity = cp, this._depth = Op, this._maxDepth = op, this._creationFunc = Ip, this._minPoint = pp, this._maxPoint = ip, this.KOp.push(pp.clone()), this.KOp.push(ip.clone()), this.KOp.push(pp.clone()), this.KOp[2].x = ip.x, t … [truncated]
+ ... (20 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L102` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L87) · [Before (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L102)

```diff
-           WC()
+           return
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L104-L160` → after: `L89-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L89-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L89-L104) · [Before (L104-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L104-L160)

```diff
-       }))
-     }
-     async function AC(CC, zC) {
-       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : NC;
-       const QC = CC.mg();
-       CC.format = 5, CC.type = 0, CC.generateMipMaps = !0, CC._cachedAnisotropicFilteringLevel = null, QC.updateTextureSamplingMode(3, CC), await JC(CC, zC, !0, ZC), CC.isReady = !0
-     }
-     async function xC(CC, zC, ZC) {
-       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : NC,
-         wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
-       const bC = CC.mg(),
-         nC = new fC.c(bC, 5),
-         qC = new oC.b(bC, nC);
-       CC._irradianceTexture = qC, qC._dominantDirection = wC, nC.isCube = !0, nC.format = 5, nC.type = 0, nC.generateMipMaps = !0, nC._cachedAnisotropicFilteringLevel = null, nC.generateMipMaps = !0, nC.width = ZC, nC.height = ZC, bC.updateTextureSamplingMode(3, nC), await JC(nC, … [truncated]
-     }
-     async function JC(CC, zC, wC) {
- ... (41 more removed lines; see GitHub link above)
+         const ip = this.entries.indexOf(pp);
+         ip > -1 && this.entries.splice(ip, 1)
+       }
+       addEntries(pp) {
+         for (let ip = 0; ip < pp.length; ip++) {
+           const cp = pp[ip];
+           this.addEntry(cp)
+         }
+       }
+       select(pp, ip, cp) {
+         if (op.d.IsInFrustum(this.KOp, pp)) {
+           if (this.blocks) {
+             for (let Op = 0; Op < this.blocks.length; Op++) {
+               this.blocks[Op].select(pp, ip, cp)
+             }
+             return
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L164-L188` → after: `L109-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L109-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L109-L115) · [Before (L164-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L164-L188)

```diff
-       const JC = [];
-       for (let ZC = 0; ZC < zC.length; ZC++)
-         for (let QC = 0; QC < 6; QC++) {
-           const wC = zC[ZC][QC],
-             bC = (0, WC.i)(wC),
-             fC = new Blob([bC], {
-               type: nC
-             }),
-             oC = URL.createObjectURL(fC);
-           let qC;
-           if (MC._features.forceBitmapOverHTMLImageElement) qC = MC.createImageBitmap(fC, {
-             premultiplyAlpha: "none",
-             colorSpaceConversion: "none"
-           }).then((async zC => await RC(zC, MC, gC, pC, oC, QC, ZC, SC, GC, PC, CC)));
-           else {
-             const zC = new Image;
- ... (9 more removed lines; see GitHub link above)
+       intersects(pp, ip, cp, Op) {
+         if (op.d.IntersectsSphere(this._minPoint, this._maxPoint, pp, ip)) {
+           if (this.blocks) {
+             for (let op = 0; op < this.blocks.length; op++) {
+               this.blocks[op].intersects(pp, ip, cp, Op)
+             }
+             return
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L190` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L117) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L190)

```diff
-           JC.push(qC)
+           Op ? cp.concat(this.entries) : cp.concatWithNoDuplicate(this.entries)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L192-L204` → after: `L119-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L119-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L119-L128) · [Before (L192-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L192-L204)

```diff
-       if (await Promise.all(JC), zC.length < FC) {
-         let ZC;
-         const QC = Math.pow(2, FC - 1 - zC.length),
-           wC = QC * QC * 4;
-         switch (CC.type) {
-           case 0:
-             ZC = new Uint8Array(wC);
-             break;
-           case 2:
-             ZC = new Uint16Array(wC);
-             break;
-           case 1:
-             ZC = new Float32Array(wC)
+       }
+       intersectsRay(pp, ip) {
+         if (pp.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
+           if (this.blocks) {
+             for (let cp = 0; cp < this.blocks.length; cp++) {
+               this.blocks[cp].intersectsRay(pp, ip)
+             }
+             return
+           }
+           ip.concatWithNoDuplicate(this.entries)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L209-L211` → after: `L131-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L131-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L131-L144) · [Before (L209-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L209-L211)

```diff
-       if (PC) {
-         const zC = CC._irradianceTexture;
-         CC._irradianceTexture = null, MC._releaseTexture(CC), PC._swapAndDie(CC), CC._irradianceTexture = zC
+       createInnerBlocks() {
+         Ip._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
+       }
+       static _CreateBlocks(pp, ip, cp, op, Sp, xp, Lp, Yp) {
+         Lp.blocks = new Array;
+         const Dp = new Op.o((ip.x - pp.x) / 2, (ip.y - pp.y) / 2, (ip.z - pp.z) / 2);
+         for (let Op = 0; Op < 2; Op++)
+           for (let ip = 0; ip < 2; ip++)
+             for (let Ap = 0; Ap < 2; Ap++) {
+               const Pp = pp.add(Dp.multiplyByFloats(Op, ip, Ap)),
+                 Wp = pp.add(Dp.multiplyByFloats(Op + 1, ip + 1, Ap + 1)),
+                 yp = new Ip(Pp, Wp, op, Sp + 1, xp, Yp);
+               yp.addEntries(cp), Lp.blocks.push(yp)
+             }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L222` → after: `L147-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L147-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L147-L158) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L222)

```diff
-     var iC = ZC(41655);
+   },
+   41879: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Dp
+     });
+     var Op = cp(40296),
+       op = cp(37320),
+       Ip = cp(40614),
+       Sp = cp(41810),
+       xp = cp(40368),
+       Lp = cp(37345),
+       Yp = cp(41869);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L224-L225` → after: `L160-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L160-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L160-L161) · [Before (L224-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L224-L225)

```diff
-       constructor() {
-         this.supportCascades = !1
+       constructor(pp) {
+         this.name = xp.e.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new Sp.D(op.o.Zero(), new op.o(1, 1, 1)), (pp = pp || Lp.e.LastCreatedScene) && (this.pw = pp, this.pw.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.pw.getActiveSubMeshCandidat … [truncated]
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L227-L239` → after: `L163-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L163-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L163-L167) · [Before (L227-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L227-L239)

```diff
-       loadCubeData(CC, zC, ZC, QC, wC) {
-         if (Array.isArray(CC)) return;
-         const bC = gC(CC);
-         if (bC) {
-           zC.width = bC.width, zC.height = bC.width;
-           try {
-             (0, iC.e)(), IC(zC, bC), GC(zC, CC, bC).then((() => {
-               zC.isReady = !0, zC.onLoadedObservable.notifyObservers(zC), zC.onLoadedObservable.clear(), QC && QC()
-             }), (CC => {
-               wC?.("Can not upload environment levels", CC)
-             }))
-           } catch (nC) {
-             wC?.("Can not upload environment file", nC)
+       register() {
+         this.pw.onMeshRemovedObservable.add((pp => {
+           const ip = this.pw.selectionOctree;
+           if (void 0 !== ip && null !== ip) {
+             const cp = ip.sOp.indexOf(pp); - 1 !== cp && ip.sOp.splice(cp, 1)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L241` → after: `L169-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L169-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L169-L181) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L241)

```diff
-         } else wC && wC("Can not parse the environment file", null)
+         })), this.pw.onMeshImportedObservable.add((pp => {
+           const ip = this.pw.selectionOctree;
+           void 0 !== ip && null !== ip && ip.TOp(pp)
+         }))
+       }
+       getActiveMeshCandidates() {
+         return this.pw.xop?.select(this.pw.frustumPlanes) || this.pw._getDefaultMeshCandidates()
+       }
+       getActiveSubMeshCandidates(pp) {
+         if (pp._submeshesOctree && pp.useOctreeForRenderingSelection) {
+           return pp._submeshesOctree.select(this.pw.frustumPlanes)
+         }
+         return this.pw._getDefaultSubMeshCandidates(pp)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L243-L244` → after: `L183-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L183-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L183-L195) · [Before (L243-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L243-L244)

```diff
-       loadData() {
-         throw ".env not supported in 2d."
+       getIntersectingSubMeshCandidates(pp, ip) {
+         if (pp._submeshesOctree && pp.useOctreeForPicking) {
+           Sp.D.TransformToRef(ip, pp.getWorldMatrix(), this._tempRay);
+           return pp._submeshesOctree.intersectsRay(this._tempRay)
+         }
+         return this.pw._getDefaultSubMeshCandidates(pp)
+       }
+       getCollidingSubMeshCandidates(pp, ip) {
+         if (pp._submeshesOctree && pp.useOctreeForCollisions) {
+           const cp = ip._velocityWorldLength + Math.max(ip._radius.x, ip._radius.y, ip._radius.z);
+           return pp._submeshesOctree.intersects(ip._basePointWorld, cp)
+         }
+         return this.pw._getDefaultSubMeshCandidates(pp)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L255-L275` → after: `L201-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L201-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L201-L222) · [Before (L255-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L255-L275)

```diff
- 
-     function nC() {
-       bC || (bC = !0, wC.b.prototype._sphericalPolynomialTargetSize = 0, wC.b.prototype.forceSphericalPolynomialsRecompute = function() {
-         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
-       }, Object.defineProperty(wC.b.prototype, "sphericalPolynomial", {
-         get: function() {
-           if (this._texture) {
-             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
-             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = QC.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
-               this._texture._sphericalPolynomial = CC, this._texture._sphericalPolynomialComputed = !0
-             }))), null
-           }
-           return null
-         },
-         set: function(CC) {
-           this._texture && (this._texture._sphericalPolynomial = CC)
- ... (5 more removed lines; see GitHub link above)
+     Ap || (Ap = !0, Op.f.prototype.createOrUpdateSelectionOctree = function() {
+       let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
+         ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
+         cp = this._getComponent(xp.e.NAME_OCTREE);
+       cp || (cp = new Dp(this), this.uOp(cp)), this.xop || (this.xop = new Yp.d(Yp.d.CreationFuncForMeshes, pp, ip));
+       const Op = this.getWorldExtends();
+       return this.xop.update(Op.min, Op.max, this.meshes), this.xop
+     }, Object.defineProperty(Op.f.prototype, "selectionOctree", {
+       get: function() {
+         return this.xop
+       },
+       enumerable: !0,
+       configurable: !0
+     }), Ip.b.prototype.createOrUpdateSubmeshesOctree = function() {
+       let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
+         ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
+ ... (6 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L277` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L224) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L277)

```diff
-   41590: (CC, zC, ZC) => {
+   41810: (pp, ip, cp) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L279` → after: `L226-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L226-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L226-L235) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L279)

```diff
-       b: () => qC
+       A: () => mp,
+       D: () => Ap,
+       c: () => Ep,
+       e: () => Up,
+       h: () => yp,
+       k: () => Wp,
+       n: () => Mp,
+       q: () => qp,
+       u: () => kp,
+       x: () => Rp
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L281-L285` → after: `L237-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L237-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L237-L246) · [Before (L281-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L281-L285)

```diff
-     var QC = ZC(36963),
-       wC = ZC(36991),
-       bC = ZC(39800),
-       nC = ZC(36968),
-       fC = ZC(37142);
+     var Op = cp(37324),
+       op = cp(37320),
+       Ip = cp(37329),
+       Sp = cp(40489),
+       xp = cp(40334),
+       Lp = cp(37345),
+       Yp = cp(40390);
+     const Dp = {
+       internalPickerForMesh: void 0
+     };
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L287-L288` → after: `L248-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L248-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L248-L430) · [Before (L287-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L287-L288)

```diff
-       constructor(CC, zC, ZC, QC) {
-         this.name = CC, this.worldAxisForNormal = zC, this.worldAxisForFileX = ZC, this.worldAxisForFileY = QC
+       constructor(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
+           op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Op.b;
+         this.origin = pp, this.direction = ip, this.length = cp, this.epsilon = op
+       }
+       clone() {
+         return new Ap(this.origin.clone(), this.direction.clone(), this.length)
+       }
+       intersectsBoxMinMax(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         const Op = Ap._TmpVector3[0].i5(pp.x - cp, pp.y - cp, pp.z - cp),
+           op = Ap._TmpVector3[1].i5(ip.x + cp, ip.y + cp, ip.z + cp);
+         let Ip, Sp, xp, Lp, Yp = 0,
+           Dp = Number.MAX_VALUE;
+         if (Math.abs(this.direction.x) < 1e-7) {
+           if (this.origin.x < Op.x || this.origin.x > op.x) return !1
+ ... (167 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L291-L334` → after: `L433-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L433-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L433-L501) · [Before (L291-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L291-L334)

```diff
-     class qC {
-       static _NearestPow2Floor(CC) {
-         return CC <= 1 ? 1 : 1 << Math.floor(Math.log2(CC))
-       }
-       static ConvertCubeMapTextureToSphericalPolynomial(CC) {
-         if (!CC.isCube) return null;
-         CC.Km()?.mg().flushFramebuffer();
-         const zC = CC.getSize().width,
-           ZC = CC._sphericalPolynomialTargetSize,
-           QC = ZC > 0 ? this._NearestPow2Floor(ZC) : 0,
-           wC = !CC.noMipmap && !0 === CC._texture?.generateMipMaps,
-           bC = QC > 0 && QC < zC && wC,
-           nC = bC ? Math.max(0, Math.round(Math.log2(zC / QC))) : 0,
-           fC = bC ? Math.max(1, Math.floor(zC / Math.pow(2, nC))) : zC,
-           oC = CC.readPixels(0, nC, void 0, !1),
-           qC = CC.readPixels(1, nC, void 0, !1);
- ... (28 more removed lines; see GitHub link above)
+ 
+     function Pp(pp, ip, cp, Op, op) {
+       let Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       const Sp = Ap.Zero();
+       return Wp(pp, ip, cp, Op, Sp, op, Ip), Sp
+     }
+ 
+     function Wp(pp, ip, cp, Op, Ip, Sp) {
+       let xp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         Lp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
+       const Yp = pp.gy();
+       if (!Sp && !(Sp = pp.activeCamera) && !(Sp = pp.cameraToUseForPointers)) return pp;
+       const Dp = Sp.viewport,
+         Ap = Yp.getRenderHeight(),
+         {
+           x: Pp,
+ ... (53 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L336-L356` → after: `L503-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L503-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L503-L542) · [Before (L336-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L336-L356)

```diff
-       static _AreaElement(CC, zC) {
-         return Math.atan2(CC * zC, Math.sqrt(CC * CC + zC * zC + 1))
-       }
-       static _DownsampleFace(CC, zC, ZC, QC) {
-         const wC = CC instanceof Float32Array ? CC : Float32Array.from(CC),
-           bC = ZC * ZC * QC,
-           nC = new Float32Array(bC),
-           fC = zC / ZC,
-           oC = 1 / (fC * fC);
-         for (let FC = 0; FC < ZC; FC++) {
-           const CC = Math.floor(FC * fC),
-             bC = Math.floor((FC + 1) * fC);
-           for (let qC = 0; qC < ZC; qC++) {
-             const WC = Math.floor(qC * fC),
-               NC = Math.floor((qC + 1) * fC),
-               MC = (FC * ZC + qC) * QC;
- ... (5 more removed lines; see GitHub link above)
+     }
+ 
+     function dp(pp, ip, cp, Op, op) {
+       const Ip = pp(cp, ip.enableDistantPicking);
+       return Ip.intersectsSphere(Op.Yop, op) && Ip.intersectsBox(Op.boundingBox, op) ? Ip : null
+     }
+ 
+     function ep(pp, ip, cp, Op, Ip, Sp) {
+       let Lp = null;
+       const Yp = !!(pp.activeCameras && pp.activeCameras.length > 1 && pp.cameraToUseForPointers !== pp.activeCamera),
+         Ap = pp.cameraToUseForPointers || pp.activeCamera,
+         Pp = Dp.internalPickerForMesh || wp,
+         Wp = Pp === wp;
+       for (let xp = 0; xp < pp.meshes.length; xp++) {
+         const Dp = pp.meshes[xp];
+         if (cp) {
+ ... (24 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L365-L409` → after: `L550-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L550-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L550-L584) · [Before (L365-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L365-L409)

```diff
-       static ConvertCubeMapToSphericalPolynomial(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const ZC = zC > 0 ? this._NearestPow2Floor(zC) : 0;
-         if (ZC > 0 && CC.size > ZC) {
-           const zC = 5 === CC.format ? 4 : 3,
-             QC = ["right", "left", "up", "down", "front", "back"],
-             wC = {};
-           for (const bC of QC) wC[bC] = this._DownsampleFace(CC[bC], CC.size, ZC, zC);
-           CC = {
-             ...CC,
-             ...wC,
-             size: ZC
-           }
-         }
-         const QC = new bC.c;
-         let oC = 0;
- ... (29 more removed lines; see GitHub link above)
+       return Lp || new xp.b
+     }
+ 
+     function jp(pp, ip, cp, Op) {
+       if (!xp.b) return null;
+       const Ip = [],
+         Sp = !!(pp.activeCameras && pp.activeCameras.length > 1 && pp.cameraToUseForPointers !== pp.activeCamera),
+         Lp = pp.cameraToUseForPointers || pp.activeCamera,
+         Yp = Dp.internalPickerForMesh || wp,
+         Ap = Yp === wp;
+       for (let xp = 0; xp < pp.meshes.length; xp++) {
+         const Dp = pp.meshes[xp];
+         if (cp) {
+           if (!cp(Dp, -1)) continue
+         } else if (!Dp.isEnabled() || !Dp.isVisible || !Dp.Ow) continue;
+         const Pp = Sp && Dp.isWorldMatrixCameraDependent(),
+ ... (19 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L418` → after: `L605-L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L605-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L605-L671) · [Before (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L418)

```diff
-     qC._FileFaces = [new oC("right", new QC.r(1, 0, 0), new QC.r(0, 0, -1), new QC.r(0, -1, 0)), new oC("left", new QC.r(-1, 0, 0), new QC.r(0, 0, 1), new QC.r(0, -1, 0)), new oC("up", new QC.r(0, 1, 0), new QC.r(1, 0, 0), new QC.r(0, 0, 1)), new oC("down", new QC.r(0, -1, 0), ne … [truncated]
+ 
+     function Rp(pp, ip, cp, Op, Ip) {
+       const Sp = ep(pp, (cp => (pp._pickWithRayInverseMatrix || (pp._pickWithRayInverseMatrix = op.b.Identity()), cp.invertToRef(pp._pickWithRayInverseMatrix), pp._cachedRayForTransform || (pp._cachedRayForTransform = Ap.Zero()), Ap.TransformToRef(ip, pp._pickWithRayInverseMatrix … [truncated]
+       return Sp && (Sp.ray = ip), Sp
+     }
+ 
+     function qp(pp, ip, cp, Op, op, Ip) {
+       return jp(pp, (Op => Pp(pp, ip, cp, Op, op || null)), Op, Ip)
+     }
+ 
+     function Mp(pp, ip, cp, Op) {
+       return jp(pp, (cp => (pp._pickWithRayInverseMatrix || (pp._pickWithRayInverseMatrix = op.b.Identity()), cp.invertToRef(pp._pickWithRayInverseMatrix), pp._cachedRayForTransform || (pp._cachedRayForTransform = Ap.Zero()), Ap.TransformToRef(ip, pp._pickWithRayInverseMatrix, pp … [truncated]
+     }
+ 
+     function Cp(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
+ ... (51 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L420` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L673) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L420)

```diff
-   41630: (CC, zC, ZC) => {
+   41814: (pp, ip, cp) => {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L424-L425` → after: `L677-L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L677-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L677-L920) · [Before (L424-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L424-L425)

```diff
-     var QC = ZC(41618),
-       wC = ZC(41634);
+     var Op = cp(40203),
+       op = cp(40210),
+       Ip = cp(37320),
+       Sp = cp(40451),
+       xp = cp(41823),
+       Lp = cp(40415),
+       Yp = cp(37368);
+     let Dp = (() => {
+         var pp;
+         let ip, cp, Lp, Yp, Dp, Ap, Pp, Wp, yp = xp.d,
+           Up = [],
+           wp = [],
+           vp = [],
+           tp = [],
+           Hp = [],
+           dp = [],
+ ... (228 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L427-L457` → after: `L922-L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L922-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L922-L923) · [Before (L427-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L427-L457)

```diff
-       static ExpandRGBDTexture(CC) {
-         const zC = CC._texture;
-         if (!zC || !CC.isRGBD) return;
-         const wC = zC.mg(),
-           bC = wC.getCaps(),
-           nC = zC.isReady;
-         let fC = !1;
-         bC.textureHalfFloatRender && bC.textureHalfFloatLinearFiltering ? (fC = !0, zC.type = 2) : bC.textureFloatRender && bC.textureFloatLinearFiltering && (fC = !0, zC.type = 1), fC && (zC.isReady = !1, zC._isRGBD = !1, zC.invertY = !1);
-         const oC = async () => {
-           const bC = wC.isWebGPU,
-             nC = bC ? 1 : 0;
-           zC.isReady = !1, bC ? await ZC.e(342).then((() => ZC(61040))) : await ZC.e(324).then((() => ZC(61045)));
-           const fC = new QC.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, wC, !1, void 0, zC.type, void 0, null, !1, void 0, nC);
-           fC.externalTextureSamplerBinding = !0;
-           const oC = wC.createRenderTargetTexture(zC.width, {
-             generateDepthBuffer: !1,
- ... (15 more removed lines; see GitHub link above)
+       constructor() {
+         this.direction1 = new Ip.o(0, 1, 0), this.direction2 = new Ip.o(0, 1, 0)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/308.js` (Changed code · before: `L459-L461` → after: `L925-L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995fR925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-9b7e38a2fb187cfe79c4e790aab82dbd25507e737e4ff96cb1f7c67eb000995f) · [After (L925-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/308.js#L925-L1003) · [Before (L459-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/308.js#L459-L461)

```diff
-       static async EncodeTextureToRGBD(CC, zC) {
-         let QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         return zC.mg().isWebGPU ? await ZC.e(343).then((() => ZC(61061))) : await ZC.e(325).then((() => ZC(61056))), await (0, wC.b)("rgbdEncode", CC, zC, QC, 1, 5)
+       startDirectionFunction(pp, ip, cp, Op) {
+         const op = (0, Wp.RandomRange)(this.direction1.x, this.direction2.x),
+           Sp = (0, Wp.RandomRange)(this.direction1.y, this.direction2.y),
+           xp = (0, Wp.RandomRange)(this.direction1.z, this.direction2.z);
+         Op ? ip.i5(op, Sp, xp) : Ip.o.TransformNormalFromFloatsToRef(op, Sp, xp, pp, ip)
+       }
+       startPositionFunction(pp, ip, cp, Op) {
+         Op ? ip.i5(0, 0, 0) : Ip.o.TransformCoordinatesFromFloatsToRef(0, 0, 0, pp, ip)
+       }
+       clone() {
+         const pp = new yp;
+         return Pp.e.DeepCopy(this, pp), pp
+       }
+       applyToShader(pp) {
+         pp.setVector3("direction1", this.direction1), pp.setVector3("direction2", this.direction2)
+       }
+ ... (63 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/309.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/309.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L4-L6` → after: `L4-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L4-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/309.js#L4-L31) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/309.js#L4-L6)

```diff
-   41598: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       _IESTextureLoader: () => fC
+   41955: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Ip
+     });
+     var Op = cp(41948),
+       op = cp(41959);
+ 
+     function Ip(pp) {
+       (0, op.e)(pp), (0, Op.q)(pp);
+       const ip = pp._surfaces;
+       for (const cp of ip) cp._renderingContexts.length = 0, cp._ro?.disconnect(), cp._context.unconfigure();
+       ip.length = 0;
+       try {
+         pp._disposeManagedResources?.(), pp._disposeStorageBuffers?.()
+       } finally {
+         pp._device.destroy()
+ ... (12 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L8` → after: `L33-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L33-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/309.js#L33-L86) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/309.js#L8)

```diff
-     var QC = ZC(36991);
+     var Op = cp(41905);
+     var op = "Babylon Lite v1.32.0",
+       Ip = cp(41952);
+ 
+     function Sp(pp) {
+       return "clientWidth" in pp
+     }
+     var xp = 1;
+ 
+     function Lp(pp, ip, cp) {
+       const Lp = ip.getContext("webgpu");
+       Lp || (0, Op.e)(54), Sp(ip) && ip.setAttribute("data-engine", op);
+       const Yp = cp?.format ?? navigator.gpu.getPreferredCanvasFormat(),
+         Dp = cp?.srgb ? (Ap = Yp).endsWith("-srgb") ? Ap : `${Ap}-srgb` : Yp;
+       var Ap;
+       const Pp = cp?.alphaMode ?? "opaque";
+ ... (38 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L11` → after: `L89-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L89-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/309.js#L89-L95) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/309.js#L11)

```diff
-       return CC.split(" ").filter((CC => "" !== CC)).map((CC => parseFloat(CC)))
+       const ip = pp.canvas;
+       if (!Sp(ip)) return;
+       const cp = pp._w ?? ip.clientWidth,
+         Op = pp._h ?? ip.clientHeight;
+       if (!(cp > 0 && Op > 0)) return;
+       const op = Math.min(globalThis.devicePixelRatio || 1, pp.maxDevicePixelRatio);
+       Ap(pp, cp * op | 0, Op * op | 0)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L15-L17` → after: `L99-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L99-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/309.js#L99-L149) · [Before (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/309.js#L15-L17)

```diff
-       for (; ZC.length !== zC;) {
-         const zC = wC(CC.lines[CC.index++]);
-         ZC.push(...zC)
+       const Op = pp.canvas,
+         op = 0 | ip,
+         Ip = 0 | cp;
+       if (op > 0 && Ip > 0 && (op !== Op.width || Ip !== Op.height)) {
+         Op.width = op, Op.height = Ip, pp.scRT._width = op, pp.scRT._height = Ip;
+         for (const ip of pp._renderingContexts) ip._resize?.()
+       }
+     }
+     var Pp = 0;
+ 
+     function Wp(pp, ip) {
+       return -1 !== pp._renderingContexts.indexOf(ip)
+     }
+ 
+     function yp(pp, ip) {
+       return -1 === pp._renderingContexts.indexOf(ip) && (pp._renderingContexts.push(ip), !0)
+ ... (35 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L22-L26` → after: `L178-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L178-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/309.js#L178-L193) · [Before (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/309.js#L22-L26)

```diff
-       let wC = 0,
-         bC = 0,
-         nC = 0,
-         fC = 0,
-         oC = 0,
+       Ap(pp, ip, cp)
+     }
+ 
+     function Hp(pp) {
+       pp._animFrameId && cancelAnimationFrame(pp._animFrameId), pp._animFrameId = 0, pp._renderFn = null, pp._flushGpuRetirements?.(pp)
+     }
+ 
+     function dp(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pp.surfaces;
+       if (cp !== pp.surfaces)
+         for (let op = cp.length; op--;) cp[op].engine !== pp && (0, Op.e)(49);
+       ep(pp, ip, cp)
+     }
+ 
+     function ep(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pp._surfaces,
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L28-L54` → after: `L195-L951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L195-L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/309.js#L195-L951) · [Before (L28-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/309.js#L28-L54)

```diff
-       for (let QC = 0; QC < CC.numberOfHorizontalAngles - 1; QC++)
-         if (ZC < CC.horizontalAngles[QC + 1] || QC === CC.numberOfHorizontalAngles - 2) {
-           bC = QC, nC = CC.horizontalAngles[QC], fC = CC.horizontalAngles[QC + 1];
-           break
-         } for (let QC = 0; QC < CC.numberOfVerticalAngles - 1; QC++)
-         if (zC < CC.verticalAngles[QC + 1] || QC === CC.numberOfVerticalAngles - 2) {
-           wC = QC, oC = CC.verticalAngles[QC], qC = CC.verticalAngles[QC + 1];
-           break
-         } const FC = fC - nC,
-         WC = qC - oC;
-       if (0 === WC) return 0;
-       const NC = 0 === FC ? 0 : (ZC - nC) / FC,
-         MC = (zC - oC) / WC,
-         gC = 0 === FC ? bC : bC + 1,
-         SC = (0, QC.Lerp)(CC.candelaValues[bC][wC], CC.candelaValues[gC][wC], NC),
-         pC = (0, QC.Lerp)(CC.candelaValues[bC][wC + 1], CC.candelaValues[gC][wC + 1], NC);
- ... (11 more removed lines; see GitHub link above)
+       for (let Ip = cp.length; Ip--;) Op += cp[Ip]._renderingContexts.length;
+       if (!Op) return pp.drawCallCount = 0, pp._flushGpuRetirements?.(pp);
+       const op = pp._device.createCommandEncoder({
+         label: "frame"
+       });
+       pp._currentEncoder = op, pp._currentDelta = ip;
+       try {
+         pp._gpuTimerBegin?.(op), Op = 0;
+         for (let pp = 0; pp < cp.length; pp++) {
+           const ip = cp[pp];
+           ip._capturePreFrame?.(ip), Yp(ip);
+           const op = ip._renderingContexts;
+           for (let pp = 0; pp < op.length; pp++) {
+             const ip = op[pp];
+             ip._update(), Op += ip._drawCallsPre + ip._record()
+           }
+ ... (741 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L56-L57` → after: `L953-L958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L953-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/309.js#L953-L958) · [Before (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/309.js#L56-L57)

```diff
-               lines: new TextDecoder("utf-8").decode(CC).split("\n"),
-               index: 0
+             _tasks: [],
+             _currentProcessedTask: null,
+             build() {
+               for (let ip = 0; ip < pp._tasks.length; ip++) Ip(pp, pp._tasks[ip]);
+               for (const ip of pp._tasks)
+                 for (const pp of ip._passes) pp._initialize()
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L59-L93` → after: `L960-L1223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L960-L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/309.js#L960-L1223) · [Before (L59-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/309.js#L59-L93)

```diff
-             ZC = {
-               version: zC.lines[0],
-               candelaValues: [],
-               horizontalAngles: [],
-               verticalAngles: [],
-               numberOfHorizontalAngles: 0,
-               numberOfVerticalAngles: 0
-             };
-           for (zC.index = 1; zC.lines.length > 0 && !zC.lines[zC.index].includes("TILT=");) zC.index++;
-           zC.lines[zC.index].includes("INCLUDE"), zC.index++;
-           const QC = wC(zC.lines[zC.index++]);
-           ZC.numberOfLights = QC[0], ZC.lumensPerLamp = QC[1], ZC.numberOfVerticalAngles = QC[3], ZC.numberOfHorizontalAngles = QC[4], ZC.photometricType = QC[5], ZC.unitsType = QC[6], ZC.width = QC[7], ZC.length = QC[8], ZC.height = QC[9], zC.index++;
-           for (let wC = 0; wC < ZC.numberOfHorizontalAngles; wC++) ZC.candelaValues[wC] = [];
-           bC(zC, ZC.numberOfVerticalAngles, ZC.verticalAngles), bC(zC, ZC.numberOfHorizontalAngles, ZC.horizontalAngles);
-           for (let wC = 0; wC < ZC.numberOfHorizontalAngles; wC++) bC(zC, ZC.numberOfVerticalAngles, ZC.candelaValues[wC]);
-           let fC = -1;
- ... (19 more removed lines; see GitHub link above)
+             execute() {
+               let ip = 0;
+               for (const cp of pp._tasks)
+                 if (!1 !== cp.executionEnabled)
+                   if (cp.execute) ip += cp.execute();
+                   else
+                     for (const pp of cp._passes) ip += pp._execute();
+               return ip
+             },
+             dispose() {
+               for (const ip of pp._tasks) ip.dispose();
+               pp._tasks.length = 0, pp._currentProcessedTask = null
+             }
+           };
+           return pp
+         }();
+ ... (248 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/309.js` (Changed code · before: `L95-L99` → after: `L1225-L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abdddR1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-bc98122de852db29f0eaf3f4485ed00dca30a519bb19ad027f844da7450abddd) · [After (L1225-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/309.js#L1225-L1305) · [Before (L95-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/309.js#L95-L99)

```diff
-         }(new Uint8Array(CC.buffer, CC.byteOffset, CC.byteLength));
-         ZC(QC.width, QC.height, !!zC.useMipMaps, !1, (() => {
-           const CC = zC.mg();
-           zC.type = 1, zC.format = 6, zC._gammaSpace = !1, CC._uploadDataToTextureDirectly(zC, QC.data)
-         }))
+         }, {
+           binding: 1,
+           visibility: Op.h.FRAGMENT,
+           sampler: {}
+         }]
+       })
+     }
+ 
+     function Wp(pp, ip, cp) {
+       const Op = pp._device,
+         op = Op.createCommandEncoder();
+       yp(pp, ip, op, cp), Op.queue.submit([op.finish()])
+     }
+ 
+     function yp(pp, ip, cp, Op) {
+       if (ip.mipLevelCount <= 1) return;
+ ... (65 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/310.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/310.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/310.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/310.js#L4-L6)

```diff
-   41604: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       _BasisTextureLoader: () => GC
+   41996: (pp, ip, cp) => {
+     cp.d(ip, {
+       parseShaderPack: () => Op
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L13-L48` → after: `L9-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/310.js#L9-L15) · [Before (L13-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/310.js#L13-L48)

```diff
-     function oC() {
-       const CC = 0,
-         zC = 1,
-         ZC = 2,
-         QC = 3,
-         wC = 6,
-         bC = 8,
-         nC = 9,
-         fC = 10,
-         oC = 14;
-       let qC = null;
- 
-       function FC(CC, zC, ZC, QC, wC) {
-         const bC = CC.getImageTranscodedSizeInBytes(zC, ZC, QC);
-         let nC = new Uint8Array(bC);
-         if (!CC.transcodeImage(nC, zC, ZC, QC, 1, 0)) return null;
- ... (20 more removed lines; see GitHub link above)
+     function Op(pp) {
+       var ip, cp;
+       const Op = pp.get("shaderPackUrl"),
+         op = null !== (ip = pp.get("shaderPackMode")) && void 0 !== ip ? ip : "strict";
+       if (null === Op) {
+         if (pp.has("shaderPackMode")) throw new Error("shaderPackMode= needs shaderPackUrl=");
+         return null
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/310.js` (Changed code · before: `L50-L283` → after: `L17-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-b2a5a8703a3b9bd13f03b042e5852012dc1fe3bac222f9f8c6c3525548a961e6) · [After (L17-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/310.js#L17-L25) · [Before (L50-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/310.js#L50-L283)

```diff
-       onmessage = WC => {
-         if ("init" === WC.data.action) {
-           if (WC.data.url) try {
-             importScripts(WC.data.url)
-           } catch (NC) {
-             postMessage({
-               action: "error",
-               error: NC
-             })
-           }
-           qC || (qC = BASIS({
-             wasmBinary: WC.data.wasmBinary
-           })), null !== qC && qC.then((CC => {
-             BASIS = CC, CC.initializeBasis(), postMessage({
-               action: "init"
-             })
- ... (218 more removed lines; see GitHub link above)
+       if ("lite" !== pp.get("renderer")) throw new Error("shaderPackUrl= needs renderer=lite: shader packs run on Lite only");
+       if (! function(pp) {
+           return "strict" === pp || "allow" === pp
+         }(op)) throw new Error(`Unknown shaderPackMode "${op}" - use strict or allow`);
+       const Ip = (null !== (cp = pp.get("variants")) && void 0 !== cp ? cp : "").split(",").find((pp => pp.trim().startsWith("liteShaderPack")));
+       if (void 0 !== Ip) throw new Error(`shaderPackUrl= runs its own pack: drop variants=${Ip.trim()}`);
+       return {
+         url: Op,
+         mode: op
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/311.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/311.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L4)

```diff
-   41638: (CC, zC, ZC) => {
+   42025: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L6)

```diff
-       e: () => PC
+       d: () => Yp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L8-L19` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L8-L12) · [Before (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L8-L19)

```diff
-     var QC = ZC(36987),
-       wC = ZC(36963),
-       bC = ZC(40303),
-       nC = ZC(39962),
-       fC = ZC(39747),
-       oC = ZC(38507),
-       qC = ZC(39950),
-       FC = ZC(39978),
-       WC = ZC(36971),
-       NC = ZC(39712),
-       MC = ZC(39925),
-       gC = ZC(40022);
+     var Op = cp(37320),
+       op = cp(37356),
+       Ip = cp(40190),
+       Sp = cp(37324),
+       xp = cp(37487);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L21-L34` → after: `L14-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L14-L15) · [Before (L21-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L21-L34)

```diff
-       get renderList() {
-         return this._renderList
-       }
-       set renderList(CC) {
-         this._renderList !== CC && (this._unObserveRenderList && (this._unObserveRenderList(), this._unObserveRenderList = null), CC && (this._unObserveRenderList = (0, WC.i)(CC, this._renderListHasChanged)), this._renderList = CC)
-       }
-       get disableImageProcessing() {
-         return this._disableImageProcessing
-       }
-       set disableImageProcessing(CC) {
-         CC !== this._disableImageProcessing && (this._disableImageProcessing = CC, this._scene.markAllMaterialsAsDirty(64))
-       }
-       get disableDepthPrePass() {
-         return this._disableDepthPrePass
+       constructor(pp, ip, cp, Op) {
+         this.name = pp, this.worldAxisForNormal = ip, this.worldAxisForFileX = cp, this.worldAxisForFileY = Op
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L36-L49` → after: `L17-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L17-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L17-L45) · [Before (L36-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L36-L49)

```diff
-       set disableDepthPrePass(CC) {
-         this._disableDepthPrePass = CC, this._renderingManager.disableDepthPrePass = CC
-       }
-       get name() {
-         return this._name
-       }
-       set name(CC) {
-         if (this._name !== CC) {
-           if (this._name = CC, this._sceneUBOs)
-             for (let CC = 0; CC < this._sceneUBOs.length; ++CC) this._sceneUBOs[CC].name = `Scene ubo #${CC} for ${this.name}`;
-           if (this._scene)
-             for (let CC = 0; CC < this._renderPassIds.length; ++CC) {
-               const zC = this._renderPassIds[CC];
-               this._engine._renderPassNames[zC] = `${this._name}#${CC}`
+     }
+     class Yp {
+       static _NearestPow2Floor(pp) {
+         return pp <= 1 ? 1 : 1 << Math.floor(Math.log2(pp))
+       }
+       static ConvertCubeMapTextureToSphericalPolynomial(pp) {
+         if (!pp.isCube) return null;
+         pp.Gl()?.gy().flushFramebuffer();
+         const ip = pp.getSize().width,
+           cp = pp._sphericalPolynomialTargetSize,
+           Op = cp > 0 ? this._NearestPow2Floor(cp) : 0,
+           op = !pp.noMipmap && !0 === pp._texture?.generateMipMaps,
+           Ip = Op > 0 && Op < ip && op,
+           Sp = Ip ? Math.max(0, Math.round(Math.log2(ip / Op))) : 0,
+           xp = Ip ? Math.max(1, Math.floor(ip / Math.pow(2, Sp))) : ip,
+           Lp = pp.readPixels(0, Sp, void 0, !1),
+ ... (13 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L51-L77` → after: `L47-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L47-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L47-L60) · [Before (L51-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L51-L77)

```diff
-         }
-       }
-       get renderPassIds() {
-         return this._renderPassIds
-       }
-       get currentRefreshId() {
-         return this._currentRefreshId
-       }
-       getActiveMeshes() {
-         return this._activeMeshes
-       }
-       setMaterialForRendering(CC, zC) {
-         let ZC;
-         ZC = Array.isArray(CC) ? CC : [CC];
-         for (let QC = 0; QC < ZC.length; ++QC)
-           for (let CC = 0; CC < this.options.numPasses; ++CC) {
- ... (11 more removed lines; see GitHub link above)
+             const Pp = {
+               size: Ap,
+               right: Ip,
+               left: op,
+               up: Sp,
+               down: Lp,
+               front: Yp,
+               back: Dp,
+               format: 5,
+               type: op instanceof Float32Array ? 1 : 0,
+               gammaSpace: yp
+             };
+             pp(this.ConvertCubeMapToSphericalPolynomial(Pp))
+           }))
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L80-L101` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L63-L64) · [Before (L80-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L80-L101)

```diff
-       _unfreezeActiveMeshes() {
-         this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null;
-         for (let CC = 0; CC < this._activeMeshes.length; CC++) this._activeMeshes.data[CC]._unFreeze();
-         this._isFrozen = !1
-       }
-       constructor(CC, zC, ZC) {
-         this._unObserveRenderList = null, this._renderListHasChanged = (CC, zC) => {
-           const ZC = this._renderList ? this._renderList.length : 0;
-           if (0 === zC && ZC > 0 || 0 === ZC)
-             for (const QC of this._scene.meshes) QC._markSubMeshesAsLightDirty()
-         }, this.particleSystemList = null, this.spriteManagerList = null, this.getCustomRenderList = null, this.renderMeshes = !0, this.renderDepthOnlyMeshes = !0, this.renderOpaqueMeshes = !0, this.renderAlphaTestMeshes = !0, this.renderTransparentMeshes = !0, this.renderParticl … [truncated]
-           numPasses: 1,
-           doNotChangeAspectRatio: !0,
-           enableClusteredLights: !1,
-           ...ZC
-         }, this._createRenderPassId(), this.renderPassId = this._renderPassIds[0], this._renderingManager = new FC.b(zC), this._renderingManager._useSceneAutoClearSetup = !0, this.options.enableClusteredLights && this.onInitRenderingObservable.add((() => {
- ... (6 more removed lines; see GitHub link above)
+       static _AreaElement(pp, ip) {
+         return Math.atan2(pp * ip, Math.sqrt(pp * pp + ip * ip + 1))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L103-L208` → after: `L66-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L66-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L66-L83) · [Before (L103-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L103-L208)

```diff
-       _createRenderPassId() {
-         this._releaseRenderPassId();
-         for (let CC = 0; CC < this.options.numPasses; ++CC) this._renderPassIds[CC] = this._engine.createRenderPassId(`${this.name}#${CC}`)
-       }
-       _createSceneUBO(CC, zC) {
-         const ZC = this._scene.mg(),
-           QC = new qC.c(ZC, void 0, zC, CC, void 0, !1);
-         return QC.addUniform("viewProjection", 16), zC && QC.addUniform("viewProjectionR", 16), QC.addUniform("view", 16), QC.addUniform("projection", 16), QC.addUniform("vEyePosition", 4), QC.addUniform("inverseProjection", 16), QC
-       }
-       _getSceneUBO() {
-         this._currentFrameId !== this._engine.frameId && (this._currentSceneUBOIndex = 0, this._currentFrameId = this._engine.frameId), this._sceneUBOs || (this._sceneUBOs = [], this._sceneUBOIsMultiview = []);
-         const CC = this._engine._currentRenderTarget,
-           zC = !(!CC || !CC.texture?.isMultiview) || !!this._scene._multiviewSceneUboIsActive;
-         if (this._currentSceneUBOIndex >= this._sceneUBOs.length) {
-           const CC = this._sceneUBOs.length;
-           this._sceneUBOs.push(this._createSceneUBO(`Scene ubo #${CC} for ${this.name}`, zC)), this._sceneUBOIsMultiview.push(zC)
- ... (90 more removed lines; see GitHub link above)
+       static _DownsampleFace(pp, ip, cp, Op) {
+         const op = pp instanceof Float32Array ? pp : Float32Array.from(pp),
+           Ip = cp * cp * Op,
+           Sp = new Float32Array(Ip),
+           xp = ip / cp,
+           Lp = 1 / (xp * xp);
+         for (let Dp = 0; Dp < cp; Dp++) {
+           const pp = Math.floor(Dp * xp),
+             Ip = Math.floor((Dp + 1) * xp);
+           for (let Yp = 0; Yp < cp; Yp++) {
+             const Ap = Math.floor(Yp * xp),
+               Pp = Math.floor((Yp + 1) * xp),
+               Wp = (Dp * cp + Yp) * Op;
+             for (let cp = 0; cp < Op; cp++) {
+               let xp = 0;
+               for (let Sp = pp; Sp < Ip; Sp++)
+ ... (2 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L229` → after: `L87-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L87-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L87-L90) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L229)

```diff
-         return this._engine.currentRenderPassId = zC, ZC
+         if (pp instanceof Float32Array) return Sp;
+         const Yp = new(0, pp.constructor)(Ip);
+         for (let Dp = 0; Dp < Ip; Dp++) Yp[Dp] = Sp[Dp] + .5 | 0;
+         return Yp
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L231-L252` → after: `L92-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L92-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L92-L103) · [Before (L231-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L231-L252)

```diff
-       _prepareRenderingManager() {
-         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const ZC = this._scene;
-         let QC, wC, bC = null;
-         const nC = this.renderList ? this.renderList : ZC.frameGraph ? ZC.meshes : ZC.getActiveMeshes().data,
-           fC = this.renderList || ZC.frameGraph ? nC.length : ZC.getActiveMeshes().length;
-         if (this.getCustomRenderList && (bC = this.getCustomRenderList(CC, nC, fC)), bC) QC = bC.length, wC = this.forceLayerMaskCheck;
-         else {
-           if (this._defaultRenderListPrepared && !zC && !this._engine.isWebGPU) return nC;
-           this._defaultRenderListPrepared = !0, bC = nC, QC = fC, wC = !this.renderList || this.forceLayerMaskCheck
-         }
-         const oC = ZC.activeCamera,
-           qC = this.cameraForLOD ?? oC,
-           FC = ZC.getBoundingBoxRenderer?.();
-         if (ZC._activeMeshesFrozen && this._isFrozen) {
- ... (6 more removed lines; see GitHub link above)
+       static ConvertCubeMapToSphericalPolynomial(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         const cp = ip > 0 ? this._NearestPow2Floor(ip) : 0;
+         if (cp > 0 && pp.size > cp) {
+           const ip = 5 === pp.format ? 4 : 3,
+             Op = ["right", "left", "up", "down", "front", "back"],
+             op = {};
+           for (const Ip of Op) op[Ip] = this._DownsampleFace(pp[Ip], pp.size, cp, ip);
+           pp = {
+             ...pp,
+             ...op,
+             size: cp
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L256-L265` → after: `L106-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L106-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L106-L132) · [Before (L256-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L256-L265)

```diff
-         if (this._renderingManager.reset(), this._activeMeshes.reset(), this._activeBoundingBoxes.reset(), FC && FC.reset(), this.renderMeshes) {
-           const CC = ZC.getRenderId(),
-             zC = ZC.getFrameId();
-           for (let nC = 0; nC < QC; nC++) {
-             const QC = bC[nC];
-             if (QC && !QC.isBlocked) {
-               if (this.customIsReadyFunction) {
-                 if (!this.customIsReadyFunction(QC, this.refreshRate, !1)) {
-                   this.resetRefreshCounter();
-                   continue
+         const Op = new Ip.c;
+         let Lp = 0;
+         const Yp = 2 / pp.size,
+           Dp = Yp,
+           Ap = .5 * Yp,
+           Pp = Ap - 1;
+         for (let Ip = 0; Ip < 6; Ip++) {
+           const ip = this._FileFaces[Ip],
+             cp = pp[ip.name];
+           let Wp = Pp;
+           const yp = 5 === pp.format ? 4 : 3;
+           for (let Ip = 0; Ip < pp.size; Ip++) {
+             let Up = Pp;
+             for (let Dp = 0; Dp < pp.size; Dp++) {
+               const Pp = ip.worldAxisForFileX.scale(Up).add(ip.worldAxisForFileY.scale(Wp)).add(ip.worldAxisForNormal);
+               Pp.normalize();
+ ... (11 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L267-L286` → after: `L134-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L134-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L134-L136) · [Before (L267-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L267-L286)

```diff
-               } else if (!QC.isReady(0 === this.refreshRate)) {
-                 this.resetRefreshCounter();
-                 continue
-               }
-               let bC, nC;
-               if (qC) {
-                 const CC = QC._internalAbstractMeshDataInfo._currentLOD.get(qC);
-                 CC && CC[1] === zC ? bC = CC[0] : (bC = ZC.customLODSelector ? ZC.customLODSelector(QC, qC) : QC.getLOD(qC), CC ? (CC[0] = bC, CC[1] = zC) : QC._internalAbstractMeshDataInfo._currentLOD.set(qC, [bC, zC]))
-               } else bC = QC;
-               if (!bC) continue;
-               if (bC !== QC && 0 !== bC.billboardMode && bC.computeWorldMatrix(), bC._preActivateForIntermediateRendering(CC), nC = !(!wC || !oC) && 0 === (QC.layerMask & oC.layerMask), QC.isEnabled() && QC.isVisible && QC.Zx && !nC) {
-                 if (this._activeMeshes.push(QC), bC._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, bC !== QC && bC._activate(CC, !0), this.enableBoundingBoxRendering && FC && FC._preActiveMesh(QC), QC._activate(CC, !0) && QC.Zx.length) {
-                   QC.ZH ? QC._internalAbstractMeshDataInfo._actAsRegularMesh && (bC = QC) : bC._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, bC._internalAbstractMeshDataInfo._isActiveIntermediate = !0, ZC._prepareSkeleton(bC);
-                   for (let CC = 0; CC < bC.Zx.length; CC++) {
-                     const zC = bC.Zx[CC];
-                     this.enableBoundingBoxRendering && FC && FC._evaluateSubMesh(QC, zC), this._renderingManager.dispatch(zC, bC)
- ... (4 more removed lines; see GitHub link above)
+               } else vp = (0, op.Clamp)(vp, 0, dp), tp = (0, op.Clamp)(tp, 0, dp), Hp = (0, op.Clamp)(Hp, 0, dp);
+               const ep = new xp.d(vp, tp, Hp);
+               Op.addLight(Pp, ep, wp), Lp += wp, Up += Yp
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L290-L340` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L141-L142) · [Before (L290-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L290-L340)

```diff
-         if (this.enableBoundingBoxRendering && FC && zC)
-           for (let WC = 0; WC < FC.renderList.length; WC++) {
-             const CC = FC.renderList.data[WC];
-             this._activeBoundingBoxes.push(CC)
-           }
-         if (this._scene.particlesEnabled && this.renderParticles) {
-           this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
-           const CC = this.particleSystemList || ZC.Ix;
-           for (let zC = 0; zC < CC.length; zC++) {
-             const ZC = CC[zC],
-               QC = ZC.emitter;
-             ZC.isStarted() && QC && (!QC.position || QC.isEnabled()) && this._renderingManager.dispatchParticles(ZC)
-           }
-           this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
-         }
-         return bC
- ... (35 more removed lines; see GitHub link above)
+         const Wp = 6 * (4 * Math.PI) / 6 / Lp;
+         return Op.scaleInPlace(Wp), Op.convertIncidentRadianceToIrradiance(), Op.convertIrradianceToLambertianRadiance(), Ip.e.FromHarmonics(Op)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L343-L745` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L145) · [Before (L343-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L343-L745)

```diff
-     SC.REFRESHRATE_RENDER_ONCE = 0, SC.REFRESHRATE_RENDER_ONEVERYFRAME = 1, SC.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
-     var pC = ZC(39694);
-     class PC extends bC.h {
-       get renderListPredicate() {
-         return this._objectRenderer.renderListPredicate
-       }
-       set renderListPredicate(CC) {
-         this._objectRenderer.renderListPredicate = CC
-       }
-       get renderList() {
-         return this._objectRenderer.renderList
-       }
-       set renderList(CC) {
-         this._objectRenderer.renderList = CC
-       }
-       get particleSystemList() {
- ... (387 more removed lines; see GitHub link above)
+     Yp._FileFaces = [new Lp("right", new Op.o(1, 0, 0), new Op.o(0, 0, -1), new Op.o(0, -1, 0)), new Lp("left", new Op.o(-1, 0, 0), new Op.o(0, 0, 1), new Op.o(0, -1, 0)), new Lp("up", new Op.o(0, 1, 0), new Op.o(1, 0, 0), new Op.o(0, 0, 1)), new Lp("down", new Op.o(0, -1, 0), ne … [truncated]
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L747` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L147) · [Before (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L747)

```diff
-   41622: (CC, zC, ZC) => {
+   42016: (pp, ip, cp) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L749-L750` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L149) · [Before (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L749-L750)

```diff
-       b: () => qC,
-       e: () => FC
+       DDSTools: () => yp
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L752-L810` → after: `L151-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L151-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L151-L159) · [Before (L752-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L752-L810)

```diff
-     var QC = ZC(39959),
-       wC = ZC(37931),
-       bC = ZC(36987),
-       nC = ZC(39666),
-       fC = ZC(40148);
-     const oC = {
-       positions: [1, 1, -1, 1, -1, -1, 1, -1],
-       indices: [0, 1, 2, 0, 2, 3]
-     };
-     class qC {
-       constructor(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oC;
-         this._fullscreenViewport = new wC.d(0, 0, 1, 1);
-         const ZC = zC.positions ?? oC.positions,
-           bC = zC.indices ?? oC.indices;
-         this.engine = CC, this._vertexBuffers = {
- ... (43 more removed lines; see GitHub link above)
+     var Op = cp(37356),
+       op = cp(38905),
+       Ip = cp(42025),
+       Sp = cp(40276);
+     const xp = 131072,
+       Lp = 131072;
+ 
+     function Yp(pp) {
+       return pp.charCodeAt(0) + (pp.charCodeAt(1) << 8) + (pp.charCodeAt(2) << 16) + (pp.charCodeAt(3) << 24)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L813-L898` → after: `L166-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L166-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L166-L189) · [Before (L813-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L813-L898)

```diff
-       static RegisterShaderCodeProcessing(CC, zC) {
-         zC ? FC._CustomShaderCodeProcessing[CC ?? ""] = zC : delete FC._CustomShaderCodeProcessing[CC ?? ""]
-       }
-       static _GetShaderCodeProcessing(CC) {
-         return FC._CustomShaderCodeProcessing[CC] ?? FC._CustomShaderCodeProcessing[""]
-       }
-       get name() {
-         return this.options.name
-       }
-       set name(CC) {
-         this.options.name = CC
-       }
-       isReady() {
-         return this._drawWrapper.effect?.isReady() ?? !1
-       }
-       get drawWrapper() {
- ... (70 more removed lines; see GitHub link above)
+       static GetDDSInfo(pp) {
+         const ip = new Int32Array(pp.buffer, pp.byteOffset, 31),
+           cp = new Int32Array(pp.buffer, pp.byteOffset, 35);
+         let Op = 1;
+         ip[2] & xp && (Op = Math.max(1, ip[7]));
+         const op = ip[21],
+           Ip = op === Wp ? cp[32] : 0;
+         let Sp = 0;
+         switch (op) {
+           case 113:
+             Sp = 2;
+             break;
+           case 116:
+             Sp = 1;
+             break;
+           case Wp:
+ ... (8 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L986-L1008` → after: `L192-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L192-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L192-L201) · [Before (L986-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L986-L1008)

```diff
-           canvas: CC,
-           dumpEngine: {
-             engine: QC,
-             renderer: bC,
-             wrapper: qC
-           }
-         }
-       }()), await WC
-     }
-     let MC = (() => {
-       var CC;
-       let zC, ZC = [];
-       return CC = class {
-         static async EncodeImageAsync(CC, zC, ZC, QC, wC, nC) {
-           const fC = await NC(),
-             oC = fC.dumpEngine;
- ... (7 more removed lines; see GitHub link above)
+           width: ip[4],
+           height: ip[3],
+           mipmapCount: Op,
+           isFourCC: 4 === (4 & ip[20]),
+           isRGB: 64 === (64 & ip[20]),
+           isLuminance: (ip[20] & Lp) === Lp,
+           isCube: 512 === (512 & ip[28]),
+           isCompressed: op === Dp || op === Ap || op === Pp,
+           dxgiFormat: Ip,
+           textureType: Sp
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L1053-L1333` → after: `L204-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L204-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L204-L211) · [Before (L1053-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L1053-L1333)

```diff
-       const NC = await MC.EncodeImageAsync(ZC, CC, zC, QC, fC, WC);
-       void 0 !== wC && bC.g.DownloadBlob(NC, wC), NC.type !== QC && oC.c.Warn(`DumpData: The requested mimeType '${QC}' is not supported. The result has mimeType '${NC.type}' instead.`);
-       const gC = await NC.arrayBuffer();
-       return FC ? gC : `data:${QC};base64,${(0,qC.i)(gC)}`
-     }
- 
-     function PC(CC, zC, ZC, QC) {
-       let wC = arguments.length > 5 ? arguments[5] : void 0;
-       void 0 !== wC || QC || (wC = ""), pC(CC, zC, ZC, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", wC, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.len … [truncated]
-         QC && QC(CC)
-       }))
-     }
- 
-     function GC() {
-       WC && (WC?.then((CC => {
-         CC.canvas instanceof HTMLCanvasElement && CC.canvas.remove(), CC.dumpEngine && (CC.dumpEngine.engine.dispose(), CC.dumpEngine.renderer.dispose(), CC.dumpEngine.wrapper.dispose())
- ... (265 more removed lines; see GitHub link above)
+       static _GetHalfFloatAsFloatRGBAArrayBuffer(pp, ip, cp, Op, op, Ip) {
+         const xp = new Float32Array(Op),
+           Lp = new Uint16Array(op, cp);
+         let Yp = 0;
+         for (let Dp = 0; Dp < ip; Dp++)
+           for (let ip = 0; ip < pp; ip++) {
+             const cp = 4 * (ip + Dp * pp);
+             xp[Yp] = (0, Sp.c)(Lp[cp]), xp[Yp + 1] = (0, Sp.c)(Lp[cp + 1]), xp[Yp + 2] = (0, Sp.c)(Lp[cp + 2]), yp.StoreLODInAlphaChannel ? xp[Yp + 3] = Ip : xp[Yp + 3] = (0, Sp.c)(Lp[cp + 3]), Yp += 4
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L1335` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L213) · [Before (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L1335)

```diff
-         }(CC, pC, PC, fC, oC, FC)
+         return xp
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L1337-L1344` → after: `L215-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L215-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L215-L225) · [Before (L1337-L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L1337-L1344)

```diff
-       let GC = await CC.readPixels(fC, oC);
-       if (!GC) throw new Error(`Failed to read pixels from texture ${CC.name}.`);
-       if (GC instanceof Float32Array) {
-         const CC = new Uint8Array(GC.length);
-         let zC = GC.length;
-         for (; zC--;) {
-           const ZC = GC[zC];
-           CC[zC] = Math.round(255 * (0, WC.Clamp)(ZC))
+       static _GetHalfFloatRGBAArrayBuffer(pp, ip, cp, Op, op, Ip) {
+         if (yp.StoreLODInAlphaChannel) {
+           const xp = new Uint16Array(Op),
+             Lp = new Uint16Array(op, cp);
+           let Yp = 0;
+           for (let cp = 0; cp < ip; cp++)
+             for (let ip = 0; ip < pp; ip++) {
+               const Op = 4 * (ip + cp * pp);
+               xp[Yp] = Lp[Op], xp[Yp + 1] = Lp[Op + 1], xp[Yp + 2] = Lp[Op + 2], xp[Yp + 3] = (0, Sp.h)(Ip), Yp += 4
+             }
+           return xp
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L1346-L1358` → after: `L227-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L227-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L227-L237) · [Before (L1346-L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L1346-L1358)

```diff
-         GC = CC
-       }
-       const RC = pC * PC,
-         AC = 4 * RC;
-       if (GC.length !== AC) {
-         const CC = 0 === RC ? 0 : GC.length / RC;
-         if (1 === CC || 2 === CC || 3 === CC) {
-           const zC = new Uint8Array(AC);
-           for (let ZC = 0, QC = 0, wC = 0; ZC < RC; ZC++, wC += 4) {
-             const ZC = GC[QC++];
-             if (1 === CC) {
-               zC[wC] = ZC, zC[wC + 1] = ZC, zC[wC + 2] = ZC, zC[wC + 3] = 255;
-               continue
+         return new Uint16Array(op, cp, Op)
+       }
+       static _GetFloatRGBAArrayBuffer(pp, ip, cp, Op, op, Ip) {
+         if (yp.StoreLODInAlphaChannel) {
+           const Sp = new Float32Array(Op),
+             xp = new Float32Array(op, cp);
+           let Lp = 0;
+           for (let cp = 0; cp < ip; cp++)
+             for (let ip = 0; ip < pp; ip++) {
+               const Op = 4 * (ip + cp * pp);
+               Sp[Lp] = xp[Op], Sp[Lp + 1] = xp[Op + 1], Sp[Lp + 2] = xp[Op + 2], Sp[Lp + 3] = Ip, Lp += 4
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L1366-L1723` → after: `L251-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L251-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L251-L258) · [Before (L1366-L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L1366-L1723)

```diff
-       return GC
-     }
-     const SC = {
-       CreateResizedCopy: function(CC, zC, ZC) {
-         let bC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-         const nC = CC.Km(),
-           fC = nC.mg(),
-           oC = new wC.e("resized" + CC.name, {
-             width: zC,
-             height: ZC
-           }, nC, !CC.noMipmap, !0, CC._texture.type, !1, CC.samplingMode, !1);
-         oC.wrapU = CC.wrapU, oC.wrapV = CC.wrapV, oC.uOffset = CC.uOffset, oC.vOffset = CC.vOffset, oC.uScale = CC.uScale, oC.vScale = CC.vScale, oC.uAng = CC.uAng, oC.vAng = CC.vAng, oC.wAng = CC.wAng, oC.coordinatesIndex = CC.coordinatesIndex, oC.level = CC.level, oC.anisotropi … [truncated]
-         const qC = new FC("pass", 1, null, bC ? QC.h.BILINEAR_SAMPLINGMODE : QC.h.NEAREST_SAMPLINGMODE, fC, !1, 0);
-         return qC.externalTextureSamplerBinding = !0, qC.onEffectCreatedObservable.addOnce((zC => {
-           zC.executeWhenCompiled((() => {
-             qC.onApply = function(zC) {
- ... (342 more removed lines; see GitHub link above)
+       static _GetFloatAsUIntRGBAArrayBuffer(pp, ip, cp, op, Ip, Sp) {
+         const xp = new Uint8Array(op),
+           Lp = new Float32Array(Ip, cp);
+         let Yp = 0;
+         for (let Dp = 0; Dp < ip; Dp++)
+           for (let ip = 0; ip < pp; ip++) {
+             const cp = 4 * (ip + Dp * pp);
+             xp[Yp] = 255 * (0, Op.Clamp)(Lp[cp]), xp[Yp + 1] = 255 * (0, Op.Clamp)(Lp[cp + 1]), xp[Yp + 2] = 255 * (0, Op.Clamp)(Lp[cp + 2]), yp.StoreLODInAlphaChannel ? xp[Yp + 3] = Sp : xp[Yp + 3] = 255 * (0, Op.Clamp)(Lp[cp + 3]), Yp += 4
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L1725-L1726` → after: `L260-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L260-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L260-L269) · [Before (L1725-L1726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L1725-L1726)

```diff
-           static _Parse(zC, ZC, QC, wC) {
-             return qC.d.Parse((() => new CC(zC.name, zC.fragmentUrl, zC.parameters, zC.samplers, zC.options, ZC, zC.renderTargetSamplingMode, zC._engine, zC.reusable, zC.defines, zC.textureType, zC.vertexUrl, zC.indexParameters, !1, zC.textureFormat)), zC, QC, wC)
+         return xp
+       }
+       static _GetHalfFloatAsUIntRGBAArrayBuffer(pp, ip, cp, op, Ip, xp) {
+         const Lp = new Uint8Array(op),
+           Yp = new Uint16Array(Ip, cp);
+         let Dp = 0;
+         for (let Ap = 0; Ap < ip; Ap++)
+           for (let ip = 0; ip < pp; ip++) {
+             const cp = 4 * (ip + Ap * pp);
+             Lp[Dp] = 255 * (0, Op.Clamp)((0, Sp.c)(Yp[cp])), Lp[Dp + 1] = 255 * (0, Op.Clamp)((0, Sp.c)(Yp[cp + 1])), Lp[Dp + 2] = 255 * (0, Op.Clamp)((0, Sp.c)(Yp[cp + 2])), yp.StoreLODInAlphaChannel ? Lp[Dp + 3] = xp : Lp[Dp + 3] = 255 * (0, Op.Clamp)((0, Sp.c)(Yp[cp + 3])), Dp … [truncated]
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L1728-L1964` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L271) · [Before (L1728-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L1728-L1964)

```diff
-         }, (() => {
-           const ZC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-           zC = [(0, oC.M)()], fC = [(0, oC.M)()], WC = [(0, oC.M)()], gC = [(0, oC.M)()], SC = [(0, oC.M)()], PC = [(0, oC.q)()], GC = [(0, oC.M)()], RC = [(0, oC.M)()], AC = [(0, oC.M)()], xC = [(0, oC.M)()], JC = [(0, oC.M)()], IC = [(0, oC.M)()], iC = [(0, oC.M)()], vC = [(0,  … [truncated]
-             kind: "getter",
-             name: "name",
-             static: !1,
-             private: !1,
-             access: {
-               has: CC => "name" in CC,
-               get: CC => CC.name
-             },
-             metadata: ZC
-           }, null, KC), (0, QC.j)(CC, null, AC, {
-             kind: "getter",
-             name: "alphaMode",
-             static: !1,
- ... (221 more removed lines; see GitHub link above)
+         return Lp
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L1966-L1976` → after: `L273-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L273-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L273-L282) · [Before (L1966-L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L1966-L1976)

```diff
-       constructor(CC) {
-         let zC = arguments.length > 2 ? arguments[2] : void 0;
-         const ZC = {
-           name: CC,
-           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || wC.c.LastCreatedEngine,
-           useShaderStore: !0,
-           useAsPostProcess: !0,
-           fragmentShader: bC.FragmentUrl,
-           ...zC
-         };
-         ZC.engine || (ZC.engine = wC.c.LastCreatedEngine), super(ZC)
+       static _GetRGBAArrayBuffer(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
+         const Yp = new Uint8Array(Op),
+           Dp = new Uint8Array(op, cp);
+         let Ap = 0;
+         for (let Pp = 0; Pp < ip; Pp++)
+           for (let ip = 0; ip < pp; ip++) {
+             const cp = 4 * (ip + Pp * pp);
+             Yp[Ap] = Dp[cp + Ip], Yp[Ap + 1] = Dp[cp + Sp], Yp[Ap + 2] = Dp[cp + xp], Yp[Ap + 3] = Dp[cp + Lp], Ap += 4
+           }
+         return Yp
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L1978-L1982` → after: `L284-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L284-L285) · [Before (L1978-L1982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L1978-L1982)

```diff
-     }
-     bC.FragmentUrl = "pass";
-     class nC extends QC.e {
-       _gatherImports(CC, zC) {
-         CC ? (this._webGPUReady = !0, zC.push(Promise.all([ZC.e(373).then((() => ZC(61111)))]))) : zC.push(Promise.all([ZC.e(374).then((() => ZC(61118)))])), super._gatherImports(CC, zC)
+       static _ExtractLongWordOrder(pp) {
+         return 0 === pp || 255 === pp || -16777216 === pp ? 0 : 1 + yp._ExtractLongWordOrder(pp >> 8)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L1984-L1993` → after: `L287-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L287-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L287-L296) · [Before (L1984-L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L1984-L1993)

```diff
-       constructor(CC) {
-         super({
-           ...arguments.length > 2 ? arguments[2] : void 0,
-           name: CC,
-           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || wC.c.LastCreatedEngine,
-           useShaderStore: !0,
-           useAsPostProcess: !0,
-           fragmentShader: nC.FragmentUrl,
-           defines: "#define POSITIVEX"
-         }), this._face = 0
+       static _GetRGBArrayBuffer(pp, ip, cp, Op, op, Ip, Sp, xp) {
+         const Lp = new Uint8Array(Op),
+           Yp = new Uint8Array(op, cp);
+         let Dp = 0;
+         for (let Ap = 0; Ap < ip; Ap++)
+           for (let ip = 0; ip < pp; ip++) {
+             const cp = 3 * (ip + Ap * pp);
+             Lp[Dp] = Yp[cp + Ip], Lp[Dp + 1] = Yp[cp + Sp], Lp[Dp + 2] = Yp[cp + xp], Dp += 3
+           }
+         return Lp
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L1995-L1996` → after: `L298-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L298-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L298-L307) · [Before (L1995-L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L1995-L1996)

```diff
-       get face() {
-         return this._face
+       static _GetLuminanceArrayBuffer(pp, ip, cp, Op, op) {
+         const Ip = new Uint8Array(Op),
+           Sp = new Uint8Array(op, cp);
+         let xp = 0;
+         for (let Lp = 0; Lp < ip; Lp++)
+           for (let ip = 0; ip < pp; ip++) {
+             const cp = ip + Lp * pp;
+             Ip[xp] = Sp[cp], xp++
+           }
+         return Ip
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L1998-L2001` → after: `L309-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L309-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L309-L329) · [Before (L1998-L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L1998-L2001)

```diff
-       set face(CC) {
-         if (!(CC < 0 || CC > 5)) switch (this._face = CC, this._face) {
-           case 0:
-             this.updateEffect("#define POSITIVEX");
+       static UploadDDSLevels(pp, ip, cp, Op, Sp, Lp) {
+         let Yp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : -1,
+           Up = arguments.length > 7 ? arguments[7] : void 0,
+           wp = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
+           vp = null;
+         Op.sphericalPolynomial && (vp = []);
+         const tp = !!pp.getCaps().s3tc;
+         ip.generateMipMaps = Sp;
+         const Hp = new Int32Array(cp.buffer, cp.byteOffset, 31);
+         let dp, ep, jp, kp, mp, Rp, qp, Mp = 0,
+           Cp = 0,
+           Ep = 1;
+         if (542327876 !== Hp[0]) return void op.e.Error("Invalid magic number in DDS header");
+         if (!Op.isFourCC && !Op.isRGB && !Op.isLuminance) return void op.e.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
+         if (Op.isCompressed && !tp) return void op.e.Error("Compressed textures are not supported on this platform.");
+         let Xp = Hp[22];
+ ... (5 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L2003-L2004` → after: `L331-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L331-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L331-L332) · [Before (L2003-L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L2003-L2004)

```diff
-           case 1:
-             this.updateEffect("#define NEGATIVEX");
+           case Ap:
+             Ep = 16, Cp = 33778;
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L2006-L2007` → after: `L334-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L334-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L334-L335) · [Before (L2006-L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L2006-L2007)

```diff
-           case 2:
-             this.updateEffect("#define POSITIVEY");
+           case Pp:
+             Ep = 16, Cp = 33779;
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L2009-L2010` → after: `L337-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L337-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L337-L338) · [Before (L2009-L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L2009-L2010)

```diff
-           case 3:
-             this.updateEffect("#define NEGATIVEY");
+           case 113:
+             lp = !0, Xp = 64;
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L2012-L2013` → after: `L340-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L340-L341) · [Before (L2012-L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L2012-L2013)

```diff
-           case 4:
-             this.updateEffect("#define POSITIVEZ");
+           case 116:
+             lp = !0, Xp = 128;
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L2015-L2016` → after: `L343-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L343-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L343-L413) · [Before (L2015-L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L2015-L2016)

```diff
-           case 5:
-             this.updateEffect("#define NEGATIVEZ")
+           case Wp: {
+             kp += 20;
+             let pp = !1;
+             switch (Op.dxgiFormat) {
+               case 10:
+                 lp = !0, Xp = 64, pp = !0;
+                 break;
+               case 2:
+                 lp = !0, Xp = 128, pp = !0;
+                 break;
+               case 88:
+                 Op.isRGB = !0, Op.isFourCC = !1, Xp = 32, pp = !0
+             }
+             if (pp) break
+           }
+           default:
+ ... (55 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/311.js` (Changed code · before: `L2020` → after: `L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551dR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-61d6e7084cda14d66719d12d78ea53e9eea6acadc5459fe32bbca712e606551d) · [After (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/311.js#L429) · [Before (L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/311.js#L2020)

```diff
-     nC.FragmentUrl = "passCube"
+     yp.StoreLODInAlphaChannel = !1
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/312.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/312.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/312.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/312.js#L2)

```diff
- export const ids = [312];
+ export const ids = [311, 312];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/312.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/312.js#L4)

```diff
-   41657: (CC, zC, ZC) => {
+   42041: (pp, ip, cp) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/312.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/312.js#L6)

```diff
-       _HDRTextureLoader: () => FC
+       _DDSTextureLoader: () => Ip
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L8` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/312.js#L8-L9) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/312.js#L8)

```diff
-     var QC = ZC(36963);
+     var Op = cp(40190),
+       op = cp(42016);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L10-L32` → after: `L11-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L11-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/312.js#L11-L107) · [Before (L10-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/312.js#L10-L32)

```diff
-       static ConvertPanoramaToCubemap(CC, zC, ZC, QC) {
-         let wC, bC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           nC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
-         if (!CC) throw "ConvertPanoramaToCubemap: input cannot be null";
-         if (CC.length != zC * ZC * 3) {
-           if (CC.length != zC * ZC * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
-           wC = 4
-         } else wC = 3;
-         return {
-           front: this.CreateCubemapTexture(QC, this.FACE_FRONT, CC, zC, ZC, bC, nC, wC),
-           back: this.CreateCubemapTexture(QC, this.FACE_BACK, CC, zC, ZC, bC, nC, wC),
-           left: this.CreateCubemapTexture(QC, this.FACE_LEFT, CC, zC, ZC, bC, nC, wC),
-           right: this.CreateCubemapTexture(QC, this.FACE_RIGHT, CC, zC, ZC, bC, nC, wC),
-           up: this.CreateCubemapTexture(QC, this.FACE_UP, CC, zC, ZC, bC, nC, wC),
-           down: this.CreateCubemapTexture(QC, this.FACE_DOWN, CC, zC, ZC, bC, nC, wC),
-           size: QC,
- ... (7 more removed lines; see GitHub link above)
+       constructor() {
+         this.supportCascades = !0
+       }
+       loadCubeData(pp, ip, cp, Ip) {
+         const Sp = ip.gy();
+         let xp, Lp = !1,
+           Yp = 1e3;
+         if (Array.isArray(pp))
+           for (let Op = 0; Op < pp.length; Op++) {
+             const cp = pp[Op];
+             xp = op.DDSTools.GetDDSInfo(cp), ip.width = xp.width, ip.height = xp.height, Lp = (xp.isRGB || xp.isLuminance || xp.mipmapCount > 1) && ip.generateMipMaps, Sp._unpackFlipY(xp.isCompressed), op.DDSTools.UploadDDSLevels(Sp, ip, cp, xp, Lp, 6, -1, Op), xp.isFourCC || 1 ! … [truncated]
+           } else {
+             const Ip = pp;
+             xp = op.DDSTools.GetDDSInfo(Ip), ip.width = xp.width, ip.height = xp.height, cp && (xp.sphericalPolynomial = new Op.e), Lp = (xp.isRGB || xp.isLuminance || xp.mipmapCount > 1) && ip.generateMipMaps, Sp._unpackFlipY(xp.isCompressed), op.DDSTools.UploadDDSLevels(Sp, ip, … [truncated]
+           }
+         Sp._setCubeMapTextureParams(ip, Lp, Yp), ip.isReady = !0, ip.onLoadedObservable.notifyObservers(ip), ip.onLoadedObservable.clear(), Ip && Ip({
+ ... (81 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L34-L73` → after: `L109-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L109-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/312.js#L109-L181) · [Before (L34-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/312.js#L34-L73)

```diff
-           FC = bC ? Math.max(1, Math.round(QC / 4 / CC)) : 1,
-           WC = 1 / FC,
-           NC = WC * WC,
-           MC = zC[1].subtract(zC[0]).scale(WC / CC),
-           gC = zC[3].subtract(zC[2]).scale(WC / CC),
-           SC = 1 / CC;
-         let pC = 0;
-         for (let PC = 0; PC < CC; PC++)
-           for (let bC = 0; bC < FC; bC++) {
-             let bC = zC[0],
-               oC = zC[2];
-             for (let zC = 0; zC < CC; zC++)
-               for (let WC = 0; WC < FC; WC++) {
-                 const FC = oC.subtract(bC).scale(pC).add(bC);
-                 FC.normalize();
-                 const WC = this.CalcProjectionSpherical(FC, ZC, QC, wC, fC, nC);
- ... (24 more removed lines; see GitHub link above)
+           xp = ip / cp,
+           Lp = 1 / (xp * xp);
+         for (let Dp = 0; Dp < cp; Dp++) {
+           const pp = Math.floor(Dp * xp),
+             Ip = Math.floor((Dp + 1) * xp);
+           for (let Yp = 0; Yp < cp; Yp++) {
+             const Ap = Math.floor(Yp * xp),
+               Pp = Math.floor((Yp + 1) * xp),
+               Wp = (Dp * cp + Yp) * Op;
+             for (let cp = 0; cp < Op; cp++) {
+               let xp = 0;
+               for (let Sp = pp; Sp < Ip; Sp++)
+                 for (let pp = Ap; pp < Pp; pp++) xp += op[(Sp * ip + pp) * Op + cp];
+               Sp[Wp + cp] = xp * Lp
+             }
+           }
+ ... (57 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L76-L87` → after: `L184-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L184-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/312.js#L184-L195) · [Before (L76-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/312.js#L76-L87)

```diff
- 
-     function bC(CC, zC, ZC, QC, wC, bC) {
-       wC > 0 ? (wC = function(CC, zC) {
-         return zC > 1023 ? CC * Math.pow(2, 1023) * Math.pow(2, zC - 1023) : zC < -1074 ? CC * Math.pow(2, -1074) * Math.pow(2, zC + 1074) : CC * Math.pow(2, zC)
-       }(1, wC - 136), CC[bC + 0] = zC * wC, CC[bC + 1] = ZC * wC, CC[bC + 2] = QC * wC) : (CC[bC + 0] = 0, CC[bC + 1] = 0, CC[bC + 2] = 0)
-     }
- 
-     function nC(CC, zC) {
-       let ZC, QC = "";
-       for (let wC = zC; wC < CC.length - zC && (ZC = String.fromCharCode(CC[wC]), "\n" != ZC); wC++) QC += ZC;
-       return QC
-     }
+     Yp._FileFaces = [new Lp("right", new Op.o(1, 0, 0), new Op.o(0, 0, -1), new Op.o(0, -1, 0)), new Lp("left", new Op.o(-1, 0, 0), new Op.o(0, 0, 1), new Op.o(0, -1, 0)), new Lp("up", new Op.o(0, 1, 0), new Op.o(1, 0, 0), new Op.o(0, 0, 1)), new Lp("down", new Op.o(0, -1, 0), ne … [truncated]
+   },
+   42016: (pp, ip, cp) => {
+     cp.d(ip, {
+       DDSTools: () => yp
+     });
+     var Op = cp(37356),
+       op = cp(38905),
+       Ip = cp(42025),
+       Sp = cp(40276);
+     const xp = 131072,
+       Lp = 131072;
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L90-L109` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/312.js#L198) · [Before (L90-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/312.js#L90-L109)

```diff
-       let zC = nC(CC, 0);
-       if ("#" != zC[0] || "?" != zC[1]) throw "Bad HDR Format.";
-       let ZC = !1,
-         QC = !1,
-         wC = 0;
-       do {
-         wC += zC.length + 1, zC = nC(CC, wC), "FORMAT=32-bit_rle_rgbe" == zC ? QC = !0 : 0 == zC.length && (ZC = !0)
-       } while (!ZC);
-       if (!QC) throw "HDR Bad header format, unsupported FORMAT";
-       wC += zC.length + 1, zC = nC(CC, wC);
-       const bC = /^-Y (.*) \+X (.*)$/g.exec(zC);
-       if (!bC || bC.length < 3) throw "HDR Bad header format, no size";
-       const fC = parseInt(bC[2]),
-         oC = parseInt(bC[1]);
-       if (fC < 8 || fC > 32767) throw "HDR Bad header format, unsupported size";
-       return wC += zC.length + 1, {
- ... (4 more removed lines; see GitHub link above)
+       return pp.charCodeAt(0) + (pp.charCodeAt(1) << 8) + (pp.charCodeAt(2) << 16) + (pp.charCodeAt(3) << 24)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L111-L137` → after: `L200-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L200-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/312.js#L200-L466) · [Before (L111-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/312.js#L111-L137)

```diff
- 
-     function oC(CC, zC) {
-       return function(CC, zC) {
-         let ZC = zC.height;
-         const QC = zC.width;
-         let wC, nC, fC, oC, FC, WC, NC, MC, gC = zC.dataPosition;
-         const SC = new ArrayBuffer(4 * QC),
-           pC = new Uint8Array(SC),
-           PC = new ArrayBuffer(zC.width * zC.height * 4 * 3),
-           GC = new Float32Array(PC);
-         for (; ZC > 0;) {
-           if (wC = CC[gC++], nC = CC[gC++], fC = CC[gC++], oC = CC[gC++], 2 != wC || 2 != nC || 128 & fC || zC.width < 8 || zC.width > 32767) return qC(CC, zC);
-           if ((fC << 8 | oC) != QC) throw "HDR Bad header format, wrong scan line width";
-           for (WC = 0, MC = 0; MC < 4; MC++)
-             for (NC = (MC + 1) * QC; WC < NC;)
-               if (wC = CC[gC++], nC = CC[gC++], wC > 128) {
- ... (11 more removed lines; see GitHub link above)
+     const Dp = Yp("DXT1"),
+       Ap = Yp("DXT3"),
+       Pp = Yp("DXT5"),
+       Wp = Yp("DX10");
+     class yp {
+       static GetDDSInfo(pp) {
+         const ip = new Int32Array(pp.buffer, pp.byteOffset, 31),
+           cp = new Int32Array(pp.buffer, pp.byteOffset, 35);
+         let Op = 1;
+         ip[2] & xp && (Op = Math.max(1, ip[7]));
+         const op = ip[21],
+           Ip = op === Wp ? cp[32] : 0;
+         let Sp = 0;
+         switch (op) {
+           case 113:
+             Sp = 2;
+ ... (251 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/312.js` (Changed code · before: `L139-L172` → after: `L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5R468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8dbae3c3e1b0ba376afe20b9fba19babc1f2775bd00ce2cbed70322953e8a4d5) · [After (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/312.js#L468) · [Before (L139-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/312.js#L139-L172)

```diff
- 
-     function qC(CC, zC) {
-       let ZC = zC.height;
-       const QC = zC.width;
-       let wC, nC, fC, oC, qC, FC = zC.dataPosition;
-       const WC = new ArrayBuffer(zC.width * zC.height * 4 * 3),
-         NC = new Float32Array(WC);
-       for (; ZC > 0;) {
-         for (qC = 0; qC < zC.width; qC++) wC = CC[FC++], nC = CC[FC++], fC = CC[FC++], oC = CC[FC++], bC(NC, wC, nC, fC, oC, (zC.height - ZC) * QC * 3 + 3 * qC);
-         ZC--
-       }
-       return NC
-     }
-     wC.FACE_LEFT = [new QC.r(-1, -1, -1), new QC.r(1, -1, -1), new QC.r(-1, 1, -1), new QC.r(1, 1, -1)], wC.FACE_RIGHT = [new QC.r(1, -1, 1), new QC.r(-1, -1, 1), new QC.r(1, 1, 1), new QC.r(-1, 1, 1)], wC.FACE_FRONT = [new QC.r(1, -1, -1), new QC.r(1, -1, 1), new QC.r(1, 1, -1), … [truncated]
-     class FC {
-       constructor() {
- ... (18 more removed lines; see GitHub link above)
+     yp.StoreLODInAlphaChannel = !1
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/313.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/313.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207)

#### 1. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/313.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/313.js#L4)

```diff
-   41665: (CC, zC, ZC) => {
+   42054: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/313.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/313.js#L6)

```diff
-       _KTXTextureLoader: () => gC
+       _ENVTextureLoader: () => Rp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L8-L51` → after: `L8-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L8-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/313.js#L8-L38) · [Before (L8-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/313.js#L8-L51)

```diff
-     var QC = ZC(38507);
-     class wC {
-       constructor(CC, zC) {
-         if (this.data = CC, this.isInvalid = !1, !wC.IsValid(CC)) return this.isInvalid = !0, void QC.c.Error("texture missing KTX identifier");
-         const ZC = Uint32Array.BYTES_PER_ELEMENT,
-           bC = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * ZC),
-           nC = 67305985 === bC.getUint32(0, !0);
-         return this.glType = bC.getUint32(1 * ZC, nC), this.glTypeSize = bC.getUint32(2 * ZC, nC), this.glFormat = bC.getUint32(3 * ZC, nC), this.glInternalFormat = bC.getUint32(4 * ZC, nC), this.glBaseInternalFormat = bC.getUint32(5 * ZC, nC), this.pixelWidth = bC.getUint32(6 *  … [truncated]
-       }
-       uploadLevels(CC, zC) {
-         switch (this.loadType) {
-           case wC.COMPRESSED_2D:
-             this._upload2DCompressedLevels(CC, zC);
-           case wC.TEX_2D:
-           case wC.COMPRESSED_3D:
-           case wC.TEX_3D:
- ... (28 more removed lines; see GitHub link above)
+     var Op = cp(40143),
+       op = cp(37320),
+       Ip = cp(37356),
+       Sp = cp(40190),
+       xp = cp(40033),
+       Lp = cp(40195),
+       Yp = (cp(40296), cp(42060)),
+       Dp = cp(38905),
+       Ap = (cp(42071), cp(42102), cp(40273));
+     const Pp = "image/png",
+       Wp = [134, 22, 135, 150, 246, 214, 150, 54];
+ 
+     function yp(pp) {
+       const ip = new DataView(pp.buffer, pp.byteOffset, pp.byteLength);
+       let cp = 0;
+       for (let Sp = 0; Sp < Wp.length; Sp++)
+ ... (15 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L54-L193` → after: `L41-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L41-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/313.js#L41-L94) · [Before (L54-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/313.js#L54-L193)

```diff
-       const ZC = zC?.jsDecoderModule || KTX2DECODER;
-       CC && (CC.wasmBaseUrl && (ZC.Transcoder.WasmBaseUrl = CC.wasmBaseUrl), CC.wasmUASTCToASTC && (ZC.LiteTranscoder_UASTC_ASTC.WasmModuleURL = CC.wasmUASTCToASTC), CC.wasmUASTCToBC7 && (ZC.LiteTranscoder_UASTC_BC7.WasmModuleURL = CC.wasmUASTCToBC7), CC.wasmUASTCToRGBA_UNORM &&  … [truncated]
-     }
- 
-     function WC(CC) {
-       let zC;
-       "undefined" === typeof CC && "undefined" !== typeof KTX2DECODER && (CC = KTX2DECODER), onmessage = ZC => {
-         if (ZC.data) switch (ZC.data.action) {
-           case "init": {
-             const QC = ZC.data.urls;
-             QC && (QC.jsDecoderModule && "undefined" === typeof CC && (importScripts(QC.jsDecoderModule), CC = KTX2DECODER), FC(QC)), ZC.data.wasmBinaries && FC(void 0, {
-               ...ZC.data.wasmBinaries,
-               jsDecoderModule: CC
-             }), zC = new CC.KTX2Decoder, postMessage({
-               action: "init"
-             });
- ... (124 more removed lines; see GitHub link above)
+       const cp = (ip = Up(ip)).specular;
+       let Op = Math.log2(ip.width);
+       if (Op = Math.round(Op) + 1, cp.mipmaps.length !== 6 * Op) throw new Error(`Unsupported specular mipmaps number "${cp.mipmaps.length}"`);
+       const op = new Array(Op);
+       for (let Ip = 0; Ip < Op; Ip++) {
+         op[Ip] = new Array(6);
+         for (let Op = 0; Op < 6; Op++) {
+           const Sp = cp.mipmaps[6 * Ip + Op];
+           op[Ip][Op] = new Uint8Array(pp.buffer, pp.byteOffset + ip.binaryDataPosition + Sp.position, Sp.length)
+         }
+       }
+       return op
+     }
+ 
+     function vp(pp, ip) {
+       ip = Up(ip);
+ ... (38 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L196-L205` → after: `L97-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L97-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/313.js#L97-L187) · [Before (L196-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/313.js#L196-L205)

```diff
-         }
-         if (NC._DecoderModulePromise) {
-           const QC = await NC._DecoderModulePromise;
-           return NC.DefaultDecoderOptions.isDirty && (NC._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = NC.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((wC, bC) => {
-             QC.decode(CC, ZC, zC).then((CC => {
-               wC(CC)
-             })).catch((CC => {
-               bC({
-                 message: CC
-               })
+         } else {
+           if (ip._uploadImageToTexture(Dp, pp, Ip, Sp), xp) {
+             const cp = Lp[Sp];
+             cp && ip._uploadImageToTexture(cp._texture, pp, Ip, 0)
+           }
+           Ap()
+         }
+       }))
+     }
+     async function dp(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Pp;
+       const Op = pp.gy();
+       pp.format = 5, pp.type = 0, pp.generateMipMaps = !0, pp._cachedAnisotropicFilteringLevel = null, Op.updateTextureSamplingMode(3, pp), await jp(pp, ip, !0, cp), pp.isReady = !0
+     }
+     async function ep(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Pp,
+ ... (75 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L207-L217` → after: `L189-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L189-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/313.js#L189-L198) · [Before (L207-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/313.js#L207-L217)

```diff
-           }))
-         }
-         throw new Error("KTX2 decoder module is not available")
-       }
-       _createTexture(CC, zC, ZC) {
-         if ((CC.layerCount ?? 1) > 1) throw new Error("KTX2 container - array textures are not supported by this texture loader.");
-         this._engine._bindTextureDirectly(3553, zC), ZC && (ZC.transcodedFormat = CC.transcodedFormat, ZC.isInGammaSpace = CC.isInGammaSpace, ZC.hasAlpha = CC.hasAlpha, ZC.transcoderName = CC.transcoderName);
-         let QC = !0;
-         switch (CC.transcodedFormat) {
-           case 32856:
-             zC.type = 0, zC.format = 5;
+           }
+           jp.push(Yp)
+         }
+       if (await Promise.all(jp), ip.length < Dp) {
+         let cp;
+         const Op = Math.pow(2, Dp - 1 - ip.length),
+           op = Op * Op * 4;
+         switch (pp.type) {
+           case 0:
+             cp = new Uint8Array(op);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L219-L220` → after: `L200-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/313.js#L200-L201) · [Before (L219-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/313.js#L219-L220)

```diff
-           case 33321:
-             zC.type = 0, zC.format = 6;
+           case 2:
+             cp = new Uint16Array(op);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L222-L361` → after: `L203-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L203-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/313.js#L203-L222) · [Before (L222-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/313.js#L222-L361)

```diff
-           case 33323:
-             zC.type = 0, zC.format = 7;
-             break;
-           default:
-             zC.format = CC.transcodedFormat, QC = !1
-         }
-         if (zC._gammaSpace = CC.isInGammaSpace, zC.generateMipMaps = CC.mipmaps.length > 1, zC.width = CC.mipmaps[0].width, zC.height = CC.mipmaps[0].height, CC.errors) throw new Error("KTX2 container - could not transcode the data. " + CC.errors);
-         for (let wC = 0; wC < CC.mipmaps.length; ++wC) {
-           const ZC = CC.mipmaps[wC];
-           if (!ZC || !ZC.data) throw new Error("KTX2 container - could not transcode one of the image");
-           QC ? (zC.width = ZC.width, zC.height = ZC.height, this._engine._uploadDataToTextureDirectly(zC, ZC.data, 0, wC, void 0, !0)) : this._engine._uploadCompressedDataToTextureDirectly(zC, CC.transcodedFormat, ZC.width, ZC.height, ZC.data, 0, wC)
-         }
-         zC._extension = ".ktx2", zC.isReady = !0, this._engine._bindTextureDirectly(3553, null)
-       }
-       static IsValid(CC) {
-         if (CC.byteLength >= 12) {
- ... (124 more removed lines; see GitHub link above)
+           case 1:
+             cp = new Float32Array(op)
+         }
+         for (let Ip = ip.length; Ip < Dp; Ip++)
+           for (let ip = 0; ip < 6; ip++) Wp._uploadArrayBufferViewToTexture(vp?.texture || pp, cp, ip, Ip)
+       }
+       if (vp) {
+         const ip = pp._irradianceTexture;
+         pp._irradianceTexture = null, Wp._releaseTexture(pp), vp._swapAndDie(pp), pp._irradianceTexture = ip
+       }
+       wp && wp.dispose(), Up && (pp._lodTextureHigh && pp._lodTextureHigh._texture && (pp._lodTextureHigh._texture.isReady = !0), pp._lodTextureMid && pp._lodTextureMid._texture && (pp._lodTextureMid._texture.isReady = !0), pp._lodTextureLow && pp._lodTextureLow._texture && (pp._ … [truncated]
+     }
+ 
+     function kp(pp, ip) {
+       const cp = (ip = Up(ip)).irradiance;
+       if (!cp) return;
+ ... (4 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L366` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/313.js#L227) · [Before (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/313.js#L366)

```diff
-       loadCubeData(CC, zC, ZC, QC) {
+       loadCubeData(pp, ip, cp, Op, op) {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L368-L390` → after: `L229-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L229-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/313.js#L229-L244) · [Before (L368-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/313.js#L368-L390)

```diff
-         zC._invertVScale = !zC.invertY;
-         const bC = zC.mg(),
-           nC = new wC(CC, 6),
-           fC = MC(nC.glInternalFormat);
-         null !== fC ? (zC.format = fC, zC._useSRGBBuffer = bC._getUseSRGBBuffer(!0, !zC.generateMipMaps), zC._gammaSpace = !0) : zC.format = nC.glInternalFormat;
-         const oC = nC.numberOfMipmapLevels > 1 && zC.generateMipMaps;
-         bC._unpackFlipY(!0), nC.uploadLevels(zC, zC.generateMipMaps), zC.width = nC.pixelWidth, zC.height = nC.pixelHeight, bC._setCubeMapTextureParams(zC, oC, nC.numberOfMipmapLevels - 1), zC.isReady = !0, zC.onLoadedObservable.notifyObservers(zC), zC.onLoadedObservable.clear(), … [truncated]
-       }
-       loadData(CC, zC, ZC, bC) {
-         if (wC.IsValid(CC)) {
-           zC._invertVScale = !zC.invertY;
-           const QC = new wC(CC, 1),
-             bC = MC(QC.glInternalFormat);
-           null !== bC ? (zC.format = bC, zC._useSRGBBuffer = zC.mg()._getUseSRGBBuffer(!0, !zC.generateMipMaps), zC._gammaSpace = !0) : zC.format = QC.glInternalFormat, ZC(QC.pixelWidth, QC.pixelHeight, zC.generateMipMaps, !0, (() => {
-             QC.uploadLevels(zC, zC.generateMipMaps)
-           }), QC.isInvalid)
- ... (7 more removed lines; see GitHub link above)
+         const Ip = yp(pp);
+         if (Ip) {
+           ip.width = Ip.width, ip.height = Ip.width;
+           try {
+             (0, mp.d)(), kp(ip, Ip), tp(ip, pp, Ip).then((() => {
+               ip.isReady = !0, ip.onLoadedObservable.notifyObservers(ip), ip.onLoadedObservable.clear(), Op && Op()
+             }), (pp => {
+               op?.("Can not upload environment levels", pp)
+             }))
+           } catch (Sp) {
+             op?.("Can not upload environment file", Sp)
+           }
+         } else op && op("Can not parse the environment file", null)
+       }
+       loadData() {
+         throw ".env not supported in 2d."
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L394` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/313.js#L248) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/313.js#L394)

```diff
-   41672: (CC, zC, ZC) => {
+   42109: (pp, ip, cp) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L396` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/313.js#L250) · [Before (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/313.js#L396)

```diff
-       e: () => wC
+       d: () => Sp
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L399-L423` → after: `L287-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L287-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/313.js#L287-L332) · [Before (L399-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/313.js#L399-L423)

```diff
-       constructor(CC) {
-         this._pendingActions = new Array, this._workerInfos = CC.map((CC => ({
-           workerPromise: Promise.resolve(CC),
-           idle: !0
-         })))
-       }
-       dispose() {
-         for (const CC of this._workerInfos) CC.workerPromise.then((CC => {
-           CC.terminate()
-         }));
-         this._workerInfos.length = 0, this._pendingActions.length = 0
-       }
-       push(CC) {
-         this._executeOnIdleWorker(CC) || this._pendingActions.push(CC)
-       }
-       _executeOnIdleWorker(CC) {
- ... (9 more removed lines; see GitHub link above)
+       constructor(pp, ip, cp, Op) {
+         this.name = pp, this.worldAxisForNormal = ip, this.worldAxisForFileX = cp, this.worldAxisForFileY = Op
+       }
+     }
+     class Yp {
+       static _NearestPow2Floor(pp) {
+         return pp <= 1 ? 1 : 1 << Math.floor(Math.log2(pp))
+       }
+       static ConvertCubeMapTextureToSphericalPolynomial(pp) {
+         if (!pp.isCube) return null;
+         pp.Gl()?.gy().flushFramebuffer();
+         const ip = pp.getSize().width,
+           cp = pp._sphericalPolynomialTargetSize,
+           Op = cp > 0 ? this._NearestPow2Floor(cp) : 0,
+           op = !pp.noMipmap && !0 === pp._texture?.generateMipMaps,
+           Ip = Op > 0 && Op < ip && op,
+ ... (30 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L427-L451` → after: `L336-L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L336-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/313.js#L336-L454) · [Before (L427-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/313.js#L427-L451)

```diff
-     }
-     class wC extends QC {
-       constructor(CC, zC) {
-         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wC.DefaultOptions;
-         super([]), this._maxWorkers = CC, this._createWorkerAsync = zC, this._options = ZC
-       }
-       push(CC) {
-         if (!this._executeOnIdleWorker(CC))
-           if (this._workerInfos.length < this._maxWorkers) {
-             const zC = {
-               workerPromise: this._createWorkerAsync(),
-               idle: !1
-             };
-             this._workerInfos.push(zC), this._execute(zC, CC)
-           } else this._pendingActions.push(CC)
-       }
- ... (9 more removed lines; see GitHub link above)
+       static _AreaElement(pp, ip) {
+         return Math.atan2(pp * ip, Math.sqrt(pp * pp + ip * ip + 1))
+       }
+       static _DownsampleFace(pp, ip, cp, Op) {
+         const op = pp instanceof Float32Array ? pp : Float32Array.from(pp),
+           Ip = cp * cp * Op,
+           Sp = new Float32Array(Ip),
+           xp = ip / cp,
+           Lp = 1 / (xp * xp);
+         for (let Dp = 0; Dp < cp; Dp++) {
+           const pp = Math.floor(Dp * xp),
+             Ip = Math.floor((Dp + 1) * xp);
+           for (let Yp = 0; Yp < cp; Yp++) {
+             const Ap = Math.floor(Yp * xp),
+               Pp = Math.floor((Yp + 1) * xp),
+               Wp = (Dp * cp + Yp) * Op;
+ ... (103 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/313.js` (Changed code · before: `L453-L457` → after: `L456-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-10387bc319b32e680c5dfdcad3a59ec82d8db32ec1143e57284ca4592cb19207) · [After (L456-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/313.js#L456-L462) · [Before (L453-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/313.js#L453-L457)

```diff
-         }))
-       }
-     }
-     wC.DefaultOptions = {
-       idleTimeElapsedBeforeRelease: 1e3
+         };
+         xp && (Sp ? Lp() : pp.onLoadObservable.addOnce(Lp))
+       }
+       static async EncodeTextureToRGBD(pp, ip) {
+         let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         return ip.gy().isWebGPU ? await cp.e(348).then((() => cp(61509))) : await cp.e(330).then((() => cp(61507))), await (0, op.c)("rgbdEncode", pp, ip, Op, 1, 5)
+       }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/314.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/314.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/314.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/314.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/314.js#L4)

```diff
-   41679: (CC, zC, ZC) => {
+   42034: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/314.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/314.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/314.js#L6)

```diff
-       _TGATextureLoader: () => fC
+       _IESTextureLoader: () => xp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/314.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1c) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/314.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/314.js#L8)

```diff
-     var QC = ZC(38507);
+     var Op = cp(37356);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/314.js` (Changed code · before: `L11-L23` → after: `L11-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1cR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1c) · [After (L11-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/314.js#L11-L17) · [Before (L11-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/314.js#L11-L23)

```diff
-       let zC = 0;
-       return {
-         id_length: CC[zC++],
-         colormap_type: CC[zC++],
-         image_type: CC[zC++],
-         colormap_index: CC[zC++] | CC[zC++] << 8,
-         colormap_length: CC[zC++] | CC[zC++] << 8,
-         colormap_size: CC[zC++],
-         origin: [CC[zC++] | CC[zC++] << 8, CC[zC++] | CC[zC++] << 8],
-         width: CC[zC++] | CC[zC++] << 8,
-         height: CC[zC++] | CC[zC++] << 8,
-         pixel_size: CC[zC++],
-         flags: CC[17]
+       return pp.split(" ").filter((pp => "" !== pp)).map((pp => parseFloat(pp)))
+     }
+ 
+     function Ip(pp, ip, cp) {
+       for (; cp.length !== ip;) {
+         const ip = op(pp.lines[pp.index++]);
+         cp.push(...ip)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/314.js` (Changed code · before: `L27-L85` → after: `L21-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1cR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1c) · [After (L21-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/314.js#L21-L44) · [Before (L27-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/314.js#L27-L85)

```diff
-     function bC(CC, zC) {
-       if (zC.length < 19) return void QC.c.Error("Unable to load TGA file - Not enough data to contain header");
-       let ZC = 18;
-       const bC = wC(zC);
-       if (bC.id_length + ZC > zC.length) return void QC.c.Error("Unable to load TGA file - Not enough data");
-       ZC += bC.id_length;
-       let fC, oC = !1,
-         qC = !1,
-         FC = !1;
-       switch (bC.image_type) {
-         case 9:
-           oC = !0;
-         case 1:
-           qC = !0;
-           break;
-         case 10:
- ... (43 more removed lines; see GitHub link above)
+     function Sp(pp, ip, cp) {
+       let op = 0,
+         Ip = 0,
+         Sp = 0,
+         xp = 0,
+         Lp = 0,
+         Yp = 0;
+       for (let Op = 0; Op < pp.numberOfHorizontalAngles - 1; Op++)
+         if (cp < pp.horizontalAngles[Op + 1] || Op === pp.numberOfHorizontalAngles - 2) {
+           Ip = Op, Sp = pp.horizontalAngles[Op], xp = pp.horizontalAngles[Op + 1];
+           break
+         } for (let Op = 0; Op < pp.numberOfVerticalAngles - 1; Op++)
+         if (ip < pp.verticalAngles[Op + 1] || Op === pp.numberOfVerticalAngles - 2) {
+           op = Op, Lp = pp.verticalAngles[Op], Yp = pp.verticalAngles[Op + 1];
+           break
+         } const Dp = xp - Sp,
+ ... (8 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/314.js` (Changed code · before: `L163` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1cR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1c) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/314.js#L51) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/314.js#L163)

```diff
-         throw ".env not supported in Cube."
+         throw ".ies not supported in Cube."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/314.js` (Changed code · before: `L166-L169` → after: `L54-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1cR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-681bed102e1e1d2b3ceb0386e780c1470988610bd1a6aa68968d7c68f5231b1c) · [After (L54-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/314.js#L54-L98) · [Before (L166-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/314.js#L166-L169)

```diff
-         const QC = new Uint8Array(CC.buffer, CC.byteOffset, CC.byteLength),
-           nC = wC(QC);
-         ZC(nC.width, nC.height, zC.generateMipMaps, !1, (() => {
-           bC(zC, QC)
+         const Op = function(pp) {
+           const ip = {
+               lines: new TextDecoder("utf-8").decode(pp).split("\n"),
+               index: 0
+             },
+             cp = {
+               version: ip.lines[0],
+               candelaValues: [],
+               horizontalAngles: [],
+               verticalAngles: [],
+               numberOfHorizontalAngles: 0,
+               numberOfVerticalAngles: 0
+             };
+           for (ip.index = 1; ip.lines.length > 0 && !ip.lines[ip.index].includes("TILT=");) ip.index++;
+           ip.lines[ip.index].includes("INCLUDE"), ip.index++;
+           const Op = op(ip.lines[ip.index++]);
+ ... (29 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/315.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/315.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/315.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/315.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/315.js#L4)

```diff
-   41687: (CC, zC, ZC) => {
+   42046: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/315.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/315.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/315.js#L6-L7)

```diff
-       ReadExrDataAsync: () => Wz,
-       _ExrTextureLoader: () => Fz
+       _BasisTextureLoader: () => tp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/315.js` (Changed code · before: `L9-L26` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/315.js#L8-L11) · [Before (L9-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/315.js#L9-L26)

```diff
-     var QC = ZC(38507),
-       wC = ZC(36991),
-       bC = ZC(39889);
-     const nC = 4,
-       fC = 4,
-       oC = 1,
-       qC = 2,
-       FC = 8,
-       WC = 65536,
-       NC = WC >> 3,
-       MC = 14,
-       gC = 65537,
-       SC = 1 << MC,
-       pC = SC - 1,
-       PC = 59,
-       GC = 63,
- ... (2 more removed lines; see GitHub link above)
+     var Op, op = cp(40304),
+       Ip = cp(38905),
+       Sp = cp(40654),
+       xp = cp(40033);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/315.js` (Changed code · before: `L28-L34` → after: `L13-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9) · [After (L13-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/315.js#L13-L23) · [Before (L28-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/315.js#L28-L34)

```diff
-     function JC(CC, zC) {
-       const ZC = new Uint8Array(CC);
-       let QC = 0;
-       for (; 0 != ZC[zC.value + QC];) QC += 1;
-       const wC = (new TextDecoder).decode(ZC.slice(zC.value, zC.value + QC));
-       return zC.value = zC.value + QC + 1, wC
-     }
+     function Lp() {
+       const pp = 0,
+         ip = 1,
+         cp = 2,
+         Op = 3,
+         op = 6,
+         Ip = 8,
+         Sp = 9,
+         xp = 10,
+         Lp = 14;
+       let Yp = null;
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/315.js` (Changed code · before: `L36-L202` → after: `L25-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9) · [After (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/315.js#L25-L28) · [Before (L36-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/315.js#L36-L202)

```diff
-     function IC(CC, zC) {
-       const ZC = CC.getInt32(zC.value, !0);
-       return zC.value += nC, ZC
-     }
- 
-     function iC(CC, zC) {
-       const ZC = CC.getUint32(zC.value, !0);
-       return zC.value += nC, ZC
-     }
- 
-     function vC(CC, zC) {
-       const ZC = CC.getUint8(zC.value);
-       return zC.value += oC, ZC
-     }
- 
-     function eC(CC, zC) {
- ... (151 more removed lines; see GitHub link above)
+       function Dp(pp, ip, cp, Op, op) {
+         const Ip = pp.getImageTranscodedSizeInBytes(ip, cp, Op);
+         let Sp = new Uint8Array(Ip);
+         if (!pp.transcodeImage(Sp, ip, cp, Op, 1, 0)) return null;
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/315.js` (Changed code · before: `L204-L332` → after: `L30-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9) · [After (L30-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/315.js#L30-L117) · [Before (L204-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/315.js#L204-L332)

```diff
-           const wC = JC(CC.buffer, zC),
-             bC = HC(CC, zC, wC, iC(CC, zC));
-           void 0 === bC ? QC.c.Warn(`Unknown header attribute type ${wC}'.`) : nC[ZC] = bC
-         } else fC = !1
-       }
-       if (0 != (-5 & wC)) throw new Error("Unsupported file format");
-       return {
-         version: ZC,
-         spec: bC,
-         ...nC
-       }
-     }
-     const uC = 32768,
-       rC = 65535;
- 
-     function sC(CC, zC, ZC, QC, wC) {
- ... (113 more removed lines; see GitHub link above)
+           Sp = function(pp, ip, cp, Op) {
+             const op = new Uint16Array(4),
+               Ip = new Uint16Array(cp * Op),
+               Sp = cp / 4,
+               xp = Op / 4;
+             for (let Lp = 0; Lp < xp; Lp++)
+               for (let Op = 0; Op < Sp; Op++) {
+                 const xp = ip + 8 * (Lp * Sp + Op);
+                 op[0] = pp[xp] | pp[xp + 1] << 8, op[1] = pp[xp + 2] | pp[xp + 3] << 8, op[2] = (2 * (31 & op[0]) + 1 * (31 & op[1])) / 3 | (2 * (2016 & op[0]) + 1 * (2016 & op[1])) / 3 & 2016 | (2 * (63488 & op[0]) + 1 * (63488 & op[1])) / 3 & 63488, op[3] = (2 * (31 & op[1]) +  … [truncated]
+                 for (let ip = 0; ip < 4; ip++) {
+                   const Sp = pp[xp + 4 + ip];
+                   let Yp = (4 * Lp + ip) * cp + 4 * Op;
+                   Ip[Yp++] = op[3 & Sp], Ip[Yp++] = op[Sp >> 2 & 3], Ip[Yp++] = op[Sp >> 4 & 3], Ip[Yp] = op[Sp >> 6 & 3]
+                 }
+               }
+             return Ip
+ ... (72 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/315.js` (Changed code · before: `L335-L364` → after: `L120-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9) · [After (L120-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/315.js#L120-L196) · [Before (L335-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/315.js#L335-L364)

```diff
-         }
-       }(FC, fC, oC, WC),
-       function(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
-         let qC = 0,
-           FC = 0;
-         const WC = nC,
-           NC = Math.trunc(QC.value + (wC + 7) / 8);
-         for (; QC.value < NC;) {
-           let wC = TC(qC, FC, ZC, QC);
-           for (qC = wC.c, FC = wC.lc; FC >= MC;) {
-             const nC = zC[qC >> FC - MC & pC];
-             if (nC.len) {
-               FC -= nC.len;
-               const CC = aC(nC.lit, bC, qC, FC, ZC, QC, fC, oC, WC);
-               CC && (qC = CC.c, FC = CC.lc)
-             } else {
- ... (14 more removed lines; see GitHub link above)
+           Wp.close(), Wp.delete(), wp && (Up = -1), vp ? postMessage({
+             action: "transcode",
+             success: vp,
+             id: Ap.data.id,
+             fileInfo: yp,
+             format: Up
+           }, tp) : postMessage({
+             action: "transcode",
+             success: vp,
+             id: Ap.data.id
+           })
+         }
+       }
+     }! function(pp) {
+       pp[pp.cTFETC1 = 0] = "cTFETC1", pp[pp.cTFETC2 = 1] = "cTFETC2", pp[pp.cTFBC1 = 2] = "cTFBC1", pp[pp.cTFBC3 = 3] = "cTFBC3", pp[pp.cTFBC4 = 4] = "cTFBC4", pp[pp.cTFBC5 = 5] = "cTFBC5", pp[pp.cTFBC7 = 6] = "cTFBC7", pp[pp.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", pp[pp.cTFPVR … [truncated]
+     }(Op || (Op = {}));
+ ... (61 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/315.js` (Changed code · before: `L366-L663` → after: `L198-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9) · [After (L198-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/315.js#L198-L213) · [Before (L366-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/315.js#L366-L663)

```diff
-         }
-         const gC = 8 - wC & 7;
-         for (qC >>= gC, FC -= gC; FC > 0;) {
-           const CC = zC[qC << MC - FC & pC];
-           if (!CC.len) throw new Error("HufDecode issues");
-           {
-             FC -= CC.len;
-             const zC = aC(CC.lit, bC, qC, FC, ZC, QC, fC, oC, WC);
-             zC && (qC = zC.c, FC = zC.lc)
-           }
-         }
-       }(FC, WC, CC, ZC, qC, oC, bC, wC, {
-         value: 0
-       })
-     }
- 
- ... (282 more removed lines; see GitHub link above)
+         else {
+           pp.width = Lp.width, pp.height = Lp.height, pp.generateMipMaps = ip.fileInfo.images[op].levels.length > 1;
+           const Op = vp.GetInternalFormatFromBasisFormat(ip.format, cp);
+           pp.format = Op, Up(pp, cp);
+           const xp = ip.fileInfo.images[op].levels;
+           for (let ip = 0; ip < xp.length; ip++) {
+             const Ip = xp[ip];
+             cp._uploadCompressedDataToTextureDirectly(pp, Op, Ip.width, Ip.height, Ip.transcodedPixels, op, ip)
+           }!cp._features.basisNeedsPOT || Math.log2(pp.width) % 1 === 0 && Math.log2(pp.height) % 1 === 0 || (Ip.e.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with  … [truncated]
+         }
+       }
+     }, vp = {
+       JSModuleURL: Yp.JSModuleURL,
+       WasmModuleURL: Yp.WasmModuleURL,
+       GetInternalFormatFromBasisFormat: (pp, ip) => {
+         let cp;
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/315.js` (Changed code · before: `L665-L720` → after: `L215-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9) · [After (L215-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/315.js#L215-L238) · [Before (L665-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/315.js#L665-L720)

```diff
-           case bz.Float:
-             wC.getter = YC, wC.inputSize = fC;
-             break;
-           case bz.HalfFloat:
-             wC.getter = mC, wC.inputSize = fC
-         }
-       }
-       wC.blockCount = wC.height / wC.scanlineBlockSize;
-       for (let fC = 0; fC < wC.blockCount; fC++) KC(zC, ZC);
-       const oC = wC.width * wC.height * wC.outputChannels;
-       switch (QC) {
-         case bz.Float:
-           wC.byteArray = new Float32Array(oC), wC.textureType = 1, nC && wC.byteArray.fill(1, 0, oC);
-           break;
-         case bz.HalfFloat:
-           wC.byteArray = new Uint16Array(oC), wC.textureType = 2, nC && wC.byteArray.fill(15360, 0, oC);
- ... (40 more removed lines; see GitHub link above)
+           case Op.cTFETC1:
+             cp = 36196;
+             break;
+           case Op.cTFBC1:
+             cp = 33776;
+             break;
+           case Op.cTFBC4:
+             cp = 33779;
+             break;
+           case Op.cTFASTC_4x4:
+             cp = 37808;
+             break;
+           case Op.cTFETC2:
+             cp = 37496;
+             break;
+           case Op.cTFBC7:
+ ... (8 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/315.js` (Changed code · before: `L726` → after: `L244-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9) · [After (L244-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/315.js#L244-L261) · [Before (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/315.js#L726)

```diff
-         throw ".exr not supported in Cube."
+         if (Array.isArray(pp)) return;
+         const Sp = ip.gy().getCaps(),
+           xp = {
+             supportedCompressionFormats: {
+               etc1: !!Sp.etc1,
+               s3tc: !!Sp.s3tc,
+               pvrtc: !!Sp.pvrtc,
+               etc2: !!Sp.etc2,
+               astc: !!Sp.astc,
+               bc7: !!Sp.bptc
+             }
+           };
+         yp(pp, xp).then((pp => {
+           const cp = pp.fileInfo.images[0].levels.length > 1 && ip.generateMipMaps;
+           wp(ip, pp), ip.gy()._setCubeMapTextureParams(ip, cp), ip.isReady = !0, ip.onLoadedObservable.notifyObservers(ip), ip.onLoadedObservable.clear(), Op && Op()
+         })).catch((pp => {
+ ... (2 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/315.js` (Changed code · before: `L729` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/315.js#L264) · [Before (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/315.js#L729)

```diff
-         const wC = new DataView(CC.buffer),
+         const Op = ip.gy().getCaps(),
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/315.js` (Changed code · before: `L731-L740` → after: `L266-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9) · [After (L266-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/315.js#L266-L279) · [Before (L731-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/315.js#L731-L740)

```diff
-             value: 0
-           },
-           nC = cC(wC, bC);
-         oz(nC, wC, bC, fz.DefaultOutputType).then((CC => {
-           qz(CC, nC, wC, bC);
-           const QC = nC.dataWindow.xMax - nC.dataWindow.xMin + 1,
-             fC = nC.dataWindow.yMax - nC.dataWindow.yMin + 1;
-           ZC(QC, fC, zC.generateMipMaps, !1, (() => {
-             const ZC = zC.mg();
-             zC.format = nC.format, zC.type = CC.textureType, zC.invertY = !1, zC._gammaSpace = !nC.linearSpace, CC.byteArray && ZC._uploadDataToTextureDirectly(zC, CC.byteArray, 0, 0, void 0, !0)
+             supportedCompressionFormats: {
+               etc1: !!Op.etc1,
+               s3tc: !!Op.s3tc,
+               pvrtc: !!Op.pvrtc,
+               etc2: !!Op.etc2,
+               astc: !!Op.astc,
+               bc7: !!Op.bptc
+             }
+           };
+         yp(pp, Ip).then((pp => {
+           const Op = pp.fileInfo.images[0].levels[0],
+             op = pp.fileInfo.images[0].levels.length > 1 && ip.generateMipMaps;
+           cp(Op.width, Op.height, op, -1 !== pp.format, (() => {
+             wp(ip, pp)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/315.js` (Changed code · before: `L743` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-a471d505350d3aab10e4db31b4b6374ab3427fb6544f259c4f47f610466da4f9) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/315.js#L282) · [Before (L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/315.js#L743)

```diff
-           QC.c.Error("Failed to load EXR texture: ", CC)
+           op.i.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), op.i.Warn(`Failed to transcode Basis file: ${pp}`), cp(0, 0, !1, !1, (() => {}), !0)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/316.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/316.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/316.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/316.js#L4)

```diff
-   41872: (CC, zC, ZC) => {
+   42087: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L6` → after: `L6-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L6-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/316.js#L6-L750) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/316.js#L6)

```diff
-       b: () => nC
+       e: () => vp
+     });
+     var Op = cp(37349),
+       op = cp(37320),
+       Ip = cp(40654),
+       Sp = cp(40345),
+       xp = cp(40143),
+       Lp = cp(38905),
+       Yp = cp(40332),
+       Dp = cp(40358),
+       Ap = cp(37329),
+       Pp = cp(40107),
+       Wp = cp(40314),
+       yp = cp(40398);
+     class Up {
+       get renderList() {
+ ... (729 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L8-L11` → after: `L752-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L752-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/316.js#L752-L756) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/316.js#L8-L11)

```diff
-     var QC = ZC(39674);
-     const wC = "bumpVertex",
-       bC = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     var Op = cp(40342),
+       op = cp(38313),
+       Ip = cp(37349),
+       Sp = cp(40053),
+       xp = cp(40509);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L13-L14` → after: `L758-L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L758-L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/316.js#L758-L932) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/316.js#L13-L14)

```diff
-       name: wC,
-       shader: bC
+       positions: [1, 1, -1, 1, -1, -1, 1, -1],
+       indices: [0, 1, 2, 0, 2, 3]
+     };
+     class Yp {
+       constructor(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Lp;
+         this._fullscreenViewport = new op.c(0, 0, 1, 1);
+         const cp = ip.positions ?? Lp.positions,
+           Ip = ip.indices ?? Lp.indices;
+         this.engine = pp, this._vertexBuffers = {
+           [Op.j.PositionKind]: new Op.j(pp, cp, Op.j.PositionKind, !1, !1, 2)
+         }, this._indexBuffer = pp.createIndexBuffer(Ip), this._indexBufferLength = Ip.length, this._onContextRestoredObserver = pp.Fy.add((() => {
+           this._indexBuffer = pp.createIndexBuffer(Ip);
+           for (const pp in this._vertexBuffers) {
+             this._vertexBuffers[pp]._rebuild()
+           }
+ ... (159 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L17` → after: `L936-L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L936-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/316.js#L936-L1085) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/316.js#L17)

```diff
-   41770: (CC, zC, ZC) => {
+   42102: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       Dispose: () => tp,
+       DumpData: () => vp,
+       DumpDataAsync: () => wp,
+       DumpFramebuffer: () => Up,
+       DumpTools: () => Hp,
+       EncodeImageAsync: () => yp,
+       RegisterDumpTools: () => ep
+     });
+     var Op = cp(40203),
+       op = cp(42069),
+       Ip = cp(40304),
+       Sp = cp(37356),
+       xp = cp(37345),
+       Lp = cp(38905),
+ ... (134 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L19` → after: `L1087-L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R1087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L1087-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/316.js#L1087-L1089) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/316.js#L19)

```diff
-       e: () => nC
+       c: () => Wp,
+       d: () => yp,
+       h: () => Up
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L21-L24` → after: `L1091-L1367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L1091-L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/316.js#L1091-L1367) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/316.js#L21-L24)

```diff
-     var QC = ZC(39674);
-     const wC = "bumpVertexDeclaration",
-       bC = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
-     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
+     var Op = cp(40654),
+       op = cp(42087),
+       Ip = cp(40203),
+       Sp = cp(42060),
+       xp = cp(40233),
+       Lp = cp(42094),
+       Yp = cp(40210);
+     class Dp extends Sp.c {
+       getClassName() {
+         return "PassPostProcess"
+       }
+       constructor(pp, ip) {
+         let cp = arguments.length > 4 ? arguments[4] : void 0;
+         const Op = {
+           size: "number" === typeof ip ? ip : void 0,
+           camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+ ... (261 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L26-L27` → after: `L1369-L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R1369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L1369-L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/316.js#L1369-L1392) · [Before (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/316.js#L26-L27)

```diff
-       name: wC,
-       shader: bC
+       CreateResizedCopy: function(pp, ip, cp) {
+         let Ip = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+         const Sp = pp.Gl(),
+           xp = Sp.gy(),
+           Lp = new op.e("resized" + pp.name, {
+             width: ip,
+             height: cp
+           }, Sp, !pp.noMipmap, !0, pp._texture.type, !1, pp.samplingMode, !1);
+         Lp.wrapU = pp.wrapU, Lp.wrapV = pp.wrapV, Lp.uOffset = pp.uOffset, Lp.vOffset = pp.vOffset, Lp.uScale = pp.uScale, Lp.vScale = pp.vScale, Lp.uAng = pp.uAng, Lp.vAng = pp.vAng, Lp.wAng = pp.wAng, Lp.coordinatesIndex = pp.coordinatesIndex, Lp.level = pp.level, Lp.anisotropi … [truncated]
+         const Yp = new Dp("pass", 1, null, Ip ? Op.d.BILINEAR_SAMPLINGMODE : Op.d.NEAREST_SAMPLINGMODE, xp, !1, 0);
+         return Yp.externalTextureSamplerBinding = !0, Yp.onEffectCreatedObservable.addOnce((ip => {
+           ip.executeWhenCompiled((() => {
+             Yp.onApply = function(ip) {
+               ip.setTexture("textureSampler", pp)
+             };
+             const ip = Lp.renderTarget;
+ ... (8 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L30` → after: `L1395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R1395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/316.js#L1395) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/316.js#L30)

```diff
-   41714: (CC, zC, ZC) => {
+   42060: (pp, ip, cp) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L34-L41` → after: `L1399-L1952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R1399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L1399-L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/316.js#L1399-L1952) · [Before (L34-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/316.js#L34-L41)

```diff
-     var QC = ZC(39674);
-     ZC(41703), ZC(41708);
-     const wC = "defaultUboDeclaration",
-       bC = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
-     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
+     var Op = cp(40203),
+       op = cp(40314),
+       Ip = cp(37349),
+       Sp = cp(37320),
+       xp = cp(40053),
+       Lp = cp(40210),
+       Yp = cp(40233),
+       Dp = cp(37368),
+       Ap = cp(40113),
+       Pp = cp(40143),
+       Wp = cp(42069);
+     let yp = (() => {
+         var pp;
+         let ip, xp, Ap, yp, Up, vp, tp, Hp, dp, ep, jp, kp, mp, Rp, qp, Mp, Cp = [],
+           Ep = [],
+           Xp = [],
+ ... (538 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L44-L46` → after: `L1955-L1958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R1955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L1955-L1958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/316.js#L1955-L1958) · [Before (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/316.js#L44-L46)

```diff
-   41694: (CC, zC, ZC) => {
-     ZC.r(zC), ZC.d(zC, {
-       defaultVertexShader: () => UC
+   42094: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Sp,
+       d: () => Ip
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/316.js` (Changed code · before: `L48-L104` → after: `L1960-L2018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4R1960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-ce69417d30dd0becdf0ba39dc60232a3dc3968bbbe623438dc0530e7613bb4f4) · [After (L1960-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/316.js#L1960-L2018) · [Before (L48-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/316.js#L48-L104)

```diff
-     var QC = ZC(39674),
-       wC = ZC(41699);
-     const bC = "defaultVertexDeclaration",
-       nC = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nuniform mat4 view;\n#ifdef DIFFUSE\nuniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform mat4 ambientMatrix;uniform vec2 vAmbientInfos;\n#endif\n#ifdef O … [truncated]
-     QC.b.IncludesShadersStore[bC] || (QC.b.IncludesShadersStore[bC] = nC);
-     const fC = {
-       name: bC,
-       shader: nC
-     };
-     var oC = ZC(41703),
-       qC = ZC(41708),
-       FC = ZC(41714),
-       WC = ZC(41717),
-       NC = ZC(41726),
-       MC = ZC(41729),
-       gC = ZC(41737),
- ... (41 more removed lines; see GitHub link above)
+     var Op = cp(42069),
+       op = cp(37345);
+     class Ip extends Op.f {
+       _gatherImports(pp, ip) {
+         pp ? (this._webGPUReady = !0, ip.push(Promise.all([cp.e(375).then((() => cp(61552)))]))) : ip.push(Promise.all([cp.e(376).then((() => cp(61559)))])), super._gatherImports(pp, ip)
+       }
+       constructor(pp) {
+         let ip = arguments.length > 2 ? arguments[2] : void 0;
+         const cp = {
+           name: pp,
+           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || op.e.LastCreatedEngine,
+           useShaderStore: !0,
+           useAsPostProcess: !0,
+           fragmentShader: Ip.FragmentUrl,
+           ...ip
+         };
+ ... (43 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/317.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/317.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691)

#### 1. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/317.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/317.js#L4-L6)

```diff
-   41848: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => nC
+   42115: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       _HDRTextureLoader: () => Dp
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L8-L14` → after: `L8-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L8-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/317.js#L8-L74) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/317.js#L8-L14)

```diff
-     var QC = ZC(39674);
-     const wC = "bakedVertexAnimation",
-       bC = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
+     var Op = cp(37320);
+     class op {
+       static ConvertPanoramaToCubemap(pp, ip, cp, Op) {
+         let op, Ip = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           Sp = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
+         if (!pp) throw "ConvertPanoramaToCubemap: input cannot be null";
+         if (pp.length != ip * cp * 3) {
+           if (pp.length != ip * cp * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
+           op = 4
+         } else op = 3;
+         return {
+           front: this.CreateCubemapTexture(Op, this.FACE_FRONT, pp, ip, cp, Ip, Sp, op),
+           back: this.CreateCubemapTexture(Op, this.FACE_BACK, pp, ip, cp, Ip, Sp, op),
+           left: this.CreateCubemapTexture(Op, this.FACE_LEFT, pp, ip, cp, Ip, Sp, op),
+           right: this.CreateCubemapTexture(Op, this.FACE_RIGHT, pp, ip, cp, Ip, Sp, op),
+           up: this.CreateCubemapTexture(Op, this.FACE_UP, pp, ip, cp, Ip, Sp, op),
+ ... (51 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L16-L27` → after: `L76-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L76-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/317.js#L76-L80) · [Before (L16-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/317.js#L16-L27)

```diff
-   },
-   41737: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => nC
-     });
-     var QC = ZC(39674);
-     const wC = "bakedVertexAnimationDeclaration",
-       bC = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
-     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
+ 
+     function Ip(pp, ip, cp, Op, op, Ip) {
+       op > 0 ? (op = function(pp, ip) {
+         return ip > 1023 ? pp * Math.pow(2, 1023) * Math.pow(2, ip - 1023) : ip < -1074 ? pp * Math.pow(2, -1074) * Math.pow(2, ip + 1074) : pp * Math.pow(2, ip)
+       }(1, op - 136), pp[Ip + 0] = ip * op, pp[Ip + 1] = cp * op, pp[Ip + 2] = Op * op) : (pp[Ip + 0] = 0, pp[Ip + 1] = 0, pp[Ip + 2] = 0)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L29-L40` → after: `L82-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L82-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/317.js#L82-L86) · [Before (L29-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/317.js#L29-L40)

```diff
-   },
-   41729: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => nC
-     });
-     var QC = ZC(39674);
-     const wC = "bonesDeclaration",
-       bC = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
-     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
+ 
+     function Sp(pp, ip) {
+       let cp, Op = "";
+       for (let op = ip; op < pp.length - ip && (cp = String.fromCharCode(pp[op]), "\n" != cp); op++) Op += cp;
+       return Op
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L42-L53` → after: `L88-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L88-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/317.js#L88-L109) · [Before (L42-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/317.js#L42-L53)

```diff
-   },
-   41846: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => nC
-     });
-     var QC = ZC(39674);
-     const wC = "bonesVertex",
-       bC = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
-     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
+ 
+     function xp(pp) {
+       let ip = Sp(pp, 0);
+       if ("#" != ip[0] || "?" != ip[1]) throw "Bad HDR Format.";
+       let cp = !1,
+         Op = !1,
+         op = 0;
+       do {
+         op += ip.length + 1, ip = Sp(pp, op), "FORMAT=32-bit_rle_rgbe" == ip ? Op = !0 : 0 == ip.length && (cp = !0)
+       } while (!cp);
+       if (!Op) throw "HDR Bad header format, unsupported FORMAT";
+       op += ip.length + 1, ip = Sp(pp, op);
+       const Ip = /^-Y (.*) \+X (.*)$/g.exec(ip);
+       if (!Ip || Ip.length < 3) throw "HDR Bad header format, no size";
+       const xp = parseInt(Ip[2]),
+         Lp = parseInt(Ip[1]);
+ ... (6 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L55-L66` → after: `L111-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L111-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/317.js#L111-L137) · [Before (L55-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/317.js#L55-L66)

```diff
-   },
-   41875: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => nC
-     });
-     var QC = ZC(39674);
-     const wC = "clipPlaneVertex",
-       bC = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
+ 
+     function Lp(pp, ip) {
+       return function(pp, ip) {
+         let cp = ip.height;
+         const Op = ip.width;
+         let op, Sp, xp, Lp, Dp, Ap, Pp, Wp, yp = ip.dataPosition;
+         const Up = new ArrayBuffer(4 * Op),
+           wp = new Uint8Array(Up),
+           vp = new ArrayBuffer(ip.width * ip.height * 4 * 3),
+           tp = new Float32Array(vp);
+         for (; cp > 0;) {
+           if (op = pp[yp++], Sp = pp[yp++], xp = pp[yp++], Lp = pp[yp++], 2 != op || 2 != Sp || 128 & xp || ip.width < 8 || ip.width > 32767) return Yp(pp, ip);
+           if ((xp << 8 | Lp) != Op) throw "HDR Bad header format, wrong scan line width";
+           for (Ap = 0, Wp = 0; Wp < 4; Wp++)
+             for (Pp = (Wp + 1) * Op; Ap < Pp;)
+               if (op = pp[yp++], Sp = pp[yp++], op > 128) {
+ ... (11 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L68-L79` → after: `L139-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L139-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/317.js#L139-L150) · [Before (L68-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/317.js#L68-L79)

```diff
-   },
-   41778: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => nC
-     });
-     var QC = ZC(39674);
-     const wC = "clipPlaneVertexDeclaration",
-       bC = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
+ 
+     function Yp(pp, ip) {
+       let cp = ip.height;
+       const Op = ip.width;
+       let op, Sp, xp, Lp, Yp, Dp = ip.dataPosition;
+       const Ap = new ArrayBuffer(ip.width * ip.height * 4 * 3),
+         Pp = new Float32Array(Ap);
+       for (; cp > 0;) {
+         for (Yp = 0; Yp < ip.width; Yp++) op = pp[Dp++], Sp = pp[Dp++], xp = pp[Dp++], Lp = pp[Dp++], Ip(Pp, op, Sp, xp, Lp, (ip.height - cp) * Op * 3 + 3 * Yp);
+         cp--
+       }
+       return Pp
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/317.js` (Changed code · before: `L81-L404` → after: `L152-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-8c8a19c900cb9cec6ecfb4e7b3492a36e9c83a9d95a157590f8f792b60883691) · [After (L152-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/317.js#L152-L171) · [Before (L81-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/317.js#L81-L404)

```diff
-   },
-   41699: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => nC
-     });
-     var QC = ZC(39674);
-     const wC = "decalVertexDeclaration",
-       bC = "#ifdef DECAL\nuniform vec4 vDecalInfos;uniform mat4 decalMatrix;\n#endif\n";
-     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
-     }
-   },
-   41881: (CC, zC, ZC) => {
-     ZC.d(zC, {
- ... (308 more removed lines; see GitHub link above)
+     op.FACE_LEFT = [new Op.o(-1, -1, -1), new Op.o(1, -1, -1), new Op.o(-1, 1, -1), new Op.o(1, 1, -1)], op.FACE_RIGHT = [new Op.o(1, -1, 1), new Op.o(-1, -1, 1), new Op.o(1, 1, 1), new Op.o(-1, 1, 1)], op.FACE_FRONT = [new Op.o(1, -1, -1), new Op.o(1, -1, 1), new Op.o(1, 1, -1), … [truncated]
+     class Dp {
+       constructor() {
+         this.supportCascades = !1
+       }
+       loadCubeData() {
+         throw ".hdr not supported in Cube."
+       }
+       loadData(pp, ip, cp) {
+         const Op = new Uint8Array(pp.buffer, pp.byteOffset, pp.byteLength),
+           op = xp(Op),
+           Ip = Lp(Op, op),
+           Sp = op.width * op.height,
+           Yp = new Float32Array(4 * Sp);
+         for (let xp = 0; xp < Sp; xp += 1) Yp[4 * xp] = Ip[3 * xp], Yp[4 * xp + 1] = Ip[3 * xp + 1], Yp[4 * xp + 2] = Ip[3 * xp + 2], Yp[4 * xp + 3] = 1;
+         cp(op.width, op.height, ip.generateMipMaps, !1, (() => {
+ ... (4 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/318.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/318.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73)

#### 1. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/318.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/318.js#L4-L6)

```diff
-   41909: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => nC
+   42119: (pp, ip, cp) => {
+     cp.r(ip), cp.d(ip, {
+       _KTXTextureLoader: () => yp
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L8-L14` → after: `L8-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L8-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/318.js#L8-L47) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/318.js#L8-L14)

```diff
-     var QC = ZC(39674);
-     const wC = "decalFragmentDeclaration",
-       bC = "#ifdef DECAL\nuniform vec4 vDecalInfos;\n#endif\n";
-     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
+     var Op = cp(38905);
+     class op {
+       constructor(pp, ip) {
+         if (this.data = pp, this.isInvalid = !1, !op.IsValid(pp)) return this.isInvalid = !0, void Op.e.Error("texture missing KTX identifier");
+         const cp = Uint32Array.BYTES_PER_ELEMENT,
+           Ip = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * cp),
+           Sp = 67305985 === Ip.getUint32(0, !0);
+         return this.glType = Ip.getUint32(1 * cp, Sp), this.glTypeSize = Ip.getUint32(2 * cp, Sp), this.glFormat = Ip.getUint32(3 * cp, Sp), this.glInternalFormat = Ip.getUint32(4 * cp, Sp), this.glBaseInternalFormat = Ip.getUint32(5 * cp, Sp), this.pixelWidth = Ip.getUint32(6 *  … [truncated]
+       }
+       uploadLevels(pp, ip) {
+         switch (this.loadType) {
+           case op.COMPRESSED_2D:
+             this._upload2DCompressedLevels(pp, ip);
+           case op.TEX_2D:
+           case op.COMPRESSED_3D:
+           case op.TEX_3D:
+ ... (24 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L16-L27` → after: `L49-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L49-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/318.js#L49-L55) · [Before (L16-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/318.js#L16-L27)

```diff
-   },
-   42033: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => nC
-     });
-     var QC = ZC(39674);
-     const wC = "depthPrePass",
-       bC = "#ifdef DEPTHPREPASS\ngl_FragColor=vec4(0.,0.,0.,1.0);return;\n#endif\n";
-     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
+     op.HEADER_LEN = 64, op.COMPRESSED_2D = 0, op.COMPRESSED_3D = 1, op.TEX_2D = 2, op.TEX_3D = 3;
+     var Ip, Sp, xp, Lp = cp(42123),
+       Yp = cp(40304);
+ 
+     function Dp(pp, ip) {
+       const cp = ip?.jsDecoderModule || KTX2DECODER;
+       pp && (pp.wasmBaseUrl && (cp.Transcoder.WasmBaseUrl = pp.wasmBaseUrl), pp.wasmUASTCToASTC && (cp.LiteTranscoder_UASTC_ASTC.WasmModuleURL = pp.wasmUASTCToASTC), pp.wasmUASTCToBC7 && (cp.LiteTranscoder_UASTC_BC7.WasmModuleURL = pp.wasmUASTCToBC7), pp.wasmUASTCToRGBA_UNORM &&  … [truncated]
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L29-L40` → after: `L57-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L57-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/318.js#L57-L242) · [Before (L29-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/318.js#L29-L40)

```diff
-   },
-   41925: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => nC
-     });
-     var QC = ZC(39674);
-     const wC = "lightFragmentDeclaration",
-       bC = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
-     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
+ 
+     function Ap(pp) {
+       let ip;
+       "undefined" === typeof pp && "undefined" !== typeof KTX2DECODER && (pp = KTX2DECODER), onmessage = cp => {
+         if (cp.data) switch (cp.data.action) {
+           case "init": {
+             const Op = cp.data.urls;
+             Op && (Op.jsDecoderModule && "undefined" === typeof pp && (importScripts(Op.jsDecoderModule), pp = KTX2DECODER), Dp(Op)), cp.data.wasmBinaries && Dp(void 0, {
+               ...cp.data.wasmBinaries,
+               jsDecoderModule: pp
+             }), ip = new pp.KTX2Decoder, postMessage({
+               action: "init"
+             });
+             break
+           }
+           case "setDefaultDecoderOptions":
+ ... (170 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L42-L53` → after: `L244-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L244-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/318.js#L244-L290) · [Before (L42-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/318.js#L42-L53)

```diff
-   },
-   41934: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => nC
-     });
-     var QC = ZC(39674);
-     const wC = "lightUboDeclaration",
-       bC = "#ifdef LIGHT{X}\nuniform Light{X}\n{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;\n#ifdef SPOTLIGHT{X}\nvec4 vLightDirection;vec4 vLightFalloff;\n#elif defined(POINTLIGHT{X})\nvec4 vLightFalloff;\n#elif defined(HEMILIGHT{X})\nvec3 vLightGround;\n#elif define … [truncated]
-     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
+ 
+     function Wp(pp) {
+       switch (pp) {
+         case 35916:
+           return 33776;
+         case 35918:
+           return 33778;
+         case 35919:
+           return 33779;
+         case 37493:
+           return 37492;
+         case 37497:
+           return 37496;
+         case 37495:
+           return 37494;
+         case 37840:
+ ... (31 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L55-L79` → after: `L292-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L292-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/318.js#L292-L391) · [Before (L55-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/318.js#L55-L79)

```diff
-   },
-   41938: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => nC
-     });
-     var QC = ZC(39674);
-     const wC = "ltcHelperFunctions",
-       bC = "vec2 LTCUv( const in vec3 N,const in vec3 V,const in float roughness ) {const float LUTSIZE=64.0;const float LUTSCALE=( LUTSIZE-1.0 )/LUTSIZE;const float LUTBIAS=0.5/LUTSIZE;float dotNV=saturate( dot( N,V ) );vec2 uv=vec2( roughness,sqrt( 1.0-dotNV ) );uv=uv*LUTSCALE+ … [truncated]
-     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
-     }
-   },
-   41755: (CC, zC, ZC) => {
-     ZC.d(zC, {
- ... (9 more removed lines; see GitHub link above)
+     Pp.URLConfig = {
+       jsDecoderModule: "https://cdn.babylonjs.com/babylon.ktx2Decoder.js",
+       wasmUASTCToASTC: null,
+       wasmUASTCToBC7: null,
+       wasmUASTCToRGBA_UNORM: null,
+       wasmUASTCToRGBA_SRGB: null,
+       wasmUASTCToR8_UNORM: null,
+       wasmUASTCToRG8_UNORM: null,
+       jsMSCTranscoder: null,
+       wasmMSCTranscoder: null,
+       wasmZSTDDecoder: null
+     }, Pp.DefaultNumWorkers = Pp.GetDefaultNumWorkers(), Pp.DefaultDecoderOptions = new class {
+       constructor() {
+         this._isDirty = !0, this._useRGBAIfOnlyBC1BC3AvailableWhenUASTC = !0, this._ktx2DecoderOptions = {}
+       }
+       get isDirty() {
+ ... (84 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L82` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/318.js#L394) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/318.js#L82)

```diff
-   41708: (CC, zC, ZC) => {
+   42123: (pp, ip, cp) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L86-L92` → after: `L398-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L398-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/318.js#L398-L426) · [Before (L86-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/318.js#L86-L92)

```diff
-     var QC = ZC(39674);
-     const wC = "meshUboDeclaration",
-       bC = "#ifdef WEBGL2\nuniform mat4 world;uniform float visibility;\n#else\nlayout(std140,column_major) uniform;uniform Mesh\n{mat4 world;float visibility;};\n#endif\n#define WORLD_UBO\n";
-     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
+     class Op {
+       constructor(pp) {
+         this._pendingActions = new Array, this._workerInfos = pp.map((pp => ({
+           workerPromise: Promise.resolve(pp),
+           idle: !0
+         })))
+       }
+       dispose() {
+         for (const pp of this._workerInfos) pp.workerPromise.then((pp => {
+           pp.terminate()
+         }));
+         this._workerInfos.length = 0, this._pendingActions.length = 0
+       }
+       push(pp) {
+         this._executeOnIdleWorker(pp) || this._pendingActions.push(pp)
+       }
+ ... (13 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L94-L105` → after: `L428-L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L428-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/318.js#L428-L454) · [Before (L94-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/318.js#L94-L105)

```diff
-   },
-   41919: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => nC
-     });
-     var QC = ZC(39674);
-     const wC = "oitDeclaration",
-       bC = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\n#extension GL_EXT_draw_buffers : require\nlayout(location=0) out vec2 depth; \nlayout(location=1) out vec4 frontColor;layout(location=2) out vec4 backColor;\n#define MAX_DEPTH 99999.0\nhighp vec4 gl_FragColor;uniform sampler2D oi … [truncated]
-     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
+     class op extends Op {
+       constructor(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : op.DefaultOptions;
+         super([]), this._maxWorkers = pp, this._createWorkerAsync = ip, this._options = cp
+       }
+       push(pp) {
+         if (!this._executeOnIdleWorker(pp))
+           if (this._workerInfos.length < this._maxWorkers) {
+             const ip = {
+               workerPromise: this._createWorkerAsync(),
+               idle: !1
+             };
+             this._workerInfos.push(ip), this._execute(ip, pp)
+           } else this._pendingActions.push(pp)
+       }
+       _execute(pp, ip) {
+ ... (11 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/318.js` (Changed code · before: `L107-L183` → after: `L456-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-576a75faeb60f402d4e03b67a95f6e332c9c19bca797d4791cfb6ff7c586ce73) · [After (L456-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/318.js#L456-L457) · [Before (L107-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/318.js#L107-L183)

```diff
-   },
-   42044: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => nC
-     });
-     var QC = ZC(39674);
-     const wC = "oitFragment",
-       bC = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\nfloat fragDepth=gl_FragCoord.z; \n#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS\nuint halfFloat=packHalf2x16(vec2(fragDepth));vec2 full=unpackHalf2x16(halfFloat);fragDepth=full.x;\n#endif\nivec2 fragCoord=ivec2(gl_FragCoord.xy);ve … [truncated]
-     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
-     }
-   },
-   41964: (CC, zC, ZC) => {
-     ZC.d(zC, {
- ... (61 more removed lines; see GitHub link above)
+     op.DefaultOptions = {
+       idleTimeElapsedBeforeRelease: 1e3
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/319.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/319.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L4-L252` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/319.js#L4) · [Before (L4-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/319.js#L4-L252)

```diff
-   42020: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => nC
-     });
-     var QC = ZC(39674);
-     const wC = "bumpFragment",
-       bC = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
-     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
-     }
-   },
-   41988: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => nC
- ... (233 more removed lines; see GitHub link above)
+   42125: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L254-L264` → after: `L6-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L6-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/319.js#L6-L156) · [Before (L254-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/319.js#L254-L264)

```diff
-       geometryPixelShader: () => YC
-     });
-     var QC = ZC(39674),
-       wC = ZC(41911),
-       bC = ZC(41996);
-     const nC = "mrtFragmentDeclaration",
-       fC = "#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#ifdef MESH_BLEND_TAG\n#if {X}>0\n#if MESH_BLEND_TAG_INDEX==0\nlayout(location=0) out highp uvec4 meshBlendTagOutput;\n#else\nlayout(location=0) out highp vec4 glFragData0;\n#endif\n#endif\n#if {X}>1\n#if MESH … [truncated]
-     QC.b.IncludesShadersStore[nC] || (QC.b.IncludesShadersStore[nC] = fC);
-     const oC = {
-       name: nC,
-       shader: fC
+       _TGATextureLoader: () => xp
+     });
+     var Op = cp(38905);
+ 
+     function op(pp) {
+       let ip = 0;
+       return {
+         id_length: pp[ip++],
+         colormap_type: pp[ip++],
+         image_type: pp[ip++],
+         colormap_index: pp[ip++] | pp[ip++] << 8,
+         colormap_length: pp[ip++] | pp[ip++] << 8,
+         colormap_size: pp[ip++],
+         origin: [pp[ip++] | pp[ip++] << 8, pp[ip++] | pp[ip++] << 8],
+         width: pp[ip++] | pp[ip++] << 8,
+         height: pp[ip++] | pp[ip++] << 8,
+ ... (135 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/319.js` (Changed code · before: `L266-L290` → after: `L158-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911dR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-dad14df226b0b69ae5421ca55aee786ed1f1d87f9dae85ca6707bd1cb765911d) · [After (L158-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/319.js#L158-L171) · [Before (L266-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/319.js#L266-L290)

```diff
-     var qC = ZC(41982),
-       FC = ZC(41961),
-       WC = ZC(41988),
-       NC = ZC(41726),
-       MC = ZC(61222),
-       gC = ZC(61414),
-       SC = ZC(41703),
-       pC = ZC(61189),
-       PC = ZC(61416),
-       GC = ZC(61261),
-       RC = ZC(41964),
-       AC = ZC(61418),
-       xC = ZC(61422),
-       JC = ZC(42013),
-       IC = ZC(42020),
-       iC = ZC(61439),
- ... (9 more removed lines; see GitHub link above)
+     class xp {
+       constructor() {
+         this.supportCascades = !1
+       }
+       loadCubeData() {
+         throw ".env not supported in Cube."
+       }
+       loadData(pp, ip, cp) {
+         const Op = new Uint8Array(pp.buffer, pp.byteOffset, pp.byteLength),
+           Sp = op(Op);
+         cp(Sp.width, Sp.height, ip.generateMipMaps, !1, (() => {
+           Ip(ip, Op)
+         }))
+       }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/320.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/320.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68)

#### 1. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L4-L199` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/320.js#L4) · [Before (L4-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/320.js#L4-L199)

```diff
-   41848: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => nC
-     });
-     var QC = ZC(39674);
-     const wC = "bakedVertexAnimation",
-       bC = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     QC.b.IncludesShadersStore[wC] || (QC.b.IncludesShadersStore[wC] = bC);
-     const nC = {
-       name: wC,
-       shader: bC
-     }
-   },
-   41737: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => nC
- ... (180 more removed lines; see GitHub link above)
+   42134: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/320.js` (Changed code · before: `L201` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-f9ec9dbddc1cb41cb8454aacf1bf51e80712f180d1b7068e9608d2c48058fb68) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/320.js#L6-L7) · [Before (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/320.js#L201)

```diff
-       geometryVertexShader: () => KC
+       ReadExrDataAsync: () => Wi,
+       _ExrTextureLoader: () => Pi
```
