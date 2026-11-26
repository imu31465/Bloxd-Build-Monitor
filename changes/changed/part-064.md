# Changed — Bundle Modifications Report (Part 064 / 161)

- **Updated at**: `2026-11-27T02:05 JST`
- **Part**: `64 / 161` (**398** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 063](part-063.md) · [Part 065 →](part-065.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/286.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/286.js` (63 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b)

#### 24. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L243` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L243) · [Before (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L243)

```diff
-             null === rH || Array.isArray(rH) ? (this._noMipmap = SH, this._format = vH, this._createPolynomials = UH, LH = rH, this._loaderOptions = bH, this._useSRGBBuffer = FH, this._lodScale = VH, this._lodOffset = OH) : (LH = rH.extensions ?? null, this._noMipmap = rH.noMipma … [truncated]
+             null === DB || Array.isArray(DB) ? (this._noMipmap = QB, this._format = WB, this._createPolynomials = SB, GB = DB, this._loaderOptions = fB, this._useSRGBBuffer = hB, this._lodScale = nB, this._lodOffset = UB) : (GB = DB.extensions ?? null, this._noMipmap = DB.noMipma … [truncated]
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L278-L282` → after: `L278-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L278-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L278-L282) · [Before (L278-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L278-L282)

```diff
-             if (HH.isIdentity() !== this._textureMatrix.isIdentity() && this.yN()?.markAllMaterialsAsDirty(1, (HH => -1 !== HH.getActiveTextures().indexOf(this))), this._textureMatrix = HH, !this.yN()?.useRightHandedSystem) return;
-             const BH = hH.l.lu[0],
-               LH = hH.l.Quaternion[0],
-               AH = hH.l.lu[1];
-             this._textureMatrix.decompose(BH, LH, AH), LH.z *= -1, LH.w *= -1, hH.e.ComposeToRef(BH, LH, AH, this._textureMatrixRefraction)
+             if (BB.isIdentity() !== this._textureMatrix.isIdentity() && this.JF()?.markAllMaterialsAsDirty(1, (BB => -1 !== BB.getActiveTextures().indexOf(this))), this._textureMatrix = BB, !this.JF()?.useRightHandedSystem) return;
+             const OB = oB.k.Xp[0],
+               GB = oB.k.Quaternion[0],
+               YB = oB.k.Xp[1];
+             this._textureMatrix.decompose(OB, GB, YB), GB.z *= -1, GB.w *= -1, oB.d.ComposeToRef(OB, GB, YB, this._textureMatrixRefraction)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L285` → after: `L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L285) · [Before (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L285)

```diff
-             return this.yN()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
+             return this.JF()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L290)

```diff
-             const LH = this.yN(),
+             const GB = this.JF(),
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L294` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L294) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L294)

```diff
-                 this.onLoadObservable.notifyObservers(this), AH && (AH.dispose(), this.yN()?.markAllMaterialsAsDirty(1)), HH && HH()
+                 this.onLoadObservable.notifyObservers(this), YB && (YB.dispose(), this.JF()?.markAllMaterialsAsDirty(1)), BB && BB()
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L300` → after: `L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L300) · [Before (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L300)

```diff
-                 }, BH && BH(HH, LH), zH.g.OnTextureLoadErrorObservable.notifyObservers(this)
+                 }, OB && OB(BB, GB), yB.e.OnTextureLoadErrorObservable.notifyObservers(this)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L302` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L302) · [Before (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L302)

```diff
-             this._texture ? this._texture.isReady ? SH.d.SetImmediate((() => rH())) : this._texture.onLoadedObservable.add((() => rH())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, LH, this._lodScale, this._lodOffset, HH, hH, th … [truncated]
+             this._texture ? this._texture.isReady ? QB.c.SetImmediate((() => DB())) : this._texture.onLoadedObservable.add((() => DB())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, GB, this._lodScale, this._lodOffset, BB, oB, th … [truncated]
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L307-L308` → after: `L307-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L307-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L307-L308) · [Before (L307-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L307-L308)

```diff
-               AH = XH.c.Clone((() => {
-                 const LH = new HH(this.url, this.yN() || this._getEngine(), this._extensions, this._noMipmap, this._files);
+               YB = PB.d.Clone((() => {
+                 const GB = new BB(this.url, this.JF() || this._getEngine(), this._extensions, this._noMipmap, this._files);
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L315` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L315) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L315)

```diff
-           BH = [(0, rH.H)()], LH = [(0, rH.F)()], CH = [(0, rH.F)()], vH = [(0, rH.H)("rotationY")], PH = [(0, rH.H)("files")], TH = [(0, rH.H)("forcedExtension")], UH = [(0, rH.H)("extensions")], VH = [(0, rH.t)("textureMatrix")], OH = [(0, rH.t)("textureMatrixRefraction")], (0, … [truncated]
+           OB = [(0, DB.L)()], GB = [(0, DB.H)()], JB = [(0, DB.H)()], WB = [(0, DB.L)("rotationY")], AB = [(0, DB.L)("files")], VB = [(0, DB.L)("forcedExtension")], SB = [(0, DB.L)("extensions")], nB = [(0, DB.t)("textureMatrix")], UB = [(0, DB.t)("textureMatrixRefraction")], (0, … [truncated]
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L325` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L325) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L325)

```diff
-           }, null, kH), (0, AH.g)(HH, null, vH, {
+           }, null, kB), (0, YB.h)(BB, null, WB, {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L337` → after: `L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L337) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L337)

```diff
-           }, null, kH), (0, AH.g)(null, null, BH, {
+           }, null, kB), (0, YB.h)(null, null, OB, {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L350)

```diff
-           }, mH, oH), (0, AH.g)(null, null, LH, {
+           }, dB, KB), (0, YB.h)(null, null, GB, {
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L363` → after: `L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L363) · [Before (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L363)

```diff
-           }, IH, fH), (0, AH.g)(null, null, PH, {
+           }, uB, mB), (0, YB.h)(null, null, AB, {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L376` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L376) · [Before (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L376)

```diff
-           }, lH, KH), (0, AH.g)(null, null, TH, {
+           }, IB, FB), (0, YB.h)(null, null, VB, {
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L389` → after: `L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L389) · [Before (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L389)

```diff
-           }, cH, eH), (0, AH.g)(null, null, UH, {
+           }, iB, LB), (0, YB.h)(null, null, SB, {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L402` → after: `L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L402) · [Before (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L402)

```diff
-           }, qH, gH), (0, AH.g)(null, null, VH, {
+           }, gB, rB), (0, YB.h)(null, null, nB, {
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L415` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L415) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L415)

```diff
-           }, NH, RH), (0, AH.g)(null, null, OH, {
+           }, XB, wB), (0, YB.h)(null, null, UB, {
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L454` → after: `L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L454) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L454)

```diff
-       const AH = XH.c.Parse((() => {
+       const YB = PB.d.Parse((() => {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L458` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L458) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L458)

```diff
-       if (HH.boundingBoxPosition && (AH.boundingBoxPosition = hH.o.FromArray(HH.boundingBoxPosition)), HH.boundingBoxSize && (AH.boundingBoxSize = hH.o.FromArray(HH.boundingBoxSize)), HH.animations)
+       if (BB.boundingBoxPosition && (YB.boundingBoxPosition = oB.r.FromArray(BB.boundingBoxPosition)), BB.boundingBoxSize && (YB.boundingBoxSize = oB.r.FromArray(BB.boundingBoxSize)), BB.animations)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L461` → after: `L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L461) · [Before (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L461)

```diff
-             LH = (0, CH.b)("BABYLON.Animation");
+             GB = (0, JB.c)("BABYLON.Animation");
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L466` → after: `L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L466) · [Before (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L466)

```diff
-     PH || (PH = !0, vH.CreateFromImages = TH, vH.CreateFromPrefilteredData = UH, vH.Parse = VH, zH.g._CubeTextureParser = VH, (0, CH.f)("BABYLON.CubeTexture", vH))
+     AB || (AB = !0, WB.CreateFromImages = VB, WB.CreateFromPrefilteredData = SB, WB.Parse = nB, yB.e._CubeTextureParser = nB, (0, JB.f)("BABYLON.CubeTexture", WB))
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L468` → after: `L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L468) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L468)

```diff
-   42472: (HH, BH, LH) => {
+   42177: (BB, OB, GB) => {
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L470` → after: `L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L470) · [Before (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L470)

```diff
-       e: () => CH
+       c: () => JB
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L472-L476` → after: `L472-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L472-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L472-L476) · [Before (L472-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L472-L476)

```diff
-     var AH = LH(39595),
-       rH = LH(41777),
-       SH = LH(41222),
-       hH = LH(41129),
-       tH = LH(41122);
+     var YB = GB(39366),
+       DB = GB(41470),
+       QB = GB(40932),
+       oB = GB(40849),
+       jB = GB(40837);
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L478)

```diff
-     class CH extends rH.g {
+     class JB extends DB.e {
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L485-L487` → after: `L485-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L485-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L485-L487) · [Before (L485-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L485-L487)

```diff
-         super(null, GH ? LH : LH?.NQ, GH ? !AH : LH, XH, CH, void 0, void 0, void 0, void 0, EH), zH || (zH = !0, hH.ThinEngine.prototype.createDynamicTexture = function(HH, BH, LH, AH) {
-           const rH = new tH.e(this, 4);
-           return rH.baseWidth = HH, rH.baseHeight = BH, LH && (HH = this.needPOTTextures ? (0, SH.c)(HH, this._caps.maxTextureSize) : HH, BH = this.needPOTTextures ? (0, SH.c)(BH, this._caps.maxTextureSize) : BH), rH.width = HH, rH.height = BH, rH.isReady = !1, rH.generateMipMaps … [truncated]
+         super(null, zB ? GB : GB?.eq, zB ? !YB : GB, PB, JB, void 0, void 0, void 0, void 0, MB), yB || (yB = !0, oB.ThinEngine.prototype.createDynamicTexture = function(BB, OB, GB, YB) {
+           const DB = new jB.b(this, 4);
+           return DB.baseWidth = BB, DB.baseHeight = OB, GB && (BB = this.needPOTTextures ? (0, QB.f)(BB, this._caps.maxTextureSize) : BB, OB = this.needPOTTextures ? (0, QB.f)(OB, this._caps.maxTextureSize) : OB), DB.width = BB, DB.height = OB, DB.isReady = !1, DB.generateMipMaps … [truncated]
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L501` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L501) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L501)

```diff
-         }), this.name = HH, this.wrapU = rH.g.CLAMP_ADDRESSMODE, this.wrapV = rH.g.CLAMP_ADDRESSMODE, this._generateMipMaps = AH;
+         }), this.name = BB, this.wrapU = DB.e.CLAMP_ADDRESSMODE, this.wrapV = DB.e.CLAMP_ADDRESSMODE, this._generateMipMaps = YB;
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L559` → after: `L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L559) · [Before (L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L559)

```diff
-         const HH = this.yN();
+         const BB = this.JF();
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L566-L567` → after: `L566-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L566-L567) · [Before (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L566-L567)

```diff
-         const HH = this.yN();
-         HH && !HH.isReady() && AH.e.Warn("The scene must be ready before serializing the dynamic texture");
+         const BB = this.JF();
+         BB && !BB.isReady() && YB.b.Warn("The scene must be ready before serializing the dynamic texture");
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L579` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L579) · [Before (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L579)

```diff
-   42445: (HH, BH, LH) => {
+   42148: (BB, OB, GB) => {
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L581` → after: `L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L581) · [Before (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L581)

```diff
-       c: () => rH
+       e: () => DB
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L583-L584` → after: `L583-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L583-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L583-L584) · [Before (L583-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L583-L584)

```diff
-     var AH = LH(41777);
-     class rH extends AH.g {
+     var YB = GB(41470);
+     class DB extends YB.e {
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L591` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L591) · [Before (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L591)

```diff
-           CH = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : AH.g.TRILINEAR_SAMPLINGMODE,
+           JB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : YB.e.TRILINEAR_SAMPLINGMODE,
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L595` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L595) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L595)

```diff
-         super(null, hH, !tH, zH), this.format = SH, this._texture = hH.Iu().createRawTexture2DArray(HH, BH, LH, rH, SH, tH, zH, CH, null, EH, XH ?? 0, GH), this._depth = rH, this.is2DArray = !0
+         super(null, oB, !jB, yB), this.format = QB, this._texture = oB.Lp().createRawTexture2DArray(BB, OB, GB, DB, QB, jB, yB, JB, null, MB, PB ?? 0, zB), this._depth = DB, this.is2DArray = !0
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L608` → after: `L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L608) · [Before (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L608)

```diff
-   42439: (HH, BH, LH) => {
+   42140: (BB, OB, GB) => {
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L610` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L610) · [Before (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L610)

```diff
-       e: () => AH.b
+       c: () => YB.c
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L612-L613` → after: `L612-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L612-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L612-L613) · [Before (L612-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L612-L613)

```diff
-     var AH = LH(41648);
-     (0, AH.e)()
+     var YB = GB(41361);
+     (0, YB.g)()
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L615` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L615) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L615)

```diff
-   41374: (HH, BH, LH) => {
+   41089: (BB, OB, GB) => {
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L617` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L617) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L617)

```diff
-       e: () => AH.d
+       b: () => YB.e
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L619-L620` → after: `L619-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/286.js#L619-L620) · [Before (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/286.js#L619-L620)

```diff
-     var AH = LH(41383);
-     (0, AH.c)()
+     var YB = GB(41091);
+     (0, YB.b)()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/287.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec)

- **File**: `bundles/preprod.bloxd.io/chunks/js/287.js` (77 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L4)

```diff
-   41478: (HH, BH, LH) => {
+   41213: (BB, OB, GB) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L6)

```diff
-       b: () => kH
+       c: () => kB
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L8-L14` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L8-L14) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L8-L14)

```diff
-     var AH = LH(41290),
-       rH = LH(41297),
-       SH = LH(37963),
-       hH = LH(41483),
-       tH = LH(41520),
-       zH = LH(41464),
-       CH = LH(41387);
+     var YB = GB(40998),
+       DB = GB(41004),
+       QB = GB(37778),
+       oB = GB(41215),
+       jB = GB(41237),
+       yB = GB(41197),
+       JB = GB(41097);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L41)

```diff
-           this.keysUp = (0, AH.k)(this, MH, [38]), this.keysUpward = ((0, AH.k)(this, xH), (0, AH.k)(this, vH, [33])), this.keysDown = ((0, AH.k)(this, PH), (0, AH.k)(this, TH, [40])), this.keysDownward = ((0, AH.k)(this, UH), (0, AH.k)(this, VH, [34])), this.keysLeft = ((0, AH.k … [truncated]
+           this.keysUp = (0, YB.j)(this, NB, [38]), this.keysUpward = ((0, YB.j)(this, RB), (0, YB.j)(this, WB, [33])), this.keysDown = ((0, YB.j)(this, AB), (0, YB.j)(this, VB, [40])), this.keysDownward = ((0, YB.j)(this, SB), (0, YB.j)(this, nB, [34])), this.keysLeft = ((0, YB.j … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L44)

```diff
-           HH = CH.i.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.yN(), this._engine = this._scene.Iu(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
+           BB = JB.j.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.JF(), this._engine = this._scene.Lp(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L49)

```diff
-               if (BH.type === zH.c.KEYDOWN) {
+               if (OB.type === yB.d.KEYDOWN) {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L69)

```diff
-               hH = HH._localDirection.SBH(0, 0, 0);
+               oB = BB._localDirection.zOB(0, 0, 0);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L75)

```diff
-               hH.normalize().scaleInPlace(BH), HH.yN().useRightHandedSystem && (hH.z *= -1), HH.getViewMatrix().invertToRef(HH._cameraTransformMatrix), SH.o.TransformNormalToRef(hH, HH._cameraTransformMatrix, HH._transformedDirection), HH.cameraDirection.addInPlace(HH._transforme … [truncated]
+               oB.normalize().scaleInPlace(OB), BB.JF().useRightHandedSystem && (oB.z *= -1), BB.getViewMatrix().invertToRef(BB._cameraTransformMatrix), QB.r.TransformNormalToRef(oB, BB._cameraTransformMatrix, BB._transformedDirection), BB.cameraDirection.addInPlace(BB._transforme … [truncated]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L94` → after: `L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L94) · [Before (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L94)

```diff
-         BH = [(0, rH.H)()], LH = [(0, rH.H)()], hH = [(0, rH.H)()], tH = [(0, rH.H)()], EH = [(0, rH.H)()], XH = [(0, rH.H)()], GH = [(0, rH.H)()], YH = [(0, rH.H)()], uH = [(0, rH.H)()], QH = [(0, rH.H)()], WH = [(0, rH.H)()], (0, AH.g)(null, null, BH, {
+         OB = [(0, DB.L)()], GB = [(0, DB.L)()], oB = [(0, DB.L)()], jB = [(0, DB.L)()], MB = [(0, DB.L)()], PB = [(0, DB.L)()], zB = [(0, DB.L)()], lB = [(0, DB.L)()], pB = [(0, DB.L)()], qB = [(0, DB.L)()], ZB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L107` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L107) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L107)

```diff
-         }, MH, xH), (0, AH.g)(null, null, LH, {
+         }, NB, RB), (0, YB.h)(null, null, GB, {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L120` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L120) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L120)

```diff
-         }, vH, PH), (0, AH.g)(null, null, hH, {
+         }, WB, AB), (0, YB.h)(null, null, oB, {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L133)

```diff
-         }, TH, UH), (0, AH.g)(null, null, tH, {
+         }, VB, SB), (0, YB.h)(null, null, jB, {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L146)

```diff
-         }, VH, OH), (0, AH.g)(null, null, EH, {
+         }, nB, UB), (0, YB.h)(null, null, MB, {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L159` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L159) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L159)

```diff
-         }, bH, kH), (0, AH.g)(null, null, XH, {
+         }, fB, kB), (0, YB.h)(null, null, PB, {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L172` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L172) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L172)

```diff
-         }, mH, oH), (0, AH.g)(null, null, GH, {
+         }, dB, KB), (0, YB.h)(null, null, zB, {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L185` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L185) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L185)

```diff
-         }, IH, fH), (0, AH.g)(null, null, YH, {
+         }, uB, mB), (0, YB.h)(null, null, lB, {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L198` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L198) · [Before (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L198)

```diff
-         }, lH, KH), (0, AH.g)(null, null, uH, {
+         }, IB, FB), (0, YB.h)(null, null, pB, {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L211` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L211) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L211)

```diff
-         }, cH, eH), (0, AH.g)(null, null, QH, {
+         }, iB, LB), (0, YB.h)(null, null, qB, {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L224` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L224) · [Before (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L224)

```diff
-         }, qH, gH), (0, AH.g)(null, null, WH, {
+         }, gB, rB), (0, YB.h)(null, null, ZB, {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L246-L247` → after: `L246-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L246-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L246-L247) · [Before (L246-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L246-L247)

```diff
-     var XH = LH(37997),
-       GH = LH(41458);
+     var PB = GB(37802),
+       zB = GB(41190);
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L259-L260` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L259-L260) · [Before (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L259-L260)

```diff
-           const AH = LH.Fy ?? LH.sensitivity ?? 1 / this.angularSensibility,
-             rH = LH.I6 ?? LH.sensitivity ?? 1 / this.angularSensibility;
+           const YB = GB.Hx ?? GB.sensitivity ?? 1 / this.angularSensibility,
+             DB = GB.vx ?? GB.sensitivity ?? 1 / this.angularSensibility;
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L265)

```diff
-           this.touchEnabled = HH, this.buttons = (0, AH.k)(this, SH, [0, 1, 2]), this.angularSensibility = ((0, AH.k)(this, hH), (0, AH.k)(this, tH, 2e3)), this._pointerInput = (0, AH.k)(this, zH), this._previousPosition = null, this.onPointerMovedObservable = new XH.d, this._all … [truncated]
+           this.touchEnabled = BB, this.buttons = (0, YB.j)(this, QB, [0, 1, 2]), this.angularSensibility = ((0, YB.j)(this, oB), (0, YB.j)(this, jB, 2e3)), this._pointerInput = (0, YB.j)(this, yB), this._previousPosition = null, this.onPointerMovedObservable = new PB.b, this._all … [truncated]
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L268-L269` → after: `L268-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L268-L269) · [Before (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L268-L269)

```diff
-           HH = CH.i.BackCompatCameraNoPreventDefault(arguments);
-           const BH = this.camera.Iu(),
+           BB = JB.j.BackCompatCameraNoPreventDefault(arguments);
+           const OB = this.camera.Lp(),
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L275)

```diff
-             if (AH.type !== GH.d.POINTERMOVE && -1 === this.buttons.indexOf(rH.button)) return;
+             if (YB.type !== zB.c.POINTERMOVE && -1 === this.buttons.indexOf(DB.button)) return;
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L277` → after: `L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L277) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L277)

```diff
-             if (AH.type === GH.d.POINTERDOWN) {
+             if (YB.type === zB.c.POINTERDOWN) {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L286` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L286) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L286)

