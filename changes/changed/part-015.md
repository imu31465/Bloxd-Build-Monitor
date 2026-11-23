# Changed — Bundle Modifications Report (Part 015 / 137)

- **Updated at**: `2026-11-24T07:07 JST`
- **Part**: `15 / 137` (**401** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 014](part-014.md) · [Part 016 →](part-016.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/119.js` (w4ddu.56408518 → 31kiid.1299b0d6 · continued)

- **File**: `bundles/bloxd.io/chunks/js/119.js` (4665 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050)

#### 1154. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9467` → after: `L9334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9334) · [Before (L9467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9467)

```diff
-         return null !== (CC = null === (zC = (0, eC.getRigController)(this.MN, this.heldItemState.mH)) || void 0 === zC ? void 0 : zC.stateWeight("arms", "driving")) && void 0 !== CC ? CC : 0
+         return null !== (kk = null === (Fk = (0, vk.getRigController)(this.qZ, this.heldItemState.Xu)) || void 0 === Fk ? void 0 : Fk.stateWeight("arms", "driving")) && void 0 !== kk ? kk : 0
```

#### 1155. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9472` → after: `L9339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9339) · [Before (L9472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9472)

```diff
-         CC !== this.drivingShare && (Math.abs(CC - this.drivingShare) > .01 || 0 === CC || 1 === CC) && (this.drivingShare = CC, this.QqC())
+         kk !== this.drivingShare && (Math.abs(kk - this.drivingShare) > .01 || 0 === kk || 1 === kk) && (this.drivingShare = kk, this.Kqk())
```

#### 1156. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9477-L9478` → after: `L9344-L9345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9344-L9345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9344-L9345) · [Before (L9477-L9478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9477-L9478)

```diff
-       wqC() {
-         if (this.isFirstPersonLocalPlayer()) return this.firstPersonMesh.IK(!0), this.releaseThirdPersonThinObject(), this.firstPersonMesh.parent = this.MN.Vg.camera, this.firstPersonMesh.sq.set(.1, .1, .1), void this.setFirstPersonMeshPosition(Date.now());
+       Qqk() {
+         if (this.isFirstPersonLocalPlayer()) return this.firstPersonMesh.Av(!0), this.releaseThirdPersonThinObject(), this.firstPersonMesh.parent = this.qZ.Xw.camera, this.firstPersonMesh.ci.set(.1, .1, .1), void this.setFirstPersonMeshPosition(Date.now());
```

#### 1157. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9481` → after: `L9348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9348) · [Before (L9481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9481)

```diff
-         this.firstPersonMesh.IK(!1);
+         this.firstPersonMesh.Av(!1);
```

#### 1158. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9487` → after: `L9354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9354) · [Before (L9487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9487)

```diff
-           if ((0, GC.d)(this.typeObj, zC.itemOffset, this.thirdPersonPose), this.drivingShare = this.holderDrivingShare(), this.drivingShare > 0) {
+           if ((0, xk.g)(this.typeObj, Fk.itemOffset, this.thirdPersonPose), this.drivingShare = this.holderDrivingShare(), this.drivingShare > 0) {
```

#### 1159. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9489` → after: `L9356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9356) · [Before (L9489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9489)

```diff
-             bC = CC.rotation, nC = CC.quaternion, fC = CC.usesQuaternion, oC = this.drivingShare, qC = CC.quaternion, (0, RC.q)(xC[0] * oC, xC[1] * oC, xC[2] * oC, JC), pC.Matrix.FromQuaternionToRef(pC.Quaternion.FromArrayToRef(JC, 0, IC), iC), iC.transposeToRef(iC), fC ? pC.Matr … [truncated]
+             ik = kk.rotation, yk = kk.quaternion, lk = kk.usesQuaternion, ak = this.drivingShare, qk = kk.quaternion, (0, Pk.j)(Qk[0] * ak, Qk[1] * ak, Qk[2] * ak, sk), Hk.Matrix.FromQuaternionToRef(Hk.Quaternion.FromArrayToRef(sk, 0, Vk), zk), zk.transposeToRef(zk), lk ? Hk.Matr … [truncated]
```

#### 1160. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9493` → after: `L9360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9360) · [Before (L9493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9493)

```diff
-           const [CC, ZC, bC] = null !== (QC = zC.itemOffset) && void 0 !== QC ? QC : [0, 0, 0], [nC, fC, oC] = null !== (wC = zC.rotation) && void 0 !== wC ? wC : [0, 0, 0];
+           const [kk, Ik, ik] = null !== (Xk = Fk.itemOffset) && void 0 !== Xk ? Xk : [0, 0, 0], [yk, lk, ak] = null !== (Tk = Fk.rotation) && void 0 !== Tk ? Tk : [0, 0, 0];
```

#### 1161. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9503` → after: `L9370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9370) · [Before (L9503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9503)

```diff
-           sq: qC
+           ci: qk
```

#### 1162. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9506` → after: `L9373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9373) · [Before (L9506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9506)

```diff
-         const FC = (0, nC.b)(this.typeObj.type),
+         const Lk = (0, yk.d)(this.typeObj.type),
```

#### 1163. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9513-L9515` → after: `L9380-L9382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9380-L9382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9380-L9382) · [Before (L9513-L9515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9513-L9515)

```diff
-           pC.Eg.TransformCoordinatesFromFloatsToRef(NC, MC, gC, CC, fC)
-         } else fC.L_(NC, MC, gC);
-         FC ? (qC.L_(WC, WC, WC), oC.L_(QC, Math.PI / 2 + wC, -Math.PI / 2 + bC)) : "TwoDTool" === this.typeObj.type || this.typeObj.holdAsAiming ? (qC.L_(WC, -WC, WC), oC.L_(Math.PI + QC, Math.PI / 2 + wC, .35 * Math.PI + bC)) : (qC.L_(WC, -WC, WC), oC.L_(Math.PI + QC, Math.PI /  … [truncated]
+           Hk.Ge.TransformCoordinatesFromFloatsToRef(Zk, jk, ek, kk, lk)
+         } else lk.t5(Zk, jk, ek);
+         Lk ? (qk.t5(tk, tk, tk), ak.t5(Xk, Math.PI / 2 + Tk, -Math.PI / 2 + ik)) : "TwoDTool" === this.typeObj.type || this.typeObj.holdAsAiming ? (qk.t5(tk, -tk, tk), ak.t5(Math.PI + Xk, Math.PI / 2 + Tk, .35 * Math.PI + ik)) : (qk.t5(tk, -tk, tk), ak.t5(Math.PI + Xk, Math.PI /  … [truncated]
```

#### 1164. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9528-L9532` → after: `L9395-L9399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9395-L9399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9395-L9399) · [Before (L9528-L9532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9528-L9532)

```diff
-     var HC = ZC(38217),
-       EC = ZC(37934),
-       lC = ZC(37633),
-       XC = ZC(9194),
-       cC = ZC(9239);
+     var uk = Ik(38376),
+       bk = Ik(38105),
+       Rk = Ik(37805),
+       Uk = Ik(9183),
+       Ck = Ik(9237);
```

#### 1165. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9549` → after: `L9416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9416) · [Before (L9549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9549)

```diff
-         return zC === cC.c.bot ? [0, 1, 0] : zC === cC.c.top ? [0, -1, 0] : uC[ZC]
+         return Fk === Ck.d.bot ? [0, 1, 0] : Fk === Ck.d.top ? [0, -1, 0] : Nk[Ik]
```

#### 1166. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9572-L9581` → after: `L9439-L9448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9439-L9448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9439-L9448) · [Before (L9572-L9581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9572-L9581)

```diff
-     var aC = ZC(38254),
-       tC = ZC(9252),
-       DC = ZC(38042),
-       jC = ZC(37275),
-       yC = ZC(3677),
-       LC = ZC(37279),
-       UC = ZC(20),
-       BC = ZC(1347),
-       OC = ZC(37877),
-       kC = ZC(37886);
+     var Bk = Ik(38399),
+       dk = Ik(9244),
+       Yk = Ik(38204),
+       Ak = Ik(37447),
+       gk = Ik(3702),
+       mk = Ik(37455),
+       hk = Ik(25),
+       rk = Ik(1364),
+       Dk = Ik(38046),
+       Mk = Ik(38054);
```

#### 1167. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9589` → after: `L9456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9456) · [Before (L9589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9589)

```diff
-             return QC.qM.Sy(QC.fN.Wy(CC, zC, ZC))
+             return Xk.yj.lB(Xk.XZ.yB(kk, Fk, Ik))
```

#### 1168. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9594` → after: `L9461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9461) · [Before (L9594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9594)

```diff
-           return !(null === (CC = (0, MC.e)().pR) || void 0 === CC || !CC.ezBridging) && UC.b.get("clientEscMenuOptions").ezBridging
+           return !(null === (kk = (0, jk.e)().gJ) || void 0 === kk || !kk.ezBridging) && hk.d.get("clientEscMenuOptions").ezBridging
```

#### 1169. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9600-L9602` → after: `L9467-L9469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9467-L9469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9467-L9469) · [Before (L9600-L9602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9600-L9602)

```diff
-           if (QC.pCC) return null;
-           if (QC.PCC) return null;
-           const wC = QC.JR.yG(QC.qE),
+           if (Xk.Vkk) return null;
+           if (Xk.zkk) return null;
+           const Tk = Xk.MJ.OJ(Xk.oR),
```

#### 1170. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9604` → after: `L9471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9471) · [Before (L9604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9604)

```diff
-             nC = UC.b.get("isTouchScreen") || (0, BC.h)() ? void 0 : wC,
+             yk = hk.d.get("isTouchScreen") || (0, rk.f)() ? void 0 : Tk,
```

#### 1171. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9606-L9610` → after: `L9473-L9477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9473-L9477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9473-L9477) · [Before (L9606-L9610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9606-L9610)

```diff
-           QC.lB(null !== (zC = QC.HCC) && void 0 !== zC ? zC : QC.camera.zB(), fC);
-           const oC = null !== (ZC = QC.ECC) && void 0 !== ZC ? ZC : QC.camera.yB(),
-             qC = (QC.HCC ? QC.camera.cL : 0) + (0, MC.c)().getBlockReach(QC.qE),
-             FC = QC.pickBlock(fC, oC, qC, ((zC, ZC, wC, fC) => !!QC.SCC(zC) || !(wC > bC || QC.JR.QzC(ZC, wC, fC, QC.qM.Xs(CC))) && (!!OC.c.has(ZC, wC, fC) || (0, lC.m)(this.isSolidAt, ZC, wC, fC, nC))));
-           if (!FC || QC.SCC(FC.HV)) return null;
+           Xk.Km(null !== (Fk = Xk.ckk) && void 0 !== Fk ? Fk : Xk.camera.hA(), lk);
+           const ak = null !== (Ik = Xk.Wkk) && void 0 !== Ik ? Ik : Xk.camera.Am(),
+             qk = (Xk.ckk ? Xk.camera.JY : 0) + (0, jk.c)().getBlockReach(Xk.oR),
+             Lk = Xk.pickBlock(lk, ak, qk, ((Fk, Ik, Tk, lk) => !!Xk.skk(Fk) || !(Tk > ik || Xk.MJ.tFk(Ik, Tk, lk, Xk.yj.XN(kk))) && (!!Dk.c.has(Ik, Tk, lk) || (0, Rk.l)(this.isSolidAt, Ik, Tk, lk, yk))));
+           if (!Lk || Xk.skk(Lk.YM)) return null;
```

#### 1172. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9613-L9614` → after: `L9480-L9481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9480-L9481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9480-L9481) · [Before (L9613-L9614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9613-L9614)

```diff
-           const WC = (0, lC.s)(fC, oC, FC.position);
-           return WC > qC ? null : this.canPlaceAt(FC.position, FC.HV, CC) ? QC.CM(fC, oC, WC + lC.c, QC.SCC) ? null : {
+           const tk = (0, Rk.q)(lk, ak, Lk.position);
+           return tk > qk ? null : this.canPlaceAt(Lk.position, Lk.YM, kk) ? Xk.rZ(lk, ak, tk + Rk.b, Xk.skk) ? null : {
```

#### 1173. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9622-L9623` → after: `L9489-L9490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9489-L9490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9489-L9490) · [Before (L9622-L9623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9622-L9623)

```diff
-           if (!CC || zC.vCC) return void this.hide();
-           this.hadTargetLastFrame = !0, CC.tower || zC.ICC || zC.Vg.hCC(!1, null, null);
+           if (!kk || Fk.pkk) return void this.hide();
+           this.hadTargetLastFrame = !0, kk.tower || Fk.nkk || Fk.Xw.bkk(!1, null, null);
```

#### 1174. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9625-L9626` → after: `L9492-L9493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9492-L9493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9492-L9493) · [Before (L9625-L9626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9625-L9626)

```diff
-             QC = zC.wzC(CC.cell, null, VC);
-           (0, PC.p)(ZC, QC[0] + .5, QC[1] + .5, QC[2] + .5), (0, LC.f)(zC, ZC, CC.cell[0], CC.cell[1], CC.cell[2]), ZC.IK(!0)
+             Xk = Fk.ZFk(kk.cell, null, kF);
+           (0, Jk.q)(Ik, Xk[0] + .5, Xk[1] + .5, Xk[2] + .5), (0, mk.d)(Fk, Ik, kk.cell[0], kk.cell[1], kk.cell[2]), Ik.Av(!0)
```

#### 1175. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9629` → after: `L9496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9496) · [Before (L9629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9629)

```diff
-           return zC !== ZC && (0, MC.c)().playerCanPlaceItem((0, MC.e)().qE, CC[0], CC[1], CC[2], ZC)
+           return Fk !== Ik && (0, jk.c)().playerCanPlaceItem((0, jk.e)().oR, kk[0], kk[1], kk[2], Ik)
```

#### 1176. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9633` → after: `L9500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9500) · [Before (L9633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9633)

```diff
-           null === (CC = this.ghostMesh) || void 0 === CC || CC.IK(!1), this.hadTargetLastFrame && (this.hadTargetLastFrame = !1, (0, MC.e)().RCC(!0))
+           null === (kk = this.ghostMesh) || void 0 === kk || kk.Av(!1), this.hadTargetLastFrame && (this.hadTargetLastFrame = !1, (0, jk.e)().okk(!0))
```

#### 1177. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9636` → after: `L9503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9503) · [Before (L9636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9636)

```diff
-           return this.ghostMesh || (this.ghostMesh = (0, kC.c)((0, MC.e)())), this.ghostMesh
+           return this.ghostMesh || (this.ghostMesh = (0, Mk.g)((0, jk.e)())), this.ghostMesh
```

#### 1178. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9639-L9641` → after: `L9506-L9508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9506-L9508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9506-L9508) · [Before (L9639-L9641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9639-L9641)

```diff
-     var Qz = ZC(38225),
-       wz = ZC(38231),
-       bz = ZC(264);
+     var TF = Ik(38379),
+       iF = Ik(38382),
+       yF = Ik(272);
```

#### 1179. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9645-L9646` → after: `L9512-L9513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9512-L9513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9512-L9513) · [Before (L9645-L9646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9645-L9646)

```diff
-         if (!(0, bz.h)()) return !1;
-         return !(null === (CC = (0, MC.e)().pR) || void 0 === CC || !CC.ezTowering) && UC.b.get("clientEscMenuOptions").ezTowering
+         if (!(0, yF.d)()) return !1;
+         return !(null === (kk = (0, jk.e)().gJ) || void 0 === kk || !kk.ezTowering) && hk.d.get("clientEscMenuOptions").ezTowering
```

#### 1180. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9650` → after: `L9517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9517) · [Before (L9650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9650)

```diff
-           ZC = zC.pCC;
+           Ik = Fk.Vkk;
```

#### 1181. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9652-L9656` → after: `L9519-L9523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9519-L9523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9519-L9523) · [Before (L9652-L9656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9652-L9656)

```diff
-         if (!zC.qM.Sy(ZC.HV) || XC.g[ZC.HV].canBePlacedOver) return null;
-         const QC = zC.qE,
-           [wC, bC, nC] = ZC.wp;
-         if (bC !== Math.floor(zC.JR.yG(QC)[1])) return null;
-         const fC = zC.JR.MzC(QC);
+         if (!Fk.yj.lB(Ik.YM) || Uk.g[Ik.YM].canBePlacedOver) return null;
+         const Xk = Fk.oR,
+           [Tk, ik, yk] = Ik.gq;
+         if (ik !== Math.floor(Fk.MJ.OJ(Xk)[1])) return null;
+         const lk = Fk.MJ.KFk(Xk);
```

#### 1182. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9658` → after: `L9525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9525) · [Before (L9658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9658)

```diff
-         if (zC.JR.eT(QC).resting[1] >= 0 && !0 !== zC.qM.FM(ZC.HV)) return null;
+         if (Fk.MJ.aN(Xk).resting[1] >= 0 && !0 !== Fk.yj.lj(Ik.YM)) return null;
```

#### 1183. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9660` → after: `L9527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9527) · [Before (L9660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9660)

```diff
-         const oC = (CC, ZC, QC) => zC.rG([CC, ZC, QC]),
+         const ak = (kk, Ik, Xk) => Fk.QJ([kk, Ik, Xk]),
```

#### 1184. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9662-L9664` → after: `L9529-L9531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9529-L9531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9529-L9531) · [Before (L9662-L9664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9662-L9664)

```diff
-         if (0 !== qC && !XC.g[qC].NM && !XC.g[qC].canBePlacedOver || TC(oC, ZC.position, ZC.normal, CC)) return null;
-         const FC = zC.qM.Xs(CC);
-         return zC.JR.QzC(wC, bC, nC, FC) && (0, MC.c)().playerCanPlaceItem(QC, wC, bC, nC, CC, !0) && this.liftsOnto(wC, bC, nC, CC) ? {
+         if (0 !== qk && !Uk.g[qk].qj && !Uk.g[qk].canBePlacedOver || fk(ak, Ik.position, Ik.normal, kk)) return null;
+         const Lk = Fk.yj.XN(kk);
+         return Fk.MJ.tFk(Tk, ik, yk, Lk) && (0, jk.c)().playerCanPlaceItem(Xk, Tk, ik, yk, kk, !0) && this.liftsOnto(Tk, ik, yk, kk) ? {
```

#### 1185. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9674-L9675` → after: `L9541-L9542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9541-L9542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9541-L9542) · [Before (L9674-L9675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9674-L9675)

```diff
-             fN: nC,
-             YN: fC
+             XZ: yk,
+             SZ: lk
```

#### 1186. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9677-L9679` → after: `L9544-L9546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9544-L9546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9544-L9546) · [Before (L9677-L9679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9677-L9679)

```diff
-           oC = wC.JR.eT(wC.qE);
-         if (!(0, Qz.d)(oC)) return !1;
-         return (0, Qz.f)(((bC, oC, qC) => {
+           ak = Tk.MJ.aN(Tk.oR);
+         if (!(0, TF.e)(ak)) return !1;
+         return (0, TF.i)(((ik, ak, qk) => {
```

#### 1187. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9683-L9686` → after: `L9550-L9553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9550-L9553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9550-L9553) · [Before (L9683-L9686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9683-L9686)

```diff
-           if (FC !== CC || WC !== zC || NC !== ZC) return nC.mN(FC, WC, NC);
-           const MC = wC.qM.FM(QC);
-           return (0, wz.e)(CC, zC, ZC, QC, MC, nC.wT, nC.Rb, nC.qT)
-         }), bC.Kr, oC.wN) > 0
+           if (Lk !== kk || tk !== Fk || Zk !== Ik) return yk.vZ(Lk, tk, Zk);
+           const jk = Tk.yj.lj(Xk);
+           return (0, iF.f)(kk, Fk, Ik, Xk, jk, yk.iN, yk.Qi, yk.yN)
+         }), ik.WC, ak.kZ) > 0
```

#### 1188. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9689-L9690` → after: `L9556-L9557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9556-L9557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9556-L9557) · [Before (L9689-L9690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9689-L9690)

```diff
-     var fz = ZC(38018),
-       oz = ZC(37778);
+     var aF = Ik(38176),
+       qF = Ik(37939);
```

#### 1189. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9693` → after: `L9560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9560) · [Before (L9693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9693)

```diff
-         super(...arguments), this.assistTarget = null, this.blockAt = (CC, zC, ZC) => this.MN.rG([CC, zC, ZC])
+         super(...arguments), this.assistTarget = null, this.blockAt = (kk, Fk, Ik) => this.qZ.QJ([kk, Fk, Ik])
```

#### 1190. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9695-L9697` → after: `L9562-L9564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9562-L9564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9562-L9564) · [Before (L9695-L9697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9695-L9697)

```diff
-       bqC() {
-         const CC = super.bqC();
-         return CC.tookAction || CC.preventPlacement ? CC : (this.placeBlock(), {
+       sqk() {
+         const kk = super.sqk();
+         return kk.tookAction || kk.preventPlacement ? kk : (this.placeBlock(), {
```

#### 1191. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9702-L9704` → after: `L9569-L9571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9569-L9571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9569-L9571) · [Before (L9702-L9704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9702-L9704)

```diff
-       HZC() {
-         const CC = super.HZC();
-         return CC.tookAction || CC.preventPlacement ? CC : (this.placeBlock(), {
+       NIk() {
+         const kk = super.NIk();
+         return kk.tookAction || kk.preventPlacement ? kk : (this.placeBlock(), {
```

#### 1192. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9710` → after: `L9577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9577) · [Before (L9710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9710)

```diff
-         if (super.ZN(CC, zC), this.heldItemState.mH === this.MN.qE) {
+         if (super.Dt(kk, Fk), this.heldItemState.Xu === this.qZ.oR) {
```

#### 1193. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9714` → after: `L9581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9581) · [Before (L9714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9714)

```diff
-           null !== ZC && (0, lC.p)(ZC) ? this.MN.pCC ? this.assistTarget = zC ? nz.computeTarget(ZC) : null : this.assistTarget = CC ? Zz.computeTarget(ZC) : null : this.assistTarget = null
+           null !== Ik && (0, Rk.m)(Ik) ? this.qZ.Vkk ? this.assistTarget = Fk ? lF.computeTarget(Ik) : null : this.assistTarget = kk ? XF.computeTarget(Ik) : null : this.assistTarget = null
```

#### 1194. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9721` → after: `L9588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9588) · [Before (L9721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9721)

```diff
-         super.reset(), this.heldItemState.mH === this.MN.qE && (this.assistTarget = null, Zz.hide())
+         super.reset(), this.heldItemState.Xu === this.qZ.oR && (this.assistTarget = null, XF.hide())
```

#### 1195. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9726` → after: `L9593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9593) · [Before (L9726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9726)

```diff
-           pn: zC.cell,
+           Ky: Fk.cell,
```

#### 1196. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9728` → after: `L9595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9595) · [Before (L9728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9728)

```diff
-           Yu: null,
+           zC: null,
```

#### 1197. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9734` → after: `L9601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9601) · [Before (L9734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9734)

```diff
-         const ZC = this.MN.pCC;
+         const Ik = this.qZ.Vkk;
```

#### 1198. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9738-L9739` → after: `L9605-L9606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9605-L9606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9605-L9606) · [Before (L9738-L9739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9738-L9739)

```diff
-           Yu: ZC.Yu,
-           targetId: ZC.HV,
+           zC: Ik.zC,
+           targetId: Ik.YM,
```

#### 1199. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9745` → after: `L9612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9612) · [Before (L9745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9745)

```diff
-           pn: ZC.position,
+           Ky: Ik.position,
```

#### 1200. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9749` → after: `L9616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9616) · [Before (L9749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9749)

```diff
-         return wC && (0, MC.c)().posSatisfiesModifyConstraints(this.MN.qE, wC.pos[0], wC.pos[1], wC.pos[2]) ? {
+         return Tk && (0, jk.c)().posSatisfiesModifyConstraints(this.qZ.oR, Tk.pos[0], Tk.pos[1], Tk.pos[2]) ? {
```

#### 1201. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9751` → after: `L9618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9618) · [Before (L9751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9751)

```diff
-           pn: wC.pos,
+           Ky: Tk.pos,
```

#### 1202. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9755` → after: `L9622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9622) · [Before (L9755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9755)

```diff
-           pn: ZC.wp,
+           Ky: Ik.gq,
```

#### 1203. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9760-L9762` → after: `L9627-L9629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9627-L9629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9627-L9629) · [Before (L9760-L9762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9760-L9762)

```diff
-         if (!this.MN.JR.YCC(this.MN.qE, this.MN.JR.names.inventory)) return this.MN.pR ? bC.x[this.MN.pR.defaultBlock].id : null;
-         const CC = this.MN.JR.gzC(this.MN.qE).selectedItem;
-         return CC && (0, nC.c)(CC.typeObj.type) ? CC.typeObj.id : null
+         if (!this.qZ.MJ.Ukk(this.qZ.oR, this.qZ.MJ.names.inventory)) return this.qZ.gJ ? ik.E[this.qZ.gJ.defaultBlock].id : null;
+         const kk = this.qZ.MJ.QFk(this.qZ.oR).selectedItem;
+         return kk && (0, yk.e)(kk.typeObj.type) ? kk.typeObj.id : null
```

#### 1204. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9766` → after: `L9633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9633) · [Before (L9766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9766)

```diff
-         const zC = this.MN.JR.YCC(this.MN.qE, this.MN.JR.names.inventory),
+         const Fk = this.qZ.MJ.Ukk(this.qZ.oR, this.qZ.MJ.names.inventory),
```

#### 1205. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9770` → after: `L9637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9637) · [Before (L9770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9770)

```diff
-           pn: QC,
+           Ky: Xk,
```

#### 1206. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9775-L9776` → after: `L9642-L9643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9642-L9643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9642-L9643) · [Before (L9775-L9776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9775-L9776)

```diff
-           pR: FC
-         } = this.MN, WC = (0, lC.d)(FC.creative, oC ? FC.ezToweringGrowMs : FC.ezBridgingGrowMs), gC = nC && WC > 0;
+           gJ: Lk
+         } = this.qZ, tk = (0, Rk.f)(Lk.creative, ak ? Lk.ezToweringGrowMs : Lk.ezBridgingGrowMs), ek = yk && tk > 0;
```

#### 1207. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9778` → after: `L9645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9645) · [Before (L9778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9778)

```diff
-         const SC = (0, MC.c)().posSatisfiesModifyConstraints(this.MN.qE, QC[0], QC[1], QC[2]);
+         const wk = (0, jk.c)().posSatisfiesModifyConstraints(this.qZ.oR, Xk[0], Xk[1], Xk[2]);
```

#### 1208. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9781` → after: `L9648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9648) · [Before (L9781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9781)

```diff
-           if (null !== qC ? CC = qC : null === bC.x[CC].meta.rot && null === bC.x[CC].meta.halfblockPlacement || (CC = this.getPlaceBlockRotatedId(CC, ZC)), CC = (0, aC.c)(this.blockAt, FC, SC, PC, CC), (0, MC.c)().playerCanPlaceItem(this.MN.qE, FC, SC, PC, CC, oC)) {
+           if (null !== qk ? kk = qk : null === ik.E[kk].meta.rot && null === ik.E[kk].meta.halfblockPlacement || (kk = this.getPlaceBlockRotatedId(kk, Ik)), kk = (0, Bk.e)(this.blockAt, Lk, wk, Jk, kk), (0, jk.c)().playerCanPlaceItem(this.qZ.oR, Lk, wk, Jk, kk, ak)) {
```

#### 1209. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9783-L9785` → after: `L9650-L9652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9650-L9652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9650-L9652) · [Before (L9783-L9785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9783-L9785)

```diff
-             const ZC = this.MN.rG([FC, SC, PC]);
-             if ((null !== qC || 0 === ZC || XC.g[ZC].NM || null !== (pC = XC.g[ZC]) && void 0 !== pC && pC.canBePlacedOver) && CC !== ZC) {
-               this.MN.JR.MzC(this.heldItemState.mH).setArmsAreSwinging();
+             const Ik = this.qZ.QJ([Lk, wk, Jk]);
+             if ((null !== qk || 0 === Ik || Uk.g[Ik].qj || null !== (Hk = Uk.g[Ik]) && void 0 !== Hk && Hk.canBePlacedOver) && kk !== Ik) {
+               this.qZ.MJ.KFk(this.heldItemState.Xu).setArmsAreSwinging();
```

#### 1210. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9789-L9795` → after: `L9656-L9662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9656-L9662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9656-L9662) · [Before (L9789-L9795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9789-L9795)

```diff
-                   (0, fC.sendColyMessage)(yC.og, {
-                     pn: CC,
-                     Pn: zC,
-                     Gn: (0, bC.o)(),
-                     Rn: ZC,
-                     xn: QC,
-                     bn: wC
+                   (0, lk.sendColyMessage)(gk.Rf, {
+                     Ky: kk,
+                     Qy: Fk,
+                     sy: (0, ik.q)(),
+                     Vy: Ik,
+                     zy: Xk,
+                     Ly: Tk
```

#### 1211. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9797-L9798` → after: `L9664-L9665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9664-L9665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9664-L9665) · [Before (L9797-L9798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9797-L9798)

```diff
-                 }(qC, CC, nC, oC, (0, MC.c)().client.inventoryPrediction.record(fz.c.place((() => pC)))), gC ? OC.c.addUnconfirmed(qC, CC, WC) : ((0, MC.c)().TY(qC[0], qC[1], qC[2], CC, void 0, this.MN.qE), (0, oz.f)(qC[0], qC[1], qC[2]), (0, bC.y)(CC, !1)), (0, MC.c)().client.tr … [truncated]
-                 const CC = this.MN.JR.gzC(this.MN.qE);
+                 }(qk, kk, yk, ak, (0, jk.c)().client.inventoryPrediction.record(aF.c.place((() => Hk)))), ek ? Dk.c.addUnconfirmed(qk, kk, tk) : ((0, jk.c)().lG(qk[0], qk[1], qk[2], kk, void 0, this.qZ.oR), (0, qF.j)(qk[0], qk[1], qk[2]), (0, ik.H)(kk, !1)), (0, jk.c)().client.tr … [truncated]
+                 const kk = this.qZ.MJ.QFk(this.qZ.oR);
```

#### 1212. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9801` → after: `L9668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9668) · [Before (L9801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9801)

```diff
-               nC || ("Board" === this.bloxd.getMetaInfo(CC).rootName && NC.o.bp("EditBoard", {
+               yk || ("Board" === this.bloxd.getMetaInfo(kk).rootName && Zk.g.GL("EditBoard", {
```

#### 1213. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9803` → after: `L9670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9670) · [Before (L9803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9803)

```diff
-               }), "Custom Lobby Block" === this.bloxd.getMetaInfo(CC).rootName && NC.o.bp("EditCustomLobbyBlock", {
+               }), "Custom Lobby Block" === this.bloxd.getMetaInfo(kk).rootName && Zk.g.GL("EditCustomLobbyBlock", {
```

#### 1214. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9808-L9809` → after: `L9675-L9676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9675-L9676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9675-L9676) · [Before (L9808-L9809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9808-L9809)

```diff
-         } else SC || !this.MN.pR.canChange && !this.MN.pR.cantChangeError && "You cannot modify this block" === this.MN.pR.cantChangeError || NC.o.bp("showBottomMessage", {
-           message: this.MN.pR.cantBuildError || this.MN.pR.cantChangeError,
+         } else wk || !this.qZ.gJ.canChange && !this.qZ.gJ.cantChangeError && "You cannot modify this block" === this.qZ.gJ.cantChangeError || Zk.g.GL("showBottomMessage", {
+           message: this.qZ.gJ.cantBuildError || this.qZ.gJ.cantChangeError,
```

#### 1215. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9815` → after: `L9682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9682) · [Before (L9815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9815)

```diff
-           pn: ZC,
+           Ky: Ik,
```

#### 1216. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9817` → after: `L9684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9684) · [Before (L9817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9817)

```diff
-           Yu: wC,
+           zC: Tk,
```

#### 1217. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9827` → after: `L9694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9694) · [Before (L9827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9827)

```diff
-         if ((0, tC.C)(XC.g[fC])) return XC.g[this.getVariantName(nC, this.getFacingRot(), null)].id;
+         if ((0, dk.t)(Uk.g[lk])) return Uk.g[this.getVariantName(yk, this.getFacingRot(), null)].id;
```

#### 1218. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9830-L9831` → after: `L9697-L9698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9697-L9698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9697-L9698) · [Before (L9830-L9831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9830-L9831)

```diff
-         if (oC && (FC = 1 === QC[1] ? "bot" : -1 === QC[1] ? "top" : "side"), 0 === QC[1] ? 1 === QC[0] ? qC = 2 : 1 === QC[2] ? qC = 1 : -1 === QC[0] ? qC = 4 : (-1 === QC[2] || console.error("invalid normal", QC), qC = 3) : qC = oC && "rotatable" !== XC.g[fC].model ? 1 : this.g … [truncated]
-           const CC = (0, DC.q)(this.blockAt, ZC, bC, QC, qC);
+         if (ak && (Lk = 1 === Xk[1] ? "bot" : -1 === Xk[1] ? "top" : "side"), 0 === Xk[1] ? 1 === Xk[0] ? qk = 2 : 1 === Xk[2] ? qk = 1 : -1 === Xk[0] ? qk = 4 : (-1 === Xk[2] || console.error("invalid normal", Xk), qk = 3) : qk = ak && "rotatable" !== Uk.g[lk].model ? 1 : this.g … [truncated]
+           const kk = (0, Yk.j)(this.blockAt, Ik, ik, Xk, qk);
```

#### 1219. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9839` → after: `L9706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9706) · [Before (L9839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9839)

```diff
-         return QC[1] = `rot${zC}`, null !== ZC && (QC[2] = ZC), QC.join("|") === XC.g[CC].meta.metaStr ? CC : [CC, ...QC].join("|")
+         return Xk[1] = `rot${Fk}`, null !== Ik && (Xk[2] = Ik), Xk.join("|") === Uk.g[kk].meta.metaStr ? kk : [kk, ...Xk].join("|")
```

#### 1220. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9842` → after: `L9709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9709) · [Before (L9842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9842)

```diff
-         const CC = WC.c.mod(jC.b.getAimHeading(this.MN) + Math.PI, 2 * Math.PI);
+         const kk = tk.e.mod(Ak.b.getAimHeading(this.qZ) + Math.PI, 2 * Math.PI);
```

#### 1221. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9846-L9850` → after: `L9713-L9717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9713-L9717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9713-L9717) · [Before (L9846-L9850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9846-L9850)

```diff
-     var Fz = ZC(36637),
-       Wz = ZC(36897);
-     const Nz = (0, Wz.l)(["Wood Crossbow", "Stone Crossbow", "Iron Crossbow", "Gold Crossbow", "Diamond Crossbow"], "Crossbow"),
-       Mz = [Wz.m["Timed Spike Bomb"].id],
-       gz = (0, Wz.l)(["Wood Bow", "Stone Bow", "Iron Bow", "Gold Bow", "Diamond Bow"], "Bow");
+     var tF = Ik(36764),
+       ZF = Ik(37079);
+     const jF = (0, ZF.h)(["Wood Crossbow", "Stone Crossbow", "Iron Crossbow", "Gold Crossbow", "Diamond Crossbow"], "Crossbow"),
+       eF = [ZF.j["Timed Spike Bomb"].id],
+       wF = (0, ZF.h)(["Wood Bow", "Stone Bow", "Iron Bow", "Gold Bow", "Diamond Bow"], "Bow");
```

#### 1222. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9856` → after: `L9723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9723) · [Before (L9856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9856)

```diff
-         super.selected(CC, zC), this.heldItemState.mH === this.MN.qE && (this.inInvenIdx = this.bloxd.SzC(this.MN.qE).getSelectedSlotIndex())
+         super.selected(kk, Fk), this.heldItemState.Xu === this.qZ.oR && (this.inInvenIdx = this.bloxd.sFk(this.qZ.oR).getSelectedSlotIndex())
```

#### 1223. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9858` → after: `L9725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9725) · [Before (L9858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9858)

```diff
-       nqC() {
+       Vqk() {
```

#### 1224. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9861-L9862` → after: `L9728-L9729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9728-L9729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9728-L9729) · [Before (L9861-L9862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9861-L9862)

```diff
-       hZC() {
-         return super.hZC(), this.upFire()
+       uIk() {
+         return super.uIk(), this.upFire()
```

#### 1225. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9871` → after: `L9738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9738) · [Before (L9871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9871)

```diff
-         return super.nqC().tookAction || this.startCharging(Date.now()), {
+         return super.Vqk().tookAction || this.startCharging(Date.now()), {
```

#### 1226. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9883-L9884` → after: `L9750-L9751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9750-L9751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9750-L9751) · [Before (L9883-L9884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9883-L9884)

```diff
-         if (super.ZN(CC, zC), this.heldItemState.mH !== this.MN.qE) return;
-         const ZC = this.bloxd.SzC(this.MN.qE);
+         if (super.Dt(kk, Fk), this.heldItemState.Xu !== this.qZ.oR) return;
+         const Ik = this.bloxd.sFk(this.qZ.oR);
```

#### 1227. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9887-L9888` → after: `L9754-L9755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9754-L9755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9754-L9755) · [Before (L9887-L9888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9887-L9888)

```diff
-             wC = this.bloxd.getItemStat(this.MN.qE, this.getHeldName(), "chargeStages");
-           if (this.typeObj.requiresArrow && null === this.bloxd.getNearestArrowInInven(this.MN.qE, this.inInvenIdx)) this.finishCharging(!1, zC), this.sendFinishCharging(!1, 0, null);
+             Tk = this.bloxd.getItemStat(this.qZ.oR, this.getHeldName(), "chargeStages");
+           if (this.typeObj.requiresArrow && null === this.bloxd.getNearestArrowInInven(this.qZ.oR, this.inInvenIdx)) this.finishCharging(!1, Fk), this.sendFinishCharging(!1, 0, null);
```

#### 1228. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9890` → after: `L9757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9757) · [Before (L9890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9890)

```diff
-             const bC = this.typeObj.chargeTime * WC.d.getQuickChargeMultiplier(ZC.getItemAtIdx(this.inInvenIdx)) / wC * CC;
+             const ik = this.typeObj.chargeTime * tk.f.getQuickChargeMultiplier(Ik.getItemAtIdx(this.inInvenIdx)) / Tk * kk;
```

#### 1229. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9899` → after: `L9766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9766) · [Before (L9899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9899)

```diff
-                 const zC = Nz.includes(this.typeObj.meta.rootId) ? fz.c.replace(this.inInvenIdx, CC, `${(0,Wz.e)(this.typeObj.meta.rootName)} Crossbow Charged`) : null;
+                 const Fk = jF.includes(this.typeObj.meta.rootId) ? aF.c.replace(this.inInvenIdx, kk, `${(0,ZF.d)(this.typeObj.meta.rootName)} Crossbow Charged`) : null;
```

#### 1230. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9906` → after: `L9773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9773) · [Before (L9906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9906)

```diff
-           this.typeObj.chargeSound && zC - this.lastChargeSoundTime > 200 && (Fz.e.play(this.typeObj.chargeSound, .55 + .1 * Math.random()).rate(.9 + .2 * Math.random()), this.lastChargeSoundTime = zC)
+           this.typeObj.chargeSound && Fk - this.lastChargeSoundTime > 200 && (tF.d.play(this.typeObj.chargeSound, .55 + .1 * Math.random()).rate(.9 + .2 * Math.random()), this.lastChargeSoundTime = Fk)
```

#### 1231. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9911` → after: `L9778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9778) · [Before (L9911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9911)

```diff
-           const CC = this.heldItemState.mH === this.MN.qE ? this.typeObj.chargeTime * WC.d.getQuickChargeMultiplier(this.bloxd.SzC(this.MN.qE).getItemAtIdx(this.inInvenIdx)) : this.typeObj.chargeTime,
+           const kk = this.heldItemState.Xu === this.qZ.oR ? this.typeObj.chargeTime * tk.f.getQuickChargeMultiplier(this.bloxd.sFk(this.qZ.oR).getItemAtIdx(this.inInvenIdx)) : this.typeObj.chargeTime,
```

#### 1232. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9914` → after: `L9781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9781) · [Before (L9914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9914)

```diff
-           this.firstPersonPosOffset.x = -.05 * QC, this.firstPersonPosOffset.y = .13 * QC, this.firstPersonPosOffset.z = -.05 * QC, ZC > .25 && (this.firstPersonPosOffset.y += .0012 * Math.sin(22 * (ZC - .25) * Math.min(ZC, .8)) * Math.min(ZC, .8)), gz.includes(this.typeObj.meta. … [truncated]
+           this.firstPersonPosOffset.x = -.05 * Xk, this.firstPersonPosOffset.y = .13 * Xk, this.firstPersonPosOffset.z = -.05 * Xk, Ik > .25 && (this.firstPersonPosOffset.y += .0012 * Math.sin(22 * (Ik - .25) * Math.min(Ik, .8)) * Math.min(Ik, .8)), wF.includes(this.typeObj.meta. … [truncated]
```

#### 1233. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9926` → after: `L9793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9793) · [Before (L9926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9926)

```diff
-         this.isCharging = !1, this.chargingStart = 0, this.firstPersonPosOffset.x = 0, this.firstPersonPosOffset.y = 0, this.firstPersonPosOffset.z = 0, null === (CC = this.MN.JR.getState(this.MN.qE, "playerCameraAdjustment")) || void 0 === CC || CC.fovMultiplier.removeMultiplier … [truncated]
+         this.isCharging = !1, this.chargingStart = 0, this.firstPersonPosOffset.x = 0, this.firstPersonPosOffset.y = 0, this.firstPersonPosOffset.z = 0, null === (kk = this.qZ.MJ.getState(this.qZ.oR, "playerCameraAdjustment")) || void 0 === kk || kk.fovMultiplier.removeMultiplier … [truncated]
```

#### 1234. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9929` → after: `L9796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9796) · [Before (L9929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9929)

```diff
-         super.reset(), this.heldItemState.mH === this.MN.qE ? (this.isCharging && this.sendFinishCharging(!1, 0, null), this.finishCharging(!1, Date.now())) : this.clearChargingPose()
+         super.reset(), this.heldItemState.Xu === this.qZ.oR ? (this.isCharging && this.sendFinishCharging(!1, 0, null), this.finishCharging(!1, Date.now())) : this.clearChargingPose()
```

#### 1235. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9932-L9935` → after: `L9799-L9802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9799-L9802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9799-L9802) · [Before (L9932-L9935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9932-L9935)

```diff
-         if (this.typeObj.requiresArrow && null === this.bloxd.getNearestArrowInInven(this.MN.qE, this.inInvenIdx)) return;
-         this.isCharging = !0, this.chargingStart = CC, this.MN.JR.TzC().canRunCombinator.setBooleanType("charging", !1);
-         const zC = this.bloxd.SzC(this.MN.qE),
-           ZC = this.typeObj.chargeTime * WC.d.getQuickChargeMultiplier(zC.getItemAtIdx(this.inInvenIdx)),
+         if (this.typeObj.requiresArrow && null === this.bloxd.getNearestArrowInInven(this.qZ.oR, this.inInvenIdx)) return;
+         this.isCharging = !0, this.chargingStart = kk, this.qZ.MJ.mFk().canRunCombinator.setBooleanType("charging", !1);
+         const Fk = this.bloxd.sFk(this.qZ.oR),
+           Ik = this.typeObj.chargeTime * tk.f.getQuickChargeMultiplier(Fk.getItemAtIdx(this.inInvenIdx)),
```

#### 1236. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9937` → after: `L9804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9804) · [Before (L9937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9937)

```diff
-         NC.o.bp("middleScreenBarInitiate", {
+         Zk.g.GL("middleScreenBarInitiate", {
```

#### 1237. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9939` → after: `L9806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9806) · [Before (L9939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9939)

```diff
-           sQ: !1,
+           fX: !1,
```

#### 1238. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9941` → after: `L9808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9808) · [Before (L9941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9941)

```diff
-         }), (0, fC.sendColyMessage)(yC.Pj)
+         }), (0, lk.sendColyMessage)(gk.cj)
```

#### 1239. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9944` → after: `L9811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9811) · [Before (L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9944)

```diff
-         if (this.firstPersonPosOffset.x = 0, this.firstPersonPosOffset.y = 0, this.firstPersonPosOffset.z = 0, this.MN.JR.getState(this.MN.qE, "playerCameraAdjustment").fovMultiplier.removeMultiplier("chargeableZoom"), this.updateItemToStage(1), this.MN.JR.TzC().canRunCombinator. … [truncated]
+         if (this.firstPersonPosOffset.x = 0, this.firstPersonPosOffset.y = 0, this.firstPersonPosOffset.z = 0, this.qZ.MJ.getState(this.qZ.oR, "playerCameraAdjustment").fovMultiplier.removeMultiplier("chargeableZoom"), this.updateItemToStage(1), this.qZ.MJ.mFk().canRunCombinator. … [truncated]
```

#### 1240. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9948-L9951` → after: `L9815-L9818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9815-L9818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9815-L9818) · [Before (L9948-L9951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9948-L9951)

```diff
-               QC = this.bloxd.getItemStat(this.MN.qE, this.getHeldName(), "chargeStages"),
-               wC = null !== (ZC = this.bloxd.getItemStat(this.MN.qE, this.getHeldName(), "minChargeStateToUse")) && void 0 !== ZC ? ZC : 1,
-               bC = this.bloxd.SzC(this.MN.qE),
-               nC = this.typeObj.chargeTime * WC.d.getQuickChargeMultiplier(bC.getItemAtIdx(this.inInvenIdx)),
+               Xk = this.bloxd.getItemStat(this.qZ.oR, this.getHeldName(), "chargeStages"),
+               Tk = null !== (Ik = this.bloxd.getItemStat(this.qZ.oR, this.getHeldName(), "minChargeStateToUse")) && void 0 !== Ik ? Ik : 1,
+               ik = this.bloxd.sFk(this.qZ.oR),
+               yk = this.typeObj.chargeTime * tk.f.getQuickChargeMultiplier(ik.getItemAtIdx(this.inInvenIdx)),
```

#### 1241. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9960-L9963` → after: `L9827-L9830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9827-L9830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9827-L9830) · [Before (L9960-L9963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9960-L9963)

```diff
-         (0, fC.sendColyMessage)(yC.mh, {
-           Zn: CC,
-           Qn: zC,
-           bn: QC
+         (0, lk.sendColyMessage)(gk.Ig, {
+           ly: kk,
+           qy: Fk,
+           Ly: Xk
```

#### 1242. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9967` → after: `L9834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9834) · [Before (L9967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9967)

```diff
-         this.sendFinishCharging(!0, CC, fz.c.eat(this.MN.qE, this.inInvenIdx, this.typeObj.name)), Fz.e.play("burp", 1).rate(.9 + .2 * Math.random())
+         this.sendFinishCharging(!0, kk, aF.c.eat(this.qZ.oR, this.inInvenIdx, this.typeObj.name)), tF.d.play("burp", 1).rate(.9 + .2 * Math.random())
```

#### 1243. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9971` → after: `L9838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9838) · [Before (L9971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9971)

```diff
-         const zC = this.bloxd.SzC(this.MN.qE);
+         const Fk = this.bloxd.sFk(this.qZ.oR);
```

#### 1244. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9977` → after: `L9844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9844) · [Before (L9977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9977)

```diff
-         const zC = this.bloxd.SzC(this.MN.qE);
+         const Fk = this.bloxd.sFk(this.qZ.oR);
```

#### 1245. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9980` → after: `L9847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9847) · [Before (L9980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9980)

```diff
-           const QC = 1 === CC ? this.typeObj.meta.rootName : `${this.typeObj.meta.rootName}|meta|charging${CC}`,
+           const Xk = 1 === kk ? this.typeObj.meta.rootName : `${this.typeObj.meta.rootName}|meta|charging${kk}`,
```

#### 1246. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9988` → after: `L9855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9855) · [Before (L9988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9988)

```diff
-         super(CC, zC, ZC, QC, wC), this.inInvenIdx = void 0, this.inUse = void 0, this.dir = void 0, this.Nn = void 0, this.firstPersonPosOffset = new pC.Eg(.1, 0, .15), this.firstPersonRotation = new pC.Eg(0, -Math.PI / 2, Math.PI / 7)
+         super(kk, Fk, Ik, Xk, Tk), this.inInvenIdx = void 0, this.inUse = void 0, this.dir = void 0, this.Hy = void 0, this.firstPersonPosOffset = new Hk.Ge(.1, 0, .15), this.firstPersonRotation = new Hk.Ge(0, -Math.PI / 2, Math.PI / 7)
```

#### 1247. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9991` → after: `L9858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9858) · [Before (L9991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9991)

```diff
-         super.selected(CC), this.heldItemState.mH === this.MN.qE && (this.inInvenIdx = this.bloxd.SzC(this.MN.qE).getSelectedSlotIndex(), this.inUse = !0)
+         super.selected(kk), this.heldItemState.Xu === this.qZ.oR && (this.inInvenIdx = this.bloxd.sFk(this.qZ.oR).getSelectedSlotIndex(), this.inUse = !0)
```

#### 1248. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9994` → after: `L9861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9861) · [Before (L9994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9994)

```diff
-         if (super.ZN(CC, zC), this.heldItemState.mH === this.MN.qE && (this.inInvenIdx = this.bloxd.SzC(this.MN.qE).getSelectedSlotIndex(), this.inUse)) {
+         if (super.Dt(kk, Fk), this.heldItemState.Xu === this.qZ.oR && (this.inInvenIdx = this.bloxd.sFk(this.qZ.oR).getSelectedSlotIndex(), this.inUse)) {
```

#### 1249. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9996` → after: `L9863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9863) · [Before (L9996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9996)

```diff
-           let CC = null !== (ZC = this.MN.JR.SzC(this.MN.qE).getItemAtSelectedSlot().attributes.customAttributes.target) && void 0 !== ZC ? ZC : this.MN.pR.compassTarget;
+           let kk = null !== (Ik = this.qZ.MJ.sFk(this.qZ.oR).getItemAtSelectedSlot().attributes.customAttributes.target) && void 0 !== Ik ? Ik : this.qZ.gJ.compassTarget;
```

#### 1250. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L9998-L9999` → after: `L9865-L9866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9865-L9866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9865-L9866) · [Before (L9998-L9999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L9998-L9999)

```diff
-             if (!this.MN.JR.EzC(CC)) return;
-             CC = this.MN.JR.yG(CC)
+             if (!this.qZ.MJ.WFk(kk)) return;
+             kk = this.qZ.MJ.OJ(kk)
```

#### 1251. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10001` → after: `L9868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9868) · [Before (L10001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10001)

```diff
-           const zC = this.MN.JR.oB(this.heldItemState.mH),
+           const Fk = this.qZ.MJ.Tm(this.heldItemState.Xu),
```

#### 1252. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10003-L10004` → after: `L9870-L9871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9870-L9871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9870-L9871) · [Before (L10003-L10004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10003-L10004)

```diff
-             nC = null !== (QC = this.MN.ECC) && void 0 !== QC ? QC : this.MN.camera.yB();
-           this.MN.lB(zC, bC);
+             yk = null !== (Xk = this.qZ.Wkk) && void 0 !== Xk ? Xk : this.qZ.camera.Am();
+           this.qZ.Km(Fk, ik);
```

#### 1253. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10007-L10008` → after: `L9874-L9875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9874-L9875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9874-L9875) · [Before (L10007-L10008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10007-L10008)

```diff
-           let oC = ((0, WC.lb)(fC) - (0, WC.lb)(nC)) * (180 / Math.PI) - 15;
-           oC = oC < 0 ? 360 + oC : oC, this.dir = Math.abs(Math.round(oC / 30) + 6) % 12 + 1, this.updateItemToStage(this.dir)
+           let ak = ((0, tk.Kb)(lk) - (0, tk.Kb)(yk)) * (180 / Math.PI) - 15;
+           ak = ak < 0 ? 360 + ak : ak, this.dir = Math.abs(Math.round(ak / 30) + 6) % 12 + 1, this.updateItemToStage(this.dir)
```

#### 1254. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10012` → after: `L9879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9879) · [Before (L10012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10012)

```diff
-         const zC = this.bloxd.SzC(this.MN.qE);
+         const Fk = this.bloxd.sFk(this.qZ.oR);
```

#### 1255. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10015` → after: `L9882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9882) · [Before (L10015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10015)

```diff
-           const QC = 1 === CC ? this.typeObj.meta.rootName : `${this.typeObj.meta.rootName}|meta|dir${CC}`,
+           const Xk = 1 === kk ? this.typeObj.meta.rootName : `${this.typeObj.meta.rootName}|meta|dir${kk}`,
```

#### 1256. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10021-L10022` → after: `L9888-L9889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9888-L9889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9888-L9889) · [Before (L10021-L10022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10021-L10022)

```diff
-     var Pz = ZC(37167),
-       Gz = ZC(184);
+     var xF = Ik(37352),
+       PF = Ik(187);
```

#### 1257. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10025` → after: `L9892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9892) · [Before (L10025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10025)

```diff
-       return void 0 !== CC && null !== CC && CC > 0 ? CC : void 0
+       return void 0 !== kk && null !== kk && kk > 0 ? kk : void 0
```

#### 1258. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10049` → after: `L9916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9916) · [Before (L10049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10049)

```diff
-         const QC = this.restart ? CC : function(CC, zC, ZC, QC, wC) {
+         const Xk = this.restart ? kk : function(kk, Fk, Ik, Xk, Tk) {
```

#### 1259. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10058-L10064` → after: `L9925-L9931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9925-L9931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9925-L9931) · [Before (L10058-L10064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10058-L10064)

```diff
-     var iz = ZC(4179),
-       vz = ZC(37821),
-       ez = ZC(37857),
-       hz = ZC(36641),
-       Kz = ZC(91),
-       Yz = ZC(38268),
-       dz = ZC(600);
+     var SF = Ik(4210),
+       oF = Ik(37992),
+       vF = Ik(38022),
+       EF = Ik(36772),
+       OF = Ik(111),
+       nF = Ik(38417),
+       GF = Ik(628);
```

#### 1260. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10067` → after: `L9934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9934) · [Before (L10067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10067)

```diff
-         this.MN = void 0, this.gunTypeObj = void 0, this.yw = void 0, this.MN = CC, this.gunTypeObj = zC, this.yw = ZC
+         this.qZ = void 0, this.gunTypeObj = void 0, this.AT = void 0, this.qZ = kk, this.gunTypeObj = Fk, this.AT = Ik
```

#### 1261. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10071-L10072` → after: `L9938-L9939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9938-L9939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9938-L9939) · [Before (L10071-L10072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10071-L10072)

```diff
-         if (this.yw !== this.MN.qE) return;
-         const ZC = null === (zC = (0, MC.e)().JR.SzC(this.yw)) || void 0 === zC ? void 0 : zC.getItemAtSelectedSlot();
+         if (this.AT !== this.qZ.oR) return;
+         const Ik = null === (Fk = (0, jk.e)().MJ.sFk(this.AT)) || void 0 === Fk ? void 0 : Fk.getItemAtSelectedSlot();
```

#### 1262. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10076` → after: `L9943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9943) · [Before (L10076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10076)

```diff
-           if (!(0, dz.H)(null === zC || void 0 === zC ? void 0 : zC[CC])) return zC[CC]
+           if (!(0, GF.Q)(null === Fk || void 0 === Fk ? void 0 : Fk[kk])) return Fk[kk]
```

#### 1263. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10080` → after: `L9947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9947) · [Before (L10080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10080)

```diff
-         } = (0, MC.c)().getMetaInfo(this.gunTypeObj.name), bC = (0, MC.c)().getItemStat(this.yw, wC, "gunStats");
+         } = (0, jk.c)().getMetaInfo(this.gunTypeObj.name), ik = (0, jk.c)().getItemStat(this.AT, Tk, "gunStats");
```

#### 1264. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10084` → after: `L9951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9951) · [Before (L10084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10084)

```diff
-         if (this.yw === this.MN.qE) {
+         if (this.AT === this.qZ.oR) {
```

#### 1265. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10086` → after: `L9953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9953) · [Before (L10086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10086)

```diff
-           return null !== zC && void 0 !== zC ? zC : (0, MC.c)().getItemStat(this.yw, this.gunTypeObj.name, CC)
+           return null !== Fk && void 0 !== Fk ? Fk : (0, jk.c)().getItemStat(this.AT, this.gunTypeObj.name, kk)
```

#### 1266. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10096` → after: `L9963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9963) · [Before (L10096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10096)

```diff
-             fC = null !== nC && void 0 !== nC ? nC : wC,
+             lk = null !== yk && void 0 !== yk ? yk : Tk,
```

#### 1267. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10098` → after: `L9965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9965) · [Before (L10098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10098)

```diff
-             qC = void 0 === oC ? fC : 60 / oC * 1e3,
+             qk = void 0 === ak ? lk : 60 / ak * 1e3,
```

#### 1268. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10100-L10101` → after: `L9967-L9968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9967-L9968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9967-L9968) · [Before (L10100-L10101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10100-L10101)

```diff
-             WC = null !== (ZC = null !== (QC = null !== FC && void 0 !== FC ? FC : nC) && void 0 !== QC ? QC : CC.cadenceMs) && void 0 !== ZC ? ZC : wC,
-             NC = void 0 !== (MC = zC.equipDelay) && null !== MC && MC >= 0 ? MC : void 0;
+             tk = null !== (Ik = null !== (Xk = null !== Lk && void 0 !== Lk ? Lk : yk) && void 0 !== Xk ? Xk : kk.cadenceMs) && void 0 !== Ik ? Ik : Tk,
+             Zk = void 0 !== (jk = Fk.equipDelay) && null !== jk && jk >= 0 ? jk : void 0;
```

#### 1269. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10103` → after: `L9970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9970) · [Before (L10103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10103)

```diff
-           const gC = zC => null !== NC && void 0 !== NC ? NC : zC || void 0 !== FC ? void 0 : CC.equipDelay;
+           const ek = Fk => null !== Zk && void 0 !== Zk ? Zk : Fk || void 0 !== Lk ? void 0 : kk.equipDelay;
```

#### 1270. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10129` → after: `L9996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R9996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L9996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L9996) · [Before (L10129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10129)

```diff
-             firstShotDue: void 0 === wC ? QC + Az(CC, zC) + xz : ZC + Math.max(wC, xz),
+             firstShotDue: void 0 === Tk ? Xk + QF(kk, Fk) + sF : Ik + Math.max(Tk, sF),
```

#### 1271. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10136` → after: `L10003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10003) · [Before (L10136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10136)

```diff
-         return (0, dz.H)(CC) ? this.gunTypeObj.burstCount : CC
+         return (0, GF.Q)(kk) ? this.gunTypeObj.burstCount : kk
```

#### 1272. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10141` → after: `L10008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10008) · [Before (L10141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10141)

```diff
-         return (0, dz.H)(zC) ? null !== (CC = this.gunTypeObj.burstDelay) && void 0 !== CC ? CC : 0 : zC
+         return (0, GF.Q)(Fk) ? null !== (kk = this.gunTypeObj.burstDelay) && void 0 !== kk ? kk : 0 : Fk
```

#### 1273. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10145` → after: `L10012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10012) · [Before (L10145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10145)

```diff
-         return (0, dz.H)(CC) ? this.gunTypeObj.keepScopeOnShot : CC
+         return (0, GF.Q)(kk) ? this.gunTypeObj.keepScopeOnShot : kk
```

#### 1274. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10174-L10175` → after: `L10041-L10042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10041-L10042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10041-L10042) · [Before (L10174-L10175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10174-L10175)

```diff
-     var Ez = ZC(36496),
-       lz = ZC(37277);
+     var bF = Ik(36610),
+       RF = Ik(37450);
```

#### 1275. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10179` → after: `L10046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10046) · [Before (L10179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10179)

```diff
-         this.MN = void 0, this.gunStats = void 0, this.hasVerticalInaccuracy = void 0, this.currInacc = void 0, this.nonMoveInacc = void 0, this.currMoveInacc = void 0, this.prevBroadcastedInacc = void 0, this.ticksSinceBroadcast = void 0, this.lastTick = void 0, this.isAiming =  … [truncated]
+         this.qZ = void 0, this.gunStats = void 0, this.hasVerticalInaccuracy = void 0, this.currInacc = void 0, this.nonMoveInacc = void 0, this.currMoveInacc = void 0, this.prevBroadcastedInacc = void 0, this.ticksSinceBroadcast = void 0, this.lastTick = void 0, this.isAiming =  … [truncated]
```

#### 1276. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10204-L10208` → after: `L10071-L10075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10071-L10075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10071-L10075) · [Before (L10204-L10208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10204-L10208)

```diff
-         const wC = this.MN.JR.eT(this.MN.qE),
-           bC = (wC.Np[0] ** 2 + wC.Np[2] ** 2) ** .5,
-           nC = Math.max(this.MN.pR.runningSpeed, this.MN.pR.walkingSpeed) * this.MN.JR.MzC(this.MN.qE).speedMultiplier.getTotalMultipliedVal(),
-           fC = QC.inaccuracyStanding + bC / nC * QC.inaccuracyMovement + QC.yVelocityInaccuracy * Math.abs(wC.Np[1]);
-         0 === nC || (fC >= this.currMoveInacc ? this.currMoveInacc = fC : this.currMoveInacc = this.decreaseInacc(this.currMoveInacc, fC, ZC)), 0 !== this.nonMoveInacc && (this.nonMoveInacc = this.decreaseInacc(this.nonMoveInacc, 0, ZC));
+         const Tk = this.qZ.MJ.aN(this.qZ.oR),
+           ik = (Tk.TH[0] ** 2 + Tk.TH[2] ** 2) ** .5,
+           yk = Math.max(this.qZ.gJ.runningSpeed, this.qZ.gJ.walkingSpeed) * this.qZ.MJ.KFk(this.qZ.oR).speedMultiplier.getTotalMultipliedVal(),
+           lk = Xk.inaccuracyStanding + ik / yk * Xk.inaccuracyMovement + Xk.yVelocityInaccuracy * Math.abs(Tk.TH[1]);
+         0 === yk || (lk >= this.currMoveInacc ? this.currMoveInacc = lk : this.currMoveInacc = this.decreaseInacc(this.currMoveInacc, lk, Ik)), 0 !== this.nonMoveInacc && (this.nonMoveInacc = this.decreaseInacc(this.nonMoveInacc, 0, Ik));
```

#### 1277. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10211` → after: `L10078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10078) · [Before (L10211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10211)

```diff
-         (++this.ticksSinceBroadcast >= 6 && qC > .5 || qC > 10) && ((0, Ez.c)(oC), this.prevBroadcastedInacc = oC, this.ticksSinceBroadcast = 0), this.currInacc = oC, this.lastTick = zC, zC - this.lastShot > this.gunStats.getCadenceMs() + 100 && (this.bulletsShot = 0)
+         (++this.ticksSinceBroadcast >= 6 && qk > .5 || qk > 10) && ((0, bF.e)(ak), this.prevBroadcastedInacc = ak, this.ticksSinceBroadcast = 0), this.currInacc = ak, this.lastTick = Fk, Fk - this.lastShot > this.gunStats.getCadenceMs() + 100 && (this.bulletsShot = 0)
```

#### 1278. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10215` → after: `L10082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10082) · [Before (L10215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10215)

```diff
-         return QC < .05 ? zC : Math.max(CC - ZC * this.gunStats.getStat("recoveryRate") * QC, zC)
+         return Xk < .05 ? Fk : Math.max(kk - Ik * this.gunStats.getStat("recoveryRate") * Xk, Fk)
```

#### 1279. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10218` → after: `L10085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10085) · [Before (L10218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10218)

```diff
-         const zC = this.currInacc * Wz.i,
+         const Fk = this.currInacc * ZF.e,
```

#### 1280. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10220-L10222` → after: `L10087-L10089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10087-L10089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10087-L10089) · [Before (L10220-L10222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10220-L10222)

```diff
-             pg: ZC,
-             yzC: QC
-           } = (0, lz.d)(CC),
+             fi: Ik,
+             kIk: Xk
+           } = (0, RF.e)(kk),
```

#### 1281. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10225` → after: `L10092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10092) · [Before (L10225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10225)

```diff
-         return (0, lz.c)(ZC + wC, QC + bC)
+         return (0, RF.b)(Ik + Tk, Xk + ik)
```

#### 1282. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10228-L10231` → after: `L10095-L10098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10095-L10098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10095-L10098) · [Before (L10228-L10231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10228-L10231)

```diff
-     var cz = ZC(37473),
-       uz = ZC(37729),
-       rz = ZC(37465),
-       sz = ZC(37306);
+     var CF = Ik(37657),
+       NF = Ik(37896),
+       cF = Ik(37652),
+       WF = Ik(37479);
```

#### 1283. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10234-L10237` → after: `L10101-L10104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10101-L10104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10101-L10104) · [Before (L10234-L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10234-L10237)

```diff
-       tz = new pC.Eg(0, .6, .5),
-       Dz = new pC.Eg(0, .5 * -Math.PI, Math.PI),
-       jz = new pC.Eg(.12, .12, .12);
-     class yz extends gC.e {
+       dF = new Hk.Ge(0, .6, .5),
+       YF = new Hk.Ge(0, .5 * -Math.PI, Math.PI),
+       AF = new Hk.Ge(.12, .12, .12);
+     class gF extends ek.d {
```

#### 1284. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10239-L10241` → after: `L10106-L10108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10106-L10108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10106-L10108) · [Before (L10239-L10241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10239-L10241)

```diff
-         super(CC, zC, ZC, wC), this.breakingItem = void 0, this.firing = void 0, this.burstRemaining = void 0, this.burstSchedule = void 0, this.wasFiringLastTick = void 0, this.didShootLastTick = void 0, this.attemptAiming = void 0, this.aiming = void 0, this.fireSchedule = void … [truncated]
-         const bC = this.MN.Vg.Km();
-         if (this.heldItemState.mH === this.MN.qE) {
+         super(kk, Fk, Ik, Tk), this.breakingItem = void 0, this.firing = void 0, this.burstRemaining = void 0, this.burstSchedule = void 0, this.wasFiringLastTick = void 0, this.didShootLastTick = void 0, this.attemptAiming = void 0, this.aiming = void 0, this.fireSchedule = void … [truncated]
+         const ik = this.qZ.Xw.mG();
+         if (this.heldItemState.Xu === this.qZ.oR) {
```

#### 1285. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10243` → after: `L10110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10110) · [Before (L10243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10243)

```diff
-           this.bulletBlockedBillboardMat = (0, Pz.d)({
+           this.bulletBlockedBillboardMat = (0, xF.e)({
```

#### 1286. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10245` → after: `L10112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10112) · [Before (L10245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10245)

```diff
-             sS: bC,
+             Yw: ik,
```

#### 1287. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10253` → after: `L10120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10120) · [Before (L10253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10253)

```diff
-           }).mirror, this.bulletBlockedBillboardPlane = (0, uz.n)(CC.Vg, "bulletBlockedBillboardPlane", (0, rz.g)({
+           }).mirror, this.bulletBlockedBillboardPlane = (0, NF.m)(kk.Xw, "bulletBlockedBillboardPlane", (0, cF.i)({
```

#### 1288. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10256` → after: `L10123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10123) · [Before (L10256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10256)

```diff
-           })), this.bulletBlockedBillboardPlane.material = this.bulletBlockedBillboardMat, this.bulletBlockedBillboardPlane.IK(!1), CC.Vg.jS(this.bulletBlockedBillboardPlane, !1), this.ticksSinceAttackBlockedBillboardUpdate = 0
+           })), this.bulletBlockedBillboardPlane.material = this.bulletBlockedBillboardMat, this.bulletBlockedBillboardPlane.Av(!1), kk.Xw.hw(this.bulletBlockedBillboardPlane, !1), this.ticksSinceAttackBlockedBillboardUpdate = 0
```

#### 1289. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10262-L10263` → after: `L10129-L10130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10129-L10130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10129-L10130) · [Before (L10262-L10263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10262-L10263)

```diff
-         super.selected(CC), this.breakingItem.reset(), this.breakingItem.selected(CC), this.gunTypeObj = CC, this.gunStats = new mz(this.MN, CC, this.heldItemState.mH), this.firing = !1, this.burstRemaining = 0, this.burstSchedule = new Iz(Jz), this.aiming = !1, this.attemptAimin … [truncated]
-         const ZC = UC.b.get("isTouchScreen"),
+         super.selected(kk), this.breakingItem.reset(), this.breakingItem.selected(kk), this.gunTypeObj = kk, this.gunStats = new pF(this.qZ, kk, this.heldItemState.Xu), this.firing = !1, this.burstRemaining = 0, this.burstSchedule = new zF(VF), this.aiming = !1, this.attemptAimin … [truncated]
+         const Ik = hk.d.get("isTouchScreen"),
```

#### 1290. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10265` → after: `L10132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10132) · [Before (L10265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10265)

```diff
-           wC = (null !== (zC = this.lastShots.get(this.gunTypeObj.name)) && void 0 !== zC ? zC : -1 / 0) + this.gunStats.getIntervalMs(ZC) / 1.2 + xz,
+           Tk = (null !== (Fk = this.lastShots.get(this.gunTypeObj.name)) && void 0 !== Fk ? Fk : -1 / 0) + this.gunStats.getIntervalMs(Ik) / 1.2 + sF,
```

#### 1291. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10267` → after: `L10134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10134) · [Before (L10267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10267)

```diff
-         this.fireSchedule = new Iz(Jz), this.pressedAt = 0, this.wasDueLastTick = !1, this.fireSchedule.arm(bC), this.soundLastRoundFired = QC.soundLastRoundFired, this.aimChangeTime = 0, this.reloadStartTime = 0, this.firstPersonGunMeshScaling = .055, this.smallMuzzleFlashScale  … [truncated]
+         this.fireSchedule = new zF(VF), this.pressedAt = 0, this.wasDueLastTick = !1, this.fireSchedule.arm(ik), this.soundLastRoundFired = Xk.soundLastRoundFired, this.aimChangeTime = 0, this.reloadStartTime = 0, this.firstPersonGunMeshScaling = .055, this.smallMuzzleFlashScale  … [truncated]
```

#### 1292. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10272` → after: `L10139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10139) · [Before (L10272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10272)

```diff
-         })), this.cachedZoomLevel = this.MN.camera.cL, this.inaccuracyCalculator = null, this.heldItemState.mH === this.MN.qE && (this.inaccuracyCalculator = new Xz(this.MN, CC, this.gunStats), this.MN.camera.WU.hV(this.gunStats.getStat("kickbackDecreaseRate"))), this.lastGunShot … [truncated]
+         })), this.cachedZoomLevel = this.qZ.camera.JY, this.inaccuracyCalculator = null, this.heldItemState.Xu === this.qZ.oR && (this.inaccuracyCalculator = new UF(this.qZ, kk, this.gunStats), this.qZ.camera.pY.rD(this.gunStats.getStat("kickbackDecreaseRate"))), this.lastGunShot … [truncated]
```

#### 1293. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10276` → after: `L10143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10143) · [Before (L10276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10276)

```diff
-         this.muzzleParticleEmitter && !this.muzzleParticleEmitter.GJ() || (null === (CC = this.muzzleParticleSystem) || void 0 === CC || CC.dispose(), this.createMuzzleEmitter())
+         this.muzzleParticleEmitter && !this.muzzleParticleEmitter.Hs() || (null === (kk = this.muzzleParticleSystem) || void 0 === kk || kk.dispose(), this.createMuzzleEmitter())
```

#### 1294. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10322-L10323` → after: `L10189-L10190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10189-L10190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10189-L10190) · [Before (L10322-L10323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10322-L10323)

```diff
-         (super.reset(), this.aiming && this.bloxd.client.cameraController.setCameraZoomNoValidation(this.cachedZoomLevel), this.firing = !1, this.burstRemaining = 0, this.burstSchedule = new Iz(Jz), this.aiming = !1, this.attemptAiming = !1, this.fireSchedule = new Iz(Jz), this.p … [truncated]
-         NC.o.unsubscribe(this.networkedPlayerShotSub), null === (CC = this.bulletBlockedBillboardPlane) || void 0 === CC || CC.IK(!1);
+         (super.reset(), this.aiming && this.bloxd.client.cameraController.setCameraZoomNoValidation(this.cachedZoomLevel), this.firing = !1, this.burstRemaining = 0, this.burstSchedule = new zF(VF), this.aiming = !1, this.attemptAiming = !1, this.fireSchedule = new zF(VF), this.p … [truncated]
+         Zk.g.unsubscribe(this.networkedPlayerShotSub), null === (kk = this.bulletBlockedBillboardPlane) || void 0 === kk || kk.Av(!1);
```

#### 1295. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10332` → after: `L10199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10199) · [Before (L10332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10332)

```diff
-         null !== CC && this.muzzleParticleEmitter && this.MN.Vg.nH.detachTransformNodeIfFound(this.muzzleParticleEmitter, CC, 0), super.releaseThirdPersonThinObject()
+         null !== kk && this.muzzleParticleEmitter && this.qZ.Xw.kp.detachTransformNodeIfFound(this.muzzleParticleEmitter, kk, 0), super.releaseThirdPersonThinObject()
```

#### 1296. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10338` → after: `L10205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10205) · [Before (L10338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10338)

```diff
-       mZC() {
+       CIk() {
```

#### 1297. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10344-L10345` → after: `L10211-L10212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10211-L10212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10211-L10212) · [Before (L10344-L10345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10344-L10345)

```diff
-       KZC() {
-         return this.breakingItem.KZC(), this.firing = !1, {
+       bIk() {
+         return this.breakingItem.bIk(), this.firing = !1, {
```

#### 1298. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10350` → after: `L10217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10217) · [Before (L10350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10350)

```diff
-       nqC() {
+       Vqk() {
```

#### 1299. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10352` → after: `L10219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10219) · [Before (L10352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10352)

```diff
-         return CC.tookAction ? CC : (this.secondaryHeld = !0, this.updateAttemptAiming(), {
+         return kk.tookAction ? kk : (this.secondaryHeld = !0, this.updateAttemptAiming(), {
```

#### 1300. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10357` → after: `L10224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10224) · [Before (L10357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10357)

```diff
-       hZC() {
+       uIk() {
```

#### 1301. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10378-L10379` → after: `L10245-L10246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10245-L10246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10245-L10246) · [Before (L10378-L10379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10378-L10379)

```diff
-       dZC() {
-         return this.breakingItem.dZC(), !0
+       UIk() {
+         return this.breakingItem.UIk(), !0
```

#### 1302. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10385` → after: `L10252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10252) · [Before (L10385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10385)

```diff
-         const ZC = UC.b.get("isTouchScreen");
+         const Ik = hk.d.get("isTouchScreen");
```

#### 1303. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10404` → after: `L10271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10271) · [Before (L10404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10404)

```diff
-         QC && this.lastShots.set(this.gunTypeObj.name, zC), !this.firing || this.gunStats.getStat("autoFireWithMouse") || ZC || (this.firing = !1), this.heldItemState.mH === this.MN.qE && (0 !== this.MN.camera.uL ? this.updateAttackBlockedBillboard() : this.bulletBlockedBillboard … [truncated]
+         Xk && this.lastShots.set(this.gunTypeObj.name, Fk), !this.firing || this.gunStats.getStat("autoFireWithMouse") || Ik || (this.firing = !1), this.heldItemState.Xu === this.qZ.oR && (0 !== this.qZ.camera.VY ? this.updateAttackBlockedBillboard() : this.bulletBlockedBillboard … [truncated]
```

#### 1304. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10412` → after: `L10279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10279) · [Before (L10412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10412)

```diff
-         QC > 0 ? "sniper" === wC && Yz.d.setMultiplierType("sniperScope", 1 / (1 + 5 * QC)) : "sniper" === wC && Yz.d.removeMultiplier("sniperScope");
+         Xk > 0 ? "sniper" === Tk && nF.h.setMultiplierType("sniperScope", 1 / (1 + 5 * Xk)) : "sniper" === Tk && nF.h.removeMultiplier("sniperScope");
```

#### 1305. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10416` → after: `L10283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10283) · [Before (L10416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10416)

```diff
-           this.MN.Vg.tfC(this.mesh, !CC && this.heldItemState._visible)
+           this.qZ.Xw.rlk(this.mesh, !kk && this.heldItemState._visible)
```

#### 1306. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10421` → after: `L10288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10288) · [Before (L10421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10421)

```diff
-         this.aimChangeTime = performance.now(), NC.o.bp("aimingOverlay", this.gunStats.getStat("scopeType")), this.MN.JR.TzC().canRunCombinator.setBooleanType("canRunBecauseNotAiming", !1), this.cachedZoomLevel = this.bloxd.client.cameraController.getZoomDistance(), this.bloxd.cl … [truncated]
+         this.aimChangeTime = performance.now(), Zk.g.GL("aimingOverlay", this.gunStats.getStat("scopeType")), this.qZ.MJ.mFk().canRunCombinator.setBooleanType("canRunBecauseNotAiming", !1), this.cachedZoomLevel = this.bloxd.client.cameraController.getZoomDistance(), this.bloxd.cl … [truncated]
```

#### 1307. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10424` → after: `L10291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10291) · [Before (L10424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10424)

```diff
-         this.aimChangeTime = performance.now(), NC.o.bp("aimingOverlay", "none"), this.MN.JR.TzC().canRunCombinator.setBooleanType("canRunBecauseNotAiming", !0), this.bloxd.client.cameraController.setCameraZoomNoValidation(this.cachedZoomLevel)
+         this.aimChangeTime = performance.now(), Zk.g.GL("aimingOverlay", "none"), this.qZ.MJ.mFk().canRunCombinator.setBooleanType("canRunBecauseNotAiming", !0), this.bloxd.client.cameraController.setCameraZoomNoValidation(this.cachedZoomLevel)
```

#### 1308. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10433` → after: `L10300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10300) · [Before (L10433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10433)

```diff
-         if (this.updateMuzzleFlashFromRenderTick(), !this.MN.Vg.lS) return;
+         if (this.updateMuzzleFlashFromRenderTick(), !this.qZ.Xw.Nw) return;
```

#### 1309. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10435` → after: `L10302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10302) · [Before (L10435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10435)

```diff
-         null !== zC && this.MN.Vg.nH.getActuallyVisible(zC) && this._updateHeldMeshLighting()
+         null !== Fk && this.qZ.Xw.kp.getActuallyVisible(Fk) && this._updateHeldMeshLighting()
```

#### 1310. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10441` → after: `L10308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10308) · [Before (L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10441)

```diff
-         this.muzzleParticleEmitter && !(0, sz.d)(this.muzzleParticleEmitter) && null !== this.liveThirdPersonThinObjectId() && (this.muzzleParticleEmitter.position._isDirty = !0)
+         this.muzzleParticleEmitter && !(0, WF.i)(this.muzzleParticleEmitter) && null !== this.liveThirdPersonThinObjectId() && (this.muzzleParticleEmitter.position._isDirty = !0)
```

#### 1311. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10446` → after: `L10313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10313) · [Before (L10446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10446)

```diff
-       wqC() {
+       Qqk() {
```

#### 1312. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10450` → after: `L10317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10317) · [Before (L10450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10450)

```diff
-           return this.mesh.sq.set(CC, CC, CC), this.mesh.rotation.set(0, .5 * Math.PI, 0), this.mesh.parent = this.MN.Vg.camera, (0, PC.p)(this.mesh, 0, 0, 0), this.ensureMuzzleEmitter(), this.muzzleParticleEmitter.parent = this.mesh, this.placeMuzzleEmitter(CC, CC, CC), void thi … [truncated]
+           return this.mesh.ci.set(kk, kk, kk), this.mesh.rotation.set(0, .5 * Math.PI, 0), this.mesh.parent = this.qZ.Xw.camera, (0, Jk.q)(this.mesh, 0, 0, 0), this.ensureMuzzleEmitter(), this.muzzleParticleEmitter.parent = this.mesh, this.placeMuzzleEmitter(kk, kk, kk), void thi … [truncated]
```

#### 1313. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10452` → after: `L10319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10319) · [Before (L10452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10452)

```diff
-         this.MN.Vg.tfC(this.mesh, !1);
+         this.qZ.Xw.rlk(this.mesh, !1);
```

#### 1314. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10456` → after: `L10323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10323) · [Before (L10456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10456)

```diff
-           return void(null !== CC && this.MN.Vg.nH.setVisibility(CC, !1))
+           return void(null !== kk && this.qZ.Xw.kp.setVisibility(kk, !1))
```

#### 1315. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10466` → after: `L10333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10333) · [Before (L10466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10466)

```diff
-         if ("arm" === CC) return void(0, GC.d)(this.typeObj, zC.itemOffset, this.thirdPersonPose);
+         if ("arm" === kk) return void(0, xk.g)(this.typeObj, Fk.itemOffset, this.thirdPersonPose);
```

#### 1316. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10470` → after: `L10337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10337) · [Before (L10470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10470)

```diff
-           sq: fC
+           ci: lk
```

#### 1317. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10472` → after: `L10339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10339) · [Before (L10472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10472)

```diff
-         this.thirdPersonPose.usesQuaternion = !1, fC.Av(jz);
+         this.thirdPersonPose.usesQuaternion = !1, lk.kS(AF);
```

#### 1318. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10474-L10476` → after: `L10341-L10343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10341-L10343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10341-L10343) · [Before (L10474-L10476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10474-L10476)

```diff
-           qC = tz.x + (null !== (ZC = null === oC || void 0 === oC ? void 0 : oC[0]) && void 0 !== ZC ? ZC : 0),
-           FC = tz.y + (null !== (QC = null === oC || void 0 === oC ? void 0 : oC[1]) && void 0 !== QC ? QC : 0),
-           WC = tz.z + (null !== (wC = null === oC || void 0 === oC ? void 0 : oC[2]) && void 0 !== wC ? wC : 0),
+           qk = dF.x + (null !== (Ik = null === ak || void 0 === ak ? void 0 : ak[0]) && void 0 !== Ik ? Ik : 0),
+           Lk = dF.y + (null !== (Xk = null === ak || void 0 === ak ? void 0 : ak[1]) && void 0 !== Xk ? Xk : 0),
+           tk = dF.z + (null !== (Tk = null === ak || void 0 === ak ? void 0 : ak[2]) && void 0 !== Tk ? Tk : 0),
```

#### 1319. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10480-L10481` → after: `L10347-L10348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10347-L10348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10347-L10348) · [Before (L10480-L10481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10480-L10481)

```diff
-           pC.Eg.TransformCoordinatesFromFloatsToRef(qC, FC, WC, CC, bC), nC.L_(Dz.x + NC[0], Dz.y + NC[1], Dz.z + NC[2])
-         } else bC.L_(qC, FC, WC), nC.L_(Dz.x, Dz.y, Dz.z)
+           Hk.Ge.TransformCoordinatesFromFloatsToRef(qk, Lk, tk, kk, ik), yk.t5(YF.x + Zk[0], YF.y + Zk[1], YF.z + Zk[2])
+         } else ik.t5(qk, Lk, tk), yk.t5(YF.x, YF.y, YF.z)
```

#### 1320. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10487` → after: `L10354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10354) · [Before (L10487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10487)

```diff
-         const zC = this.MN.Vg.nH;
+         const Fk = this.qZ.Xw.kp;
```

#### 1321. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10490` → after: `L10357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10357) · [Before (L10490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10490)

```diff
-           sq: ZC
+           ci: Ik
```

#### 1322. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10492` → after: `L10359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10359) · [Before (L10492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10492)

```diff
-         this.placeMuzzleEmitter(ZC.x, this.heldPoseScaleY(), ZC.z, cz.c)
+         this.placeMuzzleEmitter(Ik.x, this.heldPoseScaleY(), Ik.z, CF.e)
```

#### 1323. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10501` → after: `L10368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10368) · [Before (L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10501)

```diff
-         wC.sq.set(nC / Math.abs(CC), nC / Math.abs(zC), nC / Math.abs(ZC))
+         Tk.ci.set(yk / Math.abs(kk), yk / Math.abs(Fk), yk / Math.abs(Ik))
```

#### 1324. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10508` → after: `L10375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10375) · [Before (L10508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10508)

```diff
-         if (console.assert(this.heldItemState.mH === this.MN.qE, "fireBulletLocal should only be called for local player."), this.reloading) return !1;
+         if (console.assert(this.heldItemState.Xu === this.qZ.oR, "fireBulletLocal should only be called for local player."), this.reloading) return !1;
```

#### 1325. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10510` → after: `L10377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10377) · [Before (L10510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10510)

```diff
-         const ZC = this.MN.JR.SzC(this.MN.qE),
+         const Ik = this.qZ.MJ.sFk(this.qZ.oR),
```

#### 1326. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10513` → after: `L10380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10380) · [Before (L10513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10513)

```diff
-           bC = null !== (zC = this.gunStats.getStat("shotPelletCount")) && void 0 !== zC ? zC : 1;
+           ik = null !== (Fk = this.gunStats.getStat("shotPelletCount")) && void 0 !== Fk ? Fk : 1;
```

#### 1327. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10529` → after: `L10396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10396) · [Before (L10529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10529)

```diff
-               VF: WC,
+               fL: tk,
```

#### 1328. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10534` → after: `L10401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10401) · [Before (L10534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10534)

```diff
-             AC = null !== (GC = Gz.f.lifeformMeshToBodyPart[MC]) && void 0 !== GC ? GC : NC;
+             Kk = null !== (xk = PF.f.lifeformMeshToBodyPart[jk]) && void 0 !== xk ? xk : Zk;
```

#### 1329. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10536` → after: `L10403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10403) · [Before (L10536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10536)

```diff
-           const xC = QC === ez.d.HIT_ENTITY && (null === (RC = this.MN.QE[this.MN.qE][wC]) || void 0 === RC ? void 0 : RC.canAttack) && !this.MN.QE[this.MN.qE][wC]._invincible;
+           const Qk = Xk === vF.c.HIT_ENTITY && (null === (Pk = this.qZ.xR[this.qZ.oR][Tk]) || void 0 === Pk ? void 0 : Pk.canAttack) && !this.qZ.xR[this.qZ.oR][Tk]._invincible;
```

#### 1330. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10538-L10539` → after: `L10405-L10406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10405-L10406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10405-L10406) · [Before (L10538-L10539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10538-L10539)

```diff
-             VF: WC,
-             zW: fC,
+             fL: tk,
+             BL: lk,
```

#### 1331. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10541-L10542` → after: `L10408-L10409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10408-L10409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10408-L10409) · [Before (L10541-L10542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10541-L10542)

```diff
-               yw: wC,
-               ZW: AC
+               AT: Tk,
+               dL: Kk
```

#### 1332. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10544-L10545` → after: `L10411-L10412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10411-L10412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10411-L10412) · [Before (L10544-L10545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10544-L10545)

```diff
-               yw: null,
-               ZW: null
+               AT: null,
+               dL: null
```

#### 1333. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10548` → after: `L10415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10415) · [Before (L10548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10548)

```diff
-         }(0, MC.c)().client.gameRecorder.recordBulletShot(this.heldItemState.mH, oC);
+         }(0, jk.c)().client.gameRecorder.recordBulletShot(this.heldItemState.Xu, ak);
```

#### 1334. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10550-L10554` → after: `L10417-L10421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10417-L10421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10417-L10421) · [Before (L10550-L10554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10550-L10554)

```diff
-           LF: QC.name,
-           UF: (0, MC.c)().client.getMsgHandler().SZC.state.tickCounter,
-           BF: FC,
-           OF: nC,
-           bn: wC
+           UL: Xk.name,
+           CL: (0, jk.c)().client.getMsgHandler().sIk.state.tickCounter,
+           NL: Lk,
+           cL: yk,
+           Ly: Tk
```

#### 1335. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10556` → after: `L10423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10423) · [Before (L10556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10556)

```diff
-         if ((0, fC.sendColyMessage)(yC.Lj, AC), gC) {
+         if ((0, lk.sendColyMessage)(gk.Yi, Kk), ek) {
```

#### 1336. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10558` → after: `L10425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10425) · [Before (L10558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10558)

```diff
-           const CC = this.MN.pR,
+           const kk = this.qZ.gJ,
```

#### 1337. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10560-L10564` → after: `L10427-L10431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10427-L10431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10427-L10431) · [Before (L10560-L10564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10560-L10564)

```diff
-             ZC = null !== (xC = null === (JC = QC.attributes.customAttributes) || void 0 === JC ? void 0 : JC.enchantments) && void 0 !== xC ? xC : {},
-             wC = zC.getEffectLevel(this.MN.qE, "Damage"),
-             bC = zC.getEffectLevel(this.MN.qE, "Rested Damage"),
-             fC = null !== (IC = ZC.Damage) && void 0 !== IC ? IC : 0,
-             oC = null !== (iC = ZC["Critical Damage"]) && void 0 !== iC ? iC : 0;
+             Ik = null !== (Qk = null === (sk = Xk.attributes.customAttributes) || void 0 === sk ? void 0 : sk.enchantments) && void 0 !== Qk ? Qk : {},
+             Tk = Fk.getEffectLevel(this.qZ.oR, "Damage"),
+             ik = Fk.getEffectLevel(this.qZ.oR, "Rested Damage"),
+             lk = null !== (Vk = Ik.Damage) && void 0 !== Vk ? Vk : 0,
+             ak = null !== (zk = Ik["Critical Damage"]) && void 0 !== zk ? zk : 0;
```

#### 1338. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10566-L10567` → after: `L10433-L10434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10433-L10434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10433-L10434) · [Before (L10566-L10567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10566-L10567)

```diff
-               yw: QC,
-               ZW: FC
+               AT: Xk,
+               dL: Lk
```

#### 1339. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10571` → after: `L10438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10438) · [Before (L10571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10571)

```diff
-             const ZC = this.MN.QE[this.MN.qE][QC];
+             const Ik = this.qZ.xR[this.qZ.oR][Xk];
```

#### 1340. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10576` → after: `L10443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10443) · [Before (L10576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10576)

```diff
-             MC = (0, WC.l)(MC, wC, bC, fC), "Head" === FC && oC > 0 && (MC *= 1 + .08 * oC);
+             jk = (0, tk.p)(jk, Tk, ik, lk), "Head" === Lk && ak > 0 && (jk *= 1 + .08 * ak);
```

#### 1341. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10578` → after: `L10445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10445) · [Before (L10578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10578)

```diff
-               SC = (0, WC.L)(ZC._armourReductionSum, ZC._protectionEnchantSum, zC.getEffectLevel(QC, "Damage Reduction"), zC.getEffectLevel(QC, "Weakness"), ZC._receivingDamageMultiplier),
+               wk = (0, tk.O)(Ik._armourReductionSum, Ik._protectionEnchantSum, Fk.getEffectLevel(Xk, "Damage Reduction"), Fk.getEffectLevel(Xk, "Weakness"), Ik._receivingDamageMultiplier),
```

#### 1342. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10580` → after: `L10447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10447) · [Before (L10580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10580)

```diff
-             NC.o.bp("shotPlayer", {
+             Zk.g.GL("shotPlayer", {
```

#### 1343. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10587-L10588` → after: `L10454-L10455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10454-L10455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10454-L10455) · [Before (L10587-L10588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10587-L10588)

```diff
-           NC.o.bp("localGunHitmarker", {
-             RQ: SC
+           Zk.g.GL("localGunHitmarker", {
+             KX: wk
```

#### 1344. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10591` → after: `L10458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10458) · [Before (L10591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10591)

```diff
-         NC.o.bp("localPlayerNewShotsLeft", QC.attributes.customAttributes.shotsLeft);
+         Zk.g.GL("localPlayerNewShotsLeft", Xk.attributes.customAttributes.shotsLeft);
```

#### 1345. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10597` → after: `L10464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10464) · [Before (L10597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10597)

```diff
-         return this.inaccuracyCalculator.shot(CC), this.MN.camera.WU.add(YC), 0 === this.getShotsLeftCount() && this.reload(CC), !0
+         return this.inaccuracyCalculator.shot(kk), this.qZ.camera.pY.add(nk), 0 === this.getShotsLeftCount() && this.reload(kk), !0
```

#### 1346. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10609-L10610` → after: `L10476-L10477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10476-L10477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10476-L10477) · [Before (L10609-L10610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10609-L10610)

```diff
-           JR: fC
-         } = this.MN, oC = this.bloxd.qB(this.heldItemState.mH), qC = this.pickActionHelper.pickWeaponRaycast(CC, zC, this.bulletReachDistance, {
+           MJ: lk
+         } = this.qZ, ak = this.bloxd.qm(this.heldItemState.Xu), qk = this.pickActionHelper.pickWeaponRaycast(kk, Fk, this.bulletReachDistance, {
```

#### 1347. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10616` → after: `L10483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10483) · [Before (L10616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10616)

```diff
-           Eu: MC,
+           nC: jk,
```

#### 1348. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10618-L10619` → after: `L10485-L10486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10485-L10486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10485-L10486) · [Before (L10618-L10619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10618-L10619)

```diff
-         } = qC, SC = null !== (bC = qC.globalRayOrigin) && void 0 !== bC ? bC : wC().copy(Tz, this.bloxd.getLifeformEyePos(this.heldItemState.mH, !1)), pC = null !== (nC = qC.distanceTravelled) && void 0 !== nC ? nC : this.bulletReachDistance, PC = wC().wb(az, SC, zC, 2.5 * oC),  … [truncated]
-         fC.lH(GC, "hidingMeshManager", {
+         } = qk, wk = null !== (ik = qk.globalRayOrigin) && void 0 !== ik ? ik : Tk().copy(fF, this.bloxd.getLifeformEyePos(this.heldItemState.Xu, !1)), Hk = null !== (yk = qk.distanceTravelled) && void 0 !== yk ? yk : this.bulletReachDistance, Jk = Tk().pk(BF, wk, Fk, 2.5 * ak),  … [truncated]
+         lk.Tu(xk, "hidingMeshManager", {
```

#### 1349. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10622` → after: `L10489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10489) · [Before (L10622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10622)

```diff
-             fC.lH(GC, fC.names.mesh, {
+             lk.Tu(xk, lk.names.mesh, {
```

#### 1350. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10624` → after: `L10491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10491) · [Before (L10624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10624)

```diff
-               ynC: !0
+               Dyk: !0
```

#### 1351. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10628` → after: `L10495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10495) · [Before (L10628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10628)

```diff
-             fC.uH(GC, fC.names.mesh)
+             lk.Eu(xk, lk.names.mesh)
```

#### 1352. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10633-L10634` → after: `L10500-L10501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10500-L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10500-L10501) · [Before (L10633-L10634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10633-L10634)

```diff
-           fn: "bullet"
-         }), fC.lH(GC, "bullet", {
+           Zy: "bullet"
+         }), lk.Tu(xk, "bullet", {
```

#### 1353. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10636` → after: `L10503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10503) · [Before (L10636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10636)

```diff
-             FC === ez.d.HIT_BLOCK && this.makeBulletHole(NC, MC, ZC)
+             Lk === vF.c.HIT_BLOCK && this.makeBulletHole(Zk, jk, Ik)
```

#### 1354. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10649` → after: `L10516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10516) · [Before (L10649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10649)

```diff
-           VF: AC,
+           fL: Kk,
```

#### 1355. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10654` → after: `L10521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10521) · [Before (L10654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10654)

```diff
-         return "head" === this.MN.pR.gunshotOrigin ? "head" : "default"
+         return "head" === this.qZ.gJ.gunshotOrigin ? "head" : "default"
```

#### 1356. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10657` → after: `L10524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10524) · [Before (L10657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10657)

```diff
-         return this.heldItemState.mH === this.MN.qE && !0 === UC.b.get("clientEscMenuOptions").showWeaponRaycasts
+         return this.heldItemState.Xu === this.qZ.oR && !0 === hk.d.get("clientEscMenuOptions").showWeaponRaycasts
```

#### 1357. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10661` → after: `L10528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10528) · [Before (L10661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10661)

```diff
-         const ZC = this.heldItemState.mH === this.MN.qE,
+         const Ik = this.heldItemState.Xu === this.qZ.oR,
```

#### 1358. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10665` → after: `L10532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10532) · [Before (L10665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10665)

```diff
-           if (QC && null === this.MN.JR.SzC(this.MN.qE).findItem("Ammo")) return
+           if (Xk && null === this.qZ.MJ.sFk(this.qZ.oR).findItem("Ammo")) return
```

#### 1359. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10670-L10671` → after: `L10537-L10538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10537-L10538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10537-L10538) · [Before (L10670-L10671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10670-L10671)

```diff
-           (0, fC.sendColyMessage)(yC.mj, {
-             bn: CC
+           (0, lk.sendColyMessage)(gk.Ai, {
+             Ly: kk
```

#### 1360. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10675` → after: `L10542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10542) · [Before (L10675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10675)

```diff
-         this.heldItemState.mH === this.MN.qE && NC.o.bp("middleScreenBarInitiate", {
+         this.heldItemState.Xu === this.qZ.oR && Zk.g.GL("middleScreenBarInitiate", {
```

#### 1361. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10677` → after: `L10544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10544) · [Before (L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10677)

```diff
-           sQ: !0,
+           fX: !0,
```

#### 1362. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10680` → after: `L10547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10547) · [Before (L10680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10680)

```diff
-           this.reloading = !1, this.numBulletsReloading = 0, this.reloadTimeouts = [], this.heldItemState.mH === this.MN.qE && (this.setShotsLeft(this.gunStats.getStat("clipSize")), NC.o.bp("localPlayerNewShotsLeft", this.getShotsLeftCount()))
+           this.reloading = !1, this.numBulletsReloading = 0, this.reloadTimeouts = [], this.heldItemState.Xu === this.qZ.oR && (this.setShotsLeft(this.gunStats.getStat("clipSize")), Zk.g.GL("localPlayerNewShotsLeft", this.getShotsLeftCount()))
```

#### 1363. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10682` → after: `L10549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10549) · [Before (L10682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10682)

```diff
-         const bC = this.heldItemState.mH === this.MN.qE ? vz.g.firstPersonReload : vz.g.thirdPersonReload,
+         const ik = this.heldItemState.Xu === this.qZ.oR ? oF.h.firstPersonReload : oF.h.thirdPersonReload,
```

#### 1364. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10684-L10685` → after: `L10551-L10552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10551-L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10551-L10552) · [Before (L10684-L10685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10684-L10685)

```diff
-             const zC = (0, hz.g)(CC);
-             void 0 !== zC && Fz.e.play(zC, bC, this.heldItemState.mH, void 0, void 0)
+             const Fk = (0, EF.f)(kk);
+             void 0 !== Fk && tF.d.play(Fk, ik, this.heldItemState.Xu, void 0, void 0)
```

#### 1365. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10692` → after: `L10559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10559) · [Before (L10692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10692)

```diff
-           nC(`${oC}_load_bullet_`);
+           yk(`${ak}_load_bullet_`);
```

#### 1366. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10694` → after: `L10561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10561) · [Before (L10694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10694)

```diff
-             nC(`${oC}_load_bullet_`)
+             yk(`${ak}_load_bullet_`)
```

#### 1367. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10697` → after: `L10564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10564) · [Before (L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10697)

```diff
-             nC(`${oC}_cock_`)
+             yk(`${ak}_cock_`)
```

#### 1368. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10701-L10702` → after: `L10568-L10569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10568-L10569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10568-L10569) · [Before (L10701-L10702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10701-L10702)

```diff
-           nC(`${oC}_magazine_unload_`), this.reloadTimeouts.push(setTimeout((() => {
-             nC(`${oC}_magazine_load_`)
+           yk(`${ak}_magazine_unload_`), this.reloadTimeouts.push(setTimeout((() => {
+             yk(`${ak}_magazine_load_`)
```

#### 1369. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10704` → after: `L10571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10571) · [Before (L10704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10704)

```diff
-             nC(`${oC}_cock_`)
+             yk(`${ak}_cock_`)
```

#### 1370. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10722` → after: `L10589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10589) · [Before (L10722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10722)

```diff
-           return zC < ZC ? zC / ZC : zC > CC - ZC ? 1 - (zC - (CC - ZC)) / ZC : 1
+           return Fk < Ik ? Fk / Ik : Fk > kk - Ik ? 1 - (Fk - (kk - Ik)) / Ik : 1
```

#### 1371. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10730-L10731` → after: `L10597-L10598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10597-L10598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10597-L10598) · [Before (L10730-L10731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10730-L10731)

```diff
-         const zC = this.MN.JR.SzC(this.heldItemState.mH).getItemAtSelectedSlot().attributes.customAttributes;
-         zC.shotsLeft = CC, this.MN.JR.SzC(this.heldItemState.mH).getItemAtSelectedSlot().attributes.customAttributes = zC
+         const Fk = this.qZ.MJ.sFk(this.heldItemState.Xu).getItemAtSelectedSlot().attributes.customAttributes;
+         Fk.shotsLeft = kk, this.qZ.MJ.sFk(this.heldItemState.Xu).getItemAtSelectedSlot().attributes.customAttributes = Fk
```

#### 1372. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10735` → after: `L10602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10602) · [Before (L10735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10735)

```diff
-         return null === (CC = this.MN.JR.SzC(this.heldItemState.mH).getItemAtSelectedSlot().attributes.customAttributes) || void 0 === CC ? void 0 : CC.shotsLeft
+         return null === (kk = this.qZ.MJ.sFk(this.heldItemState.Xu).getItemAtSelectedSlot().attributes.customAttributes) || void 0 === kk ? void 0 : kk.shotsLeft
```

#### 1373. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10746-L10747` → after: `L10613-L10614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10613-L10614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10613-L10614) · [Before (L10746-L10747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10746-L10747)

```diff
-         this.MN.lB([CC, zC, ZC], QC);
-         const wC = this.MN.JR.add(QC, .1, .1, this.gunTypeObj.getBulletCasingMesh(), null, !0),
+         this.qZ.Km([kk, Fk, Ik], Xk);
+         const Tk = this.qZ.MJ.add(Xk, .1, .1, this.gunTypeObj.getBulletCasingMesh(), null, !0),
```

#### 1374. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10751-L10752` → after: `L10618-L10619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10618-L10619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10618-L10619) · [Before (L10751-L10752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10751-L10752)

```diff
-         fC = this.aimsAsLocalPlayer() ? jC.b.getAimHeading(this.MN) : this.MN.JR.MzC(this.heldItemState.mH).heading, this.MN.JR.eT(wC).applyImpulse([Math.cos(fC) * nC, bC, -Math.sin(fC) * nC]), setTimeout((() => {
-           this.MN.JR.deleteEntity(wC)
+         lk = this.aimsAsLocalPlayer() ? Ak.b.getAimHeading(this.qZ) : this.qZ.MJ.KFk(this.heldItemState.Xu).heading, this.qZ.MJ.aN(Tk).applyImpulse([Math.cos(lk) * yk, ik, -Math.sin(lk) * yk]), setTimeout((() => {
+           this.qZ.MJ.deleteEntity(Tk)
```

#### 1375. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10758-L10763` → after: `L10625-L10630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10625-L10630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10625-L10630) · [Before (L10758-L10763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10758-L10763)

```diff
-           nC = this.MN.wzC(CC, null, Tz),
-           fC = new pC.Eg(nC[0] + zC[0] * bC, nC[1] + zC[1] * bC, nC[2] + zC[2] * bC),
-           oC = new pC.Eg(nC[0] - zC[0], nC[1] - zC[1], nC[2] - zC[2]);
-         QC.position = fC, (0, PC.l)(QC, oC.x - fC.x, oC.y - fC.y, oC.z - fC.z), QC.tS = !1;
-         const qC = wC().wb(az, CC, zC, bC);
-         this.MN.Vg.jS(QC, !1, qC), setTimeout((() => {
+           yk = this.qZ.ZFk(kk, null, fF),
+           lk = new Hk.Ge(yk[0] + Fk[0] * ik, yk[1] + Fk[1] * ik, yk[2] + Fk[2] * ik),
+           ak = new Hk.Ge(yk[0] - Fk[0], yk[1] - Fk[1], yk[2] - Fk[2]);
+         Xk.position = lk, (0, Jk.p)(Xk, ak.x - lk.x, ak.y - lk.y, ak.z - lk.z), Xk.gw = !1;
+         const qk = Tk().pk(BF, kk, Fk, ik);
+         this.qZ.Xw.hw(Xk, !1, qk), setTimeout((() => {
```

#### 1376. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10772` → after: `L10639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10639) · [Before (L10772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10772)

```diff
-           (0, PC.p)(this.mesh, QC, wC + bC, .4)
+           (0, Jk.q)(this.mesh, Xk, Tk + ik, .4)
```

#### 1377. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10777-L10778` → after: `L10644-L10645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10644-L10645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10644-L10645) · [Before (L10777-L10778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10777-L10778)

```diff
-         const ZC = 1 - .25 * CC * (null !== (zC = this.gunStats.getStat("aimZoomFactor")) && void 0 !== zC ? zC : 1);
-         this.MN.JR.getState(this.MN.qE, "playerCameraAdjustment").fovMultiplier.setMultiplierType("aimingGunZoom", ZC)
+         const Ik = 1 - .25 * kk * (null !== (Fk = this.gunStats.getStat("aimZoomFactor")) && void 0 !== Fk ? Fk : 1);
+         this.qZ.MJ.getState(this.qZ.oR, "playerCameraAdjustment").fovMultiplier.setMultiplierType("aimingGunZoom", Ik)
```

#### 1378. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10789` → after: `L10656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10656) · [Before (L10789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10789)

```diff
-           wC().wb(zC, zC, ZC, .001);
+           Tk().pk(Fk, Fk, Ik, .001);
```

#### 1379. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10791` → after: `L10658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10658) · [Before (L10791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10791)

```diff
-           (0, PC.p)(this.bulletBlockedBillboardPlane, QC, bC, nC), wC().wb(zC, zC, ZC, -1), (0, PC.l)(this.bulletBlockedBillboardPlane, zC[0] - QC, zC[1] - bC, zC[2] - nC)
+           (0, Jk.q)(this.bulletBlockedBillboardPlane, Xk, ik, yk), Tk().pk(Fk, Fk, Ik, -1), (0, Jk.p)(this.bulletBlockedBillboardPlane, Fk[0] - Xk, Fk[1] - ik, Fk[2] - yk)
```

#### 1380. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10793` → after: `L10660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10660) · [Before (L10793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10793)

```diff
-         this.MN.Vg.tfC(this.bulletBlockedBillboardPlane, null !== CC)
+         this.qZ.Xw.rlk(this.bulletBlockedBillboardPlane, null !== kk)
```

#### 1381. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10805` → after: `L10672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10672) · [Before (L10805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10805)

```diff
-         if (CC - this.soundLastRoundFired > 3 * zC && (0, hz.m)(ZC, `${QC}_first_shot_01`)) this.lastGunShotTail = Fz.e.play(`${QC}_first_shot_01`, vz.g.gunShot, this.heldItemState.mH, 75, 10);
+         if (kk - this.soundLastRoundFired > 3 * Fk && (0, EF.k)(Ik, `${Xk}_first_shot_01`)) this.lastGunShotTail = tF.d.play(`${Xk}_first_shot_01`, oF.h.gunShot, this.heldItemState.Xu, 75, 10);
```

#### 1382. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10807-L10809` → after: `L10674-L10676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10674-L10676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10674-L10676) · [Before (L10807-L10809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10807-L10809)

```diff
-           const CC = (0, hz.g)(`${QC}_shot_`);
-           this.lastGunShotTail = Fz.e.play(CC, vz.g.gunShot, this.heldItemState.mH, 75, 10)
-         }(0, hz.m)(ZC, `${QC}_tail_only_shot_01`) && (this.lastGunShotTail = Fz.e.play(`${QC}_tail_only_shot_01`, vz.g.gunShot, this.heldItemState.mH, 75, 10))
+           const kk = (0, EF.f)(`${Xk}_shot_`);
+           this.lastGunShotTail = tF.d.play(kk, oF.h.gunShot, this.heldItemState.Xu, 75, 10)
+         }(0, EF.k)(Ik, `${Xk}_tail_only_shot_01`) && (this.lastGunShotTail = tF.d.play(`${Xk}_tail_only_shot_01`, oF.h.gunShot, this.heldItemState.Xu, 75, 10))
```

#### 1383. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10812` → after: `L10679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10679) · [Before (L10812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10812)

```diff
-         Fz.e.play((0, hz.g)("headshot_"), vz.g.gunHeadshot)
+         tF.d.play((0, EF.f)("headshot_"), oF.h.gunHeadshot)
```

#### 1384. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10817` → after: `L10684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10684) · [Before (L10817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10817)

```diff
-           Fz.e.play((0, hz.g)("bullet_shell_bounce_general_"), vz.g.bulletShellBounce)
+           tF.d.play((0, EF.f)("bullet_shell_bounce_general_"), oF.h.bulletShellBounce)
```

#### 1385. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10821-L10823` → after: `L10688-L10690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10688-L10690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10688-L10690) · [Before (L10821-L10823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10821-L10823)

```diff
-     var Lz = ZC(38055),
-       Uz = ZC(38277),
-       Bz = ZC(37260);
+     var mF = Ik(38213),
+       hF = Ik(38422),
+       rF = Ik(37435);
```

#### 1386. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10826` → after: `L10693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10693) · [Before (L10826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10826)

```diff
-         super(CC, zC, ZC, QC, wC), this.inputs = void 0, this.schedule = void 0, this.readyOffset = void 0, this.firingOffset = void 0, this.fireInterval = void 0, this.inputs = 0, this.schedule = new Iz(50), this.readyOffset = this.firstPersonPosOffset, this.firingOffset = new p … [truncated]
+         super(kk, Fk, Ik, Xk, Tk), this.inputs = void 0, this.schedule = void 0, this.readyOffset = void 0, this.firingOffset = void 0, this.fireInterval = void 0, this.inputs = 0, this.schedule = new zF(50), this.readyOffset = this.firstPersonPosOffset, this.firingOffset = new H … [truncated]
```

#### 1387. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10835` → after: `L10702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10702) · [Before (L10835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10835)

```diff
-         zC ? this.schedule.fired(CC, QC, !0) : this.schedule.arm(CC + QC), NC.o.bp("middleScreenBarInitiate", {
+         Fk ? this.schedule.fired(kk, Xk, !0) : this.schedule.arm(kk + Xk), Zk.g.GL("middleScreenBarInitiate", {
```

#### 1388. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10837` → after: `L10704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10704) · [Before (L10837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10837)

```diff
-           sQ: !0,
+           fX: !0,
```

#### 1389. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10843` → after: `L10710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10710) · [Before (L10843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10843)

```diff
-         if (!Lz.d.includes(wC)) return this._performAltAction();
+         if (!mF.e.includes(Tk)) return this._performAltAction();
```

#### 1390. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10845-L10847` → after: `L10712-L10714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10712-L10714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10712-L10714) · [Before (L10845-L10847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10845-L10847)

```diff
-           MN: bC
-         } = this, nC = null === (ZC = bC.JR.gzC(bC.qE)) || void 0 === ZC ? void 0 : ZC.inventory, fC = null === nC || void 0 === nC ? void 0 : nC.getSelectedSlotIndex();
-         return (0, dz.H)(fC) ? (console.error("Failed to get selected slot"), {
+           qZ: ik
+         } = this, yk = null === (Ik = ik.MJ.QFk(ik.oR)) || void 0 === Ik ? void 0 : Ik.inventory, lk = null === yk || void 0 === yk ? void 0 : yk.getSelectedSlotIndex();
+         return (0, GF.Q)(lk) ? (console.error("Failed to get selected slot"), {
```

#### 1391. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10864` → after: `L10731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10731) · [Before (L10864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10864)

```diff
-         null === this.fireInterval && (this.fireInterval = null !== (CC = this.bloxd.getItemStat(this.MN.qE, this.typeObj.name, "fireInterval")) && void 0 !== CC ? CC : 0);
+         null === this.fireInterval && (this.fireInterval = null !== (kk = this.bloxd.getItemStat(this.qZ.oR, this.typeObj.name, "fireInterval")) && void 0 !== kk ? kk : 0);
```

#### 1392. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10873` → after: `L10740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10740) · [Before (L10873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10873)

```diff
-       mZC() {
+       CIk() {
```

#### 1393. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10876` → after: `L10743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10743) · [Before (L10876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10876)

```diff
-       KZC() {
+       bIk() {
```

#### 1394. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10882` → after: `L10749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10749) · [Before (L10882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10882)

```diff
-       nqC() {
+       Vqk() {
```

#### 1395. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10885` → after: `L10752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10752) · [Before (L10885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10885)

```diff
-       hZC() {
+       uIk() {
```

#### 1396. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10888` → after: `L10755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10755) · [Before (L10888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10888)

```diff
-       bqC() {
+       sqk() {
```

#### 1397. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10906-L10907` → after: `L10773-L10774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10773-L10774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10773-L10774) · [Before (L10906-L10907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10906-L10907)

```diff
-       HZC() {
-         return null !== (0, Bz.m)(this.pickActionHelper) ? this._performAltAction() : this.fire(Date.now(), !1)
+       NIk() {
+         return null !== (0, rF.k)(this.pickActionHelper) ? this._performAltAction() : this.fire(Date.now(), !1)
```

#### 1398. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10910` → after: `L10777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10777) · [Before (L10910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10910)

```diff
-         super.ZN(CC, zC), this.inputs > 0 && this.getFireInterval() && this.fire(zC, !0)
+         super.Dt(kk, Fk), this.inputs > 0 && this.getFireInterval() && this.fire(Fk, !0)
```

#### 1399. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10914` → after: `L10781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10781) · [Before (L10914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10914)

```diff
-         this.firstPersonPosOffset = pC.Eg.Lerp(this.firingOffset, this.readyOffset, ZC), super.renderTickLocalPlayer(CC, zC)
+         this.firstPersonPosOffset = Hk.Ge.Lerp(this.firingOffset, this.readyOffset, Ik), super.renderTickLocalPlayer(kk, Fk)
```

#### 1400. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10920` → after: `L10787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10787) · [Before (L10920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10920)

```diff
-     var kz = ZC(38290);
+     var MF = Ik(38440);
```

#### 1401. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10924` → after: `L10791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10791) · [Before (L10924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10924)

```diff
-         zC = CC.JR.lzC(CC.qE);
+         Fk = kk.MJ.fFk(kk.oR);
```

#### 1402. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10936` → after: `L10803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10803) · [Before (L10936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10936)

```diff
-       return NC.o.subscribe("updatedInventory", (() => {
+       return Zk.g.subscribe("updatedInventory", (() => {
```

#### 1403. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10939` → after: `L10806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10806) · [Before (L10939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10939)

```diff
-         name: "Hx",
+         name: "VK",
```

#### 1404. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10942` → after: `L10809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10809) · [Before (L10942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10942)

```diff
-           Hx: null,
+           VK: null,
```

#### 1405. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10964` → after: `L10831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10831) · [Before (L10964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10964)

```diff
-         xR: function(zC, ZC) {
+         mJ: function(Fk, Ik) {
```

#### 1406. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10967-L10969` → after: `L10834-L10836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10834-L10836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10834-L10836) · [Before (L10967-L10969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10967-L10969)

```diff
-             bC = new FC.e(CC, zC);
-           ZC.fistItem = new SC.c(CC, ZC, QC, bC), ZC.Hx = ZC.fistItem, ZC.heldType = "Fist", ZC._standardItem = new mC(CC, ZC, QC, ZC.fistItem, bC), ZC._blockItem = new qz(CC, ZC, QC, ZC.fistItem, bC), ZC._chargeableItem = new Sz(CC, ZC, QC, ZC.fistItem, bC), ZC._gunItem = new yz … [truncated]
-             ZC.Hx.QqC()
+             ik = new Lk.b(kk, Fk);
+           Ik.fistItem = new wk.d(kk, Ik, Xk, ik), Ik.VK = Ik.fistItem, Ik.heldType = "Fist", Ik._standardItem = new pk(kk, Ik, Xk, Ik.fistItem, ik), Ik._blockItem = new LF(kk, Ik, Xk, Ik.fistItem, ik), Ik._chargeableItem = new HF(kk, Ik, Xk, Ik.fistItem, ik), Ik._gunItem = new gF … [truncated]
+             Ik.VK.Kqk()
```

#### 1407. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10971-L10973` → after: `L10838-L10840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10838-L10840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10838-L10840) · [Before (L10971-L10973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10971-L10973)

```diff
-             ZC.Hx !== ZC.fistItem && (ZC.Hx.reset(), ZC.Hx = ZC.fistItem, ZC.heldType = "Fist", ZC.heldItemName = null, ZC._heldLightTintFloor = null, ZC.fistItem.selected(), NC.o.bp("newLocalPlayerHeldItem", ZC.Hx)), ZC._gunItem.forgetLastShots()
-           }))), ZC._playerInvisSub = NC.o.subscribe(`otherEntitySettingsClientifiedEId|${ZC.mH}|_invisibleEffect`, (zC => {
-             ZC.mH !== CC.qE && (ZC._visible = !zC, ZC.Hx && ZC.Hx.QqC())
+             Ik.VK !== Ik.fistItem && (Ik.VK.reset(), Ik.VK = Ik.fistItem, Ik.heldType = "Fist", Ik.heldItemName = null, Ik._heldLightTintFloor = null, Ik.fistItem.selected(), Zk.g.GL("newLocalPlayerHeldItem", Ik.VK)), Ik._gunItem.forgetLastShots()
+           }))), Ik._playerInvisSub = Zk.g.subscribe(`otherEntitySettingsClientifiedEId|${Ik.Xu}|_invisibleEffect`, (Fk => {
+             Ik.Xu !== kk.oR && (Ik._visible = !Fk, Ik.VK && Ik.VK.Kqk())
```

#### 1408. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10976-L10979` → after: `L10843-L10846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10843-L10846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10843-L10846) · [Before (L10976-L10979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10976-L10979)

```diff
-         lY: function(CC, zC) {
-           for (const ZC in zC) zC[ZC] instanceof gC.e && zC[ZC].reset();
-           for (const ZC in zC) zC[ZC] instanceof gC.e && zC[ZC].destroy();
-           NC.o.unsubscribe(zC._playerVisSub), NC.o.unsubscribe(zC._playerInvisSub)
+         iG: function(kk, Fk) {
+           for (const Ik in Fk) Fk[Ik] instanceof ek.d && Fk[Ik].reset();
+           for (const Ik in Fk) Fk[Ik] instanceof ek.d && Fk[Ik].destroy();
+           Zk.g.unsubscribe(Fk._playerVisSub), Zk.g.unsubscribe(Fk._playerInvisSub)
```

#### 1409. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10983` → after: `L10850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10850) · [Before (L10983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10983)

```diff
-           for (const wC of ZC) bZ(CC, wC), wC.Hx ? wC.Hx.ZN(zC, QC) : console.error(new Error(`state.helditem for player ${wC.mH} is falsy - ${wC.Hx}`))
+           for (const Tk of Ik) yI(kk, Tk), Tk.VK ? Tk.VK.Dt(Fk, Xk) : console.error(new Error(`state.helditem for player ${Tk.Xu} is falsy - ${Tk.VK}`))
```

#### 1410. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10985` → after: `L10852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10852) · [Before (L10985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10985)

```diff
-         vR: function(zC, ZC) {
+         Ix: function(Fk, Ik) {
```

#### 1411. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10987-L10988` → after: `L10854-L10855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10854-L10855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10854-L10855) · [Before (L10987-L10988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10987-L10988)

```diff
-             wC = (0, kz.g)();
-           for (const bC of ZC) bC.Hx ? bC.mH === CC.qE || (0, kz.j)(bC.mH, wC) ? bC.Hx.renderTickLocalPlayer(zC, QC) : bC.Hx.renderTickNetworkedPlayer(zC, QC) : console.error(new Error(`state.helditem for player ${bC.mH} is falsy - ${bC.Hx}`))
+             Tk = (0, MF.h)();
+           for (const ik of Ik) ik.VK ? ik.Xu === kk.oR || (0, MF.l)(ik.Xu, Tk) ? ik.VK.renderTickLocalPlayer(Fk, Xk) : ik.VK.renderTickNetworkedPlayer(Fk, Xk) : console.error(new Error(`state.helditem for player ${ik.Xu} is falsy - ${ik.VK}`))
```

#### 1412. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L10996-L10997` → after: `L10863-L10864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10863-L10864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10863-L10864) · [Before (L10996-L10997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L10996-L10997)

```diff
-       const PC = CC.JR.EzC(zC.mH),
-         GC = CC.JR.PzC(zC.mH),
+       const Jk = kk.MJ.WFk(Fk.Xu),
+         xk = kk.MJ.zFk(Fk.Xu),
```

#### 1413. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11002-L11004` → after: `L10869-L10871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10869-L10871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10869-L10871) · [Before (L11002-L11004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11002-L11004)

```diff
-           const ZC = CC.JR.gzC(zC.mH).selectedItem;
-           SC = null === ZC || void 0 === ZC ? void 0 : ZC.typeObj, pC = null !== (AC = null === ZC || void 0 === ZC || null === (xC = ZC.attributes) || void 0 === xC || null === (JC = xC.customAttributes) || void 0 === JC ? void 0 : JC.enchantmentTier) && void 0 !== AC ? AC : nul … [truncated]
-         } else zC.networkedHeldItemName && (SC = bC.x[zC.networkedHeldItemName], pC = zC.networkedHeldItemEnchantmentTier);
+           const Ik = kk.MJ.QFk(Fk.Xu).selectedItem;
+           wk = null === Ik || void 0 === Ik ? void 0 : Ik.typeObj, Hk = null !== (Kk = null === Ik || void 0 === Ik || null === (Qk = Ik.attributes) || void 0 === Qk || null === (sk = Qk.customAttributes) || void 0 === sk ? void 0 : sk.enchantmentTier) && void 0 !== Kk ? Kk : nul … [truncated]
+         } else Fk.networkedHeldItemName && (wk = ik.E[Fk.networkedHeldItemName], Hk = Fk.networkedHeldItemEnchantmentTier);
```

#### 1414. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11006` → after: `L10873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10873) · [Before (L11006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11006)

```diff
-       const IC = GC && CC.JR.SzC(zC.mH).getSelectedSlotIndex() !== zC._lastInvenIdx,
+       const Vk = xk && kk.MJ.sFk(Fk.Xu).getSelectedSlotIndex() !== Fk._lastInvenIdx,
```

#### 1415. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11009-L11014` → after: `L10876-L10881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10876-L10881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10876-L10881) · [Before (L11009-L11014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11009-L11014)

```diff
-       (((null === (ZC = SC) || void 0 === ZC ? void 0 : ZC.name) || null) !== zC.heldItemName || IC || iC) && (zC.Hx !== zC.fistItem && ((null === (vC = SC) || void 0 === vC ? void 0 : vC.meta.rootId) !== CC.bloxd.getMetaInfo(zC.heldItemName).rootId || IC || iC) && zC.Hx.reset(), … [truncated]
-       GC && (zC._lastInvenIdx = CC.JR.SzC(zC.mH).getSelectedSlotIndex()), zC.heldItemName = null !== (QC = null === (fC = SC) || void 0 === fC ? void 0 : fC.name) && void 0 !== QC ? QC : null, zC.heldItemEnchantmentTier = pC;
-       const lC = SC && !(0, bC.w)(SC.type) ? SC.ig : void 0,
-         XC = RC ? (0, EC.n)(zC.mH) : null,
-         cC = XC ? bC.x[XC].ig : void 0,
-         uC = RC && null !== (oC = null === (qC = CC.QE[CC.qE]) || void 0 === qC || null === (FC = qC[zC.mH]) || void 0 === FC ? void 0 : FC._glowingEffect) && void 0 !== oC && oC ? HC.GLOWING_EFFECT_EMISSION : void 0;
+       (((null === (Ik = wk) || void 0 === Ik ? void 0 : Ik.name) || null) !== Fk.heldItemName || Vk || zk) && (Fk.VK !== Fk.fistItem && ((null === (Sk = wk) || void 0 === Sk ? void 0 : Sk.meta.rootId) !== kk.bloxd.getMetaInfo(Fk.heldItemName).rootId || Vk || zk) && Fk.VK.reset(), … [truncated]
+       xk && (Fk._lastInvenIdx = kk.MJ.sFk(Fk.Xu).getSelectedSlotIndex()), Fk.heldItemName = null !== (Xk = null === (lk = wk) || void 0 === lk ? void 0 : lk.name) && void 0 !== Xk ? Xk : null, Fk.heldItemEnchantmentTier = Hk;
+       const Rk = wk && !(0, ik.B)(wk.type) ? wk.Ve : void 0,
+         Uk = Pk ? (0, bk.l)(Fk.Xu) : null,
+         Ck = Uk ? ik.E[Uk].Ve : void 0,
+         Nk = Pk && null !== (ak = null === (qk = kk.xR[kk.oR]) || void 0 === qk || null === (Lk = qk[Fk.Xu]) || void 0 === Lk ? void 0 : Lk._glowingEffect) && void 0 !== ak && ak ? uk.GLOWING_EFFECT_EMISSION : void 0;
```

#### 1416. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11016-L11017` → after: `L10883-L10884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10883-L10884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10883-L10884) · [Before (L11016-L11017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11016-L11017)

```diff
-       const rC = null !== (MC = null === (gC = CC.JR.KzC(zC.mH)) || void 0 === gC ? void 0 : gC.isReplayLocalPlayer) && void 0 !== MC && MC;
-       if (zC.mH === CC.qE || rC) {
+       const ck = null !== (jk = null === (ek = kk.MJ.RFk(Fk.Xu)) || void 0 === ek ? void 0 : ek.isReplayLocalPlayer) && void 0 !== jk && jk;
+       if (Fk.Xu === kk.oR || ck) {
```

#### 1417. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11019-L11020` → after: `L10886-L10887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10886-L10887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10886-L10887) · [Before (L11019-L11020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11019-L11020)

```diff
-           aQC: ZC
-         } = CC.Vg, {
+           AXk: Ik
+         } = kk.Xw, {
```

#### 1418. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11024-L11028` → after: `L10891-L10895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10891-L10895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10891-L10895) · [Before (L11024-L11028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11024-L11028)

```diff
-         } = CC.pR;
-         wC().copy(CC.Vg.hfC, null !== uC && void 0 !== uC ? uC : wC().ZERO);
-         const oC = RC ? QC : null,
-           qC = RC && "number" === typeof nC ? nC : null,
-           FC = RC && "number" === typeof fC ? fC : null,
+         } = kk.gJ;
+         Tk().copy(kk.Xw.ulk, null !== Nk && void 0 !== Nk ? Nk : Tk().ZERO);
+         const ak = Pk ? Xk : null,
+           qk = Pk && "number" === typeof yk ? yk : null,
+           Lk = Pk && "number" === typeof lk ? lk : null,
```

#### 1419. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11030-L11032` → after: `L10897-L10899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10897-L10899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10897-L10899) · [Before (L11030-L11032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11030-L11032)

```diff
-             const ZC = zC && !(0, bC.w)(zC.type) ? fZ(zC) : null,
-               QC = (0, EC.n)(CC),
-               nC = QC ? fZ(bC.x[QC]) : null;
+             const Ik = Fk && !(0, ik.B)(Fk.type) ? aI(Fk) : null,
+               Xk = (0, bk.l)(kk),
+               yk = Xk ? aI(ik.E[Xk]) : null;
```

#### 1420. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11040-L11041` → after: `L10907-L10908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10907-L10908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10907-L10908) · [Before (L11040-L11041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11040-L11041)

```diff
-           }(zC.mH, SC) : null;
-         if (NC ? (CC.Vg.KfC = null !== qC && void 0 !== qC ? qC : NC.range, CC.Vg.efC = null !== FC ? QZ(FC) : NC.coneCos) : (CC.Vg.KfC = null !== qC && void 0 !== qC ? qC : 0, CC.Vg.efC = 0), oC) wC().scale(ZC, (0, WC.N)(oC), 15);
+           }(Fk.Xu, wk) : null;
+         if (Zk ? (kk.Xw.blk = null !== qk && void 0 !== qk ? qk : Zk.range, kk.Xw.plk = null !== Lk ? TI(Lk) : Zk.coneCos) : (kk.Xw.blk = null !== qk && void 0 !== qk ? qk : 0, kk.Xw.plk = 0), ak) Tk().scale(Ik, (0, tk.W)(ak), 15);
```

#### 1421. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11045-L11046` → after: `L10912-L10913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10912-L10913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10912-L10913) · [Before (L11045-L11046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11045-L11046)

```diff
-             hfC: zC
-           } = CC.Vg;
+             ulk: Fk
+           } = kk.Xw;
```

#### 1422. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11054` → after: `L10921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10921) · [Before (L11054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11054)

```diff
-       if (!CC || void 0 === CC.spotlightRange || !CC.ig) return null;
+       if (!kk || void 0 === kk.spotlightRange || !kk.Ve) return null;
```

#### 1423. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11057` → after: `L10924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10924) · [Before (L11057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11057)

```diff
-         colour: CC.ig,
+         colour: kk.Ve,
```

#### 1424. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11063` → after: `L10930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10930) · [Before (L11063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11063)

```diff
-   38210: (CC, zC, ZC) => {
+   38369: (kk, Fk, Ik) => {
```

#### 1425. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11065-L11066` → after: `L10932-L10933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10932-L10933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10932-L10933) · [Before (L11065-L11066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11065-L11066)

```diff
-       c: () => eC,
-       f: () => hC
+       d: () => Sk,
+       e: () => vk
```

#### 1426. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11068-L11073` → after: `L10935-L10940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10935-L10940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10935-L10940) · [Before (L11068-L11073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11068-L11073)

```diff
-     var QC = ZC(37895),
-       wC = ZC(37609),
-       bC = ZC(37701),
-       nC = ZC(3611),
-       fC = ZC(184),
-       oC = ZC(338),
+     var Xk = Ik(38066),
+       Tk = Ik(37794),
+       ik = Ik(37866),
+       yk = Ik(3631),
+       lk = Ik(187),
+       ak = Ik(354),
```

#### 1427. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11075-L11083` → after: `L10942-L10948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10942-L10948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10942-L10948) · [Before (L11075-L11083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11075-L11083)

```diff
-       FC = ZC(37857),
-       WC = ZC(36641),
-       NC = ZC(36637),
-       MC = ZC(37748),
-       gC = ZC(326),
-       SC = ZC(28),
-       pC = ZC(2753),
-       PC = ZC(37821),
-       GC = ZC(37996),
+       Lk = Ik(38022),
+       tk = Ik(36772),
+       Zk = Ik(36764),
+       jk = Ik(37909),
+       ek = Ik(337),
+       wk = Ik(34),
+       Hk = Ik(2700),
```

#### 1428. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11085-L11086` → after: `L10950-L10953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10950-L10953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10950-L10953) · [Before (L11085-L11086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11085-L11086)

```diff
-       AC = ZC(3677),
-       xC = ZC(1169);
+       xk = Ik(38156),
+       Pk = Ik(38153),
+       Kk = Ik(3702),
+       Qk = Ik(1217);
```

#### 1429. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11088-L11090` → after: `L10955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10955) · [Before (L11088-L11090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11088-L11090)

```diff
-     const IC = ["length", 0, 1, "b", void 0, 64, null, 6, "d", 3, 8];
- 
-     function iC() {}
+     const Vk = ["length", 0, 1, 2, 3, "a", 8, 16, 180, 130, "GyYzv8", 512, 212, "012345", 4, 118, 15, "c", "f", 202, "e", 6, 139, "d", 1023, 63, 128, 12, "b", 206, 255, 161, 32, 5, 24, 7, 18, 10, 19, 64, 65535, void 0, null, 171];
```

#### 1430. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11095-L11107` → after: `L10960-L10997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10960-L10997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10960-L10997) · [Before (L11095-L11107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11095-L11107)

```diff
-     JC = (...CC) => {
-       CC[IC[0]] = 4, "scpiW1T" in iC && function(...CC) {
-         vC(CC[IC[0]] = IC[1], CC[IC[3]] = function(CC) {
-           var zC, ZC, QC, wC, bC = CC.length;
-           for (vC(zC = [], ZC = IC[1], QC = IC[1], CC.sort(((CC, zC) => CC - zC))), wC = IC[1]; wC < bC; wC++)
-             if (!(wC > IC[1] && CC[wC] === CC[wC - IC[2]]))
-               for (vC(ZC = wC + IC[2], QC = bC - IC[2]); ZC < QC;)
-                 if (CC[wC] + CC[ZC] + CC[QC] < IC[1]) ZC++;
-                 else if (CC[wC] + CC[ZC] + CC[QC] > IC[1]) QC--;
-           else {
-             for (zC.push([CC[wC], CC[ZC], CC[QC]]); ZC < QC && CC[ZC] === CC[ZC + IC[2]];) ZC++;
-             for (; ZC < QC && CC[QC] === CC[QC - IC[2]];) QC--;
-             vC(ZC++, QC--)
+     "N0NAfl" in function() {} && function() {
+       var kk = function(...kk) {
+         function Fk(...kk) {
+           return kk[Vk[0]] = Vk[2], lk(ik(Lk(kk[Vk[1]])))
+         }
+ 
+         function Ik(...kk) {
+           return kk[Vk[0]] = Vk[3], lk(yk(Lk(kk[Vk[1]]), Lk(kk[Vk[2]])))
+         }
+ 
+         function Xk(...kk) {
+           return kk[Vk[0]] = Vk[3], ak(yk(Lk(kk[Vk[1]]), Lk(kk[Vk[2]])))
+         }
+ 
+         function Tk(...kk) {
+           return kk[Vk[0]] = Vk[4], qk(yk(Lk(kk[Vk[1]]), Lk(kk[Vk[2]])), kk[Vk[3]])
+ ... (22 more added lines; see GitHub link above)
```

#### 1431. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11109-L11120` → after: `L10999-L11108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R10999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L10999-L11108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L10999-L11108) · [Before (L11109-L11120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11109-L11120)

```diff
-           return zC
-         }, console.log(CC[IC[3]]))
-       }(), vC(CC[IC[5]] = IC[4], CC[IC[3]] = IC[4], CC[IC[7]] = IC[4], CC[IC[8]] = IC[4], CC[IC[10]] = IC[4]);
-       const zC = (0, pC.c)().client.getMsgHandler().SZC.state.tickCounter;
-       (0, nC.sendColyMessage)(AC.Ah, {
-         JF: CC[IC[1]],
-         IF: (CC[IC[5]] = fC.f.lifeformMeshToBodyPart[CC[IC[2]] === IC[6] || void 0 === CC[IC[2]] || (CC[IC[3]] = CC[IC[2]].split("|")) === IC[6] || void 0 === CC[IC[3]] ? void 0 : CC[IC[3]][IC[1]]]) !== IC[6] && void 0 !== CC[IC[5]] ? CC[IC[5]] : IC[6],
-         Fn: CC[2],
-         Rq: (CC[IC[7]] = (CC[IC[8]] = CC[IC[9]].JR.gzC(CC[IC[9]].qE)) === IC[6] || void 0 === CC[IC[8]] || (CC[IC[10]] = CC[IC[8]].inventory.getItemAtSelectedSlot()) === IC[6] || void 0 === CC[IC[10]] ? void 0 : CC[IC[10]].name) !== IC[6] && void 0 !== CC[IC[7]] ? CC[IC[7]] : IC[ … [truncated]
-         iF: xC.J,
-         vF: zC,
-         eF: KC
+           for (zk(Fk[Vk[2]] = kk[-Vk[12]] ? Vk[13] + "6789ABCDEF" : Vk[13] + "6789abcdef", Fk[Vk[3]] = "", Fk[Vk[15]] = Vk[41]), Fk[Vk[14]] = Vk[1]; Fk[Vk[14]] < Fk[Vk[1]].length; Fk[Vk[14]]++) zk(Fk[Vk[15]] = Fk[Vk[1]].charCodeAt(Fk[Vk[14]]), Fk[Vk[3]] += Fk[Vk[2]].charAt(Fk[Vk[ … [truncated]
+           return Fk[Vk[3]]
+         }
+ 
+         function ak(...Fk) {
+           Fk[Vk[0]] = Vk[2];
+           try {
+             kk[Vk[2]]
+           } catch (Ik) {
+             kk[Vk[2]] = ""
+           }
+           for (zk(Fk[Vk[2]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Fk[-Vk[19]] = "", Fk[Vk[17]] = Fk[Vk[1]].length), Fk[Vk[14]] = Vk[1]; Fk[Vk[14]] < Fk[Vk[17]]; Fk[Vk[14]] += Vk[4])
+             for (Fk[Vk[20]] = Fk[Vk[1]].charCodeAt(Fk[Vk[14]]) << Vk[7] | (Fk[Vk[14]] + Vk[2] < Fk[Vk[17]] ? Fk[Vk[1]].charCodeAt(Fk[Vk[14]] + Vk[2]) << Vk[6] : Vk[1]) | (Fk[Vk[14]] + Vk[3] < Fk[Vk[17]] ? Fk[Vk[1]].charCodeAt(Fk[Vk[14]] + Vk[3]) : Vk[1]), Fk[Vk[18]] = Vk[1]; Fk[V … [truncated]
+           return Fk[-Vk[19]]
+         }
+ 
+ ... (94 more added lines; see GitHub link above)
```

#### 1432. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11123` → after: `L11111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11111) · [Before (L11123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11123)

```diff
-     class eC extends RC.e {
+     class Sk extends Pk.d {
```

#### 1433. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11125` → after: `L11113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11113) · [Before (L11125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11125)

```diff
-         super(CC, zC, ZC, QC), this.toolType = null, this.toolHarvestLevel = null, this.toolMultiplier = 1, this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, this.anyBreakingStartTim … [truncated]
+         super(kk, Fk, Ik, Xk), this.toolType = null, this.toolHarvestLevel = null, this.toolMultiplier = 1, this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, this.anyBreakingStartTim … [truncated]
```

#### 1434. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11135` → after: `L11123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11123) · [Before (L11135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11135)

```diff
-         super.reset(), this.heldItemState.mH === this.MN.qE && this.breakingParticles.ZN(!1), this.resetTargetedBlock(Date.now()), this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, t … [truncated]
+         super.reset(), this.heldItemState.Xu === this.qZ.oR && this.breakingParticles.Dt(!1), this.resetTargetedBlock(Date.now()), this.attemptingToBreak = !1, this.targetedPosition = null, this.currBreakingMesh = null, this.currBreakingStage = null, this.targetedStartTime = 0, t … [truncated]
```

#### 1435. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11137` → after: `L11125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11125) · [Before (L11137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11137)

```diff
-       mZC() {
+       CIk() {
```

#### 1436. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11139` → after: `L11127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11127) · [Before (L11139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11139)

```diff
-         const wC = super.mZC(),
+         const Tk = super.CIk(),
```

#### 1437. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11144-L11146` → after: `L11132-L11134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11132-L11134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11132-L11134) · [Before (L11144-L11146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11144-L11146)

```diff
-             Yu: oC
-           } = this.fqC();
-         if (nC && !wC.preventAttack) return this.JwC(bC, nC, fC, oC), this.oqC(bC, nC), {
+             zC: ak
+           } = this.zqk();
+         if (yk && !Tk.preventAttack) return this.zTk(ik, yk, lk, ak), this.Sqk(ik, yk), {
```

#### 1438. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11150-L11153` → after: `L11138-L11141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11138-L11141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11138-L11141) · [Before (L11150-L11153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11150-L11153)

```diff
-         const qC = null !== (CC = null === (zC = this.MN.pCC) || void 0 === zC ? void 0 : zC.position) && void 0 !== CC ? CC : null,
-           FC = null !== (ZC = null === (QC = this.MN.pCC) || void 0 === QC ? void 0 : QC.HV) && void 0 !== ZC ? ZC : null,
-           WC = this.MN.JR.gzC(this.MN.qE);
-         if (!WC || !this.MN.pR.canAltAction) return {
+         const qk = null !== (kk = null === (Fk = this.qZ.Vkk) || void 0 === Fk ? void 0 : Fk.position) && void 0 !== kk ? kk : null,
+           Lk = null !== (Ik = null === (Xk = this.qZ.Vkk) || void 0 === Xk ? void 0 : Xk.YM) && void 0 !== Ik ? Ik : null,
+           tk = this.qZ.MJ.QFk(this.qZ.oR);
+         if (!tk || !this.qZ.gJ.canAltAction) return {
```

#### 1439. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11161` → after: `L11149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11149) · [Before (L11161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11161)

```diff
-       HZC() {
+       NIk() {
```

#### 1440. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11166-L11168` → after: `L11154-L11156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11154-L11156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11154-L11156) · [Before (L11166-L11168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11166-L11168)

```diff
-           Yu: QC
-         } = this.fqC(), wC = super.HZC();
-         return zC && !wC.preventAttack && (this.JwC(CC, zC, ZC, QC), this.MN.JR.MzC(this.heldItemState.mH).setArmsAreSwinging()), wC
+           zC: Xk
+         } = this.zqk(), Tk = super.NIk();
+         return Fk && !Tk.preventAttack && (this.zTk(kk, Fk, Ik, Xk), this.qZ.MJ.KFk(this.heldItemState.Xu).setArmsAreSwinging()), Tk
```

#### 1441. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11170` → after: `L11158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11158) · [Before (L11170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11170)

```diff
-       dZC() {
+       UIk() {
```

#### 1442. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11174-L11175` → after: `L11162-L11163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11162-L11163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11162-L11163) · [Before (L11174-L11175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11174-L11175)

```diff
-         } = this.fqC();
-         return zC ? this.oqC(CC, zC) : this.breakingStart(), !0
+         } = this.zqk();
+         return Fk ? this.Sqk(kk, Fk) : this.breakingStart(), !0
```

#### 1443. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11182-L11184` → after: `L11170-L11172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11170-L11172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11170-L11172) · [Before (L11182-L11184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11182-L11184)

```diff
-           Yu: QC
-         } = this.fqC();
-         return !(!zC || !this.canAttack(zC)) && (this.MN.JR.MzC(this.heldItemState.mH).setArmsAreSwinging(), this.JwC(CC, zC, ZC, QC), !0)
+           zC: Xk
+         } = this.zqk();
+         return !(!Fk || !this.canAttack(Fk)) && (this.qZ.MJ.KFk(this.heldItemState.Xu).setArmsAreSwinging(), this.zTk(kk, Fk, Ik, Xk), !0)
```

#### 1444. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11189` → after: `L11177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11177) · [Before (L11189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11189)

```diff
-           MN: QC
+           qZ: Xk
```

#### 1445. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11191` → after: `L11179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11179) · [Before (L11191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11191)

```diff
-         return null !== (zC = null === (ZC = QC.QE[QC.qE][CC]) || void 0 === ZC ? void 0 : ZC.canAttack) && void 0 !== zC && zC
+         return null !== (Fk = null === (Ik = Xk.xR[Xk.oR][kk]) || void 0 === Ik ? void 0 : Ik.canAttack) && void 0 !== Fk && Fk
```

#### 1446. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11193` → after: `L11181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11181) · [Before (L11193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11193)

```diff
-       JwC(CC, zC, ZC, QC) {
+       zTk(kk, Fk, Ik, Xk) {
```

#### 1447. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11195` → after: `L11183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11183) · [Before (L11195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11195)

```diff
-           MN: wC
+           qZ: Tk
```

#### 1448. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11197` → after: `L11185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11185) · [Before (L11197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11197)

```diff
-         this.canAttack(zC) && (JC(zC, ZC, CC, wC), this.bloxd.client.triggerGameCallback("onPlayerAttackEntity", wC.qE, zC, [QC[0], QC[1], QC[2]]))
+         this.canAttack(Fk) && (sk(Fk, Ik, kk, Tk), this.bloxd.client.triggerGameCallback("onPlayerAttackEntity", Tk.oR, Fk, [Xk[0], Xk[1], Xk[2]]))
```

#### 1449. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11199` → after: `L11187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11187) · [Before (L11199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11199)

```diff
-       fqC() {
+       zqk() {
```

#### 1450. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11201-L11203` → after: `L11189-L11191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11189-L11191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11189-L11191) · [Before (L11201-L11203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11201-L11203)

```diff
-         const QC = null !== (CC = this.MN.ECC) && void 0 !== CC ? CC : this.MN.camera.yB(),
-           wC = null !== (zC = null === (ZC = this.MN.JR.gzC(this.MN.qE)) || void 0 === ZC ? void 0 : ZC.inventory.getItemAtSelectedSlot()) && void 0 !== zC ? zC : null,
-           bC = this.bloxd.getAttackRangeFromHeldItem(this.MN.qE, wC),
+         const Xk = null !== (kk = this.qZ.Wkk) && void 0 !== kk ? kk : this.qZ.camera.Am(),
+           Tk = null !== (Fk = null === (Ik = this.qZ.MJ.QFk(this.qZ.oR)) || void 0 === Ik ? void 0 : Ik.inventory.getItemAtSelectedSlot()) && void 0 !== Fk ? Fk : null,
+           ik = this.bloxd.getAttackRangeFromHeldItem(this.qZ.oR, Tk),
```

#### 1451. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11210` → after: `L11198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11198) · [Before (L11210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11210)

```diff
-         return nC === FC.d.HIT_ENTITY ? {
+         return yk === Lk.c.HIT_ENTITY ? {
```

#### 1452. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11214` → after: `L11202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11202) · [Before (L11214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11214)

```diff
-           Yu: oC
+           zC: ak
```

#### 1453. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11219` → after: `L11207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11207) · [Before (L11219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11219)

```diff
-           Yu: null
+           zC: null
```

#### 1454. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11222` → after: `L11210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11210) · [Before (L11222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11222)

```diff
-       oqC(CC, zC) {
+       Sqk(kk, Fk) {
```

#### 1455. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11225` → after: `L11213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11213) · [Before (L11225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11225)

```diff
-           MN: bC
+           qZ: ik
```

#### 1456. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11227-L11230` → after: `L11215-L11218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11215-L11218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11215-L11218) · [Before (L11227-L11230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11227-L11230)

```diff
-         (0, nC.sendColyMessage)(AC.ig, {
-           Gq: zC,
-           Fn: CC,
-           Rq: null !== (ZC = null === (QC = bC.JR.gzC(bC.qE)) || void 0 === QC || null === (wC = QC.inventory.getItemAtSelectedSlot()) || void 0 === wC ? void 0 : wC.name) && void 0 !== ZC ? ZC : null
+         (0, yk.sendColyMessage)(Kk.Jf, {
+           lq: Fk,
+           ey: kk,
+           aq: null !== (Ik = null === (Xk = ik.MJ.QFk(ik.oR)) || void 0 === Xk || null === (Tk = Xk.inventory.getItemAtSelectedSlot()) || void 0 === Tk ? void 0 : Tk.name) && void 0 !== Ik ? Ik : null
```

#### 1457. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11234-L11236` → after: `L11222-L11224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11222-L11224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11222-L11224) · [Before (L11234-L11236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11234-L11236)

```diff
-         const CC = this.MN.ACC;
-         CC && !(0, pC.c)().posSatisfiesModifyConstraints(this.MN.qE, CC.position[0], CC.position[1], CC.position[2]) && (this.MN.pR.canChange || this.MN.pR.cantBreakError || "You cannot modify this block" !== this.MN.pR.cantChangeError) && SC.o.bp("showBottomMessage", {
-           message: this.MN.pR.cantBreakError || this.MN.pR.cantChangeError,
+         const kk = this.qZ.vkk;
+         kk && !(0, Hk.c)().posSatisfiesModifyConstraints(this.qZ.oR, kk.position[0], kk.position[1], kk.position[2]) && (this.qZ.gJ.canChange || this.qZ.gJ.cantBreakError || "You cannot modify this block" !== this.qZ.gJ.cantChangeError) && wk.g.GL("showBottomMessage", {
+           message: this.qZ.gJ.cantBreakError || this.qZ.gJ.cantChangeError,
```

#### 1458. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11241` → after: `L11229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11229) · [Before (L11241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11241)

```diff
-         if (this.heldItemState.mH !== this.MN.qE) return !1;
+         if (this.heldItemState.Xu !== this.qZ.oR) return !1;
```

#### 1459. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11243` → after: `L11231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11231) · [Before (L11243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11243)

```diff
-         return this.attemptingToBreak && (ZC = this.breakBlock(zC)), this.breakingParticles.ZN(ZC), this.successfullyBreakingBlockLastTick = ZC, ZC
+         return this.attemptingToBreak && (Ik = this.breakBlock(Fk)), this.breakingParticles.Dt(Ik), this.successfullyBreakingBlockLastTick = Ik, Ik
```

#### 1460. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11246` → after: `L11234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11234) · [Before (L11246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11246)

```diff
-         super.renderTickLocalPlayer(CC, zC), this.successfullyBreakingBlockLastTick ? this.momentumFrac = Math.min(this.momentumFrac + CC / gC.d.timeTillMaxMomentum, 1) : this.momentumFrac = Math.max(this.momentumFrac - CC / 1500, 0)
+         super.renderTickLocalPlayer(kk, Fk), this.successfullyBreakingBlockLastTick ? this.momentumFrac = Math.min(this.momentumFrac + kk / ek.f.timeTillMaxMomentum, 1) : this.momentumFrac = Math.max(this.momentumFrac - kk / 1500, 0)
```

#### 1461. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11248-L11249` → after: `L11236-L11237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11236-L11237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11236-L11237) · [Before (L11248-L11249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11248-L11249)

```diff
-       KZC() {
-         super.KZC();
+       bIk() {
+         super.bIk();
```

#### 1462. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11257` → after: `L11245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11245) · [Before (L11257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11257)

```diff
-         this.targetedPosition = null, this.targetedStartTime = CC, this.lastBreakingSoundTime = Math.min(CC - 150, this.lastBreakingSoundTime), this.currBreakingStage = -1, this.currBreakingMesh && (this.currBreakingMesh.IK(!1), this.currBreakingMesh = null)
+         this.targetedPosition = null, this.targetedStartTime = kk, this.lastBreakingSoundTime = Math.min(kk - 150, this.lastBreakingSoundTime), this.currBreakingStage = -1, this.currBreakingMesh && (this.currBreakingMesh.Av(!1), this.currBreakingMesh = null)
```

#### 1463. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11261` → after: `L11249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11249) · [Before (L11261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11261)

```diff
-         const ZC = (0, pC.c)().getInvenHeldItem(this.MN.qE);
+         const Ik = (0, Hk.c)().getInvenHeldItem(this.qZ.oR);
```

#### 1464. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11263-L11269` → after: `L11251-L11257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11251-L11257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11251-L11257) · [Before (L11263-L11269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11263-L11269)

```diff
-         const fC = null === (zC = this.MN.ACC) || void 0 === zC ? void 0 : zC.position;
-         if (!fC || !(0, pC.c)().posSatisfiesModifyConstraints(this.MN.qE, fC[0], fC[1], fC[2])) return this.resetTargetedBlock(CC), !1;
-         if (this.MN.JR.MzC(this.heldItemState.mH).setArmsAreSwinging(), !this.targetedPosition !== !fC || !qC().exactEquals(this.targetedPosition, fC)) return this.resetTargetedBlock(CC), this.targetedPosition = qC().copy(this._targetedPosition, fC), (0, nC.sendColyMessage)(AC.Oj … [truncated]
-         const oC = (0, pC.c)().getMetaInfo(this.MN.rG(this.targetedPosition)).rootId;
-         let FC = wC.x[oC].ttb;
-         if (this.MN.pR.creative) {
-           if (this.MN.pR.creative) {
+         const lk = null === (Fk = this.qZ.vkk) || void 0 === Fk ? void 0 : Fk.position;
+         if (!lk || !(0, Hk.c)().posSatisfiesModifyConstraints(this.qZ.oR, lk[0], lk[1], lk[2])) return this.resetTargetedBlock(kk), !1;
+         if (this.qZ.MJ.KFk(this.heldItemState.Xu).setArmsAreSwinging(), !this.targetedPosition !== !lk || !qk().exactEquals(this.targetedPosition, lk)) return this.resetTargetedBlock(kk), this.targetedPosition = qk().copy(this._targetedPosition, lk), (0, yk.sendColyMessage)(Kk._i … [truncated]
+         const ak = (0, Hk.c)().getMetaInfo(this.qZ.QJ(this.targetedPosition)).rootId;
+         let Lk = Tk.E[ak].ttb;
+         if (this.qZ.gJ.creative) {
+           if (this.qZ.gJ.creative) {
```

#### 1465. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11271` → after: `L11259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11259) · [Before (L11271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11271)

```diff
-             zC > 20 * bC.d ? FC *= 1 / 6 : zC > 6 * bC.d ? FC *= 1 / 3 : zC > 4 * bC.d ? FC *= .5 : zC > 2 * bC.d && (FC *= 2 / 3)
+             Fk > 20 * ik.f ? Lk *= 1 / 6 : Fk > 6 * ik.f ? Lk *= 1 / 3 : Fk > 4 * ik.f ? Lk *= .5 : Fk > 2 * ik.f && (Lk *= 2 / 3)
```

#### 1466. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11274-L11276` → after: `L11262-L11264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11262-L11264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11262-L11264) · [Before (L11274-L11276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11274-L11276)

```diff
-           const CC = (0, pC.c)().getBlockTypeIsHarvestable(this.MN.qE, oC);
-           CC || (FC *= 2.5), this.toolType === this.bloxd.getItemStat(this.MN.qE, oC, "harvestType") && CC && (FC *= 1 / this.toolMultiplier);
-           FC *= gC.d.getBreakSpeedMultiplier(ZC) * gC.d.getMomentumMultiplier(ZC, this.momentumFrac)
+           const kk = (0, Hk.c)().getBlockTypeIsHarvestable(this.qZ.oR, ak);
+           kk || (Lk *= 2.5), this.toolType === this.bloxd.getItemStat(this.qZ.oR, ak, "harvestType") && kk && (Lk *= 1 / this.toolMultiplier);
+           Lk *= ek.f.getBreakSpeedMultiplier(Ik) * ek.f.getMomentumMultiplier(Ik, this.momentumFrac)
```

#### 1467. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11282-L11283` → after: `L11270-L11271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11270-L11271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11270-L11271) · [Before (L11282-L11283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11282-L11283)

```diff
-           const zC = (0, WC.g)(`step_${(0,PC.c)(oC,!1)}`);
-           NC.e.play(zC, .3).rate(.5)
+           const Fk = (0, tk.f)(`step_${(0,Jk.d)(ak,!1)}`);
+           Zk.d.play(Fk, .3).rate(.5)
```

#### 1468. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11285` → after: `L11273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11273) · [Before (L11285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11285)

```diff
-         return this.currBreakingMesh && SC === this.currBreakingStage || (this.currBreakingMesh && this.currBreakingMesh.IK(!1), SC < 10 ? (this.currBreakingMesh = (0, QC.e)(this.MN, this.targetedPosition, SC), this.currBreakingStage = SC) : ((0, wC.k)(fC), this.resetTargetedBloc … [truncated]
+         return this.currBreakingMesh && wk === this.currBreakingStage || (this.currBreakingMesh && this.currBreakingMesh.Av(!1), wk < 10 ? (this.currBreakingMesh = (0, Xk.c)(this.qZ, this.targetedPosition, wk), this.currBreakingStage = wk) : ((0, Tk.i)(lk), this.resetTargetedBloc … [truncated]
```

#### 1469. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11297` → after: `L11285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11285) · [Before (L11297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11297)

```diff
-   37992: (CC, zC, ZC) => {
+   38153: (kk, Fk, Ik) => {
```

#### 1470. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11299` → after: `L11287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11287) · [Before (L11299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11299)

```diff
-       e: () => JC
+       d: () => sk
```

#### 1471. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11301-L11318` → after: `L11289-L11306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11289-L11306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11289-L11306) · [Before (L11301-L11318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11301-L11318)

```diff
-     var QC = ZC(38031),
-       wC = ZC(1169),
-       bC = ZC(38042),
-       nC = ZC(9230),
-       fC = ZC(9194),
-       oC = ZC(184),
-       qC = ZC(37279),
-       FC = ZC(37996),
-       WC = ZC(37275),
-       NC = ZC(28),
-       MC = ZC(2753),
-       gC = ZC(1275),
-       SC = ZC(38022),
-       pC = ZC(37473),
-       PC = ZC(37267),
-       GC = ZC(38201),
- ... (2 more removed lines; see GitHub link above)
+     var Xk = Ik(38195),
+       Tk = Ik(1217),
+       ik = Ik(38204),
+       yk = Ik(9223),
+       lk = Ik(9183),
+       ak = Ik(187),
+       qk = Ik(37455),
+       Lk = Ik(38156),
+       tk = Ik(37447),
+       Zk = Ik(34),
+       jk = Ik(2700),
+       ek = Ik(1301),
+       wk = Ik(38185),
+       Hk = Ik(37657),
+       Jk = Ik(37438),
+       xk = Ik(38353),
+ ... (2 more added lines; see GitHub link above)
```

#### 1472. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11322` → after: `L11310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11310) · [Before (L11322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11322)

```diff
-         this.MN = void 0, this.heldItemState = void 0, this.itemZoomer = void 0, this.bloxd = (0, MC.c)(), this.pickActionHelper = void 0, this.typeObj = null, this.dCC = !0, this._doneFirstMeshSetup = !1, this._modelLoadedSub = null, this._newBloxdSub = null, this.thirdPersonThi … [truncated]
+         this.qZ = void 0, this.heldItemState = void 0, this.itemZoomer = void 0, this.bloxd = (0, jk.c)(), this.pickActionHelper = void 0, this.typeObj = null, this.Ckk = !0, this._doneFirstMeshSetup = !1, this._modelLoadedSub = null, this._newBloxdSub = null, this.thirdPersonThi … [truncated]
```

#### 1473. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11327` → after: `L11315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11315) · [Before (L11327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11327)

```diff
-         this.MN.RCC(!0), this.typeObj = CC, this.enchantmentTier = zC
+         this.qZ.okk(!0), this.typeObj = kk, this.enchantmentTier = Fk
```

#### 1474. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11329` → after: `L11317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11317) · [Before (L11329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11329)

```diff
-       QqC() {
+       Kqk() {
```

#### 1475. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11332` → after: `L11320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11320) · [Before (L11332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11332)

```diff
-       wqC() {}
+       Qqk() {}
```

#### 1476. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11340` → after: `L11328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11328) · [Before (L11340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11340)

```diff
-         return void 0 !== this.heldItemState.replayUseFirstPersonMesh ? this.heldItemState.replayUseFirstPersonMesh : this.heldItemState.mH === this.MN.qE && this.MN.camera.cL <= 1 && !WC.b.isCameraDetachedFromPlayer(this.MN)
+         return void 0 !== this.heldItemState.replayUseFirstPersonMesh ? this.heldItemState.replayUseFirstPersonMesh : this.heldItemState.Xu === this.qZ.oR && this.qZ.camera.JY <= 1 && !tk.b.isCameraDetachedFromPlayer(this.qZ)
```

#### 1477. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11343` → after: `L11331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11331) · [Before (L11343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11343)

```diff
-         return this.isFirstPersonLocalPlayer() || this.heldItemState.mH === this.MN.qE && WC.b.isCameraDetachedFromPlayer(this.MN)
+         return this.isFirstPersonLocalPlayer() || this.heldItemState.Xu === this.qZ.oR && tk.b.isCameraDetachedFromPlayer(this.qZ)
```

#### 1478. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11345-L11346` → after: `L11333-L11334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11333-L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11333-L11334) · [Before (L11345-L11346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11345-L11346)

```diff
-       mZC() {
-         return JC.clearSecondaryDownFireTimeout(), this.MN.JR.MzC(this.heldItemState.mH).setArmsAreSwinging(), {
+       CIk() {
+         return sk.clearSecondaryDownFireTimeout(), this.qZ.MJ.KFk(this.heldItemState.Xu).setArmsAreSwinging(), {
```

#### 1479. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11354` → after: `L11342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11342) · [Before (L11354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11354)

```diff
-       KZC() {
+       bIk() {
```

#### 1480. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11360` → after: `L11348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11348) · [Before (L11360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11360)

```diff
-       nqC() {
+       Vqk() {
```

#### 1481. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11366` → after: `L11354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11354) · [Before (L11366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11366)

```diff
-               this.bqC().once || zC()
+               this.sqk().once || Fk()
```

#### 1482. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11370` → after: `L11358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11358) · [Before (L11370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11370)

```diff
-         const ZC = this.bqC();
+         const Ik = this.sqk();
```

#### 1483. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11373` → after: `L11361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11361) · [Before (L11373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11373)

```diff
-       bqC() {
+       sqk() {
```

#### 1484. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11376` → after: `L11364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11364) · [Before (L11376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11376)

```diff
-       hZC() {
+       uIk() {
```

#### 1485. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11385-L11387` → after: `L11373-L11375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11373-L11375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11373-L11375) · [Before (L11385-L11387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11385-L11387)

```diff
-           MN: ZC
-         } = this, bC = ZC.pR.canUseDevCreativeItems, nC = null === (zC = this.bloxd.getItemStat(ZC.qE, CC, "showInCreativeInven")) || void 0 === zC || zC;
-         return !(0, QC.i)(CC, (0, wC.U)((0, gC.d)().lobbyName), nC, bC)
+           qZ: Ik
+         } = this, ik = Ik.gJ.canUseDevCreativeItems, yk = null === (Fk = this.bloxd.getItemStat(Ik.oR, kk, "showInCreativeInven")) || void 0 === Fk || Fk;
+         return !(0, Xk.d)(kk, (0, Tk.K)((0, ek.d)().lobbyName), yk, ik)
```

#### 1486. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11389` → after: `L11377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11377) · [Before (L11389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11389)

```diff
-       qqC() {
+       oqk() {
```

#### 1487. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11392` → after: `L11380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11380) · [Before (L11392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11392)

```diff
-           MN: CC
+           qZ: kk
```

#### 1488. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11394-L11397` → after: `L11382-L11385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11382-L11385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11382-L11385) · [Before (L11394-L11397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11394-L11397)

```diff
-         if (CC.pR.creative && CC.pR.canPickBlocks && CC.JR.YCC(CC.qE, "inventory") && null !== CC.pCC) {
-           const ZC = CC.pCC.HV,
-             wC = (0, bC.k)(ZC) ? nC.j : this.bloxd.getMetaInfo(ZC).rootName,
-             fC = QC.e.indexOf(wC);
+         if (kk.gJ.creative && kk.gJ.canPickBlocks && kk.MJ.Ukk(kk.oR, "inventory") && null !== kk.Vkk) {
+           const Ik = kk.Vkk.YM,
+             Tk = (0, ik.e)(Ik) ? yk.q : this.bloxd.getMetaInfo(Ik).rootName,
+             lk = Xk.c.indexOf(Tk);
```

#### 1489. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11399` → after: `L11387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11387) · [Before (L11399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11399)

```diff
-             const ZC = CC.JR.pzC(CC.qE),
+             const Ik = kk.MJ.VFk(kk.oR),
```

#### 1490. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11401` → after: `L11389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11389) · [Before (L11401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11401)

```diff
-               bC = this.MN.JR.gzC(this.MN.qE);
+               ik = this.qZ.MJ.QFk(this.qZ.oR);
```

#### 1491. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11406` → after: `L11394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11394) · [Before (L11406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11406)

```diff
-               if ((null === (zC = nC[CC]) || void 0 === zC ? void 0 : zC.name) === wC) return NC.o.bp("setSelectedInventorySlotI", CC, !0), !0
+               if ((null === (Fk = yk[kk]) || void 0 === Fk ? void 0 : Fk.name) === Tk) return Zk.g.GL("setSelectedInventorySlotI", kk, !0), !0
```

#### 1492. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11417` → after: `L11405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11405) · [Before (L11417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11417)

```diff
-       HZC() {
+       NIk() {
```

#### 1493. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11419` → after: `L11407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11407) · [Before (L11419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11419)

```diff
-         return this.MN.JR.MzC(this.heldItemState.mH).setArmsAreSwinging(), CC
+         return this.qZ.MJ.KFk(this.heldItemState.Xu).setArmsAreSwinging(), kk
```

#### 1494. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11422-L11423` → after: `L11410-L11411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11410-L11411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11410-L11411) · [Before (L11422-L11423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11422-L11423)

```diff
-         const CC = this.IZC();
-         return CC.tookAction && this.MN.JR.MzC(this.heldItemState.mH).setArmsAreSwinging(), CC
+         const kk = this.nIk();
+         return kk.tookAction && this.qZ.MJ.KFk(this.heldItemState.Xu).setArmsAreSwinging(), kk
```

#### 1495. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11426-L11427` → after: `L11414-L11415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11414-L11415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11414-L11415) · [Before (L11426-L11427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11426-L11427)

```diff
-         const CC = this.MN.JR.gzC(this.MN.qE);
-         if (!CC || !this.MN.pR.canAltAction) return {
+         const kk = this.qZ.MJ.QFk(this.qZ.oR);
+         if (!kk || !this.qZ.gJ.canAltAction) return {
```

#### 1496. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11431-L11432` → after: `L11419-L11420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11419-L11420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11419-L11420) · [Before (L11431-L11432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11431-L11432)

```diff
-         const zC = this.MN.pCC;
-         if ("preventAction" === this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.MN.qE, null === zC || void 0 === zC ? void 0 : zC.position[0], null === zC || void 0 === zC ? void 0 : zC.position[1], null === zC || void 0 === zC ? void 0 : zC.position[2], zC … [truncated]
+         const Fk = this.qZ.Vkk;
+         if ("preventAction" === this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.qZ.oR, null === Fk || void 0 === Fk ? void 0 : Fk.position[0], null === Fk || void 0 === Fk ? void 0 : Fk.position[1], null === Fk || void 0 === Fk ? void 0 : Fk.position[2], Fk … [truncated]
```

#### 1497. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11437` → after: `L11425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11425) · [Before (L11437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11437)

```diff
-         return ZC.tookAction && this.MN.JR.MzC(this.heldItemState.mH).setArmsAreSwinging(), ZC
+         return Ik.tookAction && this.qZ.MJ.KFk(this.heldItemState.Xu).setArmsAreSwinging(), Ik
```

#### 1498. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11441-L11442` → after: `L11429-L11430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11429-L11430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11429-L11430) · [Before (L11441-L11442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11441-L11442)

```diff
-         if (!this.MN.pCC) return !1;
-         const zC = this.MN.pCC.HV;
+         if (!this.qZ.Vkk) return !1;
+         const Fk = this.qZ.Vkk.YM;
```

#### 1499. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11445` → after: `L11433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11433) · [Before (L11445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11445)

```diff
-       IZC() {
+       nIk() {
```

#### 1500. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11447-L11448` → after: `L11435-L11436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11435-L11436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11435-L11436) · [Before (L11447-L11448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11447-L11448)

```diff
-         const QC = this.MN.JR.gzC(this.MN.qE);
-         if (!QC || !this.MN.pR.canAltAction) return {
+         const Xk = this.qZ.MJ.QFk(this.qZ.oR);
+         if (!Xk || !this.qZ.gJ.canAltAction) return {
```

#### 1501. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11452` → after: `L11440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11440) · [Before (L11452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11452)

```diff
-         if (QC.opWrapper.bQ) return NC.o.bp("toggleMenu", "inventory"), {
+         if (Xk.opWrapper.yX) return Zk.g.GL("toggleMenu", "inventory"), {
```

#### 1502. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11458` → after: `L11446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11446) · [Before (L11458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11458)

```diff
-         if ((0, AC.c)(null === wC || void 0 === wC ? void 0 : wC.typeObj.type) && this.MN.JR.MzC(this.heldItemState.mH).crouching) return {
+         if ((0, Kk.e)(null === Tk || void 0 === Tk ? void 0 : Tk.typeObj.type) && this.qZ.MJ.KFk(this.heldItemState.Xu).crouching) return {
```

#### 1503. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11462` → after: `L11450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11450) · [Before (L11462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11462)

```diff
-         const bC = null !== (CC = this.MN.ECC) && void 0 !== CC ? CC : this.MN.camera.yB(),
+         const ik = null !== (kk = this.qZ.Wkk) && void 0 !== kk ? kk : this.qZ.camera.Am(),
```

#### 1504. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11467` → after: `L11455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11455) · [Before (L11467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11467)

```diff
-             Eu: MC,
+             nC: jk,
```

#### 1505. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11470-L11473` → after: `L11458-L11461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11458-L11461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11458-L11461) · [Before (L11470-L11473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11470-L11473)

```diff
-           SC = null === (zC = this.MN.pCC) || void 0 === zC ? void 0 : zC.HV,
-           pC = null === (ZC = this.MN.pCC) || void 0 === ZC ? void 0 : ZC.position,
-           PC = null !== nC && void 0 !== nC ? nC : null,
-           GC = this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.MN.qE, null === pC || void 0 === pC ? void 0 : pC[0], null === pC || void 0 === pC ? void 0 : pC[1], null === pC || void 0 === pC ? void 0 : pC[2], SC ? (0, fC.e)(SC) : "Air", PC);
+           wk = null === (Fk = this.qZ.Vkk) || void 0 === Fk ? void 0 : Fk.YM,
+           Hk = null === (Ik = this.qZ.Vkk) || void 0 === Ik ? void 0 : Ik.position,
+           Jk = null !== yk && void 0 !== yk ? yk : null,
+           xk = this.bloxd.client.triggerGameCallback("onPlayerAttemptAltAction", this.qZ.oR, null === Hk || void 0 === Hk ? void 0 : Hk[0], null === Hk || void 0 === Hk ? void 0 : Hk[1], null === Hk || void 0 === Hk ? void 0 : Hk[2], wk ? (0, lk.f)(wk) : "Air", Jk);
```

#### 1506. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11485` → after: `L11473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11473) · [Before (L11485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11485)

```diff
-       dZC() {
+       UIk() {
```

#### 1507. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11494` → after: `L11482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11482) · [Before (L11494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11494)

```diff
-         zC <= 1.2 && CC > 1.2 ? (this.MN.camera.uL = 0, this.MN.camera.cL = 0, this.itemZoomer.forceXyOffsetToZero(), this.QqC()) : 0 === zC && (this.itemZoomer.forceXyOffsetToZero(), this.QqC()), zC > .001 && CC < .001 && (this.MN.camera.uL = 1.2, this.QqC())
+         Fk <= 1.2 && kk > 1.2 ? (this.qZ.camera.VY = 0, this.qZ.camera.JY = 0, this.itemZoomer.forceXyOffsetToZero(), this.Kqk()) : 0 === Fk && (this.itemZoomer.forceXyOffsetToZero(), this.Kqk()), Fk > .001 && kk < .001 && (this.qZ.camera.VY = 1.2, this.Kqk())
```

#### 1508. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11510` → after: `L11498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11498) · [Before (L11510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11510)

```diff
-         NC.o.unsubscribe(this._modelLoadedSub), this.heldItemState.mH === this.MN.qE && JC.clearSecondaryDownFireTimeout(), this._doneFirstMeshSetup = void 0 !== this.MN.JR.fzC(this.heldItemState.mH)
+         Zk.g.unsubscribe(this._modelLoadedSub), this.heldItemState.Xu === this.qZ.oR && sk.clearSecondaryDownFireTimeout(), this._doneFirstMeshSetup = void 0 !== this.qZ.MJ.eFk(this.heldItemState.Xu)
```

#### 1509. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11513` → after: `L11501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11501) · [Before (L11513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11513)

```diff
-         NC.o.unsubscribe(this._newBloxdSub)
+         Zk.g.unsubscribe(this._newBloxdSub)
```

#### 1510. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11516` → after: `L11504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11504) · [Before (L11516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11516)

```diff
-         if (this.wqC(), this._doneFirstMeshSetup) return;
+         if (this.Qqk(), this._doneFirstMeshSetup) return;
```

#### 1511. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11518-L11520` → after: `L11506-L11508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11506-L11508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11506-L11508) · [Before (L11518-L11520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11518-L11520)

```diff
-         const CC = this.heldItemState.mH;
-         this.MN.JR.fzC(CC) || (this._modelLoadedSub = NC.o.subscribe(`lifeformSetupFinished|${CC}`, (() => {
-           this.wqC()
+         const kk = this.heldItemState.Xu;
+         this.qZ.MJ.eFk(kk) || (this._modelLoadedSub = Zk.g.subscribe(`lifeformSetupFinished|${kk}`, (() => {
+           this.Qqk()
```

#### 1512. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11531` → after: `L11519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11519) · [Before (L11531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11531)

```diff
-         return null === CC || this.MN.Vg.nH.has(CC) ? CC : (this.thirdPersonThinObjectId = null, null)
+         return null === kk || this.qZ.Xw.kp.has(kk) ? kk : (this.thirdPersonThinObjectId = null, null)
```

#### 1513. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11535-L11538` → after: `L11523-L11526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11523-L11526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11523-L11526) · [Before (L11535-L11538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11535-L11538)

```diff
-           sq: zC
-         } = this.thirdPersonPose, ZC = zC.x * this.heldPoseScaleY() * zC.z < 0, QC = CC.thinInstMgr.getNodeWorldMatrix(CC.WH, CC.nodeIndex).determinant() < 0, wC = (0, pC.g)(ZC, QC);
-         if (this.thirdPersonFlippedWinding === wC && this.thirdPersonAttachedToId === CC.WH && this.thirdPersonAttachedToNode === CC.nodeIndex && (null === this.thirdPersonThinObjectId || null !== this.liveThirdPersonThinObjectId())) return void this.applyThirdPersonPose();
-         this.releaseThirdPersonThinObject(), this.thirdPersonFlippedWinding = wC, this.thirdPersonAttachedToId = CC.WH, this.thirdPersonAttachedToNode = CC.nodeIndex;
+           ci: Fk
+         } = this.thirdPersonPose, Ik = Fk.x * this.heldPoseScaleY() * Fk.z < 0, Xk = kk.thinInstMgr.getNodeWorldMatrix(kk.Ip, kk.nodeIndex).determinant() < 0, Tk = (0, Hk.g)(Ik, Xk);
+         if (this.thirdPersonFlippedWinding === Tk && this.thirdPersonAttachedToId === kk.Ip && this.thirdPersonAttachedToNode === kk.nodeIndex && (null === this.thirdPersonThinObjectId || null !== this.liveThirdPersonThinObjectId())) return void this.applyThirdPersonPose();
+         this.releaseThirdPersonThinObject(), this.thirdPersonFlippedWinding = Tk, this.thirdPersonAttachedToId = kk.Ip, this.thirdPersonAttachedToNode = kk.nodeIndex;
```

#### 1514. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11541` → after: `L11529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11529) · [Before (L11541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11541)

```diff
-           vq: !0,
+           eq: !0,
```

#### 1515. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11544-L11545` → after: `L11532-L11533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11532-L11533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11532-L11533) · [Before (L11544-L11545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11544-L11545)

```diff
-           const ZC = this.MN.Vg.nH;
-           bC === this.thirdPersonRequestId && ZC.has(CC.WH) ? (this.thirdPersonThinObjectId = zC, ZC.attachThinObject(zC, CC.WH, CC.nodeIndex), ZC.set(zC, "aOpacity", (0, PC.holderAttachmentOpacity)(this.MN, this.heldItemState.mH)), (0, PC.invalidateAttachmentProximityFade)(this. … [truncated]
+           const Ik = this.qZ.Xw.kp;
+           ik === this.thirdPersonRequestId && Ik.has(kk.Ip) ? (this.thirdPersonThinObjectId = Fk, Ik.attachThinObject(Fk, kk.Ip, kk.nodeIndex), Ik.set(Fk, "aOpacity", (0, Jk.holderAttachmentOpacity)(this.qZ, this.heldItemState.Xu)), (0, Jk.invalidateAttachmentProximityFade)(this. … [truncated]
```

#### 1516. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11549` → after: `L11537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11537) · [Before (L11549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11549)

```diff
-         return pC.c * this.thirdPersonPose.sq.y
+         return Hk.e * this.thirdPersonPose.ci.y
```

#### 1517. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11555` → after: `L11543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11543) · [Before (L11555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11555)

```diff
-         const zC = this.MN.Vg.nH,
+         const Fk = this.qZ.Xw.kp,
```

#### 1518. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11559` → after: `L11547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11547) · [Before (L11559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11559)

```diff
-             sq: wC,
+             ci: Tk,
```

#### 1519. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11568` → after: `L11556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11556) · [Before (L11568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11568)

```diff
-           } = (0, GC.b)(ZC, nC ? bC : QC, fC, this.typeObj.heldModelOffsetY());
+           } = (0, xk.c)(Ik, yk ? ik : Xk, lk, this.typeObj.heldModelOffsetY());
```

#### 1520. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11574` → after: `L11562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11562) · [Before (L11574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11574)

```diff
-         null !== CC && (this.MN.Vg.nH.delete(CC), this.thirdPersonThinObjectId = null)
+         null !== kk && (this.qZ.Xw.kp.delete(kk), this.thirdPersonThinObjectId = null)
```

#### 1521. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11578` → after: `L11566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11566) · [Before (L11578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11578)

```diff
-           MN: CC,
+           qZ: kk,
```

#### 1522. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11581-L11583` → after: `L11569-L11571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11569-L11571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11569-L11571) · [Before (L11581-L11583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11581-L11583)

```diff
-         if (!CC.JR.YCC(zC.mH, "humanoidMesh")) return null;
-         const ZC = CC.JR.uzC(zC.mH),
-           QC = CC.Vg.nH,
+         if (!kk.MJ.Ukk(Fk.Xu, "humanoidMesh")) return null;
+         const Ik = kk.MJ.YFk(Fk.Xu),
+           Xk = kk.Xw.kp,
```

#### 1523. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11585` → after: `L11573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11573) · [Before (L11585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11585)

```diff
-             WH: wC
+             Ip: Tk
```

#### 1524. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11592` → after: `L11580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11580) · [Before (L11592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11592)

```diff
-           WH: wC,
+           Ip: Tk,
```

#### 1525. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11601` → after: `L11589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11589) · [Before (L11601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11601)

```diff
-           WH: CC.WH,
+           Ip: kk.Ip,
```

#### 1526. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11606` → after: `L11594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11594) · [Before (L11606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11606)

```diff
-           MN: zC,
+           qZ: Fk,
```

#### 1527. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11609-L11611` → after: `L11597-L11599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11597-L11599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11597-L11599) · [Before (L11609-L11611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11609-L11611)

```diff
-         if (!zC.JR.YCC(ZC.mH, "fourLeggedMesh")) return null;
-         const QC = zC.JR.rzC(ZC.mH),
-           wC = zC.Vg.nH,
+         if (!Fk.MJ.Ukk(Ik.Xu, "fourLeggedMesh")) return null;
+         const Xk = Fk.MJ.AFk(Ik.Xu),
+           Tk = Fk.Xw.kp,
```

#### 1528. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11613` → after: `L11601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11601) · [Before (L11613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11613)

```diff
-             WH: bC
+             Ip: ik
```

#### 1529. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11620` → after: `L11608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11608) · [Before (L11620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11620)

```diff
-           WH: bC,
+           Ip: ik,
```

#### 1530. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11626` → after: `L11614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11614) · [Before (L11626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11626)

```diff
-         if (!this.MN.Vg.lS) return;
+         if (!this.qZ.Xw.Nw) return;
```

#### 1531. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11628` → after: `L11616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11616) · [Before (L11628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11628)

```diff
-         if (null !== CC) return void this.MN.Vg.nH.set(CC, "aLightLevels", this.heldItemLightLevels());
+         if (null !== kk) return void this.qZ.Xw.kp.set(kk, "aLightLevels", this.heldItemLightLevels());
```

#### 1532. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11631` → after: `L11619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11619) · [Before (L11631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11631)

```diff
-         if (this.lightTargetsForMesh !== zC && (this.lightTargetsForMesh = zC, this.LnC = [], this.lightTargetsBuilt = !1), !this.lightTargetsBuilt) {
+         if (this.lightTargetsForMesh !== Fk && (this.lightTargetsForMesh = Fk, this.Myk = [], this.lightTargetsBuilt = !1), !this.lightTargetsBuilt) {
```

#### 1533. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11633` → after: `L11621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11621) · [Before (L11633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11633)

```diff
-           for (const zC of CC) zC.ZE && "aLightLevels" in zC.ZE && this.LnC.push(zC);
+           for (const Fk of kk) Fk.JR && "aLightLevels" in Fk.JR && this.Myk.push(Fk);
```

#### 1534. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11636` → after: `L11624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11624) · [Before (L11636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11636)

```diff
-         if (0 === this.LnC.length) return;
+         if (0 === this.Myk.length) return;
```

#### 1535. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11638` → after: `L11626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11626) · [Before (L11638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11638)

```diff
-         for (const QC of this.LnC)(0, qC.n)(QC, ZC)
+         for (const Xk of this.Myk)(0, qk.o)(Xk, Ik)
```

#### 1536. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11641` → after: `L11629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11629) · [Before (L11641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11641)

```diff
-         return this.MN.JR.KzC(this.heldItemState.mH)._lightLevels
+         return this.qZ.MJ.RFk(this.heldItemState.Xu)._lightLevels
```

#### 1537. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11645` → after: `L11633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11633) · [Before (L11645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11645)

```diff
-   38206: (CC, zC, ZC) => {
+   38361: (kk, Fk, Ik) => {
```

#### 1538. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11649-L11650` → after: `L11636-L11638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11636-L11638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11636-L11638) · [Before (L11649-L11650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11649-L11650)

```diff
-       f: () => MC,
-       h: () => nC
+       g: () => wk,
+       h: () => jk,
+       i: () => yk
```

#### 1539. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11652-L11654` → after: `L11640-L11642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11640-L11642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11640-L11642) · [Before (L11652-L11654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11652-L11654)

```diff
-     var QC = ZC(36961),
-       wC = ZC(37441),
-       bC = ZC(4402);
+     var Xk = Ik(37144),
+       Tk = Ik(37630),
+       ik = Ik(4475);
```

#### 1540. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11658-L11660` → after: `L11646-L11648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11646-L11648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11646-L11648) · [Before (L11658-L11660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11658-L11660)

```diff
-         position: new QC.Eg,
-         rotation: new QC.Eg,
-         sq: new QC.Eg,
+         position: new Xk.Ge,
+         rotation: new Xk.Ge,
+         ci: new Xk.Ge,
```

#### 1541. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11665-L11667` → after: `L11653-L11655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11653-L11655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11653-L11655) · [Before (L11665-L11667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11665-L11667)

```diff
-     const fC = new QC.Eg(-.18, -.66, .48),
-       oC = new QC.Eg(.4, 1.25, Math.PI + .9),
-       qC = new QC.Eg(-.12, .12, .12),
+     const lk = new Xk.Ge(-.18, -.66, .48),
+       ak = new Xk.Ge(.4, 1.25, Math.PI + .9),
+       qk = new Xk.Ge(-.12, .12, .12),
```

#### 1542. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11673` → after: `L11661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11661) · [Before (L11673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11673)

```diff
-       return QC.Matrix.RotationYawPitchRollToRef(CC.y, CC.x, CC.z, FC), QC.Matrix.RotationYawPitchRollToRef(zC[1], zC[0], zC[2], WC), wC.e.matMulToRef(WC, FC, NC), QC.Quaternion.FromRotationMatrixToRef(NC, ZC)
+       return Xk.Matrix.RotationYawPitchRollToRef(kk.y, kk.x, kk.z, Lk), Xk.Matrix.RotationYawPitchRollToRef(Fk[1], Fk[0], Fk[2], tk), Tk.c.matMulToRef(tk, Lk, Zk), Xk.Quaternion.FromRotationMatrixToRef(Zk, Ik)
```

#### 1543. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11685` → after: `L11673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11673) · [Before (L11685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11685)

```diff
-         sq: nC
+         ci: yk
```

#### 1544. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11687-L11689` → after: `L11675-L11677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11675-L11677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11675-L11677) · [Before (L11687-L11689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11687-L11689)

```diff
-       if (ZC.usesQuaternion = !1, "Gun" === CC.type) return QC.Av(fC), wC.Av(oC), void nC.Av(qC);
-       const [FC, WC, NC] = null !== zC && void 0 !== zC ? zC : [0, 0, 0], MC = (0, bC.b)(CC.type), SC = MC ? 2.25 : 1.35, pC = MC ? 0 : .08;
-       if ("TwoDTool" === CC.type || CC.holdAsAiming) QC.L_(FC, -.48 + WC, .24 + NC + pC), nC.L_(.19 * SC, -.19 * SC, .19 * SC), CC.holdAsAiming ? wC.L_(.4 + Math.PI, 1.25, Math.PI / 2) : wC.L_(Math.PI, Math.PI / 2, .35 * Math.PI);
+       if (Ik.usesQuaternion = !1, "Gun" === kk.type) return Xk.kS(lk), Tk.kS(ak), void yk.kS(qk);
+       const [Lk, tk, Zk] = null !== Fk && void 0 !== Fk ? Fk : [0, 0, 0], jk = (0, ik.d)(kk.type), wk = jk ? 2.25 : 1.35, Hk = jk ? 0 : .08;
+       if ("TwoDTool" === kk.type || kk.holdAsAiming) Xk.t5(Lk, -.48 + tk, .24 + Zk + Hk), yk.t5(.19 * wk, -.19 * wk, .19 * wk), kk.holdAsAiming ? Tk.t5(.4 + Math.PI, 1.25, Math.PI / 2) : Tk.t5(Math.PI, Math.PI / 2, .35 * Math.PI);
```

#### 1545. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11691` → after: `L11679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11679) · [Before (L11691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11691)

```diff
-         QC.L_(FC, -.72 + WC, .18 + NC + pC);
+         Xk.t5(Lk, -.72 + tk, .18 + Zk + Hk);
```

#### 1546. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11693` → after: `L11681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11681) · [Before (L11693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11693)

```diff
-         nC.L_(CC, CC, CC), wC.L_(MC ? 0 : Math.PI, Math.PI / 2, -Math.PI / 2)
+         yk.t5(kk, kk, kk), Tk.t5(jk ? 0 : Math.PI, Math.PI / 2, -Math.PI / 2)
```

#### 1547. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11698` → after: `L11686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11686) · [Before (L11698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11698)

```diff
-   38201: (CC, zC, ZC) => {
+   38353: (kk, Fk, Ik) => {
```

#### 1548. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11700` → after: `L11688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11688) · [Before (L11700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11700)

```diff
-       b: () => nC
+       c: () => yk
```

#### 1549. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11702` → after: `L11690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11690) · [Before (L11702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11702)

```diff
-     var QC = ZC(36961);
+     var Xk = Ik(37144);
```

#### 1550. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11704` → after: `L11692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11692) · [Before (L11704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11704)

```diff
-       bC = new QC.Eg;
+       ik = new Xk.Ge;
```

#### 1551. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11708` → after: `L11696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11696) · [Before (L11708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11708)

```diff
-       const fC = zC instanceof QC.Quaternion ? zC : QC.Quaternion.RotationYawPitchRollToRef(zC.y, zC.x, zC.z, wC);
+       const lk = Fk instanceof Xk.Quaternion ? Fk : Xk.Quaternion.RotationYawPitchRollToRef(Fk.y, Fk.x, Fk.z, Tk);
```

#### 1552. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11712` → after: `L11700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11700) · [Before (L11712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11712)

```diff
-   36943: (CC, zC, ZC) => {
+   37134: (kk, Fk, Ik) => {
```

#### 1553. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11722-L11726` → after: `L11710-L11714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11710-L11714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11710-L11714) · [Before (L11722-L11726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11722-L11726)

```diff
-     var QC = ZC(36952),
-       wC = ZC(2753),
-       bC = ZC(600),
-       nC = ZC(1169),
-       fC = ZC(28);
+     var Xk = Ik(37139),
+       Tk = Ik(2700),
+       ik = Ik(628),
+       yk = Ik(1217),
+       lk = Ik(34);
```

#### 1554. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L11741` → after: `L11729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R11729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L11729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L11729) · [Before (L11741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/119.js#L11741)

```diff
-         if (null !== wC.WH)
+         if (null !== Tk.Ip)
```
