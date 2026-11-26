# Changed — Bundle Modifications Report (Part 060 / 161)

- **Updated at**: `2026-11-27T02:05 JST`
- **Part**: `60 / 161` (**402** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 059](part-059.md) · [Part 061 →](part-061.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/280.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/280.js` (876 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9)

#### 89. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L967` → after: `L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L967) · [Before (L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L967)

```diff
-             if (this.yN().useRightHandedSystem ? hH.e.LookAtRHToRef(HH, BH, LH, this._viewMatrix) : hH.e.LookAtLHToRef(HH, BH, LH, this._viewMatrix), this.parent) {
+             if (this.JF().useRightHandedSystem ? oB.d.LookAtRHToRef(BB, OB, GB, this._viewMatrix) : oB.d.LookAtLHToRef(BB, OB, GB, this._viewMatrix), this.parent) {
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L973-L975` → after: `L973-L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L973-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L973-L975) · [Before (L973-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L973-L975)

```diff
-             if (this.cameraRigMode !== SH.d.RIG_MODE_NONE) {
-               const LH = new HH(BH, this.position.clone(), this.yN());
-               return LH.isRigCamera = !0, LH.rigParent = this, this.cameraRigMode === SH.d.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new hH.f), LH._cameraRigParams = {}, LH.rotationQuaternion = new hH.f), LH.mode = this.mode, LH.orthoLeft = this.orthoL … [truncated]
+             if (this.cameraRigMode !== QB.e.RIG_MODE_NONE) {
+               const GB = new BB(OB, this.position.clone(), this.JF());
+               return GB.isRigCamera = !0, GB.rigParent = this, this.cameraRigMode === QB.e.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new oB.f), GB._cameraRigParams = {}, GB.rotationQuaternion = new oB.f), GB.mode = this.mode, GB.orthoLeft = this.orthoL … [truncated]
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L983-L989` → after: `L983-L989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L983-L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L983-L989) · [Before (L983-L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L983-L989)

```diff
-               case SH.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
-               case SH.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
-               case SH.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
-               case SH.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
-               case SH.d.RIG_MODE_STEREOSCOPIC_INTERLACED: {
-                 const LH = this.cameraRigMode === SH.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
-                   AH = this.cameraRigMode === SH.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
+               case QB.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
+               case QB.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
+               case QB.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
+               case QB.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
+               case QB.e.RIG_MODE_STEREOSCOPIC_INTERLACED: {
+                 const GB = this.cameraRigMode === QB.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
+                   YB = this.cameraRigMode === QB.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L993-L994` → after: `L993-L994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L993-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L993-L994) · [Before (L993-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L993-L994)

```diff
-               case SH.d.RIG_MODE_VR:
-                 HH.rotationQuaternion && BH.rotationQuaternion && this.rotationQuaternion ? (HH.rotationQuaternion.Tm(this.rotationQuaternion), BH.rotationQuaternion.Tm(this.rotationQuaternion)) : (HH.rotation.Tm(this.rotation), BH.rotation.Tm(this.rotation)), HH.position.Tm(this … [truncated]
+               case QB.e.RIG_MODE_VR:
+                 BB.rotationQuaternion && OB.rotationQuaternion && this.rotationQuaternion ? (BB.rotationQuaternion.IU(this.rotationQuaternion), OB.rotationQuaternion.IU(this.rotationQuaternion)) : (BB.rotation.IU(this.rotation), OB.rotation.IU(this.rotation)), BB.position.IU(this … [truncated]
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1001` → after: `L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1001) · [Before (L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1001)

```diff
-             hH.e.TranslationToRef(-AH.x, -AH.y, -AH.z, HH._TargetTransformMatrix), HH._TargetTransformMatrix.multiplyToRef(hH.e.RotationAxis(LH.upVector, BH), HH._RigCamTransformMatrix), hH.e.TranslationToRef(AH.x, AH.y, AH.z, HH._TargetTransformMatrix), HH._RigCamTransformMatrix … [truncated]
+             oB.d.TranslationToRef(-YB.x, -YB.y, -YB.z, BB._TargetTransformMatrix), BB._TargetTransformMatrix.multiplyToRef(oB.d.RotationAxis(GB.upVector, OB), BB._RigCamTransformMatrix), oB.d.TranslationToRef(YB.x, YB.y, YB.z, BB._TargetTransformMatrix), BB._RigCamTransformMatrix … [truncated]
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1008` → after: `L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1008) · [Before (L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1008)

```diff
-           BH = [(0, rH.H)()], LH = [(0, rH.F)()], CH = [(0, rH.H)()], EH = [(0, rH.v)("lockedTargetId")], (0, AH.g)(null, null, BH, {
+           OB = [(0, DB.L)()], GB = [(0, DB.H)()], JB = [(0, DB.L)()], MB = [(0, DB.w)("lockedTargetId")], (0, YB.h)(null, null, OB, {
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1021` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1021) · [Before (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1021)

```diff
-           }, QH, WH), (0, AH.g)(null, null, LH, {
+           }, qB, ZB), (0, YB.h)(null, null, GB, {
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1034` → after: `L1034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1034) · [Before (L1034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1034)

```diff
-           }, MH, xH), (0, AH.g)(null, null, CH, {
+           }, NB, RB), (0, YB.h)(null, null, JB, {
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1047` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1047) · [Before (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1047)

```diff
-           }, vH, PH), (0, AH.g)(null, null, EH, {
+           }, WB, AB), (0, YB.h)(null, null, MB, {
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1066` → after: `L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1066) · [Before (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1066)

```diff
-         })(), HH._RigCamTransformMatrix = new hH.e, HH._TargetTransformMatrix = new hH.e, HH._TargetFocalPoint = new hH.o, HH
+         })(), BB._RigCamTransformMatrix = new oB.d, BB._TargetTransformMatrix = new oB.d, BB._TargetFocalPoint = new oB.r, BB
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1071` → after: `L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1071) · [Before (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1071)

```diff
-       WH || (WH = !0, CH.b.AddNodeConstructor("TargetCamera", ((HH, BH) => () => new QH(HH, hH.o.Zero(), BH))))
+       ZB || (ZB = !0, JB.b.AddNodeConstructor("TargetCamera", ((BB, OB) => () => new qB(BB, oB.r.Zero(), OB))))
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1074` → after: `L1074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1074) · [Before (L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1074)

```diff
-   41239: (HH, BH, LH) => {
+   40958: (BB, OB, GB) => {
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1076` → after: `L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1076) · [Before (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1076)

```diff
-       e: () => SH
+       c: () => QB
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1078` → after: `L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1078) · [Before (L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1078)

```diff
-     var AH = LH(41184);
+     var YB = GB(40905);
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1082` → after: `L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1082) · [Before (L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1082)

```diff
-       rH || (rH = !0, AH.c.prototype.getInputElement = function() {
+       DB || (DB = !0, YB.d.prototype.getInputElement = function() {
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1084` → after: `L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1084) · [Before (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1084)

```diff
-       }, AH.c.prototype.getRenderingCanvasClientRect = function() {
+       }, YB.d.prototype.getRenderingCanvasClientRect = function() {
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1086` → after: `L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1086) · [Before (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1086)

```diff
-       }, AH.c.prototype.getInputElementClientRect = function() {
+       }, YB.d.prototype.getInputElementClientRect = function() {
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1088` → after: `L1088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1088) · [Before (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1088)

```diff
-       }, AH.c.prototype.getAspectRatio = function(HH) {
+       }, YB.d.prototype.getAspectRatio = function(BB) {
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1092` → after: `L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1092) · [Before (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1092)

```diff
-       }, AH.c.prototype.getScreenAspectRatio = function() {
+       }, YB.d.prototype.getScreenAspectRatio = function() {
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1094` → after: `L1094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1094) · [Before (L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1094)

```diff
-       }, AH.c.prototype._verifyPointerLock = function() {
+       }, YB.d.prototype._verifyPointerLock = function() {
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1099-L1101` → after: `L1099-L1101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1099-L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1099-L1101) · [Before (L1099-L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1099-L1101)

```diff
-   41330: (HH, BH, LH) => {
-     var AH = LH(41184),
-       rH = LH(41336);
+   41030: (BB, OB, GB) => {
+     var YB = GB(40905),
+       DB = GB(41035);
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1103` → after: `L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1103) · [Before (L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1103)

```diff
-     SH || (SH = !0, (0, rH.q)(), AH.c.prototype._loadFileAsync = async function(HH, BH, LH) {
+     QB || (QB = !0, (0, DB.p)(), YB.d.prototype._loadFileAsync = async function(BB, OB, GB) {
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1113-L1114` → after: `L1113-L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1113-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1113-L1114) · [Before (L1113-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1113-L1114)

```diff
-   41328: (HH, BH, LH) => {
-     (0, LH(41247).c)()
+   41026: (BB, OB, GB) => {
+     (0, GB(40965).d)()
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1116` → after: `L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1116) · [Before (L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1116)

```diff
-   41247: (HH, BH, LH) => {
+   40965: (BB, OB, GB) => {
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1118` → after: `L1118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1118) · [Before (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1118)

```diff
-       c: () => SH
+       d: () => QB
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1120` → after: `L1120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1120) · [Before (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1120)

```diff
-     var AH = LH(41184);
+     var YB = GB(40905);
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1124` → after: `L1124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1124) · [Before (L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1124)

```diff
-       rH || (rH = !0, AH.c.prototype.getRenderPassNames = function() {
+       DB || (DB = !0, YB.d.prototype.getRenderPassNames = function() {
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1126` → after: `L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1126) · [Before (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1126)

```diff
-       }, AH.c.prototype.getCurrentRenderPassName = function() {
+       }, YB.d.prototype.getCurrentRenderPassName = function() {
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1128-L1129` → after: `L1128-L1129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1128-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1128-L1129) · [Before (L1128-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1128-L1129)

```diff
-       }, AH.c.prototype.createRenderPassId = function(HH) {
-         const BH = ++AH.c._RenderPassIdCounter;
+       }, YB.d.prototype.createRenderPassId = function(BB) {
+         const OB = ++YB.d._RenderPassIdCounter;
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1131` → after: `L1131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1131) · [Before (L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1131)

```diff
-       }, AH.c.prototype.releaseRenderPassId = function(HH) {
+       }, YB.d.prototype.releaseRenderPassId = function(BB) {
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1137-L1139` → after: `L1137-L1139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1137-L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1137-L1139) · [Before (L1137-L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1137-L1139)

```diff
-             if (AH._releaseRenderPassId(HH), AH.jU)
-               for (let BH = 0; BH < AH.jU.length; ++BH) {
-                 AH.jU[BH]._removeDrawWrapper(HH)
+             if (YB._releaseRenderPassId(BB), YB.iW)
+               for (let OB = 0; OB < YB.iW.length; ++OB) {
+                 YB.iW[OB]._removeDrawWrapper(BB)
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1147-L1149` → after: `L1147-L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1147-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1147-L1149) · [Before (L1147-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1147-L1149)

```diff
-   41370: (HH, BH, LH) => {
-     var AH = LH(41372),
-       rH = LH(41184);
+   41079: (BB, OB, GB) => {
+     var YB = GB(41081),
+       DB = GB(40905);
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1151` → after: `L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1151) · [Before (L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1151)

```diff
-     SH || (SH = !0, rH.c.GetCompatibleTextureLoader = AH.c)
+     QB || (QB = !0, DB.d.GetCompatibleTextureLoader = YB.b)
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1153` → after: `L1153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1153) · [Before (L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1153)

```diff
-   41253: (HH, BH, LH) => {
+   40969: (BB, OB, GB) => {
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1155` → after: `L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1155) · [Before (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1155)

```diff
-       c: () => SH
+       e: () => QB
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1157` → after: `L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1157) · [Before (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1157)

```diff
-     var AH = LH(41129);
+     var YB = GB(40849);
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1176-L1182` → after: `L1176-L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1176-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1176-L1182) · [Before (L1176-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1176-L1182)

```diff
-   41264: (HH, BH, LH) => {
-     var AH = LH(41122),
-       rH = LH(39595),
-       SH = LH(41129),
-       hH = LH(41271),
-       tH = LH(41229);
-     class zH extends hH.d {
+   40974: (BB, OB, GB) => {
+     var YB = GB(40837),
+       DB = GB(39366),
+       QB = GB(40849),
+       oB = GB(40982),
+       jB = GB(40947);
+     class yB extends oB.c {
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1239` → after: `L1239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1239) · [Before (L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1239)

```diff
-         if (hH._bindUnboundFramebuffer(SH), hH.hQ > 1) {
+         if (oB._bindUnboundFramebuffer(QB), oB.Pq > 1) {
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1245` → after: `L1245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1245) · [Before (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1245)

```diff
-           const SH = void 0 !== LH ? HH.TEXTURE_CUBE_MAP_POSITIVE_X + LH : HH.TEXTURE_2D;
+           const QB = void 0 !== GB ? BB.TEXTURE_CUBE_MAP_POSITIVE_X + GB : BB.TEXTURE_2D;
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1316-L1317` → after: `L1316-L1317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1316-L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1316-L1317) · [Before (L1316-L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1316-L1317)

```diff
-       const EH = new AH.e(this, 12);
-       if (EH.label = BH.label, !this._caps.depthTextureExtension) return rH.e.Error("Depth texture is not supported by your browser or hardware."), EH;
+       const MB = new YB.b(this, 12);
+       if (MB.label = OB.label, !this._caps.depthTextureExtension) return DB.b.Error("Depth texture is not supported by your browser or hardware."), MB;
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1325` → after: `L1325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1325) · [Before (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1325)

```diff
-         if (15 !== XH.depthTextureFormat && 16 !== XH.depthTextureFormat && 17 !== XH.depthTextureFormat && 13 !== XH.depthTextureFormat && 14 !== XH.depthTextureFormat && 18 !== XH.depthTextureFormat) return rH.e.Error(`Depth texture ${XH.depthTextureFormat} format is not suppor … [truncated]
+         if (15 !== PB.depthTextureFormat && 16 !== PB.depthTextureFormat && 17 !== PB.depthTextureFormat && 13 !== PB.depthTextureFormat && 14 !== PB.depthTextureFormat && 18 !== PB.depthTextureFormat) return DB.b.Error(`Depth texture ${PB.depthTextureFormat} format is not suppor … [truncated]
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1334` → after: `L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1334) · [Before (L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1334)

```diff
-       if (this.hQ < 2 || !HH) return 1;
+       if (this.Pq < 2 || !BB) return 1;
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1360` → after: `L1360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1360) · [Before (L1360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1360)

```diff
-       CH.texParameteri(EH, CH.TEXTURE_MAG_FILTER, XH.mag), CH.texParameteri(EH, CH.TEXTURE_MIN_FILTER, XH.min), CH.texParameteri(EH, CH.TEXTURE_WRAP_S, CH.CLAMP_TO_EDGE), CH.texParameteri(EH, CH.TEXTURE_WRAP_T, CH.CLAMP_TO_EDGE), this.hQ > 1 && (0 === AH ? (CH.texParameteri(EH, C … [truncated]
+       JB.texParameteri(MB, JB.TEXTURE_MAG_FILTER, PB.mag), JB.texParameteri(MB, JB.TEXTURE_MIN_FILTER, PB.min), JB.texParameteri(MB, JB.TEXTURE_WRAP_S, JB.CLAMP_TO_EDGE), JB.texParameteri(MB, JB.TEXTURE_WRAP_T, JB.CLAMP_TO_EDGE), this.Pq > 1 && (0 === YB ? (JB.texParameteri(MB, J … [truncated]
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1363` → after: `L1363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1363) · [Before (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1363)

```diff
-   41106: (HH, BH, LH) => {
+   40825: (BB, OB, GB) => {
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1365` → after: `L1365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1365) · [Before (L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1365)

```diff
-       b: () => AH.c
+       c: () => YB.c
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1367-L1369` → after: `L1367-L1369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1367-L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1367-L1369) · [Before (L1367-L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1367-L1369)

```diff
-     var AH = LH(41113);
-     (0, LH(41253).c)();
-     var rH = LH(41129);
+     var YB = GB(40833);
+     (0, GB(40969).e)();
+     var DB = GB(40849);
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1390-L1392` → after: `L1390-L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1390-L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1390-L1392) · [Before (L1390-L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1390-L1392)

```diff
-     var hH = LH(41122),
-       tH = LH(39595),
-       zH = LH(41222);
+     var oB = GB(40837),
+       jB = GB(39366),
+       yB = GB(40932);
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1413` → after: `L1413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1413) · [Before (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1413)

```diff
-             uH = new hH.e(this, YH);
+             pB = new oB.b(this, lB);
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1444` → after: `L1444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1444) · [Before (L1444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1444)

```diff
-         const XH = new hH.e(this, 3);
+         const PB = new oB.b(this, 3);
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1451` → after: `L1451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1451) · [Before (L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1451)

```diff
-           GH = new hH.e(this, 8);
+           zB = new oB.b(this, 8);
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1455` → after: `L1455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1455) · [Before (L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1455)

```diff
-         uH === XH.RGB && (uH = XH.RGBA), YH !== XH.FLOAT || this._caps.textureFloatLinearFiltering ? YH !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? YH !== XH.FLOAT || this._caps.textureFloatRender ? YH !== XH.HALF_FLOAT || this._caps.colorBufferFlo … [truncated]
+         pB === PB.RGB && (pB = PB.RGBA), lB !== PB.FLOAT || this._caps.textureFloatLinearFiltering ? lB !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? lB !== PB.FLOAT || this._caps.textureFloatRender ? lB !== PB.HALF_FLOAT || this._caps.colorBufferFlo … [truncated]
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1459` → after: `L1459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1459) · [Before (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1459)

```diff
-         if (!this.needPOTTextures || (0, zH.g)(GH.width) && (0, zH.g)(GH.height) || (rH = !1), HH) this.updateRawCubeTexture(GH, HH, LH, AH, SH, EH);
+         if (!this.needPOTTextures || (0, yB.h)(zB.width) && (0, yB.h)(zB.height) || (DB = !1), BB) this.updateRawCubeTexture(zB, BB, GB, YB, QB, MB);
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1483` → after: `L1483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1483) · [Before (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1483)

```diff
-         }(!this.needPOTTextures || (0, zH.g)(BH.width) && (0, zH.g)(BH.height)) && BH.generateMipMaps && 0 === tH && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), BH.isReady = !0
+         }(!this.needPOTTextures || (0, yB.h)(OB.width) && (0, yB.h)(OB.height)) && OB.generateMipMaps && 0 === jB && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), OB.isReady = !0
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1499` → after: `L1499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1499) · [Before (L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1499)

```diff
-             const hH = AH instanceof Promise ? await AH : AH,
+             const oB = YB instanceof Promise ? await YB : YB,
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1526` → after: `L1526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1526) · [Before (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1526)

```diff
-     var EH = LH(41164);
+     var MB = GB(40883);
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1545` → after: `L1545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1545) · [Before (L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1545)

```diff
-       return tH ? SH || (SH = (0, EH.h)(HH.type, 4 * BH * LH)) : GH === XH.UNSIGNED_BYTE ? (SH || (SH = new Uint8Array(4 * BH * LH)), GH = XH.UNSIGNED_BYTE) : (SH || (SH = new Float32Array(4 * BH * LH)), GH = XH.FLOAT), hH && this.flushFramebuffer(), XH.readPixels(zH, CH, BH, LH, … [truncated]
+       return jB ? QB || (QB = (0, MB.j)(BB.type, 4 * OB * GB)) : zB === PB.UNSIGNED_BYTE ? (QB || (QB = new Uint8Array(4 * OB * GB)), zB = PB.UNSIGNED_BYTE) : (QB || (QB = new Float32Array(4 * OB * GB)), zB = PB.FLOAT), oB && this.flushFramebuffer(), PB.readPixels(yB, JB, OB, GB, … [truncated]
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1555` → after: `L1555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1555) · [Before (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1555)

```diff
-     }), (0, LH(41260).c)();
+     }), (0, GB(40972).c)();
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1558-L1559` → after: `L1558-L1559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1558-L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1558-L1559) · [Before (L1558-L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1558-L1559)

```diff
-       const LH = new hH.e(this, 12);
-       if (LH.isCube = !0, 1 === this.hQ) return tH.e.Error("Depth cube texture is not supported by WebGL 1."), LH;
+       const GB = new oB.b(this, 12);
+       if (GB.isCube = !0, 1 === this.Pq) return jB.b.Error("Depth cube texture is not supported by WebGL 1."), GB;
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1586` → after: `L1586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1586) · [Before (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1586)

```diff
-         const LH = this.needPOTTextures ? (0, zH.c)(BH[0].width, this._caps.maxCubemapTextureSize) : BH[0].width,
+         const GB = this.needPOTTextures ? (0, yB.f)(OB[0].width, this._caps.maxCubemapTextureSize) : OB[0].width,
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1592` → after: `L1592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1592) · [Before (L1592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1592)

```diff
-         HH._useSRGBBuffer && 1 === this.hQ && (XH = EH);
+         BB._useSRGBBuffer && 1 === this.Pq && (PB = MB);
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1595` → after: `L1595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1595) · [Before (L1595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1595)

```diff
-             if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void tH.e.Warn("Cannot create canvas to resize texture.");
+             if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void jB.b.Warn("Cannot create canvas to resize texture.");
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1607` → after: `L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1607) · [Before (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1607)

```diff
-     LH(41264);
+     GB(40974);
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1626` → after: `L1626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1626) · [Before (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1626)

```diff
-         SH = new hH.e(this, 5);
+         QB = new oB.b(this, 5);
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1629` → after: `L1629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1629) · [Before (L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1629)

```diff
-       1 !== AH.type || this._caps.textureFloat || (AH.type = 0, tH.e.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), rH.texParameteri(rH.TEXTURE_CUBE_MAP, rH.TEXTURE_MAG_FILTER, zH.mag), rH.texParameteri(rH.TEXTURE_CUBE_MAP … [truncated]
+       1 !== YB.type || this._caps.textureFloat || (YB.type = 0, jB.b.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), DB.texParameteri(DB.TEXTURE_CUBE_MAP, DB.TEXTURE_MAG_FILTER, yB.mag), DB.texParameteri(DB.TEXTURE_CUBE_MAP … [truncated]
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1634-L1635` → after: `L1634-L1635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1634-L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1634-L1635) · [Before (L1634-L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1634-L1635)

```diff
-     var QH = LH(41275),
-       WH = LH(41283);
+     var qB = GB(40985),
+       ZB = GB(40992);
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1647` → after: `L1647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1647) · [Before (L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1647)

```diff
-         if (XH ? HH.info.sphericalPolynomial && (zH._sphericalPolynomial = HH.info.sphericalPolynomial) : zH._sphericalPolynomial = zH._sphericalPolynomial ?? new QH.g, zH._source = 9, this.getCaps().textureLOD) return void(SH && SH(zH));
+         if (PB ? BB.info.sphericalPolynomial && (yB._sphericalPolynomial = BB.info.sphericalPolynomial) : yB._sphericalPolynomial = yB._sphericalPolynomial ?? new qB.f, yB._source = 9, this.getCaps().textureLOD) return void(QB && QB(yB));
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1653` → after: `L1653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1653) · [Before (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1653)

```diff
-         } = await LH.e(615).then((() => LH(45241))), YH = [];
+         } = await GB.e(615).then((() => GB(44902))), lB = [];
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1660` → after: `L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1660) · [Before (L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1660)

```diff
-             xH = new hH.e(this, 2);
+             RB = new oB.b(this, 2);
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1665` → after: `L1665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1665) · [Before (L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1665)

```diff
-           } else tH.e.Warn("DDS is the only prefiltered cube map supported so far.");
+           } else jB.b.Warn("DDS is the only prefiltered cube map supported so far.");
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1667` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1667) · [Before (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1667)

```diff
-           const vH = new WH.e(BH);
+           const WB = new ZB.d(OB);
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1673` → after: `L1673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1673) · [Before (L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1673)

```diff
-     var xH = LH(41210);
+     var RB = GB(40920);
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1696-L1697` → after: `L1696-L1697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1696-L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1696-L1697) · [Before (L1696-L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1696-L1697)

```diff
-     var PH = LH(41154),
-       TH = LH(41184);
+     var AB = GB(40870),
+       VB = GB(40905);
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1699-L1700` → after: `L1699-L1700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1699-L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1699-L1700) · [Before (L1699-L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1699-L1700)

```diff
-     UH || (UH = !0, TH.c.prototype.displayLoadingUI = function() {
-       if (!(0, PH.k)()) return;
+     SB || (SB = !0, VB.d.prototype.displayLoadingUI = function() {
+       if (!(0, AB.j)()) return;
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1703-L1704` → after: `L1703-L1704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1703-L1704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1703-L1704) · [Before (L1703-L1704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1703-L1704)

```diff
-     }, TH.c.prototype.hideLoadingUI = function() {
-       if (!(0, PH.k)()) return;
+     }, VB.d.prototype.hideLoadingUI = function() {
+       if (!(0, AB.j)()) return;
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1707` → after: `L1707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1707) · [Before (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1707)

```diff
-     }, Object.defineProperty(TH.c.prototype, "loadingScreen", {
+     }, Object.defineProperty(VB.d.prototype, "loadingScreen", {
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1709` → after: `L1709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1709) · [Before (L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1709)

```diff
-         return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = TH.c.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
+         return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = VB.d.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1716` → after: `L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1716) · [Before (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1716)

```diff
-     }), Object.defineProperty(TH.c.prototype, "loadingUIText", {
+     }), Object.defineProperty(VB.d.prototype, "loadingUIText", {
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1722` → after: `L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1722) · [Before (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1722)

```diff
-     }), Object.defineProperty(TH.c.prototype, "loadingUIBackgroundColor", {
+     }), Object.defineProperty(VB.d.prototype, "loadingUIBackgroundColor", {
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1728` → after: `L1728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1728) · [Before (L1728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1728)

```diff
-     })), (0, LH(41239).e)();
+     })), (0, GB(40958).c)();
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1730` → after: `L1730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1730) · [Before (L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1730)

```diff
-     VH || (VH = !0, TH.c.prototype.getInputElement = function() {
+     nB || (nB = !0, VB.d.prototype.getInputElement = function() {
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1732` → after: `L1732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1732) · [Before (L1732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1732)

```diff
-     }, TH.c.prototype.getDepthFunction = function() {
+     }, VB.d.prototype.getDepthFunction = function() {
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1734` → after: `L1734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1734) · [Before (L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1734)

```diff
-     }, TH.c.prototype.setDepthFunction = function(HH) {
+     }, VB.d.prototype.setDepthFunction = function(BB) {
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1736` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1736) · [Before (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1736)

```diff
-     }, TH.c.prototype.setDepthFunctionToGreater = function() {
+     }, VB.d.prototype.setDepthFunctionToGreater = function() {
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1738` → after: `L1738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1738) · [Before (L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1738)

```diff
-     }, TH.c.prototype.setDepthFunctionToGreaterOrEqual = function() {
+     }, VB.d.prototype.setDepthFunctionToGreaterOrEqual = function() {
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1740` → after: `L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1740) · [Before (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1740)

```diff
-     }, TH.c.prototype.setDepthFunctionToLess = function() {
+     }, VB.d.prototype.setDepthFunctionToLess = function() {
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1742` → after: `L1742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1742) · [Before (L1742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1742)

```diff
-     }, TH.c.prototype.setDepthFunctionToLessOrEqual = function() {
+     }, VB.d.prototype.setDepthFunctionToLessOrEqual = function() {
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1744` → after: `L1744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1744) · [Before (L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1744)

```diff
-     }, TH.c.prototype.getDepthWrite = function() {
+     }, VB.d.prototype.getDepthWrite = function() {
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1746` → after: `L1746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1746) · [Before (L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1746)

```diff
-     }, TH.c.prototype.setDepthWrite = function(HH) {
+     }, VB.d.prototype.setDepthWrite = function(BB) {
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1748` → after: `L1748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1748) · [Before (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1748)

```diff
-     }, TH.c.prototype.setAlphaConstants = function(HH, BH, LH, AH) {
+     }, VB.d.prototype.setAlphaConstants = function(BB, OB, GB, YB) {
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1750` → after: `L1750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1750) · [Before (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1750)

```diff
-     }, TH.c.prototype.getAlphaMode = function() {
+     }, VB.d.prototype.getAlphaMode = function() {
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1753` → after: `L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1753) · [Before (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1753)

```diff
-     }, TH.c.prototype.getAlphaEquation = function() {
+     }, VB.d.prototype.getAlphaEquation = function() {
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1758` → after: `L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1758) · [Before (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1758)

```diff
-     OH || (OH = !0, TH.c.prototype.getStencilBuffer = function() {
+     UB || (UB = !0, VB.d.prototype.getStencilBuffer = function() {
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1760` → after: `L1760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1760) · [Before (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1760)

```diff
-     }, TH.c.prototype.setStencilBuffer = function(HH) {
+     }, VB.d.prototype.setStencilBuffer = function(BB) {
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1762` → after: `L1762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1762) · [Before (L1762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1762)

```diff
-     }, TH.c.prototype.getStencilMask = function() {
+     }, VB.d.prototype.getStencilMask = function() {
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1764` → after: `L1764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1764) · [Before (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1764)

```diff
-     }, TH.c.prototype.setStencilMask = function(HH) {
+     }, VB.d.prototype.setStencilMask = function(BB) {
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1766` → after: `L1766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1766) · [Before (L1766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1766)

```diff
-     }, TH.c.prototype.getStencilFunction = function() {
+     }, VB.d.prototype.getStencilFunction = function() {
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1768` → after: `L1768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1768) · [Before (L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1768)

```diff
-     }, TH.c.prototype.getStencilBackFunction = function() {
+     }, VB.d.prototype.getStencilBackFunction = function() {
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1770` → after: `L1770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1770) · [Before (L1770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1770)

```diff
-     }, TH.c.prototype.getStencilFunctionReference = function() {
+     }, VB.d.prototype.getStencilFunctionReference = function() {
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1772` → after: `L1772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1772) · [Before (L1772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1772)

```diff
-     }, TH.c.prototype.getStencilFunctionMask = function() {
+     }, VB.d.prototype.getStencilFunctionMask = function() {
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1774` → after: `L1774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1774) · [Before (L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1774)

```diff
-     }, TH.c.prototype.setStencilFunction = function(HH) {
+     }, VB.d.prototype.setStencilFunction = function(BB) {
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1776` → after: `L1776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1776) · [Before (L1776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1776)

```diff
-     }, TH.c.prototype.setStencilBackFunction = function(HH) {
+     }, VB.d.prototype.setStencilBackFunction = function(BB) {
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1778` → after: `L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1778) · [Before (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1778)

```diff
-     }, TH.c.prototype.setStencilFunctionReference = function(HH) {
+     }, VB.d.prototype.setStencilFunctionReference = function(BB) {
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1780` → after: `L1780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1780) · [Before (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1780)

```diff
-     }, TH.c.prototype.setStencilFunctionMask = function(HH) {
+     }, VB.d.prototype.setStencilFunctionMask = function(BB) {
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1782` → after: `L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1782) · [Before (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1782)

```diff
-     }, TH.c.prototype.getStencilOperationFail = function() {
+     }, VB.d.prototype.getStencilOperationFail = function() {
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1784` → after: `L1784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1784) · [Before (L1784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1784)

```diff
-     }, TH.c.prototype.getStencilBackOperationFail = function() {
+     }, VB.d.prototype.getStencilBackOperationFail = function() {
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1786` → after: `L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1786) · [Before (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1786)

```diff
-     }, TH.c.prototype.getStencilOperationDepthFail = function() {
+     }, VB.d.prototype.getStencilOperationDepthFail = function() {
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1788` → after: `L1788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1788) · [Before (L1788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1788)

```diff
-     }, TH.c.prototype.getStencilBackOperationDepthFail = function() {
+     }, VB.d.prototype.getStencilBackOperationDepthFail = function() {
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1790` → after: `L1790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1790) · [Before (L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1790)

```diff
-     }, TH.c.prototype.getStencilOperationPass = function() {
+     }, VB.d.prototype.getStencilOperationPass = function() {
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1792` → after: `L1792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1792) · [Before (L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1792)

```diff
-     }, TH.c.prototype.getStencilBackOperationPass = function() {
+     }, VB.d.prototype.getStencilBackOperationPass = function() {
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1794` → after: `L1794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1794) · [Before (L1794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1794)

```diff
-     }, TH.c.prototype.setStencilOperationFail = function(HH) {
+     }, VB.d.prototype.setStencilOperationFail = function(BB) {
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1796` → after: `L1796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1796) · [Before (L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1796)

```diff
-     }, TH.c.prototype.setStencilBackOperationFail = function(HH) {
+     }, VB.d.prototype.setStencilBackOperationFail = function(BB) {
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1798` → after: `L1798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1798) · [Before (L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1798)

```diff
-     }, TH.c.prototype.setStencilOperationDepthFail = function(HH) {
+     }, VB.d.prototype.setStencilOperationDepthFail = function(BB) {
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1800` → after: `L1800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1800) · [Before (L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1800)

```diff
-     }, TH.c.prototype.setStencilBackOperationDepthFail = function(HH) {
+     }, VB.d.prototype.setStencilBackOperationDepthFail = function(BB) {
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1802` → after: `L1802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1802) · [Before (L1802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1802)

```diff
-     }, TH.c.prototype.setStencilOperationPass = function(HH) {
+     }, VB.d.prototype.setStencilOperationPass = function(BB) {
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1804` → after: `L1804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1804) · [Before (L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1804)

```diff
-     }, TH.c.prototype.setStencilBackOperationPass = function(HH) {
+     }, VB.d.prototype.setStencilBackOperationPass = function(BB) {
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1806` → after: `L1806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1806) · [Before (L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1806)

```diff
-     }, TH.c.prototype.cacheStencilState = function() {
+     }, VB.d.prototype.cacheStencilState = function() {
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1808` → after: `L1808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1808) · [Before (L1808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1808)

```diff
-     }, TH.c.prototype.restoreStencilState = function() {
+     }, VB.d.prototype.restoreStencilState = function() {
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1811` → after: `L1811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1811) · [Before (L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1811)

```diff
-     LH(41328);
+     GB(41026);
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1813` → after: `L1813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1813) · [Before (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1813)

```diff
-     bH || (bH = !0, TH.c.prototype.createDepthStencilTexture = function(HH, BH, LH) {
+     fB || (fB = !0, VB.d.prototype.createDepthStencilTexture = function(BB, OB, GB) {
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1820` → after: `L1820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1820) · [Before (L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1820)

```diff
-     LH(41330), LH(41370);
+     GB(41030), GB(41079);
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1830` → after: `L1830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1830) · [Before (L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1830)

```diff
-   41113: (HH, BH, LH) => {
+   40833: (BB, OB, GB) => {
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1834-L1837` → after: `L1834-L1837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1834-L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1834-L1837) · [Before (L1834-L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1834-L1837)

```diff
-     var AH = LH(41122),
-       rH = LH(37989),
-       SH = LH(41129),
-       hH = LH(41190);
+     var YB = GB(40837),
+       DB = GB(37796),
+       QB = GB(40849),
+       oB = GB(40911);
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1913-L1917` → after: `L1913-L1917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1913-L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1913-L1917) · [Before (L1913-L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1913-L1917)

```diff
-     var CH = LH(41210),
-       EH = LH(39595),
-       XH = LH(41225),
-       GH = LH(41184),
-       YH = LH(41154);
+     var JB = GB(40920),
+       MB = GB(39366),
+       PB = GB(40938),
+       zB = GB(40905),
+       lB = GB(40870);
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1921` → after: `L1921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1921) · [Before (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1921)

```diff
-         if (!(0, YH.d)() || !document.body) return null;
+         if (!(0, lB.c)() || !document.body) return null;
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1939` → after: `L1939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1939) · [Before (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1939)

```diff
-         return QH(hH) ? hH : null
+         return qB(oB) ? oB : null
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1945` → after: `L1945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1945) · [Before (L1945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1945)

```diff
-           "undefined" !== typeof OffscreenCanvas ? BH = new OffscreenCanvas(64, 64) : (0, YH.d)() && "function" === typeof document.createElement && (BH = document.createElement("canvas"), BH.width = 64, BH.height = 64);
+           "undefined" !== typeof OffscreenCanvas ? OB = new OffscreenCanvas(64, 64) : (0, lB.c)() && "function" === typeof document.createElement && (OB = document.createElement("canvas"), OB.width = 64, OB.height = 64);
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1957` → after: `L1957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1957) · [Before (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1957)

```diff
-           return QH(hH) ? hH : null
+           return qB(oB) ? oB : null
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1992-L1995` → after: `L1992-L1995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1992-L1995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1992-L1995) · [Before (L1992-L1995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1992-L1995)

```diff
-     var MH = LH(41231),
-       xH = LH(41179),
-       vH = LH(41239),
-       PH = LH(41247);
+     var NB = GB(40950),
+       RB = GB(40899),
+       WB = GB(40958),
+       AB = GB(40965);
```

#### 217. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L1998` → after: `L1998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R1998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L1998) · [Before (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L1998)

```diff
-         return GH.c.NpmPackage
+         return zB.d.NpmPackage
```

#### 218. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2001` → after: `L2001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2001) · [Before (L2001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2001)

```diff
-         return GH.c.Version
+         return zB.d.Version
```

#### 219. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2004` → after: `L2004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2004) · [Before (L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2004)

```diff
-         return rH.d.Instances
+         return DB.b.Instances
```

#### 220. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2007` → after: `L2007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2007) · [Before (L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2007)

```diff
-         return rH.d.LastCreatedEngine
+         return DB.b.LastCreatedEngine
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2010` → after: `L2010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2010) · [Before (L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2010)

```diff
-         return rH.d.LastCreatedScene
+         return DB.b.LastCreatedScene
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2013` → after: `L2013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2013) · [Before (L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2013)

```diff
-         return GH.c.DefaultLoadingScreenFactory(HH)
+         return zB.d.DefaultLoadingScreenFactory(BB)
```

#### 223. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2026` → after: `L2026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2026) · [Before (L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2026)

```diff
-         (0, vH.e)(), (0, PH.c)(), super(HH, BH, LH, AH), this._performanceMonitor = new tH, this._drawCalls = new MH.e, HH && (this._features.supportRenderPasses = !0)
+         (0, WB.c)(), (0, AB.d)(), super(BB, OB, GB, YB), this._performanceMonitor = new jB, this._drawCalls = new NB.b, BB && (this._features.supportRenderPasses = !0)
```

#### 224. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2050` → after: `L2050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2050) · [Before (L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2050)

```diff
-             }(BH), !GH.c.audioEngine && LH.audioEngine && GH.c.AudioEngineFactory && (GH.c.audioEngine = GH.c.AudioEngineFactory(HH.getRenderingCanvas(), HH.getAudioContext(), HH.getAudioDestination())), (0, YH.d)() && (HH._onFullscreenChange = () => {
+             }(OB), !zB.d.audioEngine && GB.audioEngine && zB.d.AudioEngineFactory && (zB.d.audioEngine = zB.d.AudioEngineFactory(BB.getRenderingCanvas(), BB.getAudioContext(), BB.getAudioDestination())), (0, lB.c)() && (BB._onFullscreenChange = () => {
```

#### 225. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2054` → after: `L2054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2054) · [Before (L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2054)

```diff
-             }, document.addEventListener("pointerlockchange", HH._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", HH._onPointerLockChange, !1)), HH.enableOfflineSupport = void 0 !== GH.c.OfflineProviderFactory, HH._deterministicLockstep = !!LH.deter … [truncated]
+             }, document.addEventListener("pointerlockchange", BB._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", BB._onPointerLockChange, !1)), BB.enableOfflineSupport = void 0 !== zB.d.OfflineProviderFactory, BB._deterministicLockstep = !!GB.deter … [truncated]
```

#### 226. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2075` → after: `L2075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2075) · [Before (L2075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2075)

```diff
-               rH(`Error loading image ${SH.src}`)
+               DB(`Error loading image ${QB.src}`)
```

#### 227. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2134` → after: `L2134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2134) · [Before (L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2134)

```diff
-         this._measureFps(), super.WU()
+         this._measureFps(), super.zW()
```

#### 228. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2150` → after: `L2150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2150) · [Before (L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2150)

```diff
-         if (AH.attachShader(SH, BH), AH.attachShader(SH, LH), this.hQ > 1 && rH) {
+         if (YB.attachShader(QB, OB), YB.attachShader(QB, GB), this.Pq > 1 && DB) {
```

#### 229. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2154` → after: `L2154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2154) · [Before (L2154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2154)

```diff
-         return AH.linkProgram(SH), this.hQ > 1 && rH && this.bindTransformFeedback(null), HH.context = AH, HH.vertexShader = BH, HH.fragmentShader = LH, HH.isParallelCompiled || this._finalizePipelineContext(HH), SH
+         return YB.linkProgram(QB), this.Pq > 1 && DB && this.bindTransformFeedback(null), BB.context = YB, BB.vertexShader = OB, BB.fragmentShader = GB, BB.isParallelCompiled || this._finalizePipelineContext(BB), QB
```

#### 230. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2199-L2200` → after: `L2199-L2200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2199-L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2199-L2200) · [Before (L2199-L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2199-L2200)

```diff
-         const hH = new XH.e(HH, this._gl),
-           tH = new AH.e(this, 15, !0);
+         const oB = new PB.b(BB, this._gl),
+           jB = new YB.b(this, 15, !0);
```

#### 231. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2209` → after: `L2209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2209) · [Before (L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2209)

```diff
-           } HH._hardwareTexture = new XH.e(BH, this._gl), HH.isReady = !0, HH._cachedCoordinatesMode = null, HH._cachedWrapU = null, HH._cachedWrapV = null, HH._cachedWrapR = null, HH._cachedAnisotropicFilteringLevel = null;
+           } BB._hardwareTexture = new PB.b(OB, this._gl), BB.isReady = !0, BB._cachedCoordinatesMode = null, BB._cachedWrapU = null, BB._cachedWrapV = null, BB._cachedWrapR = null, BB._cachedAnisotropicFilteringLevel = null;
```

#### 232. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2237` → after: `L2237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2237) · [Before (L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2237)

```diff
-         if (1 === this.hQ) return void EH.e.Error("WebGL 1 does not support texture comparison.");
+         if (1 === this.Pq) return void MB.b.Error("WebGL 1 does not support texture comparison.");
```

#### 233. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2245` → after: `L2245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2245) · [Before (L2245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2245)

```diff
-         return LH.aX = HH, this.bindArrayBuffer(LH), this._gl.bufferData(this._gl.ARRAY_BUFFER, HH, this._gl.DYNAMIC_DRAW), LH.references = 1, LH
+         return GB.CP = BB, this.bindArrayBuffer(GB), this._gl.bufferData(this._gl.ARRAY_BUFFER, BB, this._gl.DYNAMIC_DRAW), GB.references = 1, GB
```

#### 234. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2255` → after: `L2255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2255) · [Before (L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2255)

```diff
-           (0, xH.f)((() => {
+           (0, RB.d)((() => {
```

#### 235. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2273` → after: `L2273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2273) · [Before (L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2273)

```diff
-             1 === rH.d.Instances.length && GH.c.audioEngine && (GH.c.audioEngine.dispose(), GH.c.audioEngine = null);
+             1 === DB.b.Instances.length && zB.d.audioEngine && (zB.d.audioEngine.dispose(), zB.d.audioEngine = null);
```

#### 236. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2275` → after: `L2275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2275) · [Before (L2275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2275)

```diff
-             LH && "function" === typeof LH.removeEventListener && (LH.removeEventListener("blur", HH._onBlur), LH.removeEventListener("focus", HH._onFocus)), BH && (BH.removeEventListener("focus", HH._onCanvasFocus), BH.removeEventListener("blur", HH._onCanvasBlur), BH.removeEven … [truncated]
+             GB && "function" === typeof GB.removeEventListener && (GB.removeEventListener("blur", BB._onBlur), GB.removeEventListener("focus", BB._onFocus)), OB && (OB.removeEventListener("focus", BB._onCanvasFocus), OB.removeEventListener("blur", BB._onCanvasBlur), OB.removeEven … [truncated]
```

#### 237. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2281` → after: `L2281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2281) · [Before (L2281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2281)

```diff
-   41271: (HH, BH, LH) => {
+   40982: (BB, OB, GB) => {
```

#### 238. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2283` → after: `L2283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2283) · [Before (L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2283)

```diff
-       d: () => rH
+       c: () => DB
```

#### 239. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2285` → after: `L2285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2285) · [Before (L2285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2285)

```diff
-     var AH = LH(41229);
+     var YB = GB(40947);
```

#### 240. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2340` → after: `L2340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2340) · [Before (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2340)

```diff
-         return BH.isCube ? 6 * LH + AH : BH.is3D ? 0 : LH
+         return OB.isCube ? 6 * GB + YB : OB.is3D ? 0 : GB
```

#### 241. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2362` → after: `L2362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2362) · [Before (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2362)

```diff
-         Array.isArray(HH) ? this._textures = HH : this._textures = HH ? [HH] : null
+         Array.isArray(BB) ? this._textures = BB : this._textures = BB ? [BB] : null
```

#### 242. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2436` → after: `L2436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2436) · [Before (L2436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2436)

```diff
-                 wtH: AH,
+                 YyB: YB,
```

#### 243. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2497` → after: `L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2497) · [Before (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2497)

```diff
-   41713: (HH, BH, LH) => {
+   41434: (BB, OB, GB) => {
```

#### 244. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2499` → after: `L2499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2499) · [Before (L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2499)

```diff
-       d: () => AH
+       c: () => YB
```

#### 245. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2529` → after: `L2529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2529) · [Before (L2529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2529)

```diff
-   41372: (HH, BH, LH) => {
+   41081: (BB, OB, GB) => {
```

#### 246. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2531` → after: `L2531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2531) · [Before (L2531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2531)

```diff
-       c: () => hH
+       b: () => oB
```

#### 247. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2533` → after: `L2533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2533) · [Before (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2533)

```diff
-     var AH = LH(39595);
+     var YB = GB(39366);
```

#### 248. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2539` → after: `L2539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2539) · [Before (L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2539)

```diff
-       })(HH) && AH.e.Warn(`Extension with the name '${HH}' already exists`), rH.set(HH, BH)
+       })(BB) && YB.b.Warn(`Extension with the name '${BB}' already exists`), DB.set(BB, OB)
```

#### 249. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2543` → after: `L2543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2543) · [Before (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2543)

```diff
-       "image/ktx" !== BH && "image/ktx2" !== BH || (HH = ".ktx"), rH.has(HH) || (HH.endsWith(".ies") && SH(".ies", (async () => await LH.e(618).then((() => LH(45251))).then((HH => new HH._IESTextureLoader)))), HH.endsWith(".dds") && SH(".dds", (async () => await LH.e(616).then((( … [truncated]
+       "image/ktx" !== OB && "image/ktx2" !== OB || (BB = ".ktx"), DB.has(BB) || (BB.endsWith(".ies") && QB(".ies", (async () => await GB.e(618).then((() => GB(44911))).then((BB => new BB._IESTextureLoader)))), BB.endsWith(".dds") && QB(".dds", (async () => await GB.e(616).then((( … [truncated]
```

#### 250. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2548` → after: `L2548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2548) · [Before (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2548)

```diff
-   41742: (HH, BH, LH) => {
+   41446: (BB, OB, GB) => {
```

#### 251. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2550-L2551` → after: `L2550-L2551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2550-L2551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2550-L2551) · [Before (L2550-L2551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2550-L2551)

```diff
-       c: () => hH,
-       g: () => CH
+       d: () => oB,
+       f: () => JB
```

#### 252. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2553-L2557` → after: `L2553-L2557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2553-L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2553-L2557) · [Before (L2553-L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2553-L2557)

```diff
-     var AH = LH(41573),
-       rH = LH(41326),
-       SH = LH(38012);
-     class hH extends AH.c {
-       get BBH() {
+     var YB = GB(41283),
+       DB = GB(41024),
+       QB = GB(37823);
+     class oB extends YB.b {
+       get jOB() {
```

#### 253. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2560` → after: `L2560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2560) · [Before (L2560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2560)

```diff
-       set BBH(HH) {
+       set jOB(BB) {
```

#### 254. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2564` → after: `L2564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2564) · [Before (L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2564)

```diff
-         return this.BBH
+         return this.jOB
```

#### 255. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2567` → after: `L2567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2567) · [Before (L2567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2567)

```diff
-         super(HH, BH, !0), this._waitingSubMaterialsUniqueIds = [], this.yN().addMultiMaterial(this), this.BBH = [], this._storeEffectOnSubMeshes = !0
+         super(BB, OB, !0), this._waitingSubMaterialsUniqueIds = [], this.JF().addMultiMaterial(this), this.jOB = [], this._storeEffectOnSubMeshes = !0
```

#### 256. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2584` → after: `L2584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2584) · [Before (L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2584)

```diff
-         return HH < 0 || HH >= this.BBH.length ? this.yN().defaultMaterial : this.BBH[HH]
+         return BB < 0 || BB >= this.jOB.length ? this.JF().defaultMaterial : this.jOB[BB]
```

#### 257. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2587` → after: `L2587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2587) · [Before (L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2587)

```diff
-         return super.getActiveTextures().concat(...this.BBH.map((HH => HH ? HH.getActiveTextures() : [])))
+         return super.getActiveTextures().concat(...this.jOB.map((BB => BB ? BB.getActiveTextures() : [])))
```

#### 258. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2591-L2592` → after: `L2591-L2592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2591-L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2591-L2592) · [Before (L2591-L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2591-L2592)

```diff
-         for (let BH = 0; BH < this.BBH.length; BH++)
-           if (this.BBH[BH]?.hasTexture(HH)) return !0;
+         for (let OB = 0; OB < this.jOB.length; OB++)
+           if (this.jOB[OB]?.hasTexture(BB)) return !0;
```

#### 259. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2599-L2600` → after: `L2599-L2600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2599-L2600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2599-L2600) · [Before (L2599-L2600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2599-L2600)

```diff
-         for (let AH = 0; AH < this.BBH.length; AH++) {
-           const rH = this.BBH[AH];
+         for (let YB = 0; YB < this.jOB.length; YB++) {
+           const DB = this.jOB[YB];
```

#### 260. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2612-L2613` → after: `L2612-L2613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2612-L2613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2612-L2613) · [Before (L2612-L2613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2612-L2613)

```diff
-         const LH = new hH(HH, this.yN());
-         for (let AH = 0; AH < this.BBH.length; AH++) {
+         const GB = new oB(BB, this.JF());
+         for (let YB = 0; YB < this.jOB.length; YB++) {
```

#### 261. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2615-L2616` → after: `L2615-L2616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2615-L2616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2615-L2616) · [Before (L2615-L2616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2615-L2616)

```diff
-           const SH = this.BBH[AH];
-           rH = BH && SH ? SH.clone(HH + "-" + SH.name) : this.BBH[AH], LH.BBH.push(rH)
+           const QB = this.jOB[YB];
+           DB = OB && QB ? QB.clone(BB + "-" + QB.name) : this.jOB[YB], GB.jOB.push(DB)
```

#### 262. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2622-L2624` → after: `L2622-L2624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2622-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2622-L2624) · [Before (L2622-L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2622-L2624)

```diff
-         HH.name = this.name, HH.id = this.id, HH.uniqueId = this.uniqueId, rH.b && (HH.tags = rH.b.GetTags(this)), HH.materialsUniqueIds = [], HH.materials = [];
-         for (let BH = 0; BH < this.BBH.length; BH++) {
-           const LH = this.BBH[BH];
+         BB.name = this.name, BB.id = this.id, BB.uniqueId = this.uniqueId, DB.e && (BB.tags = DB.e.GetTags(this)), BB.materialsUniqueIds = [], BB.materials = [];
+         for (let OB = 0; OB < this.jOB.length; OB++) {
+           const GB = this.jOB[OB];
```

#### 263. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2630` → after: `L2630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2630) · [Before (L2630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2630)

```diff
-         const AH = this.yN();
+         const YB = this.JF();
```

#### 264. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2633-L2634` → after: `L2633-L2634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2633-L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2633-L2634) · [Before (L2633-L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2633-L2634)

```diff
-           for (let SH = 0; SH < this.BBH.length; SH++) {
-             const LH = this.BBH[SH];
+           for (let QB = 0; QB < this.jOB.length; QB++) {
+             const GB = this.jOB[QB];
```

#### 265. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2645` → after: `L2645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2645) · [Before (L2645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2645)

```diff
-       if (LH.id = HH.id, LH._loadedUniqueId = HH.uniqueId, rH.b && rH.b.AddTagsTo(LH, HH.tags), HH.materialsUniqueIds) LH._waitingSubMaterialsUniqueIds = HH.materialsUniqueIds;
+       if (GB.id = BB.id, GB._loadedUniqueId = BB.uniqueId, DB.e && DB.e.AddTagsTo(GB, BB.tags), BB.materialsUniqueIds) GB._waitingSubMaterialsUniqueIds = BB.materialsUniqueIds;
```

#### 266. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2647` → after: `L2647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2647) · [Before (L2647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2647)

```diff
-         for (const AH of HH.materials) LH.BBH.push(BH.getLastMaterialById(AH));
+         for (const YB of BB.materials) GB.jOB.push(OB.getLastMaterialById(YB));
```

#### 267. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2655` → after: `L2655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2655) · [Before (L2655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2655)

```diff
-   41504: (HH, BH, LH) => {
+   41226: (BB, OB, GB) => {
```

#### 268. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2657` → after: `L2657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2657) · [Before (L2657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2657)

```diff
-       d: () => hH
+       c: () => oB
```

#### 269. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2659` → after: `L2659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2659) · [Before (L2659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2659)

```diff
-     var AH, rH, SH = LH(37963);
+     var YB, DB, QB = GB(37778);
```

#### 270. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2664` → after: `L2664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2664) · [Before (L2664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2664)

```diff
-     hH.X = new SH.o(1, 0, 0), hH.Y = new SH.o(0, 1, 0), hH.Z = new SH.o(0, 0, 1),
+     oB.X = new QB.r(1, 0, 0), oB.Y = new QB.r(0, 1, 0), oB.Z = new QB.r(0, 0, 1),
```

#### 271. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2669` → after: `L2669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2669) · [Before (L2669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2669)

```diff
-   41275: (HH, BH, LH) => {
+   40985: (BB, OB, GB) => {
```

#### 272. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2671-L2672` → after: `L2671-L2672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2671-L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2671-L2672) · [Before (L2671-L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2671-L2672)

```diff
-       e: () => zH,
-       g: () => CH
+       c: () => yB,
+       f: () => JB
```

#### 273. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2674` → after: `L2674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2674) · [Before (L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2674)

```diff
-     var AH = LH(37963);
+     var YB = GB(37778);
```

#### 274. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2681` → after: `L2681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2681) · [Before (L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2681)

```diff
-         this.preScaled = !1, this.l00 = AH.o.Zero(), this.l1_1 = AH.o.Zero(), this.l10 = AH.o.Zero(), this.l11 = AH.o.Zero(), this.l2_2 = AH.o.Zero(), this.l2_1 = AH.o.Zero(), this.l20 = AH.o.Zero(), this.l21 = AH.o.Zero(), this.l22 = AH.o.Zero()
+         this.preScaled = !1, this.l00 = YB.r.Zero(), this.l1_1 = YB.r.Zero(), this.l10 = YB.r.Zero(), this.l11 = YB.r.Zero(), this.l2_2 = YB.r.Zero(), this.l2_1 = YB.r.Zero(), this.l20 = YB.r.Zero(), this.l21 = YB.r.Zero(), this.l22 = YB.r.Zero()
```

#### 275. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2684-L2687` → after: `L2684-L2687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2684-L2687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2684-L2687) · [Before (L2684-L2687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2684-L2687)

```diff
-         AH.l.lu[0].set(BH.r, BH.g, BH.b);
-         const rH = AH.l.lu[0],
-           SH = AH.l.lu[1];
-         rH.scaleToRef(LH, SH), SH.scaleToRef(hH(0, HH), AH.l.lu[2]), this.l00.addInPlace(AH.l.lu[2]), SH.scaleToRef(hH(1, HH), AH.l.lu[2]), this.l1_1.addInPlace(AH.l.lu[2]), SH.scaleToRef(hH(2, HH), AH.l.lu[2]), this.l10.addInPlace(AH.l.lu[2]), SH.scaleToRef(hH(3, HH), AH.l.lu[2] … [truncated]
+         YB.k.Xp[0].set(OB.r, OB.g, OB.b);
+         const DB = YB.k.Xp[0],
+           QB = YB.k.Xp[1];
+         DB.scaleToRef(GB, QB), QB.scaleToRef(oB(0, BB), YB.k.Xp[2]), this.l00.addInPlace(YB.k.Xp[2]), QB.scaleToRef(oB(1, BB), YB.k.Xp[2]), this.l1_1.addInPlace(YB.k.Xp[2]), QB.scaleToRef(oB(2, BB), YB.k.Xp[2]), this.l10.addInPlace(YB.k.Xp[2]), QB.scaleToRef(oB(3, BB), YB.k.Xp[2] … [truncated]
```

#### 276. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2702` → after: `L2702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2702) · [Before (L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2702)

```diff
-         return AH.o.FromArrayToRef(HH[0], 0, this.l00), AH.o.FromArrayToRef(HH[1], 0, this.l1_1), AH.o.FromArrayToRef(HH[2], 0, this.l10), AH.o.FromArrayToRef(HH[3], 0, this.l11), AH.o.FromArrayToRef(HH[4], 0, this.l2_2), AH.o.FromArrayToRef(HH[5], 0, this.l2_1), AH.o.FromArrayTo … [truncated]
+         return YB.r.FromArrayToRef(BB[0], 0, this.l00), YB.r.FromArrayToRef(BB[1], 0, this.l1_1), YB.r.FromArrayToRef(BB[2], 0, this.l10), YB.r.FromArrayToRef(BB[3], 0, this.l11), YB.r.FromArrayToRef(BB[4], 0, this.l2_2), YB.r.FromArrayToRef(BB[5], 0, this.l2_1), YB.r.FromArrayTo … [truncated]
```

#### 277. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2705` → after: `L2705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2705) · [Before (L2705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2705)

```diff
-         return AH.o.FromFloatsToRef(HH[0], HH[1], HH[2], this.l00), AH.o.FromFloatsToRef(HH[3], HH[4], HH[5], this.l1_1), AH.o.FromFloatsToRef(HH[6], HH[7], HH[8], this.l10), AH.o.FromFloatsToRef(HH[9], HH[10], HH[11], this.l11), AH.o.FromFloatsToRef(HH[12], HH[13], HH[14], this. … [truncated]
+         return YB.r.FromFloatsToRef(BB[0], BB[1], BB[2], this.l00), YB.r.FromFloatsToRef(BB[3], BB[4], BB[5], this.l1_1), YB.r.FromFloatsToRef(BB[6], BB[7], BB[8], this.l10), YB.r.FromFloatsToRef(BB[9], BB[10], BB[11], this.l11), YB.r.FromFloatsToRef(BB[12], BB[13], BB[14], this. … [truncated]
```

#### 278. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2717` → after: `L2717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2717) · [Before (L2717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2717)

```diff
-         this.x = AH.o.Zero(), this.y = AH.o.Zero(), this.z = AH.o.Zero(), this.xx = AH.o.Zero(), this.yy = AH.o.Zero(), this.zz = AH.o.Zero(), this.xy = AH.o.Zero(), this.yz = AH.o.Zero(), this.zx = AH.o.Zero()
+         this.x = YB.r.Zero(), this.y = YB.r.Zero(), this.z = YB.r.Zero(), this.xx = YB.r.Zero(), this.yy = YB.r.Zero(), this.zz = YB.r.Zero(), this.xy = YB.r.Zero(), this.yz = YB.r.Zero(), this.zx = YB.r.Zero()
```

#### 279. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2723-L2724` → after: `L2723-L2724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2723-L2724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2723-L2724) · [Before (L2723-L2724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2723-L2724)

```diff
-         AH.l.lu[0].SBH(HH.r, HH.g, HH.b);
-         const BH = AH.l.lu[0];
+         YB.k.Xp[0].zOB(BB.r, BB.g, BB.b);
+         const OB = YB.k.Xp[0];
```

#### 280. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2731` → after: `L2731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2731) · [Before (L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2731)

```diff
-         return this._harmonics = HH, this.x.Tm(HH.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.Tm(HH.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.Tm(HH.l10), this.z.scaleInPlace(1.02333), this.xx.Tm(HH.l00), AH.l.lu[0].Tm(HH.l20).scaleInPlace(.24770 … [truncated]
+         return this._harmonics = BB, this.x.IU(BB.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.IU(BB.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.IU(BB.l10), this.z.scaleInPlace(1.02333), this.xx.IU(BB.l00), YB.k.Xp[0].IU(BB.l20).scaleInPlace(.24770 … [truncated]
```

#### 281. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2738` → after: `L2738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2738) · [Before (L2738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2738)

```diff
-         return AH.o.FromArrayToRef(HH[0], 0, BH.x), AH.o.FromArrayToRef(HH[1], 0, BH.y), AH.o.FromArrayToRef(HH[2], 0, BH.z), AH.o.FromArrayToRef(HH[3], 0, BH.xx), AH.o.FromArrayToRef(HH[4], 0, BH.yy), AH.o.FromArrayToRef(HH[5], 0, BH.zz), AH.o.FromArrayToRef(HH[6], 0, BH.yz), AH … [truncated]
+         return YB.r.FromArrayToRef(BB[0], 0, OB.x), YB.r.FromArrayToRef(BB[1], 0, OB.y), YB.r.FromArrayToRef(BB[2], 0, OB.z), YB.r.FromArrayToRef(BB[3], 0, OB.xx), YB.r.FromArrayToRef(BB[4], 0, OB.yy), YB.r.FromArrayToRef(BB[5], 0, OB.zz), YB.r.FromArrayToRef(BB[6], 0, OB.yz), YB … [truncated]
```

#### 282. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2742` → after: `L2742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2742) · [Before (L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2742)

```diff
-   41730: (HH, BH, LH) => {
+   41442: (BB, OB, GB) => {
```

#### 283. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2745` → after: `L2745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2745) · [Before (L2745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2745)

```diff
-       d: () => cH
+       g: () => iB
```

#### 284. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2747-L2755` → after: `L2747-L2755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2747-L2755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2747-L2755) · [Before (L2747-L2755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2747-L2755)

```diff
-     var AH = LH(41290),
-       rH = LH(37997),
-       SH = LH(37963),
-       hH = LH(41427),
-       tH = LH(41703),
-       zH = LH(41738),
-       CH = LH(41420),
-       EH = LH(41588),
-       XH = LH(41416);
+     var YB = GB(40998),
+       DB = GB(37802),
+       QB = GB(37778),
+       oB = GB(41150),
+       jB = GB(41423),
+       yB = GB(41444),
+       JB = GB(41145),
+       MB = GB(41300),
+       PB = GB(41136);
```

#### 285. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2758` → after: `L2758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2758) · [Before (L2758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2758)

```diff
-         this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new SH.o(0, 0, 0), this._diffPositionForCollisions = new SH.o(0, 0, 0), this._collisionResponse = !0
+         this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new QB.r(0, 0, 0), this._diffPositionForCollisions = new QB.r(0, 0, 0), this._collisionResponse = !0
```

#### 286. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2761-L2770` → after: `L2761-L2770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2761-L2770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2761-L2770) · [Before (L2761-L2770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2761-L2770)

```diff
-     var YH, uH, QH, WH = LH(41169),
-       MH = LH(41364),
-       xH = LH(41602),
-       vH = LH(38074),
-       PH = LH(37972),
-       TH = LH(41504),
-       UH = LH(39595),
-       VH = LH(41297),
-       OH = LH(41184),
-       bH = LH(38012);
+     var lB, pB, qB, ZB = GB(40890),
+       NB = GB(41071),
+       RB = GB(41315),
+       WB = GB(37894),
+       AB = GB(37782),
+       VB = GB(41226),
+       SB = GB(39366),
+       nB = GB(41004),
+       UB = GB(40905),
+       fB = GB(37823);
```

#### 287. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2777` → after: `L2777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2777) · [Before (L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2777)

```diff
-       HH instanceof Float32Array ? SH.e.FromArrayToRef(HH, BH, LH) : LH.SBH((0, MH.d)(HH[BH]), (0, MH.d)(HH[BH + 1]), (0, MH.d)(HH[BH + 2]), (0, MH.d)(HH[BH + 3]), (0, MH.d)(HH[BH + 4]), (0, MH.d)(HH[BH + 5]), (0, MH.d)(HH[BH + 6]), (0, MH.d)(HH[BH + 7]), (0, MH.d)(HH[BH + 8]), ( … [truncated]
+       BB instanceof Float32Array ? QB.d.FromArrayToRef(BB, OB, GB) : GB.zOB((0, NB.e)(BB[OB]), (0, NB.e)(BB[OB + 1]), (0, NB.e)(BB[OB + 2]), (0, NB.e)(BB[OB + 3]), (0, NB.e)(BB[OB + 4]), (0, NB.e)(BB[OB + 5]), (0, NB.e)(BB[OB + 6]), (0, NB.e)(BB[OB + 7]), (0, NB.e)(BB[OB + 8]), ( … [truncated]
```

#### 288. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2784` → after: `L2784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2784) · [Before (L2784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2784)

```diff
-       if (!(YH instanceof Float32Array) && !(YH instanceof Uint16Array)) return UH.e.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
+       if (!(lB instanceof Float32Array) && !(lB instanceof Uint16Array)) return SB.b.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
```

#### 289. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2794-L2797` → after: `L2794-L2797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2794-L2797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2794-L2797) · [Before (L2794-L2797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2794-L2797)

```diff
-       if (!isFinite(QH) || QH < 0 || QH >= uH.height) return UH.e.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
-       const WH = SH.l.lu[0],
-         MH = SH.l.Matrix[0],
-         xH = SH.l.Matrix[1],
+       if (!isFinite(qB) || qB < 0 || qB >= pB.height) return SB.b.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
+       const ZB = QB.k.Xp[0],
+         NB = QB.k.Matrix[0],
+         RB = QB.k.Matrix[1],
```

#### 290. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2799` → after: `L2799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2799) · [Before (L2799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2799)

```diff
-         PH = BH === hH.i.NormalKind ? SH.o.TransformNormalFromFloatsToRef : SH.o.TransformCoordinatesFromFloatsToRef;
+         AB = OB === oB.h.NormalKind ? QB.r.TransformNormalFromFloatsToRef : QB.r.TransformCoordinatesFromFloatsToRef;
```

#### 291. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2811` → after: `L2811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2811) · [Before (L2811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2811)

```diff
-         this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = SH.o.Zero(), this.subDiv = {
+         this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = QB.r.Zero(), this.subDiv = {
```

#### 292. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2826` → after: `L2826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2826) · [Before (L2826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2826)

```diff
-         let BH, GH = zH.e,
+         let OB, zB = yB.h,
```

#### 293. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2830` → after: `L2830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2830) · [Before (L2830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2830)

```diff
-             return zH.e.BILLBOARDMODE_NONE
+             return yB.h.BILLBOARDMODE_NONE
```

#### 294. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2833` → after: `L2833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2833) · [Before (L2833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2833)

```diff
-             return zH.e.BILLBOARDMODE_X
+             return yB.h.BILLBOARDMODE_X
```

#### 295. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2836` → after: `L2836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2836) · [Before (L2836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2836)

```diff
-             return zH.e.BILLBOARDMODE_Y
+             return yB.h.BILLBOARDMODE_Y
```

#### 296. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2839` → after: `L2839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2839) · [Before (L2839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2839)

```diff
-             return zH.e.BILLBOARDMODE_Z
+             return yB.h.BILLBOARDMODE_Z
```

#### 297. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2842` → after: `L2842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2842) · [Before (L2842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2842)

```diff
-             return zH.e.BILLBOARDMODE_ALL
+             return yB.h.BILLBOARDMODE_ALL
```

#### 298. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2845` → after: `L2845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2845) · [Before (L2845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2845)

```diff
-             return zH.e.BILLBOARDMODE_USE_POSITION
+             return yB.h.BILLBOARDMODE_USE_POSITION
```

#### 299. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L2947` → after: `L2947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R2947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L2947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L2947) · [Before (L2947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L2947)

```diff
-             this._internalAbstractMeshDataInfo._material !== HH && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDa … [truncated]
+             this._internalAbstractMeshDataInfo._material !== BB && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDa … [truncated]
```

#### 300. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3042` → after: `L3042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3042) · [Before (L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3042)

```diff
-             switch (super(BH, AH, !1), LH = this, this._internalAbstractMeshDataInfo = new fH, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = HH.CULLINGSTRATEGY … [truncated]
+             switch (super(OB, YB, !1), GB = this, this._internalAbstractMeshDataInfo = new mB, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = BB.CULLINGSTRATEGY … [truncated]
```

#### 301. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3045-L3046` → after: `L3045-L3046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3045-L3046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3045-L3046) · [Before (L3045-L3046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3045-L3046)

```diff
-                 oR: null
-               }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new rH.d, this._onCollisionPositionChange = function(HH, BH) {
+                 mF: null
+               }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new DB.b, this._onCollisionPositionChange = function(BB, OB) {
```

#### 302. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3048-L3049` → after: `L3048-L3049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3048-L3049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3048-L3049) · [Before (L3048-L3049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3048-L3049)

```diff
-                 BH.subtractToRef(LH._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, LH._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), LH._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() … [truncated]
-               }, AH = this.yN(), this.layerMask = AH.defaultRenderableLayerMask, AH.QrH(this), this._resyncLightSources(), this._uniformBuffer = new XH.c(this.yN().Iu(), void 0, void 0, BH, !this.yN().Iu().isWebGPU), this._buildUniformLayout(), AH.performancePriority) {
+                 OB.subtractToRef(GB._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, GB._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), GB._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() … [truncated]
+               }, YB = this.JF(), this.layerMask = YB.defaultRenderableLayerMask, YB.UDB(this), this._resyncLightSources(), this._uniformBuffer = new PB.d(this.JF().Lp(), void 0, void 0, OB, !this.JF().Lp().isWebGPU), this._buildUniformLayout(), YB.performancePriority) {
```

#### 303. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3051` → after: `L3051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3051) · [Before (L3051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3051)

```diff
-                 this.cu = !0;
+                 this.Ep = !0;
```

#### 304. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3053` → after: `L3053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3053) · [Before (L3053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3053)

```diff
-                 this.fu = !0, this.jQ = !1
+                 this.rp = !0, this.bq = !1
```

#### 305. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3061` → after: `L3061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3061) · [Before (L3061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3061)

```diff
-             BH.wHH("world", HH), BH.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), BH.update()
+             OB.TBB("world", BB), OB.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), OB.update()
```

#### 306. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3074` → after: `L3074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3074) · [Before (L3074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3074)

```diff
-             BH += ", # of submeshes: " + (this.jU ? this.jU.length : 0);
+             OB += ", # of submeshes: " + (this.iW ? this.iW.length : 0);
```

#### 307. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3076` → after: `L3076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3076) · [Before (L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3076)

```diff
-             return LH && (BH += ", skeleton: " + LH.name), HH && (BH += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], BH += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.oR ? "YES" : "NO")), BH
+             return GB && (OB += ", skeleton: " + GB.name), BB && (OB += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], OB += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.mF ? "YES" : "NO")), OB
```

#### 308. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3079` → after: `L3079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3079) · [Before (L3079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3079)

```diff
-             return this._masterMesh && this.billboardMode !== zH.e.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
+             return this._masterMesh && this.billboardMode !== yB.h.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
```

#### 309. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3091-L3092` → after: `L3091-L3092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3091-L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3091-L3092) · [Before (L3091-L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3091-L3092)

```diff
-             if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.jU) {
-               for (const HH of this.jU) HH._rebuild();
+             if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.iW) {
+               for (const BB of this.iW) BB._rebuild();
```

#### 310. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3098` → after: `L3098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3098) · [Before (L3098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3098)

```diff
-             for (const HH of this.yN().lights) HH.isEnabled() && HH.canAffectMesh(this) && this._lightSources.push(HH);
+             for (const BB of this.JF().lights) BB.isEnabled() && BB.canAffectMesh(this) && this._lightSources.push(BB);
```

#### 311. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3115` → after: `L3115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3115) · [Before (L3115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3115)

```diff
-             for (const HH of this.jU) HH.setEffect(null)
+             for (const BB of this.iW) BB.setEffect(null)
```

#### 312. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3121-L3122` → after: `L3121-L3122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3121-L3122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3121-L3122) · [Before (L3121-L3122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3121-L3122)

```diff
-             if (this.jU)
-               for (const BH of this.jU)
+             if (this.iW)
+               for (const OB of this.iW)
```

#### 313. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3138-L3139` → after: `L3138-L3139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3138-L3139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3138-L3139) · [Before (L3138-L3139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3138-L3139)

```diff
-           dLH(HH) {
-             return this._currentRenderId = Number.MAX_VALUE, super.dLH(HH), this._isDirty = !0, this
+           DYB(BB) {
+             return this._currentRenderId = Number.MAX_VALUE, super.DYB(BB), this._isDirty = !0, this
```

#### 314. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3143-L3144` → after: `L3143-L3144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3143-L3144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3143-L3144) · [Before (L3143-L3144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3143-L3144)

```diff
-             if (this.jU)
-               for (const LH of this.jU) LH.resetDrawCache(HH, BH)
+             if (this.iW)
+               for (const GB of this.iW) GB.resetDrawCache(BB, OB)
```

#### 315. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3158` → after: `L3158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3158) · [Before (L3158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3158)

```diff
-           vrH() {
+           KDB() {
```

#### 316. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3177` → after: `L3177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3177) · [Before (L3177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3177)

```diff
-             return this._masterMesh ? this._masterMesh.jF() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
+             return this._masterMesh ? this._masterMesh.Gw() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
```

#### 317. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3180` → after: `L3180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3180) · [Before (L3180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3180)

```diff
-             return this.rawBoundingInfo ?? this.jF()
+             return this.rawBoundingInfo ?? this.Gw()
```

#### 318. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3189` → after: `L3189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3189) · [Before (L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3189)

```diff
-             return this._boundingInfo = new EH.d(HH, BH, LH), this._boundingInfo
+             return this._boundingInfo = new MB.e(BB, OB, GB), this._boundingInfo
```

#### 319. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3198` → after: `L3198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3198) · [Before (L3198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3198)

```diff
-             return this.skeleton && this.yN().skeletonsEnabled && this.isVerticesDataPresent(hH.i.MatricesIndicesKind) && this.isVerticesDataPresent(hH.i.MatricesWeightsKind)
+             return this.skeleton && this.JF().skeletonsEnabled && this.isVerticesDataPresent(oB.h.MatricesIndicesKind) && this.isVerticesDataPresent(oB.h.MatricesWeightsKind)
```

#### 320. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3209` → after: `L3209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3209) · [Before (L3209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3209)

```diff
-             return this._masterMesh && this.billboardMode === zH.e.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
+             return this._masterMesh && this.billboardMode === yB.h.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
```

#### 321. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3217` → after: `L3217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3217) · [Before (L3217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3217)

```diff
-           get ESH() {
+           get WQB() {
```

#### 322. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3227` → after: `L3227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3227) · [Before (L3227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3227)

```diff
-             const AH = new SH.e;
+             const YB = new QB.d;
```

#### 323. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3229` → after: `L3229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3229) · [Before (L3229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3229)

```diff
-             const rH = SH.o.Zero(),
+             const DB = QB.r.Zero(),
```

#### 324. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3231` → after: `L3231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3231) · [Before (L3231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3231)

```diff
-             return SH.o.TransformCoordinatesFromFloatsToRef(HH * hH, BH, LH * hH, AH, rH), rH
+             return QB.r.TransformCoordinatesFromFloatsToRef(BB * oB, OB, GB * oB, YB, DB), DB
```

#### 325. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3238` → after: `L3238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3238) · [Before (L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3238)

```diff
-             return new SH.o(HH * AH, BH, LH * AH)
+             return new QB.r(BB * YB, OB, GB * YB)
```

#### 326. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3242-L3243` → after: `L3242-L3243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3242-L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3242-L3243) · [Before (L3242-L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3242-L3243)

```diff
-               const LH = (0, xH.f)(HH, 0, this.getTotalVertices(), BH);
-               this._boundingInfo ? this._boundingInfo.reConstruct(LH.minimum, LH.maximum) : this._boundingInfo = new EH.d(LH.minimum, LH.maximum)
+               const GB = (0, RB.g)(BB, 0, this.getTotalVertices(), OB);
+               this._boundingInfo ? this._boundingInfo.reConstruct(GB.minimum, GB.maximum) : this._boundingInfo = new MB.e(GB.minimum, GB.maximum)
```

#### 327. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3245-L3246` → after: `L3245-L3246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3245-L3246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3245-L3246) · [Before (L3245-L3246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3245-L3246)

```diff
-             if (this.jU)
-               for (let LH = 0; LH < this.jU.length; LH++) this.jU[LH].refreshBoundingInfo(HH);
+             if (this.iW)
+               for (let GB = 0; GB < this.iW.length; GB++) this.iW[GB].refreshBoundingInfo(BB);
```

#### 328. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3250-L3251` → after: `L3250-L3251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3250-L3251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3250-L3251) · [Before (L3250-L3251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3250-L3251)

```diff
-             if (this._boundingInfo ? this._boundingInfo.reConstruct(HH.minimum, HH.maximum) : this._boundingInfo = new EH.d(HH.minimum, HH.maximum), this.jU)
-               for (let BH = 0; BH < this.jU.length; BH++) this.jU[BH].refreshBoundingInfo(null);
+             if (this._boundingInfo ? this._boundingInfo.reConstruct(BB.minimum, BB.maximum) : this._boundingInfo = new MB.e(BB.minimum, BB.maximum), this.iW)
+               for (let OB = 0; OB < this.iW.length; OB++) this.iW[OB].refreshBoundingInfo(null);
```

#### 329. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3256-L3259` → after: `L3256-L3259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3256-L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3256-L3259) · [Before (L3256-L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3256-L3259)

```diff
-               const CH = SH.l.lu[0],
-                 EH = SH.l.Matrix[0],
-                 XH = SH.l.Matrix[1],
-                 GH = BH === hH.i.NormalKind ? SH.o.TransformNormalFromFloatsToRef : SH.o.TransformCoordinatesFromFloatsToRef;
+               const JB = QB.k.Xp[0],
+                 MB = QB.k.Matrix[0],
+                 PB = QB.k.Matrix[1],
+                 zB = OB === oB.h.NormalKind ? QB.r.TransformNormalFromFloatsToRef : QB.r.TransformCoordinatesFromFloatsToRef;
```

#### 330. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3262` → after: `L3262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3262) · [Before (L3262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3262)

```diff
-                 for (EH.reset(), BH = 0; BH < 4; BH++) uH = rH[YH + BH], uH > 0 && (SH.e.FromFloat32ArrayToRefScaled(LH, Math.floor(16 * AH[YH + BH]), uH, XH), EH.addToSelf(XH));
+                 for (MB.reset(), OB = 0; OB < 4; OB++) pB = DB[lB + OB], pB > 0 && (QB.d.FromFloat32ArrayToRefScaled(GB, Math.floor(16 * YB[lB + OB]), pB, PB), MB.addToSelf(PB));
```

#### 331. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3264` → after: `L3264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3264) · [Before (L3264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3264)

```diff
-                   for (BH = 0; BH < 4; BH++) uH = zH[YH + BH], uH > 0 && (SH.e.FromFloat32ArrayToRefScaled(LH, Math.floor(16 * tH[YH + BH]), uH, XH), EH.addToSelf(XH));
+                   for (OB = 0; OB < 4; OB++) pB = yB[lB + OB], pB > 0 && (QB.d.FromFloat32ArrayToRefScaled(GB, Math.floor(16 * jB[lB + OB]), pB, PB), MB.addToSelf(PB));
```

#### 332. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3270` → after: `L3270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3270) · [Before (L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3270)

```diff
-             let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hH.i.PositionKind;
+             let YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : oB.h.PositionKind;
```

#### 333. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3283` → after: `L3283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3283) · [Before (L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3283)

```diff
-                 case hH.i.PositionKind:
+                 case oB.h.PositionKind:
```

#### 334. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3286` → after: `L3286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3286) · [Before (L3286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3286)

```diff
-                 case hH.i.NormalKind:
+                 case oB.h.NormalKind:
```

#### 335. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3289` → after: `L3289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3289) · [Before (L3289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3289)

```diff
-                 case hH.i.TangentKind:
+                 case oB.h.TangentKind:
```

#### 336. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3292` → after: `L3292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3292) · [Before (L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3292)

```diff
-                 case hH.i.UVKind:
+                 case oB.h.UVKind:
```

#### 337. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3295` → after: `L3295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3295) · [Before (L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3295)

```diff
-                 case hH.i.UV2Kind:
+                 case oB.h.UV2Kind:
```

#### 338. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3298` → after: `L3298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3298) · [Before (L3298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3298)

```diff
-                 case hH.i.ColorKind:
+                 case oB.h.ColorKind:
```

#### 339. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3320-L3321` → after: `L3320-L3321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3320-L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3320-L3321) · [Before (L3320-L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3320-L3321)

```diff
-               const HH = tH(hH.i.MatricesIndicesKind),
-                 rH = tH(hH.i.MatricesWeightsKind);
+               const BB = jB(oB.h.MatricesIndicesKind),
+                 DB = jB(oB.h.MatricesWeightsKind);
```

#### 340. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3324-L3325` → after: `L3324-L3325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3324-L3325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3324-L3325) · [Before (L3324-L3325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3324-L3325)

```diff
-                   EH = SH ? tH(hH.i.MatricesIndicesExtraKind) : null,
-                   XH = SH ? tH(hH.i.MatricesWeightsExtraKind) : null;
+                   MB = QB ? jB(oB.h.MatricesIndicesExtraKind) : null,
+                   PB = QB ? jB(oB.h.MatricesWeightsExtraKind) : null;
```

#### 341. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3330-L3331` → after: `L3330-L3331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3330-L3331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3330-L3331) · [Before (L3330-L3331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3330-L3331)

```diff
-               const BH = tH(hH.i.MatricesIndicesKind),
-                 rH = tH(hH.i.MatricesWeightsKind);
+               const OB = jB(oB.h.MatricesIndicesKind),
+                 DB = jB(oB.h.MatricesWeightsKind);
```

#### 342. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3334-L3335` → after: `L3334-L3335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3334-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3334-L3335) · [Before (L3334-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3334-L3335)

```diff
-                   zH = SH ? tH(hH.i.MatricesIndicesExtraKind) : null,
-                   CH = SH ? tH(hH.i.MatricesWeightsExtraKind) : null,
+                   yB = QB ? jB(oB.h.MatricesIndicesExtraKind) : null,
+                   JB = QB ? jB(oB.h.MatricesWeightsExtraKind) : null,
```

#### 343. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3340` → after: `L3340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3340) · [Before (L3340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3340)

```diff
-             if (!1 !== BH.updatePositionsArray && AH === hH.i.PositionKind) {
+             if (!1 !== OB.updatePositionsArray && YB === oB.h.PositionKind) {
```

#### 344. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3344-L3345` → after: `L3344-L3345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3344-L3345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3344-L3345) · [Before (L3344-L3345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3344-L3345)

```diff
-                 for (let LH = BH; LH < HH.length; LH++) HH[LH] = new SH.o;
-               for (let AH = 0, rH = 0; AH < HH.length; AH++, rH += 3) HH[AH].SBH(LH[rH], LH[rH + 1], LH[rH + 2]);
+                 for (let GB = OB; GB < BB.length; GB++) BB[GB] = new QB.r;
+               for (let YB = 0, DB = 0; YB < BB.length; YB++, DB += 3) BB[YB].zOB(GB[DB], GB[DB + 1], GB[DB + 2]);
```

#### 345. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3357` → after: `L3357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3357) · [Before (L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3357)

```diff
-             }, null, hH.i.NormalKind)
+             }, null, oB.h.NormalKind)
```

#### 346. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3367` → after: `L3367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3367) · [Before (L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3367)

```diff
-             }, LH, hH.i.PositionKind)
+             }, GB, oB.h.PositionKind)
```

#### 347. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3370` → after: `L3370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3370) · [Before (L3370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3370)

```diff
-             return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new EH.d(SH.o.Zero(), SH.o.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
+             return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new MB.e(QB.r.Zero(), QB.r.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
```

#### 348. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3373-L3374` → after: `L3373-L3374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3373-L3374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3373-L3374) · [Before (L3373-L3374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3373-L3374)

```diff
-             if (!this.jU) return this;
-             const BH = this.jU.length;
+             if (!this.iW) return this;
+             const OB = this.iW.length;
```

#### 349. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3376` → after: `L3376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3376) · [Before (L3376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3376)

```diff
-               const AH = this.jU[LH];
+               const YB = this.iW[GB];
```

#### 350. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3382` → after: `L3382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3382) · [Before (L3382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3382)

```diff
-             this.cu || (this._boundingInfoIsDirty = !0)
+             this.Ep || (this._boundingInfoIsDirty = !0)
```

#### 351. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3385` → after: `L3385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3385) · [Before (L3385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3385)

```diff
-             return this.jF().isInFrustum(HH, this.cullingStrategy)
+             return this.Gw().isInFrustum(BB, this.cullingStrategy)
```

#### 352. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3388` → after: `L3388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3388) · [Before (L3388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3388)

```diff
-             return this.jF().isCompletelyInFrustum(HH)
+             return this.Gw().isCompletelyInFrustum(BB)
```

#### 353. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3390` → after: `L3390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3390) · [Before (L3390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3390)

```diff
-           rSH(HH) {
+           lQB(BB) {
```

#### 354. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3393-L3394` → after: `L3393-L3394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3393-L3394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3393-L3394) · [Before (L3393-L3394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3393-L3394)

```diff
-             const AH = this.jF(),
-               rH = HH.jF();
+             const YB = this.Gw(),
+               DB = BB.Gw();
```

#### 355. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3398` → after: `L3398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3398) · [Before (L3398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3398)

```diff
-                 if (SH.rSH(HH, BH, !0)) return !0;
+                 if (QB.lQB(BB, OB, !0)) return !0;
```

#### 356. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3402` → after: `L3402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3402) · [Before (L3402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3402)

```diff
-             return this.jF().intersectsPoint(HH)
+             return this.Gw().intersectsPoint(BB)
```

#### 357. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3416` → after: `L3416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3416) · [Before (L3416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3416)

```diff
-             const LH = this.yN().collisionCoordinator;
+             const GB = this.JF().collisionCoordinator;
```

#### 358. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3425` → after: `L3425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3425) · [Before (L3425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3425)

```diff
-               for (let rH = LH; rH < AH; rH++) HH._lastColliderWorldVertices.push(SH.o.TransformCoordinates(this._positions[rH], BH))
+               for (let DB = GB; DB < YB; DB++) BB._lastColliderWorldVertices.push(QB.r.TransformCoordinates(this._positions[DB], OB))
```

#### 359. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3427` → after: `L3427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3427) · [Before (L3427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3427)

```diff
-             return LH._collide(HH._trianglePlanes, HH._lastColliderWorldVertices, this.vrH(), HH.indexStart, HH.indexStart + HH.indexCount, HH.verticesStart, !!HH.eu(), this, this._shouldConvertRHS(), 7 === HH.eu()?.fillMode), this
+             return GB._collide(BB._trianglePlanes, BB._lastColliderWorldVertices, this.KDB(), BB.indexStart, BB.indexStart + BB.indexCount, BB.verticesStart, !!BB.cp(), this, this._shouldConvertRHS(), 7 === BB.cp()?.fillMode), this
```

#### 360. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3442-L3445` → after: `L3442-L3445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3442-L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3442-L3445) · [Before (L3442-L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3442-L3445)

```diff
-             if (!this.jF()._checkCollision(HH)) return this;
-             const BH = SH.l.Matrix[0],
-               LH = SH.l.Matrix[1];
-             return SH.e.ScalingToRef(1 / HH._radius.x, 1 / HH._radius.y, 1 / HH._radius.z, BH), this.worldMatrixFromCache.multiplyToRef(BH, LH), this._processCollisionsForSubMeshes(HH, LH), this
+             if (!this.Gw()._checkCollision(BB)) return this;
+             const OB = QB.k.Matrix[0],
+               GB = QB.k.Matrix[1];
+             return QB.d.ScalingToRef(1 / BB._radius.x, 1 / BB._radius.y, 1 / BB._radius.z, OB), this.worldMatrixFromCache.multiplyToRef(OB, GB), this._processCollisionsForSubMeshes(BB, GB), this
```

#### 361. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3454` → after: `L3454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3454) · [Before (L3454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3454)

```diff
-             const tH = new CH.b,
+             const jB = new JB.e,
```

#### 362. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3457-L3460` → after: `L3457-L3460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3457-L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3457-L3460) · [Before (L3457-L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3457-L3460)

```diff
-               XH = this.jF();
-             if (!this.jU) return tH;
-             if (!hH && (!HH.intersectsSphere(XH.nrH, EH) || !HH.intersectsBox(XH.boundingBox, EH))) return tH;
-             if (AH) return tH.hit = !hH, tH.pickedMesh = hH ? null : this, tH.distance = hH ? 0 : SH.o.Distance(HH.origin, XH.nrH.center), tH.subMeshId = 0, tH;
+               PB = this.Gw();
+             if (!this.iW) return jB;
+             if (!oB && (!BB.intersectsSphere(PB.xDB, MB) || !BB.intersectsBox(PB.boundingBox, MB))) return jB;
+             if (YB) return jB.hit = !oB, jB.pickedMesh = oB ? null : this, jB.distance = oB ? 0 : QB.r.Distance(BB.origin, PB.xDB.center), jB.subMeshId = 0, jB;
```

#### 363. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3467` → after: `L3467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3467) · [Before (L3467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3467)

```diff
-               const HH = YH.data[SH].eu();
+               const BB = lB.data[QB].cp();
```

#### 364. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3473` → after: `L3473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3473) · [Before (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3473)

```diff
-             if (!QH) return tH.hit = !0, tH.pickedMesh = this, tH.distance = SH.o.Distance(HH.origin, XH.nrH.center), tH.subMeshId = -1, tH;
+             if (!qB) return jB.hit = !0, jB.pickedMesh = this, jB.distance = QB.r.Distance(BB.origin, PB.xDB.center), jB.subMeshId = -1, jB;
```

#### 365. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3477` → after: `L3477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3477) · [Before (L3477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3477)

```diff
-               const rH = AH.intersects(HH, this._positions, this.vrH(), BH, LH);
+               const DB = YB.intersects(BB, this._positions, this.KDB(), OB, GB);
```

#### 366. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3482-L3486` → after: `L3482-L3486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3482-L3486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3482-L3486) · [Before (L3482-L3486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3482-L3486)

```diff
-                 LH = SH.l.lu[0],
-                 AH = SH.l.lu[1];
-               SH.o.TransformCoordinatesToRef(HH.origin, BH, LH), HH.direction.scaleToRef(GH.distance, AH);
-               const hH = SH.o.TransformNormal(AH, BH).addInPlace(LH);
-               return tH.hit = !0, tH.distance = SH.o.Distance(LH, hH), tH.pickedPoint = hH, tH.pickedMesh = this, tH.bu = GH.bu || 0, tH.bv = GH.bv || 0, tH.subMeshFaceId = GH.faceId, tH.faceId = GH.faceId + YH.data[GH._internalSubMeshId].indexStart / (-1 !== this.getClassName(). … [truncated]
+                 GB = QB.k.Xp[0],
+                 YB = QB.k.Xp[1];
+               QB.r.TransformCoordinatesToRef(BB.origin, OB, GB), BB.direction.scaleToRef(zB.distance, YB);
+               const oB = QB.r.TransformNormal(YB, OB).addInPlace(GB);
+               return jB.hit = !0, jB.distance = QB.r.Distance(GB, oB), jB.pickedPoint = oB, jB.pickedMesh = this, jB.bu = zB.bu || 0, jB.bv = zB.bv || 0, jB.subMeshFaceId = zB.faceId, jB.faceId = zB.faceId + lB.data[zB._internalSubMeshId].indexStart / (-1 !== this.getClassName(). … [truncated]
```

#### 367. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3495-L3497` → after: `L3495-L3497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3495-L3497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3495-L3497) · [Before (L3495-L3497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3495-L3497)

```diff
-             if (this.jU)
-               for (; this.jU.length;) this.jU[0].dispose(HH);
-             else this.jU = [];
+             if (this.iW)
+               for (; this.iW.length;) this.iW[0].dispose(BB);
+             else this.iW = [];
```

#### 368. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3502` → after: `L3502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3502) · [Before (L3502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3502)

```diff
-             const AH = this.yN();
+             const YB = this.JF();
```

#### 369. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3522-L3523` → after: `L3522-L3523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3522-L3523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3522-L3523) · [Before (L3522-L3523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3522-L3523)

```diff
-             const SH = AH.Iu();
-             if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, SH.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), SH.wipeCaches(), AH.gR(this), this._parentContainer) {
+             const QB = YB.Lp();
+             if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, QB.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), QB.wipeCaches(), YB.sF(this), this._parentContainer) {
```

#### 370. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3528` → after: `L3528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3528) · [Before (L3528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3528)

```diff
-               for (BH = 0; BH < AH.dU.length; BH++) AH.dU[BH].emitter === this && (AH.dU[BH].dispose(), BH--);
+               for (OB = 0; OB < YB.rW.length; OB++) YB.rW[OB].emitter === this && (YB.rW[OB].dispose(), OB--);
```

#### 371. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3533-L3534` → after: `L3533-L3534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3533-L3534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3533-L3534) · [Before (L3533-L3534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3533-L3534)

```diff
-             HH.facetNormals || (HH.facetNormals = []), HH.facetPositions || (HH.facetPositions = []), HH.facetPartitioning || (HH.facetPartitioning = new Array), HH.facetNb = this.vrH().length / 3 | 0, HH.partitioningSubdivisions = HH.partitioningSubdivisions ? HH.partitioningSub … [truncated]
-             for (let BH = 0; BH < HH.facetNb; BH++) HH.facetNormals[BH] = SH.o.Zero(), HH.facetPositions[BH] = SH.o.Zero();
+             BB.facetNormals || (BB.facetNormals = []), BB.facetPositions || (BB.facetPositions = []), BB.facetPartitioning || (BB.facetPartitioning = new Array), BB.facetNb = this.KDB().length / 3 | 0, BB.partitioningSubdivisions = BB.partitioningSubdivisions ? BB.partitioningSub … [truncated]
+             for (let OB = 0; OB < BB.facetNb; OB++) BB.facetNormals[OB] = QB.r.Zero(), BB.facetPositions[OB] = QB.r.Zero();
```

#### 372. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3540-L3543` → after: `L3540-L3543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3540-L3543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3540-L3543) · [Before (L3540-L3543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3540-L3543)

```diff
-             const BH = this.getVerticesData(hH.i.PositionKind),
-               LH = this.vrH(),
-               AH = this.getVerticesData(hH.i.NormalKind)?.slice(),
-               rH = this.jF();
+             const OB = this.getVerticesData(oB.h.PositionKind),
+               GB = this.KDB(),
+               YB = this.getVerticesData(oB.h.NormalKind)?.slice(),
+               DB = this.Gw();
```

#### 373. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3558-L3559` → after: `L3558-L3559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3558-L3559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3558-L3559) · [Before (L3558-L3559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3558-L3559)

```diff
-                 const BH = this.yN().activeCamera;
-                 HH.facetDepthSortFrom = BH ? BH.position : SH.o.Zero()
+                 const OB = this.JF().activeCamera;
+                 BB.facetDepthSortFrom = OB ? OB.position : QB.r.Zero()
```

#### 374. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3569` → after: `L3569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3569) · [Before (L3569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3569)

```diff
-               HH.invertedMatrix = SH.e.Identity(), HH.facetDepthSortOrigin = SH.o.Zero()
+               BB.invertedMatrix = QB.d.Identity(), BB.facetDepthSortOrigin = QB.r.Zero()
```

#### 375. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3571` → after: `L3571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3571) · [Before (L3571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3571)

```diff
-             HH.bbSize.x = rH.maximum.x - rH.minimum.x > PH.d ? rH.maximum.x - rH.minimum.x : PH.d, HH.bbSize.y = rH.maximum.y - rH.minimum.y > PH.d ? rH.maximum.y - rH.minimum.y : PH.d, HH.bbSize.z = rH.maximum.z - rH.minimum.z > PH.d ? rH.maximum.z - rH.minimum.z : PH.d;
+             BB.bbSize.x = DB.maximum.x - DB.minimum.x > AB.b ? DB.maximum.x - DB.minimum.x : AB.b, BB.bbSize.y = DB.maximum.y - DB.minimum.y > AB.b ? DB.maximum.y - DB.minimum.y : AB.b, BB.bbSize.z = DB.maximum.z - DB.minimum.z > AB.b ? DB.maximum.z - DB.minimum.z : AB.b;
```

#### 376. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3573` → after: `L3573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3573) · [Before (L3573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3573)

```diff
-             if (zH = zH > HH.bbSize.z ? zH : HH.bbSize.z, HH.subDiv.max = HH.partitioningSubdivisions, HH.subDiv.X = Math.floor(HH.subDiv.max * HH.bbSize.x / zH), HH.subDiv.Y = Math.floor(HH.subDiv.max * HH.bbSize.y / zH), HH.subDiv.Z = Math.floor(HH.subDiv.max * HH.bbSize.z / zH … [truncated]
+             if (yB = yB > BB.bbSize.z ? yB : BB.bbSize.z, BB.subDiv.max = BB.partitioningSubdivisions, BB.subDiv.X = Math.floor(BB.subDiv.max * BB.bbSize.x / yB), BB.subDiv.Y = Math.floor(BB.subDiv.max * BB.bbSize.y / yB), BB.subDiv.Z = Math.floor(BB.subDiv.max * BB.bbSize.z / yB … [truncated]
```

#### 377. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3597` → after: `L3597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3597) · [Before (L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3597)

```diff
-             const BH = SH.o.Zero();
+             const OB = QB.r.Zero();
```

#### 378. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3603` → after: `L3603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3603) · [Before (L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3603)

```diff
-             return SH.o.TransformCoordinatesToRef(LH, AH, BH), this
+             return QB.r.TransformCoordinatesToRef(GB, YB, OB), this
```

#### 379. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3606` → after: `L3606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3606) · [Before (L3606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3606)

```diff
-             const BH = SH.o.Zero();
+             const OB = QB.r.Zero();
```

#### 380. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3611` → after: `L3611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3611) · [Before (L3611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3611)

```diff
-             return SH.o.TransformNormalToRef(LH, this.getWorldMatrix(), BH), this
+             return QB.r.TransformNormalToRef(GB, this.getWorldMatrix(), OB), this
```

#### 381. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3614` → after: `L3614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3614) · [Before (L3614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3614)

```diff
-             const AH = this.jF(),
+             const YB = this.Gw(),
```

#### 382. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3625` → after: `L3625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3625) · [Before (L3625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3625)

```diff
-               zH = SH.l.Matrix[5];
+               yB = QB.k.Matrix[5];
```

#### 383. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3627-L3628` → after: `L3627-L3628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3627-L3628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3627-L3628) · [Before (L3627-L3628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3627-L3628)

```diff
-             const CH = SH.l.lu[8];
-             SH.o.TransformCoordinatesFromFloatsToRef(HH, BH, LH, zH, CH);
+             const JB = QB.k.Xp[8];
+             QB.r.TransformCoordinatesFromFloatsToRef(BB, OB, GB, yB, JB);
```

#### 384. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3630` → after: `L3630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3630) · [Before (L3630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3630)

```diff
-             return AH && SH.o.TransformCoordinatesFromFloatsToRef(AH.x, AH.y, AH.z, tH, AH), EH
+             return YB && QB.r.TransformCoordinatesFromFloatsToRef(YB.x, YB.y, YB.z, jB, YB), MB
```

#### 385. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3655-L3656` → after: `L3655-L3656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3655-L3656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3655-L3656) · [Before (L3655-L3656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3655-L3656)

```diff
-             const BH = this.getVerticesData(hH.i.PositionKind),
-               LH = this.vrH();
+             const OB = this.getVerticesData(oB.h.PositionKind),
+               GB = this.KDB();
```

#### 386. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3658-L3660` → after: `L3658-L3660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3658-L3660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3658-L3660) · [Before (L3658-L3660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3658-L3660)

```diff
-             return AH = this.isVerticesDataPresent(hH.i.NormalKind) ? this.getVerticesData(hH.i.NormalKind) : [], tH.b.ComputeNormals(BH, LH, AH, {
-               useRightHandedSystem: this.yN().useRightHandedSystem
-             }), this.setVerticesData(hH.i.NormalKind, AH, HH), this
+             return YB = this.isVerticesDataPresent(oB.h.NormalKind) ? this.getVerticesData(oB.h.NormalKind) : [], jB.e.ComputeNormals(OB, GB, YB, {
+               useRightHandedSystem: this.JF().useRightHandedSystem
+             }), this.setVerticesData(oB.h.NormalKind, YB, BB), this
```

#### 387. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3663` → after: `L3663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3663) · [Before (L3663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3663)

```diff
-             const HH = this.vrH();
+             const BB = this.KDB();
```

#### 388. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3667` → after: `L3667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3667) · [Before (L3667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3667)

```diff
-             } = await LH.e(660).then((() => LH(45992)));
+             } = await GB.e(660).then((() => GB(45700)));
```

#### 389. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3671-L3674` → after: `L3671-L3674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3671-L3674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3671-L3674) · [Before (L3671-L3674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3671-L3674)

```diff
-             BH || (BH = TH.d.Y);
-             const LH = SH.l.lu[0],
-               AH = SH.l.lu[1];
-             return SH.o.CrossToRef(BH, HH, AH), SH.o.CrossToRef(HH, AH, LH), this.rotationQuaternion ? SH.f.RotationQuaternionFromAxisToRef(LH, HH, AH, this.rotationQuaternion) : SH.o.RotationFromAxisToRef(LH, HH, AH, this.rotation), this
+             OB || (OB = VB.c.Y);
+             const GB = QB.k.Xp[0],
+               YB = QB.k.Xp[1];
+             return QB.r.CrossToRef(OB, BB, YB), QB.r.CrossToRef(BB, YB, GB), this.rotationQuaternion ? QB.f.RotationQuaternionFromAxisToRef(GB, BB, YB, this.rotationQuaternion) : QB.r.RotationFromAxisToRef(GB, BB, YB, this.rotation), this
```

#### 390. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3680` → after: `L3680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3680) · [Before (L3680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3680)

```diff
-             throw (0, WH.i)("EdgesRenderer")
+             throw (0, ZB.j)("EdgesRenderer")
```

#### 391. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3683` → after: `L3683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3683) · [Before (L3683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3683)

```diff
-             throw (0, WH.i)("EdgesRenderer")
+             throw (0, ZB.j)("EdgesRenderer")
```

#### 392. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3686` → after: `L3686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3686) · [Before (L3686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3686)

```diff
-             return this._scene.dU.filter((HH => HH.emitter === this))
+             return this._scene.rW.filter((BB => BB.emitter === this))
```

#### 393. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3690` → after: `L3690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3690) · [Before (L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3690)

```diff
-           BH = [VH.g.filter((function() {
+           OB = [nB.j.filter((function() {
```

#### 394. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3692` → after: `L3692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3692) · [Before (L3692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3692)

```diff
-           }))], (0, AH.g)(HH, null, BH, {
+           }))], (0, YB.h)(BB, null, OB, {
```

#### 395. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3708` → after: `L3708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3708) · [Before (L3708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3708)

```diff
-         })(), HH.OCCLUSION_TYPE_NONE = ((0, AH.k)(HH, YH), 0), HH.OCCLUSION_TYPE_OPTIMISTIC = 1, HH.OCCLUSION_TYPE_STRICT = 2, HH.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, HH.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, HH.CULLINGSTRATEGY_STANDARD = 0, HH.CULLINGSTRATEGY_BOUNDINGSPHER … [truncated]
+         })(), BB.OCCLUSION_TYPE_NONE = ((0, YB.j)(BB, lB), 0), BB.OCCLUSION_TYPE_OPTIMISTIC = 1, BB.OCCLUSION_TYPE_STRICT = 2, BB.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, BB.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, BB.CULLINGSTRATEGY_STANDARD = 0, BB.CULLINGSTRATEGY_BOUNDINGSPHER … [truncated]
```

#### 396. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3714` → after: `L3714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3714) · [Before (L3714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3714)

```diff
-     }(YH = lH.prototype).createOrUpdateSubmeshesOctree ?? (YH.createOrUpdateSubmeshesOctree = (0, WH.f)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (uH = lH.prototype).getPhysicsImpostor ?? (uH.getPhysicsImpostor = (0, WH.f)("AbstractMesh", "getPhysicsImpostor")), (QH = lH … [truncated]
+     }(lB = IB.prototype).createOrUpdateSubmeshesOctree ?? (lB.createOrUpdateSubmeshesOctree = (0, ZB.g)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (pB = IB.prototype).getPhysicsImpostor ?? (pB.getPhysicsImpostor = (0, ZB.g)("AbstractMesh", "getPhysicsImpostor")), (qB = IB … [truncated]
```

#### 397. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3716` → after: `L3716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3716) · [Before (L3716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3716)

```diff
-   41706: (HH, BH, LH) => {
+   41426: (BB, OB, GB) => {
```

#### 398. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3720-L3733` → after: `L3720-L3733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3720-L3733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3720-L3733) · [Before (L3720-L3733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3720-L3733)

```diff
-     var AH = LH(37963),
-       rH = LH(38074),
-       SH = LH(41703),
-       hH = LH(41427),
-       tH = LH(41578),
-       zH = LH(41713),
-       CH = LH(41588),
-       EH = LH(41387),
-       XH = LH(39595),
-       GH = LH(41326),
-       YH = LH(41602),
-       uH = LH(37989),
-       QH = LH(41721),
-       WH = LH(41356);
+     var YB = GB(37778),
+       DB = GB(37894),
+       QB = GB(41423),
+       oB = GB(41150),
+       jB = GB(41287),
+       yB = GB(41434),
+       JB = GB(41300),
+       MB = GB(41097),
+       PB = GB(39366),
+       zB = GB(41024),
+       lB = GB(41315),
+       pB = GB(37796),
+       qB = GB(41436),
+       ZB = GB(41067);
```

#### 399. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3739` → after: `L3739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3739) · [Before (L3739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3739)

```diff
-         this._boundingBias ? this._boundingBias.Tm(HH) : this._boundingBias = HH.clone(), this._updateBoundingInfo(!0, null)
+         this._boundingBias ? this._boundingBias.IU(BB) : this._boundingBias = BB.clone(), this._updateBoundingInfo(!0, null)
```

#### 400. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3742` → after: `L3742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3742) · [Before (L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3742)

```diff
-         const BH = new MH(MH.RandomId(), HH.yN());
+         const OB = new NB(NB.RandomId(), BB.JF());
```

#### 401. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3753-L3755` → after: `L3753-L3755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3753-L3755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3753-L3755) · [Before (L3753-L3755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3753-L3755)

```diff
-           minimum: new AH.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
-           maximum: new AH.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
-         }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = BH || uH.d.LastCreatedScene, this._scene && (this.id = HH, this.uniqueId = this._scene.getUniqueId(), this._engine = this._s … [truncated]
+           minimum: new YB.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
+           maximum: new YB.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
+         }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = OB || pB.b.LastCreatedScene, this._scene && (this.id = BB, this.uniqueId = this._scene.getUniqueId(), this._engine = this._s … [truncated]
```

#### 402. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3789` → after: `L3789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3789) · [Before (L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3789)

```diff
-         const rH = new hH.i(this._engine, BH, HH, {
+         const DB = new oB.h(this._engine, OB, BB, {
```

#### 403. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3807` → after: `L3807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3807) · [Before (L3807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3807)

```diff
-         if (rH === hH.i.PositionKind) {
+         if (DB === oB.h.PositionKind) {
```

#### 404. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3809-L3810` → after: `L3809-L3810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3809-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3809-L3810) · [Before (L3809-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3809-L3810)

```diff
-           const LH = this._extend && this._extend.minimum || new AH.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
-             rH = this._extend && this._extend.maximum || new AH.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
+           const GB = this._extend && this._extend.minimum || new YB.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
+             DB = this._extend && this._extend.maximum || new YB.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
```

#### 405. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3826` → after: `L3826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3826) · [Before (L3826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3826)

```diff
-         AH && (AH.update(BH), HH === hH.i.PositionKind && this._updateBoundingInfo(LH, BH), this._notifyUpdate(HH))
+         YB && (YB.update(OB), BB === oB.h.PositionKind && this._updateBoundingInfo(GB, OB), this._notifyUpdate(BB))
```

#### 406. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3832-L3833` → after: `L3832-L3833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3832-L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3832-L3833) · [Before (L3832-L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3832-L3833)

```diff
-             BH.hasBoundingInfo ? BH.jF().reConstruct(this._extend.minimum, this._extend.maximum) : BH.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
-             const HH = BH.jU;
+             OB.hasBoundingInfo ? OB.Gw().reConstruct(this._extend.minimum, this._extend.maximum) : OB.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
+             const BB = OB.iW;
```

#### 407. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3860` → after: `L3860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3860) · [Before (L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3860)

```diff
-         AH && (0, WH.f)(AH, LH.getSize(), LH.type, LH.byteOffset, LH.byteStride, LH.normalized, this._totalVertices, BH[HH])
+         YB && (0, ZB.h)(YB, GB.getSize(), GB.type, GB.byteOffset, GB.byteStride, GB.normalized, this._totalVertices, OB[BB])
```

#### 408. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3910` → after: `L3910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3910) · [Before (L3910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3910)

```diff
-       vrH(HH, BH) {
+       KDB(BB, OB) {
```

#### 409. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3940-L3941` → after: `L3940-L3941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3940-L3941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3940-L3941) · [Before (L3940-L3941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3940-L3941)

```diff
-           if (!HH && (HH = this.getVerticesData(hH.i.PositionKind), !HH)) return;
-           this._extend = (0, YH.f)(HH, 0, this._totalVertices, this.boundingBias, 3)
+           if (!BB && (BB = this.getVerticesData(oB.h.PositionKind), !BB)) return;
+           this._extend = (0, lB.g)(BB, 0, this._totalVertices, this.boundingBias, 3)
```

#### 410. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3947` → after: `L3947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3947) · [Before (L3947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3947)

```diff
-           LH._buffer.getBuffer() || LH.create(), BH === hH.i.PositionKind && (this._extend || this._updateExtend(), HH.buildBoundingInfo(this._extend.minimum, this._extend.maximum), HH._createGlobalSubMesh(HH.isUnIndexed), HH._updateBoundingInfo())
+           GB._buffer.getBuffer() || GB.create(), OB === oB.h.PositionKind && (this._extend || this._updateExtend(), BB.buildBoundingInfo(this._extend.minimum, this._extend.maximum), BB._createGlobalSubMesh(BB.isUnIndexed), BB._updateBoundingInfo())
```

#### 411. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3968` → after: `L3968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3968) · [Before (L3968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3968)

```diff
-             HH.removePendingData(this), HH.mV || XH.e.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${LH}`)
+             BB.removePendingData(this), BB.lV || PB.b.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${GB}`)
```

#### 412. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3973` → after: `L3973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3973) · [Before (L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3973)

```diff
-         const HH = this.vrH(!1);
+         const BB = this.KDB(!1);
```

#### 413. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3981` → after: `L3981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3981) · [Before (L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3981)

```diff
-         const BH = this.getVerticesData(hH.i.PositionKind, !1);
+         const OB = this.getVerticesData(oB.h.PositionKind, !1);
```

#### 414. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3984` → after: `L3984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3984) · [Before (L3984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3984)

```diff
-           this.setVerticesData(hH.i.PositionKind, BH, !1)
+           this.setVerticesData(oB.h.PositionKind, OB, !1)
```

#### 415. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3986` → after: `L3986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3986) · [Before (L3986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3986)

```diff
-         const LH = this.getVerticesData(hH.i.NormalKind, !1);
+         const GB = this.getVerticesData(oB.h.NormalKind, !1);
```

#### 416. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3989` → after: `L3989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3989) · [Before (L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3989)

```diff
-           this.setVerticesData(hH.i.NormalKind, LH, !1)
+           this.setVerticesData(oB.h.NormalKind, GB, !1)
```

#### 417. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3997` → after: `L3997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3997) · [Before (L3997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3997)

```diff
-         const HH = this.getVerticesData(hH.i.PositionKind);
+         const BB = this.getVerticesData(oB.h.PositionKind);
```

#### 418. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L3999` → after: `L3999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R3999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L3999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L3999) · [Before (L3999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L3999)

```diff
-         for (let BH = 3 * this._positionsCache.length, LH = this._positionsCache.length; BH < HH.length; BH += 3, ++LH) this._positionsCache[LH] = AH.o.FromArray(HH, BH);
+         for (let OB = 3 * this._positionsCache.length, GB = this._positionsCache.length; OB < BB.length; OB += 3, ++GB) this._positionsCache[GB] = YB.r.FromArray(BB, OB);
```

#### 419. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4030` → after: `L4030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4030) · [Before (L4030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4030)

```diff
-           LH = this.vrH(void 0, !0);
+           GB = this.KDB(void 0, !0);
```

#### 420. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4051-L4052` → after: `L4051-L4052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4051-L4052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4051-L4052) · [Before (L4051-L4052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4051-L4052)

```diff
-           const YH = (0, WH.r)(LH, tH, zH, CH, EH, GH, !0),
-             uH = new hH.i(this._engine, YH, AH, {
+           const lB = (0, ZB.v)(GB, jB, yB, JB, MB, zB, !0),
+             pB = new oB.h(this._engine, lB, YB, {
```

#### 421. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4066` → after: `L4066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4066) · [Before (L4066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4066)

```diff
-         return BH._boundingInfo = new CH.d(this._extend.minimum, this._extend.maximum), BH
+         return OB._boundingInfo = new JB.e(this._extend.minimum, this._extend.maximum), OB
```

#### 422. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4070` → after: `L4070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4070) · [Before (L4070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4070)

```diff
-         return HH.id = this.id, HH.uniqueId = this.uniqueId, HH.updatable = this._updatable, GH.b && GH.b.HasTags(this) && (HH.tags = GH.b.GetTags(this)), HH
+         return BB.id = this.id, BB.uniqueId = this.uniqueId, BB.updatable = this._updatable, zB.e && zB.e.HasTags(this) && (BB.tags = zB.e.GetTags(this)), BB
```

#### 423. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4073` → after: `L4073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4073) · [Before (L4073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4073)

```diff
-         return Array.isArray(HH) ? HH : Array.prototype.slice.call(HH)
+         return Array.isArray(BB) ? BB : Array.prototype.slice.call(BB)
```

#### 424. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4081` → after: `L4081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4081) · [Before (L4081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4081)

```diff
-         return this.isVerticesDataPresent(hH.i.PositionKind) && (HH.positions = this._toNumberArray(this.getVerticesData(hH.i.PositionKind)), this.isVertexBufferUpdatable(hH.i.PositionKind) && (HH.positionsUpdatable = !0)), this.isVerticesDataPresent(hH.i.NormalKind) && (HH.norma … [truncated]
+         return this.isVerticesDataPresent(oB.h.PositionKind) && (BB.positions = this._toNumberArray(this.getVerticesData(oB.h.PositionKind)), this.isVertexBufferUpdatable(oB.h.PositionKind) && (BB.positionsUpdatable = !0)), this.isVerticesDataPresent(oB.h.NormalKind) && (BB.norma … [truncated]
```

#### 425. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4088` → after: `L4088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4088) · [Before (L4088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4088)

```diff
-         return EH.i.RandomId()
+         return MB.j.RandomId()
```

#### 426. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4096` → after: `L4096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4096) · [Before (L4096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4096)

```diff
-         const LH = BH.yN(),
+         const GB = OB.JF(),
```

#### 427. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4106` → after: `L4106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4106) · [Before (L4106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4106)

```diff
-             BH.setVerticesData(hH.i.PositionKind, AH, !1)
+             OB.setVerticesData(oB.h.PositionKind, YB, !1)
```

#### 428. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4110` → after: `L4110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4110) · [Before (L4110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4110)

```diff
-             BH.setVerticesData(hH.i.NormalKind, AH, !1)
+             OB.setVerticesData(oB.h.NormalKind, YB, !1)
```

#### 429. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4114` → after: `L4114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4114) · [Before (L4114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4114)

```diff
-             BH.setVerticesData(hH.i.TangentKind, AH, !1)
+             OB.setVerticesData(oB.h.TangentKind, YB, !1)
```

#### 430. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4118` → after: `L4118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4118) · [Before (L4118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4118)

```diff
-             if (QH.c)
+             if (qB.e)
```

#### 431. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4120` → after: `L4120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4120) · [Before (L4120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4120)

```diff
-             BH.setVerticesData(hH.i.UVKind, AH, !1)
+             OB.setVerticesData(oB.h.UVKind, YB, !1)
```

#### 432. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4124` → after: `L4124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4124) · [Before (L4124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4124)

```diff
-             if (QH.c)
+             if (qB.e)
```

#### 433. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4126` → after: `L4126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4126) · [Before (L4126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4126)

```diff
-             BH.setVerticesData(hH.i.UV2Kind, AH, !1)
+             OB.setVerticesData(oB.h.UV2Kind, YB, !1)
```

#### 434. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4130` → after: `L4130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4130) · [Before (L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4130)

```diff
-             if (QH.c)
+             if (qB.e)
```

#### 435. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4132` → after: `L4132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4132) · [Before (L4132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4132)

```diff
-             BH.setVerticesData(hH.i.UV3Kind, AH, !1)
+             OB.setVerticesData(oB.h.UV3Kind, YB, !1)
```

#### 436. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4136` → after: `L4136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4136) · [Before (L4136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4136)

```diff
-             if (QH.c)
+             if (qB.e)
```

#### 437. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4138` → after: `L4138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4138) · [Before (L4138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4138)

```diff
-             BH.setVerticesData(hH.i.UV4Kind, AH, !1)
+             OB.setVerticesData(oB.h.UV4Kind, YB, !1)
```

#### 438. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4142` → after: `L4142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4142) · [Before (L4142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4142)

```diff
-             if (QH.c)
+             if (qB.e)
```

#### 439. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4144` → after: `L4144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4144) · [Before (L4144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4144)

```diff
-             BH.setVerticesData(hH.i.UV5Kind, AH, !1)
+             OB.setVerticesData(oB.h.UV5Kind, YB, !1)
```

#### 440. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4148` → after: `L4148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4148) · [Before (L4148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4148)

```diff
-             if (QH.c)
+             if (qB.e)
```

#### 441. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4150` → after: `L4150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4150) · [Before (L4150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4150)

```diff
-             BH.setVerticesData(hH.i.UV6Kind, AH, !1)
+             OB.setVerticesData(oB.h.UV6Kind, YB, !1)
```

#### 442. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4154` → after: `L4154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4154) · [Before (L4154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4154)

```diff
-             BH.setVerticesData(hH.i.ColorKind, AH, !1, LH.colorsAttrDesc.stride)
+             OB.setVerticesData(oB.h.ColorKind, YB, !1, GB.colorsAttrDesc.stride)
```

#### 443. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4163` → after: `L4163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4163) · [Before (L4163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4163)

```diff
-             BH.setVerticesData(hH.i.MatricesIndicesKind, rH, !1)
+             OB.setVerticesData(oB.h.MatricesIndicesKind, DB, !1)
```

#### 444. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4172` → after: `L4172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4172) · [Before (L4172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4172)

```diff
-             BH.setVerticesData(hH.i.MatricesIndicesExtraKind, rH, !1)
+             OB.setVerticesData(oB.h.MatricesIndicesExtraKind, DB, !1)
```

#### 445. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4176` → after: `L4176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4176) · [Before (L4176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4176)

```diff
-             BH.setVerticesData(hH.i.MatricesWeightsKind, AH, !1)
+             OB.setVerticesData(oB.h.MatricesWeightsKind, YB, !1)
```

#### 446. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4184` → after: `L4184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4184) · [Before (L4184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4184)

```diff
-             BH.jU = [];
+             OB.iW = [];
```

#### 447. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4191` → after: `L4191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4191) · [Before (L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4191)

```diff
-               tH.d.AddToMesh(LH, rH, SH, hH, zH, BH)
+               jB.c.AddToMesh(GB, DB, QB, oB, yB, OB)
```

#### 448. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4195-L4196` → after: `L4195-L4196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4195-L4196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4195-L4196) · [Before (L4195-L4196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4195-L4196)

```diff
-           if (BH.setVerticesData(hH.i.PositionKind, HH.positions, HH.positions._updatable || HH.positionsUpdatable), BH.setVerticesData(hH.i.NormalKind, HH.normals, HH.normals._updatable || HH.normalsUpdatable), HH.tangents && BH.setVerticesData(hH.i.TangentKind, HH.tangents, HH. … [truncated]
-             if (HH.matricesIndices._isExpanded || HH.matricesIndicesExpanded) delete HH.matricesIndices._isExpanded, delete HH.matricesIndicesExpanded, BH.setVerticesData(hH.i.MatricesIndicesKind, HH.matricesIndices, HH.matricesIndices._updatable || HH.matricesIndicesUpdatable);
+           if (OB.setVerticesData(oB.h.PositionKind, BB.positions, BB.positions._updatable || BB.positionsUpdatable), OB.setVerticesData(oB.h.NormalKind, BB.normals, BB.normals._updatable || BB.normalsUpdatable), BB.tangents && OB.setVerticesData(oB.h.TangentKind, BB.tangents, BB. … [truncated]
+             if (BB.matricesIndices._isExpanded || BB.matricesIndicesExpanded) delete BB.matricesIndices._isExpanded, delete BB.matricesIndicesExpanded, OB.setVerticesData(oB.h.MatricesIndicesKind, BB.matricesIndices, BB.matricesIndices._updatable || BB.matricesIndicesUpdatable);
```

#### 449. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4203` → after: `L4203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4203) · [Before (L4203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4203)

```diff
-               BH.setVerticesData(hH.i.MatricesIndicesKind, LH, HH.matricesIndices._updatable || HH.matricesIndicesUpdatable)
+               OB.setVerticesData(oB.h.MatricesIndicesKind, GB, BB.matricesIndices._updatable || BB.matricesIndicesUpdatable)
```

#### 450. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4205` → after: `L4205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4205) · [Before (L4205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4205)

```diff
-             if (HH.matricesIndicesExtraExpanded || HH.matricesIndicesExtra._isExpanded) delete HH.matricesIndices._isExpanded, delete HH.matricesIndicesExtraExpanded, BH.setVerticesData(hH.i.MatricesIndicesExtraKind, HH.matricesIndicesExtra, HH.matricesIndicesExtra._updatable ||  … [truncated]
+             if (BB.matricesIndicesExtraExpanded || BB.matricesIndicesExtra._isExpanded) delete BB.matricesIndices._isExpanded, delete BB.matricesIndicesExtraExpanded, OB.setVerticesData(oB.h.MatricesIndicesExtraKind, BB.matricesIndicesExtra, BB.matricesIndicesExtra._updatable ||  … [truncated]
```

#### 451. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4212-L4213` → after: `L4212-L4213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4212-L4213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4212-L4213) · [Before (L4212-L4213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4212-L4213)

```diff
-               BH.setVerticesData(hH.i.MatricesIndicesExtraKind, LH, HH.matricesIndicesExtra._updatable || HH.matricesIndicesExtraUpdatable)
-             } HH.matricesWeights && (MH._CleanMatricesWeights(HH, BH), BH.setVerticesData(hH.i.MatricesWeightsKind, HH.matricesWeights, HH.matricesWeights._updatable)), HH.matricesWeightsExtra && BH.setVerticesData(hH.i.MatricesWeightsExtraKind, HH.matricesWeightsExtra, HH.matric … [truncated]
+               OB.setVerticesData(oB.h.MatricesIndicesExtraKind, GB, BB.matricesIndicesExtra._updatable || BB.matricesIndicesExtraUpdatable)
+             } BB.matricesWeights && (NB._CleanMatricesWeights(BB, OB), OB.setVerticesData(oB.h.MatricesWeightsKind, BB.matricesWeights, BB.matricesWeights._updatable)), BB.matricesWeightsExtra && OB.setVerticesData(oB.h.MatricesWeightsExtraKind, BB.matricesWeightsExtra, BB.matric … [truncated]
```

#### 452. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4215-L4219` → after: `L4215-L4219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4215-L4219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4215-L4219) · [Before (L4215-L4219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4215-L4219)

```diff
-         if (HH.jU) {
-           BH.jU = [];
-           for (let LH = 0; LH < HH.jU.length; LH++) {
-             const AH = HH.jU[LH];
-             tH.d.AddToMesh(AH.materialIndex, AH.verticesStart, AH.verticesCount, AH.indexStart, AH.indexCount, BH)
+         if (BB.iW) {
+           OB.iW = [];
+           for (let GB = 0; GB < BB.iW.length; GB++) {
+             const YB = BB.iW[GB];
+             jB.c.AddToMesh(YB.materialIndex, YB.verticesStart, YB.verticesCount, YB.indexStart, YB.indexCount, OB)
```

#### 453. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4226` → after: `L4226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4226) · [Before (L4226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4226)

```diff
-         if (!zH.d.CleanBoneMatrixWeights) return;
+         if (!yB.c.CleanBoneMatrixWeights) return;
```

#### 454. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4230` → after: `L4230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4230) · [Before (L4230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4230)

```diff
-           const LH = BH.yN().getLastSkeletonById(HH.skeletonId);
+           const GB = OB.JF().getLastSkeletonById(BB.skeletonId);
```

#### 455. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4234-L4235` → after: `L4234-L4235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4234-L4235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4234-L4235) · [Before (L4234-L4235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4234-L4235)

```diff
-         const rH = BH.getVerticesData(hH.i.MatricesIndicesKind),
-           SH = BH.getVerticesData(hH.i.MatricesIndicesExtraKind),
+         const DB = OB.getVerticesData(oB.h.MatricesIndicesKind),
+           QB = OB.getVerticesData(oB.h.MatricesIndicesExtraKind),
```

#### 456. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4259` → after: `L4259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4259) · [Before (L4259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4259)

```diff
-         BH.setVerticesData(hH.i.MatricesIndicesKind, rH), HH.matricesWeightsExtra && BH.setVerticesData(hH.i.MatricesIndicesExtraKind, SH)
+         OB.setVerticesData(oB.h.MatricesIndicesKind, DB), BB.matricesWeightsExtra && OB.setVerticesData(oB.h.MatricesIndicesExtraKind, QB)
```

#### 457. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4263` → after: `L4263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4263) · [Before (L4263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4263)

```diff
-         return rH._loadedUniqueId = HH.uniqueId, GH.b && GH.b.AddTagsTo(rH, HH.tags), HH.delayLoadingFile ? (rH.delayLoadState = 4, rH.delayLoadingFile = LH + HH.delayLoadingFile, rH._boundingInfo = new CH.d(AH.o.FromArray(HH.boundingBoxMinimum), AH.o.FromArray(HH.boundingBoxMaxi … [truncated]
+         return DB._loadedUniqueId = BB.uniqueId, zB.e && zB.e.AddTagsTo(DB, BB.tags), BB.delayLoadingFile ? (DB.delayLoadState = 4, DB.delayLoadingFile = GB + BB.delayLoadingFile, DB._boundingInfo = new JB.e(YB.r.FromArray(BB.boundingBoxMinimum), YB.r.FromArray(BB.boundingBoxMaxi … [truncated]
```

#### 458. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4267` → after: `L4267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4267) · [Before (L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4267)

```diff
-   41762: (HH, BH, LH) => {
+   41462: (BB, OB, GB) => {
```

#### 459. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4269-L4270` → after: `L4269-L4270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4269-L4270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4269-L4270) · [Before (L4269-L4270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4269-L4270)

```diff
-       c: () => XH,
-       e: () => uH
+       b: () => PB,
+       f: () => pB
```

#### 460. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4272-L4279` → after: `L4272-L4279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4272-L4279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4272-L4279) · [Before (L4272-L4279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4272-L4279)

```diff
-     var AH = LH(37963),
-       rH = LH(39595),
-       SH = LH(41730),
-       hH = LH(41693),
-       tH = LH(39588),
-       zH = LH(41738),
-       CH = LH(41427),
-       EH = LH(38012);
+     var YB = GB(37778),
+       DB = GB(39366),
+       QB = GB(41442),
+       oB = GB(41411),
+       jB = GB(39358),
+       yB = GB(41444),
+       JB = GB(41150),
+       MB = GB(37823);
```

#### 461. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4282` → after: `L4282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4282) · [Before (L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4282)

```diff
-         super(HH, BH.yN()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, BH.nHH(this), this._sourceMesh = BH, this._unIndexed = BH._unIndexed, this.position.Tm(BH.position), this.rotation.Tm(BH.rotation), this.bX.Tm(BH.bX), BH.rotationQuaternion && (this … [truncated]
+         super(BB, OB.JF()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, OB.hBB(this), this._sourceMesh = OB, this._unIndexed = OB._unIndexed, this.position.IU(OB.position), this.rotation.IU(OB.rotation), this.SP.IU(OB.SP), OB.rotationQuaternion && (this … [truncated]
```

#### 462. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4286` → after: `L4286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4286) · [Before (L4286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4286)

```diff
-           const HH = BH.jF();
+           const BB = OB.Gw();
```

#### 463. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4304` → after: `L4304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4304) · [Before (L4304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4304)

```diff
-         this._sourceMesh?.receiveShadows !== HH && rH.e.Warn("Setting receiveShadows on an instanced mesh has no effect")
+         this._sourceMesh?.receiveShadows !== BB && DB.b.Warn("Setting receiveShadows on an instanced mesh has no effect")
```

#### 464. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4310` → after: `L4310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4310) · [Before (L4310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4310)

```diff
-         this._sourceMesh?.material !== HH && rH.e.Warn("Setting material on an instanced mesh has no effect")
+         this._sourceMesh?.material !== BB && DB.b.Warn("Setting material on an instanced mesh has no effect")
```

#### 465. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4316` → after: `L4316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4316) · [Before (L4316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4316)

```diff
-         this._sourceMesh?.visibility !== HH && rH.e.Warn("Setting visibility on an instanced mesh has no effect")
+         this._sourceMesh?.visibility !== BB && DB.b.Warn("Setting visibility on an instanced mesh has no effect")
```

#### 466. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4322` → after: `L4322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4322) · [Before (L4322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4322)

```diff
-         this._sourceMesh?.skeleton !== HH && rH.e.Warn("Setting skeleton on an instanced mesh has no effect")
+         this._sourceMesh?.skeleton !== BB && DB.b.Warn("Setting skeleton on an instanced mesh has no effect")
```

#### 467. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4328` → after: `L4328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4328) · [Before (L4328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4328)

```diff
-         this._sourceMesh && HH !== this._sourceMesh.renderingGroupId && rH.e.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
+         this._sourceMesh && BB !== this._sourceMesh.renderingGroupId && DB.b.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
```

#### 468. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4334` → after: `L4334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4334) · [Before (L4334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4334)

```diff
-         this._sourceMesh && HH !== this._sourceMesh.meshBlendingTag && rH.e.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
+         this._sourceMesh && BB !== this._sourceMesh.meshBlendingTag && DB.b.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
```

#### 469. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4342` → after: `L4342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4342) · [Before (L4342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4342)

```diff
-       get XSH() {
+       get AQB() {
```

#### 470. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4365` → after: `L4365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4365) · [Before (L4365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4365)

```diff
-         return this.XSH && this.XSH.setVerticesData(HH, BH, LH, AH), this.XSH
+         return this.AQB && this.AQB.setVerticesData(BB, OB, GB, YB), this.AQB
```

#### 471. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4368` → after: `L4368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4368) · [Before (L4368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4368)

```diff
-         return this.XSH && this.XSH.updateVerticesData(HH, BH, LH, AH), this.XSH
+         return this.AQB && this.AQB.updateVerticesData(BB, OB, GB, YB), this.AQB
```

#### 472. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4372` → after: `L4372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4372) · [Before (L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4372)

```diff
-         return this.XSH && this.XSH.setIndices(HH, BH), this.XSH
+         return this.AQB && this.AQB.setIndices(BB, OB), this.AQB
```

#### 473. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4377-L4378` → after: `L4377-L4378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4377-L4378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4377-L4378) · [Before (L4377-L4378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4377-L4378)

```diff
-       vrH() {
-         return this._sourceMesh.vrH()
+       KDB() {
+         return this._sourceMesh.KDB()
```

#### 474. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4386-L4387` → after: `L4386-L4387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4386-L4387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4386-L4387) · [Before (L4386-L4387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4386-L4387)

```diff
-         if (this.hasBoundingInfo && this.jF().isLocked) return this;
-         HH = "object" === typeof BH ? BH : {
+         if (this.hasBoundingInfo && this.Gw().isLocked) return this;
+         BB = "object" === typeof OB ? OB : {
```

#### 475. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4392` → after: `L4392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4392) · [Before (L4392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4392)

```diff
-         return this._refreshBoundingInfo(this._sourceMesh._getData(HH, null, CH.i.PositionKind), AH), this
+         return this._refreshBoundingInfo(this._sourceMesh._getData(BB, null, JB.h.PositionKind), YB), this
```

#### 476. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4398` → after: `L4398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4398) · [Before (L4398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4398)

```diff
-         if (super._activate(HH, BH), this._sourceMesh.jU || rH.e.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
+         if (super._activate(BB, OB), this._sourceMesh.iW || DB.b.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
```

#### 477. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4410-L4411` → after: `L4410-L4411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4410-L4411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4410-L4411) · [Before (L4410-L4411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4410-L4411)

```diff
-         if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== zH.e.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
-           this._billboardWorldMatrix || (this._billboardWorldMatrix = new AH.e);
+         if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== yB.h.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
+           this._billboardWorldMatrix || (this._billboardWorldMatrix = new YB.d);
```

#### 478. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4413` → after: `L4413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4413) · [Before (L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4413)

```diff
-           return this._currentLOD._masterMesh = this, AH.l.lu[7].Tm(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.Tm(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.Tm(AH.l.lu[7]), this._currentLOD._masterMesh = … [truncated]
+           return this._currentLOD._masterMesh = this, YB.k.Xp[7].IU(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.IU(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.IU(YB.k.Xp[7]), this._currentLOD._masterMesh = … [truncated]
```

#### 479. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4422` → after: `L4422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4422) · [Before (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4422)

```diff
-         const BH = this.XSH.getLODLevels();
+         const OB = this.AQB.getLODLevels();
```

#### 480. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4424-L4426` → after: `L4424-L4426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4424-L4426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4424-L4426) · [Before (L4424-L4426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4424-L4426)

```diff
-           const BH = this.jF();
-           this._currentLOD = this.XSH.getLOD(HH, BH.nrH)
-         } else this._currentLOD = this.XSH;
+           const OB = this.Gw();
+           this._currentLOD = this.AQB.getLOD(BB, OB.xDB)
+         } else this._currentLOD = this.AQB;
```

#### 481. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4430` → after: `L4430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4430) · [Before (L4430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4430)

```diff
-         return this.XSH._preActivateForIntermediateRendering(HH)
+         return this.AQB._preActivateForIntermediateRendering(BB)
```

#### 482. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4433-L4434` → after: `L4433-L4434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4433-L4434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4433-L4434) · [Before (L4433-L4434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4433-L4434)

```diff
-         if (this.releaseSubMeshes(), this._sourceMesh.jU)
-           for (let HH = 0; HH < this._sourceMesh.jU.length; HH++) this._sourceMesh.jU[HH].clone(this, this._sourceMesh);
+         if (this.releaseSubMeshes(), this._sourceMesh.iW)
+           for (let BB = 0; BB < this._sourceMesh.iW.length; BB++) this._sourceMesh.iW[BB].clone(this, this._sourceMesh);
```

#### 483. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4441` → after: `L4441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4441) · [Before (L4441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4441)

```diff
-         return this.hasBoundingInfo ? this.jF().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
+         return this.hasBoundingInfo ? this.Gw().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
```

#### 484. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4447-L4449` → after: `L4447-L4449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4447-L4449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4447-L4449) · [Before (L4447-L4449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4447-L4449)

```diff
-         if (tH.d.DeepCopy(this, AH, ["name", "jU", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "XSH", "xR", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "ESH", "collider", "edgesRenderer", "forward", "up", "right", "a … [truncated]
-           for (let rH = 0; rH < this.yN().meshes.length; rH++) {
-             const HH = this.yN().meshes[rH];
+         if (jB.b.DeepCopy(this, YB, ["name", "iW", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "AQB", "SF", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "WQB", "collider", "edgesRenderer", "forward", "up", "right", "a … [truncated]
+           for (let DB = 0; DB < this.JF().meshes.length; DB++) {
+             const BB = this.JF().meshes[DB];
```

#### 485. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4456` → after: `L4456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4456) · [Before (L4456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4456)

```diff
-         this._sourceMesh.DHH(this), super.dispose(HH, BH)
+         this._sourceMesh.eBB(this), super.dispose(BB, OB)
```

#### 486. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4484-L4486` → after: `L4484-L4486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4484-L4486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4484-L4486) · [Before (L4484-L4486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4484-L4486)

```diff
-         if (BH.kF) {
-           LH.kF = {};
-           for (const HH in BH.kF) LH.kF[HH] = BH.kF[HH]
+         if (OB.yX) {
+           GB.yX = {};
+           for (const BB in OB.yX) GB.yX[BB] = OB.yX[BB]
```

#### 487. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4489-L4492` → after: `L4489-L4492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4489-L4492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4489-L4492) · [Before (L4489-L4492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4489-L4492)

```diff
-       }, hH.c.prototype.uF = function(HH, BH) {
-         if (!this.kF) {
-           this.kF = {};
-           for (const HH of this.instances) HH.kF = {}
+       }, oB.c.prototype.BX = function(BB, OB) {
+         if (!this.yX) {
+           this.yX = {};
+           for (const BB of this.instances) BB.yX = {}
```

#### 488. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4499-L4500` → after: `L4499-L4500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4499-L4500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4499-L4500) · [Before (L4499-L4500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4499-L4500)

```diff
-           vertexArrayObjects: this.Iu().getCaps().vertexArrayObject ? {} : void 0
-         }), this.kF[HH] = null, this._userInstancedBuffersStorage.strides[HH] = BH;
+           vertexArrayObjects: this.Lp().getCaps().vertexArrayObject ? {} : void 0
+         }), this.yX[BB] = null, this._userInstancedBuffersStorage.strides[BB] = OB;
```

#### 489. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4507` → after: `L4507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4507) · [Before (L4507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4507)

```diff
-         for (const AH of this.instances) AH.kF[HH] = null;
+         for (const YB of this.instances) YB.yX[BB] = null;
```

#### 490. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4524-L4525` → after: `L4524-L4525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4524-L4525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/280.js#L4524-L4525) · [Before (L4524-L4525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/280.js#L4524-L4525)

```diff
-         BH && (YH(this.kF, tH, zH, hH, EH), EH += AH);
-         for (let CH = 0; CH < rH; CH++) YH(HH[CH].kF, tH, zH, hH, EH), EH += AH;
+         OB && (lB(this.yX, jB, yB, oB, MB), MB += YB);
+         for (let JB = 0; JB < DB; JB++) lB(BB[JB].yX, jB, yB, oB, MB), MB += YB;
```