```diff
-             } else if (AH.type === GH.d.POINTERUP) {
+             } else if (YB.type === zB.c.POINTERUP) {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L292` → after: `L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L292) · [Before (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L292)

```diff
-             } else if (AH.type === GH.d.POINTERMOVE && (this._activePointerId === rH.pointerId || !SH))
+             } else if (YB.type === zB.c.POINTERMOVE && (this._activePointerId === DB.pointerId || !QB))
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L310` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L310) · [Before (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L310)

```diff
-           }, this._observer = this.camera.yN()._inputManager._addCameraPointerObserver(this._pointerInput, GH.d.POINTERDOWN | GH.d.POINTERUP | GH.d.POINTERMOVE), LH && (this._contextMenuBind = HH => this.onContextMenu(HH), LH.addEventListener("contextmenu", this._contextMenuBind, … [truncated]
+           }, this._observer = this.camera.JF()._inputManager._addCameraPointerObserver(this._pointerInput, zB.c.POINTERDOWN | zB.c.POINTERUP | zB.c.POINTERMOVE), GB && (this._contextMenuBind = BB => this.onContextMenu(BB), GB.addEventListener("contextmenu", this._contextMenuBind, … [truncated]
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L317-L318` → after: `L317-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L317-L318) · [Before (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L317-L318)

```diff
-             if (this.camera.yN()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
-               const HH = this.camera.Iu().getInputElement();
+             if (this.camera.JF()._inputManager._removeCameraPointerObserver(this._observer), this._contextMenuBind) {
+               const BB = this.camera.Lp().getInputElement();
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L333` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L333) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L333)

```diff
-         BH = [(0, rH.H)()], LH = [(0, rH.H)()], (0, AH.g)(null, null, BH, {
+         OB = [(0, DB.L)()], GB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L346` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L346) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L346)

```diff
-         }, SH, hH), (0, AH.g)(null, null, LH, {
+         }, QB, oB), (0, YB.h)(null, null, GB, {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L368` → after: `L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L368) · [Before (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L368)

```diff
-     var uH = LH(41466);
+     var pB = GB(41201);
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L379` → after: `L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L379) · [Before (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L379)

```diff
-           this.wheelPrecisionX = (0, AH.k)(this, hH, 3), this.wheelPrecisionY = ((0, AH.k)(this, tH), (0, AH.k)(this, zH, 3)), this.wheelPrecisionZ = ((0, AH.k)(this, EH), (0, AH.k)(this, YH, 3)), this.onChangedObservable = ((0, AH.k)(this, QH), new XH.d), this._wheelDeltaX = 0,  … [truncated]
+           this.wheelPrecisionX = (0, YB.j)(this, oB, 3), this.wheelPrecisionY = ((0, YB.j)(this, jB), (0, YB.j)(this, yB, 3)), this.wheelPrecisionZ = ((0, YB.j)(this, MB), (0, YB.j)(this, lB, 3)), this.onChangedObservable = ((0, YB.j)(this, qB), new PB.b), this._wheelDeltaX = 0,  … [truncated]
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L382-L383` → after: `L382-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L382-L383) · [Before (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L382-L383)

```diff
-           HH = CH.i.BackCompatCameraNoPreventDefault(arguments), this._wheel = BH => {
-             if (BH.type !== GH.d.POINTERWHEEL) return;
+           BB = JB.j.BackCompatCameraNoPreventDefault(arguments), this._wheel = OB => {
+             if (OB.type !== zB.c.POINTERWHEEL) return;
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L385` → after: `L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L385) · [Before (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L385)

```diff
-               AH = LH.deltaMode === uH.d.DOM_DELTA_LINE ? this._ffMultiplier : 1;
+               YB = GB.deltaMode === pB.c.DOM_DELTA_LINE ? this._ffMultiplier : 1;
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L387` → after: `L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L387) · [Before (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L387)

```diff
-           }, this._observer = this.camera.yN()._inputManager._addCameraPointerObserver(this._wheel, GH.d.POINTERWHEEL)
+           }, this._observer = this.camera.JF()._inputManager._addCameraPointerObserver(this._wheel, zB.c.POINTERWHEEL)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L390` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L390) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L390)

```diff
-           this._observer && (this.camera.yN()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
+           this._observer && (this.camera.JF()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null), this.onChangedObservable && this.onChangedObservable.clear()
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L407` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L407) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L407)

```diff
-         BH = [(0, rH.H)()], LH = [(0, rH.H)()], SH = [(0, rH.H)()], (0, AH.g)(null, null, BH, {
+         OB = [(0, DB.L)()], GB = [(0, DB.L)()], QB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L420` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L420) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L420)

```diff
-         }, hH, tH), (0, AH.g)(null, null, LH, {
+         }, oB, jB), (0, YB.h)(null, null, GB, {
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L433` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L433) · [Before (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L433)

```diff
-         }, zH, EH), (0, AH.g)(null, null, SH, {
+         }, yB, MB), (0, YB.h)(null, null, QB, {
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L464` → after: `L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L464) · [Before (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L464)

```diff
-           super(...arguments), this.camera = (0, AH.k)(this, uH), this._moveRelative = SH.o.Zero(), this._rotateRelative = SH.o.Zero(), this._moveScene = SH.o.Zero(), this._wheelXAction = WH.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = WH.MoveRelative, thi … [truncated]
+           super(...arguments), this.camera = (0, YB.j)(this, pB), this._moveRelative = QB.r.Zero(), this._rotateRelative = QB.r.Zero(), this._moveScene = QB.r.Zero(), this._wheelXAction = ZB.MoveRelative, this._wheelXActionCoordinate = 0, this._wheelYAction = ZB.MoveRelative, thi … [truncated]
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L525-L526` → after: `L525-L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L525-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L525-L526) · [Before (L525-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L525-L526)

```diff
-           this._moveRelative.IHH(0), this._rotateRelative.IHH(0), this._moveScene.IHH(0), this._updateCamera(), this.camera.yN().useRightHandedSystem && (this._moveRelative.z *= -1);
-           const HH = SH.e.Zero();
+           this._moveRelative.uBB(0), this._rotateRelative.uBB(0), this._moveScene.uBB(0), this._updateCamera(), this.camera.JF().useRightHandedSystem && (this._moveRelative.z *= -1);
+           const BB = QB.d.Zero();
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L528-L529` → after: `L528-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L528-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L528-L529) · [Before (L528-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L528-L529)

```diff
-           const BH = SH.o.Zero();
-           SH.o.TransformNormalToRef(this._moveRelative, HH, BH), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(BH), this.camera.cameraDirection.addInPlace(this._mo … [truncated]
+           const OB = QB.r.Zero();
+           QB.r.TransformNormalToRef(this._moveRelative, BB, OB), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(OB), this.camera.cameraDirection.addInPlace(this._mo … [truncated]
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L561` → after: `L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L561) · [Before (L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L561)

```diff
-         BH = [(0, rH.H)()], LH = [(0, rH.H)()], hH = [(0, rH.H)()], tH = [(0, rH.H)()], zH = [(0, rH.H)()], CH = [(0, rH.H)()], EH = [(0, rH.H)()], XH = [(0, rH.H)()], GH = [(0, rH.H)()], (0, AH.g)(HH, null, BH, {
+         OB = [(0, DB.L)()], GB = [(0, DB.L)()], oB = [(0, DB.L)()], jB = [(0, DB.L)()], yB = [(0, DB.L)()], JB = [(0, DB.L)()], MB = [(0, DB.L)()], PB = [(0, DB.L)()], zB = [(0, DB.L)()], (0, YB.h)(BB, null, OB, {
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L573` → after: `L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L573) · [Before (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L573)

```diff
-         }, null, uH), (0, AH.g)(HH, null, LH, {
+         }, null, pB), (0, YB.h)(BB, null, GB, {
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L585` → after: `L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L585) · [Before (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L585)

```diff
-         }, null, uH), (0, AH.g)(HH, null, hH, {
+         }, null, pB), (0, YB.h)(BB, null, oB, {
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L597` → after: `L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L597) · [Before (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L597)

```diff
-         }, null, uH), (0, AH.g)(HH, null, tH, {
+         }, null, pB), (0, YB.h)(BB, null, jB, {
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L609` → after: `L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L609) · [Before (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L609)

```diff
-         }, null, uH), (0, AH.g)(HH, null, zH, {
+         }, null, pB), (0, YB.h)(BB, null, yB, {
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L621` → after: `L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L621) · [Before (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L621)

```diff
-         }, null, uH), (0, AH.g)(HH, null, CH, {
+         }, null, pB), (0, YB.h)(BB, null, JB, {
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L633` → after: `L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L633) · [Before (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L633)

```diff
-         }, null, uH), (0, AH.g)(HH, null, EH, {
+         }, null, pB), (0, YB.h)(BB, null, MB, {
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L645` → after: `L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L645) · [Before (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L645)

```diff
-         }, null, uH), (0, AH.g)(HH, null, XH, {
+         }, null, pB), (0, YB.h)(BB, null, PB, {
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L657` → after: `L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L657) · [Before (L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L657)

```diff
-         }, null, uH), (0, AH.g)(HH, null, GH, {
+         }, null, pB), (0, YB.h)(BB, null, zB, {
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L687` → after: `L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L687) · [Before (L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L687)

```diff
-           this.allowMouse = HH, this.touchAngularSensibility = (0, AH.k)(this, hH, 2e5), this.touchMoveSensibility = ((0, AH.k)(this, tH), (0, AH.k)(this, zH, 250)), this.singleFingerRotate = ((0, AH.k)(this, EH), !1), this._offsetX = null, this._offsetY = null, this._pointerPres … [truncated]
+           this.allowMouse = BB, this.touchAngularSensibility = (0, YB.j)(this, oB, 2e5), this.touchMoveSensibility = ((0, YB.j)(this, jB), (0, YB.j)(this, yB, 250)), this.singleFingerRotate = ((0, YB.j)(this, MB), !1), this._offsetX = null, this._offsetY = null, this._pointerPres … [truncated]
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L690` → after: `L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L690) · [Before (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L690)

```diff
-           HH = CH.i.BackCompatCameraNoPreventDefault(arguments);
+           BB = JB.j.BackCompatCameraNoPreventDefault(arguments);
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L698` → after: `L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L698) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L698)

```diff
-                 if (LH.type === GH.d.POINTERDOWN) {
+                 if (GB.type === zB.c.POINTERDOWN) {
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L704` → after: `L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L704) · [Before (L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L704)

```diff
-                 } else if (LH.type === GH.d.POINTERUP) {
+                 } else if (GB.type === zB.c.POINTERUP) {
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L710` → after: `L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L710) · [Before (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L710)

```diff
-               } else if (LH.type === GH.d.POINTERMOVE) {
+               } else if (GB.type === zB.c.POINTERMOVE) {
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L715-L716` → after: `L715-L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L715-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L715-L716) · [Before (L715-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L715-L716)

```diff
-             }), this._observer = this.camera.yN()._inputManager._addCameraPointerObserver(this._pointerInput, GH.d.POINTERDOWN | GH.d.POINTERUP | GH.d.POINTERMOVE), this._onLostFocus) {
-             const HH = this.camera.Iu().getInputElement();
+             }), this._observer = this.camera.JF()._inputManager._addCameraPointerObserver(this._pointerInput, zB.c.POINTERDOWN | zB.c.POINTERUP | zB.c.POINTERMOVE), this._onLostFocus) {
+             const BB = this.camera.Lp().getInputElement();
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L722-L723` → after: `L722-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L722-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L722-L723) · [Before (L722-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L722-L723)

```diff
-             if (this._observer && (this.camera.yN()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
-               const HH = this.camera.Iu().getInputElement();
+             if (this._observer && (this.camera.JF()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
+               const BB = this.camera.Lp().getInputElement();
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L745-L746` → after: `L745-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L745-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L745-L746) · [Before (L745-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L745-L746)

```diff
-               rH = SH.l.lu[0];
-             rH.SBH(0, 0, BH * this._offsetY * LH), SH.e.RotationYawPitchRollToRef(HH.rotation.y, HH.rotation.x, 0, HH._cameraRotationMatrix), SH.o.TransformCoordinatesToRef(rH, HH._cameraRotationMatrix, rH), HH.cameraDirection.addInPlace(rH)
+               DB = QB.k.Xp[0];
+             DB.zOB(0, 0, OB * this._offsetY * GB), QB.d.RotationYawPitchRollToRef(BB.rotation.y, BB.rotation.x, 0, BB._cameraRotationMatrix), QB.r.TransformCoordinatesToRef(DB, BB._cameraRotationMatrix, DB), BB.cameraDirection.addInPlace(DB)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L757` → after: `L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L757) · [Before (L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L757)

```diff
-         BH = [(0, rH.H)()], LH = [(0, rH.H)()], (0, AH.g)(null, null, BH, {
+         OB = [(0, DB.L)()], GB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L770` → after: `L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L770) · [Before (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L770)

```diff
-         }, hH, tH), (0, AH.g)(null, null, LH, {
+         }, oB, jB), (0, YB.h)(null, null, GB, {
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L792` → after: `L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L792) · [Before (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L792)

```diff
-     var vH, PH, TH, UH = LH(41169);
+     var WB, AB, VB, SB = GB(40890);
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L819-L821` → after: `L819-L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L819-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L819-L821) · [Before (L819-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L819-L821)

```diff
-     }(vH = VH.prototype).addDeviceOrientation ?? (vH.addDeviceOrientation = (0, UH.f)("FreeCameraInputsManager", "addDeviceOrientation")), (PH = VH.prototype).addVirtualJoystick ?? (PH.addVirtualJoystick = (0, UH.f)("FreeCameraInputsManager", "addVirtualJoystick")), (TH = VH.prot … [truncated]
-     var OH = LH(41184),
-       bH = LH(38012);
+     }(WB = nB.prototype).addDeviceOrientation ?? (WB.addDeviceOrientation = (0, SB.g)("FreeCameraInputsManager", "addDeviceOrientation")), (AB = nB.prototype).addVirtualJoystick ?? (AB.addVirtualJoystick = (0, SB.g)("FreeCameraInputsManager", "addVirtualJoystick")), (VB = nB.prot … [truncated]
+     var UB = GB(40905),
+       fB = GB(37823);
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L824` → after: `L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L824) · [Before (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L824)

```diff
-         let BH, LH, tH, zH, EH = hH.e,
+         let OB, GB, jB, yB, MB = oB.h,
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L924` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L924) · [Before (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L924)

```diff
-             super(HH, BH, LH, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), rH = this, this.ellipsoid = (0, AH.k)(this, XH, new SH.o(.5, 1, .5)), this.ellipsoidOffset = ((0, AH.k)(this, GH), (0, AH.k)(this, YH, new SH.o(0, 0, 0))), this.checkCollisions = (( … [truncated]
+             super(BB, OB, GB, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), DB = this, this.ellipsoid = (0, YB.j)(this, PB, new QB.r(.5, 1, .5)), this.ellipsoidOffset = ((0, YB.j)(this, zB), (0, YB.j)(this, lB, new QB.r(0, 0, 0))), this.checkCollisions = (( … [truncated]
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L926` → after: `L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L926) · [Before (L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L926)

```diff
-               rH._newPosition.Tm(BH), rH._newPosition.subtractToRef(rH._oldPosition, rH._diffPosition), rH._diffPosition.length() > OH.c.CollisionsEpsilon && (rH.position.addToRef(rH._diffPosition, rH._deferredPositionUpdate), rH._deferOnly ? rH._deferredUpdated = !0 : rH.positio … [truncated]
+               DB._newPosition.IU(OB), DB._newPosition.subtractToRef(DB._oldPosition, DB._diffPosition), DB._diffPosition.length() > UB.d.CollisionsEpsilon && (DB.position.addToRef(DB._diffPosition, DB._deferredPositionUpdate), DB._deferOnly ? DB._deferredUpdated = !0 : DB.positio … [truncated]
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L930` → after: `L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L930) · [Before (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L930)

```diff
-             BH = CH.i.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(BH)
+             OB = JB.j.BackCompatCameraNoPreventDefault(arguments), this.inputs.attachElement(OB)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L933` → after: `L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L933) · [Before (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L933)

```diff
-             this.inputs.detachElement(), this.cameraDirection = new SH.o(0, 0, 0), this.cameraRotation = new SH.n(0, 0)
+             this.inputs.detachElement(), this.cameraDirection = new QB.r(0, 0, 0), this.cameraRotation = new QB.o(0, 0)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L943-L944` → after: `L943-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L943-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L943-L944) · [Before (L943-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L943-L944)

```diff
-             BH = this.parent ? SH.o.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, BH.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
-             const LH = this.yN().collisionCoordinator;
+             OB = this.parent ? QB.r.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, OB.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
+             const GB = this.JF().collisionCoordinator;
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L947` → after: `L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L947) · [Before (L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L947)

```diff
-             this.applyGravity && (AH = HH.add(this.yN().gravity)), LH.getNewPosition(this._oldPosition, AH, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
+             this.applyGravity && (YB = BB.add(this.JF().gravity)), GB.getNewPosition(this._oldPosition, YB, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L950` → after: `L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L950) · [Before (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L950)

```diff
-             this._localDirection || (this._localDirection = SH.o.Zero(), this._transformedDirection = SH.o.Zero()), this.inputs.checkInputs(), super._checkInputs()
+             this._localDirection || (this._localDirection = QB.r.Zero(), this._transformedDirection = QB.r.Zero()), this.inputs.checkInputs(), super._checkInputs()
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L962` → after: `L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L962) · [Before (L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L962)

```diff
-             this.checkCollisions && this.yN().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
+             this.checkCollisions && this.JF().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L972` → after: `L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L972) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L972)

```diff
-           BH = [(0, rH.F)()], LH = [(0, rH.F)()], tH = [(0, rH.H)()], zH = [(0, rH.H)()], (0, AH.g)(null, null, BH, {
+           OB = [(0, DB.H)()], GB = [(0, DB.H)()], jB = [(0, DB.L)()], yB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L985` → after: `L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L985) · [Before (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L985)

```diff
-           }, XH, GH), (0, AH.g)(null, null, LH, {
+           }, PB, zB), (0, YB.h)(null, null, GB, {
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L998` → after: `L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L998) · [Before (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L998)

```diff
-           }, YH, uH), (0, AH.g)(null, null, tH, {
+           }, lB, pB), (0, YB.h)(null, null, jB, {
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L1011` → after: `L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/287.js#L1011) · [Before (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/287.js#L1011)

```diff
-           }, QH, WH), (0, AH.g)(null, null, zH, {
+           }, qB, ZB), (0, YB.h)(null, null, yB, {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/288.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec)

- **File**: `bundles/preprod.bloxd.io/chunks/js/288.js` (60 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468)

#### 1. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L4)

```diff
-   41535: (HH, BH, LH) => {
+   41250: (BB, OB, GB) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L6)

```diff
-       b: () => GH
+       d: () => zB
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L8-L16` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L8-L16) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L8-L16)

```diff
-     var AH = LH(41290),
-       rH = LH(41297),
-       SH = LH(37963),
-       hH = LH(38074),
-       tH = LH(41498),
-       zH = LH(41416),
-       CH = LH(38012),
-       EH = LH(41472),
-       XH = LH(41319);
+     var YB = GB(40998),
+       DB = GB(41004),
+       QB = GB(37778),
+       oB = GB(37894),
+       jB = GB(41220),
+       yB = GB(41136),
+       JB = GB(37823),
+       MB = GB(41211),
+       PB = GB(41022);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L61` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L61) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L61)

```diff
-           return (0, AH.e)(this, BH, "f")
+           return (0, YB.c)(this, OB, "f")
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L64` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L64) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L64)

```diff
-           (0, AH.f)(this, BH, HH, "f")
+           (0, YB.d)(this, OB, BB, "f")
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L109` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L109) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L109)

```diff
-           super(LH, rH, !1), this.diffuse = ((0, AH.k)(this, bH), (0, AH.k)(this, kH, new hH.c(1, 1, 1))), this.specular = ((0, AH.k)(this, mH), (0, AH.k)(this, oH, new hH.c(1, 1, 1))), this.falloffType = ((0, AH.k)(this, IH), (0, AH.k)(this, fH, HH.FALLOFF_DEFAULT)), this.intens … [truncated]
+           super(GB, DB, !1), this.diffuse = ((0, YB.j)(this, fB), (0, YB.j)(this, kB, new oB.c(1, 1, 1))), this.specular = ((0, YB.j)(this, dB), (0, YB.j)(this, KB, new oB.c(1, 1, 1))), this.falloffType = ((0, YB.j)(this, uB), (0, YB.j)(this, mB, BB.FALLOFF_DEFAULT)), this.intens … [truncated]
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L121)

```diff
-             this.transferToEffect(LH, SH), this.diffuse.scaleToRef(HH, hH.m.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", hH.m.Color3[0], this.range, SH), AH && (this.specular.scaleToRef(HH, hH.m.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", hH.m. … [truncated]
+             this.transferToEffect(GB, QB), this.diffuse.scaleToRef(BB, oB.o.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", oB.o.Color3[0], this.range, QB), YB && (this.specular.scaleToRef(BB, oB.o.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", oB.o. … [truncated]
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L139)

```diff
-           super._syncParentEnabledState(), this.mV() || this._resyncMeshes()
+           super._syncParentEnabledState(), this.lV() || this._resyncMeshes()
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L142)

```diff
-           super.vI(HH), this._resyncMeshes()
+           super.Zk(BB), this._resyncMeshes()
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L152` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L152) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L152)

