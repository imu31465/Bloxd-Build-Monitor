# Changed — Bundle Modifications Report (Part 011 / 058)

- **Updated at**: `2026-11-21T00:46 JST`
- **Part**: `11 / 58` (**314** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 010](part-010.md) · [Part 012 →](part-012.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/225.js` (ad2avs.90d9e4dd → bbb6l5.0244a119 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/225.js` (270 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee)

#### 25. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L519` → after: `L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L102) · [Before (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L519)

```diff
-         return "ER"
+         return "Plane"
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L522-L537` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L105-L106) · [Before (L522-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L522-L537)

```diff
-         let zz = Oz(this._x);
-         return zz = 397 * zz ^ Oz(this._y), zz = 397 * zz ^ Oz(this._z), zz
-       }
-       obz() {
-         return [this._x, this._y, this._z]
-       }
-       toArray(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return zz[uz] = this._x, zz[uz + 1] = this._y, zz[uz + 2] = this._z, this
-       }
-       Fuz(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return dz.FromArrayToRef(zz, uz, this), this
-       }
-       toQuaternion() {
-         return Zz.RotationYawPitchRoll(this._y, this._x, this._z)
+         let qq = this.normal.getHashCode();
+         return qq = 397 * qq ^ this.d, qq
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L539-L555` → after: `L108-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L108-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L108-L111) · [Before (L539-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L539-L555)

```diff
-       addInPlace(zz) {
-         return this._x += zz._x, this._y += zz._y, this._z += zz._z, this._isDirty = !0, this
-       }
-       addInPlaceFromFloats(zz, uz, bz) {
-         return this._x += zz, this._y += uz, this._z += bz, this._isDirty = !0, this
-       }
-       add(zz) {
-         return new dz(this._x + zz._x, this._y + zz._y, this._z + zz._z)
-       }
-       addToRef(zz, uz) {
-         return uz._x = this._x + zz._x, uz._y = this._y + zz._y, uz._z = this._z + zz._z, uz._isDirty = !0, uz
-       }
-       Qbz(zz) {
-         return this._x -= zz._x, this._y -= zz._y, this._z -= zz._z, this._isDirty = !0, this
-       }
-       subtract(zz) {
- ... (1 more removed lines; see GitHub link above)
+       normalize() {
+         const qq = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
+         let Eq = 0;
+         return 0 !== qq && (Eq = 1 / qq), this.normal.x *= Eq, this.normal.y *= Eq, this.normal.z *= Eq, this.d *= Eq, this
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L557-L558` → after: `L113-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L113-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L113-L125) · [Before (L557-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L557-L558)

```diff
-       subtractToRef(zz, uz) {
-         return this.subtractFromFloatsToRef(zz._x, zz._y, zz._z, uz)
+       transform(qq) {
+         const Eq = lq._TmpMatrix;
+         qq.invertToRef(Eq);
+         const gq = Eq.m,
+           Yq = this.normal.x,
+           Oq = this.normal.y,
+           mq = this.normal.z,
+           xq = this.d,
+           Aq = Yq * gq[0] + Oq * gq[1] + mq * gq[2] + xq * gq[3],
+           cq = Yq * gq[4] + Oq * gq[5] + mq * gq[6] + xq * gq[7],
+           uq = Yq * gq[8] + Oq * gq[9] + mq * gq[10] + xq * gq[11],
+           Bq = Yq * gq[12] + Oq * gq[13] + mq * gq[14] + xq * gq[15];
+         return new lq(Aq, cq, uq, Bq)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L560-L561` → after: `L127-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L127-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L127-L128) · [Before (L560-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L560-L561)

```diff
-       subtractFromFloats(zz, uz, bz) {
-         return new dz(this._x - zz, this._y - uz, this._z - bz)
+       dotCoordinate(qq) {
+         return this.normal.x * qq.x + this.normal.y * qq.y + this.normal.z * qq.z + this.d
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L563-L564` → after: `L130-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L130-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L130-L142) · [Before (L563-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L563-L564)

```diff
-       subtractFromFloatsToRef(zz, uz, bz, Ez) {
-         return Ez._x = this._x - zz, Ez._y = this._y - uz, Ez._z = this._z - bz, Ez._isDirty = !0, Ez
+       copyFromPoints(qq, Eq, gq) {
+         const Yq = Eq.x - qq.x,
+           lq = Eq.y - qq.y,
+           Oq = Eq.z - qq.z,
+           mq = gq.x - qq.x,
+           xq = gq.y - qq.y,
+           Aq = gq.z - qq.z,
+           cq = lq * Aq - Oq * xq,
+           uq = Oq * mq - Yq * Aq,
+           Bq = Yq * xq - lq * mq,
+           Wq = Math.sqrt(cq * cq + uq * uq + Bq * Bq);
+         let Nq;
+         return Nq = 0 !== Wq ? 1 / Wq : 0, this.normal.x = cq * Nq, this.normal.y = uq * Nq, this.normal.z = Bq * Nq, this.d = -(this.normal.x * qq.x + this.normal.y * qq.y + this.normal.z * qq.z), this
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L566-L567` → after: `L144-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L144-L145) · [Before (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L566-L567)

```diff
-       nb() {
-         return new dz(-this._x, -this._y, -this._z)
+       isFrontFacingTo(qq, Eq) {
+         return Yq.q.Dot(this.normal, qq) <= Eq
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L569-L570` → after: `L147-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L147-L148) · [Before (L569-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L569-L570)

```diff
-       negateInPlace() {
-         return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
+       signedDistanceTo(qq) {
+         return Yq.q.Dot(qq, this.normal) + this.d
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L572-L573` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L150-L151) · [Before (L572-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L572-L573)

```diff
-       negateToRef(zz) {
-         return zz._x = -1 * this._x, zz._y = -1 * this._y, zz._z = -1 * this._z, zz._isDirty = !0, zz
+       static FromArray(qq) {
+         return new lq(qq[0], qq[1], qq[2], qq[3])
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L575-L576` → after: `L153-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L153-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L153-L155) · [Before (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L575-L576)

```diff
-       scaleInPlace(zz) {
-         return this._x *= zz, this._y *= zz, this._z *= zz, this._isDirty = !0, this
+       static FromPoints(qq, Eq, gq) {
+         const Yq = new lq(0, 0, 0, 0);
+         return Yq.copyFromPoints(qq, Eq, gq), Yq
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L578-L579` → after: `L157-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L157-L159) · [Before (L578-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L578-L579)

```diff
-       scale(zz) {
-         return new dz(this._x * zz, this._y * zz, this._z * zz)
+       static FromPositionAndNormal(qq, Eq) {
+         const gq = new lq(0, 0, 0, 0);
+         return this.FromPositionAndNormalToRef(qq, Eq, gq)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L581-L582` → after: `L161-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L161-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L161-L162) · [Before (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L581-L582)

```diff
-       scaleToRef(zz, uz) {
-         return uz._x = this._x * zz, uz._y = this._y * zz, uz._z = this._z * zz, uz._isDirty = !0, uz
+       static FromPositionAndNormalToRef(qq, Eq, gq) {
+         return gq.normal.WG(Eq), gq.normal.normalize(), gq.d = -qq.dot(gq.normal), gq
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L584-L592` → after: `L164-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L164-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L164-L166) · [Before (L584-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L584-L592)

```diff
-       getNormalToRef(zz) {
-         const uz = this.length();
-         let bz = Math.acos(this._y / uz);
-         const Ez = Math.atan2(this._z, this._x);
-         bz > Math.PI / 2 ? bz -= Math.PI / 2 : bz += Math.PI / 2;
-         const nz = uz * Math.sin(bz) * Math.cos(Ez),
-           iz = uz * Math.cos(bz),
-           lz = uz * Math.sin(bz) * Math.sin(Ez);
-         return zz.set(nz, iz, lz), zz
+       static SignedDistanceToPlaneFromPositionAndNormal(qq, Eq, gq) {
+         const lq = -(Eq.x * qq.x + Eq.y * qq.y + Eq.z * qq.z);
+         return Yq.q.Dot(gq, Eq) + lq
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L594-L605` → after: `L168-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L168-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L168-L190) · [Before (L594-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L594-L605)

```diff
-       applyRotationQuaternionToRef(zz, uz) {
-         const bz = this._x,
-           Ez = this._y,
-           nz = this._z,
-           iz = zz._x,
-           lz = zz._y,
-           Mz = zz._z,
-           tz = zz._w,
-           Hz = 2 * (lz * nz - Mz * Ez),
-           Oz = 2 * (Mz * bz - iz * nz),
-           pz = 2 * (iz * Ez - lz * bz);
-         return uz._x = bz + tz * Hz + lz * pz - Mz * Oz, uz._y = Ez + tz * Oz + Mz * Hz - iz * pz, uz._z = nz + tz * pz + iz * Oz - lz * Hz, uz._isDirty = !0, uz
+     }
+     lq._TmpMatrix = Yq.e.Identity()
+   },
+   37131: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       Matrix: () => Yq.e,
+       Quaternion: () => Yq.h,
+       RegisterMathVector: () => Yq.l,
+       TmpVectors: () => Yq.o,
+       Vector2: () => Yq.p,
+       Na: () => Yq.q,
+       Vector4: () => Yq.r
+     });
+     var Yq = gq(37139);
+     (0, Yq.l)()
+   },
+ ... (7 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L607-L608` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L192-L193) · [Before (L607-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L607-L608)

```diff
-       applyRotationQuaternionInPlace(zz) {
-         return this.applyRotationQuaternionToRef(zz, this)
+       toGlobal(qq, Eq) {
+         return new Yq(this.x * qq, this.y * Eq, this.width * qq, this.height * Eq)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L610-L611` → after: `L195-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L195-L196) · [Before (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L610-L611)

```diff
-       applyRotationQuaternion(zz) {
-         return this.applyRotationQuaternionToRef(zz, new dz)
+       toGlobalToRef(qq, Eq, gq) {
+         return gq.x = this.x * qq, gq.y = this.y * Eq, gq.width = this.width * qq, gq.height = this.height * Eq, this
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L613-L614` → after: `L198-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L198-L199) · [Before (L613-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L613-L614)

```diff
-       scaleAndAddToRef(zz, uz) {
-         return uz._x += this._x * zz, uz._y += this._y * zz, uz._z += this._z * zz, uz._isDirty = !0, uz
+       clone() {
+         return new Yq(this.x, this.y, this.width, this.height)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L616-L617` → after: `L201-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L201-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L201-L214) · [Before (L616-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L616-L617)

```diff
-       projectOnPlane(zz, uz) {
-         return this.projectOnPlaneToRef(zz, uz, new dz)
+     }
+   },
+   41519: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => cq
+     });
+     var Yq = gq(37139),
+       lq = gq(37158),
+       Oq = gq(39741),
+       mq = gq(37145),
+       xq = gq(37289);
+     class Aq {
+       constructor(qq, Eq, gq, Yq) {
+         this.name = qq, this.worldAxisForNormal = Eq, this.worldAxisForFileX = gq, this.worldAxisForFileY = Yq
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L619-L629` → after: `L216-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L216-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L216-L284) · [Before (L619-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L619-L629)

```diff
-       projectOnPlaneToRef(zz, uz, bz) {
-         const Ez = zz.normal,
-           nz = zz.d,
-           iz = Kz.ER[0];
-         this.subtractToRef(uz, iz), iz.normalize();
-         const lz = dz.Dot(iz, Ez);
-         if (Math.abs(lz) < 1e-10) bz.Vk(1 / 0);
-         else {
-           const zz = -(dz.Dot(uz, Ez) + nz) / lz,
-             Mz = iz.scaleInPlace(zz);
-           uz.addToRef(Mz, bz)
+     }
+     class cq {
+       static _NearestPow2Floor(qq) {
+         return qq <= 1 ? 1 : 1 << Math.floor(Math.log2(qq))
+       }
+       static ConvertCubeMapTextureToSphericalPolynomial(qq) {
+         if (!qq.isCube) return null;
+         qq.ZJ()?.Ba().flushFramebuffer();
+         const Eq = qq.getSize().width,
+           gq = qq._sphericalPolynomialTargetSize,
+           Yq = gq > 0 ? this._NearestPow2Floor(gq) : 0,
+           lq = !qq.noMipmap && !0 === qq._texture?.generateMipMaps,
+           Oq = Yq > 0 && Yq < Eq && lq,
+           mq = Oq ? Math.max(0, Math.round(Math.log2(Eq / Yq))) : 0,
+           xq = Oq ? Math.max(1, Math.floor(Eq / Math.pow(2, mq))) : Eq,
+           Aq = qq.readPixels(0, mq, void 0, !1),
+ ... (53 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L633-L650` → after: `L291-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L291-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L291-L341) · [Before (L633-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L633-L650)

```diff
-       equals(zz) {
-         return zz && this._x === zz._x && this._y === zz._y && this._z === zz._z
-       }
-       equalsWithEpsilon(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ez.b;
-         return zz && (0, Mz.WithinEpsilon)(this._x, zz._x, uz) && (0, Mz.WithinEpsilon)(this._y, zz._y, uz) && (0, Mz.WithinEpsilon)(this._z, zz._z, uz)
-       }
-       zlz(zz, uz, bz) {
-         return this._x === zz && this._y === uz && this._z === bz
-       }
-       multiplyInPlace(zz) {
-         return this._x *= zz._x, this._y *= zz._y, this._z *= zz._z, this._isDirty = !0, this
-       }
-       multiply(zz) {
-         return this.multiplyByFloats(zz._x, zz._y, zz._z)
-       }
- ... (2 more removed lines; see GitHub link above)
+       static ConvertCubeMapToSphericalPolynomial(qq) {
+         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         const gq = Eq > 0 ? this._NearestPow2Floor(Eq) : 0;
+         if (gq > 0 && qq.size > gq) {
+           const Eq = 5 === qq.format ? 4 : 3,
+             Yq = ["right", "left", "up", "down", "front", "back"],
+             lq = {};
+           for (const Oq of Yq) lq[Oq] = this._DownsampleFace(qq[Oq], qq.size, gq, Eq);
+           qq = {
+             ...qq,
+             ...lq,
+             size: gq
+           }
+         }
+         const Yq = new Oq.c;
+         let Aq = 0;
+ ... (35 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L652-L653` → after: `L343-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L343-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L343-L402) · [Before (L652-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L652-L653)

```diff
-       multiplyByFloats(zz, uz, bz) {
-         return new dz(this._x * zz, this._y * uz, this._z * bz)
+     }
+     cq._FileFaces = [new Aq("right", new Yq.q(1, 0, 0), new Yq.q(0, 0, -1), new Yq.q(0, -1, 0)), new Aq("left", new Yq.q(-1, 0, 0), new Yq.q(0, 0, 1), new Yq.q(0, -1, 0)), new Aq("up", new Yq.q(0, 1, 0), new Yq.q(1, 0, 0), new Yq.q(0, 0, 1)), new Aq("down", new Yq.q(0, -1, 0), ne … [truncated]
+   },
+   41299: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => Yq.m,
+       f: () => Yq.x
+     });
+     var Yq = gq(39799);
+     (0, Yq.D)()
+   },
+   37872: (qq, Eq, gq) => {
+     function Yq() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (qq => {
+         const Eq = 16 * Math.random() | 0;
+         return ("x" === qq ? Eq : 3 & Eq | 8).toString(16)
+ ... (44 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L655-L656` → after: `L404-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L404-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L404-L406) · [Before (L655-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L655-L656)

```diff
-       divide(zz) {
-         return new dz(this._x / zz._x, this._y / zz._y, this._z / zz._z)
+       static async EncodeTextureToRGBD(qq, Eq) {
+         let Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         return Eq.Ba().isWebGPU ? await gq.e(334).then((() => gq(61384))) : await gq.e(316).then((() => gq(61377))), await (0, lq.c)("rgbdEncode", qq, Eq, Yq, 1, 5)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L658-L659` → after: `L408-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L408-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L408-L443) · [Before (L658-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L658-L659)

```diff
-       divideToRef(zz, uz) {
-         return uz._x = this._x / zz._x, uz._y = this._y / zz._y, uz._z = this._z / zz._z, uz._isDirty = !0, uz
+     }
+   },
+   61112: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       AsyncLoop: () => Yq.b,
+       RegisterTools: () => Yq.e,
+       Tools: () => Yq.f,
+       className: () => Yq.h
+     });
+     var Yq = gq(39845);
+     (0, Yq.e)()
+   },
+   41607: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => lq
+     });
+ ... (20 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L661-L662` → after: `L445-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L445-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L445-L451) · [Before (L661-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L661-L662)

```diff
-       divideInPlace(zz) {
-         return this._x = this._x / zz._x, this._y = this._y / zz._y, this._z = this._z / zz._z, this._isDirty = !0, this
+       _execute(qq, Eq) {
+         qq.idle = !1, qq.workerPromise.then((gq => {
+           Eq(gq, (() => {
+             const Eq = this._pendingActions.shift();
+             Eq ? this._execute(qq, Eq) : qq.idle = !0
+           }))
+         }))
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L664-L665` → after: `L453-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L453-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L453-L479) · [Before (L664-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L664-L665)

```diff
-       minimizeInPlace(zz) {
-         return this.minimizeInPlaceFromFloats(zz._x, zz._y, zz._z)
+     }
+     class lq extends Yq {
+       constructor(qq, Eq) {
+         let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lq.DefaultOptions;
+         super([]), this._maxWorkers = qq, this._createWorkerAsync = Eq, this._options = gq
+       }
+       push(qq) {
+         if (!this._executeOnIdleWorker(qq))
+           if (this._workerInfos.length < this._maxWorkers) {
+             const Eq = {
+               workerPromise: this._createWorkerAsync(),
+               idle: !1
+             };
+             this._workerInfos.push(Eq), this._execute(Eq, qq)
+           } else this._pendingActions.push(qq)
+       }
+ ... (11 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L667-L668` → after: `L481-L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L481-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L481-L671) · [Before (L667-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L667-L668)

```diff
-       maximizeInPlace(zz) {
-         return this.maximizeInPlaceFromFloats(zz._x, zz._y, zz._z)
+     }
+     lq.DefaultOptions = {
+       idleTimeElapsedBeforeRelease: 1e3
+     }
+   },
+   61146: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       AbstractThreeMfSerializer: () => Xx,
+       BVHExporter: () => hm,
+       ContentTypeFileName: () => ax,
+       DefaultXmlSerializerFormatOptions: () => Rm,
+       DefaultXmlSerializerNumberOptions: () => km,
+       EXT_lights_area: () => dl,
+       EXT_mesh_gpu_instancing: () => GY,
+       EXT_texture_avif: () => lm,
+       EXT_texture_webp: () => qm,
+ ... (175 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L670-L671` → after: `L673-L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L673-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L673-L679) · [Before (L670-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L670-L671)

```diff
-       minimizeInPlaceFromFloats(zz, uz, bz) {
-         return zz < this._x && (this.x = zz), uz < this._y && (this.y = uz), bz < this._z && (this.z = bz), this
+       static MTL(qq) {
+         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
+         const gq = [],
+           Yq = qq.material;
+         gq.push("newmtl " + Eq), gq.push("  Ns " + Yq.specularPower.toFixed(4)), gq.push("  Ni 1.5000"), gq.push("  d " + Yq.alpha.toFixed(4)), gq.push("  Tr 0.0000"), gq.push("  Tf 1.0000 1.0000 1.0000"), gq.push("  illum 2"), gq.push("  Ka " + Yq.ambientColor.r.toFixed(4) + " " … [truncated]
+         Yq.ambientTexture && gq.push("  map_Ka " + Yq.ambientTexture.name), Yq.diffuseTexture && gq.push("  map_Kd " + Yq.diffuseTexture.name), Yq.specularTexture && gq.push("  map_Ks " + Yq.specularTexture.name), Yq.bumpTexture && gq.push("  map_bump -imfchan z " + Yq.bumpTextur … [truncated]
+         return gq.join("\n")
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L673-L674` → after: `L681-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L681-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L681-L698) · [Before (L673-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L673-L674)

```diff
-       maximizeInPlaceFromFloats(zz, uz, bz) {
-         return zz > this._x && (this.x = zz), uz > this._y && (this.y = uz), bz > this._z && (this.z = bz), this
+     }
+     var xq = 0,
+       Aq = gq(41299);
+     class cq {
+       constructor() {
+         this.files = {}
+       }
+       get glTFFiles() {
+         return this.files
+       }
+       downloadFiles() {
+         for (const qq in this.files) {
+           const Eq = this.files[qq],
+             gq = new Blob([Eq], {
+               type: (0, Aq.d)(qq)
+             });
+ ... (2 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L676-L681` → after: `L700-L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L700-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L700-L762) · [Before (L676-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L676-L681)

```diff
-       isNonUniformWithinEpsilon(zz) {
-         const uz = Math.abs(this._x),
-           bz = Math.abs(this._y);
-         if (!(0, Mz.WithinEpsilon)(uz, bz, zz)) return !0;
-         const Ez = Math.abs(this._z);
-         return !(0, Mz.WithinEpsilon)(uz, Ez, zz) || !(0, Mz.WithinEpsilon)(bz, Ez, zz)
+     }
+     var uq = gq(40901),
+       Bq = gq(40857),
+       Wq = gq(41377),
+       Nq = gq(40860),
+       aq = gq(39585),
+       Vq = gq(37153),
+       dq = gq(37286),
+       jq = gq(37158);
+     const Hq = jq.HighestCommonFactor,
+       oq = {
+         ...jq,
+         TwoPi: 2 * Math.PI,
+         Sign: Math.sign,
+         Log2: Math.log2,
+         HCF: Hq
+ ... (47 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L683-L689` → after: `L764-L994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L764-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L764-L994) · [Before (L683-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L683-L689)

```diff
-       get isNonUniform() {
-         const zz = Math.abs(this._x);
-         if (zz !== Math.abs(this._y)) return !0;
-         return zz !== Math.abs(this._z)
-       }
-       floorToRef(zz) {
-         return zz._x = Math.floor(this._x), zz._y = Math.floor(this._y), zz._z = Math.floor(this._z), zz._isDirty = !0, zz
+     }
+     let Uq = (() => {
+       var qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq;
+       let uq, Bq, Wq, Nq, aq, Vq, dq, jq, Hq, oq = kq.c,
+         Pq = [],
+         Qq = [],
+         yq = [],
+         tq = [],
+         rq = [],
+         nq = [],
+         bq = [],
+         iq = [],
+         Zq = [],
+         fq = [],
+         Mq = [],
+         Tq = [],
+ ... (215 more added lines; see GitHub link above)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L691-L692` → after: `L996-L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L996-L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L996-L1392) · [Before (L691-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L691-L692)

```diff
-       floor() {
-         return new dz(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
+     }
+     let qE = (() => {
+       var qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq;
+       let uq, Bq, Wq, Nq, aq, Vq, dq, jq, Hq, oq, Pq, Qq, yq, tq, rq = kq.c,
+         nq = [],
+         bq = [],
+         iq = [],
+         Zq = [],
+         fq = [],
+         Mq = [],
+         Tq = [],
+         zq = [],
+         Sq = [],
+         pq = [],
+         Gq = [],
+         Lq = [],
+ ... (381 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L694-L695` → after: `L1394-L1602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1394-L1602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L1394-L1602) · [Before (L694-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L694-L695)

```diff
-       fractToRef(zz) {
-         return zz._x = this._x - Math.floor(this._x), zz._y = this._y - Math.floor(this._y), zz._z = this._z - Math.floor(this._z), zz._isDirty = !0, zz
+     }
+     let gE = (() => {
+       var qq, Eq, gq, Yq;
+       let lq, Oq, mq, xq, Aq, cq, uq, Bq = kq.c,
+         Wq = [],
+         Nq = [],
+         aq = [],
+         Vq = [],
+         dq = [],
+         jq = [],
+         Hq = [],
+         oq = [],
+         Pq = [],
+         Qq = [],
+         yq = [],
+         tq = [],
+ ... (193 more added lines; see GitHub link above)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L697-L698` → after: `L1604-L1785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1604-L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L1604-L1785) · [Before (L697-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L697-L698)

```diff
-       fract() {
-         return new dz(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
+     }
+     let lE = (() => {
+       var qq, Eq, gq, Yq;
+       let lq, Oq, mq, xq, Aq, cq = kq.c,
+         uq = [],
+         Bq = [],
+         Wq = [],
+         Nq = [],
+         aq = [],
+         Vq = [],
+         dq = [],
+         jq = [],
+         Hq = [],
+         oq = [];
+       return qq = class extends cq {
+         get isEnabled() {
+ ... (166 more added lines; see GitHub link above)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L700-L701` → after: `L1787-L2054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR1787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L1787-L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L1787-L2054) · [Before (L700-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L700-L701)

```diff
-       length() {
-         return Math.sqrt(this.lengthSquared())
+     }
+     let mE = (() => {
+       var qq, Eq, gq, Yq, lq, Oq, mq, xq;
+       let Aq, cq, uq, Bq, Wq, Nq, aq, Vq, dq, jq = kq.c,
+         Hq = [],
+         oq = [],
+         Pq = [],
+         Qq = [],
+         yq = [],
+         tq = [],
+         rq = [],
+         nq = [],
+         bq = [],
+         iq = [],
+         Zq = [],
+         fq = [],
+ ... (252 more added lines; see GitHub link above)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L703-L704` → after: `L2056-L2841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L2056-L2841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L2056-L2841) · [Before (L703-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L703-L704)

```diff
-       lengthSquared() {
-         return this._x * this._x + this._y * this._y + this._z * this._z
+     }
+     let AE = (() => {
+       var qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq, Bq, Wq, Nq, aq, Vq, dq;
+       let jq, Hq, oq, Pq, Qq, yq, tq, rq, nq, bq, iq, Zq, fq, Mq, Tq, zq, Sq, pq, Lq, Jq, Rq, Uq, Fq, Xq, wq, Kq, Iq, Dq, qE, EE, gE = kq.c,
+         YE = [],
+         lE = [],
+         OE = [],
+         mE = [],
+         AE = [],
+         cE = [],
+         uE = [],
+         BE = [],
+         WE = [],
+         NE = [],
+         aE = [],
+         VE = [],
+ ... (770 more added lines; see GitHub link above)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L706-L707` → after: `L2843-L2844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR2843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L2843-L2844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L2843-L2844) · [Before (L706-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L706-L707)

```diff
-       get hasAZeroComponent() {
-         return this._x * this._y * this._z === 0
+       reset() {
+         super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L709-L710` → after: `L2846-L3409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR2846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L2846-L3409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L2846-L3409) · [Before (L709-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L709-L710)

```diff
-       normalize() {
-         return this.normalizeFromLength(this.length())
+     }
+     class QE extends((0, dE.c)(Kq.b)) {}
+     let yE = (() => {
+       var qq, Eq;
+       let Yq, lq = QE,
+         mq = [],
+         xq = [];
+       return qq = class extends lq {
+         get realTimeFiltering() {
+           return this._realTimeFiltering
+         }
+         set realTimeFiltering(qq) {
+           this._realTimeFiltering = qq, this.xgq(1)
+         }
+         get realTimeFilteringQuality() {
+           return this._realTimeFilteringQuality
+ ... (548 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L712-L715` → after: `L3411-L3423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3411-L3423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3411-L3423) · [Before (L712-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L712-L715)

```diff
-       reorderInPlace(zz) {
-         if ("xyz" === (zz = zz.toLowerCase())) return this;
-         const uz = Kz.ER[0].euz(this);
-         return this.x = uz[zz[0]], this.y = uz[zz[1]], this.z = uz[zz[2]], this
+       _rebuild() {
+         let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           gq = arguments.length > 2 ? arguments[2] : void 0;
+         if (this._count < 1 || qq) return;
+         const Yq = this._createInternaTextureIndexMapping();
+         this.releaseInternalTextures(), this._createInternalTextures(), Eq && (this._releaseTextures(), this._createTextures(gq));
+         const lq = this._renderTarget.textures;
+         for (let Oq = 0; Oq < lq.length; Oq++) {
+           const qq = this._textures[Oq];
+           void 0 !== Yq[Oq] && this._renderTarget.setTexture(lq[Yq[Oq]], Oq), qq._texture = lq[Oq], qq._texture && (qq._noMipmap = !qq._texture.useMipMaps, qq._useSRGBBuffer = qq._texture._useSRGBBuffer)
+         }
+         1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L717-L718` → after: `L3425-L3426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3425-L3426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3425-L3426) · [Before (L717-L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L717-L718)

```diff
-       rotateByQuaternionToRef(zz, uz) {
-         return zz.toRotationMatrix(Kz.Matrix[0]), dz.TransformCoordinatesToRef(this, Kz.Matrix[0], uz), uz
+       _createInternalTextures() {
+         this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L720-L721` → after: `L3428-L3430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3428-L3430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3428-L3430) · [Before (L720-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L720-L721)

```diff
-       rotateByQuaternionAroundPointToRef(zz, uz, bz) {
-         return this.subtractToRef(uz, Kz.ER[0]), Kz.ER[0].rotateByQuaternionToRef(zz, Kz.ER[0]), uz.addToRef(Kz.ER[0], bz), bz
+       _releaseTextures() {
+         if (this._textures)
+           for (let qq = 0; qq < this._textures.length; qq++) this._textures[qq]._texture = null, this._textures[qq].dispose()
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L723-L724` → after: `L3432-L3438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3432-L3438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3432-L3438) · [Before (L723-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L723-L724)

```diff
-       cross(zz) {
-         return dz.CrossToRef(this, zz, new dz)
+       _createTextures(qq) {
+         const Eq = this._renderTarget.textures;
+         this._textures = [];
+         for (let gq = 0; gq < Eq.length; gq++) {
+           const Yq = new iq.d(null, this.ZJ());
+           qq?.[gq] && (Yq.name = qq[gq]), Yq._texture = Eq[gq], Yq._texture && (Yq._noMipmap = !Yq._texture.useMipMaps, Yq._useSRGBBuffer = Yq._texture._useSRGBBuffer), this._textures.push(Yq)
+         }
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L726-L727` → after: `L3440-L3445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3440-L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3440-L3445) · [Before (L726-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L726-L727)

```diff
-       normalizeFromLength(zz) {
-         return 0 === zz || 1 === zz ? this : this.scaleInPlace(1 / zz)
+       setInternalTexture(qq, Eq) {
+         let gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+         if (this.renderTarget && (0 === Eq && (this._texture = qq), this.renderTarget.setTexture(qq, Eq, gq), this.textures[Eq] || (this.textures[Eq] = new iq.d(null, this.ZJ()), this.textures[Eq].name = this._textureNames?.[Eq] ?? this.textures[Eq].name), this.textures[Eq]._text … [truncated]
+           let gq;
+           gq = qq.is2DArray ? 35866 : qq.isCube ? 34067 : qq.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[Eq] = gq
+         }
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L729-L730` → after: `L3447-L3483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3447-L3483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3447-L3483) · [Before (L729-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L729-L730)

```diff
-       normalizeToNew() {
-         return this.normalizeToRef(new dz)
+       setLayerAndFaceIndex(qq) {
+         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
+           gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
+         this.textures[qq] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[qq] = Eq), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[qq] = gq), this.renderTarget.setLayerAndFace … [truncated]
+       }
+       setLayerAndFaceIndices(qq, Eq) {
+         this.renderTarget && (this._multiRenderTargetOptions.layerIndex = qq, this._multiRenderTargetOptions.faceIndex = Eq, this.renderTarget.setLayerAndFaceIndices(qq, Eq))
+       }
+       get samples() {
+         return this._samples
+       }
+       set samples(qq) {
+         this._renderTarget ? this._samples = this._renderTarget.setSamples(qq) : this._samples = qq
+       }
+       resize(qq) {
+         this._processSizeParameter(qq), this._rebuild(!1, void 0, this._textureNames)
+ ... (21 more added lines; see GitHub link above)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L732-L1109` → after: `L3485-L3490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3485-L3490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3485-L3490) · [Before (L732-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L732-L1109)

```diff
-       normalizeToRef(zz) {
-         const uz = this.length();
-         return 0 === uz || 1 === uz ? (zz._x = this._x, zz._y = this._y, zz._z = this._z, zz._isDirty = !0, zz) : this.scaleToRef(1 / uz, zz)
-       }
-       clone() {
-         return new dz(this._x, this._y, this._z)
-       }
-       euz(zz) {
-         return this.P_(zz._x, zz._y, zz._z)
-       }
-       P_(zz, uz, bz) {
-         return this._x = zz, this._y = uz, this._z = bz, this._isDirty = !0, this
-       }
-       set(zz, uz, bz) {
-         return this.P_(zz, uz, bz)
-       }
- ... (362 more removed lines; see GitHub link above)
+       releaseInternalTextures() {
+         const qq = this._renderTarget?.textures;
+         if (qq) {
+           for (let Eq = qq.length - 1; Eq >= 0; Eq--) this._textures[Eq]._texture = null;
+           this._renderTarget?.dispose(), this._renderTarget = null
+         }
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1112` → after: `L3493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3493) · [Before (L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1112)

```diff
-     dz._V8PerformanceHack = new dz(.5, .5, .5), dz._UpReadOnly = dz.Up(), dz._DownReadOnly = dz.Down(), dz._LeftHandedForwardReadOnly = dz.Forward(!1), dz._RightHandedForwardReadOnly = dz.Forward(!0), dz._LeftHandedBackwardReadOnly = dz.Backward(!1), dz._RightHandedBackwardReadOn … [truncated]
+     var TE = gq(39911);
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1114-L1405` → after: `L3495-L3496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3495-L3496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3495-L3496) · [Before (L1114-L1405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1114-L1405)

```diff
-       get x() {
-         return this._x
-       }
-       set x(zz) {
-         this._x = zz, this._isDirty = !0
-       }
-       get y() {
-         return this._y
-       }
-       set y(zz) {
-         this._y = zz, this._isDirty = !0
-       }
-       get z() {
-         return this._z
-       }
-       set z(zz) {
- ... (276 more removed lines; see GitHub link above)
+       constructor(qq) {
+         this.name = TE.e.NAME_GEOMETRYBUFFERRENDERER, this.PV = qq
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1407-L1409` → after: `L3498-L3499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3498-L3499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3498-L3499) · [Before (L1407-L1409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1407-L1409)

```diff
-       static FromVector3(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return new Fz(zz._x, zz._y, zz._z, uz)
+       register() {
+         this.PV._gatherRenderTargetsStage.registerStep(TE.e.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1411-L1412` → after: `L3501-L3504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3501-L3504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3501-L3504) · [Before (L1411-L1412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1411-L1412)

```diff
-       static Dot(zz, uz) {
-         return zz.x * uz.x + zz.y * uz.y + zz.z * uz.z + zz.w * uz.w
+       rebuild() {}
+       dispose() {}
+       _gatherRenderTargets(qq) {
+         this.PV._geometryBufferRenderer && qq.push(this.PV._geometryBufferRenderer.getGBuffer())
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1415` → after: `L3507-L3513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3507-L3513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3507-L3513) · [Before (L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1415)

```diff
-     Fz._V8PerformanceHack = new Fz(.5, .5, .5, .5), Fz._ZeroReadOnly = Fz.Zero();
+     let SE = !1;
+     var pE;
+     ! function(qq) {
+       qq[qq.Small = 0] = "Small", qq[qq.Medium = 1] = "Medium", qq[qq.Large = 2] = "Large", qq[qq.ExtraLarge = 3] = "ExtraLarge"
+     }(pE || (pE = {}));
+     const GE = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
+       LE = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", … [truncated]
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1417-L1505` → after: `L3515-L3577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3515-L3577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3515-L3577) · [Before (L1417-L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1417-L1505)

```diff
-       get x() {
-         return this._x
-       }
-       set x(zz) {
-         this._x = zz, this._isDirty = !0
-       }
-       get y() {
-         return this._y
-       }
-       set y(zz) {
-         this._y = zz, this._isDirty = !0
-       }
-       get z() {
-         return this._z
-       }
-       set z(zz) {
- ... (73 more removed lines; see GitHub link above)
+       get renderTransparentMeshes() {
+         return this._renderTransparentMeshes
+       }
+       set renderTransparentMeshes(qq) {
+         if (qq && this._enableMeshBlendTag && !this._scene.Ba().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
+         this._renderTransparentMeshes = qq
+       }
+       get normalsAreUnsigned() {
+         return this._normalsAreUnsigned
+       }
+       _linkPrePassRenderer(qq) {
+         if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
+         this._linkedWithPrePass = !0, this._prePassRenderer = qq, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
+       }
+       _unlinkPrePassRenderer() {
+         this._linkedWithPrePass = !1, this._createRenderTargets()
+ ... (47 more added lines; see GitHub link above)
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1507-L1508` → after: `L3579-L3580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3579-L3580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3579-L3580) · [Before (L1507-L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1507-L1508)

```diff
-       subtractToRef(zz, uz) {
-         return uz._x = this._x - zz._x, uz._y = this._y - zz._y, uz._z = this._z - zz._z, uz._w = this._w - zz._w, uz._isDirty = !0, uz
+       get enableDepth() {
+         return this._enableDepth
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1510-L1511` → after: `L3582-L3583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3582-L3583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3582-L3583) · [Before (L1510-L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1510-L1511)

```diff
-       subtractFromFloats(zz, uz, bz, Ez) {
-         return this.subtractFromFloatsToRef(zz, uz, bz, Ez, new Zz)
+       set enableDepth(qq) {
+         this._enableDepth = qq, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1513-L1514` → after: `L3585-L3586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3585-L3586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3585-L3586) · [Before (L1513-L1514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1513-L1514)

```diff
-       subtractFromFloatsToRef(zz, uz, bz, Ez, nz) {
-         return nz._x = this._x - zz, nz._y = this._y - uz, nz._z = this._z - bz, nz._w = this._w - Ez, nz._isDirty = !0, nz
+       get enableNormal() {
+         return this._enableNormal
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1516-L1517` → after: `L3588-L3589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3588-L3589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3588-L3589) · [Before (L1516-L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1516-L1517)

```diff
-       subtract(zz) {
-         return new Zz(this._x - zz._x, this._y - zz._y, this._z - zz._z, this._w - zz._w)
+       set enableNormal(qq) {
+         this._enableNormal = qq, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1519-L1520` → after: `L3591-L3592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3591-L3592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3591-L3592) · [Before (L1519-L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1519-L1520)

```diff
-       Qbz(zz) {
-         return this._x -= zz._x, this._y -= zz._y, this._z -= zz._z, this._w -= zz._w, this._isDirty = !0, this
+       get enablePosition() {
+         return this._enablePosition
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1522-L1523` → after: `L3594-L3595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3594-L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3594-L3595) · [Before (L1522-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1522-L1523)

```diff
-       scale(zz) {
-         return new Zz(this._x * zz, this._y * zz, this._z * zz, this._w * zz)
+       set enablePosition(qq) {
+         this._enablePosition = qq, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1525-L1526` → after: `L3597-L3598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3597-L3598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3597-L3598) · [Before (L1525-L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1525-L1526)

```diff
-       scaleToRef(zz, uz) {
-         return uz._x = this._x * zz, uz._y = this._y * zz, uz._z = this._z * zz, uz._w = this._w * zz, uz._isDirty = !0, uz
+       get enableVelocity() {
+         return this._enableVelocity
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1528-L1529` → after: `L3600-L3601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3600-L3601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3600-L3601) · [Before (L1528-L1529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1528-L1529)

```diff
-       scaleInPlace(zz) {
-         return this._x *= zz, this._y *= zz, this._z *= zz, this._w *= zz, this._isDirty = !0, this
+       set enableVelocity(qq) {
+         this._enableVelocity = qq, qq || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = qq
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1531-L1532` → after: `L3603-L3604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3603-L3604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3603-L3604) · [Before (L1531-L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1531-L1532)

```diff
-       scaleAndAddToRef(zz, uz) {
-         return uz._x += this._x * zz, uz._y += this._y * zz, uz._z += this._z * zz, uz._w += this._w * zz, uz._isDirty = !0, uz
+       get enableVelocityLinear() {
+         return this._enableVelocityLinear
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1534-L1536` → after: `L3606-L3607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3606-L3607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3606-L3607) · [Before (L1534-L1536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1534-L1536)

```diff
-       multiply(zz) {
-         const uz = new Zz(0, 0, 0, 1);
-         return this.multiplyToRef(zz, uz), uz
+       set enableVelocityLinear(qq) {
+         this._enableVelocityLinear = qq, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1538-L1543` → after: `L3609-L3610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3609-L3610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3609-L3610) · [Before (L1538-L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1538-L1543)

```diff
-       multiplyToRef(zz, uz) {
-         const bz = this._x * zz._w + this._y * zz._z - this._z * zz._y + this._w * zz._x,
-           Ez = -this._x * zz._z + this._y * zz._w + this._z * zz._x + this._w * zz._y,
-           nz = this._x * zz._y - this._y * zz._x + this._z * zz._w + this._w * zz._z,
-           iz = -this._x * zz._x - this._y * zz._y - this._z * zz._z + this._w * zz._w;
-         return uz.P_(bz, Ez, nz, iz), uz
+       get enableReflectivity() {
+         return this._enableReflectivity
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1545-L1546` → after: `L3612-L3613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3612-L3613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3612-L3613) · [Before (L1545-L1546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1545-L1546)

```diff
-       multiplyInPlace(zz) {
-         return this.multiplyToRef(zz, this)
+       set enableReflectivity(qq) {
+         this._enableReflectivity = qq, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1548-L1549` → after: `L3615-L3616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3615-L3616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3615-L3616) · [Before (L1548-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1548-L1549)

```diff
-       multiplyByFloats(zz, uz, bz, Ez) {
-         return this._x *= zz, this._y *= uz, this._z *= bz, this._w *= Ez, this._isDirty = !0, this
+       get enableScreenspaceDepth() {
+         return this._enableScreenspaceDepth
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1551-L1552` → after: `L3618-L3619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3618-L3619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3618-L3619) · [Before (L1551-L1552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1551-L1552)

```diff
-       divide(zz) {
-         throw new ReferenceError("Can not divide a quaternion")
+       set enableScreenspaceDepth(qq) {
+         this._enableScreenspaceDepth = qq, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1554-L1555` → after: `L3621-L3622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3621-L3622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3621-L3622) · [Before (L1554-L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1554-L1555)

```diff
-       divideToRef(zz, uz) {
-         throw new ReferenceError("Can not divide a quaternion")
+       get enableIrradiance() {
+         return this._enableIrradiance
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1557-L1558` → after: `L3624-L3625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3624-L3625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3624-L3625) · [Before (L1557-L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1557-L1558)

```diff
-       divideInPlace(zz) {
-         throw new ReferenceError("Can not divide a quaternion")
+       set enableIrradiance(qq) {
+         this._enableIrradiance = qq, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1560-L1561` → after: `L3627-L3628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3627-L3628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3627-L3628) · [Before (L1560-L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1560-L1561)

```diff
-       minimizeInPlace() {
-         throw new ReferenceError("Can not minimize a quaternion")
+       get enableObjectId() {
+         return this._enableObjectId
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1563-L1564` → after: `L3630-L3661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3630-L3661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3630-L3661) · [Before (L1563-L1564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1563-L1564)

```diff
-       minimizeInPlaceFromFloats() {
-         throw new ReferenceError("Can not minimize a quaternion")
+       set enableObjectId(qq) {
+         if (qq && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
+         if (qq && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
+         if (qq && !this._enableObjectId && !this._linkedWithPrePass) {
+           const qq = this._scene.Ba(),
+             Eq = Math.min(qq.getCaps().maxDrawBuffers ?? 1, 8),
+             gq = this._assignRenderTargetIndices()[0] + 1;
+           if (qq.getCaps().drawBuffersExtension && gq > Eq) throw new Error(`GeometryBufferRenderer: ${gq} color attachments were requested, but this engine supports at most ${Eq}`)
+         }
+         this._enableObjectId = qq, qq || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
+       }
+       get enableMeshBlendingTag() {
+         return this._enableMeshBlendTag
+       }
+       set enableMeshBlendingTag(qq) {
+         if (this._enableMeshBlendTag !== qq) {
+ ... (16 more added lines; see GitHub link above)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1566-L1567` → after: `L3663-L3664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3663-L3664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3663-L3664) · [Before (L1566-L1567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1566-L1567)

```diff
-       maximizeInPlace() {
-         throw new ReferenceError("Can not maximize a quaternion")
+       get PV() {
+         return this._scene
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1569-L1570` → after: `L3666-L3667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3666-L3667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3666-L3667) · [Before (L1569-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1569-L1570)

```diff
-       maximizeInPlaceFromFloats() {
-         throw new ReferenceError("Can not maximize a quaternion")
+       get ratio() {
+         return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1572-L1573` → after: `L3669-L3670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3669-L3670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3669-L3670) · [Before (L1572-L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1572-L1573)

```diff
-       nb() {
-         return this.negateToRef(new Zz)
+       get shaderLanguage() {
+         return this._shaderLanguage
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1575-L1576` → after: `L3672-L3958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3672-L3958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3672-L3958) · [Before (L1575-L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1575-L1576)

```diff
-       negateInPlace() {
-         return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
+       constructor(qq) {
+         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
+           Yq = arguments.length > 3 ? arguments[3] : void 0;
+         var lq;
+         this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, t … [truncated]
+           get: function() {
+             return this._geometryBufferRenderer
+           },
+           set: function(qq) {
+             qq && qq.isSupported && (this._geometryBufferRenderer = qq)
+           },
+           enumerable: !0,
+           configurable: !0
+         }), pq.i.prototype.enableGeometryBufferRenderer = function() {
+           let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+ ... (271 more added lines; see GitHub link above)
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1578-L1579` → after: `L3960-L3969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3960-L3969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3960-L3969) · [Before (L1578-L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1578-L1579)

```diff
-       negateToRef(zz) {
-         return zz._x = -this._x, zz._y = -this._y, zz._z = -this._z, zz._w = -this._w, zz._isDirty = !0, zz
+       _getRenderTargetDimensions() {
+         if ("object" === typeof this._ratioOrDimensions) return {
+           width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
+           height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
+         };
+         const qq = this._scene.Ba();
+         return {
+           width: Math.max(1, Math.floor(qq.getRenderWidth() * this._ratioOrDimensions)),
+           height: Math.max(1, Math.floor(qq.getRenderHeight() * this._ratioOrDimensions))
+         }
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1581-L1582` → after: `L3971-L3973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3971-L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3971-L3973) · [Before (L1581-L1582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1581-L1582)

```diff
-       zlz(zz, uz, bz, Ez) {
-         return this._x === zz && this._y === uz && this._z === bz && this._w === Ez
+       _copyBonesTransformationMatrices(qq, Eq) {
+         for (let gq = 0; gq < qq.length; gq++) Eq[gq] = qq[gq];
+         return Eq
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1584-L1585` → after: `L3975-L4001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR3975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L3975-L4001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L3975-L4001) · [Before (L1584-L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1584-L1585)

```diff
-       floorToRef(zz) {
-         throw new ReferenceError("Can not floor a quaternion")
+     }
+     JE.ForceGLSL = !1, JE.DEPTH_TEXTURE_TYPE = 0, JE.NORMAL_TEXTURE_TYPE = 1, JE.POSITION_TEXTURE_TYPE = 2, JE.VELOCITY_TEXTURE_TYPE = 3, JE.REFLECTIVITY_TEXTURE_TYPE = 4, JE.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, JE.VELOCITY_LINEAR_TEXTURE_TYPE = 6, JE.IRRADIANCE_TEXTURE_TYPE = 7,  … [truncated]
+       throw (0, jE.m)("GeometryBufferRendererSceneComponent")
+     };
+     var kE = gq(37171);
+     const RE = {
+       effect: null,
+       subMesh: null
+     };
+ 
+     function UE(qq) {
+       if ("number" === typeof qq) return 1;
+       if (qq instanceof Gq.p) return 2;
+       if (qq instanceof Gq.q || qq instanceof sq.d) return 3;
+       if (qq instanceof Gq.r || qq instanceof sq.g) return 4;
+       throw new Error("Unsupported OpenPBR property type.")
+ ... (11 more added lines; see GitHub link above)
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1587-L1588` → after: `L4003-L4004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR4003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L4003-L4004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L4003-L4004) · [Before (L1587-L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1587-L1588)

```diff
-       floor() {
-         throw new ReferenceError("Can not floor a quaternion")
+       constructor(qq, Eq) {
+         this.linkedProperties = {}, this.firstLinkedKey = "", this.name = qq, this.numComponents = Eq
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1590-L1591` → after: `L4006-L4012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR4006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L4006-L4012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L4006-L4012) · [Before (L1590-L1591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1590-L1591)

```diff
-       fractToRef(zz) {
-         throw new ReferenceError("Can not fract a quaternion")
+     }
+     FE._tmpArray = [0, 0, 0, 0];
+     class sE {
+       constructor(qq, Eq, gq, Yq) {
+         let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
+           Oq = arguments.length > 5 ? arguments[5] : void 0;
+         this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = qq, this.targetUniformName = gq, this.defaultValue = Eq, this.value = Eq, this.targetUniformComponentNum = Yq, this.targetUniformComponentOffset = lq, this.requiredDefine = Oq
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1593-L1594` → after: `L4014-L4015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR4014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L4014-L4015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L4014-L4015) · [Before (L1593-L1594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1593-L1594)

```diff
-       fract() {
-         throw new ReferenceError("Can not fract a quaternion")
+       get numComponents() {
+         return "number" === typeof this.defaultValue ? 1 : UE(this.defaultValue)
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1596-L1597` → after: `L4017-L4020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR4017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L4017-L4020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L4017-L4020) · [Before (L1596-L1597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1596-L1597)

```diff
-       conjugateToRef(zz) {
-         return zz.P_(-this._x, -this._y, -this._z, this._w), zz
+     }
+     class XE {
+       get samplerName() {
+         return this.samplerPrefix + "Sampler"
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1599-L1600` → after: `L4022-L4023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR4022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L4022-L4023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L4022-L4023) · [Before (L1599-L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1599-L1600)

```diff
-       conjugateInPlace() {
-         return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
+       get samplerInfoName() {
+         return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1602-L1603` → after: `L4025-L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR4025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L4025-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L4025-L4026) · [Before (L1602-L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1602-L1603)

```diff
-       conjugate() {
-         return new Zz(-this._x, -this._y, -this._z, this._w)
+       get samplerMatrixName() {
+         return this.samplerPrefix + "Matrix"
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1605-L1608` → after: `L4028-L4029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR4028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L4028-L4029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L4028-L4029) · [Before (L1605-L1608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1605-L1608)

```diff
-       invert() {
-         const zz = this.conjugate(),
-           uz = this.lengthSquared();
-         return 0 == uz || 1 == uz || zz.scaleInPlace(1 / uz), zz
+       constructor(qq, Eq, gq) {
+         this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = qq, this.samplerPrefix = Eq, this.textureDefine = gq
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1610-L1613` → after: `L4031-L4037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR4031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L4031-L4037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L4031-L4037) · [Before (L1610-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1610-L1613)

```diff
-       invertInPlace() {
-         this.conjugateInPlace();
-         const zz = this.lengthSquared();
-         return 0 == zz || 1 == zz || this.scaleInPlace(1 / zz), this
+     }
+     class wE extends((0, VE.d)((0, aE.b)(Jq.c))) {}
+     class KE extends(function(qq) {
+       return class extends qq {
+         constructor() {
+           super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBO … [truncated]
+         }
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1615-L1616` → after: `L4039-L4042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR4039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L4039-L4042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L4039-L4042) · [Before (L1615-L1616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1615-L1616)

```diff
-       lengthSquared() {
-         return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
+     }(wE)) {}
+     class CE extends((0, Xq.e)(KE)) {
+       constructor(qq) {
+         super(qq), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, th … [truncated]
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1618-L1619` → after: `L4044-L4045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR4044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L4044-L4045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L4044-L4045) · [Before (L1618-L1619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1618-L1619)

```diff
-       length() {
-         return Math.sqrt(this.lengthSquared())
+       reset() {
+         super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1621-L1622` → after: `L4047-L9333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR4047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L4047-L9333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L4047-L9333) · [Before (L1621-L1622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1621-L1622)

```diff
-       normalize() {
-         return this.normalizeFromLength(this.length())
+     }
+     class IE extends((0, dE.c)(Kq.b)) {}
+     let eE = (() => {
+         var qq, Eq, Yq, lq, mq, xq, Aq, cq, uq, Bq, Wq, Nq, aq, Vq, dq, jq, Hq, oq, Pq, Qq, yq, tq, rq, Zq, fq, Mq, Tq, pq, Jq, kq, Rq, Uq, Xq, Kq, Dq, qE, EE, gE, YE, lE, OE, mE, xE, AE, cE, aE, VE, dE, jE, HE, oE, PE, QE, yE, vE, hE, nE, bE, iE, ZE, fE, ME, TE, zE, SE, pE, GE,  … [truncated]
+         let ig, Zg, fg, Mg, Tg, zg, Sg, pg, Gg, Lg, Jg, kg, Rg, Ug, Fg, sg, Xg, wg, Kg, Cg, Ig, eg, Dg, qY, EY, gY, YY, lY, OY, mY, xY, AY, cY, uY, BY, WY, NY, aY, VY, dY, jY, HY, oY, PY, QY, yY, tY, rY, vY, hY, nY, bY, iY, ZY, fY, MY, TY, zY, SY, pY, GY, LY, JY, kY, RY, UY, FY,  … [truncated]
+           fl = [],
+           Ml = [],
+           Tl = [],
+           zl = [],
+           Sl = [],
+           pl = [],
+           Gl = [],
+           Ll = [],
+           Jl = [],
+           kl = [],
+           Rl = [],
+ ... (5271 more added lines; see GitHub link above)
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1624-L1625` → after: `L9335-L9336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR9335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L9335-L9336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L9335-L9336) · [Before (L1624-L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1624-L1625)

```diff
-       normalizeFromLength(zz) {
-         return 0 === zz || 1 === zz ? this : this.scaleInPlace(1 / zz)
+       set dashCount(qq) {
+         this._dashCount = qq, this._dashArray = 1 / qq
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1627-L1629` → after: `L9338-L9339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR9338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L9338-L9339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L9338-L9339) · [Before (L1627-L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1627-L1629)

```diff
-       normalizeToNew() {
-         const zz = new Zz(0, 0, 0, 1);
-         return this.normalizeToRef(zz), zz
+       get sizeAttenuation() {
+         return this._sizeAttenuation
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1631-L1633` → after: `L9341-L9342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR9341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L9341-L9342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L9341-L9342) · [Before (L1631-L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1631-L1633)

```diff
-       normalizeToRef(zz) {
-         const uz = this.length();
-         return 0 === uz || 1 === uz ? zz.P_(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / uz, zz)
+       set sizeAttenuation(qq) {
+         this._sizeAttenuation = qq, this.markAllDefinesAsDirty()
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1635-L1637` → after: `L9344-L9345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR9344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L9344-L9345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L9344-L9345) · [Before (L1635-L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1635-L1637)

```diff
-       toEulerAngles() {
-         const zz = dz.Zero();
-         return this.toEulerAnglesToRef(zz), zz
+       get color() {
+         return this._color
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1639-L1653` → after: `L9347-L9429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR9347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L9347-L9429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L9347-L9429) · [Before (L1639-L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1639-L1653)

```diff
-       toEulerAnglesToRef(zz) {
-         const uz = this._z,
-           bz = this._x,
-           Ez = this._y,
-           nz = this._w,
-           iz = Ez * uz - bz * nz,
-           lz = .4999999;
-         if (iz < -lz) zz._y = 2 * Math.atan2(Ez, nz), zz._x = Math.PI / 2, zz._z = 0, zz._isDirty = !0;
-         else if (iz > lz) zz._y = 2 * Math.atan2(Ez, nz), zz._x = -Math.PI / 2, zz._z = 0, zz._isDirty = !0;
-         else {
-           const lz = nz * nz,
-             Mz = uz * uz,
-             tz = bz * bz,
-             Hz = Ez * Ez;
-           zz._z = Math.atan2(2 * (bz * Ez + uz * nz), -Mz - tz + Hz + lz), zz._x = Math.asin(-2 * iz), zz._y = Math.atan2(2 * (uz * bz + Ez * nz), Mz - tz - Hz + lz), zz._isDirty = !0
+       set color(qq) {
+         this.setColor(qq)
+       }
+       setColor(qq) {
+         let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         null === this._color && null !== qq || null !== this._color && null === qq ? (this._color = qq, Eq || this.markAllDefinesAsDirty()) : this._color = qq
+       }
+       get colorsDistributionType() {
+         return this._colorsDistributionType
+       }
+       set colorsDistributionType(qq) {
+         this._colorsDistributionType = qq, this.markAllDefinesAsDirty()
+       }
+       get resolution() {
+         return this._resolution
+       }
+ ... (67 more added lines; see GitHub link above)
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1655` → after: `L9431-L9632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR9431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L9431-L9632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L9431-L9632) · [Before (L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1655)

```diff
-         return zz
+         lq.MJ.add((() => {
+           oY.DisposeEmptyColorsTexture()
+         }))
+       }
+       dispose() {
+         this._colorsTexture && this._colorsTexture !== aY.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
+       }
+       _setColorModeAndColorDistributionType() {
+         this.setVector2("grl_colorModeAndColorDistributionType", new Gq.p(this._colorMode, this._colorsDistributionType))
+       }
+       updateLazy() {
+         this._colors && this.setColors(this._colors, !1, !0)
+       }
+       get colors() {
+         return this._colors
+       }
+ ... (186 more added lines; see GitHub link above)
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1657-L1681` → after: `L9634-L9655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR9634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L9634-L9655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L9634-L9655) · [Before (L1657-L1681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1657-L1681)

```diff
-       toAlphaBetaGammaToRef(zz) {
-         const uz = this._z,
-           bz = this._x,
-           Ez = this._y,
-           nz = this._w,
-           iz = Math.sqrt(bz * bz + Ez * Ez),
-           lz = Math.sqrt(uz * uz + nz * nz),
-           Mz = 2 * Math.atan2(iz, lz),
-           tz = 2 * Math.atan2(uz, nz),
-           Hz = 2 * Math.atan2(Ez, bz),
-           Oz = (tz + Hz) / 2,
-           pz = (tz - Hz) / 2;
-         return zz.set(pz, Mz, Oz), zz
-       }
-       toRotationMatrix(zz) {
-         return Rz.FromQuaternionToRef(this, zz), zz
- ... (9 more removed lines; see GitHub link above)
+       get colorPointers() {
+         return this._colorPointers
+       }
+       set colorPointers(qq) {
+         this._colorPointers = qq, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(qq)
+       }
+       get greasedLineMaterial() {
+         if (this.material && this.material instanceof nY) return this.material;
+         const qq = this.material?.pluginManager?.getPlugin(QY.GREASED_LINE_MATERIAL_NAME);
+         return qq || void 0
+       }
+       get points() {
+         const qq = [];
+         return rY.b.DeepCopy(this._points, qq), qq
+       }
+       setPoints(qq, Eq) {
+ ... (6 more added lines; see GitHub link above)
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1683-L1684` → after: `L9657-L9663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR9657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L9657-L9663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L9657-L9663) · [Before (L1683-L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1683-L1684)

```diff
-           axis: zz,
-           angle: this.toAxisAngleToRef(zz)
+           points: this._points,
+           colorPointers: this._colorPointers,
+           lazy: this._lazy,
+           updatable: this._updatable,
+           uvs: this._uvs,
+           widths: this._widths,
+           ribbonOptions: this._options.ribbonOptions
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1687-L1691` → after: `L9666-L9833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR9666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L9666-L9833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L9666-L9833) · [Before (L1687-L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1687-L1691)

```diff
-       toAxisAngleToRef(zz) {
-         let uz;
-         const bz = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
-           Ez = this._w;
-         return bz > 0 ? (uz = 2 * Math.atan2(bz, Ez), zz.set(this._x / bz, this._y / bz, this._z / bz)) : (uz = 0, zz.set(1, 0, 0)), uz
+       serialize(qq) {
+         super.serialize(qq), qq.type = this.getClassName(), qq.lineOptions = this._createLineOptions()
+       }
+       _createVertexBuffers() {
+         let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const Eq = new tY.d;
+         return Eq.positions = this._vertexPositions, Eq.indices = this._indices, Eq.uvs = this._uvs, qq && (Eq.normals = [], tY.d.ComputeNormals(this._vertexPositions, this._indices, Eq.normals)), Eq.applyToMesh(this, this._options.updatable), Eq
+       }
+       _createOffsetsBuffer(qq) {
+         const Eq = this._scene.Ba(),
+           gq = new Lq.b(Eq, qq, this._updatable, 3);
+         this.setVerticesBuffer(gq.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = gq
+       }
+     }
+     class MY {
+       constructor(qq, Eq) {
+ ... (152 more added lines; see GitHub link above)
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1693` → after: `L9835-L9910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR9835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L9835-L9910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L9835-L9910) · [Before (L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1693)

```diff
-       static FromRotationMatrix(zz) {
+       get options() {
+         return this._options
+       }
+       static RegisterExtension(qq, Eq) {
+         let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
+         TY.UnregisterExtension(qq) && lq.Tools.Warn(`Extension with the name ${qq} already exists`), TY._ExtensionFactories[qq] = Eq;
+         const Yq = gq ?? 0;
+         TY._ExtensionOrders[qq] = Yq;
+         let Oq = TY._ExtensionNames.length;
+         for (let lq = 0; lq < TY._ExtensionNames.length; lq++) {
+           const qq = TY._ExtensionNames[lq];
+           if (Yq < TY._ExtensionOrders[qq]) {
+             Oq = lq;
+             break
+           }
+         }
+ ... (60 more added lines; see GitHub link above)
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1695` → after: `L9912-L9957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR9912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L9912-L9957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L9912-L9957) · [Before (L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1695)

```diff
-         return Zz.FromRotationMatrixToRef(zz, uz), uz
+         return Bq.files[Yq] = new Blob([uq.getOutputData()], {
+           type: "application/octet-stream"
+         }), Bq
+       }
+       _setNodeTransformation(qq, Eq, gq) {
+         if (Eq.getPivotPoint().equalsWithEpsilon(Sg, Mg.c) || lq.Tools.Warn("Pivot points are not supported in the glTF serializer"), !Eq.position.equalsWithEpsilon(Sg, Mg.c)) {
+           const lq = Yq.TmpVectors.Na[0].WG(Eq.position);
+           gq && Fg(lq), qq.translation = lq.bYq()
+         }
+         Eq.rc.equalsWithEpsilon(Gg, Mg.c) || (qq.scale = Eq.rc.bYq());
+         const Oq = Eq.rotationQuaternion?.clone() || Yq.Quaternion.FromEulerAngles(Eq.rotation.x, Eq.rotation.y, Eq.rotation.z);
+         Oq.equalsWithEpsilon(pg, Mg.c) || (gq && sg(Oq), qq.rotation = Oq.normalize().bYq())
+       }
+       _setCameraTransformation(qq, Eq, gq) {
+         const lq = Yq.TmpVectors.Na[0],
+           Oq = Yq.TmpVectors.Quaternion[0],
+ ... (30 more added lines; see GitHub link above)
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1697-L1708` → after: `L9959-L10027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR9959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L9959-L10027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L9959-L10027) · [Before (L1697-L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1697-L1708)

```diff
-       static FromRotationMatrixToRef(zz, uz) {
-         const bz = zz.m,
-           Ez = bz[0],
-           nz = bz[4],
-           iz = bz[8],
-           lz = bz[1],
-           Mz = bz[5],
-           tz = bz[9],
-           Hz = bz[2],
-           Oz = bz[6],
-           pz = bz[10],
-           dz = Ez + Mz + pz;
+       _exportAndAssignCameras() {
+         const qq = Array.from(this._camerasMap.values());
+         for (const Eq of qq) {
+           const qq = this._nodesCameraMap.get(Eq);
+           if (void 0 !== qq) {
+             this._cameras.push(Eq);
+             for (const Eq of qq) Eq.camera = this._cameras.length - 1
+           }
+         }
+       }
+       _listAvailableSkeletons() {
+         for (const qq of this._babylonScene.skeletons) {
+           if (qq.bones.length <= 0) continue;
+           const Eq = {
+             joints: []
+           };
+ ... (53 more added lines; see GitHub link above)
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1710` → after: `L10029-L10100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR10029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L10029-L10100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L10029-L10100) · [Before (L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1710)

```diff
-         return dz > 0 ? (Fz = .5 / Math.sqrt(dz + 1), uz._w = .25 / Fz, uz._x = (Oz - tz) * Fz, uz._y = (iz - Hz) * Fz, uz._z = (lz - nz) * Fz, uz._isDirty = !0) : Ez > Mz && Ez > pz ? (Fz = 2 * Math.sqrt(1 + Ez - Mz - pz), uz._w = (Oz - tz) / Fz, uz._x = .25 * Fz, uz._y = (nz +  … [truncated]
+         if (lq && !this._options.includeCoordinateSystemConversionNodes)
+           for (const cq of this._babylonScene.animationGroups)
+             for (const qq of cq.targetedAnimations) {
+               const Eq = qq.target;
+               Eq instanceof Bq.e && !Eq.parent && (Oq ?? (Oq = new Set)).add(Eq)
+             }
+         for (const cq of this._babylonScene.rootNodes) {
+           const qq = cq.animations,
+             mq = !!qq && qq.length > 0 || Oq?.has(cq);
+           lq && !this._options.includeCoordinateSystemConversionNodes && zg(cq, this._babylonScene.useRightHandedSystem) && !mq ? Yq.push(...cq.getChildren()) : this._babylonScene.useRightHandedSystem ? Eq.push(cq) : gq.push(cq)
+         }
+         this._listAvailableCameras(), this._listAvailableSkeletons();
+         const mq = new MY(!0, !1);
+         qq.nodes.push(...await this._exportNodesAsync(gq, mq));
+         const xq = new MY(!1, !1);
+         qq.nodes.push(...await this._exportNodesAsync(Eq, xq));
+ ... (56 more added lines; see GitHub link above)
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1712-L1713` → after: `L10102-L10105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR10102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L10102-L10105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L10102-L10105) · [Before (L1712-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1712-L1713)

```diff
-       static Dot(zz, uz) {
-         return zz._x * uz._x + zz._y * uz._y + zz._z * uz._z + zz._w * uz._w
+       _setNodeExtension(qq, Eq, gq) {
+         const Yq = this._nodes[qq];
+         if (!Yq) throw new Error(`Cannot write ${Eq}: glTF node ${qq} does not exist.`);
+         Yq.extensions || (Yq.extensions = {}), Yq.extensions[Eq] = gq
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1715-L1718` → after: `L10107-L10109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR10107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L10107-L10109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L10107-L10109) · [Before (L1715-L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1715-L1718)

```diff
-       static AreClose(zz, uz) {
-         let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
-         const Ez = Zz.Dot(zz, uz);
-         return 1 - Ez * Ez <= bz
+       _shouldExportNode(qq) {
+         let Eq = this._shouldExportNodeMap.get(qq);
+         return void 0 === Eq && (Eq = this._options.shouldExportNode(qq), this._shouldExportNodeMap.set(qq, Eq)), Eq
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1720-L1722` → after: `L10111-L10115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR10111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L10111-L10115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L10111-L10115) · [Before (L1720-L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1720-L1722)

```diff
-       static SmoothToRef(zz, uz, bz, Ez, nz) {
-         let iz = 0 === Ez ? 1 : bz / Ez;
-         return iz = (0, Mz.Clamp)(iz, 0, 1), Zz.SlerpToRef(zz, uz, iz, nz), nz
+       async _exportNodesAsync(qq, Eq) {
+         const gq = new Array;
+         this._exportBuffers(qq, Eq);
+         for (const Yq of qq) await this._exportNodeAsync(Yq, gq, Eq);
+         return gq
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1724-L1725` → after: `L10117-L10583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR10117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L10117-L10583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L10117-L10583) · [Before (L1724-L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1724-L1725)

```diff
-       static Zero() {
-         return new Zz(0, 0, 0, 0)
+       _collectBuffers(qq, Eq, gq, Yq, lq) {
+         if (this._shouldExportNode(qq) && qq instanceof Wq.d && qq.geometry) {
+           const Oq = qq.geometry.getVertexBuffers();
+           if (Oq)
+             for (const Yq in Oq) {
+               if (!Rg(Yq)) continue;
+               const mq = Oq[Yq];
+               lq.setHasVertexColorAlpha(mq, qq.hasVertexAlpha);
+               const xq = mq._buffer,
+                 Aq = Eq.get(xq) || [];
+               Eq.set(xq, Aq), -1 === Aq.indexOf(mq) && Aq.push(mq);
+               const cq = gq.get(mq) || [];
+               gq.set(mq, cq), -1 === cq.indexOf(qq) && cq.push(qq)
+             }
+           const mq = qq.morphTargetManager;
+           if (mq)
+ ... (451 more added lines; see GitHub link above)
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1727-L1728` → after: `L10585-L10852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR10585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L10585-L10852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L10585-L10852) · [Before (L1727-L1728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1727-L1728)

```diff
-       static Inverse(zz) {
-         return new Zz(-zz._x, -zz._y, -zz._z, zz._w)
+     }
+     let LY = !1;
+ 
+     function JY() {
+       LY || (LY = !0, TY.RegisterExtension(SY, (qq => new GY(qq))))
+     }
+     gq(40236);
+     JY();
+     var kY = gq(41607);
+ 
+     function RY(qq, Eq, gq, Yq) {
+       const lq = qq;
+       let Oq = null,
+         mq = null,
+         xq = null,
+         Aq = null;
+ ... (252 more added lines; see GitHub link above)
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1730-L1731` → after: `L10854-L10904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR10854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L10854-L10904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L10854-L10904) · [Before (L1730-L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1730-L1731)

```diff
-       static InverseToRef(zz, uz) {
-         return uz.set(-zz._x, -zz._y, -zz._z, zz._w), uz
+       constructor(qq) {
+         this.name = CY, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === qq.options.meshCompressionMethod && KY.DefaultAvailable
+       }
+       dispose() {}
+       postExportMeshPrimitive(qq, Eq, gq) {
+         if (!this.enabled) return;
+         if (4 !== qq.mode && 5 !== qq.mode) return void nq.b.Warn("Cannot compress primitive with mode " + qq.mode + ".");
+         const Yq = [],
+           lq = [];
+         let Oq = null;
+         if (void 0 !== qq.indices) {
+           const mq = gq[qq.indices],
+             xq = Eq.getBufferView(mq);
+           Oq = Eq.getData(xq).slice(), Yq.push(xq), lq.push(mq)
+         }
+         const mq = [];
+ ... (35 more added lines; see GitHub link above)
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1733-L1734` → after: `L10906-L10928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR10906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L10906-L10928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L10906-L10928) · [Before (L1733-L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1733-L1734)

```diff
-       static Identity() {
-         return new Zz(0, 0, 0, 1)
+     }
+     let eY = !1;
+ 
+     function DY() {
+       eY || (eY = !0, TY.RegisterExtension(CY, (qq => new IY(qq))))
+     }
+     DY();
+     var ql = gq(41329);
+     const El = "KHR_lights_punctual",
+       gl = {
+         name: "",
+         color: [1, 1, 1],
+         intensity: 1,
+         range: Number.MAX_VALUE
+       },
+       Yl = {
+ ... (7 more added lines; see GitHub link above)
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1736-L1737` → after: `L10930-L10931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR10930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L10930-L10931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L10930-L10931) · [Before (L1736-L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1736-L1737)

```diff
-       static IsIdentity(zz) {
-         return zz && 0 === zz._x && 0 === zz._y && 0 === zz._z && 1 === zz._w
+       dispose() {
+         this._lights = null
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1739-L1740` → after: `L10933-L10934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR10933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L10933-L10934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L10933-L10934) · [Before (L1739-L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1739-L1740)

```diff
-       static RotationAxis(zz, uz) {
-         return Zz.RotationAxisToRef(zz, uz, new Zz)
+       get wasUsed() {
+         return !!this._lights
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1742-L1745` → after: `L10936-L10937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR10936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L10936-L10937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L10936-L10937) · [Before (L1742-L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1742-L1745)

```diff
-       static RotationAxisToRef(zz, uz, bz) {
-         bz._w = Math.cos(uz / 2);
-         const Ez = Math.sin(uz / 2) / zz.length();
-         return bz._x = zz._x * Ez, bz._y = zz._y * Ez, bz._z = zz._z * Ez, bz._isDirty = !0, bz
+       onExporting() {
+         this._exporter._glTF.extensions[El] = this._lights
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1747-L1748` → after: `L10939-L10983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR10939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L10939-L10983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L10939-L10983) · [Before (L1747-L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1747-L1748)

```diff
-       static FromArray(zz, uz) {
-         return uz || (uz = 0), new Zz(zz[uz], zz[uz + 1], zz[uz + 2], zz[uz + 3])
+       async postExportNodeAsync(qq, Eq, gq, Yq, lq) {
+         return await new Promise((Oq => {
+           if (!(gq instanceof uY.c)) return void Oq(Eq);
+           const mq = gq.getTypeID() == uY.c.LIGHTTYPEID_POINTLIGHT ? "point" : gq.getTypeID() == uY.c.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : gq.getTypeID() == uY.c.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
+           if (!mq || !(gq instanceof ql.e)) return nq.b.Warn(`${qq}: Light ${gq.name} is not supported in ${El}`), void Oq(Eq);
+           if (gq.falloffType !== uY.c.FALLOFF_GLTF && nq.b.Warn(`${qq}: Light falloff for ${gq.name} does not match the ${El} specification!`), !gq.position.Cmq(0, 0, 0)) {
+             const qq = Gq.o.Na[0].WG(gq.position);
+             lq && Fg(qq), Eq.translation = qq.bYq()
+           }
+           if ("point" !== mq) {
+             const qq = gq.direction.normalizeToRef(Gq.o.Na[0]);
+             lq && Fg(qq);
+             const Yq = Gq.h.FromUnitVectorsToRef(ll, qq, Gq.o.Quaternion[0]);
+             Gq.h.IsIdentity(Yq) || (Eq.rotation = Yq.bYq())
+           }
+           const xq = {
+ ... (29 more added lines; see GitHub link above)
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1750-L1751` → after: `L10985-L11018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR10985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L10985-L11018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L10985-L11018) · [Before (L1750-L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1750-L1751)

```diff
-       static FromArrayToRef(zz, uz, bz) {
-         return bz._x = zz[uz], bz._y = zz[uz + 1], bz._z = zz[uz + 2], bz._w = zz[uz + 3], bz._isDirty = !0, bz
+     }
+     let ml = !1;
+ 
+     function xl() {
+       ml || (ml = !0, TY.RegisterExtension(El, (qq => new Ol(qq))))
+     }
+     xl();
+     const Al = "KHR_interactivity";
+     class cl {
+       constructor(qq) {
+         this._exporter = qq, this.name = Al, this.enabled = !!qq.options.khrInteractivity, this.required = qq.options.khrInteractivity?.required ?? !1
+       }
+       dispose() {
+         this._exporter = null
+       }
+       get wasUsed() {
+ ... (18 more added lines; see GitHub link above)
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1753-L1754` → after: `L11020-L11090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR11020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L11020-L11090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L11020-L11090) · [Before (L1753-L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1753-L1754)

```diff
-       static FromFloatsToRef(zz, uz, bz, Ez, nz) {
-         return nz.P_(zz, uz, bz, Ez), nz
+     }
+     let ul = !1;
+ 
+     function Bl() {
+       ul || (ul = !0, TY.RegisterExtension(Al, (qq => new cl(qq)), 200))
+     }
+     Bl();
+     const Wl = "EXT_lights_area",
+       Nl = {
+         name: "",
+         color: [1, 1, 1],
+         intensity: 1,
+         size: 1
+       },
+       al = {
+         aspect: 1
+ ... (55 more added lines; see GitHub link above)
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1756-L1758` → after: `L11092-L11183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR11092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L11092-L11183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L11092-L11183) · [Before (L1756-L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1756-L1758)

```diff
-       static FromEulerAngles(zz, uz, bz) {
-         const Ez = new Zz;
-         return Zz.RotationYawPitchRollToRef(uz, zz, bz, Ez), Ez
+     }
+     let jl = !1;
+ 
+     function Hl() {
+       jl || (jl = !0, TY.RegisterExtension(Wl, (qq => new dl(qq))))
+     }
+     Hl();
+     const ol = "KHR_materials_anisotropy";
+     class Pl {
+       constructor(qq) {
+         this.name = ol, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = qq
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+ ... (76 more added lines; see GitHub link above)
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1760-L1761` → after: `L11185-L11200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR11185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L11185-L11200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L11185-L11200) · [Before (L1760-L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1760-L1761)

```diff
-       static FromEulerAnglesToRef(zz, uz, bz, Ez) {
-         return Zz.RotationYawPitchRollToRef(uz, zz, bz, Ez), Ez
+     }
+     let Ql = !1;
+ 
+     function yl() {
+       Ql || (Ql = !0, TY.RegisterExtension(ol, (qq => new Pl(qq))))
+     }
+     yl();
+     const tl = "KHR_materials_clearcoat";
+ 
+     function rl(qq, Eq) {
+       const gq = new iq.d(Eq.name, Eq.ZJ());
+       return gq._texture = qq, gq.coordinatesIndex = Eq.coordinatesIndex, Eq instanceof iq.d && (gq.uOffset = Eq.uOffset, gq.vOffset = Eq.vOffset, gq.uScale = Eq.uScale, gq.vScale = Eq.vScale, gq.wAng = Eq.wAng), gq.wrapU = Eq.wrapU, gq.wrapV = Eq.wrapV, gq
+     }
+     class vl {
+       constructor(qq) {
+         this.name = tl, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = qq
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1763-L1765` → after: `L11202-L11275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR11202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L11202-L11275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L11202-L11275) · [Before (L1763-L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1763-L1765)

```diff
-       static FromEulerVector(zz) {
-         const uz = new Zz;
-         return Zz.RotationYawPitchRollToRef(zz._y, zz._x, zz._z, uz), uz
+       dispose() {
+         for (const qq of Object.keys(this._mergedTexturesMap)) {
+           this._mergedTexturesMap[qq].dispose()
+         }
+         this._mergedTexturesMap = {};
+         for (const qq of Object.keys(this._cachedInternalTexturesMap)) {
+           this._cachedInternalTexturesMap[qq].dispose()
+         }
+         this._cachedInternalTexturesMap = {}
+       }
+       get wasUsed() {
+         return this._wasUsed
+       }
+       async postExportMaterialAdditionalTexturesAsync(qq, Eq, gq) {
+         const Yq = [];
+         if (gq instanceof yE) {
+ ... (58 more added lines; see GitHub link above)
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1767-L1768` → after: `L11277-L11298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR11277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L11277-L11298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L11277-L11298) · [Before (L1767-L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1767-L1768)

```diff
-       static FromEulerVectorToRef(zz, uz) {
-         return Zz.RotationYawPitchRollToRef(zz._y, zz._x, zz._z, uz), uz
+     }
+     let hl = !1;
+ 
+     function nl() {
+       hl || (hl = !0, TY.RegisterExtension(tl, (qq => new vl(qq))))
+     }
+     nl();
+     const bl = "KHR_materials_coat";
+ 
+     function il(qq) {
+       const Eq = qq.coatRoughnessAnisotropyTexture,
+         gq = qq.geometryCoatTangentTexture;
+       return `${Eq&&Eq.getInternalTexture()?Eq.getInternalTexture().uniqueId:"NoStrength"}_${gq&&gq.getInternalTexture()?gq.getInternalTexture().uniqueId:"NoTangent"}`
+     }
+ 
+     function Zl(qq, Eq) {
+ ... (6 more added lines; see GitHub link above)
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1770-L1773` → after: `L11300-L11430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR11300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L11300-L11430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L11300-L11430) · [Before (L1770-L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1770-L1773)

```diff
-       static FromUnitVectorsToRef(zz, uz, bz) {
-         let nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ez.b;
-         const iz = dz.Dot(zz, uz) + 1;
-         return iz < nz ? Math.abs(zz.x) > Math.abs(zz.z) ? bz.set(-zz.y, zz.x, 0, 0) : bz.set(0, -zz.z, zz.y, 0) : (dz.CrossToRef(zz, uz, wz.ER[0]), bz.set(wz.ER[0].x, wz.ER[0].y, wz.ER[0].z, iz)), bz.normalize()
+       dispose() {
+         for (const qq of Object.keys(this._mergedTexturesMap)) {
+           this._mergedTexturesMap[qq].dispose()
+         }
+         this._mergedTexturesMap = {};
+         for (const qq of Object.keys(this._cachedInternalTexturesMap)) {
+           this._cachedInternalTexturesMap[qq].dispose()
+         }
+         this._cachedInternalTexturesMap = {}
+       }
+       get wasUsed() {
+         return this._wasUsed
+       }
+       async postExportMaterialAdditionalTexturesAsync(qq, Eq, gq) {
+         const Yq = [];
+         if (gq instanceof yE) {
+ ... (115 more added lines; see GitHub link above)
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1775-L1777` → after: `L11432-L12927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR11432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L11432-L12927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L11432-L12927) · [Before (L1775-L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1775-L1777)

```diff
-       static RotationYawPitchRoll(zz, uz, bz) {
-         const Ez = new Zz;
-         return Zz.RotationYawPitchRollToRef(zz, uz, bz, Ez), Ez
+     }
+     let Ml = !1;
+ 
+     function Tl() {
+       Ml || (Ml = !0, TY.RegisterExtension(bl, (qq => new fl(qq))))
+     }
+     Tl();
+     let zl = (() => {
+       var qq, Eq, gq, Yq, lq, mq, xq, Aq, cq, uq, Bq, Wq, Nq, aq, Vq, dq, jq, Hq, oq, Pq, Qq, yq, tq, rq, nq, bq, iq, Zq, fq, Mq, zq, Sq, pq, Gq, Lq, Jq, kq, Rq, Uq, Fq, Xq, wq, Kq, Cq, Iq, eq, Dq, qE, EE, gE, YE, lE, OE, mE, xE, AE, cE, uE, BE, WE, NE, aE, VE, dE, jE, HE, oE;
+       let PE, QE, rE, vE, hE, nE, bE, iE, ZE, fE, ME, TE, zE, SE, pE, GE, LE, JE, kE, RE, UE, FE, sE, XE, wE, KE, CE, IE, eE, DE, qg, Eg, gg, Yg, lg, Og, mg, xg, Ag, cg, ug, Bg, Wg, Ng, ag, Vg, dg, jg, Hg, og, Pg, Qg, yg, tg, rg, vg, hg, ng, bg, ig, Zg, fg, Mg, Tg, zg, Sg, pg, Gg … [truncated]
+         Jg = [],
+         kg = [],
+         Rg = [],
+         Ug = [],
+         Fg = [],
+         sg = [],
+ ... (1480 more added lines; see GitHub link above)
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1779-L1793` → after: `L12929-L12931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR12929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L12929-L12931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L12929-L12931) · [Before (L1779-L1793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1779-L1793)

```diff
-       static RotationYawPitchRollToRef(zz, uz, bz, Ez) {
-         const nz = .5 * bz,
-           iz = .5 * uz,
-           lz = .5 * zz,
-           Mz = Math.sin(nz),
-           tz = Math.cos(nz),
-           Hz = Math.sin(iz),
-           Oz = Math.cos(iz),
-           pz = Math.sin(lz),
-           dz = Math.cos(lz);
-         return Ez._x = dz * Hz * tz + pz * Oz * Mz, Ez._y = pz * Oz * tz - dz * Hz * Mz, Ez._z = dz * Oz * Mz - pz * Hz * tz, Ez._w = dz * Oz * tz + pz * Hz * Mz, Ez._isDirty = !0, Ez
-       }
-       static RotationAlphaBetaGamma(zz, uz, bz) {
-         const Ez = new Zz;
-         return Zz.RotationAlphaBetaGammaToRef(zz, uz, bz, Ez), Ez
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1795-L1799` → after: `L12933-L12939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR12933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L12933-L12939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L12933-L12939) · [Before (L1795-L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1795-L1799)

```diff
-       static RotationAlphaBetaGammaToRef(zz, uz, bz, Ez) {
-         const nz = .5 * (bz + zz),
-           iz = .5 * (bz - zz),
-           lz = .5 * uz;
-         return Ez._x = Math.cos(iz) * Math.sin(lz), Ez._y = Math.sin(iz) * Math.sin(lz), Ez._z = Math.sin(nz) * Math.cos(lz), Ez._w = Math.cos(nz) * Math.cos(lz), Ez._isDirty = !0, Ez
+       async postExportMaterialAdditionalTexturesAsync(qq, Eq, gq) {
+         const Yq = [];
+         if (gq instanceof zl && this._isExtensionEnabled(gq)) {
+           const Eq = pl(qq, gq);
+           return Eq && Yq.push(Eq), gq.subSurface.translucencyColorTexture && Yq.push(gq.subSurface.translucencyColorTexture), Yq
+         }
+         return Yq
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1801-L1803` → after: `L12941-L12965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR12941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L12941-L12965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L12941-L12965) · [Before (L1801-L1803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1801-L1803)

```diff
-       static RotationQuaternionFromAxis(zz, uz, bz) {
-         const Ez = new Zz(0, 0, 0, 0);
-         return Zz.RotationQuaternionFromAxisToRef(zz, uz, bz, Ez), Ez
+       _isExtensionEnabled(qq) {
+         if (qq.unlit) return !1;
+         const Eq = qq.subSurface;
+         return !!Eq.isTranslucencyEnabled && (!qq.unlit && !Eq.useAlbedoToTintTranslucency && Eq.useGltfStyleTextures && 1 === Eq.volumeIndexOfRefraction && 0 === Eq.minimumThickness && 0 === Eq.maximumThickness)
+       }
+       postExportMaterialAsync(qq, Eq, gq) {
+         return new Promise((Yq => {
+           if (gq instanceof zl && this._isExtensionEnabled(gq)) {
+             this._wasUsed = !0;
+             const Yq = gq.subSurface,
+               lq = pl(qq, gq),
+               Oq = 0 == Yq.translucencyIntensity ? void 0 : Yq.translucencyIntensity,
+               mq = this._exporter._materialExporter.getTextureInfo(lq) ?? void 0,
+               xq = !Yq.translucencyColor || Yq.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : Yq.translucencyColor.bYq(),
+               Aq = this._exporter._materialExporter.getTextureInfo(Yq.translucencyColorTexture) ?? void 0,
+               cq = {
+ ... (9 more added lines; see GitHub link above)
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1805-L1807` → after: `L12967-L12998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR12967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L12967-L12998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L12967-L12998) · [Before (L1805-L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1805-L1807)

```diff
-       static RotationQuaternionFromAxisToRef(zz, uz, bz, Ez) {
-         const nz = Kz.Matrix[0];
-         return zz = zz.normalizeToRef(Kz.ER[0]), uz = uz.normalizeToRef(Kz.ER[1]), bz = bz.normalizeToRef(Kz.ER[2]), Rz.FromXYZAxesToRef(zz, uz, bz, nz), Zz.FromRotationMatrixToRef(nz, Ez), Ez
+     }
+     let Ll = !1;
+ 
+     function Jl() {
+       Ll || (Ll = !0, TY.RegisterExtension(Sl, (qq => new Gl(qq))))
+     }
+     Jl();
+     const kl = "KHR_materials_dispersion";
+     class Rl {
+       constructor() {
+         this.name = kl, this.enabled = !0, this.required = !1, this._wasUsed = !1
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+ ... (16 more added lines; see GitHub link above)
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1809-L1811` → after: `L13000-L13029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13000-L13029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13000-L13029) · [Before (L1809-L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1809-L1811)

```diff
-       static FromLookDirectionLH(zz, uz) {
-         const bz = new Zz;
-         return Zz.FromLookDirectionLHToRef(zz, uz, bz), bz
+     }
+     let Ul = !1;
+ 
+     function Fl() {
+       Ul || (Ul = !0, TY.RegisterExtension(kl, (() => new Rl)))
+     }
+     Fl();
+     const sl = "KHR_materials_emissive_strength";
+     class Xl {
+       constructor() {
+         this.name = sl, this.enabled = !0, this.required = !1, this._wasUsed = !1
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+ ... (14 more added lines; see GitHub link above)
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1813-L1815` → after: `L13031-L13066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13031-L13066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13031-L13066) · [Before (L1813-L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1813-L1815)

```diff
-       static FromLookDirectionLHToRef(zz, uz, bz) {
-         const Ez = Kz.Matrix[0];
-         return Rz.LookDirectionLHToRef(zz, uz, Ez), Zz.FromRotationMatrixToRef(Ez, bz), bz
+     }
+     let wl = !1;
+ 
+     function Kl() {
+       wl || (wl = !0, TY.RegisterExtension(sl, (() => new Xl)))
+     }
+     Kl();
+     const Cl = "KHR_materials_ior";
+     class Il {
+       constructor() {
+         this.name = Cl, this.enabled = !0, this.required = !1, this._wasUsed = !1
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+ ... (20 more added lines; see GitHub link above)
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1817-L1819` → after: `L13068-L13123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13068-L13123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13068-L13123) · [Before (L1817-L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1817-L1819)

```diff
-       static FromLookDirectionRH(zz, uz) {
-         const bz = new Zz;
-         return Zz.FromLookDirectionRHToRef(zz, uz, bz), bz
+     }
+     let el = !1;
+ 
+     function Dl() {
+       el || (el = !0, TY.RegisterExtension(Cl, (() => new Il)))
+     }
+     Dl();
+     const qO = "KHR_materials_iridescence";
+     class EO {
+       constructor(qq) {
+         this.name = qO, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = qq
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+ ... (40 more added lines; see GitHub link above)
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1821-L1823` → after: `L13125-L13156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13125-L13156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13125-L13156) · [Before (L1821-L1823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1821-L1823)

```diff
-       static FromLookDirectionRHToRef(zz, uz, bz) {
-         const Ez = Kz.Matrix[0];
-         return Rz.LookDirectionRHToRef(zz, uz, Ez), Zz.FromRotationMatrixToRef(Ez, bz)
+     }
+     let gO = !1;
+ 
+     function YO() {
+       gO || (gO = !0, TY.RegisterExtension(qO, (qq => new EO(qq))))
+     }
+     YO();
+     const lO = "KHR_materials_sheen";
+     class OO {
+       constructor(qq) {
+         this.name = lO, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = qq
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+ ... (16 more added lines; see GitHub link above)
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1825-L1827` → after: `L13158-L13173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13158-L13173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13158-L13173) · [Before (L1825-L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1825-L1827)

```diff
-       static Slerp(zz, uz, bz) {
-         const Ez = Zz.Identity();
-         return Zz.SlerpToRef(zz, uz, bz, Ez), Ez
+     }
+     let mO = !1;
+ 
+     function xO() {
+       mO || (mO = !0, TY.RegisterExtension(lO, (qq => new OO(qq))))
+     }
+     xO();
+     const AO = "KHR_materials_fuzz";
+ 
+     function cO(qq, Eq) {
+       const gq = new iq.d(Eq.name, Eq.ZJ());
+       return gq._texture = qq, gq.coordinatesIndex = Eq.coordinatesIndex, Eq instanceof iq.d && (gq.uOffset = Eq.uOffset, gq.vOffset = Eq.vOffset, gq.uScale = Eq.uScale, gq.vScale = Eq.vScale, gq.wAng = Eq.wAng), gq.wrapU = Eq.wrapU, gq.wrapV = Eq.wrapV, gq
+     }
+     class uO {
+       constructor(qq) {
+         this.name = AO, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = qq
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1829-L1851` → after: `L13175-L13231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13175-L13231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13175-L13231) · [Before (L1829-L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1829-L1851)

```diff
-       static SlerpToRef(zz, uz, bz, Ez) {
-         let nz, iz, lz = zz._x * uz._x + zz._y * uz._y + zz._z * uz._z + zz._w * uz._w,
-           Mz = !1;
-         if (lz < 0 && (Mz = !0, lz = -lz), lz > .999999) iz = 1 - bz, nz = Mz ? -bz : bz;
-         else {
-           const zz = Math.acos(lz),
-             uz = 1 / Math.sin(zz);
-           iz = Math.sin((1 - bz) * zz) * uz, nz = Mz ? -Math.sin(bz * zz) * uz : Math.sin(bz * zz) * uz
-         }
-         return Ez._x = iz * zz._x + nz * uz._x, Ez._y = iz * zz._y + nz * uz._y, Ez._z = iz * zz._z + nz * uz._z, Ez._w = iz * zz._w + nz * uz._w, Ez._isDirty = !0, Ez
-       }
-       static Hermite(zz, uz, bz, Ez, nz) {
-         const iz = nz * nz,
-           lz = nz * iz,
-           Mz = 2 * lz - 3 * iz + 1,
-           tz = -2 * lz + 3 * iz,
- ... (7 more removed lines; see GitHub link above)
+       dispose() {
+         for (const qq of Object.keys(this._mergedTexturesMap)) {
+           this._mergedTexturesMap[qq].dispose()
+         }
+         this._mergedTexturesMap = {};
+         for (const qq of Object.keys(this._cachedInternalTexturesMap)) {
+           this._cachedInternalTexturesMap[qq].dispose()
+         }
+         this._cachedInternalTexturesMap = {}
+       }
+       get wasUsed() {
+         return this._wasUsed
+       }
+       async postExportMaterialAdditionalTexturesAsync(qq, Eq, gq) {
+         if (gq instanceof eE) {
+           const qq = [];
+ ... (41 more added lines; see GitHub link above)
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1853-L1855` → after: `L13233-L13294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13233-L13294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13233-L13294) · [Before (L1853-L1855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1853-L1855)

```diff
-       static Hermite1stDerivative(zz, uz, bz, Ez, nz) {
-         const iz = new Zz;
-         return this.Hermite1stDerivativeToRef(zz, uz, bz, Ez, nz, iz), iz
+     }
+     let BO = !1;
+ 
+     function WO() {
+       BO || (BO = !0, TY.RegisterExtension(AO, (qq => new uO(qq))))
+     }
+     WO();
+     const NO = "KHR_materials_specular";
+     class aO {
+       constructor(qq) {
+         this.name = NO, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = qq
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+ ... (46 more added lines; see GitHub link above)
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1857-L1859` → after: `L13296-L13306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13296-L13306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13296-L13306) · [Before (L1857-L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1857-L1859)

```diff
-       static Hermite1stDerivativeToRef(zz, uz, bz, Ez, nz, iz) {
-         const lz = nz * nz;
-         return iz._x = 6 * (lz - nz) * zz._x + (3 * lz - 4 * nz + 1) * uz._x + 6 * (-lz + nz) * bz._x + (3 * lz - 2 * nz) * Ez._x, iz._y = 6 * (lz - nz) * zz._y + (3 * lz - 4 * nz + 1) * uz._y + 6 * (-lz + nz) * bz._y + (3 * lz - 2 * nz) * Ez._y, iz._z = 6 * (lz - nz) * zz._z + ( … [truncated]
+     }
+     let VO = !1;
+ 
+     function dO() {
+       VO || (VO = !0, TY.RegisterExtension(NO, (qq => new aO(qq))))
+     }
+     dO();
+     const jO = "KHR_materials_transmission";
+     class HO {
+       constructor(qq) {
+         this.name = jO, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = qq
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1861-L1863` → after: `L13308-L13310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13308-L13310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13308-L13310) · [Before (L1861-L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1861-L1863)

```diff
-       static Normalize(zz) {
-         const uz = Zz.Zero();
-         return Zz.NormalizeToRef(zz, uz), uz
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1865-L1866` → after: `L13312-L13317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13312-L13317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13312-L13317) · [Before (L1865-L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1865-L1866)

```diff
-       static NormalizeToRef(zz, uz) {
-         return zz.normalizeToRef(uz), uz
+       async postExportMaterialAdditionalTexturesAsync(qq, Eq, gq) {
+         const Yq = [];
+         if (gq instanceof zl) {
+           if (this._isExtensionEnabled(gq)) return gq.subSurface.refractionIntensityTexture && gq.subSurface.useGltfStyleTextures && Yq.push(gq.subSurface.refractionIntensityTexture), Yq
+         } else gq instanceof eE && (gq.transmissionWeight > 0 && gq.transmissionWeightTexture && (Yq.push(gq.transmissionWeightTexture), gq.transmissionColorTexture && Yq.push(gq.transmissionColorTexture)), gq.subsurfaceWeight > 0 && gq.subsurfaceWeightTexture && Yq.push(gq.subsu … [truncated]
+         return Yq
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1868-L1870` → after: `L13319-L13325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13319-L13325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13319-L13325) · [Before (L1868-L1870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1868-L1870)

```diff
-       static Clamp(zz, uz, bz) {
-         const Ez = new Zz;
-         return Zz.ClampToRef(zz, uz, bz, Ez), Ez
+       _isExtensionEnabled(qq) {
+         if (qq instanceof eE && !qq.unlit) return qq.transmissionWeight > 0 || qq.subsurfaceWeight > 0;
+         if (qq instanceof zl && !qq.unlit) {
+           const Eq = qq.subSurface;
+           return Eq.isRefractionEnabled && void 0 != Eq.refractionIntensity && 0 != Eq.refractionIntensity || null != Eq.refractionIntensityTexture && Eq.useGltfStyleTextures
+         }
+         return !1
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1872-L1873` → after: `L13327-L13362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13327-L13362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13327-L13362) · [Before (L1872-L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1872-L1873)

```diff
-       static ClampToRef(zz, uz, bz, Ez) {
-         return Ez.P_((0, Mz.Clamp)(zz.x, uz.x, bz.x), (0, Mz.Clamp)(zz.y, uz.y, bz.y), (0, Mz.Clamp)(zz.z, uz.z, bz.z), (0, Mz.Clamp)(zz.w, uz.w, bz.w))
+       async postExportMaterialAsync(qq, Eq, gq) {
+         if (!this._isExtensionEnabled(gq)) return Eq;
+         if (gq instanceof zl) {
+           this._wasUsed = !0;
+           const Yq = gq.subSurface,
+             lq = {
+               transmissionFactor: 0 === Yq.refractionIntensity ? void 0 : Yq.refractionIntensity
+             };
+           if (Yq.refractionIntensityTexture)
+             if (Yq.useGltfStyleTextures) {
+               this._exporter._materialNeedsUVsSet.add(gq);
+               const qq = this._exporter._materialExporter.getTextureInfo(Yq.refractionIntensityTexture);
+               qq && (lq.transmissionTexture = qq)
+             } else nq.b.Warn(`${qq}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
+           Eq.extensions || (Eq.extensions = {}), Eq.extensions[jO] = lq
+         } else if (gq instanceof eE) {
+ ... (20 more added lines; see GitHub link above)
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1875-L1878` → after: `L13364-L13375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13364-L13375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13364-L13375) · [Before (L1875-L1878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1875-L1878)

```diff
-       static Random() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         return new Zz((0, Mz.RandomRange)(zz, uz), (0, Mz.RandomRange)(zz, uz), (0, Mz.RandomRange)(zz, uz), (0, Mz.RandomRange)(zz, uz))
+     }
+     let oO = !1;
+ 
+     function PO() {
+       oO || (oO = !0, TY.RegisterExtension(jO, (qq => new HO(qq))))
+     }
+     PO();
+     var QO = gq(40010);
+     const yO = "KHR_materials_unlit";
+     class tO {
+       constructor() {
+         this.name = yO, this.enabled = !0, this.required = !1, this._wasUsed = !1
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1880-L1883` → after: `L13377-L13378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13377-L13378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13377-L13378) · [Before (L1880-L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1880-L1883)

```diff
-       static RandomToRef() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         return (arguments.length > 2 ? arguments[2] : void 0).P_((0, Mz.RandomRange)(zz, uz), (0, Mz.RandomRange)(zz, uz), (0, Mz.RandomRange)(zz, uz), (0, Mz.RandomRange)(zz, uz))
+       get wasUsed() {
+         return this._wasUsed
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1885-L1886` → after: `L13380-L13385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13380-L13385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13380-L13385) · [Before (L1885-L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1885-L1886)

```diff
-       static Minimize() {
-         throw new ReferenceError("Quaternion.Minimize does not make sense")
+       dispose() {}
+       postExportMaterialAsync(qq, Eq, gq) {
+         return new Promise((qq => {
+           let Yq = !1;
+           gq instanceof zl ? Yq = gq.unlit : gq instanceof QO.g && (Yq = gq.disableLighting), Yq && (this._wasUsed = !0, null == Eq.extensions && (Eq.extensions = {}), Eq.extensions[yO] = {}), qq(Eq)
+         }))
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1888-L1889` → after: `L13387-L13397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13387-L13397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13387-L13397) · [Before (L1888-L1889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1888-L1889)

```diff
-       static Maximize() {
-         throw new ReferenceError("Quaternion.Maximize does not make sense")
+     }
+     let rO = !1;
+ 
+     function vO() {
+       rO || (rO = !0, TY.RegisterExtension(yO, (() => new tO)))
+     }
+     vO();
+     const hO = "KHR_materials_volume";
+     class nO {
+       constructor(qq) {
+         this.name = hO, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = qq
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1891-L1892` → after: `L13399-L13401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13399-L13401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13399-L13401) · [Before (L1891-L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1891-L1892)

```diff
-       static Distance(zz, uz) {
-         return Math.sqrt(Zz.DistanceSquared(zz, uz))
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1894-L1899` → after: `L13403-L13408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13403-L13408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13403-L13408) · [Before (L1894-L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1894-L1899)

```diff
-       static DistanceSquared(zz, uz) {
-         const bz = zz.x - uz.x,
-           Ez = zz.y - uz.y,
-           nz = zz.z - uz.z,
-           iz = zz.w - uz.w;
-         return bz * bz + Ez * Ez + nz * nz + iz * iz
+       async postExportMaterialAdditionalTexturesAsync(qq, Eq, gq) {
+         const Yq = [];
+         if (gq instanceof zl) {
+           if (this._isExtensionEnabled(gq)) return gq.subSurface.thicknessTexture && Yq.push(gq.subSurface.thicknessTexture), Yq
+         } else gq instanceof eE && (gq.transmissionWeight > 0 || gq.subsurfaceWeight > 0) && gq.geometryThicknessTexture && Yq.push(gq.geometryThicknessTexture);
+         return Yq
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1901-L1902` → after: `L13410-L13474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13410-L13474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13410-L13474) · [Before (L1901-L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1901-L1902)

```diff
-       static Center(zz, uz) {
-         return Zz.CenterToRef(zz, uz, Zz.Zero())
+       _isExtensionEnabled(qq) {
+         if (qq.unlit) return !1;
+         const Eq = qq.subSurface;
+         return !(!Eq.isRefractionEnabled && !Eq.isTranslucencyEnabled) && (void 0 != Eq.maximumThickness && 0 != Eq.maximumThickness || void 0 != Eq.tintColorAtDistance && Eq.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != Eq.tintColor && Eq.tintColor != sq.d.White() … [truncated]
+       }
+       _hasTexturesExtension(qq) {
+         return null != qq.subSurface.thicknessTexture
+       }
+       postExportMaterialAsync(qq, Eq, gq) {
+         return new Promise((qq => {
+           if (gq instanceof zl && this._isExtensionEnabled(gq)) {
+             this._wasUsed = !0;
+             const qq = gq.subSurface,
+               Yq = {
+                 thicknessFactor: 0 == qq.maximumThickness ? void 0 : qq.maximumThickness,
+                 thicknessTexture: this._exporter._materialExporter.getTextureInfo(qq.thicknessTexture) ?? void 0,
+ ... (49 more added lines; see GitHub link above)
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1904-L1905` → after: `L13476-L13542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13476-L13542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13476-L13542) · [Before (L1904-L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1904-L1905)

```diff
-       static CenterToRef(zz, uz, bz) {
-         return bz.P_((zz.x + uz.x) / 2, (zz.y + uz.y) / 2, (zz.z + uz.z) / 2, (zz.w + uz.w) / 2)
+     }
+     let bO = !1;
+ 
+     function iO() {
+       bO || (bO = !0, TY.RegisterExtension(hO, (qq => new nO(qq))))
+     }
+     iO();
+     const ZO = "KHR_materials_volume_scatter";
+     class fO {
+       constructor(qq) {
+         this.name = ZO, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = qq
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+ ... (51 more added lines; see GitHub link above)
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1908` → after: `L13545-L13551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13545-L13551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13545-L13551) · [Before (L1908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1908)

```diff
-     Zz._V8PerformanceHack = new Zz(.5, .5, .5, .5);
+     let MO = !1;
+ 
+     function TO() {
+       MO || (MO = !0, TY.RegisterExtension(ZO, (qq => new fO(qq)), 101))
+     }
+     TO();
+     const zO = "KHR_materials_diffuse_roughness";
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1910-L1911` → after: `L13553-L13578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13553-L13578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13553-L13578) · [Before (L1910-L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1910-L1911)

```diff
-       static get Use64Bits() {
-         return iz.b.MatrixUse64Bits
+       constructor(qq) {
+         this.name = zO, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = qq
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+       async postExportMaterialAdditionalTexturesAsync(qq, Eq, gq) {
+         const Yq = [];
+         if (gq instanceof yE) {
+           if (gq._baseDiffuseRoughness) return gq._baseDiffuseRoughnessTexture && Yq.push(gq._baseDiffuseRoughnessTexture), Yq
+         } else if (gq instanceof eE && gq.baseDiffuseRoughness) return gq.baseDiffuseRoughnessTexture && Yq.push(gq.baseDiffuseRoughnessTexture), Yq;
+         return []
+       }
+       postExportMaterialAsync(qq, Eq, gq) {
+         return new Promise((qq => {
+ ... (10 more added lines; see GitHub link above)
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1913-L1914` → after: `L13580-L13590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13580-L13590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13580-L13590) · [Before (L1913-L1914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1913-L1914)

```diff
-       get m() {
-         return this._m
+     }
+     let pO = !1;
+ 
+     function GO() {
+       pO || (pO = !0, TY.RegisterExtension(zO, (qq => new SO(qq))))
+     }
+     GO();
+     const LO = "KHR_materials_openpbr";
+     class JO {
+       constructor() {
+         this.name = LO, this.enabled = !0, this.required = !1, this._wasUsed = !1
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1916-L1917` → after: `L13592-L13594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13592-L13594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13592-L13594) · [Before (L1916-L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1916-L1917)

```diff
-       markAsUpdated() {
-         this.updateFlag = tz.o._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1919-L1923` → after: `L13596-L13599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13596-L13599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13596-L13599) · [Before (L1919-L1923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1919-L1923)

```diff
-       _updateIdentityStatus(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           Ez = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-         this._isIdentity = zz, this._isIdentity3x2 = zz || bz, this._isIdentityDirty = !this._isIdentity && uz, this._isIdentity3x2Dirty = !this._isIdentity3x2 && Ez
+       postExportMaterialAsync(qq, Eq, gq) {
+         return new Promise((qq => {
+           gq instanceof eE && (this._wasUsed = !0, Eq.extensions = Eq.extensions || {}, Eq.extensions[LO] = {}), qq(Eq)
+         }))
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1926-L1964` → after: `L13611-L13639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13611-L13639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13611-L13639) · [Before (L1926-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1926-L1964)

```diff
-         this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, iz.b.MatrixTrackPrecisionChange && iz.b.MatrixTrackedMatrices.push(this), this._m = new iz.b.MatrixCurrentType(16), this.markAsUpdated()
-       }
-       isIdentity() {
-         if (this._isIdentityDirty) {
-           this._isIdentityDirty = !1;
-           const zz = this._m;
-           this._isIdentity = 1 === zz[0] && 0 === zz[1] && 0 === zz[2] && 0 === zz[3] && 0 === zz[4] && 1 === zz[5] && 0 === zz[6] && 0 === zz[7] && 0 === zz[8] && 0 === zz[9] && 1 === zz[10] && 0 === zz[11] && 0 === zz[12] && 0 === zz[13] && 0 === zz[14] && 1 === zz[15]
-         }
-         return this._isIdentity
-       }
-       isIdentityAs3x2() {
-         return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 != … [truncated]
-       }
-       determinant() {
-         if (!0 === this._isIdentity) return 1;
-         const zz = this._m,
- ... (23 more removed lines; see GitHub link above)
+         this.name = UO, this.enabled = !0, this.required = !1, this._wasUsed = !1
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+       postExportTexture(qq, Eq, gq) {
+         if (gq.ZJ() || rE.f.Warn(`${qq}: "scene" is not defined for Babylon texture ${gq.name}!`), (0 !== gq.uAng || 0 !== gq.vAng) && (rE.f.Warn(`${qq}: Texture ${gq.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== gq.uRotationCenter || 0 !== gq.vRotatio … [truncated]
+         const Yq = {};
+         let lq = !1;
+         if (0 === gq.uOffset && 0 === gq.vOffset || (Yq.offset = [gq.uOffset, gq.vOffset], lq = !0), 1 === gq.uScale && 1 === gq.vScale || (Yq.scale = [gq.uScale, gq.vScale], lq = !0), 0 !== gq.wAng) {
+           if (0 !== gq.uRotationCenter || 0 !== gq.vRotationCenter) {
+             if (gq.homogeneousRotationInUVTransform && gq.uScale !== gq.vScale) return void rE.f.Warn(`${qq}: Texture ${gq.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${UO}.`);
+             rE.f.Warn(`${qq}: Texture ${gq.name} with non-origin rotation center will be exported using an adjusted offset with ${UO}.`), Yq.offset = function(qq) {
+               const {
+                 uOffset: Eq,
+ ... (13 more added lines; see GitHub link above)
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1966-L1975` → after: `L13641-L13652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13641-L13652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13641-L13652) · [Before (L1966-L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1966-L1975)

```diff
-       toString() {
-         return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
-       }
-       toArray() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         if (!zz) return this._m;
-         const bz = this._m;
-         for (let Ez = 0; Ez < 16; Ez++) zz[uz + Ez] = bz[Ez];
-         return this
+     }
+     let sO = !1;
+ 
+     function XO() {
+       sO || (sO = !0, TY.RegisterExtension(UO, (() => new FO)))
+     }
+     XO();
+     var wO = gq(39799);
+     const KO = "KHR_texture_basisu";
+     class CO {
+       get wasUsed() {
+         return this._wasUsed
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1977-L1978` → after: `L13654-L13665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13654-L13665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13654-L13665) · [Before (L1977-L1978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1977-L1978)

```diff
-       obz() {
-         return this._m
+       constructor(qq) {
+         this.name = KO, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = qq
+       }
+       dispose() {}
+       postExportTexture(qq, Eq) {
+         const gq = this._exporter._textures[Eq.index],
+           Yq = gq.source;
+         if (void 0 === Yq) return;
+         const lq = this._exporter._images[Yq];
+         "image/ktx2" === (lq.mimeType || (0, wO.m)(lq.uri)) && (gq.source = void 0, gq.extensions || (gq.extensions = {}), gq.extensions[KO] = {
+           source: Yq
+         }, this._wasUsed = !0)
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1980-L1982` → after: `L13667-L13677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13667-L13677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13667-L13677) · [Before (L1980-L1982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1980-L1982)

```diff
-       Fuz(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return Rz.FromArrayToRef(zz, uz, this)
+     }
+     let IO = !1;
+ 
+     function eO() {
+       IO || (IO = !0, TY.RegisterExtension(KO, (qq => new CO(qq))))
+     }
+     eO();
+     const DO = "EXT_texture_webp";
+     class qm {
+       get wasUsed() {
+         return this._wasUsed
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1984-L1986` → after: `L13679-L13690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13679-L13690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13679-L13690) · [Before (L1984-L1986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1984-L1986)

```diff
-       P_() {
-         for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
-         return Rz.FromArrayToRef(uz, 0, this)
+       constructor(qq) {
+         this.name = DO, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = qq
+       }
+       dispose() {}
+       postExportTexture(qq, Eq) {
+         const gq = this._exporter._textures[Eq.index],
+           Yq = gq.source;
+         if (void 0 === Yq) return;
+         const lq = this._exporter._images[Yq];
+         "image/webp" === (lq.mimeType || (0, wO.m)(lq.uri)) && (gq.source = void 0, gq.extensions || (gq.extensions = {}), gq.extensions[DO] = {
+           source: Yq
+         }, this._wasUsed = !0)
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1988-L1991` → after: `L13692-L13702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13692-L13702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13692-L13702) · [Before (L1988-L1991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1988-L1991)

```diff
-       set() {
-         const zz = this._m;
-         for (let uz = 0; uz < 16; uz++) zz[uz] = uz < 0 || arguments.length <= uz ? void 0 : arguments[uz];
-         return this.markAsUpdated(), this
+     }
+     let Em = !1;
+ 
+     function gm() {
+       Em || (Em = !0, TY.RegisterExtension(DO, (qq => new qm(qq))))
+     }
+     gm();
+     const Ym = "EXT_texture_avif";
+     class lm {
+       get wasUsed() {
+         return this._wasUsed
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1993-L1996` → after: `L13704-L13715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13704-L13715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13704-L13715) · [Before (L1993-L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1993-L1996)

```diff
-       Vk(zz) {
-         const uz = this._m;
-         for (let bz = 0; bz < 16; bz++) uz[bz] = zz;
-         return this.markAsUpdated(), this
+       constructor(qq) {
+         this.name = Ym, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = qq
+       }
+       dispose() {}
+       postExportTexture(qq, Eq) {
+         const gq = this._exporter._textures[Eq.index],
+           Yq = gq.source;
+         if (void 0 === Yq) return;
+         const lq = this._exporter._images[Yq];
+         "image/avif" === (lq.mimeType || (0, wO.m)(lq.uri)) && (gq.source = void 0, gq.extensions || (gq.extensions = {}), gq.extensions[Ym] = {
+           source: Yq
+         }, this._wasUsed = !0)
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L1998-L1999` → after: `L13717-L13791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13717-L13791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13717-L13791) · [Before (L1998-L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L1998-L1999)

```diff
-       invert() {
-         return this.invertToRef(this), this
+     }
+     let Om = !1;
+ 
+     function mm() {
+       Om || (Om = !0, TY.RegisterExtension(Ym, (qq => new lm(qq))))
+     }
+     mm();
+     class xm {
+       static CreateSTL(qq) {
+         let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
+           lq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           Oq = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
+           mq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           xq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+           Aq = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
+ ... (59 more added lines; see GitHub link above)
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2001-L2002` → after: `L13793-L13813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13793-L13813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13793-L13813) · [Before (L2001-L2002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2001-L2002)

```diff
-       reset() {
-         return Rz.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
+     }
+ 
+     function Am(qq, Eq) {
+       let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
+         Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       const lq = [];
+       for (let Oq = 0; Oq < qq.length / gq; Oq++) {
+         const mq = qq[Oq * gq] * (Yq ? -1 : 1),
+           xq = qq[Oq * gq + 1],
+           Aq = qq[Oq * gq + 2];
+         lq.push(`(${mq.toPrecision(Eq.precision)}, ${xq.toPrecision(Eq.precision)}, ${Aq.toPrecision(Eq.precision)})`)
+       }
+       return lq.join(", ")
+     }
+ 
+     function cm(qq, Eq) {
+ ... (5 more added lines; see GitHub link above)
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2004-L2052` → after: `L13815-L13860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13815-L13860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13815-L13860) · [Before (L2004-L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2004-L2052)

```diff
-       add(zz) {
-         const uz = new Rz;
-         return this.addToRef(zz, uz), uz
-       }
-       addToRef(zz, uz) {
-         const bz = this._m,
-           Ez = uz._m,
-           nz = zz.m;
-         for (let iz = 0; iz < 16; iz++) Ez[iz] = bz[iz] + nz[iz];
-         return uz.markAsUpdated(), uz
-       }
-       addToSelf(zz) {
-         const uz = this._m,
-           bz = zz.m;
-         return uz[0] += bz[0], uz[1] += bz[1], uz[2] += bz[2], uz[3] += bz[3], uz[4] += bz[4], uz[5] += bz[5], uz[6] += bz[6], uz[7] += bz[7], uz[8] += bz[8], uz[9] += bz[9], uz[10] += bz[10], uz[11] += bz[11], uz[12] += bz[12], uz[13] += bz[13], uz[14] += bz[14], uz[15] += bz[15 … [truncated]
-       }
- ... (33 more removed lines; see GitHub link above)
+       return gq.join(", ")
+     }
+ 
+     function um(qq, Eq, gq, Yq) {
+       const lq = qq.getVerticesData(uq.f.PositionKind),
+         Oq = qq.getVerticesData(uq.f.NormalKind);
+       if (lq && Oq) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${gq}"\n\t\tint[] faceVertexCounts = [${function(qq){const Eq=qq.iYq()?.length?qq.getTotalIndices():qq.getTotalVertices();return Array(Eq/3).fill(3).join(", ")}(qq)}]\n\t\tint[] faceVer … [truncated]
+       n\ tcolor3f[] primvars: displayColor = [$ {
+         Am(Yq, Eq, Yq.length / qq.getTotalVertices())
+       }](\n\ t\ tinterpolation = "vertex"\
+         n\ t\ t)`),gq}(qq,Eq)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
+     }
+ 
+     function Bm(qq, Eq, gq, Yq) {
+       return `\n        def "Geometry"\n        {\n        ${um(qq,Eq,gq,Yq)}\n        }\n        `
+     }
+ ... (30 more added lines; see GitHub link above)
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2054-L2061` → after: `L13862-L13997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13862-L13997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13862-L13997) · [Before (L2054-L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2054-L2061)

```diff
-       subtractFromFloatsToRef() {
-         for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
-         const Ez = uz.pop(),
-           nz = this._m,
-           iz = Ez._m,
-           lz = uz;
-         for (let Mz = 0; Mz < 16; Mz++) iz[Mz] = nz[Mz] - lz[Mz];
-         return Ez.markAsUpdated(), Ez
+     }
+ 
+     function jm(qq) {
+       return `(${qq.x}, ${qq.y})`
+     }
+ 
+     function Hm(qq) {
+       return `(${qq.r}, ${qq.g}, ${qq.b})`
+     }
+ 
+     function om(qq) {
+       return "image/jpeg" === qq || "image/png" === qq
+     }
+ 
+     function Pm(qq, Eq, gq, lq, Oq, mq) {
+       const xq = qq.getInternalTexture().uniqueId + "_" + qq.invertY,
+ ... (120 more added lines; see GitHub link above)
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2063-L2064` → after: `L13999-L14002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR13999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L13999-L14002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L13999-L14002) · [Before (L2063-L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2063-L2064)

```diff
-       invertToRef(zz) {
-         return !0 === this._isIdentity ? (Rz.IdentityToRef(zz), zz) : ((0, tz.h)(this, zz.obz()) ? zz.markAsUpdated() : zz.euz(this), zz)
+       return Eq.determinant() < 0 && lq.Tools.Warn(`Mesh ${qq.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
+         matrix: Eq,
+         windingOrder: Yq === Oq.e.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
+         convertToRightHanded: mq
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2066-L2067` → after: `L14004-L14076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14004-L14076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14004-L14076) · [Before (L2066-L2067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2066-L2067)

```diff
-       addAtIndex(zz, uz) {
-         return this._m[zz] += uz, this.markAsUpdated(), this
+     }
+     async function tm(qq, Eq, gq) {
+       const Oq = {
+         fflateUrl: "https://unpkg.com/fflate@0.8.2",
+         includeAnchoringProperties: !0,
+         anchoringType: "plane",
+         planeAnchoringAlignment: "horizontal",
+         modelFileName: "model.usda",
+         precision: 5,
+         exportCamera: !1,
+         cameraSensorWidth: 35,
+         ...Eq
+       };
+       "undefined" === typeof fflate && await lq.Tools.LoadScriptAsync(Oq.fflateUrl);
+       const mq = {};
+       mq[Oq.modelFileName] = null;
+ ... (57 more added lines; see GitHub link above)
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2069-L2070` → after: `L14078-L14092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14078-L14092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14078-L14092) · [Before (L2069-L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2069-L2070)

```diff
-       multiplyAtIndex(zz, uz) {
-         return this._m[zz] *= uz, this.markAsUpdated(), this
+       let uq = 0;
+       for (const Yq in mq) {
+         const qq = mq[Yq];
+         if (!qq) continue;
+         uq += 34 + Yq.length;
+         const Eq = 63 & uq;
+         if (4 !== Eq) {
+           const gq = new Uint8Array(64 - Eq);
+           mq[Yq] = [qq, {
+             extra: {
+               12345: gq
+             }
+           }]
+         }
+         uq = qq.length
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2072-L2073` → after: `L14094-L14143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14094-L14143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14094-L14143) · [Before (L2072-L2073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2072-L2073)

```diff
-       setTranslationFromFloats(zz, uz, bz) {
-         return this._m[12] = zz, this._m[13] = uz, this._m[14] = bz, this.markAsUpdated(), this
+       return fflate.zipSync(mq, {
+         level: 0
+       })
+     }
+     var rm = gq(40851);
+     class hm {
+       static Export(qq) {
+         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
+           gq = arguments.length > 2 ? arguments[2] : void 0;
+         if (!qq || 0 === qq.bones.length) throw new Error("Invalid or empty skeleton provided");
+         let Yq = Eq;
+         Eq && 0 !== Eq.length || (Yq = qq.animations.map((qq => qq.name)));
+         let lq = null;
+         for (const cq of Yq) {
+           const Eq = qq.getAnimationRange(cq);
+           Eq && (lq = lq ? new rm.d("animation-range", Math.min(lq.from, Eq.from), Math.max(lq.to, Eq.to)) : Eq)
+ ... (34 more added lines; see GitHub link above)
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2075-L2076` → after: `L14145-L14162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14145-L14162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14145-L14162) · [Before (L2075-L2076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2075-L2076)

```diff
-       addTranslationFromFloats(zz, uz, bz) {
-         return this._m[12] += zz, this._m[13] += uz, this._m[14] += bz, this.markAsUpdated(), this
+       static _ExportHierarchy(qq, Eq) {
+         let gq = "";
+         const Yq = "    ".repeat(Eq);
+         for (const lq of qq) {
+           const qq = lq.bone;
+           if (this._IsEndSite(lq)) {
+             gq += `${Yq}End Site\n`, gq += `${Yq}{\n`;
+             const Eq = this._GetBoneOffset(qq);
+             gq += `${Yq}    OFFSET ${Eq.x.toFixed(6)} ${Eq.y.toFixed(6)} ${Eq.z.toFixed(6)}\n`, gq += `${Yq}}\n`
+           } else {
+             gq += `${0===Eq?"ROOT":`${Yq}JOINT`} ${qq.name}\n`, gq += `${Yq}{\n`;
+             const Oq = this._GetBoneOffset(qq);
+             gq += `${Yq}    OFFSET ${Oq.x.toFixed(6)} ${Oq.y.toFixed(6)} ${Oq.z.toFixed(6)}\n`;
+             const mq = [];
+             lq.hasPositionChannels && mq.push("Xposition", "Yposition", "Zposition"), lq.hasRotationChannels && mq.push("Zrotation", "Xrotation", "Yrotation"), mq.length > 0 && (gq += `${Yq}    CHANNELS ${mq.length} ${mq.join(" ")}\n`), lq.children.length > 0 && (gq += this._Expo … [truncated]
+           }
+ ... (2 more added lines; see GitHub link above)
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2078-L2079` → after: `L14164-L14165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14164-L14165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14164-L14165) · [Before (L2078-L2079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2078-L2079)

```diff
-       setTranslation(zz) {
-         return this.setTranslationFromFloats(zz._x, zz._y, zz._z)
+       static _IsEndSite(qq) {
+         return 0 === qq.children.length
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2081-L2082` → after: `L14167-L14173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14167-L14173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14167-L14173) · [Before (L2081-L2082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2081-L2082)

```diff
-       getTranslation() {
-         return new dz(this._m[12], this._m[13], this._m[14])
+       static _GetBoneOffset(qq) {
+         try {
+           if (!qq.getParent()) return qq.getRestMatrix().getTranslation();
+           return qq.getLocalMatrix().getTranslation()
+         } catch (Eq) {
+           return Yq.Na.Zero()
+         }
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2084-L2085` → after: `L14175-L14181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14175-L14181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14175-L14181) · [Before (L2084-L2085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2084-L2085)

```diff
-       getTranslationToRef(zz) {
-         return zz.x = this._m[12], zz.y = this._m[13], zz.z = this._m[14], zz
+       static _ExportMotionData(qq, Eq, gq, Yq) {
+         let lq = "";
+         for (let Oq = 0; Oq < Eq; Oq++) {
+           const Eq = [];
+           this._CollectFrameValues(qq, Oq + gq, Eq, Yq), lq += Eq.map((qq => qq.toFixed(6))).join(" ") + "\n"
+         }
+         return lq
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2087-L2089` → after: `L14183-L14196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14183-L14196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14183-L14196) · [Before (L2087-L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2087-L2089)

```diff
-       removeRotationAndScaling() {
-         const zz = this.m;
-         return Rz.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, zz[12], zz[13], zz[14], zz[15], this), this._updateIdentityStatus(0 === zz[12] && 0 === zz[13] && 0 === zz[14] && 1 === zz[15]), this
+       static _CollectFrameValues(qq, Eq, gq, Yq) {
+         for (const lq of qq)
+           if (!this._IsEndSite(lq)) {
+             if (lq.hasPositionChannels) {
+               const qq = this._GetPositionAtFrameIndex(lq.positionKeys, Eq);
+               gq.push(qq.x, qq.y, qq.z)
+             }
+             if (lq.hasRotationChannels) {
+               const qq = this._GetRotationAtFrameIndex(lq.rotationKeys, Eq),
+                 Yq = this._QuaternionToEuler(qq);
+               gq.push(Yq.z, Yq.x, Yq.y)
+             }
+             lq.children.length > 0 && this._CollectFrameValues(lq.children, Eq, gq, Yq)
+           }
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2091-L2094` → after: `L14198-L14200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14198-L14200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14198-L14200) · [Before (L2091-L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2091-L2094)

```diff
-       euz(zz) {
-         zz.copyToArray(this._m);
-         const uz = zz;
-         return this.updateFlag = uz.updateFlag, this._updateIdentityStatus(uz._isIdentity, uz._isIdentityDirty, uz._isIdentity3x2, uz._isIdentity3x2Dirty), this
+       static _GetPositionAtFrameIndex(qq, Eq) {
+         if (0 === qq.length) return Yq.Na.Zero();
+         return qq[Math.max(0, Math.min(Eq, qq.length - 1))].value.clone()
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2096-L2098` → after: `L14202-L14204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14202-L14204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14202-L14204) · [Before (L2096-L2098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2096-L2098)

```diff
-       copyToArray(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return (0, tz.d)(this, zz, uz), this
+       static _GetRotationAtFrameIndex(qq, Eq) {
+         if (0 === qq.length) return Yq.Quaternion.Identity();
+         return qq[Math.max(0, Math.min(Eq, qq.length - 1))].value.clone()
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2100-L2102` → after: `L14206-L14212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14206-L14212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14206-L14212) · [Before (L2100-L2102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2100-L2102)

```diff
-       multiply(zz) {
-         const uz = new Rz;
-         return this.multiplyToRef(zz, uz), uz
+       static _QuaternionToEuler(qq) {
+         const Eq = new Yq.Matrix;
+         qq.toRotationMatrix(Eq);
+         const gq = Eq.m;
+         let Oq, mq, xq;
+         const Aq = Math.sqrt(gq[0] * gq[0] + gq[1] * gq[1]);
+         return Aq > Mg.c ? (Oq = Math.atan2(gq[6], gq[10]), mq = Math.atan2(-gq[2], Aq), xq = Math.atan2(gq[1], gq[0])) : (Oq = Math.atan2(-gq[9], gq[5]), mq = Math.atan2(-gq[2], Aq), xq = 0), new Yq.Na(lq.Tools.ToDegrees(Oq), lq.Tools.ToDegrees(mq), lq.Tools.ToDegrees(xq))
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2104-L2108` → after: `L14214-L14228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14214-L14228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14214-L14228) · [Before (L2104-L2108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2104-L2108)

```diff
-       multiplyInPlace(zz) {
-         const uz = this._m,
-           bz = zz.m;
-         for (let Ez = 0; Ez < 16; Ez++) uz[Ez] *= bz[Ez];
-         return this.markAsUpdated(), this
+     }
+ 
+     function nm(qq) {
+       return "string" === typeof qq?.name
+     }
+     const bm = Symbol("__xml:meta$__"),
+       im = Symbol("__xml:name$__");
+ 
+     function Zm(qq, Eq) {
+       Object.prototype.hasOwnProperty.call(qq.metadata, bm) || (qq.metadata[bm] = []), qq.metadata[bm].push(Eq)
+     }
+ 
+     function fm(qq) {
+       return (Eq, gq) => {
+         Eq[im] = qq
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2110-L2113` → after: `L14230-L14294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14230-L14294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14230-L14294) · [Before (L2110-L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2110-L2113)

```diff
-       multiplyByFloats() {
-         const zz = this._m;
-         for (let uz = 0; uz < 16; uz++) zz[uz] *= uz < 0 || arguments.length <= uz ? void 0 : arguments[uz];
-         return this.markAsUpdated(), this
+     }
+ 
+     function Mm() {
+       return (qq, Eq) => Zm(Eq, {
+         kind: "none",
+         prop: String(Eq.name),
+         ignore: !0
+       })
+     }
+ 
+     function Tm(qq) {
+       return (Eq, gq) => Zm(gq, {
+         kind: "attr",
+         prop: String(gq.name),
+         ...qq
+       })
+ ... (49 more added lines; see GitHub link above)
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2115-L2188` → after: `L14296-L14322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14296-L14322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14296-L14322) · [Before (L2115-L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2115-L2188)

```diff
-       multiplyByFloatsToRef() {
-         for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
-         const Ez = uz.pop(),
-           nz = this._m,
-           iz = Ez._m,
-           lz = uz;
-         for (let Mz = 0; Mz < 16; Mz++) iz[Mz] = nz[Mz] * lz[Mz];
-         return Ez.markAsUpdated(), Ez
-       }
-       multiplyToRef(zz, uz) {
-         return this._isIdentity ? (uz.euz(zz), uz) : zz._isIdentity ? (uz.euz(this), uz) : (this.multiplyToArray(zz, uz._m, 0), uz.markAsUpdated(), uz)
-       }
-       multiplyToArray(zz, uz, bz) {
-         return (0, tz.p)(this, zz, uz, bz), this
-       }
-       divide(zz) {
- ... (58 more removed lines; see GitHub link above)
+     }
+ 
+     function Jm(qq, Eq) {
+       return Eq ? `${Eq}:${qq}` : qq
+     }
+     const km = Object.freeze({
+         eps: 1e-6,
+         maxDecimalsCap: 15,
+         trimTrailingZeros: !0,
+         allowScientific: !1,
+         snapNearZero: !0
+       }),
+       Rm = Object.freeze({
+         number: km
+       });
+ 
+ ... (11 more added lines; see GitHub link above)
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2190-L2196` → after: `L14324-L14328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14324-L14328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14324-L14328) · [Before (L2190-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2190-L2196)

```diff
-       equalsWithEpsilon(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const bz = this._m,
-           Ez = zz.m;
-         for (let nz = 0; nz < 16; nz++)
-           if (!(0, Mz.WithinEpsilon)(bz[nz], Ez[nz], uz)) return !1;
-         return !0
+     }
+ 
+     function Fm(qq) {
+       return {
+         number: Um(qq?.number)
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2198-L2202` → after: `L14330-L14347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14330-L14347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14330-L14347) · [Before (L2198-L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2198-L2202)

```diff
-       zlz() {
-         const zz = this._m;
-         for (let uz = 0; uz < 16; uz++)
-           if (zz[uz] != (uz < 0 || arguments.length <= uz ? void 0 : arguments[uz])) return !1;
-         return !0
+     }
+     class sm {
+       constructor(qq) {
+         if (this.o = qq, this._o = qq.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
+       }
+       toString(qq) {
+         if (!Number.isFinite(qq)) throw new Error(`Cannot format non-finite number: ${qq}`);
+         const Eq = this._o,
+           gq = this._clampInt(Eq.maxDecimalsCap ?? 15, 0, 20),
+           Yq = Eq.trimTrailingZeros ?? !0,
+           lq = Eq.snapNearZero ?? !0,
+           Oq = Eq.zeroThreshold ?? Eq.eps,
+           mq = 1 / Eq.eps;
+         let xq, Aq = Math.round(qq * mq) / mq;
+         if (Object.is(Aq, -0) && (Aq = 0), lq && Math.abs(Aq) <= Oq && (Aq = 0), xq = void 0 !== Eq.fixedDecimals ? this._clampInt(Eq.fixedDecimals, 0, gq) : this._clampInt(Math.ceil(-Math.log10(Eq.eps)), 0, gq), Eq.allowScientific, 0 === xq) return String(Math.trunc(Aq));
+         let cq = Aq.toFixed(xq);
+ ... (2 more added lines; see GitHub link above)
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2204-L2205` → after: `L14349-L14350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14349-L14350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14349-L14350) · [Before (L2204-L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2204-L2205)

```diff
-       floor() {
-         return this.floorToRef(new Rz)
+       _clampInt(qq, Eq, gq) {
+         return Number.isFinite(qq) ? (qq = Math.trunc(qq), Math.max(Eq, Math.min(gq, qq))) : Eq
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2207-L2211` → after: `L14352-L14371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14352-L14371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14352-L14371) · [Before (L2207-L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2207-L2211)

```diff
-       floorToRef(zz) {
-         const uz = this._m,
-           bz = zz._m;
-         for (let Ez = 0; Ez < 16; Ez++) bz[Ez] = Math.floor(uz[Ez]);
-         return zz.markAsUpdated(), zz
+     }
+ 
+     function Xm(qq) {
+       return qq instanceof Date
+     }
+ 
+     function wm(qq) {
+       return "string" === typeof qq
+     }
+ 
+     function Km(qq) {
+       return "string" === typeof qq || "number" === typeof qq || "boolean" === typeof qq || "bigint" === typeof qq || Xm(qq)
+     }
+ 
+     function Cm(qq) {
+       return "number" === typeof qq || "boolean" === typeof qq || "bigint" === typeof qq || Xm(qq)
+ ... (4 more added lines; see GitHub link above)
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2213-L2214` → after: `L14373-L14376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14373-L14376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14373-L14376) · [Before (L2213-L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2213-L2214)

```diff
-       fract() {
-         return this.fractToRef(new Rz)
+       withNamespace() {
+         for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
+         for (const Yq of Eq) this._assignNamespace(Yq);
+         return this
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2216-L2220` → after: `L14378-L14403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14378-L14403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14378-L14403) · [Before (L2216-L2220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2216-L2220)

```diff
-       fractToRef(zz) {
-         const uz = this._m,
-           bz = zz._m;
-         for (let Ez = 0; Ez < 16; Ez++) bz[Ez] = uz[Ez] - Math.floor(uz[Ez]);
-         return zz.markAsUpdated(), zz
+       serialize(qq, Eq) {
+         if (!(Eq = Eq ?? pm(qq))) throw new Error("can not find name for given object");
+         const gq = Lm(Eq);
+         gq.ns && this._assignNamespace(gq.ns, "xmlns"), this._gatherNamespaces(qq, new WeakSet);
+         const Yq = this._builder.ele(null, gq.name);
+         for (const [lq, Oq] of Array.from(this._ns.entries())) Yq.att("xmlns", Oq, lq);
+         this._writeObjectContent(Yq, qq, (new WeakSet).add(qq)), this._builder.end()
+       }
+       _writeObject(qq, Eq, gq) {
+         if (gq.has(Eq)) return;
+         if (gq.add(Eq), Array.isArray(Eq)) {
+           for (const Yq of Eq) Cm(Yq) || (wm(Yq) ? this._builder.text(Yq) : this._writeObject(qq, Yq, gq));
+           return
+         }
+         const Yq = pm(Eq);
+         if (!Yq) return;
+ ... (10 more added lines; see GitHub link above)
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2222-L2224` → after: `L14405-L14441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14405-L14441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14405-L14441) · [Before (L2222-L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2222-L2224)

```diff
-       clone() {
-         const zz = new Rz;
-         return zz.euz(this), zz
+       _writeObjectContent(qq, Eq, gq) {
+         const Yq = Sm(Eq) ?? [],
+           lq = new Map;
+         for (const mq of Yq) {
+           const qq = lq.get(mq.prop) ?? [];
+           qq.push(mq), lq.set(mq.prop, qq)
+         }
+         const Oq = Object.keys(Eq).sort(((qq, Eq) => {
+           const gq = (lq.get(qq) ?? []).some((qq => "attr" === qq.kind));
+           return gq === (lq.get(Eq) ?? []).some((qq => "attr" === qq.kind)) ? 0 : gq ? -1 : 1
+         }));
+         for (const mq of Oq) {
+           const Yq = Eq[mq];
+           if (null === Yq || void 0 === Yq) continue;
+           const Oq = lq.get(mq);
+           if (Oq) {
+ ... (21 more added lines; see GitHub link above)
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2226-L2227` → after: `L14443-L14478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14443-L14478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14443-L14478) · [Before (L2226-L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2226-L2227)

```diff
-       getClassName() {
-         return "Matrix"
+       _gatherNamespaces(qq, Eq) {
+         if (Eq.has(qq)) return;
+         if (Eq.add(qq), Array.isArray(qq)) {
+           for (const gq of qq) Km(gq) || this._gatherNamespaces(gq, Eq);
+           return
+         }
+         const gq = pm(qq);
+         gq && this._assignNamespace(gq);
+         const Yq = Sm(qq) ?? [],
+           lq = new Map;
+         for (const mq of Yq) {
+           const qq = lq.get(mq.prop) ?? [];
+           qq.push(mq), lq.set(mq.prop, qq)
+         }
+         const Oq = [];
+         for (const mq of Object.keys(qq)) {
+ ... (20 more added lines; see GitHub link above)
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2229-L2231` → after: `L14480-L14489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14480-L14489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14480-L14489) · [Before (L2229-L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2229-L2231)

```diff
-       getHashCode() {
-         let zz = Oz(this._m[0]);
-         for (let uz = 1; uz < 16; uz++) zz = 397 * zz ^ Oz(this._m[uz]);
+       _buildNsPrefix(qq) {
+         let Eq, gq = !1;
+         do {
+           Eq = "ns" + this._prefixCount++;
+           for (const qq of Array.from(this._ns.values()))
+             if (qq === Eq) {
+               gq = !0;
+               break
+             }
+         } while (gq);
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2234-L2247` → after: `L14492-L14519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14492-L14519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14492-L14519) · [Before (L2234-L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2234-L2247)

```diff
-       decomposeToTransformNode(zz) {
-         return zz.rotationQuaternion = zz.rotationQuaternion || new Zz, this.decompose(zz.ti, zz.rotationQuaternion, zz.position)
-       }
-       decompose(zz, uz, bz, Ez) {
-         let nz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
-         if (this._isIdentity) return bz && bz.Vk(0), zz && zz.Vk(1), uz && uz.P_(0, 0, 0, 1), !0;
-         const iz = this._m;
-         if (bz && bz.P_(iz[12], iz[13], iz[14]), (zz = zz || Kz.ER[0]).x = Math.sqrt(iz[0] * iz[0] + iz[1] * iz[1] + iz[2] * iz[2]), zz.y = Math.sqrt(iz[4] * iz[4] + iz[5] * iz[5] + iz[6] * iz[6]), zz.z = Math.sqrt(iz[8] * iz[8] + iz[9] * iz[9] + iz[10] * iz[10]), Ez) {
-           const uz = (nz ? Ez.absoluteScaling.x : Ez.ti.x) < 0 ? -1 : 1,
-             bz = (nz ? Ez.absoluteScaling.y : Ez.ti.y) < 0 ? -1 : 1,
-             iz = (nz ? Ez.absoluteScaling.z : Ez.ti.z) < 0 ? -1 : 1;
-           zz.x *= uz, zz.y *= bz, zz.z *= iz
-         } else this.determinant() <= 0 && (zz.y *= -1);
-         if (0 === zz._x || 0 === zz._y || 0 === zz._z) return uz && uz.P_(0, 0, 0, 1), !1;
+     }
+     class em {}
+     var Dm;
+     em.OpenTag = "<", em.CloseTag = ">", em.Slash = "/", em.Question = "?", em.Quote = '"', em.Equal = "=", em.Space = " ", em.Semicolon = ":", em.Dec = "<?xml", em.Xml = "xml", em.Xmlns = "xmlns", em.Xsi = "xsi", em.VersionKeyword = "version", em.EncodingKeyword = "encoding", em … [truncated]
+       function(qq) {
+         qq[qq.Declaration = 0] = "Declaration", qq[qq.Tag = 1] = "Tag", qq[qq.Attribute = 2] = "Attribute", qq[qq.Text = 3] = "Text"
+       }(Dm || (Dm = {}));
+     class qx {
+       constructor(qq) {
+         this._ctxStack = [], this._d = 0, this._w = qq
+       }
+       dec(qq, Eq, gq) {
+         return this._w.write(em.Dec), this._writeAttStr(em.VersionKeyword, qq), Eq && this._writeAttStr(em.EncodingKeyword, Eq), void 0 !== gq && this._writeAttStr(em.StandaloneKeyword, gq ? "yes" : "no"), this._w.write(em.Question, em.CloseTag), this
+       }
+       att(qq, Eq, gq) {
+         const Yq = this._peekContext();
+ ... (12 more added lines; see GitHub link above)
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2249-L2252` → after: `L14521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14521) · [Before (L2249-L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2249-L2252)

```diff
-           const bz = 1 / zz._x,
-             Ez = 1 / zz._y,
-             nz = 1 / zz._z;
-           Rz.FromValuesToRef(iz[0] * bz, iz[1] * bz, iz[2] * bz, 0, iz[4] * Ez, iz[5] * Ez, iz[6] * Ez, 0, iz[8] * nz, iz[9] * nz, iz[10] * nz, 0, 0, 0, 0, 1, Kz.Matrix[0]), Zz.FromRotationMatrixToRef(Kz.Matrix[0], uz)
+           lq = `${this._ensurePrefixDeclared(Yq,qq)}:${Eq}`
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2254` → after: `L14523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14523) · [Before (L2254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2254)

```diff
-         return !0
+         return Yq.lastToken = Dm.Attribute, this._writeAttStr(lq, gq), this
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2256-L2264` → after: `L14525-L14590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14525-L14590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14525-L14590) · [Before (L2256-L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2256-L2264)

```diff
-       getRow(zz) {
-         if (zz < 0 || zz > 3) return null;
-         const uz = 4 * zz;
-         return new Fz(this._m[uz + 0], this._m[uz + 1], this._m[uz + 2], this._m[uz + 3])
-       }
-       getRowToRef(zz, uz) {
-         if (zz >= 0 && zz <= 3) {
-           const bz = 4 * zz;
-           uz.x = this._m[bz + 0], uz.y = this._m[bz + 1], uz.z = this._m[bz + 2], uz.w = this._m[bz + 3]
+       ele(qq, Eq) {
+         const gq = this._peekContext();
+         gq && this._closeOpenTagIfNeeded(gq);
+         let Yq = Eq;
+         if (qq) {
+           Yq = `${this._lookupPrefix(qq)??qq}:${Eq}`
+         }
+         return this._pushContext(Yq, ++this._d), this._w.write(em.OpenTag, Yq), this
+       }
+       text(qq) {
+         const Eq = this._peekContext();
+         if (!Eq) throw new Error("text() without open element");
+         return this._closeOpenTagIfNeeded(Eq), Eq.lastToken = Dm.Text, this._w.write(this._escText(qq)), this
+       }
+       end() {
+         const qq = this._popContext();
+ ... (50 more added lines; see GitHub link above)
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2291-L2293` → after: `L14593-L14598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14593-L14598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14593-L14598) · [Before (L2291-L2293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2291-L2293)

```diff
-       scaleAndAddToRef(zz, uz) {
-         for (let bz = 0; bz < 16; bz++) uz._m[bz] += this._m[bz] * zz;
-         return uz.markAsUpdated(), uz
+       _ensurePrefixDeclared(qq, Eq) {
+         const gq = this._lookupPrefix(Eq);
+         if (gq) return gq;
+         if (qq.closed) throw new Error(`can not declare namespace after start tag closed for <${qq.name}>`);
+         const Yq = this._allocPrefix(qq);
+         return this._writeAttStr(`${em.Xmlns}:${Yq}`, Eq), this._registerNamespace(qq, Yq, Eq), Yq
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2295-L2298` → after: `L14600-L14601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14600-L14601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14600-L14601) · [Before (L2295-L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2295-L2298)

```diff
-       scaleInPlace(zz) {
-         const uz = this._m;
-         for (let bz = 0; bz < 16; bz++) uz[bz] *= zz;
-         return this.markAsUpdated(), this
+       _closeOpenTagIfNeeded(qq) {
+         qq.closed || (this._w.write(em.CloseTag), qq.closed = !0)
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2300-L2304` → after: `L14603-L14606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14603-L14606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14603-L14606) · [Before (L2300-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2300-L2304)

```diff
-       toNormalMatrix(zz) {
-         const uz = Kz.Matrix[0];
-         this.invertToRef(uz), uz.transposeToRef(zz);
-         const bz = zz._m;
-         return Rz.FromValuesToRef(bz[0], bz[1], bz[2], 0, bz[4], bz[5], bz[6], 0, bz[8], bz[9], bz[10], 0, 0, 0, 0, 1, zz), zz
+     }
+     qx.Context = class {
+       constructor(qq, Eq) {
+         this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = qq, this.depth = Eq
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2306-L2308` → after: `L14608-L14611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14608-L14611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14608-L14611) · [Before (L2306-L2308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2306-L2308)

```diff
-       getRotationMatrix() {
-         const zz = new Rz;
-         return this.getRotationMatrixToRef(zz), zz
+     };
+     class Ex {
+       constructor() {
+         this.count = 0, this._chunks = []
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2310-L2317` → after: `L14613-L14617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14613-L14617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14613-L14617) · [Before (L2310-L2317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2310-L2317)

```diff
-       getRotationMatrixToRef(zz) {
-         const uz = Kz.ER[0];
-         if (!this.decompose(uz)) return Rz.IdentityToRef(zz), zz;
-         const bz = this._m,
-           Ez = 1 / uz._x,
-           nz = 1 / uz._y,
-           iz = 1 / uz._z;
-         return Rz.FromValuesToRef(bz[0] * Ez, bz[1] * Ez, bz[2] * Ez, 0, bz[4] * nz, bz[5] * nz, bz[6] * nz, 0, bz[8] * iz, bz[9] * iz, bz[10] * iz, 0, 0, 0, 0, 1, zz), zz
+       write() {
+         for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
+         if (0 === Eq.length) return this;
+         const Yq = Eq.join("");
+         return this._chunks.push(Yq), this.count += Yq.length, this
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2319-L2321` → after: `L14619-L14620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14619-L14620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14619-L14620) · [Before (L2319-L2321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2319-L2321)

```diff
-       toggleModelMatrixHandInPlace() {
-         const zz = this._m;
-         return zz[2] *= -1, zz[6] *= -1, zz[8] *= -1, zz[9] *= -1, zz[14] *= -1, this.markAsUpdated(), this
+       toString() {
+         return this._chunks.join("")
```

#### 217. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2323-L2325` → after: `L14622-L14623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14622-L14623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14622-L14623) · [Before (L2323-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2323-L2325)

```diff
-       toggleProjectionMatrixHandInPlace() {
-         const zz = this._m;
-         return zz[8] *= -1, zz[9] *= -1, zz[10] *= -1, zz[11] *= -1, this.markAsUpdated(), this
+       clear() {
+         this._chunks = [], this.count = 0
```

#### 218. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2327-L2328` → after: `L14625-L14629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14625-L14629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14625-L14629) · [Before (L2327-L2328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2327-L2328)

```diff
-       _convertProjectionToHalfZRangeInPlace() {
-         return this.multiplyToRef(Xz, this), this
+     }
+     class gx {
+       constructor(qq) {
+         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         this._sink = qq, this._opts = Eq, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
```

#### 219. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2330-L2333` → after: `L14631-L14638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14631-L14638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14631-L14638) · [Before (L2330-L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2330-L2333)

```diff
-       static FromArray(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const bz = new Rz;
-         return Rz.FromArrayToRef(zz, uz, bz), bz
+       write() {
+         for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
+         if (0 === Eq.length) return this;
+         const Yq = Eq.join("");
+         if (0 === Yq.length) return this;
+         this._pending += Yq, this._pendingChars += Yq.length;
+         const lq = this._opts.flushChars ?? 65536;
+         return this._pendingChars >= lq && this.flush(), this
```

#### 220. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2335-L2337` → after: `L14640-L14643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14640-L14643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14640-L14643) · [Before (L2335-L2337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2335-L2337)

```diff
-       static FromArrayToRef(zz, uz, bz) {
-         for (let Ez = 0; Ez < 16; Ez++) bz._m[Ez] = zz[Ez + uz];
-         return bz.markAsUpdated(), bz
+       flush() {
+         if (0 === this._pendingChars) return this;
+         const qq = this._encoder.encode(this._pending);
+         return this._sink.push(qq), this.count += qq.length, this._pending = "", this._pendingChars = 0, this
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2339-L2340` → after: `L14645-L14646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14645-L14646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14645-L14646) · [Before (L2339-L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2339-L2340)

```diff
-       static FromFloat32ArrayToRefScaled(zz, uz, bz, Ez) {
-         return Ez._m[0] = zz[0 + uz] * bz, Ez._m[1] = zz[1 + uz] * bz, Ez._m[2] = zz[2 + uz] * bz, Ez._m[3] = zz[3 + uz] * bz, Ez._m[4] = zz[4 + uz] * bz, Ez._m[5] = zz[5 + uz] * bz, Ez._m[6] = zz[6 + uz] * bz, Ez._m[7] = zz[7 + uz] * bz, Ez._m[8] = zz[8 + uz] * bz, Ez._m[9] = zz … [truncated]
+       finish() {
+         this.flush(), this._sink.push(new Uint8Array(0), !0)
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2342-L2343` → after: `L14648-L14649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14648-L14649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14648-L14649) · [Before (L2342-L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2342-L2343)

```diff
-       static get IdentityReadOnly() {
-         return Rz._IdentityReadOnly
+       clear() {
+         this._pending = "", this._pendingChars = 0, this.count = 0
```

#### 223. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2345-L2347` → after: `L14651-L14674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14651-L14674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14651-L14674) · [Before (L2345-L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2345-L2347)

```diff
-       static FromValuesToRef(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz, Oz, pz, dz, Fz, Zz, Rz, Kz) {
-         const wz = Kz._m;
-         wz[0] = zz, wz[1] = uz, wz[2] = bz, wz[3] = Ez, wz[4] = nz, wz[5] = iz, wz[6] = lz, wz[7] = Mz, wz[8] = tz, wz[9] = Hz, wz[10] = Oz, wz[11] = pz, wz[12] = dz, wz[13] = Fz, wz[14] = Zz, wz[15] = Rz, Kz.markAsUpdated()
+     }
+     const Yx = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
+       lx = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
+     var Ox, mx;
+     ! function(qq) {
+       qq.micron = "micron", qq.millimeter = "millimeter", qq.centimeter = "centimeter", qq.inch = "inch", qq.foot = "foot", qq.meter = "meter"
+     }(Ox || (Ox = {})),
+     function(qq) {
+       qq.model = "model", qq.solidsupport = "solidsupport", qq.support = "support", qq.surface = "surface", qq.other = "other"
+     }(mx || (mx = {}));
+     const xx = "http://schemas.openxmlformats.org/package/2006/content-types",
+       Ax = "http://schemas.openxmlformats.org/package/2006/relationships";
+     var cx;
+     ! function(qq) {
+       qq.Relationships = "application/vnd.openxmlformats-package.relationships+xml", qq.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", qq.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", qq.Colors = "application/vnd.ms-package.3dmanufactur … [truncated]
+     }(cx || (cx = {}));
+ ... (8 more added lines; see GitHub link above)
```

#### 224. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2349-L2352` → after: `L14676-L14677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14676-L14677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14676-L14677) · [Before (L2349-L2352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2349-L2352)

```diff
-       static FromValues(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz, Oz, pz, dz, Fz, Zz, Kz) {
-         const wz = new Rz,
-           Xz = wz._m;
-         return Xz[0] = zz, Xz[1] = uz, Xz[2] = bz, Xz[3] = Ez, Xz[4] = nz, Xz[5] = iz, Xz[6] = lz, Xz[7] = Mz, Xz[8] = tz, Xz[9] = Hz, Xz[10] = Oz, Xz[11] = pz, Xz[12] = dz, Xz[13] = Fz, Xz[14] = Zz, Xz[15] = Kz, wz.markAsUpdated(), wz
+       static IsThreeDimModel(qq) {
+         return qq === Vx.ThreeDimModel
```

#### 225. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2354-L2386` → after: `L14679-L14882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14679-L14882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14679-L14882) · [Before (L2354-L2386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2354-L2386)

```diff
-       static Compose(zz, uz, bz) {
-         const Ez = new Rz;
-         return Rz.ComposeToRef(zz, uz, bz, Ez), Ez
-       }
-       static ComposeToRef(zz, uz, bz, Ez) {
-         const nz = Ez._m,
-           iz = uz._x,
-           lz = uz._y,
-           Mz = uz._z,
-           tz = uz._w,
-           Hz = iz + iz,
-           Oz = lz + lz,
-           pz = Mz + Mz,
-           dz = iz * Hz,
-           Fz = iz * Oz,
-           Zz = iz * pz,
- ... (17 more removed lines; see GitHub link above)
+     }
+     Vx.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", Vx.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", Vx.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", Vx.MustPre … [truncated]
+     let dx = (() => {
+         let qq, Eq, gq = [fm({
+             ns: xx,
+             name: "Types"
+           })],
+           Yq = [];
+         Eq = class {
+           constructor() {
+             this.items = []
+           }
+         };
+         return (0, vq.j)(Eq, "ThreeMfContentTypes"), (() => {
+           const lq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+           (0, vq.f)(null, qq = {
+ ... (188 more added lines; see GitHub link above)
```

#### 226. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2389-L2390` → after: `L14887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14887) · [Before (L2389-L2390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2389-L2390)

```diff
-         const zz = Rz.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
-         return zz._updateIdentityStatus(!1), zz
+         return new Qx([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
```

#### 227. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2392-L2398` → after: `L14889-L14890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14889-L14890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14889-L14890) · [Before (L2392-L2398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2392-L2398)

```diff
-       static RotationX(zz) {
-         const uz = new Rz;
-         return Rz.RotationXToRef(zz, uz), uz
-       }
-       static Invert(zz) {
-         const uz = new Rz;
-         return zz.invertToRef(uz), uz
+       constructor(qq) {
+         this.values = qq
```

#### 228. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2400-L2403` → after: `L14892-L14893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14892-L14893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14892-L14893) · [Before (L2400-L2403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2400-L2403)

```diff
-       static RotationXToRef(zz, uz) {
-         const bz = Math.sin(zz),
-           Ez = Math.cos(zz);
-         return Rz.FromValuesToRef(1, 0, 0, 0, 0, Ez, bz, 0, 0, -bz, Ez, 0, 0, 0, 0, 1, uz), uz._updateIdentityStatus(1 === Ez && 0 === bz), uz
+       toString() {
+         return this.values.join(" ")
```

#### 229. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2405-L2407` → after: `L14895-L14898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14895-L14898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14895-L14898) · [Before (L2405-L2407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2405-L2407)

```diff
-       static RotationY(zz) {
-         const uz = new Rz;
-         return Rz.RotationYToRef(zz, uz), uz
+     }
+     class yx {
+       constructor(qq) {
+         this.o = qq, this._f = new sm(qq)
```

#### 230. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2409-L2412` → after: `L14900-L14901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14900-L14901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14900-L14901) · [Before (L2409-L2412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2409-L2412)

```diff
-       static RotationYToRef(zz, uz) {
-         const bz = Math.sin(zz),
-           Ez = Math.cos(zz);
-         return Rz.FromValuesToRef(Ez, 0, -bz, 0, 0, 1, 0, 0, bz, 0, Ez, 0, 0, 0, 0, 1, uz), uz._updateIdentityStatus(1 === Ez && 0 === bz), uz
+       toString(qq) {
+         return qq.values.map((qq => this._f.toString(qq))).join(" ")
```

#### 231. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2414-L2416` → after: `L14903-L15871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR14903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L14903-L15871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L14903-L15871) · [Before (L2414-L2416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2414-L2416)

```diff
-       static RotationZ(zz) {
-         const uz = new Rz;
-         return Rz.RotationZToRef(zz, uz), uz
+     }
+     let tx = (() => {
+         let qq, Eq, gq, Yq, lq, Oq = [fm({
+             ns: Yx,
+             name: "model"
+           })],
+           mq = [],
+           xq = [],
+           Aq = [],
+           cq = [],
+           uq = [],
+           Bq = [],
+           Wq = [];
+         Eq = class {
+           constructor() {
+             this.unit = (0, vq.i)(this, xq, Ox.millimeter), this.requiredextensions = ((0, vq.i)(this, Aq), (0, vq.i)(this, cq, void 0)), this.recommendedextensions = ((0, vq.i)(this, uq), (0, vq.i)(this, Bq, void 0)), this.metadata = (0, vq.i)(this, Wq)
+ ... (953 more added lines; see GitHub link above)
```

#### 232. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2418-L2421` → after: `L15873-L15874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15873-L15874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15873-L15874) · [Before (L2418-L2421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2418-L2421)

```diff
-       static RotationZToRef(zz, uz) {
-         const bz = Math.sin(zz),
-           Ez = Math.cos(zz);
-         return Rz.FromValuesToRef(Ez, bz, 0, 0, -bz, Ez, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, uz), uz._updateIdentityStatus(1 === Ez && 0 === bz), uz
+       withName(qq) {
+         return this._object.name = qq, this
```

#### 233. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2423-L2425` → after: `L15876-L15877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15876-L15877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15876-L15877) · [Before (L2423-L2425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2423-L2425)

```diff
-       static RotationAxis(zz, uz) {
-         const bz = new Rz;
-         return Rz.RotationAxisToRef(zz, uz, bz), bz
+       withThumbnail(qq) {
+         return this._object.thumbnail = qq, this
```

#### 234. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2427-L2433` → after: `L15879-L15881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15879-L15881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15879-L15881) · [Before (L2427-L2433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2427-L2433)

```diff
-       static RotationAxisToRef(zz, uz, bz) {
-         const Ez = Math.sin(-uz),
-           nz = Math.cos(-uz),
-           iz = 1 - nz;
-         zz = zz.normalizeToRef(Kz.ER[0]);
-         const lz = bz._m;
-         return lz[0] = zz._x * zz._x * iz + nz, lz[1] = zz._x * zz._y * iz - zz._z * Ez, lz[2] = zz._x * zz._z * iz + zz._y * Ez, lz[3] = 0, lz[4] = zz._y * zz._x * iz + zz._z * Ez, lz[5] = zz._y * zz._y * iz + nz, lz[6] = zz._y * zz._z * iz - zz._x * Ez, lz[7] = 0, lz[8] = zz._z … [truncated]
+       withProperty(qq) {
+         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return this._object.pid = qq, this._object.id = Eq, this
```

#### 235. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2435-L2445` → after: `L15883-L15884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15883-L15884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15883-L15884) · [Before (L2435-L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2435-L2445)

```diff
-       static RotationAlignToRef(zz, uz, bz) {
-         let nz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         const iz = dz.Dot(uz, zz),
-           lz = bz._m;
-         if (iz < -1 + Ez.b) lz[0] = -1, lz[1] = 0, lz[2] = 0, lz[3] = 0, lz[4] = 0, lz[5] = nz ? 1 : -1, lz[6] = 0, lz[7] = 0, lz[8] = 0, lz[9] = 0, lz[10] = nz ? -1 : 1, lz[11] = 0;
-         else {
-           const bz = dz.Cross(uz, zz),
-             Ez = 1 / (1 + iz);
-           lz[0] = bz._x * bz._x * Ez + iz, lz[1] = bz._y * bz._x * Ez - bz._z, lz[2] = bz._z * bz._x * Ez + bz._y, lz[3] = 0, lz[4] = bz._x * bz._y * Ez + bz._z, lz[5] = bz._y * bz._y * Ez + iz, lz[6] = bz._z * bz._y * Ez - bz._x, lz[7] = 0, lz[8] = bz._x * bz._z * Ez - bz._y, lz … [truncated]
-         }
-         return lz[12] = 0, lz[13] = 0, lz[14] = 0, lz[15] = 1, bz.markAsUpdated(), bz
+       build() {
+         return this._object
```

#### 236. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2447-L2449` → after: `L15886-L15887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15886-L15887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15886-L15887) · [Before (L2447-L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2447-L2449)

```diff
-       static RotationYawPitchRoll(zz, uz, bz) {
-         const Ez = new Rz;
-         return Rz.RotationYawPitchRollToRef(zz, uz, bz, Ez), Ez
+       reset(qq, Eq) {
+         this._object = new nx(qq, Eq)
```

#### 237. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2451-L2452` → after: `L15889-L15892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15889-L15892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15889-L15892) · [Before (L2451-L2452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2451-L2452)

```diff
-       static RotationYawPitchRollToRef(zz, uz, bz, Ez) {
-         return Zz.RotationYawPitchRollToRef(zz, uz, bz, Kz.Quaternion[0]), Kz.Quaternion[0].toRotationMatrix(Ez), Ez
+     }
+     class kx extends Jx {
+       constructor(qq) {
+         super(qq, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mx.model), this._object.content = new Tx
```

#### 238. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2454-L2456` → after: `L15894-L15895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15894-L15895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15894-L15895) · [Before (L2454-L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2454-L2456)

```diff
-       static Scaling(zz, uz, bz) {
-         const Ez = new Rz;
-         return Rz.ScalingToRef(zz, uz, bz, Ez), Ez
+       withComponent(qq, Eq) {
+         return this._object.content.component.push(new zx(qq, Eq)), this
```

#### 239. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2458-L2459` → after: `L15897-L15900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15897-L15900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15897-L15900) · [Before (L2458-L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2458-L2459)

```diff
-       static ScalingToRef(zz, uz, bz, Ez) {
-         return Rz.FromValuesToRef(zz, 0, 0, 0, 0, uz, 0, 0, 0, 0, bz, 0, 0, 0, 0, 1, Ez), Ez._updateIdentityStatus(1 === zz && 1 === uz && 1 === bz), Ez
+     }
+     class Rx extends Jx {
+       constructor(qq) {
+         super(qq, mx.model)
```

#### 240. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2461-L2463` → after: `L15902-L15903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15902-L15903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15902-L15903) · [Before (L2461-L2463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2461-L2463)

```diff
-       static Translation(zz, uz, bz) {
-         const Ez = new Rz;
-         return Rz.TranslationToRef(zz, uz, bz, Ez), Ez
+       withPostProcessHandlers(qq, Eq) {
+         return this._vh = qq, this._th = Eq, this
```

#### 241. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2465-L2466` → after: `L15905-L15906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15905-L15906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15905-L15906) · [Before (L2465-L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2465-L2466)

```diff
-       static TranslationToRef(zz, uz, bz, Ez) {
-         return Rz.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, zz, uz, bz, 1, Ez), Ez._updateIdentityStatus(0 === zz && 0 === uz && 0 === bz), Ez
+       withData(qq) {
+         return this._object.content = this._buildMesh(qq), this
```

#### 242. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2468-L2470` → after: `L15908-L15909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15908-L15909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15908-L15909) · [Before (L2468-L2470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2468-L2470)

```diff
-       static Lerp(zz, uz, bz) {
-         const Ez = new Rz;
-         return Rz.LerpToRef(zz, uz, bz, Ez), Ez
+       withMaterial(qq, Eq) {
+         return this._object.pid = qq, this._object.pindex = Eq, this
```

#### 243. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2472-L2477` → after: `L15911-L15914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15911-L15914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15911-L15914) · [Before (L2472-L2477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2472-L2477)

```diff
-       static LerpToRef(zz, uz, bz, Ez) {
-         const nz = Ez._m,
-           iz = zz.m,
-           lz = uz.m;
-         for (let Mz = 0; Mz < 16; Mz++) nz[Mz] = iz[Mz] * (1 - bz) + lz[Mz] * bz;
-         return Ez.markAsUpdated(), Ez
+       _buildMesh(qq) {
+         const Eq = this._buildVertices(qq.positions),
+           gq = this._buildTriangle(qq.indices);
+         return new bx(Eq, gq)
```

#### 244. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2479-L2499` → after: `L15916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15916) · [Before (L2479-L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2479-L2499)

```diff
-       static DecomposeLerp(zz, uz, bz) {
-         const Ez = new Rz;
-         return Rz.DecomposeLerpToRef(zz, uz, bz, Ez), Ez
-       }
-       static DecomposeLerpToRef(zz, uz, bz, Ez) {
-         const nz = Kz.ER[0],
-           iz = Kz.Quaternion[0],
-           lz = Kz.ER[1];
-         zz.decompose(nz, iz, lz);
-         const Mz = Kz.ER[2],
-           tz = Kz.Quaternion[1],
-           Hz = Kz.ER[3];
-         uz.decompose(Mz, tz, Hz);
-         const Oz = Kz.ER[4];
-         dz.LerpToRef(nz, Mz, bz, Oz);
-         const pz = Kz.Quaternion[2];
- ... (5 more removed lines; see GitHub link above)
+       _buildVertices(qq) {
```

#### 245. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2501-L2539` → after: `L15918-L15926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15918-L15926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15918-L15926) · [Before (L2501-L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2501-L2539)

```diff
-         return Rz.LookAtLHToRef(zz, uz, bz, Ez), Ez
-       }
-       static LookAtLHToRef(zz, uz, bz, Ez) {
-         const nz = Kz.ER[0],
-           iz = Kz.ER[1],
-           lz = Kz.ER[2];
-         uz.subtractToRef(zz, lz), lz.normalize(), dz.CrossToRef(bz, lz, nz);
-         const Mz = nz.lengthSquared();
-         0 === Mz ? nz.x = 1 : nz.normalizeFromLength(Math.sqrt(Mz)), dz.CrossToRef(lz, nz, iz), iz.normalize();
-         const tz = -dz.Dot(nz, zz),
-           Hz = -dz.Dot(iz, zz),
-           Oz = -dz.Dot(lz, zz);
-         return Rz.FromValuesToRef(nz._x, iz._x, lz._x, 0, nz._y, iz._y, lz._y, 0, nz._z, iz._z, lz._z, 0, tz, Hz, Oz, 1, Ez), Ez
-       }
-       static LookAtRH(zz, uz, bz) {
-         const Ez = new Rz;
- ... (23 more removed lines; see GitHub link above)
+         if (qq)
+           for (let gq = 0; gq < qq.length;) {
+             const Yq = qq[gq++],
+               lq = qq[gq++],
+               Oq = qq[gq++];
+             let mq = new Zx(Yq, lq, Oq);
+             this._vh && (mq = this._vh(mq)), Eq.vertex.push(mq)
+           }
+         return Eq
```

#### 246. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2541` → after: `L15928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15928) · [Before (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2541)

```diff
-       static LookDirectionRH(zz, uz) {
+       _buildTriangle(qq) {
```

#### 247. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2543` → after: `L15930-L15938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15930-L15938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15930-L15938) · [Before (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2543)

```diff
-         return Rz.LookDirectionRHToRef(zz, uz, bz), bz
+         if (qq)
+           for (let gq = 0; gq < qq.length;) {
+             const Yq = qq[gq++],
+               lq = qq[gq++],
+               Oq = qq[gq++];
+             let mq = new Mx(Yq, lq, Oq);
+             this._th && (mq = this._th(mq)), Eq.triangle.push(mq)
+           }
+         return Eq
```

#### 248. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2545-L2547` → after: `L15940-L15943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15940-L15943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15940-L15943) · [Before (L2545-L2547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2545-L2547)

```diff
-       static LookDirectionRHToRef(zz, uz, bz) {
-         const Ez = Kz.ER[2];
-         return dz.CrossToRef(uz, zz, Ez), Rz.FromValuesToRef(Ez._x, Ez._y, Ez._z, 0, uz._x, uz._y, uz._z, 0, zz._x, zz._y, zz._z, 0, 0, 0, 0, 1, bz), bz
+     }
+     class Ux {
+       constructor(qq) {
+         this._m = new Sx(qq)
```

#### 249. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2549-L2551` → after: `L15945-L15948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15945-L15948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15945-L15948) · [Before (L2549-L2551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2549-L2551)

```diff
-       static OrthoLH(zz, uz, bz, Ez, nz) {
-         const iz = new Rz;
-         return Rz.OrthoLHToRef(zz, uz, bz, Ez, iz, nz), iz
+       withColor(qq, Eq) {
+         this._m.base = this._m.base ?? [];
+         let gq = this._m.base.find((Eq => Eq.name.toLowerCase() === qq.toLowerCase()));
+         return gq ? (gq.displaycolor = this._rgbaToHex(Eq), this) : (gq = new px(qq, this._rgbaToHex(Eq)), this._m.base.push(gq), this)
```

#### 250. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2553-L2558` → after: `L15950-L15951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15950-L15951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15950-L15951) · [Before (L2553-L2558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2553-L2558)

```diff
-       static OrthoLHToRef(zz, uz, bz, Ez, nz, iz) {
-         const lz = 2 / zz,
-           Mz = 2 / uz,
-           tz = 2 / (Ez - bz),
-           Hz = -(Ez + bz) / (Ez - bz);
-         return Rz.FromValuesToRef(lz, 0, 0, 0, 0, Mz, 0, 0, 0, 0, tz, 0, 0, 0, Hz, 1, nz), iz && nz.multiplyToRef(Xz, nz), nz._updateIdentityStatus(1 === lz && 1 === Mz && 1 === tz && 0 === Hz), nz
+       build() {
+         return this._m
```

#### 251. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2560-L2580` → after: `L15953-L15961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15953-L15961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15953-L15961) · [Before (L2560-L2580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2560-L2580)

```diff
-       static OrthoOffCenterLH(zz, uz, bz, Ez, nz, iz, lz) {
-         const Mz = new Rz;
-         return Rz.OrthoOffCenterLHToRef(zz, uz, bz, Ez, nz, iz, Mz, lz), Mz
-       }
-       static OrthoOffCenterLHToRef(zz, uz, bz, Ez, nz, iz, lz, Mz) {
-         const tz = 2 / (uz - zz),
-           Hz = 2 / (Ez - bz),
-           Oz = 2 / (iz - nz),
-           pz = -(iz + nz) / (iz - nz),
-           dz = (zz + uz) / (zz - uz),
-           Fz = (Ez + bz) / (bz - Ez);
-         return Rz.FromValuesToRef(tz, 0, 0, 0, 0, Hz, 0, 0, 0, 0, Oz, 0, dz, Fz, pz, 1, lz), Mz && lz.multiplyToRef(Xz, lz), lz.markAsUpdated(), lz
-       }
-       static ObliqueOffCenterLHToRef(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz, Oz) {
-         const pz = -lz * Math.cos(Mz),
-           dz = -lz * Math.sin(Mz);
- ... (5 more removed lines; see GitHub link above)
+       _rgbaToHex(qq) {
+         const Eq = qq => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(qq, 1 / 2.2)))),
+           gq = Eq(qq.r).toString(16).padStart(2, "0").toUpperCase(),
+           Yq = Eq(qq.g).toString(16).padStart(2, "0").toUpperCase(),
+           lq = Eq(qq.b).toString(16).padStart(2, "0").toUpperCase();
+         if ("number" === typeof qq.a) {
+           return `#${gq}${Yq}${lq}${Math.round(Math.min(255,Math.max(0,255*qq.a))).toString(16).padStart(2,"0").toUpperCase()}`
+         }
+         return `#${gq}${Yq}${lq}`
```

#### 252. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2582-L2583` → after: `L15963-L15966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15963-L15966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15963-L15966) · [Before (L2582-L2583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2582-L2583)

```diff
-       static OrthoOffCenterRHToRef(zz, uz, bz, Ez, nz, iz, lz, Mz) {
-         return Rz.OrthoOffCenterLHToRef(zz, uz, bz, Ez, nz, iz, lz, Mz), lz._m[10] *= -1, lz
+     }
+     class Fx {
+       constructor() {
+         this._model = new tx, this._objects = new Map
```

#### 253. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2585-L2588` → after: `L15968-L15969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15968-L15969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15968-L15969) · [Before (L2585-L2588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2585-L2588)

```diff
-       static ObliqueOffCenterRHToRef(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz, Oz) {
-         const pz = lz * Math.cos(Mz),
-           dz = lz * Math.sin(Mz);
-         return Rz.TranslationToRef(0, 0, tz, Kz.Matrix[1]), Rz.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, pz, dz, 1, 0, 0, 0, 0, 1, Kz.Matrix[0]), Kz.Matrix[1].multiplyToRef(Kz.Matrix[0], Kz.Matrix[0]), Rz.TranslationToRef(0, 0, -tz, Kz.Matrix[1]), Kz.Matrix[0].multiplyToRef(Kz.Matr … [truncated]
+       withMetaData(qq, Eq, gq, Yq) {
+         return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new rx(qq, Eq, gq, Yq)), this
```

#### 254. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2590-L2604` → after: `L15971-L15972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15971-L15972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15971-L15972) · [Before (L2590-L2604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2590-L2604)

```diff
-       static PerspectiveLH(zz, uz, bz, Ez, nz) {
-         let iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
-         const lz = new Rz,
-           Mz = 2 * bz / zz,
-           tz = 2 * bz / uz,
-           Hz = (Ez + bz) / (Ez - bz),
-           Oz = -2 * Ez * bz / (Ez - bz),
-           pz = Math.tan(iz);
-         return Rz.FromValuesToRef(Mz, 0, 0, 0, 0, tz, 0, pz, 0, 0, Hz, 1, 0, 0, Oz, 0, lz), nz && lz.multiplyToRef(Xz, lz), lz._updateIdentityStatus(!1), lz
-       }
-       static PerspectiveFovLH(zz, uz, bz, Ez, nz) {
-         let iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
-           lz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-         const Mz = new Rz;
-         return Rz.PerspectiveFovLHToRef(zz, uz, bz, Ez, Mz, !0, nz, iz, lz), Mz
+       withMaterial(qq) {
+         return qq instanceof Ux && (qq = qq.build()), qq && (this._model.resources = this._model.resources ?? new hx, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(qq)), this
```

#### 255. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2606-L2635` → after: `L15974-L15975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15974-L15975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15974-L15975) · [Before (L2606-L2635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2606-L2635)

```diff
-       static PerspectiveFovLHToRef(zz, uz, bz, Ez, nz) {
-         let iz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-           lz = arguments.length > 6 ? arguments[6] : void 0,
-           Mz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
-           tz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
-         const Hz = bz,
-           Oz = Ez,
-           pz = 1 / Math.tan(.5 * zz),
-           dz = iz ? pz / uz : pz,
-           Fz = iz ? pz : pz * uz,
-           Zz = tz && 0 === Hz ? -1 : 0 !== Oz ? (Oz + Hz) / (Oz - Hz) : 1,
-           Kz = tz && 0 === Hz ? 2 * Oz : 0 !== Oz ? -2 * Oz * Hz / (Oz - Hz) : -2 * Hz,
-           wz = Math.tan(Mz);
-         return Rz.FromValuesToRef(dz, 0, 0, 0, 0, Fz, 0, wz, 0, 0, Zz, 1, 0, 0, Kz, 0, nz), lz && nz.multiplyToRef(Xz, nz), nz._updateIdentityStatus(!1), nz
-       }
-       static PerspectiveFovReverseLHToRef(zz, uz, bz, Ez, nz) {
- ... (14 more removed lines; see GitHub link above)
+       withMesh(qq) {
+         return qq instanceof Rx && (qq = qq.build()), this._model.resources = this._model.resources ?? new hx, this._model.resources.object.push(qq), this
```

#### 256. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2637-L2669` → after: `L15977-L15978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15977-L15978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15977-L15978) · [Before (L2637-L2669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2637-L2669)

```diff
-       static PerspectiveFovRHToRef(zz, uz, bz, Ez, nz) {
-         let iz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-           lz = arguments.length > 6 ? arguments[6] : void 0,
-           Mz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
-           tz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
-         const Hz = bz,
-           Oz = Ez,
-           pz = 1 / Math.tan(.5 * zz),
-           dz = iz ? pz / uz : pz,
-           Fz = iz ? pz : pz * uz,
-           Zz = tz && 0 === Hz ? 1 : 0 !== Oz ? -(Oz + Hz) / (Oz - Hz) : -1,
-           Kz = tz && 0 === Hz ? 2 * Oz : 0 !== Oz ? -2 * Oz * Hz / (Oz - Hz) : -2 * Hz,
-           wz = Math.tan(Mz);
-         return Rz.FromValuesToRef(dz, 0, 0, 0, 0, Fz, 0, wz, 0, 0, Zz, -1, 0, 0, Kz, 0, nz), lz && nz.multiplyToRef(Xz, nz), nz._updateIdentityStatus(!1), nz
-       }
-       static PerspectiveFovReverseRHToRef(zz, uz, bz, Ez, nz) {
- ... (17 more removed lines; see GitHub link above)
+       withComponents(qq) {
+         return qq instanceof kx && (qq = qq.build()), this._model.resources = this._model.resources ?? new hx, this._model.resources.object.push(qq), this
```

#### 257. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2671-L2674` → after: `L15980-L15981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15980-L15981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15980-L15981) · [Before (L2671-L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2671-L2674)

```diff
-       static GetAsMatrix2x2(zz) {
-         const uz = zz.m,
-           bz = [uz[0], uz[1], uz[4], uz[5]];
-         return iz.b.MatrixUse64Bits ? bz : new Float32Array(bz)
+       withBuild(qq, Eq, gq) {
+         return this._model.build = this._model.build ?? new Gx, this._model.build.item?.push(new Lx(qq, Eq, gq)), this
```

#### 258. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2676-L2679` → after: `L15983-L15984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15983-L15984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15983-L15984) · [Before (L2676-L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2676-L2679)

```diff
-       static GetAsMatrix3x3(zz) {
-         const uz = zz.m,
-           bz = [uz[0], uz[1], uz[2], uz[4], uz[5], uz[6], uz[8], uz[9], uz[10]];
-         return iz.b.MatrixUse64Bits ? bz : new Float32Array(bz)
+       withUnit(qq) {
+         return this._model.unit = qq, this
```

#### 259. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2681-L2683` → after: `L15986-L15987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15986-L15987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15986-L15987) · [Before (L2681-L2683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2681-L2683)

```diff
-       static Transpose(zz) {
-         const uz = new Rz;
-         return Rz.TransposeToRef(zz, uz), uz
+       reset() {
+         return this._model = new tx, this._objects = new Map, this
```

#### 260. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2685-L2778` → after: `L15989-L16015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR15989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L15989-L16015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L15989-L16015) · [Before (L2685-L2778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2685-L2778)

```diff
-       static TransposeToRef(zz, uz) {
-         const bz = zz.m,
-           Ez = bz[0],
-           nz = bz[4],
-           iz = bz[8],
-           lz = bz[12],
-           Mz = bz[1],
-           tz = bz[5],
-           Hz = bz[9],
-           Oz = bz[13],
-           pz = bz[2],
-           dz = bz[6],
-           Fz = bz[10],
-           Zz = bz[14],
-           Rz = bz[3],
-           Kz = bz[7],
- ... (78 more removed lines; see GitHub link above)
+       build() {
+         if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
+         if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
+         return this._model
+       }
+     }
+     Fx.KnownMetaSet = new Set(tx.KnownMeta.map((qq => qq.toLowerCase())));
+     class sx {
+       withContentType(qq) {
+         this._cts || (this._cts = new dx);
+         const Eq = this._cts.items;
+         return Eq.some((Eq => Eq.ext === qq.ext && Eq.ct === qq.ct)) || Eq.push(qq), this
+       }
+       withRelationship(qq) {
+         this._rs || (this._rs = new Hx);
+         const Eq = this._rs.items;
+ ... (11 more added lines; see GitHub link above)
```

#### 261. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2780` → after: `L16017-L16018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR16017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L16017-L16018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L16017-L16018) · [Before (L2780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2780)

```diff
-       }), (0, Hz.c)("BABYLON.Vector2", pz), (0, Hz.c)("BABYLON.Vector3", dz), (0, Hz.c)("BABYLON.Vector4", Fz), (0, Hz.c)("BABYLON.Matrix", Rz))
+         return new Px(this._cts, this._rs, this._m)
+       }
```

#### 262. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2790-L2799` → after: `L16022-L16058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR16022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L16022-L16058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L16022-L16058) · [Before (L2790-L2799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2790-L2799)

```diff
-         let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           bz = arguments.length > 2 ? arguments[2] : void 0,
-           Ez = arguments.length > 3 ? arguments[3] : void 0;
-         this.initialize(zz, uz, bz, Ez)
-       }
-       initialize(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           bz = arguments.length > 2 ? arguments[2] : void 0,
-           Ez = arguments.length > 3 ? arguments[3] : void 0;
-         return this.mask = zz, this.skipNextObservers = uz, this.target = bz, this.currentTarget = Ez, this
+         this._o = qq
+       }
+       get options() {
+         return this._o
+       }
+       async serializeAsync(qq) {
+         const Eq = await this.ensureZipLibReadyAsync();
+         if (!Eq) return;
+         const gq = Eq.Zip,
+           Yq = Eq.ZipDeflate;
+         if (!gq || !Yq) throw new Error("fflate Zip / ZipDeflate not available");
+         const lq = function(qq, Eq, gq) {
+           const lq = new Yq(Eq, {
+             level: 6
+           });
+           qq.add(lq);
+ ... (21 more added lines; see GitHub link above)
```

#### 263. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2803-L2809` → after: `L16062-L16072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR16062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L16062-L16072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L16062-L16072) · [Before (L2803-L2809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2803-L2809)

```diff
-       constructor(zz, uz) {
-         let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         this.callback = zz, this.mask = uz, this.scope = bz, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
-       }
-       remove() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         this._remove && this._remove(zz)
+       static async SerializeToMemoryAsync(qq) {
+         const Eq = new Array;
+         let gq = 0;
+         for (var Yq = arguments.length, lq = new Array(Yq > 1 ? Yq - 1 : 0), Oq = 1; Oq < Yq; Oq++) lq[Oq - 1] = arguments[Oq];
+         if (await qq.serializeAsync((function(qq, Yq, lq) {
+             Eq.push(Yq), gq += Yq.length
+           }), ...lq), !gq) return;
+         const mq = new Uint8Array(gq);
+         let xq = 0;
+         for (const Aq of Eq) mq.set(Aq, xq), xq += Aq.length;
+         return mq
```

#### 264. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2813-L2842` → after: `L16078-L16082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR16078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L16078-L16082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L16078-L16082) · [Before (L2813-L2842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2813-L2842)

```diff
-       static FromPromise(zz, uz) {
-         const bz = new lz;
-         return zz.then((zz => {
-           bz.notifyObservers(zz)
-         })).catch((zz => {
-           if (!uz) throw zz;
-           uz.notifyObservers(zz)
-         })), bz
-       }
-       get observers() {
-         return this._observers
-       }
-       constructor(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this.notifyIfTriggered = uz, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new nz(0), zz && (this._onObserverAdded = zz)
-       }
- ... (14 more removed lines; see GitHub link above)
+       constructor() {
+         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
+           gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
+         this._from = qq, this._to = Eq, this._step = gq, this._i = qq
```

#### 265. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2844-L2845` → after: `L16084-L16087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR16084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L16084-L16087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L16084-L16087) · [Before (L2844-L2845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2844-L2845)

```diff
-       addOnce(zz) {
-         return this.add(zz, void 0, void 0, void 0, !0)
+       next() {
+         if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
+         const qq = this._i;
+         return this._i += this._step, qq
```

#### 266. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2847-L2850` → after: `L16089-L16090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR16089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L16089-L16090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L16089-L16090) · [Before (L2847-L2850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2847-L2850)

```diff
-       remove(zz) {
-         if (!zz) return !1;
-         zz._remove = null;
-         return -1 !== this._observers.indexOf(zz) && (this._deferUnregister(zz), !0)
+       reset() {
+         return this._i = this._from, this
```

#### 267. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2852-L2855` → after: `L16092-L16128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR16092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L16092-L16128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L16092-L16128) · [Before (L2852-L2855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2852-L2855)

```diff
-       removeCallback(zz, uz) {
-         for (let bz = 0; bz < this._observers.length; bz++) {
-           const Ez = this._observers[bz];
-           if (!Ez._willBeUnregistered && (Ez.callback === zz && (!uz || uz === Ez.scope))) return this._deferUnregister(Ez), !0
+     }
+     class Ix extends Xx {
+       constructor() {
+         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+         super({
+           ...Ix.DefaultOptions,
+           ...qq
+         })
+       }
+       toModel(qq) {
+         for (var Eq = arguments.length, gq = new Array(Eq > 1 ? Eq - 1 : 0), Yq = 1; Yq < Eq; Yq++) gq[Yq - 1] = arguments[Yq];
+         gq = gq.filter((qq => qq instanceof cY.c || qq instanceof Nq.c));
+         const lq = new Cx,
+           Oq = qq,
+           mq = new Map,
+           xq = this.options.exportInstances ? [] : null;
+ ... (21 more added lines; see GitHub link above)
```

#### 268. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2857-L2900` → after: `L16130-L16177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR16130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L16130-L16177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L16130-L16177) · [Before (L2857-L2900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2857-L2900)

```diff
-         return !1
-       }
-       _deferUnregister(zz) {
-         zz._willBeUnregistered || (this._numObserversMarkedAsDeleted++, zz.unregisterOnNextCall = !1, zz._willBeUnregistered = !0, setTimeout((() => {
-           this._remove(zz)
-         }), 0))
-       }
-       _remove(zz) {
-         let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (!zz) return !1;
-         const bz = this._observers.indexOf(zz);
-         return -1 !== bz && (uz && this._numObserversMarkedAsDeleted--, this._observers.splice(bz, 1), !0)
-       }
-       makeObserverTopPriority(zz) {
-         this._remove(zz, !1), this._observers.unshift(zz)
-       }
- ... (28 more removed lines; see GitHub link above)
+         if (xq && xq.length) {
+           const qq = this._groupBy(xq, (qq => qq.Plq));
+           for (const [Eq, gq] of Array.from(qq.entries()))
+             if (gq && gq.length)
+               for (let qq = 0; qq < gq.length; qq++) {
+                 const Yq = gq[qq].getWorldMatrix(),
+                   lq = Eq.fn;
+                 for (let qq = 0; qq < lq.length; qq++) {
+                   const Eq = lq[qq],
+                     gq = mq.get(Eq);
+                   gq && Oq.withBuild(gq.id, this._handleBabylonTo3mfMatrixTransformToRef(Yq, Qx.Zero()))
+                 }
+               }
+         }
+         return Oq.build()
+       }
+ ... (32 more added lines; see GitHub link above)
```

#### 269. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2907-L2909` → after: `L16180-L16187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR16180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L16180-L16187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L16180-L16187) · [Before (L2907-L2909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2907-L2909)

```diff
-       clone() {
-         const zz = new lz;
-         return zz._observers = this._observers.slice(0), zz
+       _groupBy(qq, Eq) {
+         const gq = new Map;
+         for (const Yq of qq) {
+           const qq = Eq(Yq),
+             lq = gq.get(qq);
+           lq ? lq.push(Yq) : gq.set(qq, [Yq])
+         }
+         return gq
```

#### 270. `bundles/preprod.bloxd.io/chunks/js/225.js` (Changed code · before: `L2911-L2915` → after: `L16189-L16191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926ceeR16189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a0d31e31dc4e4d92deb09b7950d2354c77a7e21cbaa714b29b564dd9c926cee) · [After (L16189-L16191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/225.js#L16189-L16191) · [Before (L2911-L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/225.js#L2911-L2915)

```diff
-       hasSpecificMask() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
-         for (const uz of this._observers)
-           if (uz.mask & zz || uz.mask === zz) return !0;
-         return !1
+       _handleBabylonTo3mfMatrixTransformToRef(qq, Eq) {
+         const gq = qq.multiplyToRef(Ix._R_BJS_TO_3MF, Gq.e.Zero()).m;
+         return Eq.values = [gq[0], gq[1], gq[2], gq[4], gq[5], gq[6], gq[8], gq[9], gq[10], gq[12], gq[13], gq[14]], Eq
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/226.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/226.js` (156 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843)

#### 1. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L4)

```diff
-   36715: (zz, uz, bz) => {
+   37153: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L6-L9` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L6) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L6-L9)

```diff
-       c: () => pz,
-       g: () => dz,
-       j: () => Rz,
-       k: () => Fz
+       b: () => lq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L11-L14` → after: `L8-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L8-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L8-L46) · [Before (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L11-L14)

```diff
-     var Ez = bz(36528),
-       nz = bz(36526),
-       iz = bz(36553),
-       lz = bz(36564);
+     var Yq = gq(37156);
+     class lq {
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+       }
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
+       }
+     }
+     lq.Instances = [], lq.OnEnginesDisposedObservable = new Yq.d, lq._LastCreatedScene = null, lq.UseFallbackTexture = !0, lq.FallbackTexture = ""
+   },
+   37151: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => Yq
+     });
+     class Yq {
+ ... (23 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L17` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L49) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L17)

```diff
-       return Math.pow(zz, nz.i)
+       qq.updateFlag = Yq._UpdateFlagSeed++
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L20-L21` → after: `L52-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L52-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L52-L88) · [Before (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L20-L21)

```diff
-     function tz(zz) {
-       return zz <= .04045 ? .0773993808 * zz : Math.pow(.947867299 * (zz + .055), 2.4)
+     function Oq(qq, Eq, gq) {
+       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       const lq = qq.bYq(),
+         Oq = Eq.bYq(),
+         mq = lq[0],
+         xq = lq[1],
+         Aq = lq[2],
+         cq = lq[3],
+         uq = lq[4],
+         Bq = lq[5],
+         Wq = lq[6],
+         Nq = lq[7],
+         aq = lq[8],
+         Vq = lq[9],
+         dq = lq[10],
+         jq = lq[11],
+ ... (21 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L24-L25` → after: `L91-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L91-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L91-L93) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L24-L25)

```diff
-     function Hz(zz) {
-       return Math.pow(zz, nz.f)
+     function mq(qq, Eq, gq) {
+       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       Oq(qq, Eq, gq.bYq(), Yq), lq(gq)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L28-L29` → after: `L96-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L96-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L96-L162) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L28-L29)

```diff
-     function Oz(zz) {
-       return zz <= .0031308 ? 12.92 * zz : 1.055 * Math.pow(zz, .41666) - .055
+     function xq(qq, Eq) {
+       let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const Yq = qq.bYq();
+       Eq[gq] = Yq[0], Eq[gq + 1] = Yq[1], Eq[gq + 2] = Yq[2], Eq[gq + 3] = Yq[3], Eq[gq + 4] = Yq[4], Eq[gq + 5] = Yq[5], Eq[gq + 6] = Yq[6], Eq[gq + 7] = Yq[7], Eq[gq + 8] = Yq[8], Eq[gq + 9] = Yq[9], Eq[gq + 10] = Yq[10], Eq[gq + 11] = Yq[11], Eq[gq + 12] = Yq[12], Eq[gq + 13]  … [truncated]
+     }
+ 
+     function Aq(qq, Eq) {
+       const gq = cq(qq, Eq.bYq());
+       return gq && lq(Eq), gq
+     }
+ 
+     function cq(qq, Eq) {
+       const gq = qq.bYq(),
+         Yq = gq[0],
+         lq = gq[1],
+         Oq = gq[2],
+ ... (51 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L34-L36` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L187-L188) · [Before (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L34-L36)

```diff
-           uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         this.r = zz, this.g = uz, this.b = bz
+           Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         this.x = qq, this.y = Eq
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L39` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L191) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L39)

```diff
-         return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
+         return `{X: ${this.x} Y: ${this.y}}`
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L42` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L194) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L42)

```diff
-         return "Color3"
+         return "Vector2"
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L45-L46` → after: `L197-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L197-L198) · [Before (L45-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L45-L46)

```diff
-         let zz = 255 * this.r | 0;
-         return zz = 397 * zz ^ 255 * this.g, zz = 397 * zz ^ 255 * this.b, zz
+         let qq = uq(this.x);
+         return qq = 397 * qq ^ uq(this.y), qq
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L50` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L202) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L50)

```diff
-         return zz[uz] = this.r, zz[uz + 1] = this.g, zz[uz + 2] = this.b, this
+         return qq[Eq] = this.x, qq[Eq + 1] = this.y, this
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L52` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L204) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L52)

```diff
-       Fuz(zz) {
+       ogq(qq) {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L56-L58` → after: `L208-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L208-L209) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L56-L58)

```diff
-       toColor4() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
-         return new dz(this.r, this.g, this.b, zz)
+       bYq() {
+         return [this.x, this.y]
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L60-L61` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L211-L212) · [Before (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L60-L61)

```diff
-       obz() {
-         return [this.r, this.g, this.b]
+       WG(qq) {
+         return this.x = qq.x, this.y = qq.y, this
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L63-L64` → after: `L214-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L214-L215) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L63-L64)

```diff
-       toLuminance() {
-         return .3 * this.r + .59 * this.g + .11 * this.b
+       Vqq(qq, Eq) {
+         return this.x = qq, this.y = Eq, this
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L66-L67` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L217-L218) · [Before (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L66-L67)

```diff
-       multiply(zz) {
-         return new pz(this.r * zz.r, this.g * zz.g, this.b * zz.b)
+       set(qq, Eq) {
+         return this.Vqq(qq, Eq)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L69-L70` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L220-L221) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L69-L70)

```diff
-       multiplyToRef(zz, uz) {
-         return uz.r = this.r * zz.r, uz.g = this.g * zz.g, uz.b = this.b * zz.b, uz
+       A4(qq) {
+         return this.Vqq(qq, qq)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L72-L73` → after: `L223-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L223-L224) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L72-L73)

```diff
-       multiplyInPlace(zz) {
-         return this.r *= zz.r, this.g *= zz.g, this.b *= zz.b, this
+       add(qq) {
+         return new Bq(this.x + qq.x, this.y + qq.y)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L75-L76` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L226-L227) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L75-L76)

```diff
-       multiplyByFloats(zz, uz, bz) {
-         return new pz(this.r * zz, this.g * uz, this.b * bz)
+       addToRef(qq, Eq) {
+         return Eq.x = this.x + qq.x, Eq.y = this.y + qq.y, Eq
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L78-L79` → after: `L229-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L229-L230) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L78-L79)

```diff
-       divide(zz) {
-         throw new ReferenceError("Can not divide a color")
+       addInPlace(qq) {
+         return this.x += qq.x, this.y += qq.y, this
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L81-L82` → after: `L232-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L232-L233) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L81-L82)

```diff
-       divideToRef(zz, uz) {
-         throw new ReferenceError("Can not divide a color")
+       addInPlaceFromFloats(qq, Eq) {
+         return this.x += qq, this.y += Eq, this
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L84-L85` → after: `L235-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L235-L236) · [Before (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L84-L85)

```diff
-       divideInPlace(zz) {
-         throw new ReferenceError("Can not divide a color")
+       addVector3(qq) {
+         return new Bq(this.x + qq.x, this.y + qq.y)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L87-L88` → after: `L238-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L238-L239) · [Before (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L87-L88)

```diff
-       minimizeInPlace(zz) {
-         return this.minimizeInPlaceFromFloats(zz.r, zz.g, zz.b)
+       subtract(qq) {
+         return new Bq(this.x - qq.x, this.y - qq.y)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L90-L91` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L241-L242) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L90-L91)

```diff
-       maximizeInPlace(zz) {
-         return this.maximizeInPlaceFromFloats(zz.r, zz.g, zz.b)
+       subtractToRef(qq, Eq) {
+         return Eq.x = this.x - qq.x, Eq.y = this.y - qq.y, Eq
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L93-L94` → after: `L244-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L244-L245) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L93-L94)

```diff
-       minimizeInPlaceFromFloats(zz, uz, bz) {
-         return this.r = Math.min(zz, this.r), this.g = Math.min(uz, this.g), this.b = Math.min(bz, this.b), this
+       KYq(qq) {
+         return this.x -= qq.x, this.y -= qq.y, this
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L96-L97` → after: `L247-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L247-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L247-L248) · [Before (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L96-L97)

```diff
-       maximizeInPlaceFromFloats(zz, uz, bz) {
-         return this.r = Math.max(zz, this.r), this.g = Math.max(uz, this.g), this.b = Math.max(bz, this.b), this
+       multiplyInPlace(qq) {
+         return this.x *= qq.x, this.y *= qq.y, this
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L99-L100` → after: `L250-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L250-L251) · [Before (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L99-L100)

```diff
-       floorToRef(zz) {
-         throw new ReferenceError("Can not floor a color")
+       multiply(qq) {
+         return new Bq(this.x * qq.x, this.y * qq.y)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L102-L103` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L253-L254) · [Before (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L102-L103)

```diff
-       floor() {
-         throw new ReferenceError("Can not floor a color")
+       multiplyToRef(qq, Eq) {
+         return Eq.x = this.x * qq.x, Eq.y = this.y * qq.y, Eq
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L105-L106` → after: `L256-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L256-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L256-L257) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L105-L106)

```diff
-       fractToRef(zz) {
-         throw new ReferenceError("Can not fract a color")
+       multiplyByFloats(qq, Eq) {
+         return new Bq(this.x * qq, this.y * Eq)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L108-L109` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L259-L260) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L108-L109)

```diff
-       fract() {
-         throw new ReferenceError("Can not fract a color")
+       divide(qq) {
+         return new Bq(this.x / qq.x, this.y / qq.y)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L111-L112` → after: `L262-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L262-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L262-L263) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L111-L112)

```diff
-       equals(zz) {
-         return zz && this.r === zz.r && this.g === zz.g && this.b === zz.b
+       divideToRef(qq, Eq) {
+         return Eq.x = this.x / qq.x, Eq.y = this.y / qq.y, Eq
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L114-L115` → after: `L265-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L265-L266) · [Before (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L114-L115)

```diff
-       equalsFloats(zz, uz, bz) {
-         return this.zlz(zz, uz, bz)
+       divideInPlace(qq) {
+         return this.x = this.x / qq.x, this.y = this.y / qq.y, this
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L117-L118` → after: `L268-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L268-L269) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L117-L118)

```diff
-       zlz(zz, uz, bz) {
-         return this.r === zz && this.g === uz && this.b === bz
+       minimizeInPlace(qq) {
+         return this.minimizeInPlaceFromFloats(qq.x, qq.y)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L120-L122` → after: `L271-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L271-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L271-L284) · [Before (L120-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L120-L122)

```diff
-       equalsWithEpsilon(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nz.b;
-         return (0, iz.WithinEpsilon)(this.r, zz.r, uz) && (0, iz.WithinEpsilon)(this.g, zz.g, uz) && (0, iz.WithinEpsilon)(this.b, zz.b, uz)
+       maximizeInPlace(qq) {
+         return this.maximizeInPlaceFromFloats(qq.x, qq.y)
+       }
+       minimizeInPlaceFromFloats(qq, Eq) {
+         return this.x = Math.min(qq, this.x), this.y = Math.min(Eq, this.y), this
+       }
+       maximizeInPlaceFromFloats(qq, Eq) {
+         return this.x = Math.max(qq, this.x), this.y = Math.max(Eq, this.y), this
+       }
+       subtractFromFloats(qq, Eq) {
+         return new Bq(this.x - qq, this.y - Eq)
+       }
+       subtractFromFloatsToRef(qq, Eq, gq) {
+         return gq.x = this.x - qq, gq.y = this.y - Eq, gq
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L125` → after: `L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L287) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L125)

```diff
-         throw new ReferenceError("Can not negate a color")
+         return new Bq(-this.x, -this.y)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L128` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L290) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L128)

```diff
-         throw new ReferenceError("Can not negate a color")
+         return this.x *= -1, this.y *= -1, this
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L131-L134` → after: `L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L293) · [Before (L131-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L131-L134)

```diff
-         throw new ReferenceError("Can not negate a color")
-       }
-       scale(zz) {
-         return new pz(this.r * zz, this.g * zz, this.b * zz)
+         return qq.x = -this.x, qq.y = -this.y, qq
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L137` → after: `L296-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L296-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L296-L299) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L137)

```diff
-         return this.r *= zz, this.g *= zz, this.b *= zz, this
+         return this.x *= qq, this.y *= qq, this
+       }
+       scale(qq) {
+         return new Bq(this.x * qq, this.y * qq)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L140` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L302) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L140)

```diff
-         return uz.r = this.r * zz, uz.g = this.g * zz, uz.b = this.b * zz, uz
+         return Eq.x = this.x * qq, Eq.y = this.y * qq, Eq
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L143` → after: `L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L305) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L143)

```diff
-         return uz.r += this.r * zz, uz.g += this.g * zz, uz.b += this.b * zz, uz
+         return Eq.x += this.x * qq, Eq.y += this.y * qq, Eq
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L145-L149` → after: `L307-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L307-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L307-L308) · [Before (L145-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L145-L149)

```diff
-       clampToRef() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
-           bz = arguments.length > 2 ? arguments[2] : void 0;
-         return bz.r = (0, iz.Clamp)(this.r, zz, uz), bz.g = (0, iz.Clamp)(this.g, zz, uz), bz.b = (0, iz.Clamp)(this.b, zz, uz), bz
+       equals(qq) {
+         return qq && this.x === qq.x && this.y === qq.y
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L151-L152` → after: `L310-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L310-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L310-L312) · [Before (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L151-L152)

```diff
-       add(zz) {
-         return new pz(this.r + zz.r, this.g + zz.g, this.b + zz.b)
+       equalsWithEpsilon(qq) {
+         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yq.c;
+         return qq && (0, xq.WithinEpsilon)(this.x, qq.x, Eq) && (0, xq.WithinEpsilon)(this.y, qq.y, Eq)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L154-L155` → after: `L314-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L314-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L314-L315) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L154-L155)

```diff
-       addInPlace(zz) {
-         return this.r += zz.r, this.g += zz.g, this.b += zz.b, this
+       Cmq(qq, Eq) {
+         return this.x === qq && this.y === Eq
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L157-L158` → after: `L317-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L317-L318) · [Before (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L157-L158)

```diff
-       addInPlaceFromFloats(zz, uz, bz) {
-         return this.r += zz, this.g += uz, this.b += bz, this
+       floor() {
+         return new Bq(Math.floor(this.x), Math.floor(this.y))
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L160-L161` → after: `L320-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L320-L321) · [Before (L160-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L160-L161)

```diff
-       addToRef(zz, uz) {
-         return uz.r = this.r + zz.r, uz.g = this.g + zz.g, uz.b = this.b + zz.b, uz
+       floorToRef(qq) {
+         return qq.x = Math.floor(this.x), qq.y = Math.floor(this.y), qq
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L163-L164` → after: `L323-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L323-L324) · [Before (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L163-L164)

```diff
-       subtract(zz) {
-         return new pz(this.r - zz.r, this.g - zz.g, this.b - zz.b)
+       fract() {
+         return new Bq(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L166-L167` → after: `L326-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L326-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L326-L327) · [Before (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L166-L167)

```diff
-       subtractToRef(zz, uz) {
-         return uz.r = this.r - zz.r, uz.g = this.g - zz.g, uz.b = this.b - zz.b, uz
+       fractToRef(qq) {
+         return qq.x = this.x - Math.floor(this.x), qq.y = this.y - Math.floor(this.y), qq
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L169-L170` → after: `L329-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L329-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L329-L330) · [Before (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L169-L170)

```diff
-       Qbz(zz) {
-         return this.r -= zz.r, this.g -= zz.g, this.b -= zz.b, this
+       rotate(qq) {
+         return this.rotateToRef(qq, new Bq)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L172-L173` → after: `L332-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L332-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L332-L335) · [Before (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L172-L173)

```diff
-       subtractFromFloats(zz, uz, bz) {
-         return new pz(this.r - zz, this.g - uz, this.b - bz)
+       rotateToRef(qq, Eq) {
+         const gq = Math.cos(qq),
+           Yq = Math.sin(qq);
+         return Eq.x = gq * this.x - Yq * this.y, Eq.y = Yq * this.x + gq * this.y, Eq
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L175-L176` → after: `L337-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L337-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L337-L338) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L175-L176)

```diff
-       subtractFromFloatsToRef(zz, uz, bz, Ez) {
-         return Ez.r = this.r - zz, Ez.g = this.g - uz, Ez.b = this.b - bz, Ez
+       length() {
+         return Math.sqrt(this.x * this.x + this.y * this.y)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L178-L179` → after: `L340-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L340-L341) · [Before (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L178-L179)

```diff
-       clone() {
-         return new pz(this.r, this.g, this.b)
+       lengthSquared() {
+         return this.x * this.x + this.y * this.y
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L181-L182` → after: `L343-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L343-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L343-L344) · [Before (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L181-L182)

```diff
-       euz(zz) {
-         return this.r = zz.r, this.g = zz.g, this.b = zz.b, this
+       normalize() {
+         return this.normalizeFromLength(this.length())
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L184-L185` → after: `L346-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L346-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L346-L347) · [Before (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L184-L185)

```diff
-       P_(zz, uz, bz) {
-         return this.r = zz, this.g = uz, this.b = bz, this
+       normalizeFromLength(qq) {
+         return 0 === qq || 1 === qq ? this : this.scaleInPlace(1 / qq)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L187-L188` → after: `L349-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L349-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L349-L351) · [Before (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L187-L188)

```diff
-       set(zz, uz, bz) {
-         return this.P_(zz, uz, bz)
+       normalizeToNew() {
+         const qq = new Bq;
+         return this.normalizeToRef(qq), qq
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L190-L215` → after: `L353-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L353-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L353-L355) · [Before (L190-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L190-L215)

```diff
-       Vk(zz) {
-         return this.r = this.g = this.b = zz, this
-       }
-       toHexString() {
-         const zz = Math.round(255 * this.r),
-           uz = Math.round(255 * this.g),
-           bz = Math.round(255 * this.b);
-         return "#" + (0, iz.ToHex)(zz) + (0, iz.ToHex)(uz) + (0, iz.ToHex)(bz)
-       }
-       fromHexString(zz) {
-         return "#" !== zz.substring(0, 1) || 7 !== zz.length || (this.r = parseInt(zz.substring(1, 3), 16) / 255, this.g = parseInt(zz.substring(3, 5), 16) / 255, this.b = parseInt(zz.substring(5, 7), 16) / 255), this
-       }
-       toHSV() {
-         return this.toHSVToRef(new pz)
-       }
-       toHSVToRef(zz) {
- ... (10 more removed lines; see GitHub link above)
+       normalizeToRef(qq) {
+         const Eq = this.length();
+         return 0 === Eq || 1 === Eq ? (qq.x = this.x, qq.y = this.y, qq) : this.scaleToRef(1 / Eq, qq)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L217-L220` → after: `L357-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L357-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L357-L358) · [Before (L217-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L217-L220)

```diff
-       toLinearSpace() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const uz = new pz;
-         return this.toLinearSpaceToRef(uz, zz), uz
+       clone() {
+         return new Bq(this.x, this.y)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L222-L223` → after: `L360-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L360-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L360-L361) · [Before (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L222-L223)

```diff
-       toLinearSpaceToRef(zz) {
-         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (zz.r = tz(this.r), zz.g = tz(this.g), zz.b = tz(this.b)) : (zz.r = Mz(this.r), zz.g = Mz(this.g), zz.b = Mz(this.b)), this
+       dot(qq) {
+         return this.x * qq.x + this.y * qq.y
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L225-L228` → after: `L363-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L363-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L363-L364) · [Before (L225-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L225-L228)

```diff
-       toGammaSpace() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const uz = new pz;
-         return this.toGammaSpaceToRef(uz, zz), uz
+       static Zero() {
+         return new Bq(0, 0)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L230-L231` → after: `L366-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L366-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L366-L367) · [Before (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L230-L231)

```diff
-       toGammaSpaceToRef(zz) {
-         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (zz.r = Oz(this.r), zz.g = Oz(this.g), zz.b = Oz(this.b)) : (zz.r = Hz(this.r), zz.g = Hz(this.g), zz.b = Hz(this.b)), this
+       static One() {
+         return new Bq(1, 1)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L233-L246` → after: `L369-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L369-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L369-L372) · [Before (L233-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L233-L246)

```diff
-       static HSVtoRGBToRef(zz, uz, bz, Ez) {
-         const nz = bz * uz,
-           iz = zz / 60,
-           lz = nz * (1 - Math.abs(iz % 2 - 1));
-         let Mz = 0,
-           tz = 0,
-           Hz = 0;
-         iz >= 0 && iz <= 1 ? (Mz = nz, tz = lz) : iz >= 1 && iz <= 2 ? (Mz = lz, tz = nz) : iz >= 2 && iz <= 3 ? (tz = nz, Hz = lz) : iz >= 3 && iz <= 4 ? (tz = lz, Hz = nz) : iz >= 4 && iz <= 5 ? (Mz = lz, Hz = nz) : iz >= 5 && iz <= 6 && (Mz = nz, Hz = lz);
-         const Oz = bz - nz;
-         return Ez.r = Mz + Oz, Ez.g = tz + Oz, Ez.b = Hz + Oz, Ez
-       }
-       static FromHSV(zz, uz, bz) {
-         const Ez = new pz(0, 0, 0);
-         return pz.HSVtoRGBToRef(zz, uz, bz, Ez), Ez
+       static Random() {
+         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         return new Bq((0, xq.RandomRange)(qq, Eq), (0, xq.RandomRange)(qq, Eq))
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L248-L249` → after: `L374-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L374-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L374-L380) · [Before (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L248-L249)

```diff
-       static FromHexString(zz) {
-         return new pz(0, 0, 0).fromHexString(zz)
+       static RandomToRef() {
+         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         return (arguments.length > 2 ? arguments[2] : void 0).Vqq((0, xq.RandomRange)(qq, Eq), (0, xq.RandomRange)(qq, Eq))
+       }
+       static get ZeroReadOnly() {
+         return Bq._ZeroReadOnly
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L253` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L384) · [Before (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L253)

```diff
-         return new pz(zz[uz], zz[uz + 1], zz[uz + 2])
+         return new Bq(qq[Eq], qq[Eq + 1])
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L255-L258` → after: `L386-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L386-L387) · [Before (L255-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L255-L258)

```diff
-       static FromArrayToRef(zz) {
-         let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           bz = arguments.length > 2 ? arguments[2] : void 0;
-         bz.r = zz[uz], bz.g = zz[uz + 1], bz.b = zz[uz + 2]
+       static FromArrayToRef(qq, Eq, gq) {
+         return gq.x = qq[Eq], gq.y = qq[Eq + 1], gq
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L260-L261` → after: `L389-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L389-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L389-L390) · [Before (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L260-L261)

```diff
-       static FromInts(zz, uz, bz) {
-         return new pz(zz / 255, uz / 255, bz / 255)
+       static FromFloatsToRef(qq, Eq, gq) {
+         return gq.Vqq(qq, Eq), gq
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L263-L265` → after: `L392-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L392-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L392-L397) · [Before (L263-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L263-L265)

```diff
-       static Lerp(zz, uz, bz) {
-         const Ez = new pz(0, 0, 0);
-         return pz.LerpToRef(zz, uz, bz, Ez), Ez
+       static CatmullRom(qq, Eq, gq, Yq, lq) {
+         const Oq = lq * lq,
+           mq = lq * Oq,
+           xq = .5 * (2 * Eq.x + (-qq.x + gq.x) * lq + (2 * qq.x - 5 * Eq.x + 4 * gq.x - Yq.x) * Oq + (-qq.x + 3 * Eq.x - 3 * gq.x + Yq.x) * mq),
+           Aq = .5 * (2 * Eq.y + (-qq.y + gq.y) * lq + (2 * qq.y - 5 * Eq.y + 4 * gq.y - Yq.y) * Oq + (-qq.y + 3 * Eq.y - 3 * gq.y + Yq.y) * mq);
+         return new Bq(xq, Aq)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L267-L268` → after: `L399-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L399-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L399-L405) · [Before (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L267-L268)

```diff
-       static LerpToRef(zz, uz, bz, Ez) {
-         Ez.r = zz.r + (uz.r - zz.r) * bz, Ez.g = zz.g + (uz.g - zz.g) * bz, Ez.b = zz.b + (uz.b - zz.b) * bz
+       static ClampToRef(qq, Eq, gq, Yq) {
+         return Yq.x = (0, xq.Clamp)(qq.x, Eq.x, gq.x), Yq.y = (0, xq.Clamp)(qq.y, Eq.y, gq.y), Yq
+       }
+       static Clamp(qq, Eq, gq) {
+         const Yq = (0, xq.Clamp)(qq.x, Eq.x, gq.x),
+           lq = (0, xq.Clamp)(qq.y, Eq.y, gq.y);
+         return new Bq(Yq, lq)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/226.js` (Changed code · before: `L277-L280` → after: `L414-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-e05bec4dad8fa9998c31fc56f37779837fe6410aa68d22f38ec031c4c9aa0843) · [After (L414-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/226.js#L414-L416) · [Before (L277-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/226.js#L277-L280)

```diff
-           dz = zz.r * Mz + bz.r * tz + uz.r * Hz + Ez.r * Oz,
-           Fz = zz.g * Mz + bz.g * tz + uz.g * Hz + Ez.g * Oz,
-           Zz = zz.b * Mz + bz.b * tz + uz.b * Hz + Ez.b * Oz;
-         return new pz(dz, Fz, Zz)
+           Wq = qq.x * xq + gq.x * Aq + Eq.x * cq + Yq.x * uq,
+           Nq = qq.y * xq + gq.y * Aq + Eq.y * cq + Yq.y * uq;
+         return new Bq(Wq, Nq)
```
