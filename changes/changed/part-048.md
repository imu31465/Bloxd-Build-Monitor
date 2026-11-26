# Changed — Bundle Modifications Report (Part 048 / 154)

- **Updated at**: `2026-11-27T02:11 JST`
- **Part**: `48 / 154` (**438** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 047](part-047.md) · [Part 049 →](part-049.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/257.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/257.js` (1481 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558)

#### 863. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8498-L8499` → after: `L8498-L8499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8498-L8499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8498-L8499) · [Before (L8498-L8499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8498-L8499)

```diff
-                   const BH = this._IsTransformable(QH) ? QH : this._IsTransformable(QH[0]) ? QH[0] : null;
-                   BH && XA._AddAnimation(`${WH.name}`, EH, BH, WH, HH.dataAccessorType, HH.animationChannelTargetPath, LH, AH, rH, SH, HH.useQuaternion, hH, MH)
+                   const OB = this._IsTransformable(qB) ? qB : this._IsTransformable(qB[0]) ? qB[0] : null;
+                   OB && PY._AddAnimation(`${ZB.name}`, MB, OB, ZB, BB.dataAccessorType, BB.animationChannelTargetPath, GB, YB, DB, QB, BB.useQuaternion, oB, NB)
```

#### 864. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8503` → after: `L8503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8503) · [Before (L8503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8503)

```diff
-                   const BH = QH instanceof tA ? QH : QH[0];
+                   const OB = qB instanceof jY ? qB : qB[0];
```

#### 865. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8530` → after: `L8530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8530) · [Before (L8530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8530)

```diff
-                     BH ? (tH || (tH = new hA.b(`${GH.name}_${HH.name}_MorphWeightAnimation`, "influence", BH.framePerSecond, hA.b.ANIMATIONTYPE_FLOAT, BH.mB, BH.enableBlending)), zH.push(BH.getKeys()[LH])) : zH.push({
+                     OB ? (jB || (jB = new oY.d(`${zB.name}_${BB.name}_MorphWeightAnimation`, "influence", OB.framePerSecond, oY.d.ANIMATIONTYPE_FLOAT, OB.WG, OB.enableBlending)), yB.push(OB.getKeys()[GB])) : yB.push({
```

#### 866. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8540` → after: `L8540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8540) · [Before (L8540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8540)

```diff
-               WH && XA._AddAnimation(`${GH.name}_${HH.name}_MorphWeightAnimation`, EH, HH, tH, WH.dataAccessorType, WH.animationChannelTargetPath, LH, AH, rH, SH, WH.useQuaternion, hH, !1, BH?.numTargets)
+               ZB && PY._AddAnimation(`${zB.name}_${BB.name}_MorphWeightAnimation`, MB, BB, jB, ZB.dataAccessorType, ZB.animationChannelTargetPath, GB, YB, DB, QB, ZB.useQuaternion, oB, !1, OB?.numTargets)
```

#### 867. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8562-L8564` → after: `L8562-L8564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8562-L8564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8562-L8564) · [Before (L8562-L8564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8562-L8564)

```diff
-             XH = new AH.lu,
-             GH = new AH.lu,
-             UH = LH instanceof AA.d,
+             PB = new YB.Xp,
+             zB = new YB.Xp,
+             SB = GB instanceof YY.e,
```

#### 868. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8571` → after: `L8571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8571) · [Before (L8571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8571)

```diff
-                 YH && (AH.lu.FromArrayToRef(HH, 0, GH), wL(GH), GH.toArray(LH));
+                 lB && (YB.Xp.FromArrayToRef(BB, 0, zB), eG(zB), zB.toArray(GB));
```

#### 869. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8574` → after: `L8574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8574) · [Before (L8574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8574)

```diff
-                 4 === HH.length ? AH.Quaternion.FromArrayToRef(HH, 0, CH) : (LH = new Array(4), AH.lu.FromArrayToRef(HH, 0, XH), AH.Quaternion.FromEulerVectorToRef(XH, CH)), YH && (ZL(CH), UH && dL(CH)), CH.toArray(LH)
+                 4 === BB.length ? YB.Quaternion.FromArrayToRef(BB, 0, JB) : (GB = new Array(4), YB.Xp.FromArrayToRef(BB, 0, PB), YB.Quaternion.FromEulerVectorToRef(PB, JB)), lB && (TG(JB), SB && bG(JB)), JB.toArray(GB)
```

#### 870. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8614` → after: `L8614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8614) · [Before (L8614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8614)

```diff
-                 mB: BH.mB
+                 WG: OB.WG
```

#### 871. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8625` → after: `L8625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8625) · [Before (L8625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8625)

```diff
-           EH = hH ? AH.Quaternion.FromArray(tH).normalize() : AH.lu.FromArray(tH);
+           MB = oB ? YB.Quaternion.FromArray(jB).normalize() : YB.Xp.FromArray(jB);
```

#### 872. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8636` → after: `L8636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8636) · [Before (L8636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8636)

```diff
-             rH.Tools.Error(`glTFAnimation: Unsupported component name "${CH}"!`)
+             DB.Tools.Error(`glTFAnimation: Unsupported component name "${JB}"!`)
```

#### 873. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8642` → after: `L8642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8642) · [Before (L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8642)

```diff
-         tH.push(LH), "weights" !== SH ? (rH.dataType === hA.b.ANIMATIONTYPE_FLOAT && (BH = this._ConvertFactorToVector3OrQuaternion(BH, HH, rH, SH, CH)), "rotation" === SH ? (CH ? hH = BH : (EH = BH, AH.Quaternion.RotationYawPitchRollToRef(EH.y, EH.x, EH.z, hH)), zH.push(hH.xrH() … [truncated]
+         jB.push(GB), "weights" !== QB ? (DB.dataType === oY.d.ANIMATIONTYPE_FLOAT && (OB = this._ConvertFactorToVector3OrQuaternion(OB, BB, DB, QB, JB)), "rotation" === QB ? (JB ? oB = OB : (MB = OB, YB.Quaternion.RotationYawPitchRollToRef(MB.y, MB.x, MB.z, oB)), yB.push(oB.dDB() … [truncated]
```

#### 874. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8656` → after: `L8656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8656) · [Before (L8656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8656)

```diff
-             rH = (HH.rotationQuaternion ?? AH.Quaternion.Identity()).xrH()
+             DB = (BB.rotationQuaternion ?? YB.Quaternion.Identity()).dDB()
```

#### 875. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8658` → after: `L8658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8658) · [Before (L8658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8658)

```diff
-             rH = (HH.rotation ?? AH.lu.Zero()).xrH()
+             DB = (BB.rotation ?? YB.Xp.Zero()).dDB()
```

#### 876. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8661` → after: `L8661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8661) · [Before (L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8661)

```diff
-           rH = (HH.position ?? AH.lu.Zero()).xrH()
+           DB = (BB.position ?? YB.Xp.Zero()).dDB()
```

#### 877. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8663` → after: `L8663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8663) · [Before (L8663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8663)

```diff
-           rH = (HH.bX ?? AH.lu.One()).xrH()
+           DB = (BB.SP ?? YB.Xp.One()).dDB()
```

#### 878. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8670-L8671` → after: `L8670-L8671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8670-L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8670-L8671) · [Before (L8670-L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8670-L8671)

```diff
-         if (CH === hA.b.ANIMATIONTYPE_VECTOR3) {
-           let BH = HH.value.xrH();
+         if (JB === oY.d.ANIMATIONTYPE_VECTOR3) {
+           let OB = BB.value.dDB();
```

#### 879. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8673-L8674` → after: `L8673-L8674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8673-L8674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8673-L8674) · [Before (L8673-L8674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8673-L8674)

```diff
-             const HH = AH.lu.FromArray(BH);
-             BH = AH.Quaternion.RotationYawPitchRoll(HH.y, HH.x, HH.z).xrH()
+             const BB = YB.Xp.FromArray(OB);
+             OB = YB.Quaternion.RotationYawPitchRoll(BB.y, BB.x, BB.z).dDB()
```

#### 880. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8677` → after: `L8677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8677) · [Before (L8677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8677)

```diff
-         } else if (CH === hA.b.ANIMATIONTYPE_FLOAT) {
+         } else if (JB === oY.d.ANIMATIONTYPE_FLOAT) {
```

#### 881. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8681-L8682` → after: `L8681-L8682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8681-L8682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8681-L8682) · [Before (L8681-L8682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8681-L8682)

```diff
-               const HH = tH ? zH : AH.Quaternion.RotationYawPitchRoll(zH.y, zH.x, zH.z).normalize();
-               LH.push(HH.xrH())
+               const BB = jB ? yB : YB.Quaternion.RotationYawPitchRoll(yB.y, yB.x, yB.z).normalize();
+               GB.push(BB.dDB())
```

#### 882. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8684` → after: `L8684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8684) · [Before (L8684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8684)

```diff
-             LH.push(zH.xrH())
+             GB.push(yB.dDB())
```

#### 883. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8686` → after: `L8686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8686) · [Before (L8686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8686)

```diff
-         } else CH === hA.b.ANIMATIONTYPE_QUATERNION ? LH.push(HH.value.normalize().xrH()) : rH.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
+         } else JB === oY.d.ANIMATIONTYPE_QUATERNION ? GB.push(BB.value.normalize().dDB()) : DB.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
```

#### 884. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8719` → after: `L8719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8719) · [Before (L8719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8719)

```diff
-               if (hH) tH = zH.xrH();
+               if (oB) jB = yB.dDB();
```

#### 885. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8722` → after: `L8722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8722) · [Before (L8722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8722)

```diff
-                 tH = AH.Quaternion.RotationYawPitchRoll(HH.y, HH.x, HH.z).xrH()
+                 jB = YB.Quaternion.RotationYawPitchRoll(BB.y, BB.x, BB.z).dDB()
```

#### 886. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8725` → after: `L8725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8725) · [Before (L8725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8725)

```diff
-           else tH = "weights" === LH ? zH ? [zH] : [0] : zH ? zH.xrH() : [0, 0, 0];
+           else jB = "weights" === GB ? yB ? [yB] : [0] : yB ? yB.dDB() : [0, 0, 0];
```

#### 887. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8750` → after: `L8750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8750) · [Before (L8750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8750)

```diff
-         GH = AH.lu.Zero();
+         zB = YB.Xp.Zero();
```

#### 888. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8754` → after: `L8754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8754) · [Before (L8754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8754)

```diff
-           tH = CH.getVerticesData(EH.e.PositionKind);
+           jB = JB.getVerticesData(MB.g.PositionKind);
```

#### 889. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8761-L8762` → after: `L8761-L8762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8761-L8762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8761-L8762) · [Before (L8761-L8762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8761-L8762)

```diff
-             const hH = AH.lu.FromArray(tH, 3 * LH);
-             AH.lu.FromArray(SH, 3 * LH).subtractToRef(hH, GH), GH.x *= XH, BH[0] = Math.min(BH[0], GH.x), rH[0] = Math.max(rH[0], GH.x), BH[1] = Math.min(BH[1], GH.y), rH[1] = Math.max(rH[1], GH.y), BH[2] = Math.min(BH[2], GH.z), rH[2] = Math.max(rH[2], GH.z), HH[3 * LH] = GH.x,  … [truncated]
+             const oB = YB.Xp.FromArray(jB, 3 * GB);
+             YB.Xp.FromArray(QB, 3 * GB).subtractToRef(oB, zB), zB.x *= PB, OB[0] = Math.min(OB[0], zB.x), DB[0] = Math.max(DB[0], zB.x), OB[1] = Math.min(OB[1], zB.y), DB[1] = Math.max(DB[1], zB.y), OB[2] = Math.min(OB[2], zB.z), DB[2] = Math.max(DB[2], zB.z), BB[3 * GB] = zB.x,  … [truncated]
```

#### 890. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8770` → after: `L8770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8770) · [Before (L8770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8770)

```diff
-         } else rH.Tools.Warn(`Morph target positions for mesh ${BH.name} were not exported. Mesh does not have position vertex data`)
+         } else DB.Tools.Warn(`Morph target positions for mesh ${OB.name} were not exported. Mesh does not have position vertex data`)
```

#### 891. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8774` → after: `L8774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8774) · [Before (L8774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8774)

```diff
-           tH = CH.getVerticesData(EH.e.NormalKind);
+           jB = JB.getVerticesData(MB.g.NormalKind);
```

#### 892. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8779-L8780` → after: `L8779-L8780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8779-L8780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8779-L8780) · [Before (L8779-L8780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8779-L8780)

```diff
-             const BH = AH.lu.FromArray(tH, 3 * LH).normalize();
-             AH.lu.FromArray(SH, 3 * LH).normalize().subtractToRef(BH, GH), HH[3 * LH] = GH.x * XH, HH[3 * LH + 1] = GH.y, HH[3 * LH + 2] = GH.z
+             const OB = YB.Xp.FromArray(jB, 3 * GB).normalize();
+             YB.Xp.FromArray(QB, 3 * GB).normalize().subtractToRef(OB, zB), BB[3 * GB] = zB.x * PB, BB[3 * GB + 1] = zB.y, BB[3 * GB + 2] = zB.z
```

#### 893. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8785` → after: `L8785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8785) · [Before (L8785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8785)

```diff
-         } else rH.Tools.Warn(`Morph target normals for mesh ${BH.name} were not exported. Mesh does not have normals vertex data`)
+         } else DB.Tools.Warn(`Morph target normals for mesh ${OB.name} were not exported. Mesh does not have normals vertex data`)
```

#### 894. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8789` → after: `L8789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8789) · [Before (L8789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8789)

```diff
-           tH = CH.getVerticesData(EH.e.TangentKind);
+           jB = JB.getVerticesData(MB.g.TangentKind);
```

#### 895. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8795` → after: `L8795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8795) · [Before (L8795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8795)

```diff
-             const BH = AH.lu.FromArray(tH, 4 * LH);
+             const OB = YB.Xp.FromArray(jB, 4 * GB);
```

#### 896. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8797` → after: `L8797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8797) · [Before (L8797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8797)

```diff
-             const rH = AH.lu.FromArray(SH, 3 * LH);
+             const DB = YB.Xp.FromArray(QB, 3 * GB);
```

#### 897. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8803` → after: `L8803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8803) · [Before (L8803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8803)

```diff
-         } else rH.Tools.Warn(`Morph target tangents for mesh ${BH.name} were not exported. Mesh does not have tangents vertex data`)
+         } else DB.Tools.Warn(`Morph target tangents for mesh ${OB.name} were not exported. Mesh does not have tangents vertex data`)
```

#### 898. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8807-L8808` → after: `L8807-L8808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8807-L8808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8807-L8808) · [Before (L8807-L8808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8807-L8808)

```diff
-           tH = CH.getVerticesData(EH.e.ColorKind),
-           XH = CH.getVertexBuffer(EH.e.ColorKind);
+           jB = JB.getVerticesData(MB.g.ColorKind),
+           PB = JB.getVertexBuffer(MB.g.ColorKind);
```

#### 899. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8816-L8817` → after: `L8816-L8817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8816-L8817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8816-L8817) · [Before (L8816-L8817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8816-L8817)

```diff
-               const rH = AH.lu.FromArray(tH, LH * HH);
-               AH.lu.FromArray(SH, LH * HH).subtractToRef(rH, GH), BH[3 * LH] = GH.x, BH[3 * LH + 1] = GH.y, BH[3 * LH + 2] = GH.z
+               const DB = YB.Xp.FromArray(jB, GB * BB);
+               YB.Xp.FromArray(QB, GB * BB).subtractToRef(DB, zB), OB[3 * GB] = zB.x, OB[3 * GB + 1] = zB.y, OB[3 * GB + 2] = zB.z
```

#### 900. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8822` → after: `L8822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8822) · [Before (L8822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8822)

```diff
-           } else rH.Tools.Warn(`Unsupported number of components for color attribute: ${HH}`);
+           } else DB.Tools.Warn(`Unsupported number of components for color attribute: ${BB}`);
```

#### 901. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8826` → after: `L8826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8826) · [Before (L8826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8826)

```diff
-         } else rH.Tools.Warn(`Morph target colors for mesh ${BH.name} were not exported. Mesh does not have colors vertex data`)
+         } else DB.Tools.Warn(`Morph target colors for mesh ${OB.name} were not exported. Mesh does not have colors vertex data`)
```

#### 902. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8830` → after: `L8830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8830) · [Before (L8830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8830)

```diff
-     var YA = LH(45055);
+     var lY = GB(44709);
```

#### 903. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8833` → after: `L8833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8833) · [Before (L8833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8833)

```diff
-     var QA = LH(42396);
+     var qY = GB(42093);
```

#### 904. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8839` → after: `L8839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8839) · [Before (L8839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8839)

```diff
-         this._currentPath = new QA.e(HH, BH), this._tempPaths.push(this._currentPath)
+         this._currentPath = new qY.l(BB, OB), this._tempPaths.push(this._currentPath)
```

#### 905. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8934` → after: `L8934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8934) · [Before (L8934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8934)

```diff
-         if (HH.length && !Array.isArray(HH[0]) && HH[0] instanceof NH.o) {
+         if (BB.length && !Array.isArray(BB[0]) && BB[0] instanceof XB.r) {
```

#### 906. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8942` → after: `L8942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8942) · [Before (L8942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8942)

```diff
-         if (HH.length > 0 && Array.isArray(HH[0]) && HH[0].length > 0 && HH[0][0] instanceof NH.o) {
+         if (BB.length > 0 && Array.isArray(BB[0]) && BB[0].length > 0 && BB[0][0] instanceof XB.r) {
```

#### 907. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8986-L8987` → after: `L8986-L8987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8986-L8987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8986-L8987) · [Before (L8986-L8987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8986-L8987)

```diff
-             SH = rH.getVerticesData(RH.i.PositionKind),
-             hH = rH.vrH();
+             QB = DB.getVerticesData(wB.h.PositionKind),
+             oB = DB.KDB();
```

#### 908. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L8993-L8995` → after: `L8993-L8995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R8993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L8993-L8995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L8993-L8995) · [Before (L8993-L8995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L8993-L8995)

```diff
-                 XH = new NH.o(SH[zH], SH[zH + 1], SH[zH + 2]),
-                 GH = new NH.o(SH[CH], SH[CH + 1], SH[CH + 2]),
-                 YH = new NH.o(SH[EH], SH[EH + 1], SH[EH + 2]);
+                 PB = new XB.r(QB[yB], QB[yB + 1], QB[yB + 2]),
+                 zB = new XB.r(QB[JB], QB[JB + 1], QB[JB + 2]),
+                 lB = new XB.r(QB[MB], QB[MB + 1], QB[MB + 2]);
```

#### 909. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9011` → after: `L9011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9011) · [Before (L9011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9011)

```diff
-             for (let BH = 0; BH < HH.length; BH += 3) LH.push(new NH.o(HH[BH], HH[BH + 1], HH[BH + 2]));
+             for (let OB = 0; OB < BB.length; OB += 3) GB.push(new XB.r(BB[OB], BB[OB + 1], BB[OB + 2]));
```

#### 910. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9018` → after: `L9018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9018) · [Before (L9018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9018)

```diff
-         for (let AH = 0; AH < BH.length; AH += 3) LH.push(new NH.o(BH[AH], BH[AH + 1], BH[AH + 2]));
+         for (let YB = 0; YB < OB.length; YB += 3) GB.push(new XB.r(OB[YB], OB[YB + 1], OB[YB + 2]));
```

#### 911. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9037` → after: `L9037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9037) · [Before (L9037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9037)

```diff
-         const LH = NH.l.lu[0];
+         const GB = XB.k.Xp[0];
```

#### 912. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9060-L9062` → after: `L9060-L9062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9060-L9062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9060-L9062) · [Before (L9060-L9062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9060-L9062)

```diff
-           SH = NH.l.lu[0];
-         SH.IHH(LH);
-         const hH = NH.l.lu[1];
+           QB = XB.k.Xp[0];
+         QB.uBB(GB);
+         const oB = XB.k.Xp[1];
```

#### 913. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9070` → after: `L9070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9070) · [Before (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9070)

```diff
-         const LH = HH[0] instanceof NH.o ? vA.GetLineSegments(HH) : "number" === typeof HH[0] ? vA.GetLineSegments(vA.ToVector3Array(HH)) : HH,
+         const GB = BB[0] instanceof XB.r ? WY.GetLineSegments(BB) : "number" === typeof BB[0] ? WY.GetLineSegments(WY.ToVector3Array(BB)) : BB,
```

#### 914. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9119` → after: `L9119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9119) · [Before (L9119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9119)

```diff
-         return HH[hH].point2.subtractToRef(HH[hH].point1, NH.l.lu[0]), NH.l.lu[0].scaleToRef(zH, NH.l.lu[1]), AH || NH.l.lu[1].addInPlace(HH[hH].point1), NH.l.lu[1].clone()
+         return BB[oB].point2.subtractToRef(BB[oB].point1, XB.k.Xp[0]), XB.k.Xp[0].scaleToRef(yB, XB.k.Xp[1]), YB || XB.k.Xp[1].addInPlace(BB[oB].point1), XB.k.Xp[1].clone()
```

#### 915. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9126` → after: `L9126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9126) · [Before (L9126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9126)

```diff
-         for (let hH = 0; hH <= BH; hH++) SH.push(new NH.o(Math.cos(hH * rH) * HH, Math.sin(hH * rH) * AH, LH));
+         for (let oB = 0; oB <= OB; oB++) QB.push(new XB.r(Math.cos(oB * DB) * BB, Math.sin(oB * DB) * YB, GB));
```

#### 916. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9130` → after: `L9130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9130) · [Before (L9130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9130)

```diff
-         return QA.c.CreateQuadraticBezier(HH, BH, LH, AH).getPoints().flatMap((HH => [HH.x, HH.y, HH.z]))
+         return qY.h.CreateQuadraticBezier(BB, OB, GB, YB).getPoints().flatMap((BB => [BB.x, BB.y, BB.z]))
```

#### 917. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9168-L9169` → after: `L9168-L9169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9168-L9169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9168-L9169) · [Before (L9168-L9169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9168-L9169)

```diff
-         const rH = AH.Iu().getCaps().maxTextureSize ?? 1,
-           SH = BH.length > rH ? rH : BH.length,
+         const DB = YB.Lp().getCaps().maxTextureSize ?? 1,
+           QB = OB.length > DB ? DB : OB.length,
```

#### 918. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9173` → after: `L9173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9173) · [Before (L9173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9173)

```diff
-           zH = new UH.b(tH, SH, hH, EL.c.TEXTUREFORMAT_RGBA, AH, !1, !0, LH);
+           yB = new SB.d(jB, QB, oB, MG.c.TEXTUREFORMAT_RGBA, YB, !1, !0, GB);
```

#### 919. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9179` → after: `L9179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9179) · [Before (L9179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9179)

```diff
-           uA.EmptyColorsTexture = new UH.b(BH, 1, 1, EL.c.TEXTUREFORMAT_RGBA, HH, !1, !1, UH.b.NEAREST_NEAREST), uA.EmptyColorsTexture.name = "grlEmptyColorsTexture", uA.EmptyColorsTexture.uR.addOnce((() => {
+           pY.EmptyColorsTexture = new SB.d(OB, 1, 1, MG.c.TEXTUREFORMAT_RGBA, BB, !1, !1, SB.d.NEAREST_NEAREST), pY.EmptyColorsTexture.name = "grlEmptyColorsTexture", pY.EmptyColorsTexture.lF.addOnce((() => {
```

#### 920. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9197` → after: `L9197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9197) · [Before (L9197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9197)

```diff
-     class TA extends nH.b {
+     class VY extends cB.c {
```

#### 921. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9206` → after: `L9206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9206) · [Before (L9206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9206)

```diff
-         AH.GREASED_LINE_HAS_COLOR = !!LH.color && !LH.useColors, AH.GREASED_LINE_SIZE_ATTENUATION = LH.sizeAttenuation ?? !1, AH.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === LH.colorDistributionType, AH.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (BH ?? HH.yN()).useRightHa … [truncated]
+         YB.GREASED_LINE_HAS_COLOR = !!GB.color && !GB.useColors, YB.GREASED_LINE_SIZE_ATTENUATION = GB.sizeAttenuation ?? !1, YB.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === GB.colorDistributionType, YB.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (OB ?? BB.JF()).useRightHa … [truncated]
```

#### 922. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9261-L9262` → after: `L9261-L9262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9261-L9262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9261-L9262) · [Before (L9261-L9262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9261-L9262)

```diff
-           HH.wHH("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || HH.wHH("viewProjection", this._scene.getTransformMatrix());
-           const BH = NH.l.Vector4[0];
+           BB.TBB("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || BB.TBB("viewProjection", this._scene.getTransformMatrix());
+           const OB = XB.k.Vector4[0];
```

#### 923. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9265` → after: `L9265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9265) · [Before (L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9265)

```diff
-         const BH = NH.l.Vector4[0];
+         const OB = XB.k.Vector4[0];
```

#### 924. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9267` → after: `L9267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9267) · [Before (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9267)

```diff
-         const LH = NH.l.Vector4[1];
+         const GB = XB.k.Vector4[1];
```

#### 925. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9391` → after: `L9391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9391) · [Before (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9391)

```diff
-         BH.colorsTexture?.dispose(), this._colors && (BH.colorsTexture = vA.CreateColorsTexture(`${BH._material.name}-colors-texture`, this._colors, BH.colorsSampling, this._scene)), BH.setColor(this.color, !0), BH.colorsDistributionType = this.colorsDistributionType, BH.colorsSa … [truncated]
+         OB.colorsTexture?.dispose(), this._colors && (OB.colorsTexture = WY.CreateColorsTexture(`${OB._material.name}-colors-texture`, this._colors, OB.colorsSampling, this._scene)), OB.setColor(this.color, !0), OB.colorsDistributionType = this.colorsDistributionType, OB.colorsSa … [truncated]
```

#### 926. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9398-L9403` → after: `L9398-L9403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9398-L9403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9398-L9403) · [Before (L9398-L9403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9398-L9403)

```diff
-     var UA = LH(41693),
-       VA = LH(41703),
-       OA = LH(39588),
-       bA = LH(41769),
-       kA = LH(41124);
-     class mA extends bA.r {
+     var SY = GB(41411),
+       nY = GB(41423),
+       UY = GB(39358),
+       fY = GB(41468),
+       kY = GB(40844);
+     class dY extends fY.k {
```

#### 927. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9405` → after: `L9405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9405) · [Before (L9405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9405)

```diff
-         const rH = BH.Iu(),
+         const DB = OB.Lp(),
```

#### 928. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9422` → after: `L9422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9422) · [Before (L9422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9422)

```diff
-               SH ? await Promise.all([LH.e(643).then((() => LH(64729))), LH.e(699).then((() => LH(64735)))]) : await Promise.all([LH.e(636).then((() => LH(64742))), LH.e(700).then((() => LH(64744)))])
+               QB ? await Promise.all([GB.e(643).then((() => GB(64450))), GB.e(699).then((() => GB(64458)))]) : await Promise.all([GB.e(636).then((() => GB(64462))), GB.e(700).then((() => GB(64469)))])
```

#### 929. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9427-L9428` → after: `L9427-L9428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9427-L9428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9427-L9428) · [Before (L9427-L9428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9427-L9428)

```diff
-           }, this.visibility = AH.visibility ?? 1, this.useDash = AH.useDash ?? !1, this.dashRatio = AH.dashRatio ?? .5, this.dashOffset = AH.dashOffset ?? 0, this.dashCount = AH.dashCount ?? 1, this.width = AH.width ? AH.width : AH.sizeAttenuation && AH.cameraFacing ? uA.DEFAULT … [truncated]
-           const HH = new kA.d;
+           }, this.visibility = YB.visibility ?? 1, this.useDash = YB.useDash ?? !1, this.dashRatio = YB.dashRatio ?? .5, this.dashOffset = YB.dashOffset ?? 0, this.dashCount = YB.dashCount ?? 1, this.width = YB.width ? YB.width : YB.sizeAttenuation && YB.cameraFacing ? pY.DEFAULT … [truncated]
+           const BB = new kY.e;
```

#### 930. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9431` → after: `L9431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9431) · [Before (L9431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9431)

```diff
-         rH.uR.add((() => {
+         DB.lF.add((() => {
```

#### 931. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9439` → after: `L9439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9439) · [Before (L9439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9439)

```diff
-         this.setVector2("grl_colorModeAndColorDistributionType", new NH.n(this._colorMode, this._colorsDistributionType))
+         this.setVector2("grl_colorModeAndColorDistributionType", new XB.o(this._colorMode, this._colorsDistributionType))
```

#### 932. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9459` → after: `L9459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9459) · [Before (L9459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9459)

```diff
-             } else this._colorsTexture && this._colorsTexture !== uA.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = vA.CreateColorsTexture(`${this.name}-colors-texture`, HH, this.colorsSampling, this.yN())
+             } else this._colorsTexture && this._colorsTexture !== pY.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = WY.CreateColorsTexture(`${this.name}-colors-texture`, BB, this.colorsSampling, this.JF())
```

#### 933. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9462` → after: `L9462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9462) · [Before (L9462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9462)

```diff
-           const HH = this.yN();
+           const BB = this.JF();
```

#### 934. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9575` → after: `L9575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9575) · [Before (L9575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9575)

```diff
-         this._colorsTexture?.dispose(), AH.color && (this.color = AH.color), AH.colorDistributionType && (this.colorsDistributionType = AH.colorDistributionType), AH.colorsSampling && (this.colorsSampling = AH.colorsSampling), AH.colorMode && (this.colorMode = AH.colorMode), AH.u … [truncated]
+         this._colorsTexture?.dispose(), YB.color && (this.color = YB.color), YB.colorDistributionType && (this.colorsDistributionType = YB.colorDistributionType), YB.colorsSampling && (this.colorsSampling = YB.colorsSampling), YB.colorMode && (this.colorMode = YB.colorMode), YB.u … [truncated]
```

#### 935. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9591` → after: `L9591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9591) · [Before (L9591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9591)

```diff
-         super(HH, BH, null, null, !1, !1), this.name = HH, this._options = LH, this._lazy = !1, this._updatable = !1, this._engine = BH.Iu(), this._lazy = LH.lazy ?? !1, this._updatable = LH.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._po … [truncated]
+         super(BB, OB, null, null, !1, !1), this.name = BB, this._options = GB, this._lazy = !1, this._updatable = !1, this._engine = OB.Lp(), this._lazy = GB.lazy ?? !1, this._updatable = GB.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._po … [truncated]
```

#### 936. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9603` → after: `L9603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9603) · [Before (L9603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9603)

```diff
-         this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.cu && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
+         this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.Ep && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
```

#### 937. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9620` → after: `L9620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9620) · [Before (L9620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9620)

```diff
-         this._uvs = HH instanceof Float32Array ? HH : new Float32Array(HH), this._createVertexBuffers()
+         this._uvs = BB instanceof Float32Array ? BB : new Float32Array(BB), this._createVertexBuffers()
```

#### 938. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9647` → after: `L9647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9647) · [Before (L9647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9647)

```diff
-         return OA.d.DeepCopy(this._points, HH), HH
+         return UY.b.DeepCopy(this._points, BB), BB
```

#### 939. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9671-L9672` → after: `L9671-L9672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9671-L9672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9671-L9672) · [Before (L9671-L9672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9671-L9672)

```diff
-         const BH = new VA.b;
-         return BH.positions = this._vertexPositions, BH.indices = this._indices, BH.uvs = this._uvs, HH && (BH.normals = [], VA.b.ComputeNormals(this._vertexPositions, this._indices, BH.normals)), BH.applyToMesh(this, this._options.updatable), BH
+         const OB = new nY.e;
+         return OB.positions = this._vertexPositions, OB.indices = this._indices, OB.uvs = this._uvs, BB && (OB.normals = [], nY.e.ComputeNormals(this._vertexPositions, this._indices, OB.normals)), OB.applyToMesh(this, this._options.updatable), OB
```

#### 940. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9675-L9676` → after: `L9675-L9676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9675-L9676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9675-L9676) · [Before (L9675-L9676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9675-L9676)

```diff
-         const BH = this._scene.Iu(),
-           LH = new RH.b(BH, HH, this._updatable, 3);
+         const OB = this._scene.Lp(),
+           GB = new wB.c(OB, BB, this._updatable, 3);
```

#### 941. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9808` → after: `L9808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9808) · [Before (L9808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9808)

```diff
-         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QH.d.LastCreatedScene,
+         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qB.b.LastCreatedScene,
```

#### 942. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9812` → after: `L9812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9812) · [Before (L9812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9812)

```diff
-               generator: `Babylon.js v${uH.b.Version}`,
+               generator: `Babylon.js v${pB.c.Version}`,
```

#### 943. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9819` → after: `L9819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9819) · [Before (L9819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9819)

```diff
-           metadataSelector: HH => HH?.XN?.extras,
+           metadataSelector: BB => BB?.Im?.extras,
```

#### 944. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9840` → after: `L9840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9840) · [Before (L9840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9840)

```diff
-         cA.UnregisterExtension(HH) && rH.Tools.Warn(`Extension with the name ${HH} already exists`), cA._ExtensionFactories[HH] = BH;
+         iY.UnregisterExtension(BB) && DB.Tools.Warn(`Extension with the name ${BB} already exists`), iY._ExtensionFactories[BB] = OB;
```

#### 945. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9863` → after: `L9863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9863) · [Before (L9863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9863)

```diff
-         return AH.byteLength && (this._glTF.buffers = [AH]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, … [truncated]
+         return YB.byteLength && (this._glTF.buffers = [YB]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, … [truncated]
```

#### 946. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9884` → after: `L9884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9884) · [Before (L9884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9884)

```diff
-         return 0 === BH ? BH : 4 - BH
+         return 0 === OB ? OB : 4 - OB
```

#### 947. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9917-L9919` → after: `L9917-L9919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9917-L9919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9917-L9919) · [Before (L9917-L9919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9917-L9919)

```diff
-         if (BH.getPivotPoint().equalsWithEpsilon(qL, KL.d) || rH.Tools.Warn("Pivot points are not supported in the glTF serializer"), !BH.position.equalsWithEpsilon(qL, KL.d)) {
-           const rH = AH.TmpVectors.lu[0].Tm(BH.position);
-           LH && wL(rH), HH.translation = rH.xrH()
+         if (OB.getPivotPoint().equalsWithEpsilon(gG, FG.b) || DB.Tools.Warn("Pivot points are not supported in the glTF serializer"), !OB.position.equalsWithEpsilon(gG, FG.b)) {
+           const DB = YB.TmpVectors.Xp[0].IU(OB.position);
+           GB && eG(DB), BB.translation = DB.dDB()
```

#### 948. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9921` → after: `L9921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9921) · [Before (L9921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9921)

```diff
-         BH.bX.equalsWithEpsilon(NL, KL.d) || (HH.scale = BH.bX.xrH());
+         OB.SP.equalsWithEpsilon(XG, FG.b) || (BB.scale = OB.SP.dDB());
```

#### 949. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9923` → after: `L9923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9923) · [Before (L9923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9923)

```diff
-         SH.equalsWithEpsilon(gL, KL.d) || (LH && ZL(SH), HH.rotation = SH.normalize().xrH())
+         QB.equalsWithEpsilon(rG, FG.b) || (GB && TG(QB), BB.rotation = QB.normalize().dDB())
```

#### 950. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9926` → after: `L9926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9926) · [Before (L9926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9926)

```diff
-         const rH = AH.TmpVectors.lu[0],
+         const DB = YB.TmpVectors.Xp[0],
```

#### 951. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9933` → after: `L9933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9933) · [Before (L9933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9933)

```diff
-         rH.equalsWithEpsilon(qL, KL.d) || (LH && wL(rH), HH.translation = rH.xrH()), LH && ZL(SH), this._babylonScene.useRightHandedSystem || dL(SH), SH.equalsWithEpsilon(gL, KL.d) || (HH.rotation = SH.xrH())
+         DB.equalsWithEpsilon(gG, FG.b) || (GB && eG(DB), BB.translation = DB.dDB()), GB && TG(QB), this._babylonScene.useRightHandedSystem || bG(QB), QB.equalsWithEpsilon(rG, FG.b) || (BB.rotation = QB.dDB())
```

#### 952. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9938` → after: `L9938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9938) · [Before (L9938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9938)

```diff
-             type: HH.mode === AA.d.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
+             type: BB.mode === YY.e.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
```

#### 953. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9941-L9942` → after: `L9941-L9942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9941-L9942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9941-L9942) · [Before (L9941-L9942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9941-L9942)

```diff
-             aspectRatio: HH.Iu().getAspectRatio(HH),
-             yfov: HH.fovMode === AA.d.FOVMODE_VERTICAL_FIXED ? HH.fov : HH.fov * HH.Iu().getAspectRatio(HH),
+             aspectRatio: BB.Lp().getAspectRatio(BB),
+             yfov: BB.fovMode === YY.e.FOVMODE_VERTICAL_FIXED ? BB.fov : BB.fov * BB.Lp().getAspectRatio(BB),
```

#### 954. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L9947-L9948` → after: `L9947-L9948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R9947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L9947-L9948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L9947-L9948) · [Before (L9947-L9948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L9947-L9948)

```diff
-             const LH = HH.orthoLeft && HH.orthoRight ? .5 * (HH.orthoRight - HH.orthoLeft) : .5 * HH.Iu().getRenderWidth(),
-               AH = HH.orthoBottom && HH.orthoTop ? .5 * (HH.orthoTop - HH.orthoBottom) : .5 * HH.Iu().getRenderHeight();
+             const GB = BB.orthoLeft && BB.orthoRight ? .5 * (BB.orthoRight - BB.orthoLeft) : .5 * BB.Lp().getRenderWidth(),
+               YB = BB.orthoBottom && BB.orthoTop ? .5 * (BB.orthoTop - BB.orthoBottom) : .5 * BB.Lp().getRenderHeight();
```

#### 955. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10033` → after: `L10033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10033) · [Before (L10033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10033)

```diff
-               BH instanceof XH.c && !BH.parent && (SH ?? (SH = new Set)).add(BH)
+               OB instanceof PB.e && !OB.parent && (QB ?? (QB = new Set)).add(OB)
```

#### 956. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10058` → after: `L10058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10058) · [Before (L10058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10058)

```diff
-         return LH >= 0 ? LH : void 0
+         return GB >= 0 ? GB : void 0
```

#### 957. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10096` → after: `L10096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10096) · [Before (L10096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10096)

```diff
-             return LH >= 0 ? LH : void 0
+             return GB >= 0 ? GB : void 0
```

#### 958. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10104` → after: `L10104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10104) · [Before (L10104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10104)

```diff
-         if (!AH) throw new Error(`Cannot write ${BH}: glTF node ${HH} does not exist.`);
+         if (!YB) throw new Error(`Cannot write ${OB}: glTF node ${BB} does not exist.`);
```

#### 959. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10118` → after: `L10118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10118) · [Before (L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10118)

```diff
-         if (this._shouldExportNode(HH) && HH instanceof GH.e && HH.geometry) {
+         if (this._shouldExportNode(BB) && BB instanceof zB.b && BB.geometry) {
```

#### 960. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10167-L10169` → after: `L10167-L10169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10167-L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10167-L10169) · [Before (L10167-L10169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10167-L10169)

```diff
-               case EH.e.NormalKind:
-               case EH.e.TangentKind:
-                 (0, fL.j)(hH, LH, rH, SH, tH, zH, CH, (HH => {
+               case MB.g.NormalKind:
+               case MB.g.TangentKind:
+                 (0, mG.k)(oB, GB, DB, QB, jB, yB, JB, (BB => {
```

#### 961. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10177` → after: `L10177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10177) · [Before (L10177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10177)

```diff
-               case EH.e.ColorKind: {
+               case MB.g.ColorKind: {
```

#### 962. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10181` → after: `L10181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10181) · [Before (L10181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10181)

```diff
-                   mH.e.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
+                   dB.b.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
```

#### 963. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10184` → after: `L10184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10184) · [Before (L10184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10184)

```diff
-                 tH == EH.e.UNSIGNED_BYTE && mH.e.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
+                 jB == MB.g.UNSIGNED_BYTE && dB.b.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
```

#### 964. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10186-L10189` → after: `L10186-L10189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10186-L10189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10186-L10189) · [Before (L10186-L10189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10186-L10189)

```diff
-                   XH = new WH.d,
-                   GH = this._babylonScene.Iu().useExactSrgbConversions;
-                 (0, fL.j)(hH, LH, rH, SH, tH, zH, CH, (HH => {
-                   3 === HH.length ? (AH.SX(HH, 0), AH.toLinearSpaceToRef(AH, GH), AH.toArray(HH, 0)) : (XH.SX(HH, 0), XH.toLinearSpaceToRef(XH, GH), XH.toArray(HH, 0))
+                   PB = new ZB.e,
+                   zB = this._babylonScene.Lp().useExactSrgbConversions;
+                 (0, mG.k)(oB, GB, DB, QB, jB, yB, JB, (BB => {
+                   3 === BB.length ? (YB.OP(BB, 0), YB.toLinearSpaceToRef(YB, zB), YB.toArray(BB, 0)) : (PB.OP(BB, 0), PB.toLinearSpaceToRef(PB, zB), PB.toArray(BB, 0))
```

#### 965. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10207-L10210` → after: `L10207-L10210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10207-L10210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10207-L10210) · [Before (L10207-L10210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10207-L10210)

```diff
-                 case EH.e.PositionKind:
-                 case EH.e.NormalKind:
-                 case EH.e.TangentKind:
-                   (0, fL.j)(hH, LH, rH, SH, tH, zH, CH, (HH => {
+                 case MB.g.PositionKind:
+                 case MB.g.NormalKind:
+                 case MB.g.TangentKind:
+                   (0, mG.k)(oB, GB, DB, QB, jB, yB, JB, (BB => {
```

#### 966. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10227-L10229` → after: `L10227-L10229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10227-L10229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10227-L10229) · [Before (L10227-L10229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10227-L10229)

```diff
-               case EH.e.MatricesIndicesKind:
-               case EH.e.MatricesIndicesExtraKind:
-                 if (BH.type == EH.e.FLOAT) {
+               case MB.g.MatricesIndicesKind:
+               case MB.g.MatricesIndicesExtraKind:
+                 if (OB.type == MB.g.FLOAT) {
```

#### 967. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10235` → after: `L10235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10235) · [Before (L10235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10235)

```diff
-           0 !== CH.size && mH.e.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
+           0 !== JB.size && dB.b.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
```

#### 968. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10282-L10284` → after: `L10282-L10284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10282-L10284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10282-L10284) · [Before (L10282-L10284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10282-L10284)

```diff
-         if (HH instanceof XH.c && (this._setNodeTransformation(LH, HH, BH.convertToRightHanded), HH instanceof GH.e)) {
-           const AH = HH instanceof YH.b ? HH.XSH : HH;
-           if (AH.jU && AH.jU.length > 0 && (LH.mesh = await this._exportMeshAsync(AH, BH)), HH.skeleton) {
+         if (BB instanceof PB.e && (this._setNodeTransformation(GB, BB, OB.convertToRightHanded), BB instanceof zB.b)) {
+           const YB = BB instanceof lB.b ? BB.AQB : BB;
+           if (YB.iW && YB.iW.length > 0 && (GB.mesh = await this._exportMeshAsync(YB, OB)), BB.skeleton) {
```

#### 969. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10289` → after: `L10289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10289) · [Before (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10289)

```diff
-         if (HH instanceof lL.e) {
+         if (BB instanceof IG.h) {
```

#### 970. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10304` → after: `L10304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10304) · [Before (L10304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10304)

```diff
-         return await this._extensionsPostExportNodeAsync("exportNodeAsync", LH, HH, this._nodeMap, BH.convertToRightHanded) ? LH : (mH.e.Warn(`Not exporting node ${HH.name}`), null)
+         return await this._extensionsPostExportNodeAsync("exportNodeAsync", GB, BB, this._nodeMap, OB.convertToRightHanded) ? GB : (dB.b.Warn(`Not exporting node ${BB.name}`), null)
```

#### 971. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10310` → after: `L10310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10310) · [Before (L10310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10310)

```diff
-             case SH.c.TriangleFillMode:
+             case QB.b.TriangleFillMode:
```

#### 972. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10312` → after: `L10312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10312) · [Before (L10312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10312)

```diff
-             case SH.c.TriangleStripDrawMode:
+             case QB.b.TriangleStripDrawMode:
```

#### 973. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10314` → after: `L10314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10314) · [Before (L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10314)

```diff
-             case SH.c.TriangleFanDrawMode:
+             case QB.b.TriangleFanDrawMode:
```

#### 974. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10316-L10317` → after: `L10316-L10317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10316-L10317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10316-L10317) · [Before (L10316-L10317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10316-L10317)

```diff
-             case SH.c.PointListDrawMode:
-             case SH.c.PointFillMode:
+             case QB.b.PointListDrawMode:
+             case QB.b.PointFillMode:
```

#### 975. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10319` → after: `L10319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10319) · [Before (L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10319)

```diff
-             case SH.c.LineLoopDrawMode:
+             case QB.b.LineLoopDrawMode:
```

#### 976. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10321` → after: `L10321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10321) · [Before (L10321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10321)

```diff
-             case SH.c.LineListDrawMode:
+             case QB.b.LineListDrawMode:
```

#### 977. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10323` → after: `L10323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10323) · [Before (L10323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10323)

```diff
-             case SH.c.LineStripDrawMode:
+             case QB.b.LineStripDrawMode:
```

#### 978. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10326` → after: `L10326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10326) · [Before (L10326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10326)

```diff
-           throw new Error(`Unknown fill mode: ${HH}`)
+           throw new Error(`Unknown fill mode: ${BB}`)
```

#### 979. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10328` → after: `L10328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10328) · [Before (L10328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10328)

```diff
-         const XH = tH !== SH.c.CounterClockWiseSideOrientation && function(HH) {
+         const PB = jB !== QB.b.CounterClockWiseSideOrientation && function(BB) {
```

#### 980. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10330-L10332` → after: `L10330-L10332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10330-L10332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10330-L10332) · [Before (L10330-L10332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10330-L10332)

```diff
-             case SH.c.TriangleFillMode:
-             case SH.c.TriangleStripDrawMode:
-             case SH.c.TriangleFanDrawMode:
+             case QB.b.TriangleFillMode:
+             case QB.b.TriangleStripDrawMode:
+             case QB.b.TriangleFanDrawMode:
```

#### 981. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10338` → after: `L10338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10338) · [Before (L10338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10338)

```diff
-           if (hH === SH.c.TriangleStripDrawMode || hH === SH.c.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
+           if (oB === QB.b.TriangleStripDrawMode || oB === QB.b.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
```

#### 982. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10370` → after: `L10370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10370) · [Before (L10370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10370)

```diff
-             SH = hH === EH.e.PositionKind ? function(HH, BH, LH, AH) {
+             QB = oB === MB.g.PositionKind ? function(BB, OB, GB, YB) {
```

#### 983. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10377` → after: `L10377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10377) · [Before (L10377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10377)

```diff
-               return (0, fL.j)(HH, rH + LH * SH, SH, zH, hH, AH * zH, tH, (HH => {
+               return (0, mG.k)(BB, DB + GB * QB, QB, yB, oB, YB * yB, jB, (BB => {
```

#### 984. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10384-L10385` → after: `L10384-L10385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10384-L10385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10384-L10385) · [Before (L10384-L10385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10384-L10385)

```diff
-             zH = (hH === EH.e.MatricesIndicesKind || hH === EH.e.MatricesIndicesExtraKind) && HH.type === EH.e.FLOAT,
-             CH = zH ? EH.e.UNSIGNED_BYTE : HH.type,
+             yB = (oB === MB.g.MatricesIndicesKind || oB === MB.g.MatricesIndicesExtraKind) && BB.type === MB.g.FLOAT,
+             JB = yB ? MB.g.UNSIGNED_BYTE : BB.type,
```

#### 985. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10390` → after: `L10390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10390) · [Before (L10390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10390)

```diff
-             if (HH == EH.e.ColorKind) return BH ? "VEC4" : "VEC3";
+             if (BB == MB.g.ColorKind) return OB ? "VEC4" : "VEC3";
```

#### 986. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10392-L10393` → after: `L10392-L10393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10392-L10393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10392-L10393) · [Before (L10392-L10393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10392-L10393)

```diff
-               case EH.e.PositionKind:
-               case EH.e.NormalKind:
+               case MB.g.PositionKind:
+               case MB.g.NormalKind:
```

#### 987. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10395-L10399` → after: `L10395-L10399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10395-L10399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10395-L10399) · [Before (L10395-L10399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10395-L10399)

```diff
-               case EH.e.TangentKind:
-               case EH.e.MatricesIndicesKind:
-               case EH.e.MatricesIndicesExtraKind:
-               case EH.e.MatricesWeightsKind:
-               case EH.e.MatricesWeightsExtraKind:
+               case MB.g.TangentKind:
+               case MB.g.MatricesIndicesKind:
+               case MB.g.MatricesIndicesExtraKind:
+               case MB.g.MatricesWeightsKind:
+               case MB.g.MatricesWeightsExtraKind:
```

#### 988. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10401-L10406` → after: `L10401-L10406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10401-L10406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10401-L10406) · [Before (L10401-L10406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10401-L10406)

```diff
-               case EH.e.UVKind:
-               case EH.e.UV2Kind:
-               case EH.e.UV3Kind:
-               case EH.e.UV4Kind:
-               case EH.e.UV5Kind:
-               case EH.e.UV6Kind:
+               case MB.g.UVKind:
+               case MB.g.UV2Kind:
+               case MB.g.UV3Kind:
+               case MB.g.UV4Kind:
+               case MB.g.UV5Kind:
+               case MB.g.UV6Kind:
```

#### 989. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10409` → after: `L10409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10409) · [Before (L10409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10409)

```diff
-             throw new Error(`Unknown kind ${HH}`)
+             throw new Error(`Unknown kind ${BB}`)
```

#### 990. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10414` → after: `L10414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10414) · [Before (L10414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10414)

```diff
-             case EH.e.PositionKind:
+             case MB.g.PositionKind:
```

#### 991. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10416` → after: `L10416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10416) · [Before (L10416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10416)

```diff
-             case EH.e.NormalKind:
+             case MB.g.NormalKind:
```

#### 992. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10418` → after: `L10418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10418) · [Before (L10418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10418)

```diff
-             case EH.e.TangentKind:
+             case MB.g.TangentKind:
```

#### 993. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10420` → after: `L10420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10420) · [Before (L10420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10420)

```diff
-             case EH.e.ColorKind:
+             case MB.g.ColorKind:
```

#### 994. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10422` → after: `L10422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10422) · [Before (L10422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10422)

```diff
-             case EH.e.UVKind:
+             case MB.g.UVKind:
```

#### 995. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10424` → after: `L10424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10424) · [Before (L10424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10424)

```diff
-             case EH.e.UV2Kind:
+             case MB.g.UV2Kind:
```

#### 996. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10426` → after: `L10426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10426) · [Before (L10426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10426)

```diff
-             case EH.e.UV3Kind:
+             case MB.g.UV3Kind:
```

#### 997. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10428` → after: `L10428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10428) · [Before (L10428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10428)

```diff
-             case EH.e.UV4Kind:
+             case MB.g.UV4Kind:
```

#### 998. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10430` → after: `L10430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10430) · [Before (L10430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10430)

```diff
-             case EH.e.UV5Kind:
+             case MB.g.UV5Kind:
```

#### 999. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10432` → after: `L10432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10432) · [Before (L10432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10432)

```diff
-             case EH.e.UV6Kind:
+             case MB.g.UV6Kind:
```

#### 1000. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10434` → after: `L10434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10434) · [Before (L10434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10434)

```diff
-             case EH.e.MatricesIndicesKind:
+             case MB.g.MatricesIndicesKind:
```

#### 1001. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10436` → after: `L10436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10436) · [Before (L10436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10436)

```diff
-             case EH.e.MatricesIndicesExtraKind:
+             case MB.g.MatricesIndicesExtraKind:
```

#### 1002. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10438` → after: `L10438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10438) · [Before (L10438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10438)

```diff
-             case EH.e.MatricesWeightsKind:
+             case MB.g.MatricesWeightsKind:
```

#### 1003. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10440` → after: `L10440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10440) · [Before (L10440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10440)

```diff
-             case EH.e.MatricesWeightsExtraKind:
+             case MB.g.MatricesWeightsExtraKind:
```

#### 1004. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10443` → after: `L10443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10443) · [Before (L10443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10443)

```diff
-           throw new Error(`Unknown kind: ${HH}`)
+           throw new Error(`Unknown kind: ${BB}`)
```

#### 1005. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10450` → after: `L10450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10450) · [Before (L10450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10450)

```diff
-           if ((HH = HH instanceof rA.c ? HH.BBH[LH.materialIndex] : HH) instanceof UB) rH = await this._materialExporter.exportPBRMaterialAsync(HH, AH);
+           if ((BB = BB instanceof DY.d ? BB.jOB[GB.materialIndex] : BB) instanceof SO) DB = await this._materialExporter.exportPBRMaterialAsync(BB, YB);
```

#### 1006. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10453` → after: `L10453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10453) · [Before (L10453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10453)

```diff
-             if (!(HH instanceof pB)) return void mH.e.Warn(`Unsupported material '${HH.name}' with type ${HH.getClassName()}`);
+             if (!(BB instanceof xO)) return void dB.b.Warn(`Unsupported material '${BB.name}' with type ${BB.getClassName()}`);
```

#### 1007. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10467` → after: `L10467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10467) · [Before (L10467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10467)

```diff
-         const rH = HH.isUnIndexed ? null : HH.vrH(),
+         const DB = BB.isUnIndexed ? null : BB.KDB(),
```

#### 1008. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10470` → after: `L10470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10470) · [Before (L10470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10470)

```diff
-           zH = HH instanceof YA.e,
+           yB = BB instanceof lY.d,
```

#### 1009. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10472` → after: `L10472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10472) · [Before (L10472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10472)

```diff
-           EH = HH.jU;
+           MB = BB.iW;
```

#### 1010. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10478` → after: `L10478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10478) · [Before (L10478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10478)

```diff
-               EH = XH.eu() || this._babylonScene.defaultMaterial;
+               MB = PB.cp() || this._babylonScene.defaultMaterial;
```

#### 1011. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10487-L10488` → after: `L10487-L10488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10487-L10488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10487-L10488) · [Before (L10487-L10488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10487-L10488)

```diff
-               (!hH.equalsWithEpsilon(rH, KL.d) || SH < 1) && (BH.pbrMetallicRoughness = {
-                 baseColorFactor: [...hH.xrH(), SH]
+               (!oB.equalsWithEpsilon(DB, FG.b) || QB < 1) && (OB.pbrMetallicRoughness = {
+                 baseColorFactor: [...oB.dDB(), QB]
```

#### 1012. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10495-L10496` → after: `L10495-L10496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10495-L10496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10495-L10496) · [Before (L10495-L10496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10495-L10496)

```diff
-               (!AH.color.equalsWithEpsilon(WH.Color3.White(), KL.d) || AH.alpha < 1) && (BH.pbrMetallicRoughness = {
-                 baseColorFactor: [...AH.color.xrH(), AH.alpha]
+               (!YB.color.equalsWithEpsilon(ZB.Color3.White(), FG.b) || YB.alpha < 1) && (OB.pbrMetallicRoughness = {
+                 baseColorFactor: [...YB.color.dDB(), YB.alpha]
```

#### 1013. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10499` → after: `L10499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10499) · [Before (L10499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10499)

```diff
-             const GH = zH || CH ? SH.c.LineListDrawMode : HH.overrideRenderingFillMode ?? EH.fillMode;
+             const zB = yB || JB ? QB.b.LineListDrawMode : BB.overrideRenderingFillMode ?? MB.fillMode;
```

#### 1014. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10501` → after: `L10501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10501) · [Before (L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10501)

```diff
-             BH.wasAddedByNoopNode && !HH.yN().useRightHandedSystem && (YH = YH === SH.c.ClockWiseSideOrientation ? SH.c.CounterClockWiseSideOrientation : SH.c.ClockWiseSideOrientation), this._exportIndices(rH, rH ? (0, fL.e)(rH, XH.indexCount, XH.indexStart, XH.verticesStart) : X … [truncated]
+             OB.wasAddedByNoopNode && !BB.JF().useRightHandedSystem && (lB = lB === QB.b.ClockWiseSideOrientation ? QB.b.CounterClockWiseSideOrientation : QB.b.ClockWiseSideOrientation), this._exportIndices(DB, DB ? (0, mG.e)(DB, PB.indexCount, PB.indexStart, PB.verticesStart) : P … [truncated]
```

#### 1015. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10550` → after: `L10550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10550) · [Before (L10550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10550)

```diff
-             const HH = NH.o.Zero(),
+             const BB = XB.r.Zero(),
```

#### 1016. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10552` → after: `L10552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10552) · [Before (L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10552)

```diff
-               hH = NH.o.One(),
+               oB = XB.r.One(),
```

#### 1017. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10554-L10556` → after: `L10554-L10556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10554-L10556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10554-L10556) · [Before (L10554-L10556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10554-L10556)

```diff
-               zH = NH.l.lu[2],
-               CH = NH.l.Quaternion[1],
-               EH = NH.l.lu[3];
+               yB = XB.k.Xp[2],
+               JB = XB.k.Quaternion[1],
+               MB = XB.k.Xp[3];
```

#### 1018. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10560-L10562` → after: `L10560-L10562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10560-L10562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10560-L10562) · [Before (L10560-L10562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10560-L10562)

```diff
-             const uH = new Float32Array(3 * LH.gHH),
-               QH = new Float32Array(4 * LH.gHH),
-               WH = new Float32Array(3 * LH.gHH);
+             const pB = new Float32Array(3 * GB.rBB),
+               qB = new Float32Array(4 * GB.rBB),
+               ZB = new Float32Array(3 * GB.rBB);
```

#### 1019. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10564` → after: `L10564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10564) · [Before (L10564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10564)

```diff
-             for (const BH of tH) BH.decompose(EH, CH, zH), rH && (wL(zH), ZL(CH)), uH.set(zH.xrH(), 3 * MH), QH.set(CH.normalize().xrH(), 4 * MH), WH.set(EH.xrH(), 3 * MH), XH = XH || !zH.equalsWithEpsilon(HH), GH = GH || !CH.equalsWithEpsilon(AH), YH = YH || !EH.equalsWithEpsilo … [truncated]
+             for (const OB of jB) OB.decompose(MB, JB, yB), DB && (eG(yB), TG(JB)), pB.set(yB.dDB(), 3 * NB), qB.set(JB.normalize().dDB(), 4 * NB), ZB.set(MB.dDB(), 3 * NB), PB = PB || !yB.equalsWithEpsilon(BB), zB = zB || !JB.equalsWithEpsilon(YB), lB = lB || !MB.equalsWithEpsilo … [truncated]
```

#### 1020. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10568` → after: `L10568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10568) · [Before (L10568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10568)

```diff
-             XH && (xH.attributes.TRANSLATION = this._buildAccessor(uH, "VEC3", LH.gHH, SH)), GH && (xH.attributes.ROTATION = this._buildAccessor(QH, "VEC4", LH.gHH, SH)), YH && (xH.attributes.SCALE = this._buildAccessor(WH, "VEC3", LH.gHH, SH));
+             PB && (RB.attributes.TRANSLATION = this._buildAccessor(pB, "VEC3", GB.rBB, QB)), zB && (RB.attributes.ROTATION = this._buildAccessor(qB, "VEC4", GB.rBB, QB)), lB && (RB.attributes.SCALE = this._buildAccessor(ZB, "VEC3", GB.rBB, QB));
```

#### 1021. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10571` → after: `L10571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10571) · [Before (L10571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10571)

```diff
-               const HH = LH.gHH,
+               const BB = GB.rBB,
```

#### 1022. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10573` → after: `L10573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10573) · [Before (L10573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10573)

```diff
-               LH.hasVertexAlpha && vH.length === 4 * HH ? (this._instanceColorWarned || (mH.e.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), vH = gA(vH, HH)) : vH.length === 4 *  … [truncated]
+               GB.hasVertexAlpha && WB.length === 4 * BB ? (this._instanceColorWarned || (dB.b.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), WB = rY(WB, BB)) : WB.length === 4 *  … [truncated]
```

#### 1023. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10591` → after: `L10591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10591) · [Before (L10591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10591)

```diff
-     LH(41784);
+     GB(41472);
```

#### 1024. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10593` → after: `L10593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10593) · [Before (L10593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10593)

```diff
-     var nA = LH(45318);
+     var cY = GB(44999);
```

#### 1025. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10680-L10681` → after: `L10680-L10681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10680-L10681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10680-L10681) · [Before (L10680-L10681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10680-L10681)

```diff
-             url: rH ? OB.i.GetBabylonScriptURL(HH.wasmUrl, !0) : "",
-             wasmBinaryPromise: BH ? Promise.resolve(BH) : OB.i.LoadFileAsync(OB.i.GetBabylonScriptURL(HH.wasmBinaryUrl, !0))
+             url: DB ? UO.j.GetBabylonScriptURL(BB.wasmUrl, !0) : "",
+             wasmBinaryPromise: OB ? Promise.resolve(OB) : UO.j.LoadFileAsync(UO.j.GetBabylonScriptURL(BB.wasmBinaryUrl, !0))
```

#### 1026. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10683` → after: `L10683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10683) · [Before (L10683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10683)

```diff
-             url: rH ? OB.i.GetBabylonScriptURL(HH.fallbackUrl) : "",
+             url: DB ? UO.j.GetBabylonScriptURL(BB.fallbackUrl) : "",
```

#### 1027. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10715` → after: `L10715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10715) · [Before (L10715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10715)

```diff
-             await OB.i.LoadBabylonScriptAsync(SH.url)
+             await UO.j.LoadBabylonScriptAsync(QB.url)
```

#### 1028. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10745` → after: `L10745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10745) · [Before (L10745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10745)

```diff
-       return HH === RH.i.PositionKind ? "POSITION" : HH === RH.i.NormalKind ? "NORMAL" : HH === RH.i.ColorKind ? "COLOR" : HH.startsWith(RH.i.UVKind) ? "TEX_COORD" : "GENERIC"
+       return BB === wB.h.PositionKind ? "POSITION" : BB === wB.h.NormalKind ? "NORMAL" : BB === wB.h.ColorKind ? "COLOR" : BB.startsWith(wB.h.UVKind) ? "TEX_COORD" : "GENERIC"
```

#### 1029. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10781` → after: `L10781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10781) · [Before (L10781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10781)

```diff
-         return `${FA}(${DA})()`
+         return `${hY}(${aY})()`
```

#### 1030. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10817` → after: `L10817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10817) · [Before (L10817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10817)

```diff
-         HH instanceof UA.c && HH.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === BH?.method && (mH.e.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), BH.method = "MESH_SEQUENTIAL_ENCODING");
+         BB instanceof SY.c && BB.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === OB?.method && (dB.b.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), OB.method = "MESH_SEQUENTIAL_ENCODING");
```

#### 1031. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10819` → after: `L10819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10819) · [Before (L10819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10819)

```diff
-             let BH = HH.vrH(void 0, !0);
+             let OB = BB.KDB(void 0, !0);
```

#### 1032. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10826` → after: `L10826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10826) · [Before (L10826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10826)

```diff
-                 if (AH === RH.i.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
+                 if (YB === wB.h.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
```

#### 1033. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10831` → after: `L10831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10831) · [Before (L10831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10831)

```diff
-                 hH = (0, fL.r)(rH.getData(), SH, rH.type, rH.byteOffset, rH.byteStride, HH.getTotalVertices(), !0);
+                 oB = (0, mG.v)(DB.getData(), QB, DB.type, DB.byteOffset, DB.byteStride, BB.getTotalVertices(), !0);
```

#### 1034. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10845-L10847` → after: `L10845-L10847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10845-L10847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10845-L10847) · [Before (L10845-L10847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10845-L10847)

```diff
-       wasmUrl: `${OB.i._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
-       wasmBinaryUrl: `${OB.i._DefaultCdnUrl}/draco_encoder.wasm`,
-       fallbackUrl: `${OB.i._DefaultCdnUrl}/draco_encoder.js`
+       wasmUrl: `${UO.j._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
+       wasmBinaryUrl: `${UO.j._DefaultCdnUrl}/draco_encoder.wasm`,
+       fallbackUrl: `${UO.j._DefaultCdnUrl}/draco_encoder.js`
```

#### 1035. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10860` → after: `L10860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10860) · [Before (L10860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10860)

```diff
-         if (4 !== HH.mode && 5 !== HH.mode) return void mH.e.Warn("Cannot compress primitive with mode " + HH.mode + ".");
+         if (4 !== BB.mode && 5 !== BB.mode) return void dB.b.Warn("Cannot compress primitive with mode " + BB.mode + ".");
```

#### 1036. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10874` → after: `L10874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10874) · [Before (L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10874)

```diff
-             CH = (0, fL.r)(BH.getData(SH), zH, HH.componentType, HH.byteOffset || 0, SH.byteStride || (0, fL.q)(HH.componentType) * zH, HH.count, !0);
+             JB = (0, mG.v)(OB.getData(QB), yB, BB.componentType, BB.byteOffset || 0, QB.byteStride || (0, mG.s)(BB.componentType) * yB, BB.count, !0);
```

#### 1037. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10897` → after: `L10897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10897) · [Before (L10897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10897)

```diff
-             mH.e.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + HH.message)
+             dB.b.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + BB.message)
```

#### 1038. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10913` → after: `L10913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10913) · [Before (L10913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10913)

```diff
-     var Hr = LH(45047);
+     var BD = GB(44702);
```

#### 1039. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10925` → after: `L10925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10925) · [Before (L10925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10925)

```diff
-       rr = NH.o.Backward();
+       DD = XB.r.Backward();
```

#### 1040. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10941-L10946` → after: `L10941-L10946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10941-L10946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10941-L10946) · [Before (L10941-L10946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10941-L10946)

```diff
-           if (!(LH instanceof EA.b)) return void SH(BH);
-           const hH = LH.getTypeID() == EA.b.LIGHTTYPEID_POINTLIGHT ? "point" : LH.getTypeID() == EA.b.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : LH.getTypeID() == EA.b.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
-           if (!hH || !(LH instanceof Hr.d)) return mH.e.Warn(`${HH}: Light ${LH.name} is not supported in ${Br}`), void SH(BH);
-           if (LH.falloffType !== EA.b.FALLOFF_GLTF && mH.e.Warn(`${HH}: Light falloff for ${LH.name} does not match the ${Br} specification!`), !LH.position.dtH(0, 0, 0)) {
-             const HH = NH.l.lu[0].Tm(LH.position);
-             rH && wL(HH), BH.translation = HH.xrH()
+           if (!(GB instanceof MY.d)) return void QB(OB);
+           const oB = GB.getTypeID() == MY.d.LIGHTTYPEID_POINTLIGHT ? "point" : GB.getTypeID() == MY.d.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : GB.getTypeID() == MY.d.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
+           if (!oB || !(GB instanceof BD.d)) return dB.b.Warn(`${BB}: Light ${GB.name} is not supported in ${OD}`), void QB(OB);
+           if (GB.falloffType !== MY.d.FALLOFF_GLTF && dB.b.Warn(`${BB}: Light falloff for ${GB.name} does not match the ${OD} specification!`), !GB.position.QyB(0, 0, 0)) {
+             const BB = XB.k.Xp[0].IU(GB.position);
+             DB && eG(BB), OB.translation = BB.dDB()
```

#### 1041. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10949` → after: `L10949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10949) · [Before (L10949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10949)

```diff
-             const HH = LH.direction.normalizeToRef(NH.l.lu[0]);
+             const BB = GB.direction.normalizeToRef(XB.k.Xp[0]);
```

#### 1042. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10951-L10952` → after: `L10951-L10952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10951-L10952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10951-L10952) · [Before (L10951-L10952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10951-L10952)

```diff
-             const AH = NH.f.FromUnitVectorsToRef(rr, HH, NH.l.Quaternion[0]);
-             NH.f.IsIdentity(AH) || (BH.rotation = AH.xrH())
+             const YB = XB.f.FromUnitVectorsToRef(DD, BB, XB.k.Quaternion[0]);
+             XB.f.IsIdentity(YB) || (OB.rotation = YB.dDB())
```

#### 1043. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L10957` → after: `L10957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R10957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L10957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L10957) · [Before (L10957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L10957)

```diff
-             color: LH.diffuse.xrH(),
+             color: GB.diffuse.dDB(),
```

#### 1044. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11037` → after: `L11037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11037) · [Before (L11037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11037)

```diff
-       Qr = NH.o.Backward();
+       qD = XB.r.Backward();
```

#### 1045. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11053-L11055` → after: `L11053-L11055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11053-L11055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11053-L11055) · [Before (L11053-L11055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11053-L11055)

```diff
-           if (!(LH instanceof EA.b)) return void SH(BH);
-           const hH = LH.getTypeID() == EA.b.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
-           if (!hH) return mH.e.Warn(`${HH}: Light ${LH.name} is not supported in ${Gr}`), void SH(BH);
+           if (!(GB instanceof MY.d)) return void QB(OB);
+           const oB = GB.getTypeID() == MY.d.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
+           if (!oB) return dB.b.Warn(`${BB}: Light ${GB.name} is not supported in ${zD}`), void QB(OB);
```

#### 1046. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11057-L11059` → after: `L11057-L11059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11057-L11059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11057-L11059) · [Before (L11057-L11059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11057-L11059)

```diff
-           if (tH.falloffType !== EA.b.FALLOFF_GLTF && mH.e.Warn(`${HH}: Light falloff for ${LH.name} does not match the ${Gr} specification!`), !tH.position.dtH(0, 0, 0)) {
-             const HH = NH.l.lu[0].Tm(tH.position);
-             rH && wL(HH), BH.translation = HH.xrH()
+           if (jB.falloffType !== MY.d.FALLOFF_GLTF && dB.b.Warn(`${BB}: Light falloff for ${GB.name} does not match the ${zD} specification!`), !jB.position.QyB(0, 0, 0)) {
+             const BB = XB.k.Xp[0].IU(jB.position);
+             DB && eG(BB), OB.translation = BB.dDB()
```

#### 1047. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11061` → after: `L11061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11061) · [Before (L11061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11061)

```diff
-           const zH = NH.o.Forward();
+           const yB = XB.r.Forward();
```

#### 1048. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11063-L11064` → after: `L11063-L11064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11063-L11064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11063-L11064) · [Before (L11063-L11064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11063-L11064)

```diff
-           const CH = NH.f.FromUnitVectorsToRef(Qr, zH, NH.l.Quaternion[0]);
-           NH.f.IsIdentity(CH) || (BH.rotation = CH.xrH());
+           const JB = XB.f.FromUnitVectorsToRef(qD, yB, XB.k.Quaternion[0]);
+           XB.f.IsIdentity(JB) || (OB.rotation = JB.dDB());
```

#### 1049. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11068` → after: `L11068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11068) · [Before (L11068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11068)

```diff
-             color: tH.diffuse.xrH(),
+             color: jB.diffuse.dDB(),
```

#### 1050. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11116` → after: `L11116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11116) · [Before (L11116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11116)

```diff
-             return `${BH&&BH.getInternalTexture()?BH.getInternalTexture().uniqueId:"NoStrength"}_${LH&&LH.getInternalTexture()?LH.getInternalTexture().uniqueId:"NoTangent"}`
+             return `${OB&&OB.getInternalTexture()?OB.getInternalTexture().uniqueId:"NoStrength"}_${GB&&GB.getInternalTexture()?GB.getInternalTexture().uniqueId:"NoTangent"}`
```

#### 1051. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11121` → after: `L11121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11121) · [Before (L11121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11121)

```diff
-               const BH = HH.yN(),
+               const OB = BB.JF(),
```

#### 1052. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11195-L11196` → after: `L11195-L11196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11195-L11196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11195-L11196) · [Before (L11195-L11196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11195-L11196)

```diff
-       const LH = new IH.g(BH.name, BH.yN());
-       return LH._texture = HH, LH.coordinatesIndex = BH.coordinatesIndex, BH instanceof IH.g && (LH.uOffset = BH.uOffset, LH.vOffset = BH.vOffset, LH.uScale = BH.uScale, LH.vScale = BH.vScale, LH.wAng = BH.wAng), LH.wrapU = BH.wrapU, LH.wrapV = BH.wrapV, LH
+       const GB = new uB.e(OB.name, OB.JF());
+       return GB._texture = BB, GB.coordinatesIndex = OB.coordinatesIndex, OB instanceof uB.e && (GB.uOffset = OB.uOffset, GB.vOffset = OB.vOffset, GB.uScale = OB.uScale, GB.vScale = OB.vScale, GB.wAng = OB.wAng), GB.wrapU = OB.wrapU, GB.wrapV = OB.wrapV, GB
```

#### 1053. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11226` → after: `L11226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11226) · [Before (L11226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11226)

```diff
-               return `${LH}_${AH&&AH.getInternalTexture()?AH.getInternalTexture().uniqueId:"NoRoughness"}`
+               return `${GB}_${YB&&YB.getInternalTexture()?YB.getInternalTexture().uniqueId:"NoRoughness"}`
```

#### 1054. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11230` → after: `L11230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11230) · [Before (L11230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11230)

```diff
-                 const BH = HH.yN(),
+                 const OB = BB.JF(),
```

#### 1055. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11250` → after: `L11250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11250) · [Before (L11250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11250)

```diff
-             rH = LH.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(LH.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(LH.clearCoat.textureRoughness), LH.clearCoat.isTintEnabled && OB.i.Warn(`Clear Color tint is not sup … [truncated]
+             DB = GB.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(GB.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(GB.clearCoat.textureRoughness), GB.clearCoat.isTintEnabled && UO.j.Warn(`Clear Color tint is not sup … [truncated]
```

#### 1056. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11263` → after: `L11263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11263) · [Before (L11263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11263)

```diff
-             this._wasUsed = !0, BH.extensions = BH.extensions || {}, LH.coatWeightTexture && (AH = this._mergedTexturesMap[LH.coatWeightTexture.uniqueId], rH = this._exporter._materialExporter.getTextureInfo(AH)), LH.coatRoughnessTexture && (SH = this._mergedTexturesMap[LH.coatRo … [truncated]
+             this._wasUsed = !0, OB.extensions = OB.extensions || {}, GB.coatWeightTexture && (YB = this._mergedTexturesMap[GB.coatWeightTexture.uniqueId], DB = this._exporter._materialExporter.getTextureInfo(YB)), GB.coatRoughnessTexture && (QB = this._mergedTexturesMap[GB.coatRo … [truncated]
```

#### 1057. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11289` → after: `L11289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11289) · [Before (L11289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11289)

```diff
-       return `${BH&&BH.getInternalTexture()?BH.getInternalTexture().uniqueId:"NoStrength"}_${LH&&LH.getInternalTexture()?LH.getInternalTexture().uniqueId:"NoTangent"}`
+       return `${OB&&OB.getInternalTexture()?OB.getInternalTexture().uniqueId:"NoStrength"}_${GB&&GB.getInternalTexture()?GB.getInternalTexture().uniqueId:"NoTangent"}`
```

#### 1058. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11293-L11294` → after: `L11293-L11294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11293-L11294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11293-L11294) · [Before (L11293-L11294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11293-L11294)

```diff
-       const LH = new IH.g(BH.name, BH.yN());
-       return LH._texture = HH, LH.coordinatesIndex = BH.coordinatesIndex, BH instanceof IH.g && (LH.uOffset = BH.uOffset, LH.vOffset = BH.vOffset, LH.uScale = BH.uScale, LH.vScale = BH.vScale, LH.wAng = BH.wAng), LH.wrapU = BH.wrapU, LH.wrapV = BH.wrapV, LH
+       const GB = new uB.e(OB.name, OB.JF());
+       return GB._texture = BB, GB.coordinatesIndex = OB.coordinatesIndex, OB instanceof uB.e && (GB.uOffset = OB.uOffset, GB.vOffset = OB.vOffset, GB.uScale = OB.uScale, GB.vScale = OB.vScale, GB.wAng = OB.wAng), GB.wrapU = OB.wrapU, GB.wrapV = OB.wrapV, GB
```

#### 1059. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11324` → after: `L11324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11324) · [Before (L11324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11324)

```diff
-               return `${LH}_${AH&&AH.getInternalTexture()?AH.getInternalTexture().uniqueId:"NoRoughness"}`
+               return `${GB}_${YB&&YB.getInternalTexture()?YB.getInternalTexture().uniqueId:"NoRoughness"}`
```

#### 1060. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11328` → after: `L11328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11328) · [Before (L11328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11328)

```diff
-                 const BH = HH.yN(),
+                 const OB = BB.JF(),
```

#### 1061. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11342` → after: `L11342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11342) · [Before (L11342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11342)

```diff
-                 const BH = HH.yN(),
+                 const OB = BB.JF(),
```

#### 1062. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11372` → after: `L11372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11372) · [Before (L11372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11372)

```diff
-                 coatColorFactor: LH.clearCoat.tintColor.xrH(),
+                 coatColorFactor: GB.clearCoat.tintColor.dDB(),
```

#### 1063. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11374` → after: `L11374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11374) · [Before (L11374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11374)

```diff
-                 coatIor: 1.5 !== tH ? tH : void 0
+                 coatIor: 1.5 !== jB ? jB : void 0
```

#### 1064. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11419` → after: `L11419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11419) · [Before (L11419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11419)

```diff
-               coatColorFactor: LH.coatColor.xrH(),
+               coatColorFactor: GB.coatColor.dDB(),
```

#### 1065. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11421-L11422` → after: `L11421-L11422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11421-L11422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11421-L11422) · [Before (L11421-L11422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11421-L11422)

```diff
-               coatIor: 1.5 !== EH ? EH : void 0,
-               coatDarkeningFactor: 1 !== XH ? XH : void 0,
+               coatIor: 1.5 !== MB ? MB : void 0,
+               coatDarkeningFactor: 1 !== PB ? PB : void 0,
```

#### 1066. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11577` → after: `L11577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11577) · [Before (L11577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11577)

```diff
-           return (0, bH.e)(this, BH, "f")
+           return (0, fB.c)(this, OB, "f")
```

#### 1067. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11580` → after: `L11580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11580) · [Before (L11580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11580)

```diff
-           (0, bH.f)(this, BH, HH, "f")
+           (0, fB.d)(this, OB, BB, "f")
```

#### 1068. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11583` → after: `L11583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11583) · [Before (L11583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11583)

```diff
-           return (0, bH.e)(this, LH, "f")
+           return (0, fB.c)(this, GB, "f")
```

#### 1069. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11586` → after: `L11586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11586) · [Before (L11586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11586)

```diff
-           (0, bH.f)(this, LH, HH, "f")
+           (0, fB.d)(this, GB, BB, "f")
```

#### 1070. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11589` → after: `L11589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11589) · [Before (L11589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11589)

```diff
-           return (0, bH.e)(this, AH, "f")
+           return (0, fB.c)(this, YB, "f")
```

#### 1071. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11592` → after: `L11592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11592) · [Before (L11592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11592)

```diff
-           (0, bH.f)(this, AH, HH, "f")
+           (0, fB.d)(this, YB, BB, "f")
```

#### 1072. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11595` → after: `L11595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11595) · [Before (L11595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11595)

```diff
-           return (0, bH.e)(this, rH, "f")
+           return (0, fB.c)(this, DB, "f")
```

#### 1073. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11598` → after: `L11598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11598) · [Before (L11598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11598)

```diff
-           (0, bH.f)(this, rH, HH, "f")
+           (0, fB.d)(this, DB, BB, "f")
```

#### 1074. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11601` → after: `L11601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11601) · [Before (L11601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11601)

```diff
-           return (0, bH.e)(this, hH, "f")
+           return (0, fB.c)(this, oB, "f")
```

#### 1075. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11604` → after: `L11604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11604) · [Before (L11604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11604)

```diff
-           (0, bH.f)(this, hH, HH, "f")
+           (0, fB.d)(this, oB, BB, "f")
```

#### 1076. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11607` → after: `L11607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11607) · [Before (L11607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11607)

```diff
-           return (0, bH.e)(this, tH, "f")
+           return (0, fB.c)(this, jB, "f")
```

#### 1077. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11610` → after: `L11610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11610) · [Before (L11610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11610)

```diff
-           (0, bH.f)(this, tH, HH, "f")
+           (0, fB.d)(this, jB, BB, "f")
```

#### 1078. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11613` → after: `L11613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11613) · [Before (L11613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11613)

```diff
-           return (0, bH.e)(this, zH, "f")
+           return (0, fB.c)(this, yB, "f")
```

#### 1079. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11616` → after: `L11616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11616) · [Before (L11616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11616)

```diff
-           (0, bH.f)(this, zH, HH, "f")
+           (0, fB.d)(this, yB, BB, "f")
```

#### 1080. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11619` → after: `L11619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11619) · [Before (L11619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11619)

```diff
-           return (0, bH.e)(this, CH, "f")
+           return (0, fB.c)(this, JB, "f")
```

#### 1081. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11622` → after: `L11622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11622) · [Before (L11622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11622)

```diff
-           (0, bH.f)(this, CH, HH, "f")
+           (0, fB.d)(this, JB, BB, "f")
```

#### 1082. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11625` → after: `L11625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11625) · [Before (L11625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11625)

```diff
-           return (0, bH.e)(this, EH, "f")
+           return (0, fB.c)(this, MB, "f")
```

#### 1083. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11628` → after: `L11628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11628) · [Before (L11628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11628)

```diff
-           (0, bH.f)(this, EH, HH, "f")
+           (0, fB.d)(this, MB, BB, "f")
```

#### 1084. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11631` → after: `L11631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11631) · [Before (L11631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11631)

```diff
-           return (0, bH.e)(this, XH, "f")
+           return (0, fB.c)(this, PB, "f")
```

#### 1085. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11634` → after: `L11634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11634) · [Before (L11634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11634)

```diff
-           (0, bH.f)(this, XH, HH, "f")
+           (0, fB.d)(this, PB, BB, "f")
```

#### 1086. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11637` → after: `L11637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11637) · [Before (L11637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11637)

```diff
-           return (0, bH.e)(this, GH, "f")
+           return (0, fB.c)(this, zB, "f")
```

#### 1087. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11640` → after: `L11640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11640) · [Before (L11640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11640)

```diff
-           (0, bH.f)(this, GH, HH, "f")
+           (0, fB.d)(this, zB, BB, "f")
```

#### 1088. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11643` → after: `L11643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11643) · [Before (L11643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11643)

```diff
-           return (0, bH.e)(this, YH, "f")
+           return (0, fB.c)(this, lB, "f")
```

#### 1089. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11646` → after: `L11646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11646) · [Before (L11646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11646)

```diff
-           (0, bH.f)(this, YH, HH, "f")
+           (0, fB.d)(this, lB, BB, "f")
```

#### 1090. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11649` → after: `L11649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11649) · [Before (L11649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11649)

```diff
-           return (0, bH.e)(this, uH, "f")
+           return (0, fB.c)(this, pB, "f")
```

#### 1091. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11652` → after: `L11652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11652) · [Before (L11652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11652)

```diff
-           (0, bH.f)(this, uH, HH, "f")
+           (0, fB.d)(this, pB, BB, "f")
```

#### 1092. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11655` → after: `L11655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11655) · [Before (L11655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11655)

```diff
-           return (0, bH.e)(this, QH, "f")
+           return (0, fB.c)(this, qB, "f")
```

#### 1093. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11658` → after: `L11658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11658) · [Before (L11658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11658)

```diff
-           (0, bH.f)(this, QH, HH, "f")
+           (0, fB.d)(this, qB, BB, "f")
```

#### 1094. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11661` → after: `L11661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11661) · [Before (L11661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11661)

```diff
-           return (0, bH.e)(this, WH, "f")
+           return (0, fB.c)(this, ZB, "f")
```

#### 1095. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11664` → after: `L11664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11664) · [Before (L11664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11664)

```diff
-           (0, bH.f)(this, WH, HH, "f")
+           (0, fB.d)(this, ZB, BB, "f")
```

#### 1096. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11667` → after: `L11667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11667) · [Before (L11667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11667)

```diff
-           return (0, bH.e)(this, MH, "f")
+           return (0, fB.c)(this, NB, "f")
```

#### 1097. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11670` → after: `L11670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11670) · [Before (L11670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11670)

```diff
-           (0, bH.f)(this, MH, HH, "f")
+           (0, fB.d)(this, NB, BB, "f")
```

#### 1098. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11673` → after: `L11673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11673) · [Before (L11673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11673)

```diff
-           return (0, bH.e)(this, xH, "f")
+           return (0, fB.c)(this, RB, "f")
```

#### 1099. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11676` → after: `L11676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11676) · [Before (L11676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11676)

```diff
-           (0, bH.f)(this, xH, HH, "f")
+           (0, fB.d)(this, RB, BB, "f")
```

#### 1100. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11679` → after: `L11679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11679) · [Before (L11679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11679)

```diff
-           return (0, bH.e)(this, vH, "f")
+           return (0, fB.c)(this, WB, "f")
```

#### 1101. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11682` → after: `L11682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11682) · [Before (L11682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11682)

```diff
-           (0, bH.f)(this, vH, HH, "f")
+           (0, fB.d)(this, WB, BB, "f")
```

#### 1102. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11685` → after: `L11685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11685) · [Before (L11685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11685)

```diff
-           return (0, bH.e)(this, PH, "f")
+           return (0, fB.c)(this, AB, "f")
```

#### 1103. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11688` → after: `L11688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11688) · [Before (L11688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11688)

```diff
-           (0, bH.f)(this, PH, HH, "f")
+           (0, fB.d)(this, AB, BB, "f")
```

#### 1104. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11691` → after: `L11691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11691) · [Before (L11691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11691)

```diff
-           return (0, bH.e)(this, TH, "f")
+           return (0, fB.c)(this, VB, "f")
```

#### 1105. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11694` → after: `L11694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11694) · [Before (L11694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11694)

```diff
-           (0, bH.f)(this, TH, HH, "f")
+           (0, fB.d)(this, VB, BB, "f")
```

#### 1106. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11697` → after: `L11697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11697) · [Before (L11697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11697)

```diff
-           return (0, bH.e)(this, UH, "f")
+           return (0, fB.c)(this, SB, "f")
```

#### 1107. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11700` → after: `L11700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11700) · [Before (L11700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11700)

```diff
-           (0, bH.f)(this, UH, HH, "f")
+           (0, fB.d)(this, SB, BB, "f")
```

#### 1108. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11703` → after: `L11703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11703) · [Before (L11703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11703)

```diff
-           return (0, bH.e)(this, VH, "f")
+           return (0, fB.c)(this, nB, "f")
```

#### 1109. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11706` → after: `L11706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11706) · [Before (L11706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11706)

```diff
-           (0, bH.f)(this, VH, HH, "f")
+           (0, fB.d)(this, nB, BB, "f")
```

#### 1110. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11709` → after: `L11709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11709) · [Before (L11709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11709)

```diff
-           return (0, bH.e)(this, OH, "f")
+           return (0, fB.c)(this, UB, "f")
```

#### 1111. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11712` → after: `L11712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11712) · [Before (L11712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11712)

```diff
-           (0, bH.f)(this, OH, HH, "f")
+           (0, fB.d)(this, UB, BB, "f")
```

#### 1112. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11715` → after: `L11715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11715) · [Before (L11715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11715)

```diff
-           return (0, bH.e)(this, mH, "f")
+           return (0, fB.c)(this, dB, "f")
```

#### 1113. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11718` → after: `L11718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11718) · [Before (L11718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11718)

```diff
-           (0, bH.f)(this, mH, HH, "f")
+           (0, fB.d)(this, dB, BB, "f")
```

#### 1114. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11721` → after: `L11721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11721) · [Before (L11721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11721)

```diff
-           return (0, bH.e)(this, oH, "f")
+           return (0, fB.c)(this, KB, "f")
```

#### 1115. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11724` → after: `L11724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11724) · [Before (L11724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11724)

```diff
-           (0, bH.f)(this, oH, HH, "f")
+           (0, fB.d)(this, KB, BB, "f")
```

#### 1116. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11727` → after: `L11727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11727) · [Before (L11727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11727)

```diff
-           return (0, bH.e)(this, IH, "f")
+           return (0, fB.c)(this, uB, "f")
```

#### 1117. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11730` → after: `L11730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11730) · [Before (L11730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11730)

```diff
-           (0, bH.f)(this, IH, HH, "f")
+           (0, fB.d)(this, uB, BB, "f")
```

#### 1118. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11739` → after: `L11739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11739) · [Before (L11739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11739)

```diff
-           return (0, bH.e)(this, fH, "f")
+           return (0, fB.c)(this, mB, "f")
```

#### 1119. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11742` → after: `L11742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11742) · [Before (L11742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11742)

```diff
-           (0, bH.f)(this, fH, HH, "f")
+           (0, fB.d)(this, mB, BB, "f")
```

#### 1120. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11745` → after: `L11745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11745) · [Before (L11745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11745)

```diff
-           return (0, bH.e)(this, lH, "f")
+           return (0, fB.c)(this, IB, "f")
```

#### 1121. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11748` → after: `L11748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11748) · [Before (L11748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11748)

```diff
-           (0, bH.f)(this, lH, HH, "f")
+           (0, fB.d)(this, IB, BB, "f")
```

#### 1122. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11751` → after: `L11751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11751) · [Before (L11751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11751)

```diff
-           return (0, bH.e)(this, KH, "f")
+           return (0, fB.c)(this, FB, "f")
```

#### 1123. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11754` → after: `L11754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11754) · [Before (L11754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11754)

```diff
-           (0, bH.f)(this, KH, HH, "f")
+           (0, fB.d)(this, FB, BB, "f")
```

#### 1124. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11757` → after: `L11757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11757) · [Before (L11757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11757)

```diff
-           return (0, bH.e)(this, eH, "f")
+           return (0, fB.c)(this, LB, "f")
```

#### 1125. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11760` → after: `L11760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11760) · [Before (L11760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11760)

```diff
-           (0, bH.f)(this, eH, HH, "f")
+           (0, fB.d)(this, LB, BB, "f")
```

#### 1126. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11763` → after: `L11763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11763) · [Before (L11763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11763)

```diff
-           return (0, bH.e)(this, qH, "f")
+           return (0, fB.c)(this, gB, "f")
```

#### 1127. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11766` → after: `L11766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11766) · [Before (L11766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11766)

```diff
-           (0, bH.f)(this, qH, HH, "f")
+           (0, fB.d)(this, gB, BB, "f")
```

#### 1128. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11769` → after: `L11769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11769) · [Before (L11769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11769)

```diff
-           return (0, bH.e)(this, gH, "f")
+           return (0, fB.c)(this, rB, "f")
```

#### 1129. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11772` → after: `L11772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11772) · [Before (L11772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11772)

```diff
-           (0, bH.f)(this, gH, HH, "f")
+           (0, fB.d)(this, rB, BB, "f")
```

#### 1130. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11775` → after: `L11775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11775) · [Before (L11775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11775)

```diff
-           return (0, bH.e)(this, NH, "f")
+           return (0, fB.c)(this, XB, "f")
```

#### 1131. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11778` → after: `L11778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11778) · [Before (L11778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11778)

```diff
-           (0, bH.f)(this, NH, HH, "f")
+           (0, fB.d)(this, XB, BB, "f")
```

#### 1132. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11781` → after: `L11781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11781) · [Before (L11781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11781)

```diff
-           return (0, bH.e)(this, RH, "f")
+           return (0, fB.c)(this, wB, "f")
```

#### 1133. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11784` → after: `L11784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11784) · [Before (L11784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11784)

```diff
-           (0, bH.f)(this, RH, HH, "f")
+           (0, fB.d)(this, wB, BB, "f")
```

#### 1134. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11805` → after: `L11805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11805) · [Before (L11805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11805)

```diff
-           return (0, bH.e)(this, jH, "f")
+           return (0, fB.c)(this, EB, "f")
```

#### 1135. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11808` → after: `L11808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11808) · [Before (L11808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11808)

```diff
-           (0, bH.f)(this, jH, HH, "f")
+           (0, fB.d)(this, EB, BB, "f")
```

#### 1136. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11811` → after: `L11811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11811) · [Before (L11811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11811)

```diff
-           return (0, bH.e)(this, nH, "f")
+           return (0, fB.c)(this, cB, "f")
```

#### 1137. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11814` → after: `L11814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11814) · [Before (L11814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11814)

```diff
-           (0, bH.f)(this, nH, HH, "f")
+           (0, fB.d)(this, cB, BB, "f")
```

#### 1138. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11817` → after: `L11817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11817) · [Before (L11817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11817)

```diff
-           return (0, bH.e)(this, FH, "f")
+           return (0, fB.c)(this, hB, "f")
```

#### 1139. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11820` → after: `L11820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11820) · [Before (L11820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11820)

```diff
-           (0, bH.f)(this, FH, HH, "f")
+           (0, fB.d)(this, hB, BB, "f")
```

#### 1140. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11823` → after: `L11823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11823) · [Before (L11823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11823)

```diff
-           return (0, bH.e)(this, DH, "f")
+           return (0, fB.c)(this, aB, "f")
```

#### 1141. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11826` → after: `L11826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11826) · [Before (L11826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11826)

```diff
-           (0, bH.f)(this, DH, HH, "f")
+           (0, fB.d)(this, aB, BB, "f")
```

#### 1142. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11829` → after: `L11829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11829) · [Before (L11829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11829)

```diff
-           return (0, bH.e)(this, wH, "f")
+           return (0, fB.c)(this, eB, "f")
```

#### 1143. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11832` → after: `L11832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11832) · [Before (L11832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11832)

```diff
-           (0, bH.f)(this, wH, HH, "f")
+           (0, fB.d)(this, eB, BB, "f")
```

#### 1144. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11835` → after: `L11835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11835) · [Before (L11835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11835)

```diff
-           return (0, bH.e)(this, dH, "f")
+           return (0, fB.c)(this, bB, "f")
```

#### 1145. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11838` → after: `L11838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11838) · [Before (L11838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11838)

```diff
-           (0, bH.f)(this, dH, HH, "f")
+           (0, fB.d)(this, bB, BB, "f")
```

#### 1146. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11841` → after: `L11841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11841) · [Before (L11841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11841)

```diff
-           return (0, bH.e)(this, aH, "f")
+           return (0, fB.c)(this, CB, "f")
```

#### 1147. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11844` → after: `L11844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11844) · [Before (L11844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11844)

```diff
-           (0, bH.f)(this, aH, HH, "f")
+           (0, fB.d)(this, CB, BB, "f")
```

#### 1148. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11847` → after: `L11847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11847) · [Before (L11847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11847)

```diff
-           return (0, bH.e)(this, sH, "f")
+           return (0, fB.c)(this, HB, "f")
```

#### 1149. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11850` → after: `L11850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11850) · [Before (L11850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11850)

```diff
-           (0, bH.f)(this, sH, HH, "f")
+           (0, fB.d)(this, HB, BB, "f")
```

#### 1150. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11853` → after: `L11853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11853) · [Before (L11853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11853)

```diff
-           return (0, bH.e)(this, JH, "f")
+           return (0, fB.c)(this, vB, "f")
```

#### 1151. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11856` → after: `L11856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11856) · [Before (L11856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11856)

```diff
-           (0, bH.f)(this, JH, HH, "f")
+           (0, fB.d)(this, vB, BB, "f")
```

#### 1152. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11859` → after: `L11859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11859) · [Before (L11859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11859)

```diff
-           return (0, bH.e)(this, iH, "f")
+           return (0, fB.c)(this, sB, "f")
```

#### 1153. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11862` → after: `L11862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11862) · [Before (L11862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11862)

```diff
-           (0, bH.f)(this, iH, HH, "f")
+           (0, fB.d)(this, sB, BB, "f")
```

#### 1154. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11865` → after: `L11865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11865) · [Before (L11865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11865)

```diff
-           return (0, bH.e)(this, pH, "f")
+           return (0, fB.c)(this, xB, "f")
```

#### 1155. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11868` → after: `L11868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11868) · [Before (L11868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11868)

```diff
-           (0, bH.f)(this, pH, HH, "f")
+           (0, fB.d)(this, xB, BB, "f")
```

#### 1156. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11871` → after: `L11871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11871) · [Before (L11871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11871)

```diff
-           return (0, bH.e)(this, yH, "f")
+           return (0, fB.c)(this, tB, "f")
```

#### 1157. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11874` → after: `L11874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11874) · [Before (L11874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11874)

```diff
-           (0, bH.f)(this, yH, HH, "f")
+           (0, fB.d)(this, tB, BB, "f")
```

#### 1158. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11889` → after: `L11889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11889) · [Before (L11889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11889)

```diff
-           return (0, bH.e)(this, HB, "f")
+           return (0, fB.c)(this, BO, "f")
```

#### 1159. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11892` → after: `L11892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11892) · [Before (L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11892)

```diff
-           (0, bH.f)(this, HB, HH, "f")
+           (0, fB.d)(this, BO, BB, "f")
```

#### 1160. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11895` → after: `L11895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11895) · [Before (L11895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11895)

```diff
-           return (0, bH.e)(this, BB, "f")
+           return (0, fB.c)(this, OO, "f")
```

#### 1161. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11898` → after: `L11898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11898) · [Before (L11898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11898)

```diff
-           (0, bH.f)(this, BB, HH, "f")
+           (0, fB.d)(this, OO, BB, "f")
```

#### 1162. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11901` → after: `L11901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11901) · [Before (L11901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11901)

```diff
-           return (0, bH.e)(this, LB, "f")
+           return (0, fB.c)(this, GO, "f")
```

#### 1163. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11904` → after: `L11904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11904) · [Before (L11904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11904)

```diff
-           (0, bH.f)(this, LB, HH, "f")
+           (0, fB.d)(this, GO, BB, "f")
```

#### 1164. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11907` → after: `L11907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11907) · [Before (L11907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11907)

```diff
-           return (0, bH.e)(this, AB, "f")
+           return (0, fB.c)(this, YO, "f")
```

#### 1165. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11910` → after: `L11910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11910) · [Before (L11910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11910)

```diff
-           (0, bH.f)(this, AB, HH, "f")
+           (0, fB.d)(this, YO, BB, "f")
```

#### 1166. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11913` → after: `L11913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11913) · [Before (L11913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11913)

```diff
-           return (0, bH.e)(this, rB, "f")
+           return (0, fB.c)(this, DO, "f")
```

#### 1167. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11916` → after: `L11916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11916) · [Before (L11916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11916)

```diff
-           (0, bH.f)(this, rB, HH, "f")
+           (0, fB.d)(this, DO, BB, "f")
```

#### 1168. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11919` → after: `L11919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11919) · [Before (L11919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11919)

```diff
-           return (0, bH.e)(this, SB, "f")
+           return (0, fB.c)(this, QO, "f")
```

#### 1169. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11922` → after: `L11922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11922) · [Before (L11922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11922)

```diff
-           (0, bH.f)(this, SB, HH, "f")
+           (0, fB.d)(this, QO, BB, "f")
```

#### 1170. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11925` → after: `L11925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11925) · [Before (L11925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11925)

```diff
-           return (0, bH.e)(this, hB, "f")
+           return (0, fB.c)(this, oO, "f")
```

#### 1171. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11928` → after: `L11928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11928) · [Before (L11928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11928)

```diff
-           (0, bH.f)(this, hB, HH, "f")
+           (0, fB.d)(this, oO, BB, "f")
```

#### 1172. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11931` → after: `L11931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11931) · [Before (L11931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11931)

```diff
-           return (0, bH.e)(this, tB, "f")
+           return (0, fB.c)(this, jO, "f")
```

#### 1173. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11934` → after: `L11934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11934) · [Before (L11934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11934)

```diff
-           (0, bH.f)(this, tB, HH, "f")
+           (0, fB.d)(this, jO, BB, "f")
```

#### 1174. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11937` → after: `L11937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11937) · [Before (L11937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11937)

```diff
-           return (0, bH.e)(this, zB, "f")
+           return (0, fB.c)(this, yO, "f")
```

#### 1175. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11940` → after: `L11940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11940) · [Before (L11940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11940)

```diff
-           (0, bH.f)(this, zB, HH, "f")
+           (0, fB.d)(this, yO, BB, "f")
```

#### 1176. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11943` → after: `L11943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11943) · [Before (L11943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11943)

```diff
-           return (0, bH.e)(this, CB, "f")
+           return (0, fB.c)(this, JO, "f")
```

#### 1177. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11946` → after: `L11946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11946) · [Before (L11946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11946)

```diff
-           (0, bH.f)(this, CB, HH, "f")
+           (0, fB.d)(this, JO, BB, "f")
```

#### 1178. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11949` → after: `L11949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11949) · [Before (L11949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11949)

```diff
-           return (0, bH.e)(this, EB, "f")
+           return (0, fB.c)(this, MO, "f")
```

#### 1179. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11952` → after: `L11952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11952) · [Before (L11952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11952)

```diff
-           (0, bH.f)(this, EB, HH, "f")
+           (0, fB.d)(this, MO, BB, "f")
```

#### 1180. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11955` → after: `L11955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11955) · [Before (L11955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11955)

```diff
-           return (0, bH.e)(this, XB, "f")
+           return (0, fB.c)(this, PO, "f")
```

#### 1181. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11958` → after: `L11958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11958) · [Before (L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11958)

```diff
-           (0, bH.f)(this, XB, HH, "f")
+           (0, fB.d)(this, PO, BB, "f")
```

#### 1182. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11961` → after: `L11961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11961) · [Before (L11961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11961)

```diff
-           return (0, bH.e)(this, GB, "f")
+           return (0, fB.c)(this, zO, "f")
```

#### 1183. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11964` → after: `L11964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11964) · [Before (L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11964)

```diff
-           (0, bH.f)(this, GB, HH, "f")
+           (0, fB.d)(this, zO, BB, "f")
```

#### 1184. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11967` → after: `L11967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11967) · [Before (L11967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11967)

```diff
-           return (0, bH.e)(this, YB, "f")
+           return (0, fB.c)(this, lO, "f")
```

#### 1185. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11970` → after: `L11970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11970) · [Before (L11970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11970)

```diff
-           (0, bH.f)(this, YB, HH, "f")
+           (0, fB.d)(this, lO, BB, "f")
```

#### 1186. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11973` → after: `L11973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11973) · [Before (L11973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11973)

```diff
-           return (0, bH.e)(this, uB, "f")
+           return (0, fB.c)(this, pO, "f")
```

#### 1187. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11976` → after: `L11976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11976) · [Before (L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11976)

```diff
-           (0, bH.f)(this, uB, HH, "f")
+           (0, fB.d)(this, pO, BB, "f")
```

#### 1188. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11979` → after: `L11979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11979) · [Before (L11979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11979)

```diff
-           return (0, bH.e)(this, QB, "f")
+           return (0, fB.c)(this, qO, "f")
```

#### 1189. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11982` → after: `L11982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11982) · [Before (L11982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11982)

```diff
-           (0, bH.f)(this, QB, HH, "f")
+           (0, fB.d)(this, qO, BB, "f")
```

#### 1190. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11985` → after: `L11985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11985) · [Before (L11985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11985)

```diff
-           return (0, bH.e)(this, WB, "f")
+           return (0, fB.c)(this, ZO, "f")
```

#### 1191. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11988` → after: `L11988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11988) · [Before (L11988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11988)

```diff
-           (0, bH.f)(this, WB, HH, "f")
+           (0, fB.d)(this, ZO, BB, "f")
```

#### 1192. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11991` → after: `L11991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11991) · [Before (L11991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11991)

```diff
-           return (0, bH.e)(this, MB, "f")
+           return (0, fB.c)(this, NO, "f")
```

#### 1193. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11994` → after: `L11994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11994) · [Before (L11994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11994)

```diff
-           (0, bH.f)(this, MB, HH, "f")
+           (0, fB.d)(this, NO, BB, "f")
```

#### 1194. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L11997` → after: `L11997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R11997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L11997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L11997) · [Before (L11997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L11997)

```diff
-           return (0, bH.e)(this, xB, "f")
+           return (0, fB.c)(this, RO, "f")
```

#### 1195. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12000` → after: `L12000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12000) · [Before (L12000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12000)

```diff
-           (0, bH.f)(this, xB, HH, "f")
+           (0, fB.d)(this, RO, BB, "f")
```

#### 1196. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12003` → after: `L12003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12003) · [Before (L12003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12003)

```diff
-           return (0, bH.e)(this, vB, "f")
+           return (0, fB.c)(this, WO, "f")
```

#### 1197. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12006` → after: `L12006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12006) · [Before (L12006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12006)

```diff
-           (0, bH.f)(this, vB, HH, "f")
+           (0, fB.d)(this, WO, BB, "f")
```

#### 1198. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12009` → after: `L12009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12009) · [Before (L12009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12009)

```diff
-           super(SH, kH, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), BH.set(this, ((0, bH.k)(this, jL), (0, bH.k)(this, nL, 1))), LH.set(this, ((0, bH.k)(this, FL), (0, bH.k)(this, DL, 1))), AH.set(this, ((0, bH.k)(this, wL), (0, bH.k)(this, ZL, 1))), rH.set( … [truncated]
+           super(QB, kB, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), OB.set(this, ((0, fB.j)(this, EG), (0, fB.j)(this, cG, 1))), GB.set(this, ((0, fB.j)(this, hG), (0, fB.j)(this, aG, 1))), YB.set(this, ((0, fB.j)(this, eG), (0, fB.j)(this, TG, 1))), DB.set( … [truncated]
```

#### 1199. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12017` → after: `L12017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12017) · [Before (L12017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12017)

```diff
-           const rH = VB.c.Clone((() => new HH(BH, this.yN())), this, {
+           const DB = nO.d.Clone((() => new BB(OB, this.JF())), this, {
```

#### 1200. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12027-L12028` → after: `L12027-L12028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12027-L12028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12027-L12028) · [Before (L12027-L12028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12027-L12028)

```diff
-           const rH = VB.c.Parse((() => new HH(BH.name, LH)), BH, LH, AH);
-           return BH.stencil && rH.stencil.parse(BH.stencil, LH, AH), SH.c._ParsePlugins(BH, rH, LH, AH), BH.clearCoat && rH.clearCoat.parse(BH.clearCoat, LH, AH), BH.anisotropy && rH.anisotropy.parse(BH.anisotropy, LH, AH), BH.brdf && rH.brdf.parse(BH.brdf, LH, AH), BH.sheen && r … [truncated]
+           const DB = nO.d.Parse((() => new BB(OB.name, GB)), OB, GB, YB);
+           return OB.stencil && DB.stencil.parse(OB.stencil, GB, YB), QB.b._ParsePlugins(OB, DB, GB, YB), OB.clearCoat && DB.clearCoat.parse(OB.clearCoat, GB, YB), OB.anisotropy && DB.anisotropy.parse(OB.anisotropy, GB, YB), OB.brdf && DB.brdf.parse(OB.brdf, GB, YB), OB.sheen && D … [truncated]
```

#### 1201. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12032` → after: `L12032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12032) · [Before (L12032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12032)

```diff
-         PB = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], TB = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], OB = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], bB = [(0, kH.H)(), (0, kH.e)("_markAllSubMeshesAsTexturesDirty")], kB = … [truncated]
+         AO = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], VO = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], UO = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], fO = [(0, kB.L)(), (0, kB.g)("_markAllSubMeshesAsTexturesDirty")], kO = … [truncated]
```

#### 1202. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12045` → after: `L12045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12045) · [Before (L12045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12045)

```diff
-         }, nL, FL), (0, bH.g)(HH, null, TB, {
+         }, cG, hG), (0, fB.h)(BB, null, VO, {
```

#### 1203. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12058` → after: `L12058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12058) · [Before (L12058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12058)

```diff
-         }, DL, wL), (0, bH.g)(HH, null, OB, {
+         }, aG, eG), (0, fB.h)(BB, null, UO, {
```

#### 1204. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12071` → after: `L12071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12071) · [Before (L12071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12071)

```diff
-         }, ZL, dL), (0, bH.g)(HH, null, bB, {
+         }, TG, bG), (0, fB.h)(BB, null, fO, {
```

#### 1205. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12084` → after: `L12084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12084) · [Before (L12084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12084)

```diff
-         }, aL, sL), (0, bH.g)(HH, null, kB, {
+         }, CG, HG), (0, fB.h)(BB, null, kO, {
```

#### 1206. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12097` → after: `L12097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12097) · [Before (L12097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12097)

```diff
-         }, JL, iL), (0, bH.g)(HH, null, mB, {
+         }, vG, sG), (0, fB.h)(BB, null, dO, {
```

#### 1207. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12110` → after: `L12110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12110) · [Before (L12110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12110)

```diff
-         }, pL, yL), (0, bH.g)(HH, null, oB, {
+         }, xG, tG), (0, fB.h)(BB, null, KO, {
```

#### 1208. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12123` → after: `L12123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12123) · [Before (L12123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12123)

```diff
-         }, HA, BA), (0, bH.g)(HH, null, IB, {
+         }, BY, OY), (0, fB.h)(BB, null, uO, {
```

#### 1209. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12136` → after: `L12136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12136) · [Before (L12136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12136)

```diff
-         }, LA, AA), (0, bH.g)(HH, null, fB, {
+         }, GY, YY), (0, fB.h)(BB, null, mO, {
```

#### 1210. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12149` → after: `L12149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12149) · [Before (L12149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12149)

```diff
-         }, rA, SA), (0, bH.g)(HH, null, lB, {
+         }, DY, QY), (0, fB.h)(BB, null, IO, {
```

#### 1211. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12162` → after: `L12162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12162) · [Before (L12162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12162)

```diff
-         }, hA, tA), (0, bH.g)(HH, null, KB, {
+         }, oY, jY), (0, fB.h)(BB, null, FO, {
```

#### 1212. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12175` → after: `L12175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12175) · [Before (L12175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12175)

```diff
-         }, zA, CA), (0, bH.g)(HH, null, cB, {
+         }, yY, JY), (0, fB.h)(BB, null, iO, {
```

#### 1213. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12188` → after: `L12188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12188) · [Before (L12188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12188)

```diff
-         }, EA, XA), (0, bH.g)(HH, null, eB, {
+         }, MY, PY), (0, fB.h)(BB, null, LO, {
```

#### 1214. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12201` → after: `L12201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12201) · [Before (L12201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12201)

```diff
-         }, GA, YA), (0, bH.g)(HH, null, qB, {
+         }, zY, lY), (0, fB.h)(BB, null, gO, {
```

#### 1215. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12214` → after: `L12214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12214) · [Before (L12214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12214)

```diff
-         }, uA, QA), (0, bH.g)(HH, null, gB, {
+         }, pY, qY), (0, fB.h)(BB, null, rO, {
```

#### 1216. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12227` → after: `L12227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12227) · [Before (L12227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12227)

```diff
-         }, WA, MA), (0, bH.g)(HH, null, NB, {
+         }, ZY, NY), (0, fB.h)(BB, null, XO, {
```

#### 1217. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12240` → after: `L12240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12240) · [Before (L12240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12240)

```diff
-         }, xA, vA), (0, bH.g)(HH, null, RB, {
+         }, RY, WY), (0, fB.h)(BB, null, wO, {
```

#### 1218. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12253` → after: `L12253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12253) · [Before (L12253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12253)

```diff
-         }, PA, TA), (0, bH.g)(HH, null, jB, {
+         }, AY, VY), (0, fB.h)(BB, null, EO, {
```

#### 1219. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12266` → after: `L12266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12266) · [Before (L12266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12266)

```diff
-         }, UA, VA), (0, bH.g)(HH, null, nB, {
+         }, SY, nY), (0, fB.h)(BB, null, cO, {
```

#### 1220. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12279` → after: `L12279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12279) · [Before (L12279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12279)

```diff
-         }, OA, bA), (0, bH.g)(HH, null, FB, {
+         }, UY, fY), (0, fB.h)(BB, null, hO, {
```

#### 1221. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12292` → after: `L12292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12292) · [Before (L12292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12292)

```diff
-         }, kA, mA), (0, bH.g)(HH, null, DB, {
+         }, kY, dY), (0, fB.h)(BB, null, aO, {
```

#### 1222. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12305` → after: `L12305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12305) · [Before (L12305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12305)

```diff
-         }, oA, IA), (0, bH.g)(HH, null, wB, {
+         }, KY, uY), (0, fB.h)(BB, null, eO, {
```

#### 1223. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12318` → after: `L12318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12318) · [Before (L12318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12318)

```diff
-         }, fA, lA), (0, bH.g)(HH, null, ZB, {
+         }, mY, IY), (0, fB.h)(BB, null, TO, {
```

#### 1224. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12331` → after: `L12331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12331) · [Before (L12331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12331)

```diff
-         }, KA, cA), (0, bH.g)(HH, null, dB, {
+         }, FY, iY), (0, fB.h)(BB, null, bO, {
```

#### 1225. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12344` → after: `L12344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12344) · [Before (L12344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12344)

```diff
-         }, eA, qA), (0, bH.g)(HH, null, aB, {
+         }, LY, gY), (0, fB.h)(BB, null, CO, {
```

#### 1226. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12357` → after: `L12357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12357) · [Before (L12357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12357)

```diff
-         }, gA, NA), (0, bH.g)(HH, null, sB, {
+         }, rY, XY), (0, fB.h)(BB, null, HO, {
```

#### 1227. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12370` → after: `L12370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12370) · [Before (L12370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12370)

```diff
-         }, RA, jA), (0, bH.g)(HH, null, JB, {
+         }, wY, EY), (0, fB.h)(BB, null, vO, {
```

#### 1228. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12383` → after: `L12383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12383) · [Before (L12383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12383)

```diff
-         }, nA, FA), (0, bH.g)(HH, null, iB, {
+         }, cY, hY), (0, fB.h)(BB, null, sO, {
```

#### 1229. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12396` → after: `L12396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12396) · [Before (L12396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12396)

```diff
-         }, DA, wA), (0, bH.g)(HH, null, pB, {
+         }, aY, eY), (0, fB.h)(BB, null, xO, {
```

#### 1230. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12409` → after: `L12409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12409) · [Before (L12409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12409)

```diff
-         }, ZA, dA), (0, bH.g)(HH, null, yB, {
+         }, TY, bY), (0, fB.h)(BB, null, tO, {
```

#### 1231. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12422` → after: `L12422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12422) · [Before (L12422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12422)

```diff
-         }, aA, sA), (0, bH.g)(HH, null, HL, {
+         }, CY, HY), (0, fB.h)(BB, null, BG, {
```

#### 1232. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12435` → after: `L12435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12435) · [Before (L12435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12435)

```diff
-         }, JA, iA), (0, bH.g)(HH, null, BL, {
+         }, vY, sY), (0, fB.h)(BB, null, OG, {
```

#### 1233. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12448` → after: `L12448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12448) · [Before (L12448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12448)

```diff
-         }, pA, yA), (0, bH.g)(HH, null, LL, {
+         }, xY, tY), (0, fB.h)(BB, null, GG, {
```

#### 1234. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12461` → after: `L12461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12461) · [Before (L12461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12461)

```diff
-         }, Hr, Br), (0, bH.g)(HH, null, AL, {
+         }, BD, OD), (0, fB.h)(BB, null, YG, {
```

#### 1235. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12474` → after: `L12474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12474) · [Before (L12474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12474)

```diff
-         }, Lr, Ar), (0, bH.g)(HH, null, rL, {
+         }, GD, YD), (0, fB.h)(BB, null, DG, {
```

#### 1236. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12487` → after: `L12487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12487) · [Before (L12487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12487)

```diff
-         }, rr, Sr), (0, bH.g)(HH, null, SL, {
+         }, DD, QD), (0, fB.h)(BB, null, QG, {
```

#### 1237. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12500` → after: `L12500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12500) · [Before (L12500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12500)

```diff
-         }, hr, tr), (0, bH.g)(HH, null, hL, {
+         }, oD, jD), (0, fB.h)(BB, null, oG, {
```

#### 1238. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12513` → after: `L12513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12513) · [Before (L12513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12513)

```diff
-         }, zr, Cr), (0, bH.g)(HH, null, tL, {
+         }, yD, JD), (0, fB.h)(BB, null, jG, {
```

#### 1239. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12526` → after: `L12526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12526) · [Before (L12526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12526)

```diff
-         }, Er, Xr), (0, bH.g)(HH, null, zL, {
+         }, MD, PD), (0, fB.h)(BB, null, yG, {
```

#### 1240. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12539` → after: `L12539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12539) · [Before (L12539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12539)

```diff
-         }, Gr, Yr), (0, bH.g)(HH, null, CL, {
+         }, zD, lD), (0, fB.h)(BB, null, JG, {
```

#### 1241. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12552` → after: `L12552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12552) · [Before (L12552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12552)

```diff
-         }, ur, Qr), (0, bH.g)(HH, null, EL, {
+         }, pD, qD), (0, fB.h)(BB, null, MG, {
```

#### 1242. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12565` → after: `L12565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12565) · [Before (L12565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12565)

```diff
-         }, Wr, Mr), (0, bH.g)(HH, null, XL, {
+         }, ZD, ND), (0, fB.h)(BB, null, PG, {
```

#### 1243. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12578` → after: `L12578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12578) · [Before (L12578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12578)

```diff
-         }, xr, vr), (0, bH.g)(HH, null, GL, {
+         }, RD, WD), (0, fB.h)(BB, null, zG, {
```

#### 1244. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12591` → after: `L12591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12591) · [Before (L12591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12591)

```diff
-         }, Pr, Tr), (0, bH.g)(HH, null, YL, {
+         }, AD, VD), (0, fB.h)(BB, null, lG, {
```

#### 1245. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12604` → after: `L12604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12604) · [Before (L12604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12604)

```diff
-         }, Ur, Vr), (0, bH.g)(HH, null, uL, {
+         }, SD, nD), (0, fB.h)(BB, null, pG, {
```

#### 1246. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12617` → after: `L12617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12617) · [Before (L12617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12617)

```diff
-         }, Or, br), (0, bH.g)(HH, null, QL, {
+         }, UD, fD), (0, fB.h)(BB, null, qG, {
```

#### 1247. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12630` → after: `L12630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12630) · [Before (L12630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12630)

```diff
-         }, kr, mr), (0, bH.g)(HH, null, WL, {
+         }, kD, dD), (0, fB.h)(BB, null, ZG, {
```

#### 1248. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12640` → after: `L12640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12640) · [Before (L12640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12640)

```diff
-         }, null, jL), (0, bH.g)(HH, null, ML, {
+         }, null, EG), (0, fB.h)(BB, null, NG, {
```

#### 1249. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12650` → after: `L12650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12650) · [Before (L12650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12650)

```diff
-         }, null, jL), (0, bH.g)(HH, null, xL, {
+         }, null, EG), (0, fB.h)(BB, null, RG, {
```

#### 1250. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12663` → after: `L12663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12663) · [Before (L12663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12663)

```diff
-         }, or, Ir), (0, bH.g)(HH, null, vL, {
+         }, KD, uD), (0, fB.h)(BB, null, WG, {
```

#### 1251. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12676` → after: `L12676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12676) · [Before (L12676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12676)

```diff
-         }, fr, lr), (0, bH.g)(HH, null, PL, {
+         }, mD, ID), (0, fB.h)(BB, null, AG, {
```

#### 1252. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12689` → after: `L12689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12689) · [Before (L12689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12689)

```diff
-         }, Kr, cr), (0, bH.g)(HH, null, TL, {
+         }, FD, iD), (0, fB.h)(BB, null, VG, {
```

#### 1253. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12702` → after: `L12702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12702) · [Before (L12702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12702)

```diff
-         }, er, qr), (0, bH.g)(HH, null, UL, {
+         }, LD, gD), (0, fB.h)(BB, null, SG, {
```

#### 1254. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12715` → after: `L12715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12715) · [Before (L12715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12715)

```diff
-         }, gr, Nr), (0, bH.g)(HH, null, VL, {
+         }, rD, XD), (0, fB.h)(BB, null, nG, {
```

#### 1255. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12728` → after: `L12728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12728) · [Before (L12728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12728)

```diff
-         }, Rr, jr), (0, bH.g)(HH, null, OL, {
+         }, wD, ED), (0, fB.h)(BB, null, UG, {
```

#### 1256. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12741` → after: `L12741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12741) · [Before (L12741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12741)

```diff
-         }, nr, Fr), (0, bH.g)(HH, null, bL, {
+         }, cD, hD), (0, fB.h)(BB, null, fG, {
```

#### 1257. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12754` → after: `L12754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12754) · [Before (L12754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12754)

```diff
-         }, Dr, wr), (0, bH.g)(HH, null, kL, {
+         }, aD, eD), (0, fB.h)(BB, null, kG, {
```

#### 1258. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12767` → after: `L12767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12767) · [Before (L12767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12767)

```diff
-         }, Zr, dr), (0, bH.g)(HH, null, mL, {
+         }, TD, bD), (0, fB.h)(BB, null, dG, {
```

#### 1259. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12780` → after: `L12780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12780) · [Before (L12780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12780)

```diff
-         }, ar, sr), (0, bH.g)(HH, null, oL, {
+         }, CD, HD), (0, fB.h)(BB, null, KG, {
```

#### 1260. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12793` → after: `L12793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12793) · [Before (L12793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12793)

```diff
-         }, Jr, ir), (0, bH.g)(HH, null, IL, {
+         }, vD, sD), (0, fB.h)(BB, null, uG, {
```

#### 1261. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12806` → after: `L12806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12806) · [Before (L12806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12806)

```diff
-         }, pr, yr), (0, bH.g)(HH, null, fL, {
+         }, xD, tD), (0, fB.h)(BB, null, mG, {
```

#### 1262. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12819` → after: `L12819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12819) · [Before (L12819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12819)

```diff
-         }, HS, BS), (0, bH.g)(HH, null, lL, {
+         }, BQ, OQ), (0, fB.h)(BB, null, IG, {
```

#### 1263. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12832` → after: `L12832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12832) · [Before (L12832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12832)

```diff
-         }, LS, AS), (0, bH.g)(HH, null, KL, {
+         }, GQ, YQ), (0, fB.h)(BB, null, FG, {
```

#### 1264. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12845` → after: `L12845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12845) · [Before (L12845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12845)

```diff
-         }, rS, SS), (0, bH.g)(HH, null, cL, {
+         }, DQ, QQ), (0, fB.h)(BB, null, iG, {
```

#### 1265. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12858` → after: `L12858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12858) · [Before (L12858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12858)

```diff
-         }, hS, tS), (0, bH.g)(HH, null, eL, {
+         }, oQ, jQ), (0, fB.h)(BB, null, LG, {
```

#### 1266. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12871` → after: `L12871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12871) · [Before (L12871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12871)

```diff
-         }, zS, CS), (0, bH.g)(HH, null, qL, {
+         }, yQ, JQ), (0, fB.h)(BB, null, gG, {
```

#### 1267. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12884` → after: `L12884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12884) · [Before (L12884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12884)

```diff
-         }, ES, XS), (0, bH.g)(HH, null, gL, {
+         }, MQ, PQ), (0, fB.h)(BB, null, rG, {
```

#### 1268. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12897` → after: `L12897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12897) · [Before (L12897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12897)

```diff
-         }, GS, YS), (0, bH.g)(HH, null, NL, {
+         }, zQ, lQ), (0, fB.h)(BB, null, XG, {
```

#### 1269. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12923` → after: `L12923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12923) · [Before (L12923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12923)

```diff
-       return LH.translucencyIntensityTexture ? AH = LH.translucencyIntensityTexture : LH.thicknessTexture && LH.useMaskFromThicknessTexture && (AH = LH.thicknessTexture), AH && !LH.useGltfStyleTextures ? (mH.e.Warn(`${HH}: Translucency intensity texture is not supported when useG … [truncated]
+       return GB.translucencyIntensityTexture ? YB = GB.translucencyIntensityTexture : GB.thicknessTexture && GB.useMaskFromThicknessTexture && (YB = GB.thicknessTexture), YB && !GB.useGltfStyleTextures ? (dB.b.Warn(`${BB}: Translucency intensity texture is not supported when useG … [truncated]
```

#### 1270. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L12954` → after: `L12954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R12954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L12954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L12954) · [Before (L12954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L12954)

```diff
-               tH = !AH.translucencyColor || AH.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : AH.translucencyColor.xrH(),
+               jB = !YB.translucencyColor || YB.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : YB.translucencyColor.dDB(),
```

#### 1271. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13020` → after: `L13020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13020) · [Before (L13020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13020)

```diff
-             rH = Math.max(...AH.xrH());
+             DB = Math.max(...YB.dDB());
```

#### 1272. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13022` → after: `L13022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13022) · [Before (L13022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13022)

```diff
-             BH.emissiveFactor = AH.scale(1 / rH).xrH(), this._wasUsed = !0;
+             OB.emissiveFactor = YB.scale(1 / DB).dDB(), this._wasUsed = !0;
```

#### 1273. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13027` → after: `L13027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13027) · [Before (L13027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13027)

```diff
-           } else BH.emissiveFactor = AH.xrH();
+           } else OB.emissiveFactor = YB.dDB();
```

#### 1274. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13150` → after: `L13150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13150) · [Before (L13150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13150)

```diff
-               sheenColorFactor: LH.sheen.color.xrH(),
+               sheenColorFactor: GB.sheen.color.dDB(),
```

#### 1275. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13168-L13169` → after: `L13168-L13169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13168-L13169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13168-L13169) · [Before (L13168-L13169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13168-L13169)

```diff
-       const LH = new IH.g(BH.name, BH.yN());
-       return LH._texture = HH, LH.coordinatesIndex = BH.coordinatesIndex, BH instanceof IH.g && (LH.uOffset = BH.uOffset, LH.vOffset = BH.vOffset, LH.uScale = BH.uScale, LH.vScale = BH.vScale, LH.wAng = BH.wAng), LH.wrapU = BH.wrapU, LH.wrapV = BH.wrapV, LH
+       const GB = new uB.e(OB.name, OB.JF());
+       return GB._texture = BB, GB.coordinatesIndex = OB.coordinatesIndex, OB instanceof uB.e && (GB.uOffset = OB.uOffset, GB.vOffset = OB.vOffset, GB.uScale = OB.uScale, GB.vScale = OB.vScale, GB.wAng = OB.wAng), GB.wrapU = OB.wrapU, GB.wrapV = OB.wrapV, GB
```

#### 1276. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13199` → after: `L13199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13199) · [Before (L13199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13199)

```diff
-                 return `FuzzColor_${LH}_FuzzRoughness_${AH&&AH.getInternalTexture()?AH.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
+                 return `FuzzColor_${GB}_FuzzRoughness_${YB&&YB.getInternalTexture()?YB.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
```

#### 1277. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13203` → after: `L13203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13203) · [Before (L13203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13203)

```diff
-                   const BH = HH.yN(),
+                   const OB = BB.JF(),
```

#### 1278. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13224` → after: `L13224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13224) · [Before (L13224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13224)

```diff
-               fuzzColorFactor: LH.fuzzColor.xrH(),
+               fuzzColorFactor: GB.fuzzColor.dDB(),
```

#### 1279. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13269` → after: `L13269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13269) · [Before (L13269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13269)

```diff
-                 specularColorFactor: LH.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : LH.metallicReflectanceColor.xrH(),
+                 specularColorFactor: GB.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : GB.metallicReflectanceColor.dDB(),
```

#### 1280. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13278` → after: `L13278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13278) · [Before (L13278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13278)

```diff
-               tH = LH.specularColor.equalsFloats(1, 1, 1) ? void 0 : LH.specularColor.xrH();
+               jB = GB.specularColor.equalsFloats(1, 1, 1) ? void 0 : GB.specularColor.dDB();
```

#### 1281. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13340` → after: `L13340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13340) · [Before (L13340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13340)

```diff
-             } else mH.e.Warn(`${HH}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
+             } else dB.b.Warn(`${BB}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
```

#### 1282. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13371` → after: `L13371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13371) · [Before (L13371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13371)

```diff
-     var TS = LH(41545);
+     var VQ = GB(41262);
```

#### 1283. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13384` → after: `L13384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13384) · [Before (L13384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13384)

```diff
-           LH instanceof er ? AH = LH.unlit : LH instanceof TS.e && (AH = LH.disableLighting), AH && (this._wasUsed = !0, null == BH.extensions && (BH.extensions = {}), BH.extensions[US] = {}), HH(BH)
+           GB instanceof LD ? YB = GB.unlit : GB instanceof VQ.h && (YB = GB.disableLighting), YB && (this._wasUsed = !0, null == OB.extensions && (OB.extensions = {}), OB.extensions[SQ] = {}), BB(OB)
```

#### 1284. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13427` → after: `L13427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13427) · [Before (L13427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13427)

```diff
-                 attenuationColor: HH.tintColor.equalsFloats(1, 1, 1) ? void 0 : HH.tintColor.xrH()
+                 attenuationColor: BB.tintColor.equalsFloats(1, 1, 1) ? void 0 : BB.tintColor.dDB()
```

#### 1285. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13439` → after: `L13439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13439) · [Before (L13439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13439)

```diff
-               const tH = ZH.c.White().xrH();
+               const jB = TB.c.White().dDB();
```

#### 1286. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13442-L13443` → after: `L13442-L13443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13442-L13443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13442-L13443) · [Before (L13442-L13443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13442-L13443)

```diff
-                 let BH = new NH.o(-Math.log(LH.transmissionColor.r) * HH, -Math.log(LH.transmissionColor.g) * HH, -Math.log(LH.transmissionColor.b) * HH);
-                 const AH = new NH.o(LH.transmissionScatter.r * HH, LH.transmissionScatter.g * HH, LH.transmissionScatter.b * HH),
+                 let OB = new XB.r(-Math.log(GB.transmissionColor.r) * BB, -Math.log(GB.transmissionColor.g) * BB, -Math.log(GB.transmissionColor.b) * BB);
+                 const YB = new XB.r(GB.transmissionScatter.r * BB, GB.transmissionScatter.g * BB, GB.transmissionScatter.b * BB),
```

#### 1287. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13450` → after: `L13450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13450) · [Before (L13450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13450)

```diff
-               const CH = ZH.c.White().xrH();
+               const JB = TB.c.White().dDB();
```

#### 1288. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13454-L13455` → after: `L13454-L13455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13454-L13455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13454-L13455) · [Before (L13454-L13455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13454-L13455)

```diff
-                   AH = new NH.o(BH.r, BH.g, BH.b).multiplyByFloats(HH, HH, HH),
-                   rH = new NH.o(1 / Math.max(AH.x, 1e-6), 1 / Math.max(AH.y, 1e-6), 1 / Math.max(AH.z, 1e-6));
+                   YB = new XB.r(OB.r, OB.g, OB.b).multiplyByFloats(BB, BB, BB),
+                   DB = new XB.r(1 / Math.max(YB.x, 1e-6), 1 / Math.max(YB.y, 1e-6), 1 / Math.max(YB.z, 1e-6));
```

#### 1289. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13506` → after: `L13506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13506) · [Before (L13506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13506)

```diff
-             let HH = NH.o.Zero(),
+             let BB = XB.r.Zero(),
```

#### 1290. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13510-L13511` → after: `L13510-L13511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13510-L13511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13510-L13511) · [Before (L13510-L13511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13510-L13511)

```diff
-                 const BH = new NH.o(Math.sqrt(1 - HH.x), Math.sqrt(1 - HH.y), Math.sqrt(1 - HH.z)),
-                   LH = new NH.o(1, 1, 1),
+                 const OB = new XB.r(Math.sqrt(1 - BB.x), Math.sqrt(1 - BB.y), Math.sqrt(1 - BB.z)),
+                   GB = new XB.r(1, 1, 1),
```

#### 1291. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13513-L13514` → after: `L13513-L13514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13513-L13514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13513-L13514) · [Before (L13513-L13514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13513-L13514)

```diff
-                   rH = LH.subtract(new NH.o(.139, .139, .139).multiplyInPlace(BH)),
-                   SH = LH.add(new NH.o(1.17, 1.17, 1.17).multiplyInPlace(BH));
+                   DB = GB.subtract(new XB.r(.139, .139, .139).multiplyInPlace(OB)),
+                   QB = GB.add(new XB.r(1.17, 1.17, 1.17).multiplyInPlace(OB));
```

#### 1292. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13516` → after: `L13516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13516) · [Before (L13516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13516)

```diff
-               }(new NH.o(LH.transmissionScatter.r, LH.transmissionScatter.g, LH.transmissionScatter.b)), AH = LH.transmissionScatterAnisotropy
+               }(new XB.r(GB.transmissionScatter.r, GB.transmissionScatter.g, GB.transmissionScatter.b)), YB = GB.transmissionScatterAnisotropy
```

#### 1293. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13518` → after: `L13518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13518) · [Before (L13518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13518)

```diff
-             const rH = NH.o.Zero();
+             const DB = XB.r.Zero();
```

#### 1294. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13527` → after: `L13527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13527) · [Before (L13527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13527)

```diff
-                 multiscatterColorFactor: HH.multiplyByFloats(CH, CH, CH).addInPlace(rH.multiplyByFloats(EH, EH, EH)).xrH(),
+                 multiscatterColorFactor: BB.multiplyByFloats(JB, JB, JB).addInPlace(DB.multiplyByFloats(MB, MB, MB)).dDB(),
```

#### 1295. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13618` → after: `L13618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13618) · [Before (L13618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13618)

```diff
-         if (LH.yN() || OB.i.Warn(`${HH}: "scene" is not defined for Babylon texture ${LH.name}!`), (0 !== LH.uAng || 0 !== LH.vAng) && (OB.i.Warn(`${HH}: Texture ${LH.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== LH.uRotationCenter || 0 !== LH.vRotatio … [truncated]
+         if (GB.JF() || UO.j.Warn(`${BB}: "scene" is not defined for Babylon texture ${GB.name}!`), (0 !== GB.uAng || 0 !== GB.vAng) && (UO.j.Warn(`${BB}: Texture ${GB.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== GB.uRotationCenter || 0 !== GB.vRotatio … [truncated]
```

#### 1296. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13623-L13624` → after: `L13623-L13624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13623-L13624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13623-L13624) · [Before (L13623-L13624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13623-L13624)

```diff
-             if (LH.homogeneousRotationInUVTransform && LH.uScale !== LH.vScale) return void OB.i.Warn(`${HH}: Texture ${LH.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${DS}.`);
-             OB.i.Warn(`${HH}: Texture ${LH.name} with non-origin rotation center will be exported using an adjusted offset with ${DS}.`), AH.offset = function(HH) {
+             if (GB.homogeneousRotationInUVTransform && GB.uScale !== GB.vScale) return void UO.j.Warn(`${BB}: Texture ${GB.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${aQ}.`);
+             UO.j.Warn(`${BB}: Texture ${GB.name} with non-origin rotation center will be exported using an adjusted offset with ${aQ}.`), YB.offset = function(BB) {
```

#### 1297. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13648` → after: `L13648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13648) · [Before (L13648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13648)

```diff
-     var aS = LH(41336);
+     var CQ = GB(41035);
```

#### 1298. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13663` → after: `L13663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13663) · [Before (L13663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13663)

```diff
-         "image/ktx2" === (rH.mimeType || (0, aS.i)(rH.uri)) && (LH.source = void 0, LH.extensions || (LH.extensions = {}), LH.extensions[sS] = {
+         "image/ktx2" === (DB.mimeType || (0, CQ.g)(DB.uri)) && (GB.source = void 0, GB.extensions || (GB.extensions = {}), GB.extensions[HQ] = {
```

#### 1299. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13688` → after: `L13688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13688) · [Before (L13688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13688)

```diff
-         "image/webp" === (rH.mimeType || (0, aS.i)(rH.uri)) && (LH.source = void 0, LH.extensions || (LH.extensions = {}), LH.extensions[yS] = {
+         "image/webp" === (DB.mimeType || (0, CQ.g)(DB.uri)) && (GB.source = void 0, GB.extensions || (GB.extensions = {}), GB.extensions[tQ] = {
```

#### 1300. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L13713` → after: `L13713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R13713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/47acbb28e589763516a15b8c54da4828aa265d6d...build/bloxd.io/gw4e3a.937868ec#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L13713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/gw4e3a.937868ec/bundles/bloxd.io/chunks/js/257.js#L13713) · [Before (L13713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/47acbb28e589763516a15b8c54da4828aa265d6d/bundles/bloxd.io/chunks/js/257.js#L13713)

```diff
-         "image/avif" === (rH.mimeType || (0, aS.i)(rH.uri)) && (LH.source = void 0, LH.extensions || (LH.extensions = {}), LH.extensions[Ah] = {
+         "image/avif" === (DB.mimeType || (0, CQ.g)(DB.uri)) && (GB.source = void 0, GB.extensions || (GB.extensions = {}), GB.extensions[Yo] = {
```