```diff
-           return SH.o.Zero()
+           return QB.r.Zero()
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L166` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L166) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L166)

```diff
-           if (this.yN().stopAnimation(this), this._parentContainer) {
+           if (this.JF().stopAnimation(this), this._parentContainer) {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L170-L171` → after: `L170-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L170-L171) · [Before (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L170-L171)

```diff
-           for (const LH of this.yN().meshes) LH._removeLightSource(this, !0);
-           this._uniformBuffer.dispose(), this.yN().removeLight(this), super.dispose(HH, BH)
+           for (const GB of this.JF().meshes) GB._removeLightSource(this, !0);
+           this._uniformBuffer.dispose(), this.JF().removeLight(this), super.dispose(BB, OB)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L181` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L181) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L181)

```diff
-           const AH = HH.GetConstructorFromName(this.getTypeID(), BH, this.yN());
+           const YB = BB.GetConstructorFromName(this.getTypeID(), OB, this.JF());
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L183-L184` → after: `L183-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L183-L184) · [Before (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L183-L184)

```diff
-           const rH = XH.c.Clone(AH, this);
-           return BH && (rH.name = BH), LH && (rH.parent = LH), rH.vI(this.isEnabled()), this.onClonedObservable.notifyObservers(rH), rH
+           const DB = PB.d.Clone(YB, this);
+           return OB && (DB.name = OB), GB && (DB.parent = GB), DB.Zk(this.isEnabled()), this.onClonedObservable.notifyObservers(DB), DB
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L187` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L187) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L187)

```diff
-           const HH = XH.c.Serialize(this);
+           const BB = PB.d.Serialize(this);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L196` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L196) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L196)

```diff
-           return XH.c.AppendSerializedAnimations(this, HH), HH.rW = this.serializeAnimationRanges(), HH.isEnabled = this.isEnabled(), HH
+           return PB.d.AppendSerializedAnimations(this, BB), BB.JZ = this.serializeAnimationRanges(), BB.isEnabled = this.isEnabled(), BB
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L206` → after: `L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L206) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L206)

```diff
-           const SH = XH.c.Parse(rH, BH, LH, AH);
+           const QB = PB.d.Parse(DB, OB, GB, YB);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L210)

```diff
-                 AH = (0, CH.b)("BABYLON.Animation");
+                 YB = (0, JB.c)("BABYLON.Animation");
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L215` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L215) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L215)

```diff
-           return BH.autoAnimate && LH.beginAnimation(SH, BH.autoAnimateFrom, BH.autoAnimateTo, BH.autoAnimateLoop, BH.autoAnimateSpeed || 1), void 0 !== BH.isEnabled && SH.vI(BH.isEnabled), SH._onParsed(BH, LH, AH), SH
+           return OB.autoAnimate && GB.beginAnimation(QB, OB.autoAnimateFrom, OB.autoAnimateTo, OB.autoAnimateLoop, OB.autoAnimateSpeed || 1), void 0 !== OB.isEnabled && QB.Zk(OB.isEnabled), QB._onParsed(OB, GB, YB), QB
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L252` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L252) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L252)

```diff
-             for (const HH of this.yN().meshes) HH._resyncLightSource(this)
+             for (const BB of this.JF().meshes) BB._resyncLightSource(this)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L255` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L255) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L255)

```diff
-           for (const HH of this.yN().meshes) - 1 !== HH.lightSources.indexOf(this) && HH._markSubMeshesAsLightDirty()
+           for (const BB of this.JF().meshes) - 1 !== BB.lightSources.indexOf(this) && BB._markSubMeshesAsLightDirty()
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L258)

```diff
-           this._photometricScale = this._getPhotometricScale(), this.yN().resetCachedMaterial()
+           this._photometricScale = this._getPhotometricScale(), this.JF().resetCachedMaterial()
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L298-L299` → after: `L298-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L298-L299) · [Before (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L298-L299)

```diff
-           const HH = this.yN();
-           0 != this._renderPriority && (HH.requireLightSorting = !0), this.yN().sortLightsByPriority()
+           const BB = this.JF();
+           0 != this._renderPriority && (BB.requireLightSorting = !0), this.JF().sortLightsByPriority()
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L309` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L309) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L309)

```diff
-         LH = [(0, rH.l)()], GH = [(0, rH.l)()], YH = [(0, rH.H)()], uH = [(0, rH.H)()], QH = [(0, rH.H)()], WH = [(0, rH.H)()], MH = [(0, rH.H)()], xH = [(0, rH.H)()], vH = [(0, rH.e)("_reorderLightsInScene")], PH = [(0, rH.H)("shadowEnabled")], TH = [(0, rH.H)("excludeWithLayerM … [truncated]
+         GB = [(0, DB.n)()], zB = [(0, DB.n)()], lB = [(0, DB.L)()], pB = [(0, DB.L)()], qB = [(0, DB.L)()], ZB = [(0, DB.L)()], NB = [(0, DB.L)()], RB = [(0, DB.L)()], WB = [(0, DB.g)("_reorderLightsInScene")], AB = [(0, DB.L)("shadowEnabled")], VB = [(0, DB.L)("excludeWithLayerM … [truncated]
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L319` → after: `L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L319) · [Before (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L319)

```diff
-         }, null, bH), (0, AH.g)(HH, null, WH, {
+         }, null, fB), (0, YB.h)(BB, null, ZB, {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L329` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L329) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L329)

```diff
-         }, null, bH), (0, AH.g)(HH, null, MH, {
+         }, null, fB), (0, YB.h)(BB, null, NB, {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L339)

```diff
-         }, null, bH), (0, AH.g)(HH, null, vH, {
+         }, null, fB), (0, YB.h)(BB, null, WB, {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L352)

```diff
-         }, gH, NH), (0, AH.g)(null, null, LH, {
+         }, rB, XB), (0, YB.h)(null, null, GB, {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L365)

```diff
-         }, kH, mH), (0, AH.g)(null, null, GH, {
+         }, kB, dB), (0, YB.h)(null, null, zB, {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L378` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L378) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L378)

```diff
-         }, oH, IH), (0, AH.g)(null, null, YH, {
+         }, KB, uB), (0, YB.h)(null, null, lB, {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L391` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L391) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L391)

```diff
-         }, fH, lH), (0, AH.g)(null, null, uH, {
+         }, mB, IB), (0, YB.h)(null, null, pB, {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L404` → after: `L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L404) · [Before (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L404)

```diff
-         }, KH, cH), (0, AH.g)(null, null, xH, {
+         }, FB, iB), (0, YB.h)(null, null, RB, {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L417` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L417) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L417)

```diff
-         }, eH, qH), (0, AH.g)(null, null, PH, {
+         }, LB, gB), (0, YB.h)(null, null, AB, {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L430` → after: `L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L430) · [Before (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L430)

```diff
-         }, RH, jH), (0, AH.g)(null, null, TH, {
+         }, wB, EB), (0, YB.h)(null, null, VB, {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L443` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L443) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L443)

```diff
-         }, nH, FH), (0, AH.g)(null, null, UH, {
+         }, cB, hB), (0, YB.h)(null, null, SB, {
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L456` → after: `L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L456) · [Before (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L456)

```diff
-         }, DH, wH), (0, AH.g)(null, null, VH, {
+         }, aB, eB), (0, YB.h)(null, null, nB, {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L475` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L475) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L475)

```diff
-       })(), HH.FALLOFF_DEFAULT = EH.e.FALLOFF_DEFAULT, HH.FALLOFF_PHYSICAL = EH.e.FALLOFF_PHYSICAL, HH.FALLOFF_GLTF = EH.e.FALLOFF_GLTF, HH.FALLOFF_STANDARD = EH.e.FALLOFF_STANDARD, HH.LIGHTMAP_DEFAULT = EH.e.LIGHTMAP_DEFAULT, HH.LIGHTMAP_SPECULAR = EH.e.LIGHTMAP_SPECULAR, HH.LIG … [truncated]
+       })(), BB.FALLOFF_DEFAULT = MB.c.FALLOFF_DEFAULT, BB.FALLOFF_PHYSICAL = MB.c.FALLOFF_PHYSICAL, BB.FALLOFF_GLTF = MB.c.FALLOFF_GLTF, BB.FALLOFF_STANDARD = MB.c.FALLOFF_STANDARD, BB.LIGHTMAP_DEFAULT = MB.c.LIGHTMAP_DEFAULT, BB.LIGHTMAP_SPECULAR = MB.c.LIGHTMAP_SPECULAR, BB.LIG … [truncated]
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L478)

```diff
-   41498: (HH, BH, LH) => {
+   41220: (BB, OB, GB) => {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L482-L488` → after: `L482-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L482-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L482-L488) · [Before (L482-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L482-L488)

```diff
-     var AH = LH(41290),
-       rH = LH(37963),
-       SH = LH(41297),
-       hH = LH(37997),
-       tH = LH(37989),
-       zH = LH(41169),
-       CH = LH(41319);
+     var YB = GB(40998),
+       DB = GB(37778),
+       QB = GB(41004),
+       oB = GB(37802),
+       jB = GB(37796),
+       yB = GB(40890),
+       JB = GB(41022);
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L491` → after: `L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L491) · [Before (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L491)

```diff
-         this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new hH.d, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedO … [truncated]
+         this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new oB.b, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedO … [truncated]
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L575` → after: `L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L575) · [Before (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L575)

```diff
-           this._onDisposeObserver && this.uR.remove(this._onDisposeObserver), this._onDisposeObserver = this.uR.add(HH)
+           this._onDisposeObserver && this.lF.remove(this._onDisposeObserver), this._onDisposeObserver = this.lF.add(BB)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L582` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L582) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L582)

```diff
-           return (HH = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (HH._onEffectiveEnabledStateChangedObservable = new hH.d)
+           return (BB = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (BB._onEffectiveEnabledStateChangedObservable = new oB.b)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L590` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L590) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L590)

```diff
-           this._isDirty = !1, this._nodeDataStorage = new EH, this.name = (0, AH.k)(this, uH, void 0), this.id = ((0, AH.k)(this, QH), (0, AH.k)(this, WH, void 0)), this.uniqueId = ((0, AH.k)(this, MH), (0, AH.k)(this, xH, void 0)), this.state = ((0, AH.k)(this, vH), (0, AH.k)(th … [truncated]
+           this._isDirty = !1, this._nodeDataStorage = new MB, this.name = (0, YB.j)(this, pB, void 0), this.id = ((0, YB.j)(this, qB), (0, YB.j)(this, ZB, void 0)), this.uniqueId = ((0, YB.j)(this, NB), (0, YB.j)(this, RB, void 0)), this.state = ((0, YB.j)(this, WB), (0, YB.j)(th … [truncated]
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L596` → after: `L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L596) · [Before (L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L596)

```diff
-           return this._scene.Iu()
+           return this._scene.Lp()
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L650` → after: `L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L650) · [Before (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L650)

```diff
-         dLH(HH) {
+         DYB(BB) {
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L728` → after: `L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L728) · [Before (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L728)

```diff
-           const rH = CH.c.Clone((() => new HH(BH, this.yN())), this);
+           const DB = JB.d.Clone((() => new BB(OB, this.JF())), this);
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L759` → after: `L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L759) · [Before (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L759)

```diff
-           return this._worldMatrix || (this._worldMatrix = rH.e.Identity()), this._worldMatrix
+           return this._worldMatrix || (this._worldMatrix = DB.d.Identity()), this._worldMatrix
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L767` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L767) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L767)

```diff
-           this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.uR.notifyObservers(this), this.uR.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
+           this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.lF.notifyObservers(this), this.lF.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L772-L774` → after: `L772-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L772-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L772-L774) · [Before (L772-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L772-L774)

```diff
-           if (BH.rW)
-             for (let AH = 0; AH < BH.rW.length; AH++) {
-               const LH = BH.rW[AH];
+           if (OB.JZ)
+             for (let YB = 0; YB < OB.JZ.length; YB++) {
+               const GB = OB.JZ[YB];
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L781` → after: `L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L781) · [Before (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L781)

```diff
-           this.yN().incrementRenderId(), this.computeWorldMatrix(!0);
+           this.JF().incrementRenderId(), this.computeWorldMatrix(!0);
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L783-L784` → after: `L783-L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L783-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L783-L784) · [Before (L783-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L783-L784)

```diff
-           if (SH.jF && SH.jU) {
-             const LH = SH.jF();
+           if (QB.Gw && QB.iW) {
+             const GB = QB.Gw();
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L786` → after: `L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L786) · [Before (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L786)

```diff
-           } else HH = new rH.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), BH = new rH.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+           } else BB = new DB.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), OB = new DB.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L792-L793` → after: `L792-L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L792-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L792-L793) · [Before (L792-L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L792-L793)

```diff
-               if (!LH.jF || 0 === LH.getTotalVertices()) continue;
-               const hH = LH.jF().boundingBox,
+               if (!GB.Gw || 0 === GB.getTotalVertices()) continue;
+               const oB = GB.Gw().boundingBox,
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L796)

```diff
-               rH.o.CheckExtends(tH, HH, BH), rH.o.CheckExtends(zH, HH, BH)
+               DB.r.CheckExtends(jB, BB, OB), DB.r.CheckExtends(yB, BB, OB)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L806` → after: `L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L806) · [Before (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L806)

```diff
-         BH = [(0, SH.H)()], LH = [(0, SH.H)()], XH = [(0, SH.H)()], GH = [(0, SH.H)()], YH = [(0, SH.H)()], (0, AH.g)(null, null, BH, {
+         OB = [(0, QB.L)()], GB = [(0, QB.L)()], PB = [(0, QB.L)()], zB = [(0, QB.L)()], lB = [(0, QB.L)()], (0, YB.h)(null, null, OB, {
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L819` → after: `L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L819) · [Before (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L819)

```diff
-         }, uH, QH), (0, AH.g)(null, null, LH, {
+         }, pB, qB), (0, YB.h)(null, null, GB, {
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L832` → after: `L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L832) · [Before (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L832)

```diff
-         }, WH, MH), (0, AH.g)(null, null, XH, {
+         }, ZB, NB), (0, YB.h)(null, null, PB, {
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L845` → after: `L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L845) · [Before (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L845)

```diff
-         }, xH, vH), (0, AH.g)(null, null, GH, {
+         }, RB, WB), (0, YB.h)(null, null, zB, {
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L858` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L858) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L858)

```diff
-         }, PH, TH), (0, AH.g)(null, null, YH, {
+         }, AB, VB), (0, YB.h)(null, null, lB, {
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L878` → after: `L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/288.js#L878) · [Before (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/288.js#L878)

```diff
-         throw (0, zH.i)("AnimationRange")
+         throw (0, yB.j)("AnimationRange")
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/289.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec)

- **File**: `bundles/preprod.bloxd.io/chunks/js/289.js` (177 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L4)

```diff
-   42390: (HH, BH, LH) => {
+   42087: (BB, OB, GB) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L8-L15` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L8-L14) · [Before (L8-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L8-L15)

```diff
-     var AH = LH(41290),
-       rH = LH(41297),
-       SH = LH(37997),
-       hH = LH(37963),
-       tH = LH(38002),
-       zH = LH(41498),
-       CH = LH(41693),
-       EH = LH(41458),
+     var YB = GB(40998),
+       DB = GB(41004),
+       QB = GB(37802),
+       oB = GB(37778),
+       jB = GB(37807),
+       yB = GB(41220),
+       JB = GB(41411),
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L17` → after: `L16-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L16-L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L17)

```diff
-       GH = LH(37972);
+       PB = GB(40911),
+       zB = GB(37782);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L58)

```diff
-         const BH = this._attachedCamera.yN();
+         const OB = this._attachedCamera.JF();
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L60)

```diff
-           HH.type !== EH.d.POINTERDOWN ? HH.type === EH.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
+           BB.type !== MB.c.POINTERDOWN ? BB.type === MB.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L73` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L73) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L73)

```diff
-         const HH = this._attachedCamera.yN();
+         const BB = this._attachedCamera.JF();
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L80` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L80) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L80)

```diff
-         return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < GH.d
+         return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < zB.b
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L88` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L88) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L88)

```diff
-         return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (HH = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? HH : this._userIsZooming()
+         return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (BB = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? BB : this._userIsZooming()
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L97` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L97) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L97)

```diff
-     LH(42396);
+     GB(42093);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L123)

```diff
-     var QH = LH(42398);
+     var qB = GB(42100);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L139-L140` → after: `L139-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L139-L140) · [Before (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L139-L140)

```diff
-           if (HH && (HH.computeWorldMatrix(!0), HH.jF)) {
-             const BH = HH.jF().diagonalLength;
+           if (BB && (BB.computeWorldMatrix(!0), BB.Gw)) {
+             const OB = BB.Gw().diagonalLength;
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L162-L163` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L162-L163) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L162-L163)

```diff
-         this._radiusBounceTransition || (WH.EasingFunction.setEasingMode(WH.EasingMode), this._radiusBounceTransition = QH.b.CreateAnimation("radius", QH.b.ANIMATIONTYPE_FLOAT, 60, WH.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attach … [truncated]
-         const BH = QH.b.TransitionTo("radius", this._attachedCamera.radius + HH, this._attachedCamera, this._attachedCamera.yN(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
+         this._radiusBounceTransition || (ZB.EasingFunction.setEasingMode(ZB.EasingMode), this._radiusBounceTransition = qB.d.CreateAnimation("radius", qB.d.ANIMATIONTYPE_FLOAT, 60, ZB.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attach … [truncated]
+         const OB = qB.d.TransitionTo("radius", this._attachedCamera.radius + BB, this._attachedCamera, this._attachedCamera.JF(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L185` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L185) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L185)

```diff
-         this.onTargetFramingAnimationEndObservable = new SH.d, this._mode = MH.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1,  … [truncated]
+         this.onTargetFramingAnimationEndObservable = new QB.b, this._mode = NB.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1,  … [truncated]
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L244` → after: `L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L244) · [Before (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L244)

```diff
-         const BH = this._attachedCamera.yN();
+         const OB = this._attachedCamera.JF();
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L246` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L246) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L246)

```diff
-           HH.type !== EH.d.POINTERDOWN ? HH.type === EH.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
+           BB.type !== MB.c.POINTERDOWN ? BB.type === MB.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L248` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L248) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L248)

```diff
-           HH && HH.jF && this.zoomOnMesh(HH, void 0, (() => {
+           BB && BB.Gw && this.zoomOnMesh(BB, void 0, (() => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L257)

```diff
-         const HH = this._attachedCamera.yN();
+         const BB = this._attachedCamera.JF();
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L264` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L264) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L264)

```diff
-         const AH = HH.jF().boundingBox;
+         const YB = BB.Gw().boundingBox;
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L277-L278` → after: `L277-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L277-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L277-L278) · [Before (L277-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L277-L278)

```diff
-         const AH = new hH.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-           rH = new hH.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+         const YB = new oB.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+           DB = new oB.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L281` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L281) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L281)

```diff
-           hH.o.CheckExtends(BH.min, AH, rH), hH.o.CheckExtends(BH.max, AH, rH)
+           oB.r.CheckExtends(OB.min, YB, DB), oB.r.CheckExtends(OB.max, YB, DB)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L293` → after: `L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L293) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L293)

```diff
-         if (AH) LH = new hH.o(0, tH, 0);
+         if (YB) GB = new oB.r(0, jB, 0);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L296)

```diff
-           LH = new hH.o(BH.x, tH, BH.z)
+           GB = new oB.r(OB.x, jB, OB.z)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L298-L299` → after: `L298-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L298-L299) · [Before (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L298-L299)

```diff
-         this._vectorTransition || (this._vectorTransition = QH.b.CreateAnimation("target", QH.b.ANIMATIONTYPE_VECTOR3, 60, MH.EasingFunction)), this._betaIsAnimating = !0;
-         let CH = QH.b.TransitionTo("target", LH, this._attachedCamera, this._attachedCamera.yN(), 60, this._vectorTransition, this._framingTime);
+         this._vectorTransition || (this._vectorTransition = qB.d.CreateAnimation("target", qB.d.ANIMATIONTYPE_VECTOR3, 60, NB.EasingFunction)), this._betaIsAnimating = !0;
+         let JB = qB.d.TransitionTo("target", GB, this._attachedCamera, this._attachedCamera.JF(), 60, this._vectorTransition, this._framingTime);
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L310` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L310) · [Before (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L310)

```diff
-         return this._radiusTransition || (this._radiusTransition = QH.b.CreateAnimation("radius", QH.b.ANIMATIONTYPE_FLOAT, 60, MH.EasingFunction)), CH = QH.b.TransitionTo("radius", EH, this._attachedCamera, this._attachedCamera.yN(), 60, this._radiusTransition, this._framingTime … [truncated]
+         return this._radiusTransition || (this._radiusTransition = qB.d.CreateAnimation("radius", qB.d.ANIMATIONTYPE_FLOAT, 60, NB.EasingFunction)), JB = qB.d.TransitionTo("radius", MB, this._attachedCamera, this._attachedCamera.JF(), 60, this._radiusTransition, this._framingTime … [truncated]
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L326-L327` → after: `L326-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L326-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L326-L327) · [Before (L326-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L326-L327)

```diff
-           this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = QH.b.CreateAnimation("beta", QH.b.ANIMATIONTYPE_FLOAT, 60, MH.EasingFunction));
-           const HH = QH.b.TransitionTo("beta", BH, this._attachedCamera, this._attachedCamera.yN(), 60, this._betaTransition, this._elevationReturnTime, (() => {
+           this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = qB.d.CreateAnimation("beta", qB.d.ANIMATIONTYPE_FLOAT, 60, NB.EasingFunction));
+           const BB = qB.d.TransitionTo("beta", OB, this._attachedCamera, this._attachedCamera.JF(), 60, this._betaTransition, this._elevationReturnTime, (() => {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L352)

```diff
-         return this.exponent <= 0 ? HH : (Math.exp(this.exponent * HH) - 1) / (Math.exp(this.exponent) - 1)
+         return this.exponent <= 0 ? BB : (Math.exp(this.exponent * BB) - 1) / (Math.exp(this.exponent) - 1)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L355-L358` → after: `L355-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L355-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L355-L358) · [Before (L355-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L355-L358)

```diff
-     var xH = LH(41489),
-       vH = LH(41483),
-       PH = LH(41520),
-       TH = LH(41387);
+     var RB = GB(41217),
+       WB = GB(41215),
+       AB = GB(41237),
+       VB = GB(41097);
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L365)

```diff
-             this._currentMousePointerIdDown = -1, this.buttons = (0, AH.k)(this, LH, [0, 1, 2]), this._pointerInput = (0, AH.k)(this, SH)
+             this._currentMousePointerIdDown = -1, this.buttons = (0, YB.j)(this, GB, [0, 1, 2]), this._pointerInput = (0, YB.j)(this, QB)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L368-L369` → after: `L368-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L368-L369) · [Before (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L368-L369)

```diff
-             HH = TH.i.BackCompatCameraNoPreventDefault(arguments);
-             const BH = this.camera.Iu(),
+             BB = VB.j.BackCompatCameraNoPreventDefault(arguments);
+             const OB = this.camera.Lp(),
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L376` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L376) · [Before (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L376)

```diff
-               if (SH.type !== EH.d.POINTERMOVE && -1 === this.buttons.indexOf(hH.button)) return;
+               if (QB.type !== MB.c.POINTERMOVE && -1 === this.buttons.indexOf(oB.button)) return;
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L383-L387` → after: `L383-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L383-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L383-L387) · [Before (L383-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L383-L387)

```diff
-                 if (SH.type !== EH.d.POINTERDOWN && SH.type !== EH.d.POINTERDOUBLETAP && tH && this._pointA?.pointerId !== hH.pointerId && this._pointB?.pointerId !== hH.pointerId) return;
-                 if (SH.type !== EH.d.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !tH)
-                   if (SH.type === EH.d.POINTERDOUBLETAP) this.onDoubleTap(hH.pointerType, hH);
-                   else if (SH.type !== EH.d.POINTERUP || this._currentMousePointerIdDown !== hH.pointerId && !tH) {
-                   if (SH.type === EH.d.POINTERMOVE)
+                 if (QB.type !== MB.c.POINTERDOWN && QB.type !== MB.c.POINTERDOUBLETAP && jB && this._pointA?.pointerId !== oB.pointerId && this._pointB?.pointerId !== oB.pointerId) return;
+                 if (QB.type !== MB.c.POINTERDOWN || -1 !== this._currentMousePointerIdDown && !jB)
+                   if (QB.type === MB.c.POINTERDOUBLETAP) this.onDoubleTap(oB.pointerType, oB);
+                   else if (QB.type !== MB.c.POINTERUP || this._currentMousePointerIdDown !== oB.pointerId && !jB) {
+                   if (QB.type === MB.c.POINTERMOVE)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L434` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L434) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L434)

```diff
-             }, this._observer = this.camera.yN()._inputManager._addCameraPointerObserver(this._pointerInput, EH.d.POINTERDOWN | EH.d.POINTERUP | EH.d.POINTERMOVE | EH.d.POINTERDOUBLETAP), this._onLostFocus = () => {
+             }, this._observer = this.camera.JF()._inputManager._addCameraPointerObserver(this._pointerInput, MB.c.POINTERDOWN | MB.c.POINTERUP | MB.c.POINTERMOVE | MB.c.POINTERDOUBLETAP), this._onLostFocus = () => {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L437-L438` → after: `L437-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L437-L438) · [Before (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L437-L438)

```diff
-             const SH = this.camera.yN().Iu().getHostWindow();
-             SH && TH.i.RegisterTopRootEvents(SH, [{
+             const QB = this.camera.JF().Lp().getHostWindow();
+             QB && VB.j.RegisterTopRootEvents(QB, [{
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L445-L446` → after: `L445-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L445-L446) · [Before (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L445-L446)

```diff
-               const HH = this.camera.yN().Iu().getHostWindow();
-               HH && TH.i.UnregisterTopRootEvents(HH, [{
+               const BB = this.camera.JF().Lp().getHostWindow();
+               BB && VB.j.UnregisterTopRootEvents(BB, [{
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L452-L453` → after: `L452-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L452-L453) · [Before (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L452-L453)

```diff
-               if (this.camera.yN()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
-                 const HH = this.camera.yN().Iu().getInputElement();
+               if (this.camera.JF()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._contextMenuBind) {
+                 const BB = this.camera.JF().Lp().getInputElement();
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L477` → after: `L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L477) · [Before (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L477)

```diff
-           BH = [(0, rH.H)()], (0, AH.g)(null, null, BH, {
+           OB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L509` → after: `L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L509) · [Before (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L509)

```diff
-             super(...arguments), this.pinchZoom = (0, AH.k)(this, tH, !0), this.multiTouchPanning = ((0, AH.k)(this, zH), (0, AH.k)(this, CH, !0)), this.multiTouchPanAndZoom = ((0, AH.k)(this, EH), (0, AH.k)(this, XH, !0)), this._isPinching = ((0, AH.k)(this, GH), !1), this._twoF … [truncated]
+             super(...arguments), this.pinchZoom = (0, YB.j)(this, jB, !0), this.multiTouchPanning = ((0, YB.j)(this, yB), (0, YB.j)(this, JB, !0)), this.multiTouchPanAndZoom = ((0, YB.j)(this, MB), (0, YB.j)(this, PB, !0)), this._isPinching = ((0, YB.j)(this, zB), !1), this._twoF … [truncated]
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L524` → after: `L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L524) · [Before (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L524)

```diff
-           BH = [(0, rH.H)()], LH = [(0, rH.H)()], SH = [(0, rH.H)()], (0, AH.g)(null, null, BH, {
+           OB = [(0, DB.L)()], GB = [(0, DB.L)()], QB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L537` → after: `L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L537) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L537)

```diff
-           }, tH, zH), (0, AH.g)(null, null, LH, {
+           }, jB, yB), (0, YB.h)(null, null, GB, {
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L550` → after: `L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L550) · [Before (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L550)

```diff
-           }, CH, EH), (0, AH.g)(null, null, SH, {
+           }, JB, MB), (0, YB.h)(null, null, QB, {
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L590` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L590) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L590)

```diff
-             super(...arguments), this.buttons = (0, AH.k)(this, XH, [0, 1, 2]), this.angularSensibilityX = ((0, AH.k)(this, GH), (0, AH.k)(this, YH, 1e3)), this.angularSensibilityY = ((0, AH.k)(this, uH), (0, AH.k)(this, QH, 1e3)), this.pinchPrecision = ((0, AH.k)(this, WH), (0,  … [truncated]
+             super(...arguments), this.buttons = (0, YB.j)(this, PB, [0, 1, 2]), this.angularSensibilityX = ((0, YB.j)(this, zB), (0, YB.j)(this, lB, 1e3)), this.angularSensibilityY = ((0, YB.j)(this, pB), (0, YB.j)(this, qB, 1e3)), this.pinchPrecision = ((0, YB.j)(this, ZB), (0,  … [truncated]
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L625` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L625) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L625)

```diff
-             const AH = this._activeEntry ?? (this.camera.Iu().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
+             const YB = this._activeEntry ?? (this.camera.Lp().isPointerLock ? this.camera.movement.input.resolveInteraction("pointer", this._pointerLockConditions) : null);
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L631-L632` → after: `L631-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L631-L632) · [Before (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L631-L632)

```diff
-               const HH = AH.Fy ?? AH.sensitivity ?? 1 / this.angularSensibilityX,
-                 rH = AH.I6 ?? AH.sensitivity ?? 1 / this.angularSensibilityY;
+               const BB = YB.Hx ?? YB.sensitivity ?? 1 / this.angularSensibilityX,
+                 DB = YB.vx ?? YB.sensitivity ?? 1 / this.angularSensibilityY;
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L653` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L653) · [Before (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L653)

```diff
-           BH = [(0, rH.H)()], LH = [(0, rH.H)()], SH = [(0, rH.H)()], hH = [(0, rH.H)()], tH = [(0, rH.H)()], zH = [(0, rH.H)()], CH = [(0, rH.H)()], (0, AH.g)(null, null, BH, {
+           OB = [(0, DB.L)()], GB = [(0, DB.L)()], QB = [(0, DB.L)()], oB = [(0, DB.L)()], jB = [(0, DB.L)()], yB = [(0, DB.L)()], JB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L666` → after: `L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L666) · [Before (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L666)

```diff
-           }, XH, GH), (0, AH.g)(null, null, LH, {
+           }, PB, zB), (0, YB.h)(null, null, GB, {
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L679` → after: `L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L679) · [Before (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L679)

```diff
-           }, YH, uH), (0, AH.g)(null, null, SH, {
+           }, lB, pB), (0, YB.h)(null, null, QB, {
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L692` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L692) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L692)

```diff
-           }, QH, WH), (0, AH.g)(null, null, hH, {
+           }, qB, ZB), (0, YB.h)(null, null, oB, {
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L705` → after: `L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L705) · [Before (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L705)

```diff
-           }, MH, xH), (0, AH.g)(null, null, tH, {
+           }, NB, RB), (0, YB.h)(null, null, jB, {
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L718` → after: `L718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L718) · [Before (L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L718)

```diff
-           }, vH, PH), (0, AH.g)(null, null, zH, {
+           }, WB, AB), (0, YB.h)(null, null, yB, {
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L731` → after: `L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L731) · [Before (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L731)

```diff
-           }, TH, UH), (0, AH.g)(null, null, CH, {
+           }, VB, SB), (0, YB.h)(null, null, JB, {
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L753` → after: `L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L753) · [Before (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L753)

```diff
-     var bH = LH(41464);
+     var fB = GB(41197);
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L779` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L779) · [Before (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L779)

```diff
-           this.camera = (0, AH.k)(this, QH), this.keysUp = (0, AH.k)(this, WH, [38]), this.keysDown = ((0, AH.k)(this, MH), (0, AH.k)(this, xH, [40])), this.keysLeft = ((0, AH.k)(this, vH), (0, AH.k)(this, PH, [37])), this.keysRight = ((0, AH.k)(this, UH), (0, AH.k)(this, VH, [39 … [truncated]
+           this.camera = (0, YB.j)(this, qB), this.keysUp = (0, YB.j)(this, ZB, [38]), this.keysDown = ((0, YB.j)(this, NB), (0, YB.j)(this, RB, [40])), this.keysLeft = ((0, YB.j)(this, WB), (0, YB.j)(this, AB, [37])), this.keysRight = ((0, YB.j)(this, SB), (0, YB.j)(this, nB, [39 … [truncated]
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L784` → after: `L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L784) · [Before (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L784)

```diff
-           }, this._rotateDirection = new hH.n, this._panDirection = new hH.n
+           }, this._rotateDirection = new oB.o, this._panDirection = new oB.o
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L809` → after: `L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L809) · [Before (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L809)

```diff
-           HH = TH.i.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.yN(), this._engine = this._scene.Iu(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
+           BB = VB.j.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.JF(), this._engine = this._scene.Lp(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L814` → after: `L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L814) · [Before (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L814)

```diff
-               if (BH.type === bH.c.KEYDOWN) {
+               if (OB.type === fB.d.KEYDOWN) {
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L858` → after: `L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L858) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L858)

```diff
-         BH = [(0, rH.H)()], LH = [(0, rH.H)()], SH = [(0, rH.H)()], tH = [(0, rH.H)()], zH = [(0, rH.H)()], CH = [(0, rH.H)()], EH = [(0, rH.H)()], XH = [(0, rH.H)()], GH = [(0, rH.H)()], YH = [(0, rH.H)()], uH = [(0, rH.H)()], (0, AH.g)(HH, null, uH, {
+         OB = [(0, DB.L)()], GB = [(0, DB.L)()], QB = [(0, DB.L)()], jB = [(0, DB.L)()], yB = [(0, DB.L)()], JB = [(0, DB.L)()], MB = [(0, DB.L)()], PB = [(0, DB.L)()], zB = [(0, DB.L)()], lB = [(0, DB.L)()], pB = [(0, DB.L)()], (0, YB.h)(BB, null, pB, {
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L868` → after: `L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L868) · [Before (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L868)

```diff
-         }, null, QH), (0, AH.g)(null, null, BH, {
+         }, null, qB), (0, YB.h)(null, null, OB, {
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L881` → after: `L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L881) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L881)

```diff
-         }, WH, MH), (0, AH.g)(null, null, LH, {
+         }, ZB, NB), (0, YB.h)(null, null, GB, {
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L894` → after: `L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L894) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L894)

```diff
-         }, xH, vH), (0, AH.g)(null, null, SH, {
+         }, RB, WB), (0, YB.h)(null, null, QB, {
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L907` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L907) · [Before (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L907)

```diff
-         }, PH, UH), (0, AH.g)(null, null, tH, {
+         }, AB, SB), (0, YB.h)(null, null, jB, {
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L920` → after: `L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L920) · [Before (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L920)

```diff
-         }, VH, OH), (0, AH.g)(null, null, zH, {
+         }, nB, UB), (0, YB.h)(null, null, yB, {
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L933` → after: `L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L933) · [Before (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L933)

```diff
-         }, kH, mH), (0, AH.g)(null, null, CH, {
+         }, kB, dB), (0, YB.h)(null, null, JB, {
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L946` → after: `L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L946) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L946)

```diff
-         }, oH, IH), (0, AH.g)(null, null, EH, {
+         }, KB, uB), (0, YB.h)(null, null, MB, {
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L959` → after: `L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L959) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L959)

```diff
-         }, fH, lH), (0, AH.g)(null, null, XH, {
+         }, mB, IB), (0, YB.h)(null, null, PB, {
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L972` → after: `L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L972) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L972)

```diff
-         }, KH, cH), (0, AH.g)(null, null, GH, {
+         }, FB, iB), (0, YB.h)(null, null, zB, {
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L985` → after: `L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L985) · [Before (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L985)

```diff
-         }, eH, qH), (0, AH.g)(null, null, YH, {
+         }, LB, gB), (0, YB.h)(null, null, lB, {
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1007-L1008` → after: `L1007-L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1007-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1007-L1008) · [Before (L1007-L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1007-L1008)

```diff
-     var mH = LH(38619),
-       oH = LH(41466);
+     var dB = GB(38432),
+       KB = GB(41201);
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1019` → after: `L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1019) · [Before (L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1019)

```diff
-           this.wheelPrecision = (0, AH.k)(this, zH, 3), this.zoomToMouseLocation = ((0, AH.k)(this, CH), (0, AH.k)(this, XH, !1)), this.wheelDeltaPercentage = ((0, AH.k)(this, YH), (0, AH.k)(this, uH, 0)), this.customComputeDeltaFromMouseWheel = ((0, AH.k)(this, QH), null), this. … [truncated]
+           this.wheelPrecision = (0, YB.j)(this, yB, 3), this.zoomToMouseLocation = ((0, YB.j)(this, JB), (0, YB.j)(this, PB, !1)), this.wheelDeltaPercentage = ((0, YB.j)(this, lB), (0, YB.j)(this, pB, 0)), this.customComputeDeltaFromMouseWheel = ((0, YB.j)(this, qB), null), this. … [truncated]
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1027-L1028` → after: `L1027-L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1027-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1027-L1028) · [Before (L1027-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1027-L1028)

```diff
-           HH = TH.i.BackCompatCameraNoPreventDefault(arguments), this._wheel = BH => {
-             if (BH.type !== EH.d.POINTERWHEEL) return;
+           BB = VB.j.BackCompatCameraNoPreventDefault(arguments), this._wheel = OB => {
+             if (OB.type !== MB.c.POINTERWHEEL) return;
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1031` → after: `L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1031) · [Before (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1031)

```diff
-             const rH = LH.deltaMode === oH.d.DOM_DELTA_LINE ? 40 : 1,
+             const DB = GB.deltaMode === KB.c.DOM_DELTA_LINE ? 40 : 1,
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1047` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1047) · [Before (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1047)

```diff
-           }, this._observer = this.camera.yN()._inputManager._addCameraPointerObserver(this._wheel, EH.d.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.IHH(0)
+           }, this._observer = this.camera.JF()._inputManager._addCameraPointerObserver(this._wheel, MB.c.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.uBB(0)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1050` → after: `L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1050) · [Before (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1050)

```diff
-           this._observer && (this.camera.yN()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
+           this._observer && (this.camera.JF()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1058` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1058) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1058)

```diff
-             this._inertialPanning.scaleInPlace(BH), this._zoomToMouseRadiusOffset *= BH, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < GH.d && (this._zoomToMouseRadiusOffset = 0)
+             this._inertialPanning.scaleInPlace(OB), this._zoomToMouseRadiusOffset *= OB, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < zB.b && (this._zoomToMouseRadiusOffset = 0)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1070` → after: `L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1070) · [Before (L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1070)

```diff
-           this._hitPlane = mH.d.FromPositionAndNormal(HH.target, BH)
+           this._hitPlane = dB.c.FromPositionAndNormal(BB.target, OB)
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1074-L1076` → after: `L1074-L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1074-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1074-L1076) · [Before (L1074-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1074-L1076)

```diff
-             BH = HH.yN(),
-             LH = BH.createPickingRay(BH.pointerX, BH.pointerY, hH.e.Identity(), HH, !1);
-           0 === HH.targetScreenOffset.x && 0 === HH.targetScreenOffset.y || (this._viewOffset.set(HH.targetScreenOffset.x, HH.targetScreenOffset.y, 0), HH.getViewMatrix().invertToRef(HH._cameraTransformMatrix), this._globalOffset = hH.o.TransformNormal(this._viewOffset, HH._camer … [truncated]
+             OB = BB.JF(),
+             GB = OB.createPickingRay(OB.pointerX, OB.pointerY, oB.d.Identity(), BB, !1);
+           0 === BB.targetScreenOffset.x && 0 === BB.targetScreenOffset.y || (this._viewOffset.set(BB.targetScreenOffset.x, BB.targetScreenOffset.y, 0), BB.getViewMatrix().invertToRef(BB._cameraTransformMatrix), this._globalOffset = oB.r.TransformNormal(this._viewOffset, BB._camer … [truncated]
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1094` → after: `L1094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1094) · [Before (L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1094)

```diff
-             tH = hH.l.lu[6];
+             jB = oB.k.Xp[6];
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1098` → after: `L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1098) · [Before (L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1098)

```diff
-           Math.abs(HH.x) < GH.d && (HH.x = 0), Math.abs(HH.y) < GH.d && (HH.y = 0), Math.abs(HH.z) < GH.d && (HH.z = 0)
+           Math.abs(BB.x) < zB.b && (BB.x = 0), Math.abs(BB.y) < zB.b && (BB.y = 0), Math.abs(BB.z) < zB.b && (BB.z = 0)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1102` → after: `L1102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1102) · [Before (L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1102)

```diff
-         BH = [(0, rH.H)()], LH = [(0, rH.H)()], SH = [(0, rH.H)()], (0, AH.g)(null, null, BH, {
+         OB = [(0, DB.L)()], GB = [(0, DB.L)()], QB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1115` → after: `L1115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1115) · [Before (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1115)

```diff
-         }, zH, CH), (0, AH.g)(null, null, LH, {
+         }, yB, JB), (0, YB.h)(null, null, GB, {
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1128` → after: `L1128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1128) · [Before (L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1128)

```diff
-         }, XH, YH), (0, AH.g)(null, null, SH, {
+         }, PB, lB), (0, YB.h)(null, null, QB, {
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1150` → after: `L1150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1150) · [Before (L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1150)

```diff
-     var fH, lH, KH = LH(41169);
+     var mB, IB, FB = GB(40890);
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1164-L1168` → after: `L1164-L1168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1164-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1164-L1168) · [Before (L1164-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1164-L1168)

```diff
-     }(fH = cH.prototype).addVRDeviceOrientation ?? (fH.addVRDeviceOrientation = (0, KH.f)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (lH = cH.prototype).addGamepad ?? (lH.addGamepad = (0, KH.f)("ArcRotateCameraInputsManager", "addGamepad"));
-     var eH = LH(38012),
-       qH = LH(41509),
-       gH = LH(41516);
-     class NH extends qH.d {
+     }(mB = iB.prototype).addVRDeviceOrientation ?? (mB.addVRDeviceOrientation = (0, FB.g)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (IB = iB.prototype).addGamepad ?? (IB.addGamepad = (0, FB.g)("ArcRotateCameraInputsManager", "addGamepad"));
+     var LB = GB(37823),
+       gB = GB(41230),
+       rB = GB(41235);
+     class XB extends gB.e {
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1170` → after: `L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1170) · [Before (L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1170)

```diff
-         super(HH, BH, LH), this.input = new gH.e({
+         super(BB, OB, GB), this.input = new rB.c({
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1225` → after: `L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1225) · [Before (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1225)

```diff
-       return isNaN(HH) ? BH : HH
+       return isNaN(BB) ? OB : BB
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1229` → after: `L1229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1229) · [Before (L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1229)

```diff
-         let BH, LH, zH, EH, XH, uH, QH, PH, UH, VH, OH, bH, kH, mH, oH, IH, fH, lH, KH, eH, qH, gH, jH, nH, FH, DH, wH, ZH, dH = vH.e,
+         let OB, GB, yB, MB, PB, pB, qB, AB, SB, nB, UB, fB, kB, dB, KB, uB, mB, IB, FB, LB, gB, rB, EB, cB, hB, aB, eB, TB, bB = WB.h,
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1279` → after: `L1279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1279) · [Before (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1279)

```diff
-             return this.fX
+             return this.dP
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1300` → after: `L1300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1300) · [Before (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1300)

```diff
-             this._upToYMatrix || (this._yToUpMatrix = new hH.e, this._upToYMatrix = new hH.e, this._upVector = hH.o.Zero()), HH.normalize(), this._upVector.Tm(HH), this.setMatUp()
+             this._upToYMatrix || (this._yToUpMatrix = new oB.d, this._upToYMatrix = new oB.d, this._upVector = oB.r.Zero()), BB.normalize(), this._upVector.IU(BB), this.setMatUp()
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1306` → after: `L1306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1306) · [Before (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1306)

```diff
-             hH.e.RotationAlignToRef(hH.o.UpReadOnly, this._upVector, this._yToUpMatrix), hH.e.RotationAlignToRef(this._upVector, hH.o.UpReadOnly, this._upToYMatrix)
+             oB.d.RotationAlignToRef(oB.r.UpReadOnly, this._upVector, this._yToUpMatrix), oB.d.RotationAlignToRef(this._upVector, oB.r.UpReadOnly, this._upToYMatrix)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1526` → after: `L1526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1526) · [Before (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1526)

```diff
-             super(HH, hH.o.Zero(), zH, EH), CH = this, this.alpha = ((0, AH.k)(this, aH), (0, AH.k)(this, sH, void 0)), this.beta = ((0, AH.k)(this, JH), (0, AH.k)(this, iH, void 0)), this.radius = ((0, AH.k)(this, pH), (0, AH.k)(this, yH, void 0)), this.overrideCloneAlphaBetaRad … [truncated]
+             super(BB, oB.r.Zero(), yB, MB), JB = this, this.alpha = ((0, YB.j)(this, CB), (0, YB.j)(this, HB, void 0)), this.beta = ((0, YB.j)(this, vB), (0, YB.j)(this, sB, void 0)), this.radius = ((0, YB.j)(this, xB), (0, YB.j)(this, tB, void 0)), this.overrideCloneAlphaBetaRad … [truncated]
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1528` → after: `L1528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1528) · [Before (L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1528)

```diff
-               LH ? (CH.setPosition(BH), CH.fG && CH.fG(LH)) : CH._previousPosition.Tm(CH._position);
+               GB ? (JB.setPosition(OB), JB.Fz && JB.Fz(GB)) : JB._previousPosition.IU(JB._position);
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1535` → after: `L1535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1535) · [Before (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1535)

```diff
-               CH._computationVector.SBH(CH.radius * AH * hH, CH.radius * SH, CH.radius * rH * hH), tH.addToRef(CH._computationVector, CH._newPosition), CH._position.Tm(CH._newPosition);
+               JB._computationVector.zOB(JB.radius * YB * oB, JB.radius * QB, JB.radius * DB * oB), jB.addToRef(JB._computationVector, JB._newPosition), JB._position.IU(JB._newPosition);
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1537-L1538` → after: `L1537-L1538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1537-L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1537-L1538) · [Before (L1537-L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1537-L1538)

```diff
-               CH.allowUpsideDown && CH.beta < 0 && (zH = zH.clone(), zH = zH.du()), CH._computeViewMatrix(CH._position, tH, zH), CH._viewMatrix.addAtIndex(12, CH.targetScreenOffset.x), CH._viewMatrix.addAtIndex(13, CH.targetScreenOffset.y), CH._collisionTriggered = !1
-             }, this.fX = hH.o.Zero(), tH && this.setTarget(tH), this.alpha = BH, this.beta = LH, this.radius = rH, this.getViewMatrix(), this.inputs = new cH(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new NH(this.yN(), this._position), this.mo … [truncated]
+               JB.allowUpsideDown && JB.beta < 0 && (yB = yB.clone(), yB = yB.ep()), JB._computeViewMatrix(JB._position, jB, yB), JB._viewMatrix.addAtIndex(12, JB.targetScreenOffset.x), JB._viewMatrix.addAtIndex(13, JB.targetScreenOffset.y), JB._collisionTriggered = !1
+             }, this.dP = oB.r.Zero(), jB && this.setTarget(jB), this.alpha = OB, this.beta = GB, this.radius = DB, this.getViewMatrix(), this.inputs = new iB(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new XB(this.JF(), this._position), this.mo … [truncated]
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1541` → after: `L1541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1541) · [Before (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1541)

```diff
-             super._initCache(), this._cache.fX = new hH.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = hH.n.Zero()
+             super._initCache(), this._cache.dP = new oB.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.alpha = void 0, this._cache.beta = void 0, this._cache.radius = void 0, this._cache.targetScreenOffset = oB.o.Zero()
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1544` → after: `L1544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1544) · [Before (L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1544)

```diff
-             HH || super._updateCache(), this._cache.fX.Tm(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.Tm(this.targetScreenOffset)
+             BB || super._updateCache(), this._cache.dP.IU(this._getTargetPosition()), this._cache.alpha = this.alpha, this._cache.beta = this.beta, this._cache.radius = this.radius, this._cache.targetScreenOffset.IU(this.targetScreenOffset)
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1549` → after: `L1549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1549) · [Before (L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1549)

```diff
-               this._targetBoundingCenter ? HH.addToRef(this._targetBoundingCenter, this.fX) : this.fX.Tm(HH)
+               this._targetBoundingCenter ? BB.addToRef(this._targetBoundingCenter, this.dP) : this.dP.IU(BB)
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1552` → after: `L1552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1552) · [Before (L1552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1552)

```diff
-             return HH || this.fX
+             return BB || this.dP
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1558` → after: `L1558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1558) · [Before (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1558)

```diff
-             return this.hasStateStored() && this.restoreStateInterpolationFactor > GH.d && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreState … [truncated]
+             return this.hasStateStored() && this.restoreStateInterpolationFactor > zB.b && this.restoreStateInterpolationFactor < 1 ? (this.interpolateTo(this._storedAlpha, this._storedBeta, this._storedRadius, this._storedTarget, this._storedTargetScreenOffset, this.restoreState … [truncated]
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1570` → after: `L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1570) · [Before (L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1570)

```diff
-             this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != SH ? this._currentInterpolationFactor = SH : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolation … [truncated]
+             this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != QB ? this._currentInterpolationFactor = QB : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolation … [truncated]
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1573` → after: `L1573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1573) · [Before (L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1573)

```diff
-             return !!super._isSynchronizedViewMatrix() && (this._cache.fX.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset … [truncated]
+             return !!super._isSynchronizedViewMatrix() && (this._cache.dP.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset … [truncated]
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1579` → after: `L1579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1579) · [Before (L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1579)

```diff
-             BH = TH.i.BackCompatCameraNoPreventDefault(rH), this._useCtrlForPanning = LH, this._panningMouseButton = AH, "boolean" === typeof rH[0] && (rH.length > 1 && (this._useCtrlForPanning = rH[1]), rH.length > 2 && (this._panningMouseButton = rH[2])), this.inputs.attachElem … [truncated]
+             OB = VB.j.BackCompatCameraNoPreventDefault(DB), this._useCtrlForPanning = GB, this._panningMouseButton = YB, "boolean" === typeof DB[0] && (DB.length > 1 && (this._useCtrlForPanning = DB[1]), DB.length > 2 && (this._panningMouseButton = DB[2])), this.inputs.attachElem … [truncated]
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1592-L1593` → after: `L1592-L1593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1592-L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1592-L1593) · [Before (L1592-L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1592-L1593)

```diff
-             const LH = hH.l.lu[0].SBH(HH, BH, BH);
-             if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), LH.multiplyInPlace(this.panningAxis), hH.o.TransformNormalToRef(LH, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
+             const GB = oB.k.Xp[0].zOB(BB, OB, OB);
+             if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), GB.multiplyInPlace(this.panningAxis), oB.r.TransformNormalToRef(GB, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1595-L1596` → after: `L1595-L1596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1595-L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1595-L1596) · [Before (L1595-L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1595-L1596)

```diff
-                 BH = hH.o.CrossToRef(this._transformedDirection, HH, this._transformedDirection);
-               hH.o.CrossToRef(HH, BH, this._transformedDirection)
+                 OB = oB.r.CrossToRef(this._transformedDirection, BB, this._transformedDirection);
+               oB.r.CrossToRef(BB, OB, this._transformedDirection)
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1600-L1601` → after: `L1600-L1601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1600-L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1600-L1601) · [Before (L1600-L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1600-L1601)

```diff
-                 this._transformedDirection.addInPlace(this.fX);
-                 hH.o.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.fX.Tm(this._transformedDirection)
+                 this._transformedDirection.addInPlace(this.dP);
+                 oB.r.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.dP.IU(this._transformedDirection)
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1604-L1605` → after: `L1604-L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1604-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1604-L1605) · [Before (L1604-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1604-L1605)

```diff
-                   const HH = hH.l.Matrix[0];
-                   this.parent.getWorldMatrix().getRotationMatrixToRef(HH), HH.transposeToRef(HH), hH.o.TransformCoordinatesToRef(this._transformedDirection, HH, this._transformedDirection)
+                   const BB = oB.k.Matrix[0];
+                   this.parent.getWorldMatrix().getRotationMatrixToRef(BB), BB.transposeToRef(BB), oB.r.TransformCoordinatesToRef(this._transformedDirection, BB, this._transformedDirection)
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1607` → after: `L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1607) · [Before (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1607)

```diff
-                 this.fX.addInPlace(this._transformedDirection)
+                 this.dP.addInPlace(this._transformedDirection)
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1626` → after: `L1626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1626) · [Before (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1626)

```diff
-               const BH = this._scene.Iu().getDeltaTime() / 1e3,
+               const OB = this._scene.Lp().getDeltaTime() / 1e3,
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1630-L1631` → after: `L1630-L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1630-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1630-L1631) · [Before (L1630-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1630-L1631)

```diff
-                 const BH = hH.l.lu[0].set(RH(this._goalTarget.x, this.fX.x), RH(this._goalTarget.y, this.fX.y), RH(this._goalTarget.z, this.fX.z));
-                 hH.o.LerpToRef(this.target, BH, LH, this.fX), 10 * hH.o.Distance(this.target, BH) / AH < GH.d ? (this._goalTarget.set(NaN, NaN, NaN), this.target.Tm(BH), this.setTarget(this.target, !1, !0, !0)) : HH = !0
+                 const OB = oB.k.Xp[0].set(wB(this._goalTarget.x, this.dP.x), wB(this._goalTarget.y, this.dP.y), wB(this._goalTarget.z, this.dP.z));
+                 oB.r.LerpToRef(this.target, OB, GB, this.dP), 10 * oB.r.Distance(this.target, OB) / YB < zB.b ? (this._goalTarget.set(NaN, NaN, NaN), this.target.IU(OB), this.setTarget(this.target, !1, !0, !0)) : BB = !0
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1634-L1636` → after: `L1634-L1636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1634-L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1634-L1636) · [Before (L1634-L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1634-L1636)

```diff
-                 const BH = hH.f.RotationAlphaBetaGammaToRef(RH(this._goalAlpha, this.alpha), RH(this._goalBeta, this.beta), 0, hH.l.Quaternion[0]),
-                   AH = hH.f.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, hH.l.Quaternion[1]),
-                   rH = hH.f.SlerpToRef(AH, BH, LH, hH.l.Quaternion[2]);
+                 const OB = oB.f.RotationAlphaBetaGammaToRef(wB(this._goalAlpha, this.alpha), wB(this._goalBeta, this.beta), 0, oB.k.Quaternion[0]),
+                   YB = oB.f.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, oB.k.Quaternion[1]),
+                   DB = oB.f.SlerpToRef(YB, OB, GB, oB.k.Quaternion[2]);
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1638-L1639` → after: `L1638-L1639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1638-L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1638-L1639) · [Before (L1638-L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1638-L1639)

```diff
-                 const SH = rH.toAlphaBetaGammaToRef(hH.l.lu[0]);
-                 if (this.alpha = SH.x, this.beta = SH.y, rH.isApprox(BH, GH.d / 5)) {
+                 const QB = DB.toAlphaBetaGammaToRef(oB.k.Xp[0]);
+                 if (this.alpha = QB.x, this.beta = QB.y, DB.isApprox(OB, zB.b / 5)) {
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1641` → after: `L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1641) · [Before (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1641)

```diff
-                   const HH = BH.toAlphaBetaGammaToRef(hH.l.lu[0]);
+                   const BB = OB.toAlphaBetaGammaToRef(oB.k.Xp[0]);
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1645-L1647` → after: `L1645-L1647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1645-L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1645-L1647) · [Before (L1645-L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1645-L1647)

```diff
-               if (isNaN(this._goalRadius) || (this.radius += (AH - this.radius) * LH, Math.abs(AH / this.radius - 1) < GH.d ? (this._goalRadius = NaN, this.radius = AH) : HH = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
-                 const BH = hH.l.Vector2[0].set(RH(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), RH(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
-                 hH.n.LerpToRef(this.targetScreenOffset, BH, LH, this.targetScreenOffset), hH.n.Distance(this.targetScreenOffset, BH) < GH.d ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.Tm(BH)) : HH = !0
+               if (isNaN(this._goalRadius) || (this.radius += (YB - this.radius) * GB, Math.abs(YB / this.radius - 1) < zB.b ? (this._goalRadius = NaN, this.radius = YB) : BB = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
+                 const OB = oB.k.Vector2[0].set(wB(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), wB(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
+                 oB.o.LerpToRef(this.targetScreenOffset, OB, GB, this.targetScreenOffset), oB.o.Distance(this.targetScreenOffset, OB) < zB.b ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.IU(OB)) : BB = !0
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1657` → after: `L1657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1657) · [Before (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1657)

```diff
-             this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || hH.o.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.ra … [truncated]
+             this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || oB.r.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.ra … [truncated]
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1668` → after: `L1668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1668) · [Before (L1668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1668)

```diff
-             this._position.equals(HH) || (this._position.Tm(HH), this.rebuildAnglesAndRadius())
+             this._position.equals(BB) || (this._position.IU(BB), this.rebuildAnglesAndRadius())
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1674` → after: `L1674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1674) · [Before (L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1674)

```diff
-             if (AH = this.overrideCloneAlphaBetaRadius ?? AH, HH.computeWorldMatrix) BH && HH.jF ? this._targetBoundingCenter = HH.jF().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, HH.computeWorldMatrix(), this._targetHost = HH, this.fX = this._getTargetPo … [truncated]
+             if (YB = this.overrideCloneAlphaBetaRadius ?? YB, BB.computeWorldMatrix) OB && BB.Gw ? this._targetBoundingCenter = BB.Gw().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, BB.computeWorldMatrix(), this._targetHost = BB, this.dP = this._getTargetPo … [truncated]
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1679` → after: `L1679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1679) · [Before (L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1679)

```diff
-               this._targetHost = null, this.fX = BH, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
+               this._targetHost = null, this.dP = OB, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1690-L1691` → after: `L1690-L1691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1690-L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1690-L1691) · [Before (L1690-L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1690-L1691)

```diff
-             if (this._computationVector.SBH(this.radius * HH * AH, this.radius * LH, this.radius * BH * AH), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || hH.o.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationV … [truncated]
-               const HH = this.yN().collisionCoordinator;
+             if (this._computationVector.zOB(this.radius * BB * YB, this.radius * GB, this.radius * OB * YB), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || oB.r.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationV … [truncated]
+               const BB = this.JF().collisionCoordinator;
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1694` → after: `L1694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1694) · [Before (L1694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1694)

```diff
-               this._position.Tm(this._newPosition);
+               this._position.IU(this._newPosition);
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1696` → after: `L1696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1696) · [Before (L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1696)

```diff
-               this.allowUpsideDown && AH < 0 && (HH = HH.du()), this._computeViewMatrix(this._position, rH, HH), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
+               this.allowUpsideDown && YB < 0 && (BB = BB.ep()), this._computeViewMatrix(this._position, DB, BB), this._viewMatrix.addAtIndex(12, this.targetScreenOffset.x), this._viewMatrix.addAtIndex(13, this.targetScreenOffset.y)
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1698` → after: `L1698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1698) · [Before (L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1698)

```diff
-             return this._currentTarget.Tm(rH), this._viewMatrix
+             return this._currentTarget.IU(DB), this._viewMatrix
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1702` → after: `L1702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1702) · [Before (L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1702)

```diff
-             HH = HH || this.yN().meshes;
+             BB = BB || this.JF().meshes;
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1705-L1706` → after: `L1705-L1706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1705-L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1705-L1706) · [Before (L1705-L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1705-L1706)

```diff
-             if (AH = Math.max(Math.min(AH, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = AH * this.zoomOnFactor, this.mode === xH.d.ORTHOGRAPHIC_CAMERA) {
-               const HH = this.yN().Iu().getAspectRatio(this),
+             if (YB = Math.max(Math.min(YB, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = YB * this.zoomOnFactor, this.mode === RB.e.ORTHOGRAPHIC_CAMERA) {
+               const BB = this.JF().Lp().getAspectRatio(this),
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1719-L1720` → after: `L1719-L1720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1719-L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1719-L1720) · [Before (L1719-L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1719-L1720)

```diff
-               const AH = HH || this.yN().meshes;
-               BH = CH.c.MinMax(AH), LH = hH.o.Distance(BH.min, BH.max)
+               const YB = BB || this.JF().meshes;
+               OB = JB.c.MinMax(YB), GB = oB.r.Distance(OB.min, OB.max)
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1724` → after: `L1724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1724) · [Before (L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1724)

```diff
-             this.fX = CH.c.Center(BH), AH || (this.maxZ = 2 * LH)
+             this.dP = JB.c.Center(OB), YB || (this.maxZ = 2 * GB)
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1729-L1733` → after: `L1729-L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1729-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1729-L1733) · [Before (L1729-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1729-L1733)

```diff
-               case xH.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
-               case xH.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
-               case xH.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
-               case xH.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
-               case xH.d.RIG_MODE_VR:
+               case RB.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
+               case RB.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
+               case RB.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
+               case RB.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
+               case RB.e.RIG_MODE_VR:
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1736` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1736) · [Before (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1736)

```diff
-               case xH.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
+               case RB.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1739` → after: `L1739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1739) · [Before (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1739)

```diff
-             const rH = new HH(BH, this.alpha + AH, this.beta, this.radius, this.fX, this.yN());
+             const DB = new BB(OB, this.alpha + YB, this.beta, this.radius, this.dP, this.JF());
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1746-L1750` → after: `L1746-L1750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1746-L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1746-L1750) · [Before (L1746-L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1746-L1750)

```diff
-               case xH.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
-               case xH.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
-               case xH.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
-               case xH.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
-               case xH.d.RIG_MODE_VR:
+               case RB.e.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
+               case RB.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
+               case RB.e.RIG_MODE_STEREOSCOPIC_OVERUNDER:
+               case RB.e.RIG_MODE_STEREOSCOPIC_INTERLACED:
+               case RB.e.RIG_MODE_VR:
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1753` → after: `L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1753) · [Before (L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1753)

```diff
-               case xH.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
+               case RB.e.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1760-L1761` → after: `L1760-L1761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1760-L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1760-L1761) · [Before (L1760-L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1760-L1761)

```diff
-             const AH = hH.o.Distance(HH, BH),
-               rH = this.yN().Iu().getAspectRatio(this),
+             const YB = oB.r.Distance(BB, OB),
+               DB = this.JF().Lp().getAspectRatio(this),
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1777` → after: `L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1777) · [Before (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1777)

```diff
-           BH = [(0, rH.H)()], LH = [(0, rH.H)()], zH = [(0, rH.H)()], EH = [(0, rH.H)()], XH = [(0, rH.F)("target")], uH = [(0, rH.v)("targetHost")], QH = [(0, rH.H)()], PH = [(0, rH.H)()], UH = [(0, rH.H)()], VH = [(0, rH.H)()], OH = [(0, rH.H)()], bH = [(0, rH.H)()], kH = [(0,  … [truncated]
+           OB = [(0, DB.L)()], GB = [(0, DB.L)()], yB = [(0, DB.L)()], MB = [(0, DB.L)()], PB = [(0, DB.H)("target")], pB = [(0, DB.w)("targetHost")], qB = [(0, DB.L)()], AB = [(0, DB.L)()], SB = [(0, DB.L)()], nB = [(0, DB.L)()], UB = [(0, DB.L)()], fB = [(0, DB.L)()], kB = [(0,  … [truncated]
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1787` → after: `L1787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1787) · [Before (L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1787)

```diff
-           }, null, aH), (0, AH.g)(HH, null, PH, {
+           }, null, CB), (0, YB.h)(BB, null, AB, {
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1797` → after: `L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1797) · [Before (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1797)

```diff
-           }, null, aH), (0, AH.g)(HH, null, UH, {
+           }, null, CB), (0, YB.h)(BB, null, SB, {
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1807` → after: `L1807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1807) · [Before (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1807)

```diff
-           }, null, aH), (0, AH.g)(HH, null, gH, {
+           }, null, CB), (0, YB.h)(BB, null, rB, {
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1817` → after: `L1817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1817) · [Before (L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1817)

```diff
-           }, null, aH), (0, AH.g)(HH, null, jH, {
+           }, null, CB), (0, YB.h)(BB, null, EB, {
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1827` → after: `L1827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1827) · [Before (L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1827)

```diff
-           }, null, aH), (0, AH.g)(null, null, BH, {
+           }, null, CB), (0, YB.h)(null, null, OB, {
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1840` → after: `L1840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1840) · [Before (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1840)

```diff
-           }, sH, JH), (0, AH.g)(null, null, LH, {
+           }, HB, vB), (0, YB.h)(null, null, GB, {
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1853` → after: `L1853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1853) · [Before (L1853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1853)

```diff
-           }, iH, pH), (0, AH.g)(null, null, zH, {
+           }, sB, xB), (0, YB.h)(null, null, yB, {
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1866` → after: `L1866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1866) · [Before (L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1866)

```diff
-           }, yH, HB), (0, AH.g)(null, null, EH, {
+           }, tB, BO), (0, YB.h)(null, null, MB, {
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1879` → after: `L1879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1879) · [Before (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1879)

```diff
-           }, BB, LB), (0, AH.g)(null, null, XH, {
+           }, OO, GO), (0, YB.h)(null, null, PB, {
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1881` → after: `L1881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1881) · [Before (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1881)

```diff
-             name: "fX",
+             name: "dP",
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1885-L1886` → after: `L1885-L1886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1885-L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1885-L1886) · [Before (L1885-L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1885-L1886)

```diff
-               has: HH => "fX" in HH,
-               get: HH => HH.fX,
+               has: BB => "dP" in BB,
+               get: BB => BB.dP,
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1888` → after: `L1888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1888) · [Before (L1888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1888)

```diff
-                 HH.fX = BH
+                 BB.dP = OB
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1892` → after: `L1892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1892) · [Before (L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1892)

```diff
-           }, AB, rB), (0, AH.g)(null, null, uH, {
+           }, YO, DO), (0, YB.h)(null, null, pB, {
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1905` → after: `L1905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1905) · [Before (L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1905)

```diff
-           }, SB, hB), (0, AH.g)(null, null, VH, {
+           }, QO, oO), (0, YB.h)(null, null, nB, {
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1918` → after: `L1918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1918) · [Before (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1918)

```diff
-           }, tB, zB), (0, AH.g)(null, null, OH, {
+           }, jO, yO), (0, YB.h)(null, null, UB, {
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1931` → after: `L1931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1931) · [Before (L1931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1931)

```diff
-           }, CB, EB), (0, AH.g)(null, null, bH, {
+           }, JO, MO), (0, YB.h)(null, null, fB, {
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1944` → after: `L1944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1944) · [Before (L1944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1944)

```diff
-           }, XB, GB), (0, AH.g)(null, null, kH, {
+           }, PO, zO), (0, YB.h)(null, null, kB, {
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1957` → after: `L1957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1957) · [Before (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1957)

```diff
-           }, YB, uB), (0, AH.g)(null, null, mH, {
+           }, lO, pO), (0, YB.h)(null, null, dB, {
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1970` → after: `L1970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1970) · [Before (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1970)

```diff
-           }, QB, WB), (0, AH.g)(null, null, oH, {
+           }, qO, ZO), (0, YB.h)(null, null, KB, {
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1983` → after: `L1983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1983) · [Before (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1983)

```diff
-           }, MB, xB), (0, AH.g)(null, null, IH, {
+           }, NO, RO), (0, YB.h)(null, null, uB, {
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L1996` → after: `L1996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR1996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L1996) · [Before (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L1996)

```diff
-           }, vB, PB), (0, AH.g)(null, null, fH, {
+           }, WO, AO), (0, YB.h)(null, null, mB, {
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L2009` → after: `L2009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR2009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L2009) · [Before (L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L2009)

```diff
-           }, TB, UB), (0, AH.g)(null, null, lH, {
+           }, VO, SO), (0, YB.h)(null, null, IB, {
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L2022` → after: `L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L2022) · [Before (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L2022)

```diff
-           }, VB, OB), (0, AH.g)(null, null, KH, {
+           }, nO, UO), (0, YB.h)(null, null, FB, {
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L2035` → after: `L2035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR2035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L2035) · [Before (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L2035)

```diff
-           }, bB, kB), (0, AH.g)(null, null, eH, {
+           }, fO, kO), (0, YB.h)(null, null, LB, {
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L2048` → after: `L2048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR2048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L2048) · [Before (L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L2048)

```diff
-           }, mB, oB), (0, AH.g)(null, null, qH, {
+           }, dO, KO), (0, YB.h)(null, null, gB, {
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L2061` → after: `L2061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR2061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L2061) · [Before (L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L2061)

```diff
-           }, IB, fB), (0, AH.g)(null, null, nH, {
+           }, uO, mO), (0, YB.h)(null, null, cB, {
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L2074` → after: `L2074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR2074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L2074) · [Before (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L2074)

```diff
-           }, lB, KB), (0, AH.g)(null, null, FH, {
+           }, IO, FO), (0, YB.h)(null, null, hB, {
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L2087` → after: `L2087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR2087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L2087) · [Before (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L2087)

```diff
-           }, cB, eB), (0, AH.g)(null, null, DH, {
+           }, iO, LO), (0, YB.h)(null, null, aB, {
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L2100` → after: `L2100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR2100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L2100) · [Before (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L2100)

```diff
-           }, qB, gB), (0, AH.g)(null, null, wH, {
+           }, gO, rO), (0, YB.h)(null, null, eB, {
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L2113` → after: `L2113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR2113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L2113) · [Before (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L2113)

```diff
-           }, NB, RB), (0, AH.g)(null, null, ZH, {
+           }, XO, wO), (0, YB.h)(null, null, TB, {
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L2135` → after: `L2135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR2135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L2135) · [Before (L2135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L2135)

```diff
-     nH || (nH = !0, zH.b.AddNodeConstructor("ArcRotateCamera", ((HH, BH) => () => new jH(HH, 0, 0, 1, hH.o.Zero(), BH))), (0, eH.f)("BABYLON.ArcRotateCamera", jH))
+     cB || (cB = !0, yB.b.AddNodeConstructor("ArcRotateCamera", ((BB, OB) => () => new EB(BB, 0, 0, 1, oB.r.Zero(), OB))), (0, LB.f)("BABYLON.ArcRotateCamera", EB))
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L2137` → after: `L2137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR2137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L2137) · [Before (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L2137)

```diff
-   41525: (HH, BH, LH) => {
+   41246: (BB, OB, GB) => {
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L2139` → after: `L2139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR2139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L2139) · [Before (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L2139)

```diff
-       d: () => AH.b
+       d: () => YB.c
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L2141-L2142` → after: `L2141-L2142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR2141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L2141-L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L2141-L2142) · [Before (L2141-L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L2141-L2142)

```diff
-     var AH = LH(41533);
-     (0, AH.c)()
+     var YB = GB(41248);
+     (0, YB.d)()
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L2144` → after: `L2144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR2144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L2144) · [Before (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L2144)

```diff
-   41533: (HH, BH, LH) => {
+   41248: (BB, OB, GB) => {
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L2146-L2147` → after: `L2146-L2147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L2146-L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L2146-L2147) · [Before (L2146-L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L2146-L2147)

```diff
-       b: () => EH,
-       c: () => GH
+       c: () => MB,
+       d: () => zB
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L2149-L2155` → after: `L2149-L2155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR2149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L2149-L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L2149-L2155) · [Before (L2149-L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L2149-L2155)

```diff
-     var AH = LH(41290),
-       rH = LH(41297),
-       SH = LH(37963),
-       hH = LH(38074),
-       tH = LH(41535),
-       zH = LH(41498),
-       CH = LH(38012);
+     var YB = GB(40998),
+       DB = GB(41004),
+       QB = GB(37778),
+       oB = GB(37894),
+       jB = GB(41250),
+       yB = GB(41220),
+       JB = GB(37823);
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L2158` → after: `L2158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR2158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L2158) · [Before (L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L2158)

```diff
-         let BH, LH, zH = tH.b,
+         let OB, GB, yB = jB.d,
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L2165` → after: `L2165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR2165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L2165) · [Before (L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L2165)

```diff
-             super(HH, LH, rH), this.groundColor = (0, AH.k)(this, CH, new hH.c(0, 0, 0)), this.direction = ((0, AH.k)(this, EH), (0, AH.k)(this, XH, void 0)), (0, AH.k)(this, GH), this.direction = BH || SH.o.Up()
+             super(BB, GB, DB), this.groundColor = (0, YB.j)(this, JB, new oB.c(0, 0, 0)), this.direction = ((0, YB.j)(this, MB), (0, YB.j)(this, PB, void 0)), (0, YB.j)(this, zB), this.direction = OB || QB.r.Up()
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L2174` → after: `L2174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR2174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L2174) · [Before (L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L2174)

```diff
-             return this.direction = SH.o.Normalize(HH.subtract(SH.o.Zero())), this.direction
+             return this.direction = QB.r.Normalize(BB.subtract(QB.r.Zero())), this.direction
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L2180` → after: `L2180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR2180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L2180) · [Before (L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L2180)

```diff
-             const LH = SH.o.Normalize(this.direction);
+             const GB = QB.r.Normalize(this.direction);
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L2184` → after: `L2184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR2184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L2184) · [Before (L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L2184)

```diff
-             const LH = SH.o.Normalize(this.direction);
+             const GB = QB.r.Normalize(this.direction);
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L2188` → after: `L2188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR2188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L2188) · [Before (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L2188)

```diff
-             return this._worldMatrix || (this._worldMatrix = SH.e.Identity()), this._worldMatrix
+             return this._worldMatrix || (this._worldMatrix = QB.d.Identity()), this._worldMatrix
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L2191` → after: `L2191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR2191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L2191) · [Before (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L2191)

```diff
-             return tH.b.LIGHTTYPEID_HEMISPHERICLIGHT
+             return jB.d.LIGHTTYPEID_HEMISPHERICLIGHT
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L2198` → after: `L2198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR2198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L2198) · [Before (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L2198)

```diff
-           BH = [(0, rH.l)()], LH = [(0, rH.F)()], (0, AH.g)(null, null, BH, {
+           OB = [(0, DB.n)()], GB = [(0, DB.H)()], (0, YB.h)(null, null, OB, {
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L2211` → after: `L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR2211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L2211) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L2211)

```diff
-           }, CH, EH), (0, AH.g)(null, null, LH, {
+           }, JB, MB), (0, YB.h)(null, null, GB, {
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L2235` → after: `L2235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR2235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/289.js#L2235) · [Before (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/289.js#L2235)

```diff
-       XH || (XH = !0, zH.b.AddNodeConstructor("Light_Type_3", ((HH, BH) => () => new EH(HH, SH.o.Zero(), BH))), (0, CH.f)("BABYLON.HemisphericLight", EH))
+       PB || (PB = !0, yB.b.AddNodeConstructor("Light_Type_3", ((BB, OB) => () => new MB(BB, QB.r.Zero(), OB))), (0, JB.f)("BABYLON.HemisphericLight", MB))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/290.js` (cwj32u.ae3e40c2 → gw4e3a.937868ec)

- **File**: `bundles/preprod.bloxd.io/chunks/js/290.js` (272 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L4)

```diff
-   41676: (HH, BH, LH) => {
+   41399: (BB, OB, GB) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L6)

```diff
-       b: () => rH
+       d: () => DB
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L8)

```diff
-     var AH = LH(41304);
+     var YB = GB(41012);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L32)

```diff
-           HH !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !HH && this.yN ? this._imageProcessingConfiguration = this.y … [truncated]
+           BB !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !BB && this.JF ? this._imageProcessingConfiguration = this.J … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L81)

```diff
-   41561: (HH, BH, LH) => {
+   41273: (BB, OB, GB) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L83-L84` → after: `L83-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L83-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L83-L84) · [Before (L83-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L83-L84)

```diff
-       d: () => SH,
-       e: () => rH
+       e: () => QB,
+       f: () => DB
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L86)

```diff
-     var AH = LH(41564);
+     var YB = GB(41275);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L101` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L101) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L101)

```diff
-   41644: (HH, BH, LH) => {
+   41358: (BB, OB, GB) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L103)

```diff
-       d: () => XH
+       b: () => PB
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L105-L111` → after: `L105-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L105-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L105-L111) · [Before (L105-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L105-L111)

```diff
-     var AH = LH(41290),
-       rH = LH(41573),
-       SH = LH(41297),
-       hH = LH(41632),
-       tH = LH(41564),
-       zH = LH(41648),
-       CH = LH(41618);
+     var YB = GB(40998),
+       DB = GB(41283),
+       QB = GB(41004),
+       oB = GB(41341),
+       jB = GB(41275),
+       yB = GB(41361),
+       JB = GB(41325);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L119` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L119) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L119)

```diff
-       let XH, GH, YH, uH, QH, WH, MH = zH.b,
+       let PB, zB, lB, pB, qB, ZB, NB = yB.c,
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L134` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L134) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L134)

```diff
-           return (0, AH.e)(this, BH, "f")
+           return (0, YB.c)(this, OB, "f")
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L137` → after: `L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L137) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L137)

```diff
-           (0, AH.f)(this, BH, HH, "f")
+           (0, YB.d)(this, OB, BB, "f")
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L140` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L140) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L140)

```diff
-           return (0, AH.e)(this, LH, "f")
+           return (0, YB.c)(this, GB, "f")
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L143)

```diff
-           (0, AH.f)(this, LH, HH, "f")
+           (0, YB.d)(this, GB, BB, "f")
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L146)

```diff
-           return (0, AH.e)(this, tH, "f")
+           return (0, YB.c)(this, jB, "f")
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L149` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L149) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L149)

```diff
-           (0, AH.f)(this, tH, HH, "f")
+           (0, YB.d)(this, jB, BB, "f")
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L159` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L159) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L159)

```diff
-           super(HH, "DetailMap", 140, new EH, SH), this._texture = null, BH.set(this, (0, AH.k)(this, xH, void 0)), this.diffuseBlendLevel = ((0, AH.k)(this, vH), (0, AH.k)(this, PH, 1)), this.roughnessBlendLevel = ((0, AH.k)(this, TH), (0, AH.k)(this, UH, 1)), this.bumpLevel = ( … [truncated]
+           super(BB, "DetailMap", 140, new MB, QB), this._texture = null, OB.set(this, (0, YB.j)(this, RB, void 0)), this.diffuseBlendLevel = ((0, YB.j)(this, WB), (0, YB.j)(this, AB, 1)), this.roughnessBlendLevel = ((0, YB.j)(this, VB), (0, YB.j)(this, SB, 1)), this.bumpLevel = ( … [truncated]
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L162` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L162) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L162)

```diff
-           return !this._isEnabled || !(HH._areTexturesDirty && BH.texturesEnabled && LH.getCaps().standardDerivatives && this._texture && hH.e.DetailTextureEnabled && !this._texture.isReady())
+           return !this._isEnabled || !(BB._areTexturesDirty && OB.texturesEnabled && GB.getCaps().standardDerivatives && this._texture && oB.d.DetailTextureEnabled && !this._texture.isReady())
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L167-L168` → after: `L167-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L167-L168) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L167-L168)

```diff
-             const LH = BH.Iu();
-             HH._areTexturesDirty && (LH.getCaps().standardDerivatives && this._texture && hH.e.DetailTextureEnabled && this._isEnabled ? ((0, CH.X)(this._texture, HH, "DETAIL"), HH.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : HH.DETAIL = !1)
+             const GB = OB.Lp();
+             BB._areTexturesDirty && (GB.getCaps().standardDerivatives && this._texture && oB.d.DetailTextureEnabled && this._isEnabled ? ((0, JB.ab)(this._texture, BB, "DETAIL"), BB.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : BB.DETAIL = !1)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L174` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L174) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L174)

```diff
-           HH.useUbo && LH && HH.isSync || this._texture && hH.e.DetailTextureEnabled && (HH.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, CH.u)(this._texture, HH, "detail")), BH.texturesEnabled  … [truncated]
+           BB.useUbo && GB && BB.isSync || this._texture && oB.d.DetailTextureEnabled && (BB.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, JB.F)(this._texture, BB, "detail")), OB.texturesEnabled  … [truncated]
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L209` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L209) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L209)

```diff
-         XH = [(0, SH.A)("detailTexture"), (0, SH.e)("_markAllSubMeshesAsTexturesDirty")], GH = [(0, SH.H)()], YH = [(0, SH.H)()], uH = [(0, SH.H)()], QH = [(0, SH.H)(), (0, SH.e)("_markAllSubMeshesAsTexturesDirty")], WH = [(0, SH.H)(), (0, SH.e)("_markAllSubMeshesAsTexturesDirty" … [truncated]
+         PB = [(0, QB.B)("detailTexture"), (0, QB.g)("_markAllSubMeshesAsTexturesDirty")], zB = [(0, QB.L)()], lB = [(0, QB.L)()], pB = [(0, QB.L)()], qB = [(0, QB.L)(), (0, QB.g)("_markAllSubMeshesAsTexturesDirty")], ZB = [(0, QB.L)(), (0, QB.g)("_markAllSubMeshesAsTexturesDirty" … [truncated]
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L222` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L222) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L222)

```diff
-         }, xH, vH), (0, AH.g)(HH, null, QH, {
+         }, RB, WB), (0, YB.h)(BB, null, qB, {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L235)

```diff
-         }, kH, mH), (0, AH.g)(HH, null, WH, {
+         }, kB, dB), (0, YB.h)(BB, null, ZB, {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L248` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L248) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L248)

```diff
-         }, oH, IH), (0, AH.g)(null, null, GH, {
+         }, KB, uB), (0, YB.h)(null, null, zB, {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L261)

```diff
-         }, PH, TH), (0, AH.g)(null, null, YH, {
+         }, AB, VB), (0, YB.h)(null, null, lB, {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L274` → after: `L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L274) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L274)

```diff
-         }, UH, VH), (0, AH.g)(null, null, uH, {
+         }, SB, nB), (0, YB.h)(null, null, pB, {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L296)

```diff
-   41564: (HH, BH, LH) => {
+   41275: (BB, OB, GB) => {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L395` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L395) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L395)

```diff
-   41662: (HH, BH, LH) => {
+   41381: (BB, OB, GB) => {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L397-L399` → after: `L397-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L397-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L397-L399) · [Before (L397-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L397-L399)

```diff
-       e: () => tH,
-       i: () => hH,
-       m: () => SH
+       d: () => jB,
+       g: () => oB,
+       h: () => QB
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L401` → after: `L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L401) · [Before (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L401)

```diff
-     var AH, rH = LH(37963);
+     var YB, DB = GB(37778);
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L406)

```diff
-       if (!Number.isInteger(AH) || AH < 0 || AH > LH) throw new Error(`Invalid geometry object ID ${AH} for mesh "${HH.name}". Object IDs must be integers between 0 and 0x${LH.toString(16).toUpperCase()}.`);
+       if (!Number.isInteger(YB) || YB < 0 || YB > GB) throw new Error(`Invalid geometry object ID ${YB} for mesh "${BB.name}". Object IDs must be integers between 0 and 0x${GB.toString(16).toUpperCase()}.`);
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L412` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L412) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L412)

```diff
-       if (!Number.isInteger(LH) || LH < 0 || LH > 255 || 0 !== LH && 0 === (63 & LH)) throw new Error(`Invalid geometry mesh-blending tag ${LH} for mesh "${HH.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
+       if (!Number.isInteger(GB) || GB < 0 || GB > 255 || 0 !== GB && 0 === (63 & GB)) throw new Error(`Invalid geometry mesh-blending tag ${GB} for mesh "${BB.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L422-L423` → after: `L422-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L422-L423) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L422-L423)

```diff
-           previousViewProjection: rH.e.Zero(),
-           currentViewProjection: rH.e.Zero(),
+           previousViewProjection: DB.d.Zero(),
+           currentViewProjection: DB.d.Zero(),
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L443` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L443) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L443)

```diff
-           void 0 !== HH && (rH += `#define ${SH.define}\n#define ${SH.defineIndex} ${HH}\n`)
+           void 0 !== BB && (DB += `#define ${QB.define}\n#define ${QB.defineIndex} ${BB}\n`)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L445` → after: `L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L445) · [Before (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L445)

```diff
-         AH.objectIdIsRedFormat && (rH += "#define PREPASS_OBJECT_ID_R8\n"), AH._defines = rH + `#define SCENE_MRT_COUNT ${BH.length}\n`
+         YB.objectIdIsRedFormat && (DB += "#define PREPASS_OBJECT_ID_R8\n"), YB._defines = DB + `#define SCENE_MRT_COUNT ${OB.length}\n`
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L479-L480` → after: `L479-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L479-L480) · [Before (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L479-L480)

```diff
-           if (LH.jU)
-             for (const BH of LH.jU) BH._removeDrawWrapper(HH)
+           if (GB.iW)
+             for (const OB of GB.iW) OB._removeDrawWrapper(BB)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L500-L501` → after: `L500-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L500-L501) · [Before (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L500-L501)

```diff
-         const CH = LH.yN(),
-           EH = CH.Iu();
+         const JB = GB.JF(),
+           MB = JB.Lp();
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L506)

```diff
-           else if (AH > HH) throw new Error(`Invalid geometry object ID ${AH} for mesh "${LH.name}". Object IDs must be integers between 0 and 0x${HH.toString(16).toUpperCase()}.`);
+           else if (YB > BB) throw new Error(`Invalid geometry object ID ${YB} for mesh "${GB.name}". Object IDs must be integers between 0 and 0x${BB.toString(16).toUpperCase()}.`);
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L516` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L516) · [Before (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L516)

```diff
-           if (HH[LH.uniqueId] || (HH[LH.uniqueId] = AH.clone(), zH.previousWorldMatrices[LH.uniqueId] = AH.clone()), rH[LH.uniqueId] !== EH.frameId && (zH.previousWorldMatrices[LH.uniqueId].Tm(HH[LH.uniqueId]), rH[LH.uniqueId] = EH.frameId), HH[LH.uniqueId].Tm(AH), -1 === zH.last … [truncated]
+           if (BB[GB.uniqueId] || (BB[GB.uniqueId] = YB.clone(), yB.previousWorldMatrices[GB.uniqueId] = YB.clone()), DB[GB.uniqueId] !== MB.frameId && (yB.previousWorldMatrices[GB.uniqueId].IU(BB[GB.uniqueId]), DB[GB.uniqueId] = MB.frameId), BB[GB.uniqueId].IU(YB), -1 === yB.last … [truncated]
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L630` → after: `L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L630) · [Before (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L630)

```diff
-   41648: (HH, BH, LH) => {
+   41361: (BB, OB, GB) => {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L632-L633` → after: `L632-L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L632-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L632-L633) · [Before (L632-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L632-L633)

```diff
-       b: () => GH,
-       e: () => uH
+       c: () => zB,
+       g: () => pB
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L635-L638` → after: `L635-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L635-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L635-L638) · [Before (L635-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L635-L638)

```diff
-     var AH = LH(41290),
-       rH = LH(41297),
-       SH = LH(41173),
-       hH = LH(41138);
+     var YB = GB(40998),
+       DB = GB(41004),
+       QB = GB(40896),
+       oB = GB(40864);
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L642` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07be624c2275575bb9feeaad54d0489a05cbd662...build/preprod.bloxd.io/gw4e3a.937868ec#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/gw4e3a.937868ec/bundles/preprod.bloxd.io/chunks/js/290.js#L642) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07be624c2275575bb9feeaad54d0489a05cbd662/bundles/preprod.bloxd.io/chunks/js/290.js#L642)

```diff
-         this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = HH, this._scene = HH.yN(), this._engine = this._scene.Iu()
+         this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = BB, this._scene = BB.JF(), this._engine = this._scene.Lp()
```
