# Changed — Bundle Modifications Report (Part 020 / 067)

- **Updated at**: `2026-11-20T22:47 JST`
- **Part**: `20 / 67` (**328** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 019](part-019.md) · [Part 021 →](part-021.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/225.js` (7rj44.0704ff61 → qepqb8.0352199c · continued)

- **File**: `bundles/bloxd.io/chunks/js/225.js` (267 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789)

#### 103. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1605-L1608` → after: `L4017-L4020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4017-L4020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L4017-L4020) · [Before (L1605-L1608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1605-L1608)

```diff
-       invert() {
-         const zz = this.conjugate(),
-           tz = this.lengthSquared();
-         return 0 == tz || 1 == tz || zz.scaleInPlace(1 / tz), zz
+     }
+     class Ez {
+       get samplerName() {
+         return this.samplerPrefix + "Sampler"
```

#### 104. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1610-L1613` → after: `L4022-L4023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4022-L4023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L4022-L4023) · [Before (L1610-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1610-L1613)

```diff
-       invertInPlace() {
-         this.conjugateInPlace();
-         const zz = this.lengthSquared();
-         return 0 == zz || 1 == zz || this.scaleInPlace(1 / zz), this
+       get samplerInfoName() {
+         return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
```

#### 105. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1615-L1616` → after: `L4025-L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4025-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L4025-L4026) · [Before (L1615-L1616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1615-L1616)

```diff
-       lengthSquared() {
-         return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
+       get samplerMatrixName() {
+         return this.samplerPrefix + "Matrix"
```

#### 106. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1618-L1619` → after: `L4028-L4029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4028-L4029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L4028-L4029) · [Before (L1618-L1619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1618-L1619)

```diff
-       length() {
-         return Math.sqrt(this.lengthSquared())
+       constructor(vv, zv, Pv) {
+         this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = vv, this.samplerPrefix = zv, this.textureDefine = Pv
```

#### 107. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1621-L1622` → after: `L4031-L4037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4031-L4037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L4031-L4037) · [Before (L1621-L1622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1621-L1622)

```diff
-       normalize() {
-         return this.normalizeFromLength(this.length())
+     }
+     class oz extends((0, sz.b)((0, az.b)(Lv.c))) {}
+     class bz extends(function(vv) {
+       return class extends vv {
+         constructor() {
+           super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBO … [truncated]
+         }
```

#### 108. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1624-L1625` → after: `L4039-L4042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4039-L4042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L4039-L4042) · [Before (L1624-L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1624-L1625)

```diff
-       normalizeFromLength(zz) {
-         return 0 === zz || 1 === zz ? this : this.scaleInPlace(1 / zz)
+     }(oz)) {}
+     class rz extends((0, Ev.f)(bz)) {
+       constructor(vv) {
+         super(vv), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, th … [truncated]
```

#### 109. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1627-L1629` → after: `L4044-L4045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4044-L4045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L4044-L4045) · [Before (L1627-L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1627-L1629)

```diff
-       normalizeToNew() {
-         const zz = new wz(0, 0, 0, 1);
-         return this.normalizeToRef(zz), zz
+       reset() {
+         super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
```

#### 110. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1631-L1633` → after: `L4047-L9342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R4047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L4047-L9342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L4047-L9342) · [Before (L1631-L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1631-L1633)

```diff
-       normalizeToRef(zz) {
-         const tz = this.length();
-         return 0 === tz || 1 === tz ? zz.m_(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / tz, zz)
+     }
+     class kz extends((0, Cz.d)(bv.d)) {}
+     let Xz = (() => {
+         var vv, zv, hv, Sv, gv, pv, dv, Nv, lv, Tv, Wv, wv, av, sv, Cv, iv, cv, Gv, mv, jv, fv, Fv, Yv, Uv, Rv, xv, tv, Qv, Lv, Hv, Mv, yv, Ev, bv, uv, vz, zz, Pz, hz, Sz, ez, gz, pz, dz, Nz, az, sz, Cz, iz, cz, Gz, mz, jz, fz, nz, Oz, Dz, Kz, Vz, Uz, Rz, xz, tz, qz, Iz, Qz, Zz,  … [truncated]
+         let VP, UP, RP, xP, tP, qP, IP, QP, ZP, AP, LP, HP, MP, yP, BP, JP, EP, oP, bP, rP, kP, XP, uP, vh, zh, Ph, hh, Sh, eh, gh, ph, dh, Nh, lh, Th, Wh, wh, ah, sh, Ch, ih, ch, Gh, mh, jh, fh, Fh, Yh, nh, Oh, Dh, Kh, Vh, Uh, Rh, xh, th, qh, Ih, Qh, Zh, Ah, Lh, Hh, Mh, yh, Bh,  … [truncated]
+           RS = [],
+           xS = [],
+           tS = [],
+           qS = [],
+           IS = [],
+           QS = [],
+           ZS = [],
+           AS = [],
+           LS = [],
+           HS = [],
+           MS = [],
+ ... (5280 more added lines; see GitHub link above)
```

#### 111. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1635-L1637` → after: `L9344-L9345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9344-L9345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L9344-L9345) · [Before (L1635-L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1635-L1637)

```diff
-       toEulerAngles() {
-         const zz = Nz.Zero();
-         return this.toEulerAnglesToRef(zz), zz
+       get color() {
+         return this._color
```

#### 112. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1639-L1653` → after: `L9347-L9429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9347-L9429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L9347-L9429) · [Before (L1639-L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1639-L1653)

```diff
-       toEulerAnglesToRef(zz) {
-         const tz = this._z,
-           sz = this._x,
-           Fz = this._y,
-           Wz = this._w,
-           Xz = Fz * tz - sz * Wz,
-           Oz = .4999999;
-         if (Xz < -Oz) zz._y = 2 * Math.atan2(Fz, Wz), zz._x = Math.PI / 2, zz._z = 0, zz._isDirty = !0;
-         else if (Xz > Oz) zz._y = 2 * Math.atan2(Fz, Wz), zz._x = -Math.PI / 2, zz._z = 0, zz._isDirty = !0;
-         else {
-           const Oz = Wz * Wz,
-             oz = tz * tz,
-             vz = sz * sz,
-             Uz = Fz * Fz;
-           zz._z = Math.atan2(2 * (sz * Fz + tz * Wz), -oz - vz + Uz + Oz), zz._x = Math.asin(-2 * Xz), zz._y = Math.atan2(2 * (tz * sz + Fz * Wz), oz - vz - Uz + Oz), zz._isDirty = !0
+       set color(vv) {
+         this.setColor(vv)
+       }
+       setColor(vv) {
+         let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         null === this._color && null !== vv || null !== this._color && null === vv ? (this._color = vv, zv || this.markAllDefinesAsDirty()) : this._color = vv
+       }
+       get colorsDistributionType() {
+         return this._colorsDistributionType
+       }
+       set colorsDistributionType(vv) {
+         this._colorsDistributionType = vv, this.markAllDefinesAsDirty()
+       }
+       get resolution() {
+         return this._resolution
+       }
+ ... (67 more added lines; see GitHub link above)
```

#### 113. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1655` → after: `L9431-L9632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9431-L9632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L9431-L9632) · [Before (L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1655)

```diff
-         return zz
+         Sv.uD.add((() => {
+           Gh.DisposeEmptyColorsTexture()
+         }))
+       }
+       dispose() {
+         this._colorsTexture && this._colorsTexture !== ah.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
+       }
+       _setColorModeAndColorDistributionType() {
+         this.setVector2("grl_colorModeAndColorDistributionType", new Zv.j(this._colorMode, this._colorsDistributionType))
+       }
+       updateLazy() {
+         this._colors && this.setColors(this._colors, !1, !0)
+       }
+       get colors() {
+         return this._colors
+       }
+ ... (186 more added lines; see GitHub link above)
```

#### 114. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1657-L1681` → after: `L9634-L9655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9634-L9655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L9634-L9655) · [Before (L1657-L1681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1657-L1681)

```diff
-       toAlphaBetaGammaToRef(zz) {
-         const tz = this._z,
-           sz = this._x,
-           Fz = this._y,
-           Wz = this._w,
-           Xz = Math.sqrt(sz * sz + Fz * Fz),
-           Oz = Math.sqrt(tz * tz + Wz * Wz),
-           oz = 2 * Math.atan2(Xz, Oz),
-           vz = 2 * Math.atan2(tz, Wz),
-           Uz = 2 * Math.atan2(Fz, sz),
-           Kz = (vz + Uz) / 2,
-           uz = (vz - Uz) / 2;
-         return zz.set(uz, oz, Kz), zz
-       }
-       toRotationMatrix(zz) {
-         return Dz.FromQuaternionToRef(this, zz), zz
- ... (9 more removed lines; see GitHub link above)
+       get colorPointers() {
+         return this._colorPointers
+       }
+       set colorPointers(vv) {
+         this._colorPointers = vv, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(vv)
+       }
+       get greasedLineMaterial() {
+         if (this.material && this.material instanceof Dh) return this.material;
+         const vv = this.material?.pluginManager?.getPlugin(jh.GREASED_LINE_MATERIAL_NAME);
+         return vv || void 0
+       }
+       get points() {
+         const vv = [];
+         return Yh.b.DeepCopy(this._points, vv), vv
+       }
+       setPoints(vv, zv) {
+ ... (6 more added lines; see GitHub link above)
```

#### 115. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1683-L1684` → after: `L9657-L9663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9657-L9663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L9657-L9663) · [Before (L1683-L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1683-L1684)

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

#### 116. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1687-L1691` → after: `L9666-L9833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9666-L9833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L9666-L9833) · [Before (L1687-L1691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1687-L1691)

```diff
-       toAxisAngleToRef(zz) {
-         let tz;
-         const sz = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
-           Fz = this._w;
-         return sz > 0 ? (tz = 2 * Math.atan2(sz, Fz), zz.set(this._x / sz, this._y / sz, this._z / sz)) : (tz = 0, zz.set(1, 0, 0)), tz
+       serialize(vv) {
+         super.serialize(vv), vv.type = this.getClassName(), vv.lineOptions = this._createLineOptions()
+       }
+       _createVertexBuffers() {
+         let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const zv = new Fh.d;
+         return zv.positions = this._vertexPositions, zv.indices = this._indices, zv.uvs = this._uvs, vv && (zv.normals = [], Fh.d.ComputeNormals(this._vertexPositions, this._indices, zv.normals)), zv.applyToMesh(this, this._options.updatable), zv
+       }
+       _createOffsetsBuffer(vv) {
+         const zv = this._scene.ma(),
+           Pv = new Av.c(zv, vv, this._updatable, 3);
+         this.setVerticesBuffer(Pv.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = Pv
+       }
+     }
+     class xh {
+       constructor(vv, zv) {
+ ... (152 more added lines; see GitHub link above)
```

#### 117. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1693` → after: `L9835-L9910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9835-L9910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L9835-L9910) · [Before (L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1693)

```diff
-       static FromRotationMatrix(zz) {
+       get options() {
+         return this._options
+       }
+       static RegisterExtension(vv, zv) {
+         let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
+         th.UnregisterExtension(vv) && Sv.Tools.Warn(`Extension with the name ${vv} already exists`), th._ExtensionFactories[vv] = zv;
+         const hv = Pv ?? 0;
+         th._ExtensionOrders[vv] = hv;
+         let ev = th._ExtensionNames.length;
+         for (let Sv = 0; Sv < th._ExtensionNames.length; Sv++) {
+           const vv = th._ExtensionNames[Sv];
+           if (hv < th._ExtensionOrders[vv]) {
+             ev = Sv;
+             break
+           }
+         }
+ ... (60 more added lines; see GitHub link above)
```

#### 118. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1695` → after: `L9912-L9957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9912-L9957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L9912-L9957) · [Before (L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1695)

```diff
-         return wz.FromRotationMatrixToRef(zz, tz), tz
+         return Tv.files[hv] = new Blob([lv.getOutputData()], {
+           type: "application/octet-stream"
+         }), Tv
+       }
+       _setNodeTransformation(vv, zv, Pv) {
+         if (zv.getPivotPoint().equalsWithEpsilon(IP, xP.e) || Sv.Tools.Warn("Pivot points are not supported in the glTF serializer"), !zv.position.equalsWithEpsilon(IP, xP.e)) {
+           const Sv = hv.TmpVectors.fa[0].Vzv(zv.position);
+           Pv && BP(Sv), vv.translation = Sv.pPv()
+         }
+         zv.pp.equalsWithEpsilon(ZP, xP.e) || (vv.scale = zv.pp.pPv());
+         const ev = zv.rotationQuaternion?.clone() || hv.Quaternion.FromEulerAngles(zv.rotation.x, zv.rotation.y, zv.rotation.z);
+         ev.equalsWithEpsilon(QP, xP.e) || (Pv && JP(ev), vv.rotation = ev.normalize().pPv())
+       }
+       _setCameraTransformation(vv, zv, Pv) {
+         const Sv = hv.TmpVectors.fa[0],
+           ev = hv.TmpVectors.Quaternion[0],
+ ... (30 more added lines; see GitHub link above)
```

#### 119. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1697-L1708` → after: `L9959-L10027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R9959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L9959-L10027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L9959-L10027) · [Before (L1697-L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1697-L1708)

```diff
-       static FromRotationMatrixToRef(zz, tz) {
-         const sz = zz.m,
-           Fz = sz[0],
-           Wz = sz[4],
-           Xz = sz[8],
-           Oz = sz[1],
-           oz = sz[5],
-           vz = sz[9],
-           Uz = sz[2],
-           Kz = sz[6],
-           uz = sz[10],
-           Nz = Fz + oz + uz;
+       _exportAndAssignCameras() {
+         const vv = Array.from(this._camerasMap.values());
+         for (const zv of vv) {
+           const vv = this._nodesCameraMap.get(zv);
+           if (void 0 !== vv) {
+             this._cameras.push(zv);
+             for (const zv of vv) zv.camera = this._cameras.length - 1
+           }
+         }
+       }
+       _listAvailableSkeletons() {
+         for (const vv of this._babylonScene.skeletons) {
+           if (vv.bones.length <= 0) continue;
+           const zv = {
+             joints: []
+           };
+ ... (53 more added lines; see GitHub link above)
```

#### 120. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1710` → after: `L10029-L10100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10029-L10100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L10029-L10100) · [Before (L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1710)

```diff
-         return Nz > 0 ? (bz = .5 / Math.sqrt(Nz + 1), tz._w = .25 / bz, tz._x = (Kz - vz) * bz, tz._y = (Xz - Uz) * bz, tz._z = (Oz - Wz) * bz, tz._isDirty = !0) : Fz > oz && Fz > uz ? (bz = 2 * Math.sqrt(1 + Fz - oz - uz), tz._w = (Kz - vz) / bz, tz._x = .25 * bz, tz._y = (Wz +  … [truncated]
+         if (Sv && !this._options.includeCoordinateSystemConversionNodes)
+           for (const Nv of this._babylonScene.animationGroups)
+             for (const vv of Nv.targetedAnimations) {
+               const zv = vv.target;
+               zv instanceof Tv.b && !zv.parent && (ev ?? (ev = new Set)).add(zv)
+             }
+         for (const Nv of this._babylonScene.rootNodes) {
+           const vv = Nv.animations,
+             gv = !!vv && vv.length > 0 || ev?.has(Nv);
+           Sv && !this._options.includeCoordinateSystemConversionNodes && qP(Nv, this._babylonScene.useRightHandedSystem) && !gv ? hv.push(...Nv.getChildren()) : this._babylonScene.useRightHandedSystem ? zv.push(Nv) : Pv.push(Nv)
+         }
+         this._listAvailableCameras(), this._listAvailableSkeletons();
+         const gv = new xh(!0, !1);
+         vv.nodes.push(...await this._exportNodesAsync(Pv, gv));
+         const pv = new xh(!1, !1);
+         vv.nodes.push(...await this._exportNodesAsync(zv, pv));
+ ... (56 more added lines; see GitHub link above)
```

#### 121. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1712-L1713` → after: `L10102-L10105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10102-L10105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L10102-L10105) · [Before (L1712-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1712-L1713)

```diff
-       static Dot(zz, tz) {
-         return zz._x * tz._x + zz._y * tz._y + zz._z * tz._z + zz._w * tz._w
+       _setNodeExtension(vv, zv, Pv) {
+         const hv = this._nodes[vv];
+         if (!hv) throw new Error(`Cannot write ${zv}: glTF node ${vv} does not exist.`);
+         hv.extensions || (hv.extensions = {}), hv.extensions[zv] = Pv
```

#### 122. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1715-L1718` → after: `L10107-L10109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10107-L10109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L10107-L10109) · [Before (L1715-L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1715-L1718)

```diff
-       static AreClose(zz, tz) {
-         let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
-         const Fz = wz.Dot(zz, tz);
-         return 1 - Fz * Fz <= sz
+       _shouldExportNode(vv) {
+         let zv = this._shouldExportNodeMap.get(vv);
+         return void 0 === zv && (zv = this._options.shouldExportNode(vv), this._shouldExportNodeMap.set(vv, zv)), zv
```

#### 123. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1720-L1722` → after: `L10111-L10115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10111-L10115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L10111-L10115) · [Before (L1720-L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1720-L1722)

```diff
-       static SmoothToRef(zz, tz, sz, Fz, Wz) {
-         let Xz = 0 === Fz ? 1 : sz / Fz;
-         return Xz = (0, oz.Clamp)(Xz, 0, 1), wz.SlerpToRef(zz, tz, Xz, Wz), Wz
+       async _exportNodesAsync(vv, zv) {
+         const Pv = new Array;
+         this._exportBuffers(vv, zv);
+         for (const hv of vv) await this._exportNodeAsync(hv, Pv, zv);
+         return Pv
```

#### 124. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1724-L1725` → after: `L10117-L10583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10117-L10583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L10117-L10583) · [Before (L1724-L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1724-L1725)

```diff
-       static Zero() {
-         return new wz(0, 0, 0, 0)
+       _collectBuffers(vv, zv, Pv, hv, Sv) {
+         if (this._shouldExportNode(vv) && vv instanceof Wv.e && vv.geometry) {
+           const ev = vv.geometry.getVertexBuffers();
+           if (ev)
+             for (const hv in ev) {
+               if (!MP(hv)) continue;
+               const gv = ev[hv];
+               Sv.setHasVertexColorAlpha(gv, vv.hasVertexAlpha);
+               const pv = gv._buffer,
+                 dv = zv.get(pv) || [];
+               zv.set(pv, dv), -1 === dv.indexOf(gv) && dv.push(gv);
+               const Nv = Pv.get(gv) || [];
+               Pv.set(gv, Nv), -1 === Nv.indexOf(vv) && Nv.push(vv)
+             }
+           const gv = vv.morphTargetManager;
+           if (gv)
+ ... (451 more added lines; see GitHub link above)
```

#### 125. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1727-L1728` → after: `L10585-L10852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10585-L10852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L10585-L10852) · [Before (L1727-L1728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1727-L1728)

```diff
-       static Inverse(zz) {
-         return new wz(-zz._x, -zz._y, -zz._z, zz._w)
+     }
+     let Ah = !1;
+ 
+     function Lh() {
+       Ah || (Ah = !0, th.RegisterExtension(Ih, (vv => new Zh(vv))))
+     }
+     Pv(39800);
+     Lh();
+     var Hh = Pv(41174);
+ 
+     function Mh(vv, zv, Pv, hv) {
+       const Sv = vv;
+       let ev = null,
+         gv = null,
+         pv = null,
+         dv = null;
+ ... (252 more added lines; see GitHub link above)
```

#### 126. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1730-L1731` → after: `L10854-L10904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10854-L10904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L10854-L10904) · [Before (L1730-L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1730-L1731)

```diff
-       static InverseToRef(zz, tz) {
-         return tz.set(-zz._x, -zz._y, -zz._z, zz._w), tz
+       constructor(vv) {
+         this.name = rh, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === vv.options.meshCompressionMethod && bh.DefaultAvailable
+       }
+       dispose() {}
+       postExportMeshPrimitive(vv, zv, Pv) {
+         if (!this.enabled) return;
+         if (4 !== vv.mode && 5 !== vv.mode) return void Dv.d.Warn("Cannot compress primitive with mode " + vv.mode + ".");
+         const hv = [],
+           Sv = [];
+         let ev = null;
+         if (void 0 !== vv.indices) {
+           const gv = Pv[vv.indices],
+             pv = zv.getBufferView(gv);
+           ev = zv.getData(pv).slice(), hv.push(pv), Sv.push(gv)
+         }
+         const gv = [];
+ ... (35 more added lines; see GitHub link above)
```

#### 127. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1733-L1734` → after: `L10906-L10928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10906-L10928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L10906-L10928) · [Before (L1733-L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1733-L1734)

```diff
-       static Identity() {
-         return new wz(0, 0, 0, 1)
+     }
+     let Xh = !1;
+ 
+     function uh() {
+       Xh || (Xh = !0, th.RegisterExtension(rh, (vv => new kh(vv))))
+     }
+     uh();
+     var vS = Pv(40875);
+     const zS = "KHR_lights_punctual",
+       PS = {
+         name: "",
+         color: [1, 1, 1],
+         intensity: 1,
+         range: Number.MAX_VALUE
+       },
+       hS = {
+ ... (7 more added lines; see GitHub link above)
```

#### 128. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1736-L1737` → after: `L10930-L10931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10930-L10931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L10930-L10931) · [Before (L1736-L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1736-L1737)

```diff
-       static IsIdentity(zz) {
-         return zz && 0 === zz._x && 0 === zz._y && 0 === zz._z && 1 === zz._w
+       dispose() {
+         this._lights = null
```

#### 129. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1739-L1740` → after: `L10933-L10934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10933-L10934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L10933-L10934) · [Before (L1739-L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1739-L1740)

```diff
-       static RotationAxis(zz, tz) {
-         return wz.RotationAxisToRef(zz, tz, new wz)
+       get wasUsed() {
+         return !!this._lights
```

#### 130. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1742-L1745` → after: `L10936-L10937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10936-L10937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L10936-L10937) · [Before (L1742-L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1742-L1745)

```diff
-       static RotationAxisToRef(zz, tz, sz) {
-         sz._w = Math.cos(tz / 2);
-         const Fz = Math.sin(tz / 2) / zz.length();
-         return sz._x = zz._x * Fz, sz._y = zz._y * Fz, sz._z = zz._z * Fz, sz._isDirty = !0, sz
+       onExporting() {
+         this._exporter._glTF.extensions[zS] = this._lights
```

#### 131. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1747-L1748` → after: `L10939-L10983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10939-L10983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L10939-L10983) · [Before (L1747-L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1747-L1748)

```diff
-       static FromArray(zz, tz) {
-         return tz || (tz = 0), new wz(zz[tz], zz[tz + 1], zz[tz + 2], zz[tz + 3])
+       async postExportNodeAsync(vv, zv, Pv, hv, Sv) {
+         return await new Promise((ev => {
+           if (!(Pv instanceof lh.c)) return void ev(zv);
+           const gv = Pv.getTypeID() == lh.c.LIGHTTYPEID_POINTLIGHT ? "point" : Pv.getTypeID() == lh.c.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : Pv.getTypeID() == lh.c.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
+           if (!gv || !(Pv instanceof vS.d)) return Dv.d.Warn(`${vv}: Light ${Pv.name} is not supported in ${zS}`), void ev(zv);
+           if (Pv.falloffType !== lh.c.FALLOFF_GLTF && Dv.d.Warn(`${vv}: Light falloff for ${Pv.name} does not match the ${zS} specification!`), !Pv.position.Mev(0, 0, 0)) {
+             const vv = Zv.i.fa[0].Vzv(Pv.position);
+             Sv && BP(vv), zv.translation = vv.pPv()
+           }
+           if ("point" !== gv) {
+             const vv = Pv.direction.normalizeToRef(Zv.i.fa[0]);
+             Sv && BP(vv);
+             const hv = Zv.d.FromUnitVectorsToRef(SS, vv, Zv.i.Quaternion[0]);
+             Zv.d.IsIdentity(hv) || (zv.rotation = hv.pPv())
+           }
+           const pv = {
+ ... (29 more added lines; see GitHub link above)
```

#### 132. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1750-L1751` → after: `L10985-L11018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R10985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L10985-L11018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L10985-L11018) · [Before (L1750-L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1750-L1751)

```diff
-       static FromArrayToRef(zz, tz, sz) {
-         return sz._x = zz[tz], sz._y = zz[tz + 1], sz._z = zz[tz + 2], sz._w = zz[tz + 3], sz._isDirty = !0, sz
+     }
+     let gS = !1;
+ 
+     function pS() {
+       gS || (gS = !0, th.RegisterExtension(zS, (vv => new eS(vv))))
+     }
+     pS();
+     const dS = "KHR_interactivity";
+     class NS {
+       constructor(vv) {
+         this._exporter = vv, this.name = dS, this.enabled = !!vv.options.khrInteractivity, this.required = vv.options.khrInteractivity?.required ?? !1
+       }
+       dispose() {
+         this._exporter = null
+       }
+       get wasUsed() {
+ ... (18 more added lines; see GitHub link above)
```

#### 133. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1753-L1754` → after: `L11020-L11090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11020-L11090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L11020-L11090) · [Before (L1753-L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1753-L1754)

```diff
-       static FromFloatsToRef(zz, tz, sz, Fz, Wz) {
-         return Wz.m_(zz, tz, sz, Fz), Wz
+     }
+     let lS = !1;
+ 
+     function TS() {
+       lS || (lS = !0, th.RegisterExtension(dS, (vv => new NS(vv)), 200))
+     }
+     TS();
+     const WS = "EXT_lights_area",
+       wS = {
+         name: "",
+         color: [1, 1, 1],
+         intensity: 1,
+         size: 1
+       },
+       aS = {
+         aspect: 1
+ ... (55 more added lines; see GitHub link above)
```

#### 134. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1756-L1758` → after: `L11092-L11183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11092-L11183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L11092-L11183) · [Before (L1756-L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1756-L1758)

```diff
-       static FromEulerAngles(zz, tz, sz) {
-         const Fz = new wz;
-         return wz.RotationYawPitchRollToRef(tz, zz, sz, Fz), Fz
+     }
+     let iS = !1;
+ 
+     function cS() {
+       iS || (iS = !0, th.RegisterExtension(WS, (vv => new CS(vv))))
+     }
+     cS();
+     const GS = "KHR_materials_anisotropy";
+     class mS {
+       constructor(vv) {
+         this.name = GS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = vv
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+ ... (76 more added lines; see GitHub link above)
```

#### 135. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1760-L1761` → after: `L11185-L11200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11185-L11200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L11185-L11200) · [Before (L1760-L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1760-L1761)

```diff
-       static FromEulerAnglesToRef(zz, tz, sz, Fz) {
-         return wz.RotationYawPitchRollToRef(tz, zz, sz, Fz), Fz
+     }
+     let jS = !1;
+ 
+     function fS() {
+       jS || (jS = !0, th.RegisterExtension(GS, (vv => new mS(vv))))
+     }
+     fS();
+     const FS = "KHR_materials_clearcoat";
+ 
+     function YS(vv, zv) {
+       const Pv = new Vv.e(zv.name, zv.rD());
+       return Pv._texture = vv, Pv.coordinatesIndex = zv.coordinatesIndex, zv instanceof Vv.e && (Pv.uOffset = zv.uOffset, Pv.vOffset = zv.vOffset, Pv.uScale = zv.uScale, Pv.vScale = zv.vScale, Pv.wAng = zv.wAng), Pv.wrapU = zv.wrapU, Pv.wrapV = zv.wrapV, Pv
+     }
+     class nS {
+       constructor(vv) {
+         this.name = FS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = vv
```

#### 136. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1763-L1765` → after: `L11202-L11275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11202-L11275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L11202-L11275) · [Before (L1763-L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1763-L1765)

```diff
-       static FromEulerVector(zz) {
-         const tz = new wz;
-         return wz.RotationYawPitchRollToRef(zz._y, zz._x, zz._z, tz), tz
+       dispose() {
+         for (const vv of Object.keys(this._mergedTexturesMap)) {
+           this._mergedTexturesMap[vv].dispose()
+         }
+         this._mergedTexturesMap = {};
+         for (const vv of Object.keys(this._cachedInternalTexturesMap)) {
+           this._cachedInternalTexturesMap[vv].dispose()
+         }
+         this._cachedInternalTexturesMap = {}
+       }
+       get wasUsed() {
+         return this._wasUsed
+       }
+       async postExportMaterialAdditionalTexturesAsync(vv, zv, Pv) {
+         const hv = [];
+         if (Pv instanceof fz) {
+ ... (58 more added lines; see GitHub link above)
```

#### 137. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1767-L1768` → after: `L11277-L11298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11277-L11298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L11277-L11298) · [Before (L1767-L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1767-L1768)

```diff
-       static FromEulerVectorToRef(zz, tz) {
-         return wz.RotationYawPitchRollToRef(zz._y, zz._x, zz._z, tz), tz
+     }
+     let OS = !1;
+ 
+     function DS() {
+       OS || (OS = !0, th.RegisterExtension(FS, (vv => new nS(vv))))
+     }
+     DS();
+     const KS = "KHR_materials_coat";
+ 
+     function VS(vv) {
+       const zv = vv.coatRoughnessAnisotropyTexture,
+         Pv = vv.geometryCoatTangentTexture;
+       return `${zv&&zv.getInternalTexture()?zv.getInternalTexture().uniqueId:"NoStrength"}_${Pv&&Pv.getInternalTexture()?Pv.getInternalTexture().uniqueId:"NoTangent"}`
+     }
+ 
+     function US(vv, zv) {
+ ... (6 more added lines; see GitHub link above)
```

#### 138. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1770-L1773` → after: `L11300-L11430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11300-L11430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L11300-L11430) · [Before (L1770-L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1770-L1773)

```diff
-       static FromUnitVectorsToRef(zz, tz, sz) {
-         let Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Fz.c;
-         const Xz = Nz.Dot(zz, tz) + 1;
-         return Xz < Wz ? Math.abs(zz.x) > Math.abs(zz.z) ? sz.set(-zz.y, zz.x, 0, 0) : sz.set(0, -zz.z, zz.y, 0) : (Nz.CrossToRef(zz, tz, Hz.XD[0]), sz.set(Hz.XD[0].x, Hz.XD[0].y, Hz.XD[0].z, Xz)), sz.normalize()
+       dispose() {
+         for (const vv of Object.keys(this._mergedTexturesMap)) {
+           this._mergedTexturesMap[vv].dispose()
+         }
+         this._mergedTexturesMap = {};
+         for (const vv of Object.keys(this._cachedInternalTexturesMap)) {
+           this._cachedInternalTexturesMap[vv].dispose()
+         }
+         this._cachedInternalTexturesMap = {}
+       }
+       get wasUsed() {
+         return this._wasUsed
+       }
+       async postExportMaterialAdditionalTexturesAsync(vv, zv, Pv) {
+         const hv = [];
+         if (Pv instanceof fz) {
+ ... (115 more added lines; see GitHub link above)
```

#### 139. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1775-L1777` → after: `L11432-L12927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R11432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L11432-L12927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L11432-L12927) · [Before (L1775-L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1775-L1777)

```diff
-       static RotationYawPitchRoll(zz, tz, sz) {
-         const Fz = new wz;
-         return wz.RotationYawPitchRollToRef(zz, tz, sz, Fz), Fz
+     }
+     let xS = !1;
+ 
+     function tS() {
+       xS || (xS = !0, th.RegisterExtension(KS, (vv => new RS(vv))))
+     }
+     tS();
+     let qS = (() => {
+       var vv, zv, Pv, hv, Sv, gv, pv, dv, Nv, lv, Tv, Wv, wv, av, sv, Cv, iv, cv, Gv, mv, jv, fv, Fv, Yv, Dv, Kv, Vv, Uv, Rv, xv, qv, Iv, Qv, Zv, Av, Lv, Hv, Mv, yv, Bv, Ev, ov, bv, rv, kv, Xv, uv, vz, zz, Pz, hz, Sz, ez, gz, pz, dz, Nz, lz, Tz, Wz, wz, az, sz, Cz, iz, cz, Gz;
+       let mz, jz, Yz, nz, Oz, Dz, Kz, Vz, Uz, Rz, xz, tz, qz, Iz, Qz, Zz, Az, Lz, Hz, Mz, yz, Bz, Jz, Ez, oz, bz, rz, kz, Xz, uz, vP, zP, PP, hP, SP, eP, gP, pP, dP, NP, lP, TP, WP, wP, aP, sP, CP, iP, cP, GP, mP, jP, fP, FP, YP, nP, OP, DP, KP, VP, UP, RP, xP, tP, qP, IP, QP, ZP … [truncated]
+         LP = [],
+         HP = [],
+         MP = [],
+         yP = [],
+         BP = [],
+         JP = [],
+ ... (1480 more added lines; see GitHub link above)
```

#### 140. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1779-L1793` → after: `L12929-L12931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12929-L12931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L12929-L12931) · [Before (L1779-L1793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1779-L1793)

```diff
-       static RotationYawPitchRollToRef(zz, tz, sz, Fz) {
-         const Wz = .5 * sz,
-           Xz = .5 * tz,
-           Oz = .5 * zz,
-           oz = Math.sin(Wz),
-           vz = Math.cos(Wz),
-           Uz = Math.sin(Xz),
-           Kz = Math.cos(Xz),
-           uz = Math.sin(Oz),
-           Nz = Math.cos(Oz);
-         return Fz._x = Nz * Uz * vz + uz * Kz * oz, Fz._y = uz * Kz * vz - Nz * Uz * oz, Fz._z = Nz * Kz * oz - uz * Uz * vz, Fz._w = Nz * Kz * vz + uz * Uz * oz, Fz._isDirty = !0, Fz
-       }
-       static RotationAlphaBetaGamma(zz, tz, sz) {
-         const Fz = new wz;
-         return wz.RotationAlphaBetaGammaToRef(zz, tz, sz, Fz), Fz
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
```

#### 141. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1795-L1799` → after: `L12933-L12939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12933-L12939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L12933-L12939) · [Before (L1795-L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1795-L1799)

```diff
-       static RotationAlphaBetaGammaToRef(zz, tz, sz, Fz) {
-         const Wz = .5 * (sz + zz),
-           Xz = .5 * (sz - zz),
-           Oz = .5 * tz;
-         return Fz._x = Math.cos(Xz) * Math.sin(Oz), Fz._y = Math.sin(Xz) * Math.sin(Oz), Fz._z = Math.sin(Wz) * Math.cos(Oz), Fz._w = Math.cos(Wz) * Math.cos(Oz), Fz._isDirty = !0, Fz
+       async postExportMaterialAdditionalTexturesAsync(vv, zv, Pv) {
+         const hv = [];
+         if (Pv instanceof qS && this._isExtensionEnabled(Pv)) {
+           const zv = QS(vv, Pv);
+           return zv && hv.push(zv), Pv.subSurface.translucencyColorTexture && hv.push(Pv.subSurface.translucencyColorTexture), hv
+         }
+         return hv
```

#### 142. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1801-L1803` → after: `L12941-L12965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12941-L12965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L12941-L12965) · [Before (L1801-L1803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1801-L1803)

```diff
-       static RotationQuaternionFromAxis(zz, tz, sz) {
-         const Fz = new wz(0, 0, 0, 0);
-         return wz.RotationQuaternionFromAxisToRef(zz, tz, sz, Fz), Fz
+       _isExtensionEnabled(vv) {
+         if (vv.unlit) return !1;
+         const zv = vv.subSurface;
+         return !!zv.isTranslucencyEnabled && (!vv.unlit && !zv.useAlbedoToTintTranslucency && zv.useGltfStyleTextures && 1 === zv.volumeIndexOfRefraction && 0 === zv.minimumThickness && 0 === zv.maximumThickness)
+       }
+       postExportMaterialAsync(vv, zv, Pv) {
+         return new Promise((hv => {
+           if (Pv instanceof qS && this._isExtensionEnabled(Pv)) {
+             this._wasUsed = !0;
+             const hv = Pv.subSurface,
+               Sv = QS(vv, Pv),
+               ev = 0 == hv.translucencyIntensity ? void 0 : hv.translucencyIntensity,
+               gv = this._exporter._materialExporter.getTextureInfo(Sv) ?? void 0,
+               pv = !hv.translucencyColor || hv.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : hv.translucencyColor.pPv(),
+               dv = this._exporter._materialExporter.getTextureInfo(hv.translucencyColorTexture) ?? void 0,
+               Nv = {
+ ... (9 more added lines; see GitHub link above)
```

#### 143. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1805-L1807` → after: `L12967-L12998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R12967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L12967-L12998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L12967-L12998) · [Before (L1805-L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1805-L1807)

```diff
-       static RotationQuaternionFromAxisToRef(zz, tz, sz, Fz) {
-         const Wz = gz.Matrix[0];
-         return zz = zz.normalizeToRef(gz.XD[0]), tz = tz.normalizeToRef(gz.XD[1]), sz = sz.normalizeToRef(gz.XD[2]), Dz.FromXYZAxesToRef(zz, tz, sz, Wz), wz.FromRotationMatrixToRef(Wz, Fz), Fz
+     }
+     let AS = !1;
+ 
+     function LS() {
+       AS || (AS = !0, th.RegisterExtension(IS, (vv => new ZS(vv))))
+     }
+     LS();
+     const HS = "KHR_materials_dispersion";
+     class MS {
+       constructor() {
+         this.name = HS, this.enabled = !0, this.required = !1, this._wasUsed = !1
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+ ... (16 more added lines; see GitHub link above)
```

#### 144. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1809-L1811` → after: `L13000-L13029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13000-L13029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13000-L13029) · [Before (L1809-L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1809-L1811)

```diff
-       static FromLookDirectionLH(zz, tz) {
-         const sz = new wz;
-         return wz.FromLookDirectionLHToRef(zz, tz, sz), sz
+     }
+     let yS = !1;
+ 
+     function BS() {
+       yS || (yS = !0, th.RegisterExtension(HS, (() => new MS)))
+     }
+     BS();
+     const JS = "KHR_materials_emissive_strength";
+     class ES {
+       constructor() {
+         this.name = JS, this.enabled = !0, this.required = !1, this._wasUsed = !1
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+ ... (14 more added lines; see GitHub link above)
```

#### 145. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1813-L1815` → after: `L13031-L13066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13031-L13066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13031-L13066) · [Before (L1813-L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1813-L1815)

```diff
-       static FromLookDirectionLHToRef(zz, tz, sz) {
-         const Fz = gz.Matrix[0];
-         return Dz.LookDirectionLHToRef(zz, tz, Fz), wz.FromRotationMatrixToRef(Fz, sz), sz
+     }
+     let oS = !1;
+ 
+     function bS() {
+       oS || (oS = !0, th.RegisterExtension(JS, (() => new ES)))
+     }
+     bS();
+     const rS = "KHR_materials_ior";
+     class kS {
+       constructor() {
+         this.name = rS, this.enabled = !0, this.required = !1, this._wasUsed = !1
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+ ... (20 more added lines; see GitHub link above)
```

#### 146. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1817-L1819` → after: `L13068-L13123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13068-L13123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13068-L13123) · [Before (L1817-L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1817-L1819)

```diff
-       static FromLookDirectionRH(zz, tz) {
-         const sz = new wz;
-         return wz.FromLookDirectionRHToRef(zz, tz, sz), sz
+     }
+     let XS = !1;
+ 
+     function uS() {
+       XS || (XS = !0, th.RegisterExtension(rS, (() => new kS)))
+     }
+     uS();
+     const ve = "KHR_materials_iridescence";
+     class ze {
+       constructor(vv) {
+         this.name = ve, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = vv
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+ ... (40 more added lines; see GitHub link above)
```

#### 147. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1821-L1823` → after: `L13125-L13156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13125-L13156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13125-L13156) · [Before (L1821-L1823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1821-L1823)

```diff
-       static FromLookDirectionRHToRef(zz, tz, sz) {
-         const Fz = gz.Matrix[0];
-         return Dz.LookDirectionRHToRef(zz, tz, Fz), wz.FromRotationMatrixToRef(Fz, sz)
+     }
+     let Pe = !1;
+ 
+     function he() {
+       Pe || (Pe = !0, th.RegisterExtension(ve, (vv => new ze(vv))))
+     }
+     he();
+     const Se = "KHR_materials_sheen";
+     class ee {
+       constructor(vv) {
+         this.name = Se, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = vv
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+ ... (16 more added lines; see GitHub link above)
```

#### 148. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1825-L1827` → after: `L13158-L13173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13158-L13173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13158-L13173) · [Before (L1825-L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1825-L1827)

```diff
-       static Slerp(zz, tz, sz) {
-         const Fz = wz.Identity();
-         return wz.SlerpToRef(zz, tz, sz, Fz), Fz
+     }
+     let ge = !1;
+ 
+     function pe() {
+       ge || (ge = !0, th.RegisterExtension(Se, (vv => new ee(vv))))
+     }
+     pe();
+     const de = "KHR_materials_fuzz";
+ 
+     function Ne(vv, zv) {
+       const Pv = new Vv.e(zv.name, zv.rD());
+       return Pv._texture = vv, Pv.coordinatesIndex = zv.coordinatesIndex, zv instanceof Vv.e && (Pv.uOffset = zv.uOffset, Pv.vOffset = zv.vOffset, Pv.uScale = zv.uScale, Pv.vScale = zv.vScale, Pv.wAng = zv.wAng), Pv.wrapU = zv.wrapU, Pv.wrapV = zv.wrapV, Pv
+     }
+     class le {
+       constructor(vv) {
+         this.name = de, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = vv
```

#### 149. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1829-L1851` → after: `L13175-L13231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13175-L13231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13175-L13231) · [Before (L1829-L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1829-L1851)

```diff
-       static SlerpToRef(zz, tz, sz, Fz) {
-         let Wz, Xz, Oz = zz._x * tz._x + zz._y * tz._y + zz._z * tz._z + zz._w * tz._w,
-           oz = !1;
-         if (Oz < 0 && (oz = !0, Oz = -Oz), Oz > .999999) Xz = 1 - sz, Wz = oz ? -sz : sz;
-         else {
-           const zz = Math.acos(Oz),
-             tz = 1 / Math.sin(zz);
-           Xz = Math.sin((1 - sz) * zz) * tz, Wz = oz ? -Math.sin(sz * zz) * tz : Math.sin(sz * zz) * tz
-         }
-         return Fz._x = Xz * zz._x + Wz * tz._x, Fz._y = Xz * zz._y + Wz * tz._y, Fz._z = Xz * zz._z + Wz * tz._z, Fz._w = Xz * zz._w + Wz * tz._w, Fz._isDirty = !0, Fz
-       }
-       static Hermite(zz, tz, sz, Fz, Wz) {
-         const Xz = Wz * Wz,
-           Oz = Wz * Xz,
-           oz = 2 * Oz - 3 * Xz + 1,
-           vz = -2 * Oz + 3 * Xz,
- ... (7 more removed lines; see GitHub link above)
+       dispose() {
+         for (const vv of Object.keys(this._mergedTexturesMap)) {
+           this._mergedTexturesMap[vv].dispose()
+         }
+         this._mergedTexturesMap = {};
+         for (const vv of Object.keys(this._cachedInternalTexturesMap)) {
+           this._cachedInternalTexturesMap[vv].dispose()
+         }
+         this._cachedInternalTexturesMap = {}
+       }
+       get wasUsed() {
+         return this._wasUsed
+       }
+       async postExportMaterialAdditionalTexturesAsync(vv, zv, Pv) {
+         if (Pv instanceof Xz) {
+           const vv = [];
+ ... (41 more added lines; see GitHub link above)
```

#### 150. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1853-L1855` → after: `L13233-L13294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13233-L13294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13233-L13294) · [Before (L1853-L1855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1853-L1855)

```diff
-       static Hermite1stDerivative(zz, tz, sz, Fz, Wz) {
-         const Xz = new wz;
-         return this.Hermite1stDerivativeToRef(zz, tz, sz, Fz, Wz, Xz), Xz
+     }
+     let Te = !1;
+ 
+     function We() {
+       Te || (Te = !0, th.RegisterExtension(de, (vv => new le(vv))))
+     }
+     We();
+     const we = "KHR_materials_specular";
+     class ae {
+       constructor(vv) {
+         this.name = we, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = vv
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+ ... (46 more added lines; see GitHub link above)
```

#### 151. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1857-L1859` → after: `L13296-L13306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13296-L13306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13296-L13306) · [Before (L1857-L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1857-L1859)

```diff
-       static Hermite1stDerivativeToRef(zz, tz, sz, Fz, Wz, Xz) {
-         const Oz = Wz * Wz;
-         return Xz._x = 6 * (Oz - Wz) * zz._x + (3 * Oz - 4 * Wz + 1) * tz._x + 6 * (-Oz + Wz) * sz._x + (3 * Oz - 2 * Wz) * Fz._x, Xz._y = 6 * (Oz - Wz) * zz._y + (3 * Oz - 4 * Wz + 1) * tz._y + 6 * (-Oz + Wz) * sz._y + (3 * Oz - 2 * Wz) * Fz._y, Xz._z = 6 * (Oz - Wz) * zz._z + ( … [truncated]
+     }
+     let se = !1;
+ 
+     function Ce() {
+       se || (se = !0, th.RegisterExtension(we, (vv => new ae(vv))))
+     }
+     Ce();
+     const ie = "KHR_materials_transmission";
+     class ce {
+       constructor(vv) {
+         this.name = ie, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = vv
```

#### 152. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1861-L1863` → after: `L13308-L13310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13308-L13310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13308-L13310) · [Before (L1861-L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1861-L1863)

```diff
-       static Normalize(zz) {
-         const tz = wz.Zero();
-         return wz.NormalizeToRef(zz, tz), tz
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
```

#### 153. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1865-L1866` → after: `L13312-L13317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13312-L13317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13312-L13317) · [Before (L1865-L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1865-L1866)

```diff
-       static NormalizeToRef(zz, tz) {
-         return zz.normalizeToRef(tz), tz
+       async postExportMaterialAdditionalTexturesAsync(vv, zv, Pv) {
+         const hv = [];
+         if (Pv instanceof qS) {
+           if (this._isExtensionEnabled(Pv)) return Pv.subSurface.refractionIntensityTexture && Pv.subSurface.useGltfStyleTextures && hv.push(Pv.subSurface.refractionIntensityTexture), hv
+         } else Pv instanceof Xz && (Pv.transmissionWeight > 0 && Pv.transmissionWeightTexture && (hv.push(Pv.transmissionWeightTexture), Pv.transmissionColorTexture && hv.push(Pv.transmissionColorTexture)), Pv.subsurfaceWeight > 0 && Pv.subsurfaceWeightTexture && hv.push(Pv.subsu … [truncated]
+         return hv
```

#### 154. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1868-L1870` → after: `L13319-L13325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13319-L13325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13319-L13325) · [Before (L1868-L1870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1868-L1870)

```diff
-       static Clamp(zz, tz, sz) {
-         const Fz = new wz;
-         return wz.ClampToRef(zz, tz, sz, Fz), Fz
+       _isExtensionEnabled(vv) {
+         if (vv instanceof Xz && !vv.unlit) return vv.transmissionWeight > 0 || vv.subsurfaceWeight > 0;
+         if (vv instanceof qS && !vv.unlit) {
+           const zv = vv.subSurface;
+           return zv.isRefractionEnabled && void 0 != zv.refractionIntensity && 0 != zv.refractionIntensity || null != zv.refractionIntensityTexture && zv.useGltfStyleTextures
+         }
+         return !1
```

#### 155. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1872-L1873` → after: `L13327-L13362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13327-L13362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13327-L13362) · [Before (L1872-L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1872-L1873)

```diff
-       static ClampToRef(zz, tz, sz, Fz) {
-         return Fz.m_((0, oz.Clamp)(zz.x, tz.x, sz.x), (0, oz.Clamp)(zz.y, tz.y, sz.y), (0, oz.Clamp)(zz.z, tz.z, sz.z), (0, oz.Clamp)(zz.w, tz.w, sz.w))
+       async postExportMaterialAsync(vv, zv, Pv) {
+         if (!this._isExtensionEnabled(Pv)) return zv;
+         if (Pv instanceof qS) {
+           this._wasUsed = !0;
+           const hv = Pv.subSurface,
+             Sv = {
+               transmissionFactor: 0 === hv.refractionIntensity ? void 0 : hv.refractionIntensity
+             };
+           if (hv.refractionIntensityTexture)
+             if (hv.useGltfStyleTextures) {
+               this._exporter._materialNeedsUVsSet.add(Pv);
+               const vv = this._exporter._materialExporter.getTextureInfo(hv.refractionIntensityTexture);
+               vv && (Sv.transmissionTexture = vv)
+             } else Dv.d.Warn(`${vv}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
+           zv.extensions || (zv.extensions = {}), zv.extensions[ie] = Sv
+         } else if (Pv instanceof Xz) {
+ ... (20 more added lines; see GitHub link above)
```

#### 156. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1875-L1878` → after: `L13364-L13375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13364-L13375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13364-L13375) · [Before (L1875-L1878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1875-L1878)

```diff
-       static Random() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         return new wz((0, oz.RandomRange)(zz, tz), (0, oz.RandomRange)(zz, tz), (0, oz.RandomRange)(zz, tz), (0, oz.RandomRange)(zz, tz))
+     }
+     let Ge = !1;
+ 
+     function me() {
+       Ge || (Ge = !0, th.RegisterExtension(ie, (vv => new ce(vv))))
+     }
+     me();
+     var je = Pv(39564);
+     const fe = "KHR_materials_unlit";
+     class Fe {
+       constructor() {
+         this.name = fe, this.enabled = !0, this.required = !1, this._wasUsed = !1
```

#### 157. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1880-L1883` → after: `L13377-L13378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13377-L13378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13377-L13378) · [Before (L1880-L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1880-L1883)

```diff
-       static RandomToRef() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         return (arguments.length > 2 ? arguments[2] : void 0).m_((0, oz.RandomRange)(zz, tz), (0, oz.RandomRange)(zz, tz), (0, oz.RandomRange)(zz, tz), (0, oz.RandomRange)(zz, tz))
+       get wasUsed() {
+         return this._wasUsed
```

#### 158. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1885-L1886` → after: `L13380-L13385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13380-L13385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13380-L13385) · [Before (L1885-L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1885-L1886)

```diff
-       static Minimize() {
-         throw new ReferenceError("Quaternion.Minimize does not make sense")
+       dispose() {}
+       postExportMaterialAsync(vv, zv, Pv) {
+         return new Promise((vv => {
+           let hv = !1;
+           Pv instanceof qS ? hv = Pv.unlit : Pv instanceof je.i && (hv = Pv.disableLighting), hv && (this._wasUsed = !0, null == zv.extensions && (zv.extensions = {}), zv.extensions[fe] = {}), vv(zv)
+         }))
```

#### 159. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1888-L1889` → after: `L13387-L13397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13387-L13397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13387-L13397) · [Before (L1888-L1889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1888-L1889)

```diff
-       static Maximize() {
-         throw new ReferenceError("Quaternion.Maximize does not make sense")
+     }
+     let Ye = !1;
+ 
+     function ne() {
+       Ye || (Ye = !0, th.RegisterExtension(fe, (() => new Fe)))
+     }
+     ne();
+     const Oe = "KHR_materials_volume";
+     class De {
+       constructor(vv) {
+         this.name = Oe, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = vv
```

#### 160. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1891-L1892` → after: `L13399-L13401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13399-L13401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13399-L13401) · [Before (L1891-L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1891-L1892)

```diff
-       static Distance(zz, tz) {
-         return Math.sqrt(wz.DistanceSquared(zz, tz))
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
```

#### 161. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1894-L1899` → after: `L13403-L13408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13403-L13408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13403-L13408) · [Before (L1894-L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1894-L1899)

```diff
-       static DistanceSquared(zz, tz) {
-         const sz = zz.x - tz.x,
-           Fz = zz.y - tz.y,
-           Wz = zz.z - tz.z,
-           Xz = zz.w - tz.w;
-         return sz * sz + Fz * Fz + Wz * Wz + Xz * Xz
+       async postExportMaterialAdditionalTexturesAsync(vv, zv, Pv) {
+         const hv = [];
+         if (Pv instanceof qS) {
+           if (this._isExtensionEnabled(Pv)) return Pv.subSurface.thicknessTexture && hv.push(Pv.subSurface.thicknessTexture), hv
+         } else Pv instanceof Xz && (Pv.transmissionWeight > 0 || Pv.subsurfaceWeight > 0) && Pv.geometryThicknessTexture && hv.push(Pv.geometryThicknessTexture);
+         return hv
```

#### 162. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1901-L1902` → after: `L13410-L13474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13410-L13474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13410-L13474) · [Before (L1901-L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1901-L1902)

```diff
-       static Center(zz, tz) {
-         return wz.CenterToRef(zz, tz, wz.Zero())
+       _isExtensionEnabled(vv) {
+         if (vv.unlit) return !1;
+         const zv = vv.subSurface;
+         return !(!zv.isRefractionEnabled && !zv.isTranslucencyEnabled) && (void 0 != zv.maximumThickness && 0 != zv.maximumThickness || void 0 != zv.tintColorAtDistance && zv.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != zv.tintColor && zv.tintColor != Jv.b.White() … [truncated]
+       }
+       _hasTexturesExtension(vv) {
+         return null != vv.subSurface.thicknessTexture
+       }
+       postExportMaterialAsync(vv, zv, Pv) {
+         return new Promise((vv => {
+           if (Pv instanceof qS && this._isExtensionEnabled(Pv)) {
+             this._wasUsed = !0;
+             const vv = Pv.subSurface,
+               hv = {
+                 thicknessFactor: 0 == vv.maximumThickness ? void 0 : vv.maximumThickness,
+                 thicknessTexture: this._exporter._materialExporter.getTextureInfo(vv.thicknessTexture) ?? void 0,
+ ... (49 more added lines; see GitHub link above)
```

#### 163. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1904-L1905` → after: `L13476-L13542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13476-L13542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13476-L13542) · [Before (L1904-L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1904-L1905)

```diff
-       static CenterToRef(zz, tz, sz) {
-         return sz.m_((zz.x + tz.x) / 2, (zz.y + tz.y) / 2, (zz.z + tz.z) / 2, (zz.w + tz.w) / 2)
+     }
+     let Ke = !1;
+ 
+     function Ve() {
+       Ke || (Ke = !0, th.RegisterExtension(Oe, (vv => new De(vv))))
+     }
+     Ve();
+     const Ue = "KHR_materials_volume_scatter";
+     class Re {
+       constructor(vv) {
+         this.name = Ue, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = vv
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+ ... (51 more added lines; see GitHub link above)
```

#### 164. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1908` → after: `L13545-L13551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13545-L13551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13545-L13551) · [Before (L1908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1908)

```diff
-     wz._V8PerformanceHack = new wz(.5, .5, .5, .5);
+     let xe = !1;
+ 
+     function te() {
+       xe || (xe = !0, th.RegisterExtension(Ue, (vv => new Re(vv)), 101))
+     }
+     te();
+     const qe = "KHR_materials_diffuse_roughness";
```

#### 165. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1910-L1911` → after: `L13553-L13578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13553-L13578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13553-L13578) · [Before (L1910-L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1910-L1911)

```diff
-       static get Use64Bits() {
-         return Xz.c.MatrixUse64Bits
+       constructor(vv) {
+         this.name = qe, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = vv
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+       async postExportMaterialAdditionalTexturesAsync(vv, zv, Pv) {
+         const hv = [];
+         if (Pv instanceof fz) {
+           if (Pv._baseDiffuseRoughness) return Pv._baseDiffuseRoughnessTexture && hv.push(Pv._baseDiffuseRoughnessTexture), hv
+         } else if (Pv instanceof Xz && Pv.baseDiffuseRoughness) return Pv.baseDiffuseRoughnessTexture && hv.push(Pv.baseDiffuseRoughnessTexture), hv;
+         return []
+       }
+       postExportMaterialAsync(vv, zv, Pv) {
+         return new Promise((vv => {
+ ... (10 more added lines; see GitHub link above)
```

#### 166. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1913-L1914` → after: `L13580-L13590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13580-L13590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13580-L13590) · [Before (L1913-L1914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1913-L1914)

```diff
-       get m() {
-         return this._m
+     }
+     let Qe = !1;
+ 
+     function Ze() {
+       Qe || (Qe = !0, th.RegisterExtension(qe, (vv => new Ie(vv))))
+     }
+     Ze();
+     const Ae = "KHR_materials_openpbr";
+     class Le {
+       constructor() {
+         this.name = Ae, this.enabled = !0, this.required = !1, this._wasUsed = !1
```

#### 167. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1916-L1917` → after: `L13592-L13594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13592-L13594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13592-L13594) · [Before (L1916-L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1916-L1917)

```diff
-       markAsUpdated() {
-         this.updateFlag = vz.i._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
```

#### 168. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1919-L1923` → after: `L13596-L13599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13596-L13599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13596-L13599) · [Before (L1919-L1923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1919-L1923)

```diff
-       _updateIdentityStatus(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           Fz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-         this._isIdentity = zz, this._isIdentity3x2 = zz || sz, this._isIdentityDirty = !this._isIdentity && tz, this._isIdentity3x2Dirty = !this._isIdentity3x2 && Fz
+       postExportMaterialAsync(vv, zv, Pv) {
+         return new Promise((vv => {
+           Pv instanceof Xz && (this._wasUsed = !0, zv.extensions = zv.extensions || {}, zv.extensions[Ae] = {}), vv(zv)
+         }))
```

#### 169. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1926-L1964` → after: `L13611-L13639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13611-L13639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13611-L13639) · [Before (L1926-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1926-L1964)

```diff
-         this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, Xz.c.MatrixTrackPrecisionChange && Xz.c.MatrixTrackedMatrices.push(this), this._m = new Xz.c.MatrixCurrentType(16), this.markAsUpdated()
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
+         this.name = ye, this.enabled = !0, this.required = !1, this._wasUsed = !1
+       }
+       dispose() {}
+       get wasUsed() {
+         return this._wasUsed
+       }
+       postExportTexture(vv, zv, Pv) {
+         if (Pv.rD() || Yz.h.Warn(`${vv}: "scene" is not defined for Babylon texture ${Pv.name}!`), (0 !== Pv.uAng || 0 !== Pv.vAng) && (Yz.h.Warn(`${vv}: Texture ${Pv.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== Pv.uRotationCenter || 0 !== Pv.vRotatio … [truncated]
+         const hv = {};
+         let Sv = !1;
+         if (0 === Pv.uOffset && 0 === Pv.vOffset || (hv.offset = [Pv.uOffset, Pv.vOffset], Sv = !0), 1 === Pv.uScale && 1 === Pv.vScale || (hv.scale = [Pv.uScale, Pv.vScale], Sv = !0), 0 !== Pv.wAng) {
+           if (0 !== Pv.uRotationCenter || 0 !== Pv.vRotationCenter) {
+             if (Pv.homogeneousRotationInUVTransform && Pv.uScale !== Pv.vScale) return void Yz.h.Warn(`${vv}: Texture ${Pv.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${ye}.`);
+             Yz.h.Warn(`${vv}: Texture ${Pv.name} with non-origin rotation center will be exported using an adjusted offset with ${ye}.`), hv.offset = function(vv) {
+               const {
+                 uOffset: zv,
+ ... (13 more added lines; see GitHub link above)
```

#### 170. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1966-L1975` → after: `L13641-L13652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13641-L13652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13641-L13652) · [Before (L1966-L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1966-L1975)

```diff
-       toString() {
-         return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
-       }
-       toArray() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         if (!zz) return this._m;
-         const sz = this._m;
-         for (let Fz = 0; Fz < 16; Fz++) zz[tz + Fz] = sz[Fz];
-         return this
+     }
+     let Je = !1;
+ 
+     function Ee() {
+       Je || (Je = !0, th.RegisterExtension(ye, (() => new Be)))
+     }
+     Ee();
+     var oe = Pv(39338);
+     const be = "KHR_texture_basisu";
+     class re {
+       get wasUsed() {
+         return this._wasUsed
```

#### 171. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1977-L1978` → after: `L13654-L13665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13654-L13665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13654-L13665) · [Before (L1977-L1978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1977-L1978)

```diff
-       hsz() {
-         return this._m
+       constructor(vv) {
+         this.name = be, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = vv
+       }
+       dispose() {}
+       postExportTexture(vv, zv) {
+         const Pv = this._exporter._textures[zv.index],
+           hv = Pv.source;
+         if (void 0 === hv) return;
+         const Sv = this._exporter._images[hv];
+         "image/ktx2" === (Sv.mimeType || (0, oe.i)(Sv.uri)) && (Pv.source = void 0, Pv.extensions || (Pv.extensions = {}), Pv.extensions[be] = {
+           source: hv
+         }, this._wasUsed = !0)
```

#### 172. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1980-L1982` → after: `L13667-L13677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13667-L13677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13667-L13677) · [Before (L1980-L1982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1980-L1982)

```diff
-       Ztz(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return Dz.FromArrayToRef(zz, tz, this)
+     }
+     let ke = !1;
+ 
+     function Xe() {
+       ke || (ke = !0, th.RegisterExtension(be, (vv => new re(vv))))
+     }
+     Xe();
+     const ue = "EXT_texture_webp";
+     class vg {
+       get wasUsed() {
+         return this._wasUsed
```

#### 173. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1984-L1986` → after: `L13679-L13690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13679-L13690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13679-L13690) · [Before (L1984-L1986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1984-L1986)

```diff
-       m_() {
-         for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
-         return Dz.FromArrayToRef(tz, 0, this)
+       constructor(vv) {
+         this.name = ue, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = vv
+       }
+       dispose() {}
+       postExportTexture(vv, zv) {
+         const Pv = this._exporter._textures[zv.index],
+           hv = Pv.source;
+         if (void 0 === hv) return;
+         const Sv = this._exporter._images[hv];
+         "image/webp" === (Sv.mimeType || (0, oe.i)(Sv.uri)) && (Pv.source = void 0, Pv.extensions || (Pv.extensions = {}), Pv.extensions[ue] = {
+           source: hv
+         }, this._wasUsed = !0)
```

#### 174. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1988-L1991` → after: `L13692-L13702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13692-L13702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13692-L13702) · [Before (L1988-L1991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1988-L1991)

```diff
-       set() {
-         const zz = this._m;
-         for (let tz = 0; tz < 16; tz++) zz[tz] = tz < 0 || arguments.length <= tz ? void 0 : arguments[tz];
-         return this.markAsUpdated(), this
+     }
+     let zg = !1;
+ 
+     function Pg() {
+       zg || (zg = !0, th.RegisterExtension(ue, (vv => new vg(vv))))
+     }
+     Pg();
+     const hg = "EXT_texture_avif";
+     class Sg {
+       get wasUsed() {
+         return this._wasUsed
```

#### 175. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1993-L1996` → after: `L13704-L13715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13704-L13715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13704-L13715) · [Before (L1993-L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1993-L1996)

```diff
-       Z6(zz) {
-         const tz = this._m;
-         for (let sz = 0; sz < 16; sz++) tz[sz] = zz;
-         return this.markAsUpdated(), this
+       constructor(vv) {
+         this.name = hg, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = vv
+       }
+       dispose() {}
+       postExportTexture(vv, zv) {
+         const Pv = this._exporter._textures[zv.index],
+           hv = Pv.source;
+         if (void 0 === hv) return;
+         const Sv = this._exporter._images[hv];
+         "image/avif" === (Sv.mimeType || (0, oe.i)(Sv.uri)) && (Pv.source = void 0, Pv.extensions || (Pv.extensions = {}), Pv.extensions[hg] = {
+           source: hv
+         }, this._wasUsed = !0)
```

#### 176. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L1998-L1999` → after: `L13717-L13791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13717-L13791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13717-L13791) · [Before (L1998-L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L1998-L1999)

```diff
-       invert() {
-         return this.invertToRef(this), this
+     }
+     let eg = !1;
+ 
+     function gg() {
+       eg || (eg = !0, th.RegisterExtension(hg, (vv => new Sg(vv))))
+     }
+     gg();
+     class pg {
+       static CreateSTL(vv) {
+         let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
+           Sv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           ev = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
+           gv = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           pv = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+           dv = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
+ ... (59 more added lines; see GitHub link above)
```

#### 177. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2001-L2002` → after: `L13793-L13813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13793-L13813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13793-L13813) · [Before (L2001-L2002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2001-L2002)

```diff
-       reset() {
-         return Dz.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
+     }
+ 
+     function dg(vv, zv) {
+       let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
+         hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       const Sv = [];
+       for (let ev = 0; ev < vv.length / Pv; ev++) {
+         const gv = vv[ev * Pv] * (hv ? -1 : 1),
+           pv = vv[ev * Pv + 1],
+           dv = vv[ev * Pv + 2];
+         Sv.push(`(${gv.toPrecision(zv.precision)}, ${pv.toPrecision(zv.precision)}, ${dv.toPrecision(zv.precision)})`)
+       }
+       return Sv.join(", ")
+     }
+ 
+     function Ng(vv, zv) {
+ ... (5 more added lines; see GitHub link above)
```

#### 178. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2004-L2052` → after: `L13815-L13860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13815-L13860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13815-L13860) · [Before (L2004-L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2004-L2052)

```diff
-       add(zz) {
-         const tz = new Dz;
-         return this.addToRef(zz, tz), tz
-       }
-       addToRef(zz, tz) {
-         const sz = this._m,
-           Fz = tz._m,
-           Wz = zz.m;
-         for (let Xz = 0; Xz < 16; Xz++) Fz[Xz] = sz[Xz] + Wz[Xz];
-         return tz.markAsUpdated(), tz
-       }
-       addToSelf(zz) {
-         const tz = this._m,
-           sz = zz.m;
-         return tz[0] += sz[0], tz[1] += sz[1], tz[2] += sz[2], tz[3] += sz[3], tz[4] += sz[4], tz[5] += sz[5], tz[6] += sz[6], tz[7] += sz[7], tz[8] += sz[8], tz[9] += sz[9], tz[10] += sz[10], tz[11] += sz[11], tz[12] += sz[12], tz[13] += sz[13], tz[14] += sz[14], tz[15] += sz[15 … [truncated]
-       }
- ... (33 more removed lines; see GitHub link above)
+       return Pv.join(", ")
+     }
+ 
+     function lg(vv, zv, Pv, hv) {
+       const Sv = vv.getVerticesData(lv.i.PositionKind),
+         ev = vv.getVerticesData(lv.i.NormalKind);
+       if (Sv && ev) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${Pv}"\n\t\tint[] faceVertexCounts = [${function(vv){const zv=vv.dPv()?.length?vv.getTotalIndices():vv.getTotalVertices();return Array(zv/3).fill(3).join(", ")}(vv)}]\n\t\tint[] faceVer … [truncated]
+       n\ tcolor3f[] primvars: displayColor = [$ {
+         dg(hv, zv, hv.length / vv.getTotalVertices())
+       }](\n\ t\ tinterpolation = "vertex"\
+         n\ t\ t)`),Pv}(vv,zv)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
+     }
+ 
+     function Tg(vv, zv, Pv, hv) {
+       return `\n        def "Geometry"\n        {\n        ${lg(vv,zv,Pv,hv)}\n        }\n        `
+     }
+ ... (30 more added lines; see GitHub link above)
```

#### 179. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2054-L2061` → after: `L13862-L13997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13862-L13997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13862-L13997) · [Before (L2054-L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2054-L2061)

```diff
-       subtractFromFloatsToRef() {
-         for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
-         const Fz = tz.pop(),
-           Wz = this._m,
-           Xz = Fz._m,
-           Oz = tz;
-         for (let oz = 0; oz < 16; oz++) Xz[oz] = Wz[oz] - Oz[oz];
-         return Fz.markAsUpdated(), Fz
+     }
+ 
+     function ig(vv) {
+       return `(${vv.x}, ${vv.y})`
+     }
+ 
+     function cg(vv) {
+       return `(${vv.r}, ${vv.g}, ${vv.b})`
+     }
+ 
+     function Gg(vv) {
+       return "image/jpeg" === vv || "image/png" === vv
+     }
+ 
+     function mg(vv, zv, Pv, Sv, ev, gv) {
+       const pv = vv.getInternalTexture().uniqueId + "_" + vv.invertY,
+ ... (120 more added lines; see GitHub link above)
```

#### 180. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2063-L2064` → after: `L13999-L14002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R13999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L13999-L14002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L13999-L14002) · [Before (L2063-L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2063-L2064)

```diff
-       invertToRef(zz) {
-         return !0 === this._isIdentity ? (Dz.IdentityToRef(zz), zz) : ((0, vz.d)(this, zz.hsz()) ? zz.markAsUpdated() : zz.vsz(this), zz)
+       return zv.determinant() < 0 && Sv.Tools.Warn(`Mesh ${vv.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
+         matrix: zv,
+         windingOrder: hv === ev.b.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
+         convertToRightHanded: gv
```

#### 181. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2066-L2067` → after: `L14004-L14076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14004-L14076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14004-L14076) · [Before (L2066-L2067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2066-L2067)

```diff
-       addAtIndex(zz, tz) {
-         return this._m[zz] += tz, this.markAsUpdated(), this
+     }
+     async function Fg(vv, zv, Pv) {
+       const ev = {
+         fflateUrl: "https://unpkg.com/fflate@0.8.2",
+         includeAnchoringProperties: !0,
+         anchoringType: "plane",
+         planeAnchoringAlignment: "horizontal",
+         modelFileName: "model.usda",
+         precision: 5,
+         exportCamera: !1,
+         cameraSensorWidth: 35,
+         ...zv
+       };
+       "undefined" === typeof fflate && await Sv.Tools.LoadScriptAsync(ev.fflateUrl);
+       const gv = {};
+       gv[ev.modelFileName] = null;
+ ... (57 more added lines; see GitHub link above)
```

#### 182. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2069-L2070` → after: `L14078-L14092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14078-L14092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14078-L14092) · [Before (L2069-L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2069-L2070)

```diff
-       multiplyAtIndex(zz, tz) {
-         return this._m[zz] *= tz, this.markAsUpdated(), this
+       let lv = 0;
+       for (const hv in gv) {
+         const vv = gv[hv];
+         if (!vv) continue;
+         lv += 34 + hv.length;
+         const zv = 63 & lv;
+         if (4 !== zv) {
+           const Pv = new Uint8Array(64 - zv);
+           gv[hv] = [vv, {
+             extra: {
+               12345: Pv
+             }
+           }]
+         }
+         lv = vv.length
```

#### 183. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2072-L2073` → after: `L14094-L14143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14094-L14143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14094-L14143) · [Before (L2072-L2073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2072-L2073)

```diff
-       setTranslationFromFloats(zz, tz, sz) {
-         return this._m[12] = zz, this._m[13] = tz, this._m[14] = sz, this.markAsUpdated(), this
+       return fflate.zipSync(gv, {
+         level: 0
+       })
+     }
+     var Yg = Pv(40402);
+     class ng {
+       static Export(vv) {
+         let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
+           Pv = arguments.length > 2 ? arguments[2] : void 0;
+         if (!vv || 0 === vv.bones.length) throw new Error("Invalid or empty skeleton provided");
+         let hv = zv;
+         zv && 0 !== zv.length || (hv = vv.animations.map((vv => vv.name)));
+         let Sv = null;
+         for (const Nv of hv) {
+           const zv = vv.getAnimationRange(Nv);
+           zv && (Sv = Sv ? new Yg.e("animation-range", Math.min(Sv.from, zv.from), Math.max(Sv.to, zv.to)) : zv)
+ ... (34 more added lines; see GitHub link above)
```

#### 184. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2075-L2076` → after: `L14145-L14162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14145-L14162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14145-L14162) · [Before (L2075-L2076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2075-L2076)

```diff
-       addTranslationFromFloats(zz, tz, sz) {
-         return this._m[12] += zz, this._m[13] += tz, this._m[14] += sz, this.markAsUpdated(), this
+       static _ExportHierarchy(vv, zv) {
+         let Pv = "";
+         const hv = "    ".repeat(zv);
+         for (const Sv of vv) {
+           const vv = Sv.bone;
+           if (this._IsEndSite(Sv)) {
+             Pv += `${hv}End Site\n`, Pv += `${hv}{\n`;
+             const zv = this._GetBoneOffset(vv);
+             Pv += `${hv}    OFFSET ${zv.x.toFixed(6)} ${zv.y.toFixed(6)} ${zv.z.toFixed(6)}\n`, Pv += `${hv}}\n`
+           } else {
+             Pv += `${0===zv?"ROOT":`${hv}JOINT`} ${vv.name}\n`, Pv += `${hv}{\n`;
+             const ev = this._GetBoneOffset(vv);
+             Pv += `${hv}    OFFSET ${ev.x.toFixed(6)} ${ev.y.toFixed(6)} ${ev.z.toFixed(6)}\n`;
+             const gv = [];
+             Sv.hasPositionChannels && gv.push("Xposition", "Yposition", "Zposition"), Sv.hasRotationChannels && gv.push("Zrotation", "Xrotation", "Yrotation"), gv.length > 0 && (Pv += `${hv}    CHANNELS ${gv.length} ${gv.join(" ")}\n`), Sv.children.length > 0 && (Pv += this._Expo … [truncated]
+           }
+ ... (2 more added lines; see GitHub link above)
```

#### 185. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2078-L2079` → after: `L14164-L14165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14164-L14165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14164-L14165) · [Before (L2078-L2079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2078-L2079)

```diff
-       setTranslation(zz) {
-         return this.setTranslationFromFloats(zz._x, zz._y, zz._z)
+       static _IsEndSite(vv) {
+         return 0 === vv.children.length
```

#### 186. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2081-L2082` → after: `L14167-L14173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14167-L14173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14167-L14173) · [Before (L2081-L2082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2081-L2082)

```diff
-       getTranslation() {
-         return new Nz(this._m[12], this._m[13], this._m[14])
+       static _GetBoneOffset(vv) {
+         try {
+           if (!vv.getParent()) return vv.getRestMatrix().getTranslation();
+           return vv.getLocalMatrix().getTranslation()
+         } catch (zv) {
+           return hv.fa.Zero()
+         }
```

#### 187. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2084-L2085` → after: `L14175-L14181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14175-L14181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14175-L14181) · [Before (L2084-L2085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2084-L2085)

```diff
-       getTranslationToRef(zz) {
-         return zz.x = this._m[12], zz.y = this._m[13], zz.z = this._m[14], zz
+       static _ExportMotionData(vv, zv, Pv, hv) {
+         let Sv = "";
+         for (let ev = 0; ev < zv; ev++) {
+           const zv = [];
+           this._CollectFrameValues(vv, ev + Pv, zv, hv), Sv += zv.map((vv => vv.toFixed(6))).join(" ") + "\n"
+         }
+         return Sv
```

#### 188. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2087-L2089` → after: `L14183-L14196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14183-L14196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14183-L14196) · [Before (L2087-L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2087-L2089)

```diff
-       removeRotationAndScaling() {
-         const zz = this.m;
-         return Dz.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, zz[12], zz[13], zz[14], zz[15], this), this._updateIdentityStatus(0 === zz[12] && 0 === zz[13] && 0 === zz[14] && 1 === zz[15]), this
+       static _CollectFrameValues(vv, zv, Pv, hv) {
+         for (const Sv of vv)
+           if (!this._IsEndSite(Sv)) {
+             if (Sv.hasPositionChannels) {
+               const vv = this._GetPositionAtFrameIndex(Sv.positionKeys, zv);
+               Pv.push(vv.x, vv.y, vv.z)
+             }
+             if (Sv.hasRotationChannels) {
+               const vv = this._GetRotationAtFrameIndex(Sv.rotationKeys, zv),
+                 hv = this._QuaternionToEuler(vv);
+               Pv.push(hv.z, hv.x, hv.y)
+             }
+             Sv.children.length > 0 && this._CollectFrameValues(Sv.children, zv, Pv, hv)
+           }
```

#### 189. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2091-L2094` → after: `L14198-L14200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14198-L14200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14198-L14200) · [Before (L2091-L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2091-L2094)

```diff
-       vsz(zz) {
-         zz.copyToArray(this._m);
-         const tz = zz;
-         return this.updateFlag = tz.updateFlag, this._updateIdentityStatus(tz._isIdentity, tz._isIdentityDirty, tz._isIdentity3x2, tz._isIdentity3x2Dirty), this
+       static _GetPositionAtFrameIndex(vv, zv) {
+         if (0 === vv.length) return hv.fa.Zero();
+         return vv[Math.max(0, Math.min(zv, vv.length - 1))].value.clone()
```

#### 190. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2096-L2098` → after: `L14202-L14204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14202-L14204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14202-L14204) · [Before (L2096-L2098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2096-L2098)

```diff
-       copyToArray(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         return (0, vz.c)(this, zz, tz), this
+       static _GetRotationAtFrameIndex(vv, zv) {
+         if (0 === vv.length) return hv.Quaternion.Identity();
+         return vv[Math.max(0, Math.min(zv, vv.length - 1))].value.clone()
```

#### 191. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2100-L2102` → after: `L14206-L14212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14206-L14212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14206-L14212) · [Before (L2100-L2102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2100-L2102)

```diff
-       multiply(zz) {
-         const tz = new Dz;
-         return this.multiplyToRef(zz, tz), tz
+       static _QuaternionToEuler(vv) {
+         const zv = new hv.Matrix;
+         vv.toRotationMatrix(zv);
+         const Pv = zv.m;
+         let ev, gv, pv;
+         const dv = Math.sqrt(Pv[0] * Pv[0] + Pv[1] * Pv[1]);
+         return dv > xP.e ? (ev = Math.atan2(Pv[6], Pv[10]), gv = Math.atan2(-Pv[2], dv), pv = Math.atan2(Pv[1], Pv[0])) : (ev = Math.atan2(-Pv[9], Pv[5]), gv = Math.atan2(-Pv[2], dv), pv = 0), new hv.fa(Sv.Tools.ToDegrees(ev), Sv.Tools.ToDegrees(gv), Sv.Tools.ToDegrees(pv))
```

#### 192. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2104-L2108` → after: `L14214-L14228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14214-L14228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14214-L14228) · [Before (L2104-L2108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2104-L2108)

```diff
-       multiplyInPlace(zz) {
-         const tz = this._m,
-           sz = zz.m;
-         for (let Fz = 0; Fz < 16; Fz++) tz[Fz] *= sz[Fz];
-         return this.markAsUpdated(), this
+     }
+ 
+     function Og(vv) {
+       return "string" === typeof vv?.name
+     }
+     const Dg = Symbol("__xml:meta$__"),
+       Kg = Symbol("__xml:name$__");
+ 
+     function Vg(vv, zv) {
+       Object.prototype.hasOwnProperty.call(vv.metadata, Dg) || (vv.metadata[Dg] = []), vv.metadata[Dg].push(zv)
+     }
+ 
+     function Ug(vv) {
+       return (zv, Pv) => {
+         zv[Kg] = vv
```

#### 193. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2110-L2113` → after: `L14230-L14294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14230-L14294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14230-L14294) · [Before (L2110-L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2110-L2113)

```diff
-       multiplyByFloats() {
-         const zz = this._m;
-         for (let tz = 0; tz < 16; tz++) zz[tz] *= tz < 0 || arguments.length <= tz ? void 0 : arguments[tz];
-         return this.markAsUpdated(), this
+     }
+ 
+     function Rg() {
+       return (vv, zv) => Vg(zv, {
+         kind: "none",
+         prop: String(zv.name),
+         ignore: !0
+       })
+     }
+ 
+     function xg(vv) {
+       return (zv, Pv) => Vg(Pv, {
+         kind: "attr",
+         prop: String(Pv.name),
+         ...vv
+       })
+ ... (49 more added lines; see GitHub link above)
```

#### 194. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2115-L2188` → after: `L14296-L14322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14296-L14322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14296-L14322) · [Before (L2115-L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2115-L2188)

```diff
-       multiplyByFloatsToRef() {
-         for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
-         const Fz = tz.pop(),
-           Wz = this._m,
-           Xz = Fz._m,
-           Oz = tz;
-         for (let oz = 0; oz < 16; oz++) Xz[oz] = Wz[oz] * Oz[oz];
-         return Fz.markAsUpdated(), Fz
-       }
-       multiplyToRef(zz, tz) {
-         return this._isIdentity ? (tz.vsz(zz), tz) : zz._isIdentity ? (tz.vsz(this), tz) : (this.multiplyToArray(zz, tz._m, 0), tz.markAsUpdated(), tz)
-       }
-       multiplyToArray(zz, tz, sz) {
-         return (0, vz.l)(this, zz, tz, sz), this
-       }
-       divide(zz) {
- ... (58 more removed lines; see GitHub link above)
+     }
+ 
+     function Ag(vv, zv) {
+       return zv ? `${zv}:${vv}` : vv
+     }
+     const Lg = Object.freeze({
+         eps: 1e-6,
+         maxDecimalsCap: 15,
+         trimTrailingZeros: !0,
+         allowScientific: !1,
+         snapNearZero: !0
+       }),
+       Hg = Object.freeze({
+         number: Lg
+       });
+ 
+ ... (11 more added lines; see GitHub link above)
```

#### 195. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2190-L2196` → after: `L14324-L14328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14324-L14328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14324-L14328) · [Before (L2190-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2190-L2196)

```diff
-       equalsWithEpsilon(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const sz = this._m,
-           Fz = zz.m;
-         for (let Wz = 0; Wz < 16; Wz++)
-           if (!(0, oz.WithinEpsilon)(sz[Wz], Fz[Wz], tz)) return !1;
-         return !0
+     }
+ 
+     function yg(vv) {
+       return {
+         number: Mg(vv?.number)
```

#### 196. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2198-L2202` → after: `L14330-L14347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14330-L14347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14330-L14347) · [Before (L2198-L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2198-L2202)

```diff
-       wOz() {
-         const zz = this._m;
-         for (let tz = 0; tz < 16; tz++)
-           if (zz[tz] != (tz < 0 || arguments.length <= tz ? void 0 : arguments[tz])) return !1;
-         return !0
+     }
+     class Bg {
+       constructor(vv) {
+         if (this.o = vv, this._o = vv.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
+       }
+       toString(vv) {
+         if (!Number.isFinite(vv)) throw new Error(`Cannot format non-finite number: ${vv}`);
+         const zv = this._o,
+           Pv = this._clampInt(zv.maxDecimalsCap ?? 15, 0, 20),
+           hv = zv.trimTrailingZeros ?? !0,
+           Sv = zv.snapNearZero ?? !0,
+           ev = zv.zeroThreshold ?? zv.eps,
+           gv = 1 / zv.eps;
+         let pv, dv = Math.round(vv * gv) / gv;
+         if (Object.is(dv, -0) && (dv = 0), Sv && Math.abs(dv) <= ev && (dv = 0), pv = void 0 !== zv.fixedDecimals ? this._clampInt(zv.fixedDecimals, 0, Pv) : this._clampInt(Math.ceil(-Math.log10(zv.eps)), 0, Pv), zv.allowScientific, 0 === pv) return String(Math.trunc(dv));
+         let Nv = dv.toFixed(pv);
+ ... (2 more added lines; see GitHub link above)
```

#### 197. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2204-L2205` → after: `L14349-L14350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14349-L14350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14349-L14350) · [Before (L2204-L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2204-L2205)

```diff
-       floor() {
-         return this.floorToRef(new Dz)
+       _clampInt(vv, zv, Pv) {
+         return Number.isFinite(vv) ? (vv = Math.trunc(vv), Math.max(zv, Math.min(Pv, vv))) : zv
```

#### 198. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2207-L2211` → after: `L14352-L14371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14352-L14371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14352-L14371) · [Before (L2207-L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2207-L2211)

```diff
-       floorToRef(zz) {
-         const tz = this._m,
-           sz = zz._m;
-         for (let Fz = 0; Fz < 16; Fz++) sz[Fz] = Math.floor(tz[Fz]);
-         return zz.markAsUpdated(), zz
+     }
+ 
+     function Jg(vv) {
+       return vv instanceof Date
+     }
+ 
+     function Eg(vv) {
+       return "string" === typeof vv
+     }
+ 
+     function og(vv) {
+       return "string" === typeof vv || "number" === typeof vv || "boolean" === typeof vv || "bigint" === typeof vv || Jg(vv)
+     }
+ 
+     function bg(vv) {
+       return "number" === typeof vv || "boolean" === typeof vv || "bigint" === typeof vv || Jg(vv)
+ ... (4 more added lines; see GitHub link above)
```

#### 199. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2213-L2214` → after: `L14373-L14376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14373-L14376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14373-L14376) · [Before (L2213-L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2213-L2214)

```diff
-       fract() {
-         return this.fractToRef(new Dz)
+       withNamespace() {
+         for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
+         for (const hv of zv) this._assignNamespace(hv);
+         return this
```

#### 200. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2216-L2220` → after: `L14378-L14403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14378-L14403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14378-L14403) · [Before (L2216-L2220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2216-L2220)

```diff
-       fractToRef(zz) {
-         const tz = this._m,
-           sz = zz._m;
-         for (let Fz = 0; Fz < 16; Fz++) sz[Fz] = tz[Fz] - Math.floor(tz[Fz]);
-         return zz.markAsUpdated(), zz
+       serialize(vv, zv) {
+         if (!(zv = zv ?? Ig(vv))) throw new Error("can not find name for given object");
+         const Pv = Zg(zv);
+         Pv.ns && this._assignNamespace(Pv.ns, "xmlns"), this._gatherNamespaces(vv, new WeakSet);
+         const hv = this._builder.ele(null, Pv.name);
+         for (const [Sv, ev] of Array.from(this._ns.entries())) hv.att("xmlns", ev, Sv);
+         this._writeObjectContent(hv, vv, (new WeakSet).add(vv)), this._builder.end()
+       }
+       _writeObject(vv, zv, Pv) {
+         if (Pv.has(zv)) return;
+         if (Pv.add(zv), Array.isArray(zv)) {
+           for (const hv of zv) bg(hv) || (Eg(hv) ? this._builder.text(hv) : this._writeObject(vv, hv, Pv));
+           return
+         }
+         const hv = Ig(zv);
+         if (!hv) return;
+ ... (10 more added lines; see GitHub link above)
```

#### 201. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2222-L2224` → after: `L14405-L14441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14405-L14441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14405-L14441) · [Before (L2222-L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2222-L2224)

```diff
-       clone() {
-         const zz = new Dz;
-         return zz.vsz(this), zz
+       _writeObjectContent(vv, zv, Pv) {
+         const hv = qg(zv) ?? [],
+           Sv = new Map;
+         for (const gv of hv) {
+           const vv = Sv.get(gv.prop) ?? [];
+           vv.push(gv), Sv.set(gv.prop, vv)
+         }
+         const ev = Object.keys(zv).sort(((vv, zv) => {
+           const Pv = (Sv.get(vv) ?? []).some((vv => "attr" === vv.kind));
+           return Pv === (Sv.get(zv) ?? []).some((vv => "attr" === vv.kind)) ? 0 : Pv ? -1 : 1
+         }));
+         for (const gv of ev) {
+           const hv = zv[gv];
+           if (null === hv || void 0 === hv) continue;
+           const ev = Sv.get(gv);
+           if (ev) {
+ ... (21 more added lines; see GitHub link above)
```

#### 202. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2226-L2227` → after: `L14443-L14478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14443-L14478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14443-L14478) · [Before (L2226-L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2226-L2227)

```diff
-       getClassName() {
-         return "Matrix"
+       _gatherNamespaces(vv, zv) {
+         if (zv.has(vv)) return;
+         if (zv.add(vv), Array.isArray(vv)) {
+           for (const Pv of vv) og(Pv) || this._gatherNamespaces(Pv, zv);
+           return
+         }
+         const Pv = Ig(vv);
+         Pv && this._assignNamespace(Pv);
+         const hv = qg(vv) ?? [],
+           Sv = new Map;
+         for (const gv of hv) {
+           const vv = Sv.get(gv.prop) ?? [];
+           vv.push(gv), Sv.set(gv.prop, vv)
+         }
+         const ev = [];
+         for (const gv of Object.keys(vv)) {
+ ... (20 more added lines; see GitHub link above)
```

#### 203. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2229-L2231` → after: `L14480-L14489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14480-L14489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14480-L14489) · [Before (L2229-L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2229-L2231)

```diff
-       getHashCode() {
-         let zz = Kz(this._m[0]);
-         for (let tz = 1; tz < 16; tz++) zz = 397 * zz ^ Kz(this._m[tz]);
+       _buildNsPrefix(vv) {
+         let zv, Pv = !1;
+         do {
+           zv = "ns" + this._prefixCount++;
+           for (const vv of Array.from(this._ns.values()))
+             if (vv === zv) {
+               Pv = !0;
+               break
+             }
+         } while (Pv);
```

#### 204. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2234-L2247` → after: `L14492-L14519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14492-L14519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14492-L14519) · [Before (L2234-L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2234-L2247)

```diff
-       decomposeToTransformNode(zz) {
-         return zz.rotationQuaternion = zz.rotationQuaternion || new wz, this.decompose(zz.nX, zz.rotationQuaternion, zz.position)
-       }
-       decompose(zz, tz, sz, Fz) {
-         let Wz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
-         if (this._isIdentity) return sz && sz.Z6(0), zz && zz.Z6(1), tz && tz.m_(0, 0, 0, 1), !0;
-         const Xz = this._m;
-         if (sz && sz.m_(Xz[12], Xz[13], Xz[14]), (zz = zz || gz.XD[0]).x = Math.sqrt(Xz[0] * Xz[0] + Xz[1] * Xz[1] + Xz[2] * Xz[2]), zz.y = Math.sqrt(Xz[4] * Xz[4] + Xz[5] * Xz[5] + Xz[6] * Xz[6]), zz.z = Math.sqrt(Xz[8] * Xz[8] + Xz[9] * Xz[9] + Xz[10] * Xz[10]), Fz) {
-           const tz = (Wz ? Fz.absoluteScaling.x : Fz.nX.x) < 0 ? -1 : 1,
-             sz = (Wz ? Fz.absoluteScaling.y : Fz.nX.y) < 0 ? -1 : 1,
-             Xz = (Wz ? Fz.absoluteScaling.z : Fz.nX.z) < 0 ? -1 : 1;
-           zz.x *= tz, zz.y *= sz, zz.z *= Xz
-         } else this.determinant() <= 0 && (zz.y *= -1);
-         if (0 === zz._x || 0 === zz._y || 0 === zz._z) return tz && tz.m_(0, 0, 0, 1), !1;
+     }
+     class kg {}
+     var Xg;
+     kg.OpenTag = "<", kg.CloseTag = ">", kg.Slash = "/", kg.Question = "?", kg.Quote = '"', kg.Equal = "=", kg.Space = " ", kg.Semicolon = ":", kg.Dec = "<?xml", kg.Xml = "xml", kg.Xmlns = "xmlns", kg.Xsi = "xsi", kg.VersionKeyword = "version", kg.EncodingKeyword = "encoding", kg … [truncated]
+       function(vv) {
+         vv[vv.Declaration = 0] = "Declaration", vv[vv.Tag = 1] = "Tag", vv[vv.Attribute = 2] = "Attribute", vv[vv.Text = 3] = "Text"
+       }(Xg || (Xg = {}));
+     class ug {
+       constructor(vv) {
+         this._ctxStack = [], this._d = 0, this._w = vv
+       }
+       dec(vv, zv, Pv) {
+         return this._w.write(kg.Dec), this._writeAttStr(kg.VersionKeyword, vv), zv && this._writeAttStr(kg.EncodingKeyword, zv), void 0 !== Pv && this._writeAttStr(kg.StandaloneKeyword, Pv ? "yes" : "no"), this._w.write(kg.Question, kg.CloseTag), this
+       }
+       att(vv, zv, Pv) {
+         const hv = this._peekContext();
+ ... (12 more added lines; see GitHub link above)
```

#### 205. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2249-L2252` → after: `L14521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14521) · [Before (L2249-L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2249-L2252)

```diff
-           const sz = 1 / zz._x,
-             Fz = 1 / zz._y,
-             Wz = 1 / zz._z;
-           Dz.FromValuesToRef(Xz[0] * sz, Xz[1] * sz, Xz[2] * sz, 0, Xz[4] * Fz, Xz[5] * Fz, Xz[6] * Fz, 0, Xz[8] * Wz, Xz[9] * Wz, Xz[10] * Wz, 0, 0, 0, 0, 1, gz.Matrix[0]), wz.FromRotationMatrixToRef(gz.Matrix[0], tz)
+           Sv = `${this._ensurePrefixDeclared(hv,vv)}:${zv}`
```

#### 206. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2254` → after: `L14523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14523) · [Before (L2254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2254)

```diff
-         return !0
+         return hv.lastToken = Xg.Attribute, this._writeAttStr(Sv, Pv), this
```

#### 207. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2256-L2264` → after: `L14525-L14590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14525-L14590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14525-L14590) · [Before (L2256-L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2256-L2264)

```diff
-       getRow(zz) {
-         if (zz < 0 || zz > 3) return null;
-         const tz = 4 * zz;
-         return new bz(this._m[tz + 0], this._m[tz + 1], this._m[tz + 2], this._m[tz + 3])
-       }
-       getRowToRef(zz, tz) {
-         if (zz >= 0 && zz <= 3) {
-           const sz = 4 * zz;
-           tz.x = this._m[sz + 0], tz.y = this._m[sz + 1], tz.z = this._m[sz + 2], tz.w = this._m[sz + 3]
+       ele(vv, zv) {
+         const Pv = this._peekContext();
+         Pv && this._closeOpenTagIfNeeded(Pv);
+         let hv = zv;
+         if (vv) {
+           hv = `${this._lookupPrefix(vv)??vv}:${zv}`
+         }
+         return this._pushContext(hv, ++this._d), this._w.write(kg.OpenTag, hv), this
+       }
+       text(vv) {
+         const zv = this._peekContext();
+         if (!zv) throw new Error("text() without open element");
+         return this._closeOpenTagIfNeeded(zv), zv.lastToken = Xg.Text, this._w.write(this._escText(vv)), this
+       }
+       end() {
+         const vv = this._popContext();
+ ... (50 more added lines; see GitHub link above)
```

#### 208. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2291-L2293` → after: `L14593-L14598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14593-L14598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14593-L14598) · [Before (L2291-L2293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2291-L2293)

```diff
-       scaleAndAddToRef(zz, tz) {
-         for (let sz = 0; sz < 16; sz++) tz._m[sz] += this._m[sz] * zz;
-         return tz.markAsUpdated(), tz
+       _ensurePrefixDeclared(vv, zv) {
+         const Pv = this._lookupPrefix(zv);
+         if (Pv) return Pv;
+         if (vv.closed) throw new Error(`can not declare namespace after start tag closed for <${vv.name}>`);
+         const hv = this._allocPrefix(vv);
+         return this._writeAttStr(`${kg.Xmlns}:${hv}`, zv), this._registerNamespace(vv, hv, zv), hv
```

#### 209. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2295-L2298` → after: `L14600-L14601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14600-L14601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14600-L14601) · [Before (L2295-L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2295-L2298)

```diff
-       scaleInPlace(zz) {
-         const tz = this._m;
-         for (let sz = 0; sz < 16; sz++) tz[sz] *= zz;
-         return this.markAsUpdated(), this
+       _closeOpenTagIfNeeded(vv) {
+         vv.closed || (this._w.write(kg.CloseTag), vv.closed = !0)
```

#### 210. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2300-L2304` → after: `L14603-L14606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14603-L14606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14603-L14606) · [Before (L2300-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2300-L2304)

```diff
-       toNormalMatrix(zz) {
-         const tz = gz.Matrix[0];
-         this.invertToRef(tz), tz.transposeToRef(zz);
-         const sz = zz._m;
-         return Dz.FromValuesToRef(sz[0], sz[1], sz[2], 0, sz[4], sz[5], sz[6], 0, sz[8], sz[9], sz[10], 0, 0, 0, 0, 1, zz), zz
+     }
+     ug.Context = class {
+       constructor(vv, zv) {
+         this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = vv, this.depth = zv
```

#### 211. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2306-L2308` → after: `L14608-L14611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14608-L14611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14608-L14611) · [Before (L2306-L2308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2306-L2308)

```diff
-       getRotationMatrix() {
-         const zz = new Dz;
-         return this.getRotationMatrixToRef(zz), zz
+     };
+     class vp {
+       constructor() {
+         this.count = 0, this._chunks = []
```

#### 212. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2310-L2317` → after: `L14613-L14617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14613-L14617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14613-L14617) · [Before (L2310-L2317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2310-L2317)

```diff
-       getRotationMatrixToRef(zz) {
-         const tz = gz.XD[0];
-         if (!this.decompose(tz)) return Dz.IdentityToRef(zz), zz;
-         const sz = this._m,
-           Fz = 1 / tz._x,
-           Wz = 1 / tz._y,
-           Xz = 1 / tz._z;
-         return Dz.FromValuesToRef(sz[0] * Fz, sz[1] * Fz, sz[2] * Fz, 0, sz[4] * Wz, sz[5] * Wz, sz[6] * Wz, 0, sz[8] * Xz, sz[9] * Xz, sz[10] * Xz, 0, 0, 0, 0, 1, zz), zz
+       write() {
+         for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
+         if (0 === zv.length) return this;
+         const hv = zv.join("");
+         return this._chunks.push(hv), this.count += hv.length, this
```

#### 213. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2319-L2321` → after: `L14619-L14620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14619-L14620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14619-L14620) · [Before (L2319-L2321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2319-L2321)

```diff
-       toggleModelMatrixHandInPlace() {
-         const zz = this._m;
-         return zz[2] *= -1, zz[6] *= -1, zz[8] *= -1, zz[9] *= -1, zz[14] *= -1, this.markAsUpdated(), this
+       toString() {
+         return this._chunks.join("")
```

#### 214. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2323-L2325` → after: `L14622-L14623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14622-L14623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14622-L14623) · [Before (L2323-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2323-L2325)

```diff
-       toggleProjectionMatrixHandInPlace() {
-         const zz = this._m;
-         return zz[8] *= -1, zz[9] *= -1, zz[10] *= -1, zz[11] *= -1, this.markAsUpdated(), this
+       clear() {
+         this._chunks = [], this.count = 0
```

#### 215. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2327-L2328` → after: `L14625-L14629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14625-L14629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14625-L14629) · [Before (L2327-L2328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2327-L2328)

```diff
-       _convertProjectionToHalfZRangeInPlace() {
-         return this.multiplyToRef(Bz, this), this
+     }
+     class zp {
+       constructor(vv) {
+         let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         this._sink = vv, this._opts = zv, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
```

#### 216. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2330-L2333` → after: `L14631-L14638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14631-L14638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14631-L14638) · [Before (L2330-L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2330-L2333)

```diff
-       static FromArray(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const sz = new Dz;
-         return Dz.FromArrayToRef(zz, tz, sz), sz
+       write() {
+         for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
+         if (0 === zv.length) return this;
+         const hv = zv.join("");
+         if (0 === hv.length) return this;
+         this._pending += hv, this._pendingChars += hv.length;
+         const Sv = this._opts.flushChars ?? 65536;
+         return this._pendingChars >= Sv && this.flush(), this
```

#### 217. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2335-L2337` → after: `L14640-L14643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14640-L14643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14640-L14643) · [Before (L2335-L2337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2335-L2337)

```diff
-       static FromArrayToRef(zz, tz, sz) {
-         for (let Fz = 0; Fz < 16; Fz++) sz._m[Fz] = zz[Fz + tz];
-         return sz.markAsUpdated(), sz
+       flush() {
+         if (0 === this._pendingChars) return this;
+         const vv = this._encoder.encode(this._pending);
+         return this._sink.push(vv), this.count += vv.length, this._pending = "", this._pendingChars = 0, this
```

#### 218. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2339-L2340` → after: `L14645-L14646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14645-L14646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14645-L14646) · [Before (L2339-L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2339-L2340)

```diff
-       static FromFloat32ArrayToRefScaled(zz, tz, sz, Fz) {
-         return Fz._m[0] = zz[0 + tz] * sz, Fz._m[1] = zz[1 + tz] * sz, Fz._m[2] = zz[2 + tz] * sz, Fz._m[3] = zz[3 + tz] * sz, Fz._m[4] = zz[4 + tz] * sz, Fz._m[5] = zz[5 + tz] * sz, Fz._m[6] = zz[6 + tz] * sz, Fz._m[7] = zz[7 + tz] * sz, Fz._m[8] = zz[8 + tz] * sz, Fz._m[9] = zz … [truncated]
+       finish() {
+         this.flush(), this._sink.push(new Uint8Array(0), !0)
```

#### 219. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2342-L2343` → after: `L14648-L14649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14648-L14649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14648-L14649) · [Before (L2342-L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2342-L2343)

```diff
-       static get IdentityReadOnly() {
-         return Dz._IdentityReadOnly
+       clear() {
+         this._pending = "", this._pendingChars = 0, this.count = 0
```

#### 220. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2345-L2347` → after: `L14651-L14674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14651-L14674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14651-L14674) · [Before (L2345-L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2345-L2347)

```diff
-       static FromValuesToRef(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz, uz, Nz, bz, wz, Dz, gz) {
-         const Hz = gz._m;
-         Hz[0] = zz, Hz[1] = tz, Hz[2] = sz, Hz[3] = Fz, Hz[4] = Wz, Hz[5] = Xz, Hz[6] = Oz, Hz[7] = oz, Hz[8] = vz, Hz[9] = Uz, Hz[10] = Kz, Hz[11] = uz, Hz[12] = Nz, Hz[13] = bz, Hz[14] = wz, Hz[15] = Dz, gz.markAsUpdated()
+     }
+     const Pp = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
+       hp = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
+     var Sp, ep;
+     ! function(vv) {
+       vv.micron = "micron", vv.millimeter = "millimeter", vv.centimeter = "centimeter", vv.inch = "inch", vv.foot = "foot", vv.meter = "meter"
+     }(Sp || (Sp = {})),
+     function(vv) {
+       vv.model = "model", vv.solidsupport = "solidsupport", vv.support = "support", vv.surface = "surface", vv.other = "other"
+     }(ep || (ep = {}));
+     const gp = "http://schemas.openxmlformats.org/package/2006/content-types",
+       pp = "http://schemas.openxmlformats.org/package/2006/relationships";
+     var dp;
+     ! function(vv) {
+       vv.Relationships = "application/vnd.openxmlformats-package.relationships+xml", vv.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", vv.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", vv.Colors = "application/vnd.ms-package.3dmanufactur … [truncated]
+     }(dp || (dp = {}));
+ ... (8 more added lines; see GitHub link above)
```

#### 221. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2349-L2352` → after: `L14676-L14677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14676-L14677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14676-L14677) · [Before (L2349-L2352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2349-L2352)

```diff
-       static FromValues(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz, uz, Nz, bz, wz, gz) {
-         const Hz = new Dz,
-           Bz = Hz._m;
-         return Bz[0] = zz, Bz[1] = tz, Bz[2] = sz, Bz[3] = Fz, Bz[4] = Wz, Bz[5] = Xz, Bz[6] = Oz, Bz[7] = oz, Bz[8] = vz, Bz[9] = Uz, Bz[10] = Kz, Bz[11] = uz, Bz[12] = Nz, Bz[13] = bz, Bz[14] = wz, Bz[15] = gz, Hz.markAsUpdated(), Hz
+       static IsThreeDimModel(vv) {
+         return vv === ap.ThreeDimModel
```

#### 222. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2354-L2386` → after: `L14679-L14882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14679-L14882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14679-L14882) · [Before (L2354-L2386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2354-L2386)

```diff
-       static Compose(zz, tz, sz) {
-         const Fz = new Dz;
-         return Dz.ComposeToRef(zz, tz, sz, Fz), Fz
-       }
-       static ComposeToRef(zz, tz, sz, Fz) {
-         const Wz = Fz._m,
-           Xz = tz._x,
-           Oz = tz._y,
-           oz = tz._z,
-           vz = tz._w,
-           Uz = Xz + Xz,
-           Kz = Oz + Oz,
-           uz = oz + oz,
-           Nz = Xz * Uz,
-           bz = Xz * Kz,
-           wz = Xz * uz,
- ... (17 more removed lines; see GitHub link above)
+     }
+     ap.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", ap.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", ap.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", ap.MustPre … [truncated]
+     let sp = (() => {
+         let vv, zv, Pv = [Ug({
+             ns: gp,
+             name: "Types"
+           })],
+           hv = [];
+         zv = class {
+           constructor() {
+             this.items = []
+           }
+         };
+         return (0, nv.i)(zv, "ThreeMfContentTypes"), (() => {
+           const Sv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+           (0, nv.e)(null, vv = {
+ ... (188 more added lines; see GitHub link above)
```

#### 223. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2389-L2390` → after: `L14887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14887) · [Before (L2389-L2390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2389-L2390)

```diff
-         const zz = Dz.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
-         return zz._updateIdentityStatus(!1), zz
+         return new mp([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
```

#### 224. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2392-L2398` → after: `L14889-L14890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14889-L14890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14889-L14890) · [Before (L2392-L2398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2392-L2398)

```diff
-       static RotationX(zz) {
-         const tz = new Dz;
-         return Dz.RotationXToRef(zz, tz), tz
-       }
-       static Invert(zz) {
-         const tz = new Dz;
-         return zz.invertToRef(tz), tz
+       constructor(vv) {
+         this.values = vv
```

#### 225. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2400-L2403` → after: `L14892-L14893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14892-L14893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14892-L14893) · [Before (L2400-L2403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2400-L2403)

```diff
-       static RotationXToRef(zz, tz) {
-         const sz = Math.sin(zz),
-           Fz = Math.cos(zz);
-         return Dz.FromValuesToRef(1, 0, 0, 0, 0, Fz, sz, 0, 0, -sz, Fz, 0, 0, 0, 0, 1, tz), tz._updateIdentityStatus(1 === Fz && 0 === sz), tz
+       toString() {
+         return this.values.join(" ")
```

#### 226. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2405-L2407` → after: `L14895-L14898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14895-L14898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14895-L14898) · [Before (L2405-L2407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2405-L2407)

```diff
-       static RotationY(zz) {
-         const tz = new Dz;
-         return Dz.RotationYToRef(zz, tz), tz
+     }
+     class jp {
+       constructor(vv) {
+         this.o = vv, this._f = new Bg(vv)
```

#### 227. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2409-L2412` → after: `L14900-L14901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14900-L14901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14900-L14901) · [Before (L2409-L2412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2409-L2412)

```diff
-       static RotationYToRef(zz, tz) {
-         const sz = Math.sin(zz),
-           Fz = Math.cos(zz);
-         return Dz.FromValuesToRef(Fz, 0, -sz, 0, 0, 1, 0, 0, sz, 0, Fz, 0, 0, 0, 0, 1, tz), tz._updateIdentityStatus(1 === Fz && 0 === sz), tz
+       toString(vv) {
+         return vv.values.map((vv => this._f.toString(vv))).join(" ")
```

#### 228. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2414-L2416` → after: `L14903-L15871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R14903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L14903-L15871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L14903-L15871) · [Before (L2414-L2416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2414-L2416)

```diff
-       static RotationZ(zz) {
-         const tz = new Dz;
-         return Dz.RotationZToRef(zz, tz), tz
+     }
+     let fp = (() => {
+         let vv, zv, Pv, hv, Sv, ev = [Ug({
+             ns: Pp,
+             name: "model"
+           })],
+           gv = [],
+           pv = [],
+           dv = [],
+           Nv = [],
+           lv = [],
+           Tv = [],
+           Wv = [];
+         zv = class {
+           constructor() {
+             this.unit = (0, nv.f)(this, pv, Sp.millimeter), this.requiredextensions = ((0, nv.f)(this, dv), (0, nv.f)(this, Nv, void 0)), this.recommendedextensions = ((0, nv.f)(this, lv), (0, nv.f)(this, Tv, void 0)), this.metadata = (0, nv.f)(this, Wv)
+ ... (953 more added lines; see GitHub link above)
```

#### 229. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2418-L2421` → after: `L15873-L15874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15873-L15874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15873-L15874) · [Before (L2418-L2421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2418-L2421)

```diff
-       static RotationZToRef(zz, tz) {
-         const sz = Math.sin(zz),
-           Fz = Math.cos(zz);
-         return Dz.FromValuesToRef(Fz, sz, 0, 0, -sz, Fz, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, tz), tz._updateIdentityStatus(1 === Fz && 0 === sz), tz
+       withName(vv) {
+         return this._object.name = vv, this
```

#### 230. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2423-L2425` → after: `L15876-L15877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15876-L15877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15876-L15877) · [Before (L2423-L2425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2423-L2425)

```diff
-       static RotationAxis(zz, tz) {
-         const sz = new Dz;
-         return Dz.RotationAxisToRef(zz, tz, sz), sz
+       withThumbnail(vv) {
+         return this._object.thumbnail = vv, this
```

#### 231. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2427-L2433` → after: `L15879-L15881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15879-L15881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15879-L15881) · [Before (L2427-L2433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2427-L2433)

```diff
-       static RotationAxisToRef(zz, tz, sz) {
-         const Fz = Math.sin(-tz),
-           Wz = Math.cos(-tz),
-           Xz = 1 - Wz;
-         zz = zz.normalizeToRef(gz.XD[0]);
-         const Oz = sz._m;
-         return Oz[0] = zz._x * zz._x * Xz + Wz, Oz[1] = zz._x * zz._y * Xz - zz._z * Fz, Oz[2] = zz._x * zz._z * Xz + zz._y * Fz, Oz[3] = 0, Oz[4] = zz._y * zz._x * Xz + zz._z * Fz, Oz[5] = zz._y * zz._y * Xz + Wz, Oz[6] = zz._y * zz._z * Xz - zz._x * Fz, Oz[7] = 0, Oz[8] = zz._z … [truncated]
+       withProperty(vv) {
+         let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return this._object.pid = vv, this._object.id = zv, this
```

#### 232. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2435-L2445` → after: `L15883-L15884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15883-L15884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15883-L15884) · [Before (L2435-L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2435-L2445)

```diff
-       static RotationAlignToRef(zz, tz, sz) {
-         let Wz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         const Xz = Nz.Dot(tz, zz),
-           Oz = sz._m;
-         if (Xz < -1 + Fz.c) Oz[0] = -1, Oz[1] = 0, Oz[2] = 0, Oz[3] = 0, Oz[4] = 0, Oz[5] = Wz ? 1 : -1, Oz[6] = 0, Oz[7] = 0, Oz[8] = 0, Oz[9] = 0, Oz[10] = Wz ? -1 : 1, Oz[11] = 0;
-         else {
-           const sz = Nz.Cross(tz, zz),
-             Fz = 1 / (1 + Xz);
-           Oz[0] = sz._x * sz._x * Fz + Xz, Oz[1] = sz._y * sz._x * Fz - sz._z, Oz[2] = sz._z * sz._x * Fz + sz._y, Oz[3] = 0, Oz[4] = sz._x * sz._y * Fz + sz._z, Oz[5] = sz._y * sz._y * Fz + Xz, Oz[6] = sz._z * sz._y * Fz - sz._x, Oz[7] = 0, Oz[8] = sz._x * sz._z * Fz - sz._y, Oz … [truncated]
-         }
-         return Oz[12] = 0, Oz[13] = 0, Oz[14] = 0, Oz[15] = 1, sz.markAsUpdated(), sz
+       build() {
+         return this._object
```

#### 233. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2447-L2449` → after: `L15886-L15887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15886-L15887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15886-L15887) · [Before (L2447-L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2447-L2449)

```diff
-       static RotationYawPitchRoll(zz, tz, sz) {
-         const Fz = new Dz;
-         return Dz.RotationYawPitchRollToRef(zz, tz, sz, Fz), Fz
+       reset(vv, zv) {
+         this._object = new Op(vv, zv)
```

#### 234. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2451-L2452` → after: `L15889-L15892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15889-L15892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15889-L15892) · [Before (L2451-L2452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2451-L2452)

```diff
-       static RotationYawPitchRollToRef(zz, tz, sz, Fz) {
-         return wz.RotationYawPitchRollToRef(zz, tz, sz, gz.Quaternion[0]), gz.Quaternion[0].toRotationMatrix(Fz), Fz
+     }
+     class Lp extends Ap {
+       constructor(vv) {
+         super(vv, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.model), this._object.content = new xp
```

#### 235. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2454-L2456` → after: `L15894-L15895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15894-L15895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15894-L15895) · [Before (L2454-L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2454-L2456)

```diff
-       static Scaling(zz, tz, sz) {
-         const Fz = new Dz;
-         return Dz.ScalingToRef(zz, tz, sz, Fz), Fz
+       withComponent(vv, zv) {
+         return this._object.content.component.push(new tp(vv, zv)), this
```

#### 236. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2458-L2459` → after: `L15897-L15900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15897-L15900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15897-L15900) · [Before (L2458-L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2458-L2459)

```diff
-       static ScalingToRef(zz, tz, sz, Fz) {
-         return Dz.FromValuesToRef(zz, 0, 0, 0, 0, tz, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1, Fz), Fz._updateIdentityStatus(1 === zz && 1 === tz && 1 === sz), Fz
+     }
+     class Hp extends Ap {
+       constructor(vv) {
+         super(vv, ep.model)
```

#### 237. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2461-L2463` → after: `L15902-L15903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15902-L15903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15902-L15903) · [Before (L2461-L2463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2461-L2463)

```diff
-       static Translation(zz, tz, sz) {
-         const Fz = new Dz;
-         return Dz.TranslationToRef(zz, tz, sz, Fz), Fz
+       withPostProcessHandlers(vv, zv) {
+         return this._vh = vv, this._th = zv, this
```

#### 238. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2465-L2466` → after: `L15905-L15906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15905-L15906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15905-L15906) · [Before (L2465-L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2465-L2466)

```diff
-       static TranslationToRef(zz, tz, sz, Fz) {
-         return Dz.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, zz, tz, sz, 1, Fz), Fz._updateIdentityStatus(0 === zz && 0 === tz && 0 === sz), Fz
+       withData(vv) {
+         return this._object.content = this._buildMesh(vv), this
```

#### 239. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2468-L2470` → after: `L15908-L15909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15908-L15909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15908-L15909) · [Before (L2468-L2470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2468-L2470)

```diff
-       static Lerp(zz, tz, sz) {
-         const Fz = new Dz;
-         return Dz.LerpToRef(zz, tz, sz, Fz), Fz
+       withMaterial(vv, zv) {
+         return this._object.pid = vv, this._object.pindex = zv, this
```

#### 240. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2472-L2477` → after: `L15911-L15914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15911-L15914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15911-L15914) · [Before (L2472-L2477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2472-L2477)

```diff
-       static LerpToRef(zz, tz, sz, Fz) {
-         const Wz = Fz._m,
-           Xz = zz.m,
-           Oz = tz.m;
-         for (let oz = 0; oz < 16; oz++) Wz[oz] = Xz[oz] * (1 - sz) + Oz[oz] * sz;
-         return Fz.markAsUpdated(), Fz
+       _buildMesh(vv) {
+         const zv = this._buildVertices(vv.positions),
+           Pv = this._buildTriangle(vv.indices);
+         return new Dp(zv, Pv)
```

#### 241. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2479-L2499` → after: `L15916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15916) · [Before (L2479-L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2479-L2499)

```diff
-       static DecomposeLerp(zz, tz, sz) {
-         const Fz = new Dz;
-         return Dz.DecomposeLerpToRef(zz, tz, sz, Fz), Fz
-       }
-       static DecomposeLerpToRef(zz, tz, sz, Fz) {
-         const Wz = gz.XD[0],
-           Xz = gz.Quaternion[0],
-           Oz = gz.XD[1];
-         zz.decompose(Wz, Xz, Oz);
-         const oz = gz.XD[2],
-           vz = gz.Quaternion[1],
-           Uz = gz.XD[3];
-         tz.decompose(oz, vz, Uz);
-         const Kz = gz.XD[4];
-         Nz.LerpToRef(Wz, oz, sz, Kz);
-         const uz = gz.Quaternion[2];
- ... (5 more removed lines; see GitHub link above)
+       _buildVertices(vv) {
```

#### 242. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2501-L2539` → after: `L15918-L15926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15918-L15926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15918-L15926) · [Before (L2501-L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2501-L2539)

```diff
-         return Dz.LookAtLHToRef(zz, tz, sz, Fz), Fz
-       }
-       static LookAtLHToRef(zz, tz, sz, Fz) {
-         const Wz = gz.XD[0],
-           Xz = gz.XD[1],
-           Oz = gz.XD[2];
-         tz.subtractToRef(zz, Oz), Oz.normalize(), Nz.CrossToRef(sz, Oz, Wz);
-         const oz = Wz.lengthSquared();
-         0 === oz ? Wz.x = 1 : Wz.normalizeFromLength(Math.sqrt(oz)), Nz.CrossToRef(Oz, Wz, Xz), Xz.normalize();
-         const vz = -Nz.Dot(Wz, zz),
-           Uz = -Nz.Dot(Xz, zz),
-           Kz = -Nz.Dot(Oz, zz);
-         return Dz.FromValuesToRef(Wz._x, Xz._x, Oz._x, 0, Wz._y, Xz._y, Oz._y, 0, Wz._z, Xz._z, Oz._z, 0, vz, Uz, Kz, 1, Fz), Fz
-       }
-       static LookAtRH(zz, tz, sz) {
-         const Fz = new Dz;
- ... (23 more removed lines; see GitHub link above)
+         if (vv)
+           for (let Pv = 0; Pv < vv.length;) {
+             const hv = vv[Pv++],
+               Sv = vv[Pv++],
+               ev = vv[Pv++];
+             let gv = new Vp(hv, Sv, ev);
+             this._vh && (gv = this._vh(gv)), zv.vertex.push(gv)
+           }
+         return zv
```

#### 243. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2541` → after: `L15928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15928) · [Before (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2541)

```diff
-       static LookDirectionRH(zz, tz) {
+       _buildTriangle(vv) {
```

#### 244. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2543` → after: `L15930-L15938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15930-L15938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15930-L15938) · [Before (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2543)

```diff
-         return Dz.LookDirectionRHToRef(zz, tz, sz), sz
+         if (vv)
+           for (let Pv = 0; Pv < vv.length;) {
+             const hv = vv[Pv++],
+               Sv = vv[Pv++],
+               ev = vv[Pv++];
+             let gv = new Rp(hv, Sv, ev);
+             this._th && (gv = this._th(gv)), zv.triangle.push(gv)
+           }
+         return zv
```

#### 245. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2545-L2547` → after: `L15940-L15943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15940-L15943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15940-L15943) · [Before (L2545-L2547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2545-L2547)

```diff
-       static LookDirectionRHToRef(zz, tz, sz) {
-         const Fz = gz.XD[2];
-         return Nz.CrossToRef(tz, zz, Fz), Dz.FromValuesToRef(Fz._x, Fz._y, Fz._z, 0, tz._x, tz._y, tz._z, 0, zz._x, zz._y, zz._z, 0, 0, 0, 0, 1, sz), sz
+     }
+     class Mp {
+       constructor(vv) {
+         this._m = new qp(vv)
```

#### 246. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2549-L2551` → after: `L15945-L15948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15945-L15948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15945-L15948) · [Before (L2549-L2551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2549-L2551)

```diff
-       static OrthoLH(zz, tz, sz, Fz, Wz) {
-         const Xz = new Dz;
-         return Dz.OrthoLHToRef(zz, tz, sz, Fz, Xz, Wz), Xz
+       withColor(vv, zv) {
+         this._m.base = this._m.base ?? [];
+         let Pv = this._m.base.find((zv => zv.name.toLowerCase() === vv.toLowerCase()));
+         return Pv ? (Pv.displaycolor = this._rgbaToHex(zv), this) : (Pv = new Ip(vv, this._rgbaToHex(zv)), this._m.base.push(Pv), this)
```

#### 247. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2553-L2558` → after: `L15950-L15951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15950-L15951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15950-L15951) · [Before (L2553-L2558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2553-L2558)

```diff
-       static OrthoLHToRef(zz, tz, sz, Fz, Wz, Xz) {
-         const Oz = 2 / zz,
-           oz = 2 / tz,
-           vz = 2 / (Fz - sz),
-           Uz = -(Fz + sz) / (Fz - sz);
-         return Dz.FromValuesToRef(Oz, 0, 0, 0, 0, oz, 0, 0, 0, 0, vz, 0, 0, 0, Uz, 1, Wz), Xz && Wz.multiplyToRef(Bz, Wz), Wz._updateIdentityStatus(1 === Oz && 1 === oz && 1 === vz && 0 === Uz), Wz
+       build() {
+         return this._m
```

#### 248. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2560-L2580` → after: `L15953-L15961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15953-L15961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15953-L15961) · [Before (L2560-L2580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2560-L2580)

```diff
-       static OrthoOffCenterLH(zz, tz, sz, Fz, Wz, Xz, Oz) {
-         const oz = new Dz;
-         return Dz.OrthoOffCenterLHToRef(zz, tz, sz, Fz, Wz, Xz, oz, Oz), oz
-       }
-       static OrthoOffCenterLHToRef(zz, tz, sz, Fz, Wz, Xz, Oz, oz) {
-         const vz = 2 / (tz - zz),
-           Uz = 2 / (Fz - sz),
-           Kz = 2 / (Xz - Wz),
-           uz = -(Xz + Wz) / (Xz - Wz),
-           Nz = (zz + tz) / (zz - tz),
-           bz = (Fz + sz) / (sz - Fz);
-         return Dz.FromValuesToRef(vz, 0, 0, 0, 0, Uz, 0, 0, 0, 0, Kz, 0, Nz, bz, uz, 1, Oz), oz && Oz.multiplyToRef(Bz, Oz), Oz.markAsUpdated(), Oz
-       }
-       static ObliqueOffCenterLHToRef(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz) {
-         const uz = -Oz * Math.cos(oz),
-           Nz = -Oz * Math.sin(oz);
- ... (5 more removed lines; see GitHub link above)
+       _rgbaToHex(vv) {
+         const zv = vv => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(vv, 1 / 2.2)))),
+           Pv = zv(vv.r).toString(16).padStart(2, "0").toUpperCase(),
+           hv = zv(vv.g).toString(16).padStart(2, "0").toUpperCase(),
+           Sv = zv(vv.b).toString(16).padStart(2, "0").toUpperCase();
+         if ("number" === typeof vv.a) {
+           return `#${Pv}${hv}${Sv}${Math.round(Math.min(255,Math.max(0,255*vv.a))).toString(16).padStart(2,"0").toUpperCase()}`
+         }
+         return `#${Pv}${hv}${Sv}`
```

#### 249. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2582-L2583` → after: `L15963-L15966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15963-L15966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15963-L15966) · [Before (L2582-L2583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2582-L2583)

```diff
-       static OrthoOffCenterRHToRef(zz, tz, sz, Fz, Wz, Xz, Oz, oz) {
-         return Dz.OrthoOffCenterLHToRef(zz, tz, sz, Fz, Wz, Xz, Oz, oz), Oz._m[10] *= -1, Oz
+     }
+     class yp {
+       constructor() {
+         this._model = new fp, this._objects = new Map
```

#### 250. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2585-L2588` → after: `L15968-L15969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15968-L15969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15968-L15969) · [Before (L2585-L2588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2585-L2588)

```diff
-       static ObliqueOffCenterRHToRef(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz) {
-         const uz = Oz * Math.cos(oz),
-           Nz = Oz * Math.sin(oz);
-         return Dz.TranslationToRef(0, 0, vz, gz.Matrix[1]), Dz.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, uz, Nz, 1, 0, 0, 0, 0, 1, gz.Matrix[0]), gz.Matrix[1].multiplyToRef(gz.Matrix[0], gz.Matrix[0]), Dz.TranslationToRef(0, 0, -vz, gz.Matrix[1]), gz.Matrix[0].multiplyToRef(gz.Matr … [truncated]
+       withMetaData(vv, zv, Pv, hv) {
+         return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new Fp(vv, zv, Pv, hv)), this
```

#### 251. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2590-L2604` → after: `L15971-L15972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15971-L15972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15971-L15972) · [Before (L2590-L2604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2590-L2604)

```diff
-       static PerspectiveLH(zz, tz, sz, Fz, Wz) {
-         let Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
-         const Oz = new Dz,
-           oz = 2 * sz / zz,
-           vz = 2 * sz / tz,
-           Uz = (Fz + sz) / (Fz - sz),
-           Kz = -2 * Fz * sz / (Fz - sz),
-           uz = Math.tan(Xz);
-         return Dz.FromValuesToRef(oz, 0, 0, 0, 0, vz, 0, uz, 0, 0, Uz, 1, 0, 0, Kz, 0, Oz), Wz && Oz.multiplyToRef(Bz, Oz), Oz._updateIdentityStatus(!1), Oz
-       }
-       static PerspectiveFovLH(zz, tz, sz, Fz, Wz) {
-         let Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
-           Oz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-         const oz = new Dz;
-         return Dz.PerspectiveFovLHToRef(zz, tz, sz, Fz, oz, !0, Wz, Xz, Oz), oz
+       withMaterial(vv) {
+         return vv instanceof Mp && (vv = vv.build()), vv && (this._model.resources = this._model.resources ?? new np, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(vv)), this
```

#### 252. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2606-L2635` → after: `L15974-L15975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15974-L15975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15974-L15975) · [Before (L2606-L2635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2606-L2635)

```diff
-       static PerspectiveFovLHToRef(zz, tz, sz, Fz, Wz) {
-         let Xz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-           Oz = arguments.length > 6 ? arguments[6] : void 0,
-           oz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
-           vz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
-         const Uz = sz,
-           Kz = Fz,
-           uz = 1 / Math.tan(.5 * zz),
-           Nz = Xz ? uz / tz : uz,
-           bz = Xz ? uz : uz * tz,
-           wz = vz && 0 === Uz ? -1 : 0 !== Kz ? (Kz + Uz) / (Kz - Uz) : 1,
-           gz = vz && 0 === Uz ? 2 * Kz : 0 !== Kz ? -2 * Kz * Uz / (Kz - Uz) : -2 * Uz,
-           Hz = Math.tan(oz);
-         return Dz.FromValuesToRef(Nz, 0, 0, 0, 0, bz, 0, Hz, 0, 0, wz, 1, 0, 0, gz, 0, Wz), Oz && Wz.multiplyToRef(Bz, Wz), Wz._updateIdentityStatus(!1), Wz
-       }
-       static PerspectiveFovReverseLHToRef(zz, tz, sz, Fz, Wz) {
- ... (14 more removed lines; see GitHub link above)
+       withMesh(vv) {
+         return vv instanceof Hp && (vv = vv.build()), this._model.resources = this._model.resources ?? new np, this._model.resources.object.push(vv), this
```

#### 253. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2637-L2669` → after: `L15977-L15978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15977-L15978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15977-L15978) · [Before (L2637-L2669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2637-L2669)

```diff
-       static PerspectiveFovRHToRef(zz, tz, sz, Fz, Wz) {
-         let Xz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-           Oz = arguments.length > 6 ? arguments[6] : void 0,
-           oz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
-           vz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
-         const Uz = sz,
-           Kz = Fz,
-           uz = 1 / Math.tan(.5 * zz),
-           Nz = Xz ? uz / tz : uz,
-           bz = Xz ? uz : uz * tz,
-           wz = vz && 0 === Uz ? 1 : 0 !== Kz ? -(Kz + Uz) / (Kz - Uz) : -1,
-           gz = vz && 0 === Uz ? 2 * Kz : 0 !== Kz ? -2 * Kz * Uz / (Kz - Uz) : -2 * Uz,
-           Hz = Math.tan(oz);
-         return Dz.FromValuesToRef(Nz, 0, 0, 0, 0, bz, 0, Hz, 0, 0, wz, -1, 0, 0, gz, 0, Wz), Oz && Wz.multiplyToRef(Bz, Wz), Wz._updateIdentityStatus(!1), Wz
-       }
-       static PerspectiveFovReverseRHToRef(zz, tz, sz, Fz, Wz) {
- ... (17 more removed lines; see GitHub link above)
+       withComponents(vv) {
+         return vv instanceof Lp && (vv = vv.build()), this._model.resources = this._model.resources ?? new np, this._model.resources.object.push(vv), this
```

#### 254. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2671-L2674` → after: `L15980-L15981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15980-L15981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15980-L15981) · [Before (L2671-L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2671-L2674)

```diff
-       static GetAsMatrix2x2(zz) {
-         const tz = zz.m,
-           sz = [tz[0], tz[1], tz[4], tz[5]];
-         return Xz.c.MatrixUse64Bits ? sz : new Float32Array(sz)
+       withBuild(vv, zv, Pv) {
+         return this._model.build = this._model.build ?? new Qp, this._model.build.item?.push(new Zp(vv, zv, Pv)), this
```

#### 255. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2676-L2679` → after: `L15983-L15984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15983-L15984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15983-L15984) · [Before (L2676-L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2676-L2679)

```diff
-       static GetAsMatrix3x3(zz) {
-         const tz = zz.m,
-           sz = [tz[0], tz[1], tz[2], tz[4], tz[5], tz[6], tz[8], tz[9], tz[10]];
-         return Xz.c.MatrixUse64Bits ? sz : new Float32Array(sz)
+       withUnit(vv) {
+         return this._model.unit = vv, this
```

#### 256. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2681-L2683` → after: `L15986-L15987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15986-L15987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15986-L15987) · [Before (L2681-L2683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2681-L2683)

```diff
-       static Transpose(zz) {
-         const tz = new Dz;
-         return Dz.TransposeToRef(zz, tz), tz
+       reset() {
+         return this._model = new fp, this._objects = new Map, this
```

#### 257. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2685-L2778` → after: `L15989-L16015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R15989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L15989-L16015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L15989-L16015) · [Before (L2685-L2778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2685-L2778)

```diff
-       static TransposeToRef(zz, tz) {
-         const sz = zz.m,
-           Fz = sz[0],
-           Wz = sz[4],
-           Xz = sz[8],
-           Oz = sz[12],
-           oz = sz[1],
-           vz = sz[5],
-           Uz = sz[9],
-           Kz = sz[13],
-           uz = sz[2],
-           Nz = sz[6],
-           bz = sz[10],
-           wz = sz[14],
-           Dz = sz[3],
-           gz = sz[7],
- ... (78 more removed lines; see GitHub link above)
+       build() {
+         if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
+         if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
+         return this._model
+       }
+     }
+     yp.KnownMetaSet = new Set(fp.KnownMeta.map((vv => vv.toLowerCase())));
+     class Bp {
+       withContentType(vv) {
+         this._cts || (this._cts = new sp);
+         const zv = this._cts.items;
+         return zv.some((zv => zv.ext === vv.ext && zv.ct === vv.ct)) || zv.push(vv), this
+       }
+       withRelationship(vv) {
+         this._rs || (this._rs = new ip);
+         const zv = this._rs.items;
+ ... (11 more added lines; see GitHub link above)
```

#### 258. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2780` → after: `L16017-L16018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16017-L16018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L16017-L16018) · [Before (L2780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2780)

```diff
-       }), (0, Uz.g)("BABYLON.Vector2", uz), (0, Uz.g)("BABYLON.Vector3", Nz), (0, Uz.g)("BABYLON.Vector4", bz), (0, Uz.g)("BABYLON.Matrix", Dz))
+         return new Gp(this._cts, this._rs, this._m)
+       }
```

#### 259. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2790-L2799` → after: `L16022-L16058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16022-L16058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L16022-L16058) · [Before (L2790-L2799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2790-L2799)

```diff
-         let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           sz = arguments.length > 2 ? arguments[2] : void 0,
-           Fz = arguments.length > 3 ? arguments[3] : void 0;
-         this.initialize(zz, tz, sz, Fz)
-       }
-       initialize(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           sz = arguments.length > 2 ? arguments[2] : void 0,
-           Fz = arguments.length > 3 ? arguments[3] : void 0;
-         return this.mask = zz, this.skipNextObservers = tz, this.target = sz, this.currentTarget = Fz, this
+         this._o = vv
+       }
+       get options() {
+         return this._o
+       }
+       async serializeAsync(vv) {
+         const zv = await this.ensureZipLibReadyAsync();
+         if (!zv) return;
+         const Pv = zv.Zip,
+           hv = zv.ZipDeflate;
+         if (!Pv || !hv) throw new Error("fflate Zip / ZipDeflate not available");
+         const Sv = function(vv, zv, Pv) {
+           const Sv = new hv(zv, {
+             level: 6
+           });
+           vv.add(Sv);
+ ... (21 more added lines; see GitHub link above)
```

#### 260. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2803-L2809` → after: `L16062-L16072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16062-L16072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L16062-L16072) · [Before (L2803-L2809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2803-L2809)

```diff
-       constructor(zz, tz) {
-         let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         this.callback = zz, this.mask = tz, this.scope = sz, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
-       }
-       remove() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         this._remove && this._remove(zz)
+       static async SerializeToMemoryAsync(vv) {
+         const zv = new Array;
+         let Pv = 0;
+         for (var hv = arguments.length, Sv = new Array(hv > 1 ? hv - 1 : 0), ev = 1; ev < hv; ev++) Sv[ev - 1] = arguments[ev];
+         if (await vv.serializeAsync((function(vv, hv, Sv) {
+             zv.push(hv), Pv += hv.length
+           }), ...Sv), !Pv) return;
+         const gv = new Uint8Array(Pv);
+         let pv = 0;
+         for (const dv of zv) gv.set(dv, pv), pv += dv.length;
+         return gv
```

#### 261. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2813-L2842` → after: `L16078-L16082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16078-L16082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L16078-L16082) · [Before (L2813-L2842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2813-L2842)

```diff
-       static FromPromise(zz, tz) {
-         const sz = new Oz;
-         return zz.then((zz => {
-           sz.notifyObservers(zz)
-         })).catch((zz => {
-           if (!tz) throw zz;
-           tz.notifyObservers(zz)
-         })), sz
-       }
-       get observers() {
-         return this._observers
-       }
-       constructor(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this.notifyIfTriggered = tz, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Wz(0), zz && (this._onObserverAdded = zz)
-       }
- ... (14 more removed lines; see GitHub link above)
+       constructor() {
+         let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
+           Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
+         this._from = vv, this._to = zv, this._step = Pv, this._i = vv
```

#### 262. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2844-L2845` → after: `L16084-L16087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16084-L16087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L16084-L16087) · [Before (L2844-L2845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2844-L2845)

```diff
-       addOnce(zz) {
-         return this.add(zz, void 0, void 0, void 0, !0)
+       next() {
+         if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
+         const vv = this._i;
+         return this._i += this._step, vv
```

#### 263. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2847-L2850` → after: `L16089-L16090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16089-L16090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L16089-L16090) · [Before (L2847-L2850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2847-L2850)

```diff
-       remove(zz) {
-         if (!zz) return !1;
-         zz._remove = null;
-         return -1 !== this._observers.indexOf(zz) && (this._deferUnregister(zz), !0)
+       reset() {
+         return this._i = this._from, this
```

#### 264. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2852-L2855` → after: `L16092-L16128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16092-L16128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L16092-L16128) · [Before (L2852-L2855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2852-L2855)

```diff
-       removeCallback(zz, tz) {
-         for (let sz = 0; sz < this._observers.length; sz++) {
-           const Fz = this._observers[sz];
-           if (!Fz._willBeUnregistered && (Fz.callback === zz && (!tz || tz === Fz.scope))) return this._deferUnregister(Fz), !0
+     }
+     class rp extends Jp {
+       constructor() {
+         let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+         super({
+           ...rp.DefaultOptions,
+           ...vv
+         })
+       }
+       toModel(vv) {
+         for (var zv = arguments.length, Pv = new Array(zv > 1 ? zv - 1 : 0), hv = 1; hv < zv; hv++) Pv[hv - 1] = arguments[hv];
+         Pv = Pv.filter((vv => vv instanceof Nh.e || vv instanceof wv.d));
+         const Sv = new bp,
+           ev = vv,
+           gv = new Map,
+           pv = this.options.exportInstances ? [] : null;
+ ... (21 more added lines; see GitHub link above)
```

#### 265. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2857-L2900` → after: `L16130-L16177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16130-L16177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L16130-L16177) · [Before (L2857-L2900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2857-L2900)

```diff
-         return !1
-       }
-       _deferUnregister(zz) {
-         zz._willBeUnregistered || (this._numObserversMarkedAsDeleted++, zz.unregisterOnNextCall = !1, zz._willBeUnregistered = !0, setTimeout((() => {
-           this._remove(zz)
-         }), 0))
-       }
-       _remove(zz) {
-         let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (!zz) return !1;
-         const sz = this._observers.indexOf(zz);
-         return -1 !== sz && (tz && this._numObserversMarkedAsDeleted--, this._observers.splice(sz, 1), !0)
-       }
-       makeObserverTopPriority(zz) {
-         this._remove(zz, !1), this._observers.unshift(zz)
-       }
- ... (28 more removed lines; see GitHub link above)
+         if (pv && pv.length) {
+           const vv = this._groupBy(pv, (vv => vv.hhv));
+           for (const [zv, Pv] of Array.from(vv.entries()))
+             if (Pv && Pv.length)
+               for (let vv = 0; vv < Pv.length; vv++) {
+                 const hv = Pv[vv].getWorldMatrix(),
+                   Sv = zv.sF;
+                 for (let vv = 0; vv < Sv.length; vv++) {
+                   const zv = Sv[vv],
+                     Pv = gv.get(zv);
+                   Pv && ev.withBuild(Pv.id, this._handleBabylonTo3mfMatrixTransformToRef(hv, mp.Zero()))
+                 }
+               }
+         }
+         return ev.build()
+       }
+ ... (32 more added lines; see GitHub link above)
```

#### 266. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2907-L2909` → after: `L16180-L16187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16180-L16187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L16180-L16187) · [Before (L2907-L2909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2907-L2909)

```diff
-       clone() {
-         const zz = new Oz;
-         return zz._observers = this._observers.slice(0), zz
+       _groupBy(vv, zv) {
+         const Pv = new Map;
+         for (const hv of vv) {
+           const vv = zv(hv),
+             Sv = Pv.get(vv);
+           Sv ? Sv.push(hv) : Pv.set(vv, [hv])
+         }
+         return Pv
```

#### 267. `bundles/bloxd.io/chunks/js/225.js` (Changed code · before: `L2911-L2915` → after: `L16189-L16191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789R16189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-0fd59852005800ab825081ee03e4fe3fc792872fafec7d51a732fb3737e2d789) · [After (L16189-L16191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/225.js#L16189-L16191) · [Before (L2911-L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/225.js#L2911-L2915)

```diff
-       hasSpecificMask() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
-         for (const tz of this._observers)
-           if (tz.mask & zz || tz.mask === zz) return !0;
-         return !1
+       _handleBabylonTo3mfMatrixTransformToRef(vv, zv) {
+         const Pv = vv.multiplyToRef(rp._R_BJS_TO_3MF, Zv.c.Zero()).m;
+         return zv.values = [Pv[0], Pv[1], Pv[2], Pv[4], Pv[5], Pv[6], Pv[8], Pv[9], Pv[10], Pv[12], Pv[13], Pv[14]], zv
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/226.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/226.js` (157 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65)

#### 1. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L4` → after: `L4-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L4-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L4-L37) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L4)

```diff
-   36654: (zz, tz, sz) => {
+   36615: (vv, zv, Pv) => {
+     Pv.d(zv, {
+       e: () => Sv
+     });
+     var hv = Pv(36618);
+     class Sv {
+       static get LastCreatedEngine() {
+         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+       }
+       static get LastCreatedScene() {
+         return this._LastCreatedScene
+       }
+     }
+     Sv.Instances = [], Sv.OnEnginesDisposedObservable = new hv.c, Sv._LastCreatedScene = null, Sv.UseFallbackTexture = !0, Sv.FallbackTexture = ""
+   },
+   36610: (vv, zv, Pv) => {
+ ... (18 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L8-L9` → after: `L40-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L40-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L40-L44) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L8-L9)

```diff
-       e: () => Dz,
-       f: () => bz
+       h: () => Nv,
+       j: () => dv,
+       k: () => hv,
+       o: () => ev,
+       p: () => gv
```

#### 3. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L11-L14` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L46) · [Before (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L11-L14)

```diff
-     var Fz = sz(36487),
-       Wz = sz(36479),
-       Xz = sz(36507),
-       Oz = sz(36518);
+     class hv {}
```

#### 4. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L17` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L49) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L17)

```diff
-       return Math.pow(zz, Wz.i)
+       vv.updateFlag = hv._UpdateFlagSeed++
```

#### 5. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L20-L21` → after: `L52-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L52-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L52-L88) · [Before (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L20-L21)

```diff
-     function vz(zz) {
-       return zz <= .04045 ? .0773993808 * zz : Math.pow(.947867299 * (zz + .055), 2.4)
+     function ev(vv, zv, Pv) {
+       let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       const Sv = vv.pPv(),
+         ev = zv.pPv(),
+         gv = Sv[0],
+         pv = Sv[1],
+         dv = Sv[2],
+         Nv = Sv[3],
+         lv = Sv[4],
+         Tv = Sv[5],
+         Wv = Sv[6],
+         wv = Sv[7],
+         av = Sv[8],
+         sv = Sv[9],
+         Cv = Sv[10],
+         iv = Sv[11],
+ ... (21 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L24-L25` → after: `L91-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L91-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L91-L93) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L24-L25)

```diff
-     function Uz(zz) {
-       return Math.pow(zz, Wz.f)
+     function gv(vv, zv, Pv) {
+       let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       ev(vv, zv, Pv.pPv(), hv), Sv(Pv)
```

#### 7. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L28-L29` → after: `L96-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L96-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L96-L162) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L28-L29)

```diff
-     function Kz(zz) {
-       return zz <= .0031308 ? 12.92 * zz : 1.055 * Math.pow(zz, .41666) - .055
+     function pv(vv, zv) {
+       let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const hv = vv.pPv();
+       zv[Pv] = hv[0], zv[Pv + 1] = hv[1], zv[Pv + 2] = hv[2], zv[Pv + 3] = hv[3], zv[Pv + 4] = hv[4], zv[Pv + 5] = hv[5], zv[Pv + 6] = hv[6], zv[Pv + 7] = hv[7], zv[Pv + 8] = hv[8], zv[Pv + 9] = hv[9], zv[Pv + 10] = hv[10], zv[Pv + 11] = hv[11], zv[Pv + 12] = hv[12], zv[Pv + 13]  … [truncated]
+     }
+ 
+     function dv(vv, zv) {
+       const Pv = Nv(vv, zv.pPv());
+       return Pv && Sv(zv), Pv
+     }
+ 
+     function Nv(vv, zv) {
+       const Pv = vv.pPv(),
+         hv = Pv[0],
+         Sv = Pv[1],
+         ev = Pv[2],
+ ... (51 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L34-L36` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L187-L188) · [Before (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L34-L36)

```diff
-           tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         this.r = zz, this.g = tz, this.b = sz
+           zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         this.x = vv, this.y = zv
```

#### 9. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L39` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L191) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L39)

```diff
-         return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
+         return `{X: ${this.x} Y: ${this.y}}`
```

#### 10. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L42` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L194) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L42)

```diff
-         return "Color3"
+         return "Vector2"
```

#### 11. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L45-L46` → after: `L197-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L197-L198) · [Before (L45-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L45-L46)

```diff
-         let zz = 255 * this.r | 0;
-         return zz = 397 * zz ^ 255 * this.g, zz = 397 * zz ^ 255 * this.b, zz
+         let vv = lv(this.x);
+         return vv = 397 * vv ^ lv(this.y), vv
```

#### 12. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L50` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L202) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L50)

```diff
-         return zz[tz] = this.r, zz[tz + 1] = this.g, zz[tz + 2] = this.b, this
+         return vv[zv] = this.x, vv[zv + 1] = this.y, this
```

#### 13. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L52` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L204) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L52)

```diff
-       Ztz(zz) {
+       Evv(vv) {
```

#### 14. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L56-L58` → after: `L208-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L208-L209) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L56-L58)

```diff
-       toColor4() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
-         return new Nz(this.r, this.g, this.b, zz)
+       pPv() {
+         return [this.x, this.y]
```

#### 15. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L60-L61` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L211-L212) · [Before (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L60-L61)

```diff
-       hsz() {
-         return [this.r, this.g, this.b]
+       Vzv(vv) {
+         return this.x = vv.x, this.y = vv.y, this
```

#### 16. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L63-L64` → after: `L214-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L214-L215) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L63-L64)

```diff
-       toLuminance() {
-         return .3 * this.r + .59 * this.g + .11 * this.b
+       f_(vv, zv) {
+         return this.x = vv, this.y = zv, this
```

#### 17. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L66-L67` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L217-L218) · [Before (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L66-L67)

```diff
-       multiply(zz) {
-         return new uz(this.r * zz.r, this.g * zz.g, this.b * zz.b)
+       set(vv, zv) {
+         return this.f_(vv, zv)
```

#### 18. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L69-L70` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L220-L221) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L69-L70)

```diff
-       multiplyToRef(zz, tz) {
-         return tz.r = this.r * zz.r, tz.g = this.g * zz.g, tz.b = this.b * zz.b, tz
+       Dk(vv) {
+         return this.f_(vv, vv)
```

#### 19. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L72-L73` → after: `L223-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L223-L224) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L72-L73)

```diff
-       multiplyInPlace(zz) {
-         return this.r *= zz.r, this.g *= zz.g, this.b *= zz.b, this
+       add(vv) {
+         return new Tv(this.x + vv.x, this.y + vv.y)
```

#### 20. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L75-L76` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L226-L227) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L75-L76)

```diff
-       multiplyByFloats(zz, tz, sz) {
-         return new uz(this.r * zz, this.g * tz, this.b * sz)
+       addToRef(vv, zv) {
+         return zv.x = this.x + vv.x, zv.y = this.y + vv.y, zv
```

#### 21. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L78-L79` → after: `L229-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L229-L230) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L78-L79)

```diff
-       divide(zz) {
-         throw new ReferenceError("Can not divide a color")
+       addInPlace(vv) {
+         return this.x += vv.x, this.y += vv.y, this
```

#### 22. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L81-L82` → after: `L232-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L232-L233) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L81-L82)

```diff
-       divideToRef(zz, tz) {
-         throw new ReferenceError("Can not divide a color")
+       addInPlaceFromFloats(vv, zv) {
+         return this.x += vv, this.y += zv, this
```

#### 23. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L84-L85` → after: `L235-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L235-L236) · [Before (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L84-L85)

```diff
-       divideInPlace(zz) {
-         throw new ReferenceError("Can not divide a color")
+       addVector3(vv) {
+         return new Tv(this.x + vv.x, this.y + vv.y)
```

#### 24. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L87-L88` → after: `L238-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L238-L239) · [Before (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L87-L88)

```diff
-       minimizeInPlace(zz) {
-         return this.minimizeInPlaceFromFloats(zz.r, zz.g, zz.b)
+       subtract(vv) {
+         return new Tv(this.x - vv.x, this.y - vv.y)
```

#### 25. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L90-L91` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L241-L242) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L90-L91)

```diff
-       maximizeInPlace(zz) {
-         return this.maximizeInPlaceFromFloats(zz.r, zz.g, zz.b)
+       subtractToRef(vv, zv) {
+         return zv.x = this.x - vv.x, zv.y = this.y - vv.y, zv
```

#### 26. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L93-L94` → after: `L244-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L244-L245) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L93-L94)

```diff
-       minimizeInPlaceFromFloats(zz, tz, sz) {
-         return this.r = Math.min(zz, this.r), this.g = Math.min(tz, this.g), this.b = Math.min(sz, this.b), this
+       VPv(vv) {
+         return this.x -= vv.x, this.y -= vv.y, this
```

#### 27. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L96-L97` → after: `L247-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L247-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L247-L248) · [Before (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L96-L97)

```diff
-       maximizeInPlaceFromFloats(zz, tz, sz) {
-         return this.r = Math.max(zz, this.r), this.g = Math.max(tz, this.g), this.b = Math.max(sz, this.b), this
+       multiplyInPlace(vv) {
+         return this.x *= vv.x, this.y *= vv.y, this
```

#### 28. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L99-L100` → after: `L250-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L250-L251) · [Before (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L99-L100)

```diff
-       floorToRef(zz) {
-         throw new ReferenceError("Can not floor a color")
+       multiply(vv) {
+         return new Tv(this.x * vv.x, this.y * vv.y)
```

#### 29. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L102-L103` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L253-L254) · [Before (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L102-L103)

```diff
-       floor() {
-         throw new ReferenceError("Can not floor a color")
+       multiplyToRef(vv, zv) {
+         return zv.x = this.x * vv.x, zv.y = this.y * vv.y, zv
```

#### 30. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L105-L106` → after: `L256-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L256-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L256-L257) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L105-L106)

```diff
-       fractToRef(zz) {
-         throw new ReferenceError("Can not fract a color")
+       multiplyByFloats(vv, zv) {
+         return new Tv(this.x * vv, this.y * zv)
```

#### 31. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L108-L109` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L259-L260) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L108-L109)

```diff
-       fract() {
-         throw new ReferenceError("Can not fract a color")
+       divide(vv) {
+         return new Tv(this.x / vv.x, this.y / vv.y)
```

#### 32. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L111-L112` → after: `L262-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L262-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L262-L263) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L111-L112)

```diff
-       equals(zz) {
-         return zz && this.r === zz.r && this.g === zz.g && this.b === zz.b
+       divideToRef(vv, zv) {
+         return zv.x = this.x / vv.x, zv.y = this.y / vv.y, zv
```

#### 33. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L114-L115` → after: `L265-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L265-L266) · [Before (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L114-L115)

```diff
-       equalsFloats(zz, tz, sz) {
-         return this.wOz(zz, tz, sz)
+       divideInPlace(vv) {
+         return this.x = this.x / vv.x, this.y = this.y / vv.y, this
```

#### 34. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L117-L118` → after: `L268-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L268-L269) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L117-L118)

```diff
-       wOz(zz, tz, sz) {
-         return this.r === zz && this.g === tz && this.b === sz
+       minimizeInPlace(vv) {
+         return this.minimizeInPlaceFromFloats(vv.x, vv.y)
```

#### 35. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L120-L122` → after: `L271-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L271-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L271-L284) · [Before (L120-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L120-L122)

```diff
-       equalsWithEpsilon(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wz.c;
-         return (0, Xz.WithinEpsilon)(this.r, zz.r, tz) && (0, Xz.WithinEpsilon)(this.g, zz.g, tz) && (0, Xz.WithinEpsilon)(this.b, zz.b, tz)
+       maximizeInPlace(vv) {
+         return this.maximizeInPlaceFromFloats(vv.x, vv.y)
+       }
+       minimizeInPlaceFromFloats(vv, zv) {
+         return this.x = Math.min(vv, this.x), this.y = Math.min(zv, this.y), this
+       }
+       maximizeInPlaceFromFloats(vv, zv) {
+         return this.x = Math.max(vv, this.x), this.y = Math.max(zv, this.y), this
+       }
+       subtractFromFloats(vv, zv) {
+         return new Tv(this.x - vv, this.y - zv)
+       }
+       subtractFromFloatsToRef(vv, zv, Pv) {
+         return Pv.x = this.x - vv, Pv.y = this.y - zv, Pv
```

#### 36. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L125` → after: `L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L287) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L125)

```diff
-         throw new ReferenceError("Can not negate a color")
+         return new Tv(-this.x, -this.y)
```

#### 37. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L128` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L290) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L128)

```diff
-         throw new ReferenceError("Can not negate a color")
+         return this.x *= -1, this.y *= -1, this
```

#### 38. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L131-L134` → after: `L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L293) · [Before (L131-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L131-L134)

```diff
-         throw new ReferenceError("Can not negate a color")
-       }
-       scale(zz) {
-         return new uz(this.r * zz, this.g * zz, this.b * zz)
+         return vv.x = -this.x, vv.y = -this.y, vv
```

#### 39. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L137` → after: `L296-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L296-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L296-L299) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L137)

```diff
-         return this.r *= zz, this.g *= zz, this.b *= zz, this
+         return this.x *= vv, this.y *= vv, this
+       }
+       scale(vv) {
+         return new Tv(this.x * vv, this.y * vv)
```

#### 40. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L140` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L302) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L140)

```diff
-         return tz.r = this.r * zz, tz.g = this.g * zz, tz.b = this.b * zz, tz
+         return zv.x = this.x * vv, zv.y = this.y * vv, zv
```

#### 41. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L143` → after: `L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L305) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L143)

```diff
-         return tz.r += this.r * zz, tz.g += this.g * zz, tz.b += this.b * zz, tz
+         return zv.x += this.x * vv, zv.y += this.y * vv, zv
```

#### 42. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L145-L149` → after: `L307-L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L307-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L307-L308) · [Before (L145-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L145-L149)

```diff
-       clampToRef() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
-           sz = arguments.length > 2 ? arguments[2] : void 0;
-         return sz.r = (0, Xz.Clamp)(this.r, zz, tz), sz.g = (0, Xz.Clamp)(this.g, zz, tz), sz.b = (0, Xz.Clamp)(this.b, zz, tz), sz
+       equals(vv) {
+         return vv && this.x === vv.x && this.y === vv.y
```

#### 43. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L151-L152` → after: `L310-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L310-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L310-L312) · [Before (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L151-L152)

```diff
-       add(zz) {
-         return new uz(this.r + zz.r, this.g + zz.g, this.b + zz.b)
+       equalsWithEpsilon(vv) {
+         let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hv.e;
+         return vv && (0, pv.WithinEpsilon)(this.x, vv.x, zv) && (0, pv.WithinEpsilon)(this.y, vv.y, zv)
```

#### 44. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L154-L155` → after: `L314-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L314-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L314-L315) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L154-L155)

```diff
-       addInPlace(zz) {
-         return this.r += zz.r, this.g += zz.g, this.b += zz.b, this
+       Mev(vv, zv) {
+         return this.x === vv && this.y === zv
```

#### 45. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L157-L158` → after: `L317-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L317-L318) · [Before (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L157-L158)

```diff
-       addInPlaceFromFloats(zz, tz, sz) {
-         return this.r += zz, this.g += tz, this.b += sz, this
+       floor() {
+         return new Tv(Math.floor(this.x), Math.floor(this.y))
```

#### 46. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L160-L161` → after: `L320-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L320-L321) · [Before (L160-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L160-L161)

```diff
-       addToRef(zz, tz) {
-         return tz.r = this.r + zz.r, tz.g = this.g + zz.g, tz.b = this.b + zz.b, tz
+       floorToRef(vv) {
+         return vv.x = Math.floor(this.x), vv.y = Math.floor(this.y), vv
```

#### 47. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L163-L164` → after: `L323-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L323-L324) · [Before (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L163-L164)

```diff
-       subtract(zz) {
-         return new uz(this.r - zz.r, this.g - zz.g, this.b - zz.b)
+       fract() {
+         return new Tv(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
```

#### 48. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L166-L167` → after: `L326-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L326-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L326-L327) · [Before (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L166-L167)

```diff
-       subtractToRef(zz, tz) {
-         return tz.r = this.r - zz.r, tz.g = this.g - zz.g, tz.b = this.b - zz.b, tz
+       fractToRef(vv) {
+         return vv.x = this.x - Math.floor(this.x), vv.y = this.y - Math.floor(this.y), vv
```

#### 49. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L169-L170` → after: `L329-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L329-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L329-L330) · [Before (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L169-L170)

```diff
-       oFz(zz) {
-         return this.r -= zz.r, this.g -= zz.g, this.b -= zz.b, this
+       rotate(vv) {
+         return this.rotateToRef(vv, new Tv)
```

#### 50. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L172-L173` → after: `L332-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L332-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L332-L335) · [Before (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L172-L173)

```diff
-       subtractFromFloats(zz, tz, sz) {
-         return new uz(this.r - zz, this.g - tz, this.b - sz)
+       rotateToRef(vv, zv) {
+         const Pv = Math.cos(vv),
+           hv = Math.sin(vv);
+         return zv.x = Pv * this.x - hv * this.y, zv.y = hv * this.x + Pv * this.y, zv
```

#### 51. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L175-L176` → after: `L337-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L337-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L337-L338) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L175-L176)

```diff
-       subtractFromFloatsToRef(zz, tz, sz, Fz) {
-         return Fz.r = this.r - zz, Fz.g = this.g - tz, Fz.b = this.b - sz, Fz
+       length() {
+         return Math.sqrt(this.x * this.x + this.y * this.y)
```

#### 52. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L178-L179` → after: `L340-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L340-L341) · [Before (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L178-L179)

```diff
-       clone() {
-         return new uz(this.r, this.g, this.b)
+       lengthSquared() {
+         return this.x * this.x + this.y * this.y
```

#### 53. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L181-L182` → after: `L343-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L343-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L343-L344) · [Before (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L181-L182)

```diff
-       vsz(zz) {
-         return this.r = zz.r, this.g = zz.g, this.b = zz.b, this
+       normalize() {
+         return this.normalizeFromLength(this.length())
```

#### 54. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L184-L185` → after: `L346-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L346-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L346-L347) · [Before (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L184-L185)

```diff
-       m_(zz, tz, sz) {
-         return this.r = zz, this.g = tz, this.b = sz, this
+       normalizeFromLength(vv) {
+         return 0 === vv || 1 === vv ? this : this.scaleInPlace(1 / vv)
```

#### 55. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L187-L188` → after: `L349-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L349-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L349-L351) · [Before (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L187-L188)

```diff
-       set(zz, tz, sz) {
-         return this.m_(zz, tz, sz)
+       normalizeToNew() {
+         const vv = new Tv;
+         return this.normalizeToRef(vv), vv
```

#### 56. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L190-L215` → after: `L353-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L353-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L353-L355) · [Before (L190-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L190-L215)

```diff
-       Z6(zz) {
-         return this.r = this.g = this.b = zz, this
-       }
-       toHexString() {
-         const zz = Math.round(255 * this.r),
-           tz = Math.round(255 * this.g),
-           sz = Math.round(255 * this.b);
-         return "#" + (0, Xz.ToHex)(zz) + (0, Xz.ToHex)(tz) + (0, Xz.ToHex)(sz)
-       }
-       fromHexString(zz) {
-         return "#" !== zz.substring(0, 1) || 7 !== zz.length || (this.r = parseInt(zz.substring(1, 3), 16) / 255, this.g = parseInt(zz.substring(3, 5), 16) / 255, this.b = parseInt(zz.substring(5, 7), 16) / 255), this
-       }
-       toHSV() {
-         return this.toHSVToRef(new uz)
-       }
-       toHSVToRef(zz) {
- ... (10 more removed lines; see GitHub link above)
+       normalizeToRef(vv) {
+         const zv = this.length();
+         return 0 === zv || 1 === zv ? (vv.x = this.x, vv.y = this.y, vv) : this.scaleToRef(1 / zv, vv)
```

#### 57. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L217-L220` → after: `L357-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L357-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L357-L358) · [Before (L217-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L217-L220)

```diff
-       toLinearSpace() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const tz = new uz;
-         return this.toLinearSpaceToRef(tz, zz), tz
+       clone() {
+         return new Tv(this.x, this.y)
```

#### 58. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L222-L223` → after: `L360-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L360-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L360-L361) · [Before (L222-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L222-L223)

```diff
-       toLinearSpaceToRef(zz) {
-         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (zz.r = vz(this.r), zz.g = vz(this.g), zz.b = vz(this.b)) : (zz.r = oz(this.r), zz.g = oz(this.g), zz.b = oz(this.b)), this
+       dot(vv) {
+         return this.x * vv.x + this.y * vv.y
```

#### 59. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L225-L228` → after: `L363-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L363-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L363-L364) · [Before (L225-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L225-L228)

```diff
-       toGammaSpace() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const tz = new uz;
-         return this.toGammaSpaceToRef(tz, zz), tz
+       static Zero() {
+         return new Tv(0, 0)
```

#### 60. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L230-L231` → after: `L366-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L366-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L366-L367) · [Before (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L230-L231)

```diff
-       toGammaSpaceToRef(zz) {
-         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (zz.r = Kz(this.r), zz.g = Kz(this.g), zz.b = Kz(this.b)) : (zz.r = Uz(this.r), zz.g = Uz(this.g), zz.b = Uz(this.b)), this
+       static One() {
+         return new Tv(1, 1)
```

#### 61. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L233-L246` → after: `L369-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L369-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L369-L372) · [Before (L233-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L233-L246)

```diff
-       static HSVtoRGBToRef(zz, tz, sz, Fz) {
-         const Wz = sz * tz,
-           Xz = zz / 60,
-           Oz = Wz * (1 - Math.abs(Xz % 2 - 1));
-         let oz = 0,
-           vz = 0,
-           Uz = 0;
-         Xz >= 0 && Xz <= 1 ? (oz = Wz, vz = Oz) : Xz >= 1 && Xz <= 2 ? (oz = Oz, vz = Wz) : Xz >= 2 && Xz <= 3 ? (vz = Wz, Uz = Oz) : Xz >= 3 && Xz <= 4 ? (vz = Oz, Uz = Wz) : Xz >= 4 && Xz <= 5 ? (oz = Oz, Uz = Wz) : Xz >= 5 && Xz <= 6 && (oz = Wz, Uz = Oz);
-         const Kz = sz - Wz;
-         return Fz.r = oz + Kz, Fz.g = vz + Kz, Fz.b = Uz + Kz, Fz
-       }
-       static FromHSV(zz, tz, sz) {
-         const Fz = new uz(0, 0, 0);
-         return uz.HSVtoRGBToRef(zz, tz, sz, Fz), Fz
+       static Random() {
+         let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         return new Tv((0, pv.RandomRange)(vv, zv), (0, pv.RandomRange)(vv, zv))
```

#### 62. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L248-L249` → after: `L374-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L374-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L374-L380) · [Before (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L248-L249)

```diff
-       static FromHexString(zz) {
-         return new uz(0, 0, 0).fromHexString(zz)
+       static RandomToRef() {
+         let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         return (arguments.length > 2 ? arguments[2] : void 0).f_((0, pv.RandomRange)(vv, zv), (0, pv.RandomRange)(vv, zv))
+       }
+       static get ZeroReadOnly() {
+         return Tv._ZeroReadOnly
```

#### 63. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L253` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L384) · [Before (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L253)

```diff
-         return new uz(zz[tz], zz[tz + 1], zz[tz + 2])
+         return new Tv(vv[zv], vv[zv + 1])
```

#### 64. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L255-L258` → after: `L386-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L386-L387) · [Before (L255-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L255-L258)

```diff
-       static FromArrayToRef(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           sz = arguments.length > 2 ? arguments[2] : void 0;
-         sz.r = zz[tz], sz.g = zz[tz + 1], sz.b = zz[tz + 2]
+       static FromArrayToRef(vv, zv, Pv) {
+         return Pv.x = vv[zv], Pv.y = vv[zv + 1], Pv
```

#### 65. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L260-L261` → after: `L389-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L389-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L389-L390) · [Before (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L260-L261)

```diff
-       static FromInts(zz, tz, sz) {
-         return new uz(zz / 255, tz / 255, sz / 255)
+       static FromFloatsToRef(vv, zv, Pv) {
+         return Pv.f_(vv, zv), Pv
```

#### 66. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L263-L265` → after: `L392-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L392-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L392-L397) · [Before (L263-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L263-L265)

```diff
-       static Lerp(zz, tz, sz) {
-         const Fz = new uz(0, 0, 0);
-         return uz.LerpToRef(zz, tz, sz, Fz), Fz
+       static CatmullRom(vv, zv, Pv, hv, Sv) {
+         const ev = Sv * Sv,
+           gv = Sv * ev,
+           pv = .5 * (2 * zv.x + (-vv.x + Pv.x) * Sv + (2 * vv.x - 5 * zv.x + 4 * Pv.x - hv.x) * ev + (-vv.x + 3 * zv.x - 3 * Pv.x + hv.x) * gv),
+           dv = .5 * (2 * zv.y + (-vv.y + Pv.y) * Sv + (2 * vv.y - 5 * zv.y + 4 * Pv.y - hv.y) * ev + (-vv.y + 3 * zv.y - 3 * Pv.y + hv.y) * gv);
+         return new Tv(pv, dv)
```

#### 67. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L267-L268` → after: `L399-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L399-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L399-L405) · [Before (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L267-L268)

```diff
-       static LerpToRef(zz, tz, sz, Fz) {
-         Fz.r = zz.r + (tz.r - zz.r) * sz, Fz.g = zz.g + (tz.g - zz.g) * sz, Fz.b = zz.b + (tz.b - zz.b) * sz
+       static ClampToRef(vv, zv, Pv, hv) {
+         return hv.x = (0, pv.Clamp)(vv.x, zv.x, Pv.x), hv.y = (0, pv.Clamp)(vv.y, zv.y, Pv.y), hv
+       }
+       static Clamp(vv, zv, Pv) {
+         const hv = (0, pv.Clamp)(vv.x, zv.x, Pv.x),
+           Sv = (0, pv.Clamp)(vv.y, zv.y, Pv.y);
+         return new Tv(hv, Sv)
```

#### 68. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L277-L280` → after: `L414-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L414-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L414-L416) · [Before (L277-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L277-L280)

```diff
-           Nz = zz.r * oz + sz.r * vz + tz.r * Uz + Fz.r * Kz,
-           bz = zz.g * oz + sz.g * vz + tz.g * Uz + Fz.g * Kz,
-           wz = zz.b * oz + sz.b * vz + tz.b * Uz + Fz.b * Kz;
-         return new uz(Nz, bz, wz)
+           Wv = vv.x * pv + Pv.x * dv + zv.x * Nv + hv.x * lv,
+           wv = vv.y * pv + Pv.y * dv + zv.y * Nv + hv.y * lv;
+         return new Tv(Wv, wv)
```

#### 69. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L283-L284` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L419) · [Before (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L283-L284)

```diff
-         const Xz = uz.Black();
-         return this.Hermite1stDerivativeToRef(zz, tz, sz, Fz, Wz, Xz), Xz
+         return this.Hermite1stDerivativeToRef(vv, zv, Pv, hv, Sv, new Tv)
```

#### 70. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L288` → after: `L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L423) · [Before (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L288)

```diff
-         Xz.r = 6 * (Oz - Wz) * zz.r + (3 * Oz - 4 * Wz + 1) * tz.r + 6 * (-Oz + Wz) * sz.r + (3 * Oz - 2 * Wz) * Fz.r, Xz.g = 6 * (Oz - Wz) * zz.g + (3 * Oz - 4 * Wz + 1) * tz.g + 6 * (-Oz + Wz) * sz.g + (3 * Oz - 2 * Wz) * Fz.g, Xz.b = 6 * (Oz - Wz) * zz.b + (3 * Oz - 4 * Wz + 1 … [truncated]
+         return ev.x = 6 * (gv - Sv) * vv.x + (3 * gv - 4 * Sv + 1) * zv.x + 6 * (-gv + Sv) * Pv.x + (3 * gv - 2 * Sv) * hv.x, ev.y = 6 * (gv - Sv) * vv.y + (3 * gv - 4 * Sv + 1) * zv.y + 6 * (-gv + Sv) * Pv.y + (3 * gv - 2 * Sv) * hv.y, ev
```

#### 71. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L290-L291` → after: `L425-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L425-L426) · [Before (L290-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L290-L291)

```diff
-       static Red() {
-         return new uz(1, 0, 0)
+       static Lerp(vv, zv, Pv) {
+         return Tv.LerpToRef(vv, zv, Pv, new Tv)
```

#### 72. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L293-L294` → after: `L428-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L428-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L428-L429) · [Before (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L293-L294)

```diff
-       static Green() {
-         return new uz(0, 1, 0)
+       static LerpToRef(vv, zv, Pv, hv) {
+         return hv.x = vv.x + (zv.x - vv.x) * Pv, hv.y = vv.y + (zv.y - vv.y) * Pv, hv
```

#### 73. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L296-L297` → after: `L431-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L431-L432) · [Before (L296-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L296-L297)

```diff
-       static Blue() {
-         return new uz(0, 0, 1)
+       static Dot(vv, zv) {
+         return vv.x * zv.x + vv.y * zv.y
```

#### 74. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L299-L300` → after: `L434-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L434-L435) · [Before (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L299-L300)

```diff
-       static Black() {
-         return new uz(0, 0, 0)
+       static Normalize(vv) {
+         return Tv.NormalizeToRef(vv, new Tv)
```

#### 75. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L302-L303` → after: `L437-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L437-L438) · [Before (L302-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L302-L303)

```diff
-       static get BlackReadOnly() {
-         return uz._BlackReadOnly
+       static NormalizeToRef(vv, zv) {
+         return vv.normalizeToRef(zv), zv
```

#### 76. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L305-L306` → after: `L440-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L440-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L440-L443) · [Before (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L305-L306)

```diff
-       static White() {
-         return new uz(1, 1, 1)
+       static Minimize(vv, zv) {
+         const Pv = vv.x < zv.x ? vv.x : zv.x,
+           hv = vv.y < zv.y ? vv.y : zv.y;
+         return new Tv(Pv, hv)
```

#### 77. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L308-L309` → after: `L445-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L445-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L445-L448) · [Before (L308-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L308-L309)

```diff
-       static Purple() {
-         return new uz(.5, 0, .5)
+       static Maximize(vv, zv) {
+         const Pv = vv.x > zv.x ? vv.x : zv.x,
+           hv = vv.y > zv.y ? vv.y : zv.y;
+         return new Tv(Pv, hv)
```

#### 78. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L311-L312` → after: `L450-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L450-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L450-L451) · [Before (L311-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L311-L312)

```diff
-       static Magenta() {
-         return new uz(1, 0, 1)
+       static Transform(vv, zv) {
+         return Tv.TransformToRef(vv, zv, new Tv)
```

#### 79. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L314-L315` → after: `L453-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L453-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L453-L457) · [Before (L314-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L314-L315)

```diff
-       static Yellow() {
-         return new uz(1, 1, 0)
+       static TransformToRef(vv, zv, Pv) {
+         const hv = zv.m,
+           Sv = vv.x * hv[0] + vv.y * hv[4] + hv[12],
+           ev = vv.x * hv[1] + vv.y * hv[5] + hv[13];
+         return Pv.x = Sv, Pv.y = ev, Pv
```

#### 80. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L317-L318` → after: `L459-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L459-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L459-L464) · [Before (L317-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L317-L318)

```diff
-       static Gray() {
-         return new uz(.5, .5, .5)
+       static PointInTriangle(vv, zv, Pv, hv) {
+         const Sv = .5 * (-Pv.y * hv.x + zv.y * (-Pv.x + hv.x) + zv.x * (Pv.y - hv.y) + Pv.x * hv.y),
+           ev = Sv < 0 ? -1 : 1,
+           gv = (zv.y * hv.x - zv.x * hv.y + (hv.y - zv.y) * vv.x + (zv.x - hv.x) * vv.y) * ev,
+           pv = (zv.x * Pv.y - zv.y * Pv.x + (zv.y - Pv.y) * vv.x + (Pv.x - zv.x) * vv.y) * ev;
+         return gv > 0 && pv > 0 && gv + pv < 2 * Sv * ev
```

#### 81. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L320-L321` → after: `L466-L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L466-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L466-L467) · [Before (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L320-L321)

```diff
-       static Teal() {
-         return new uz(0, 1, 1)
+       static Distance(vv, zv) {
+         return Math.sqrt(Tv.DistanceSquared(vv, zv))
```

#### 82. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L323-L324` → after: `L469-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L469-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L469-L486) · [Before (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L323-L324)

```diff
-       static Random() {
-         return new uz(Math.random(), Math.random(), Math.random())
+       static DistanceSquared(vv, zv) {
+         const Pv = vv.x - zv.x,
+           hv = vv.y - zv.y;
+         return Pv * Pv + hv * hv
+       }
+       static Center(vv, zv) {
+         return Tv.CenterToRef(vv, zv, new Tv)
+       }
+       static CenterToRef(vv, zv, Pv) {
+         return Pv.f_((vv.x + zv.x) / 2, (vv.y + zv.y) / 2)
+       }
+       static DistanceOfPointFromSegment(vv, zv, Pv) {
+         const hv = Tv.DistanceSquared(zv, Pv);
+         if (0 === hv) return Tv.Distance(vv, zv);
+         const Sv = Pv.subtract(zv),
+           ev = Math.max(0, Math.min(1, Tv.Dot(vv.subtract(zv), Sv) / hv)),
+ ... (2 more added lines; see GitHub link above)
```

#### 83. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L327` → after: `L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L489) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L327)

```diff
-     uz._V8PerformanceHack = new uz(.5, .5, .5), uz._BlackReadOnly = uz.Black();
+     Tv._V8PerformanceHack = new Tv(.5, .5), Tv._ZeroReadOnly = Tv.Zero();
```

#### 84. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L332-L334` → after: `L512-L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L512-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L512-L523) · [Before (L332-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L332-L334)

```diff
-           sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-           Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
-         this.r = zz, this.g = tz, this.b = sz, this.a = Fz
+           Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this._isDirty = !0, this._x = vv, this._y = zv, this._z = Pv
+       }
+       toString() {
+         return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
+       }
+       getClassName() {
+         return "fa"
+       }
+       getHashCode() {
+         let vv = lv(this._x);
+         return vv = 397 * vv ^ lv(this._y), vv = 397 * vv ^ lv(this._z), vv
```

#### 85. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L336-L337` → after: `L525-L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L525-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L525-L526) · [Before (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L336-L337)

```diff
-       hsz() {
-         return [this.r, this.g, this.b, this.a]
+       pPv() {
+         return [this._x, this._y, this._z]
```

#### 86. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L341` → after: `L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L530) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L341)

```diff
-         return zz[tz] = this.r, zz[tz + 1] = this.g, zz[tz + 2] = this.b, zz[tz + 3] = this.a, this
+         return vv[zv] = this._x, vv[zv + 1] = this._y, vv[zv + 2] = this._z, this
```

#### 87. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L343` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L532) · [Before (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L343)

```diff
-       Ztz(zz) {
+       Evv(vv) {
```

#### 88. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L345` → after: `L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L534) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L345)

```diff
-         return this.r = zz[tz], this.g = zz[tz + 1], this.b = zz[tz + 2], this.a = zz[tz + 3], this
+         return Wv.FromArrayToRef(vv, zv, this), this
```

#### 89. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L347-L348` → after: `L536-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L536-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L536-L543) · [Before (L347-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L347-L348)

```diff
-       equals(zz) {
-         return zz && this.r === zz.r && this.g === zz.g && this.b === zz.b && this.a === zz.a
+       toQuaternion() {
+         return av.RotationYawPitchRoll(this._y, this._x, this._z)
+       }
+       addInPlace(vv) {
+         return this._x += vv._x, this._y += vv._y, this._z += vv._z, this._isDirty = !0, this
+       }
+       addInPlaceFromFloats(vv, zv, Pv) {
+         return this._x += vv, this._y += zv, this._z += Pv, this._isDirty = !0, this
```

#### 90. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L351` → after: `L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L546) · [Before (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L351)

```diff
-         return new Nz(this.r + zz.r, this.g + zz.g, this.b + zz.b, this.a + zz.a)
+         return new Wv(this._x + vv._x, this._y + vv._y, this._z + vv._z)
```

#### 91. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L354-L357` → after: `L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L549) · [Before (L354-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L354-L357)

```diff
-         return tz.r = this.r + zz.r, tz.g = this.g + zz.g, tz.b = this.b + zz.b, tz.a = this.a + zz.a, tz
-       }
-       addInPlace(zz) {
-         return this.r += zz.r, this.g += zz.g, this.b += zz.b, this.a += zz.a, this
+         return zv._x = this._x + vv._x, zv._y = this._y + vv._y, zv._z = this._z + vv._z, zv._isDirty = !0, zv
```

#### 92. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L359-L360` → after: `L551-L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L551-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L551-L552) · [Before (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L359-L360)

```diff
-       addInPlaceFromFloats(zz, tz, sz, Fz) {
-         return this.r += zz, this.g += tz, this.b += sz, this.a += Fz, this
+       VPv(vv) {
+         return this._x -= vv._x, this._y -= vv._y, this._z -= vv._z, this._isDirty = !0, this
```

#### 93. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L363` → after: `L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L555) · [Before (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L363)

```diff
-         return new Nz(this.r - zz.r, this.g - zz.g, this.b - zz.b, this.a - zz.a)
+         return new Wv(this._x - vv._x, this._y - vv._y, this._z - vv._z)
```

#### 94. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L366` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L558) · [Before (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L366)

```diff
-         return tz.r = this.r - zz.r, tz.g = this.g - zz.g, tz.b = this.b - zz.b, tz.a = this.a - zz.a, tz
+         return this.subtractFromFloatsToRef(vv._x, vv._y, vv._z, zv)
```

#### 95. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L368-L369` → after: `L560-L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L560-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L560-L561) · [Before (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L368-L369)

```diff
-       oFz(zz) {
-         return this.r -= zz.r, this.g -= zz.g, this.b -= zz.b, this.a -= zz.a, this
+       subtractFromFloats(vv, zv, Pv) {
+         return new Wv(this._x - vv, this._y - zv, this._z - Pv)
```

#### 96. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L371-L372` → after: `L563-L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L563-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L563-L564) · [Before (L371-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L371-L372)

```diff
-       subtractFromFloats(zz, tz, sz, Fz) {
-         return new Nz(this.r - zz, this.g - tz, this.b - sz, this.a - Fz)
+       subtractFromFloatsToRef(vv, zv, Pv, hv) {
+         return hv._x = this._x - vv, hv._y = this._y - zv, hv._z = this._z - Pv, hv._isDirty = !0, hv
```

#### 97. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L374-L375` → after: `L566-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L566-L567) · [Before (L374-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L374-L375)

```diff
-       subtractFromFloatsToRef(zz, tz, sz, Fz, Wz) {
-         return Wz.r = this.r - zz, Wz.g = this.g - tz, Wz.b = this.b - sz, Wz.a = this.a - Fz, Wz
+       Re() {
+         return new Wv(-this._x, -this._y, -this._z)
```

#### 98. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L377-L378` → after: `L569-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L569-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L569-L573) · [Before (L377-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L377-L378)

```diff
-       scale(zz) {
-         return new Nz(this.r * zz, this.g * zz, this.b * zz, this.a * zz)
+       negateInPlace() {
+         return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
+       }
+       negateToRef(vv) {
+         return vv._x = -1 * this._x, vv._y = -1 * this._y, vv._z = -1 * this._z, vv._isDirty = !0, vv
```

#### 99. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L381` → after: `L576-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L576-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L576-L579) · [Before (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L381)

```diff
-         return this.r *= zz, this.g *= zz, this.b *= zz, this.a *= zz, this
+         return this._x *= vv, this._y *= vv, this._z *= vv, this._isDirty = !0, this
+       }
+       scale(vv) {
+         return new Wv(this._x * vv, this._y * vv, this._z * vv)
```

#### 100. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L384` → after: `L582-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L582-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L582-L611) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L384)

```diff
-         return tz.r = this.r * zz, tz.g = this.g * zz, tz.b = this.b * zz, tz.a = this.a * zz, tz
+         return zv._x = this._x * vv, zv._y = this._y * vv, zv._z = this._z * vv, zv._isDirty = !0, zv
+       }
+       getNormalToRef(vv) {
+         const zv = this.length();
+         let Pv = Math.acos(this._y / zv);
+         const hv = Math.atan2(this._z, this._x);
+         Pv > Math.PI / 2 ? Pv -= Math.PI / 2 : Pv += Math.PI / 2;
+         const Sv = zv * Math.sin(Pv) * Math.cos(hv),
+           ev = zv * Math.cos(Pv),
+           gv = zv * Math.sin(Pv) * Math.sin(hv);
+         return vv.set(Sv, ev, gv), vv
+       }
+       applyRotationQuaternionToRef(vv, zv) {
+         const Pv = this._x,
+           hv = this._y,
+           Sv = this._z,
+ ... (14 more added lines; see GitHub link above)
```

#### 101. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L387` → after: `L614-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L614-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L614-L631) · [Before (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L387)

```diff
-         return tz.r += this.r * zz, tz.g += this.g * zz, tz.b += this.b * zz, tz.a += this.a * zz, tz
+         return zv._x += this._x * vv, zv._y += this._y * vv, zv._z += this._z * vv, zv._isDirty = !0, zv
+       }
+       projectOnPlane(vv, zv) {
+         return this.projectOnPlaneToRef(vv, zv, new Wv)
+       }
+       projectOnPlaneToRef(vv, zv, Pv) {
+         const hv = vv.normal,
+           Sv = vv.d,
+           ev = Cv.fa[0];
+         this.subtractToRef(zv, ev), ev.normalize();
+         const gv = Wv.Dot(ev, hv);
+         if (Math.abs(gv) < 1e-10) Pv.Dk(1 / 0);
+         else {
+           const vv = -(Wv.Dot(zv, hv) + Sv) / gv,
+             pv = ev.scaleInPlace(vv);
+           zv.addToRef(pv, Pv)
+ ... (2 more added lines; see GitHub link above)
```

#### 102. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L389-L393` → after: `L633-L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L633-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L633-L634) · [Before (L389-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L389-L393)

```diff
-       clampToRef() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
-           sz = arguments.length > 2 ? arguments[2] : void 0;
-         return sz.r = (0, Xz.Clamp)(this.r, zz, tz), sz.g = (0, Xz.Clamp)(this.g, zz, tz), sz.b = (0, Xz.Clamp)(this.b, zz, tz), sz.a = (0, Xz.Clamp)(this.a, zz, tz), sz
+       equals(vv) {
+         return vv && this._x === vv._x && this._y === vv._y && this._z === vv._z
```

#### 103. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L395-L396` → after: `L636-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L636-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L636-L638) · [Before (L395-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L395-L396)

```diff
-       multiply(zz) {
-         return new Nz(this.r * zz.r, this.g * zz.g, this.b * zz.b, this.a * zz.a)
+       equalsWithEpsilon(vv) {
+         let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hv.e;
+         return vv && (0, pv.WithinEpsilon)(this._x, vv._x, zv) && (0, pv.WithinEpsilon)(this._y, vv._y, zv) && (0, pv.WithinEpsilon)(this._z, vv._z, zv)
```

#### 104. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L398-L399` → after: `L640-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L640-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L640-L641) · [Before (L398-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L398-L399)

```diff
-       multiplyToRef(zz, tz) {
-         return tz.r = this.r * zz.r, tz.g = this.g * zz.g, tz.b = this.b * zz.b, tz.a = this.a * zz.a, tz
+       Mev(vv, zv, Pv) {
+         return this._x === vv && this._y === zv && this._z === Pv
```

#### 105. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L402` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L644) · [Before (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L402)

```diff
-         return this.r *= zz.r, this.g *= zz.g, this.b *= zz.b, this.a *= zz.a, this
+         return this._x *= vv._x, this._y *= vv._y, this._z *= vv._z, this._isDirty = !0, this
```

#### 106. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L404-L405` → after: `L646-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L646-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L646-L653) · [Before (L404-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L404-L405)

```diff
-       multiplyByFloats(zz, tz, sz, Fz) {
-         return new Nz(this.r * zz, this.g * tz, this.b * sz, this.a * Fz)
+       multiply(vv) {
+         return this.multiplyByFloats(vv._x, vv._y, vv._z)
+       }
+       multiplyToRef(vv, zv) {
+         return zv._x = this._x * vv._x, zv._y = this._y * vv._y, zv._z = this._z * vv._z, zv._isDirty = !0, zv
+       }
+       multiplyByFloats(vv, zv, Pv) {
+         return new Wv(this._x * vv, this._y * zv, this._z * Pv)
```

#### 107. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L408` → after: `L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L656) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L408)

```diff
-         throw new ReferenceError("Can not divide a color")
+         return new Wv(this._x / vv._x, this._y / vv._y, this._z / vv._z)
```

#### 108. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L411` → after: `L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L659) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L411)

```diff
-         throw new ReferenceError("Can not divide a color")
+         return zv._x = this._x / vv._x, zv._y = this._y / vv._y, zv._z = this._z / vv._z, zv._isDirty = !0, zv
```

#### 109. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L414` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L662) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L414)

```diff
-         throw new ReferenceError("Can not divide a color")
+         return this._x = this._x / vv._x, this._y = this._y / vv._y, this._z = this._z / vv._z, this._isDirty = !0, this
```

#### 110. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L417` → after: `L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L665) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L417)

```diff
-         return this.r = Math.min(this.r, zz.r), this.g = Math.min(this.g, zz.g), this.b = Math.min(this.b, zz.b), this.a = Math.min(this.a, zz.a), this
+         return this.minimizeInPlaceFromFloats(vv._x, vv._y, vv._z)
```

#### 111. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L420` → after: `L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L668) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L420)

```diff
-         return this.r = Math.max(this.r, zz.r), this.g = Math.max(this.g, zz.g), this.b = Math.max(this.b, zz.b), this.a = Math.max(this.a, zz.a), this
+         return this.maximizeInPlaceFromFloats(vv._x, vv._y, vv._z)
```

#### 112. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L422-L423` → after: `L670-L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L670-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L670-L671) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L422-L423)

```diff
-       minimizeInPlaceFromFloats(zz, tz, sz, Fz) {
-         return this.r = Math.min(zz, this.r), this.g = Math.min(tz, this.g), this.b = Math.min(sz, this.b), this.a = Math.min(Fz, this.a), this
+       minimizeInPlaceFromFloats(vv, zv, Pv) {
+         return vv < this._x && (this.x = vv), zv < this._y && (this.y = zv), Pv < this._z && (this.z = Pv), this
```

#### 113. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L425-L426` → after: `L673-L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L673-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L673-L686) · [Before (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L425-L426)

```diff
-       maximizeInPlaceFromFloats(zz, tz, sz, Fz) {
-         return this.r = Math.max(zz, this.r), this.g = Math.max(tz, this.g), this.b = Math.max(sz, this.b), this.a = Math.max(Fz, this.a), this
+       maximizeInPlaceFromFloats(vv, zv, Pv) {
+         return vv > this._x && (this.x = vv), zv > this._y && (this.y = zv), Pv > this._z && (this.z = Pv), this
+       }
+       isNonUniformWithinEpsilon(vv) {
+         const zv = Math.abs(this._x),
+           Pv = Math.abs(this._y);
+         if (!(0, pv.WithinEpsilon)(zv, Pv, vv)) return !0;
+         const hv = Math.abs(this._z);
+         return !(0, pv.WithinEpsilon)(zv, hv, vv) || !(0, pv.WithinEpsilon)(Pv, hv, vv)
+       }
+       get isNonUniform() {
+         const vv = Math.abs(this._x);
+         if (vv !== Math.abs(this._y)) return !0;
+         return vv !== Math.abs(this._z)
```

#### 114. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L429` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L689) · [Before (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L429)

```diff
-         throw new ReferenceError("Can not floor a color")
+         return vv._x = Math.floor(this._x), vv._y = Math.floor(this._y), vv._z = Math.floor(this._z), vv._isDirty = !0, vv
```

#### 115. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L432` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L692) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L432)

```diff
-         throw new ReferenceError("Can not floor a color")
+         return new Wv(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
```

#### 116. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L435` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L695) · [Before (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L435)

```diff
-         throw new ReferenceError("Can not fract a color")
+         return vv._x = this._x - Math.floor(this._x), vv._y = this._y - Math.floor(this._y), vv._z = this._z - Math.floor(this._z), vv._isDirty = !0, vv
```

#### 117. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L438` → after: `L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L698) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L438)

```diff
-         throw new ReferenceError("Can not fract a color")
+         return new Wv(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
```

#### 118. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L440-L441` → after: `L700-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L700-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L700-L701) · [Before (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L440-L441)

```diff
-       nt() {
-         throw new ReferenceError("Can not negate a color")
+       length() {
+         return Math.sqrt(this.lengthSquared())
```

#### 119. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L443-L444` → after: `L703-L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L703-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L703-L704) · [Before (L443-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L443-L444)

```diff
-       negateInPlace() {
-         throw new ReferenceError("Can not negate a color")
+       lengthSquared() {
+         return this._x * this._x + this._y * this._y + this._z * this._z
```

#### 120. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L446-L447` → after: `L706-L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L706-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L706-L707) · [Before (L446-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L446-L447)

```diff
-       negateToRef(zz) {
-         throw new ReferenceError("Can not negate a color")
+       get hasAZeroComponent() {
+         return this._x * this._y * this._z === 0
```

#### 121. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L449-L451` → after: `L709-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L709-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L709-L710) · [Before (L449-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L449-L451)

```diff
-       equalsWithEpsilon(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wz.c;
-         return (0, Xz.WithinEpsilon)(this.r, zz.r, tz) && (0, Xz.WithinEpsilon)(this.g, zz.g, tz) && (0, Xz.WithinEpsilon)(this.b, zz.b, tz) && (0, Xz.WithinEpsilon)(this.a, zz.a, tz)
+       normalize() {
+         return this.normalizeFromLength(this.length())
```

#### 122. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L453-L454` → after: `L712-L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L712-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L712-L715) · [Before (L453-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L453-L454)

```diff
-       wOz(zz, tz, sz, Fz) {
-         return this.r === zz && this.g === tz && this.b === sz && this.a === Fz
+       reorderInPlace(vv) {
+         if ("xyz" === (vv = vv.toLowerCase())) return this;
+         const zv = Cv.fa[0].Vzv(this);
+         return this.x = zv[vv[0]], this.y = zv[vv[1]], this.z = zv[vv[2]], this
```

#### 123. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L456-L457` → after: `L717-L718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L717-L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L717-L718) · [Before (L456-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L456-L457)

```diff
-       toString() {
-         return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
+       rotateByQuaternionToRef(vv, zv) {
+         return vv.toRotationMatrix(Cv.Matrix[0]), Wv.TransformCoordinatesToRef(this, Cv.Matrix[0], zv), zv
```

#### 124. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L459-L460` → after: `L720-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L720-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L720-L721) · [Before (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L459-L460)

```diff
-       getClassName() {
-         return "Color4"
+       rotateByQuaternionAroundPointToRef(vv, zv, Pv) {
+         return this.subtractToRef(zv, Cv.fa[0]), Cv.fa[0].rotateByQuaternionToRef(vv, Cv.fa[0]), zv.addToRef(Cv.fa[0], Pv), Pv
```

#### 125. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L462-L464` → after: `L723-L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L723-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L723-L734) · [Before (L462-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L462-L464)

```diff
-       getHashCode() {
-         let zz = 255 * this.r | 0;
-         return zz = 397 * zz ^ 255 * this.g, zz = 397 * zz ^ 255 * this.b, zz = 397 * zz ^ 255 * this.a, zz
+       cross(vv) {
+         return Wv.CrossToRef(this, vv, new Wv)
+       }
+       normalizeFromLength(vv) {
+         return 0 === vv || 1 === vv ? this : this.scaleInPlace(1 / vv)
+       }
+       normalizeToNew() {
+         return this.normalizeToRef(new Wv)
+       }
+       normalizeToRef(vv) {
+         const zv = this.length();
+         return 0 === zv || 1 === zv ? (vv._x = this._x, vv._y = this._y, vv._z = this._z, vv._isDirty = !0, vv) : this.scaleToRef(1 / zv, vv)
```

#### 126. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L467` → after: `L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L737) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L467)

```diff
-         return (new Nz).vsz(this)
+         return new Wv(this._x, this._y, this._z)
```

#### 127. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L469-L470` → after: `L739-L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L739-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L739-L740) · [Before (L469-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L469-L470)

```diff
-       vsz(zz) {
-         return this.r = zz.r, this.g = zz.g, this.b = zz.b, this.a = zz.a, this
+       Vzv(vv) {
+         return this.f_(vv._x, vv._y, vv._z)
```

#### 128. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L472-L473` → after: `L742-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L742-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L742-L743) · [Before (L472-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L472-L473)

```diff
-       m_(zz, tz, sz, Fz) {
-         return this.r = zz, this.g = tz, this.b = sz, this.a = Fz, this
+       f_(vv, zv, Pv) {
+         return this._x = vv, this._y = zv, this._z = Pv, this._isDirty = !0, this
```

#### 129. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L475-L476` → after: `L745-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L745-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L745-L746) · [Before (L475-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L475-L476)

```diff
-       set(zz, tz, sz, Fz) {
-         return this.m_(zz, tz, sz, Fz)
+       set(vv, zv, Pv) {
+         return this.f_(vv, zv, Pv)
```

#### 130. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L479` → after: `L749-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L749-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L749-L804) · [Before (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L479)

```diff
-         return this.r = this.g = this.b = this.a = zz, this
+         return this._x = this._y = this._z = vv, this._isDirty = !0, this
+       }
+       static GetClipFactor(vv, zv, Pv, hv) {
+         const Sv = Wv.Dot(vv, Pv);
+         return (Sv - hv) / (Sv - Wv.Dot(zv, Pv))
+       }
+       static GetAngleBetweenVectors(vv, zv, Pv) {
+         const hv = vv.normalizeToRef(Cv.fa[1]),
+           Sv = zv.normalizeToRef(Cv.fa[2]);
+         let ev = Wv.Dot(hv, Sv);
+         ev = (0, pv.Clamp)(ev, -1, 1);
+         const gv = Math.acos(ev),
+           dv = Cv.fa[3];
+         return Wv.CrossToRef(hv, Sv, dv), Wv.Dot(dv, Pv) > 0 ? isNaN(gv) ? 0 : gv : isNaN(gv) ? -Math.PI : -Math.acos(ev)
+       }
+       static GetAngleBetweenVectorsOnPlane(vv, zv, Pv) {
+ ... (40 more added lines; see GitHub link above)
```

#### 131. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L481-L488` → after: `L806-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L806-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L806-L808) · [Before (L481-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L481-L488)

```diff
-       toHexString() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const tz = Math.round(255 * this.r),
-           sz = Math.round(255 * this.g),
-           Fz = Math.round(255 * this.b);
-         if (zz) return "#" + (0, Xz.ToHex)(tz) + (0, Xz.ToHex)(sz) + (0, Xz.ToHex)(Fz);
-         const Wz = Math.round(255 * this.a);
-         return "#" + (0, Xz.ToHex)(tz) + (0, Xz.ToHex)(sz) + (0, Xz.ToHex)(Fz) + (0, Xz.ToHex)(Wz)
+       static FromArray(vv) {
+         let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return new Wv(vv[zv], vv[zv + 1], vv[zv + 2])
```

#### 132. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L490-L491` → after: `L810-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L810-L811) · [Before (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L490-L491)

```diff
-       fromHexString(zz) {
-         return "#" !== zz.substring(0, 1) || 9 !== zz.length && 7 !== zz.length || (this.r = parseInt(zz.substring(1, 3), 16) / 255, this.g = parseInt(zz.substring(3, 5), 16) / 255, this.b = parseInt(zz.substring(5, 7), 16) / 255, 9 === zz.length && (this.a = parseInt(zz.substrin … [truncated]
+       static FromFloatArray(vv, zv) {
+         return Wv.FromArray(vv, zv)
```

#### 133. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L493-L496` → after: `L813-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L813-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L813-L814) · [Before (L493-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L493-L496)

```diff
-       toLinearSpace() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const tz = new Nz;
-         return this.toLinearSpaceToRef(tz, zz), tz
+       static FromArrayToRef(vv, zv, Pv) {
+         return Pv._x = vv[zv], Pv._y = vv[zv + 1], Pv._z = vv[zv + 2], Pv._isDirty = !0, Pv
```

#### 134. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L498-L499` → after: `L816-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L816-L817) · [Before (L498-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L498-L499)

```diff
-       toLinearSpaceToRef(zz) {
-         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (zz.r = vz(this.r), zz.g = vz(this.g), zz.b = vz(this.b)) : (zz.r = oz(this.r), zz.g = oz(this.g), zz.b = oz(this.b)), zz.a = this.a, this
+       static FromFloatArrayToRef(vv, zv, Pv) {
+         return Wv.FromArrayToRef(vv, zv, Pv)
```

#### 135. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L501-L504` → after: `L819-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L819-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L819-L820) · [Before (L501-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L501-L504)

```diff
-       toGammaSpace() {
-         let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         const tz = new Nz;
-         return this.toGammaSpaceToRef(tz, zz), tz
+       static FromFloatsToRef(vv, zv, Pv, hv) {
+         return hv.f_(vv, zv, Pv), hv
```

#### 136. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L506-L507` → after: `L822-L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L822-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L822-L823) · [Before (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L506-L507)

```diff
-       toGammaSpaceToRef(zz) {
-         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (zz.r = Kz(this.r), zz.g = Kz(this.g), zz.b = Kz(this.b)) : (zz.r = Uz(this.r), zz.g = Uz(this.g), zz.b = Uz(this.b)), zz.a = this.a, this
+       static Zero() {
+         return new Wv(0, 0, 0)
```

#### 137. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L509-L510` → after: `L825-L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L825-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L825-L826) · [Before (L509-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L509-L510)

```diff
-       static FromHexString(zz) {
-         return "#" !== zz.substring(0, 1) || 9 !== zz.length && 7 !== zz.length ? new Nz(0, 0, 0, 0) : new Nz(0, 0, 0, 1).fromHexString(zz)
+       static One() {
+         return new Wv(1, 1, 1)
```

#### 138. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L512-L513` → after: `L828-L829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L828-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L828-L829) · [Before (L512-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L512-L513)

```diff
-       static Lerp(zz, tz, sz) {
-         return Nz.LerpToRef(zz, tz, sz, new Nz)
+       static Up() {
+         return new Wv(0, 1, 0)
```

#### 139. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L515-L516` → after: `L831-L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L831-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L831-L933) · [Before (L515-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L515-L516)

```diff
-       static LerpToRef(zz, tz, sz, Fz) {
-         return Fz.r = zz.r + (tz.r - zz.r) * sz, Fz.g = zz.g + (tz.g - zz.g) * sz, Fz.b = zz.b + (tz.b - zz.b) * sz, Fz.a = zz.a + (tz.a - zz.a) * sz, Fz
+       static get UpReadOnly() {
+         return Wv._UpReadOnly
+       }
+       static get DownReadOnly() {
+         return Wv._DownReadOnly
+       }
+       static get RightReadOnly() {
+         return Wv._RightReadOnly
+       }
+       static get LeftReadOnly() {
+         return Wv._LeftReadOnly
+       }
+       static get LeftHandedForwardReadOnly() {
+         return Wv._LeftHandedForwardReadOnly
+       }
+       static get RightHandedForwardReadOnly() {
+ ... (87 more added lines; see GitHub link above)
```

#### 140. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L525-L529` → after: `L942-L945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L942-L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L942-L945) · [Before (L525-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L525-L529)

```diff
-           uz = zz.r * oz + sz.r * vz + tz.r * Uz + Fz.r * Kz,
-           bz = zz.g * oz + sz.g * vz + tz.g * Uz + Fz.g * Kz,
-           wz = zz.b * oz + sz.b * vz + tz.b * Uz + Fz.b * Kz,
-           Dz = zz.a * oz + sz.a * vz + tz.a * Uz + Fz.a * Kz;
-         return new Nz(uz, bz, wz, Dz)
+           Tv = vv._x * pv + Pv._x * dv + zv._x * Nv + hv._x * lv,
+           wv = vv._y * pv + Pv._y * dv + zv._y * Nv + hv._y * lv,
+           av = vv._z * pv + Pv._z * dv + zv._z * Nv + hv._z * lv;
+         return new Wv(Tv, wv, av)
```

#### 141. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L537` → after: `L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L953) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L537)

```diff
-         Xz.r = 6 * (Oz - Wz) * zz.r + (3 * Oz - 4 * Wz + 1) * tz.r + 6 * (-Oz + Wz) * sz.r + (3 * Oz - 2 * Wz) * Fz.r, Xz.g = 6 * (Oz - Wz) * zz.g + (3 * Oz - 4 * Wz + 1) * tz.g + 6 * (-Oz + Wz) * sz.g + (3 * Oz - 2 * Wz) * Fz.g, Xz.b = 6 * (Oz - Wz) * zz.b + (3 * Oz - 4 * Wz + 1 … [truncated]
+         return ev._x = 6 * (gv - Sv) * vv._x + (3 * gv - 4 * Sv + 1) * zv._x + 6 * (-gv + Sv) * Pv._x + (3 * gv - 2 * Sv) * hv._x, ev._y = 6 * (gv - Sv) * vv._y + (3 * gv - 4 * Sv + 1) * zv._y + 6 * (-gv + Sv) * Pv._y + (3 * gv - 2 * Sv) * hv._y, ev._z = 6 * (gv - Sv) * vv._z + ( … [truncated]
```

#### 142. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L539-L541` → after: `L955-L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L955-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L955-L957) · [Before (L539-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L539-L541)

```diff
-       static FromColor3(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         return new Nz(zz.r, zz.g, zz.b, tz)
+       static Lerp(vv, zv, Pv) {
+         const hv = new Wv(0, 0, 0);
+         return Wv.LerpToRef(vv, zv, Pv, hv), hv
```

#### 143. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L543` → after: `L959-L2190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L959-L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L959-L2190) · [Before (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L543)

```diff
-       static FromArray(zz) {
+       static LerpToRef(vv, zv, Pv, hv) {
+         return hv._x = vv._x + (zv._x - vv._x) * Pv, hv._y = vv._y + (zv._y - vv._y) * Pv, hv._z = vv._z + (zv._z - vv._z) * Pv, hv._isDirty = !0, hv
+       }
+       static Dot(vv, zv) {
+         return vv._x * zv._x + vv._y * zv._y + vv._z * zv._z
+       }
+       dot(vv) {
+         return this._x * vv._x + this._y * vv._y + this._z * vv._z
+       }
+       static Cross(vv, zv) {
+         const Pv = new Wv;
+         return Wv.CrossToRef(vv, zv, Pv), Pv
+       }
+       static CrossToRef(vv, zv, Pv) {
+         const hv = vv._y * zv._z - vv._z * zv._y,
+           Sv = vv._z * zv._x - vv._x * zv._z,
+ ... (1216 more added lines; see GitHub link above)
```

#### 144. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L545` → after: `L2192-L2202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R2192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L2192-L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L2192-L2202) · [Before (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L545)

```diff
-         return new Nz(zz[tz], zz[tz + 1], zz[tz + 2], zz[tz + 3])
+         const Pv = this._m,
+           hv = vv.m;
+         for (let Sv = 0; Sv < 16; Sv++)
+           if (!(0, pv.WithinEpsilon)(Pv[Sv], hv[Sv], zv)) return !1;
+         return !0
+       }
+       Mev() {
+         const vv = this._m;
+         for (let zv = 0; zv < 16; zv++)
+           if (vv[zv] != (zv < 0 || arguments.length <= zv ? void 0 : arguments[zv])) return !1;
+         return !0
```

#### 145. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L547-L550` → after: `L2204-L2205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R2204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L2204-L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L2204-L2205) · [Before (L547-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L547-L550)

```diff
-       static FromArrayToRef(zz) {
-         let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-           sz = arguments.length > 2 ? arguments[2] : void 0;
-         sz.r = zz[tz], sz.g = zz[tz + 1], sz.b = zz[tz + 2], sz.a = zz[tz + 3]
+       floor() {
+         return this.floorToRef(new sv)
```

#### 146. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L552-L553` → after: `L2207-L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R2207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L2207-L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L2207-L2211) · [Before (L552-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L552-L553)

```diff
-       static FromInts(zz, tz, sz, Fz) {
-         return new Nz(zz / 255, tz / 255, sz / 255, Fz / 255)
+       floorToRef(vv) {
+         const zv = this._m,
+           Pv = vv._m;
+         for (let hv = 0; hv < 16; hv++) Pv[hv] = Math.floor(zv[hv]);
+         return vv.markAsUpdated(), vv
```

#### 147. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L555-L562` → after: `L2213-L2264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R2213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L2213-L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L2213-L2264) · [Before (L555-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L555-L562)

```diff
-       static CheckColors4(zz, tz) {
-         if (zz.length === 3 * tz) {
-           const tz = [];
-           for (let sz = 0; sz < zz.length; sz += 3) {
-             const Fz = sz / 3 * 4;
-             tz[Fz] = zz[sz], tz[Fz + 1] = zz[sz + 1], tz[Fz + 2] = zz[sz + 2], tz[Fz + 3] = 1
-           }
-           return tz
+       fract() {
+         return this.fractToRef(new sv)
+       }
+       fractToRef(vv) {
+         const zv = this._m,
+           Pv = vv._m;
+         for (let hv = 0; hv < 16; hv++) Pv[hv] = zv[hv] - Math.floor(zv[hv]);
+         return vv.markAsUpdated(), vv
+       }
+       clone() {
+         const vv = new sv;
+         return vv.Vzv(this), vv
+       }
+       getClassName() {
+         return "Matrix"
+       }
+ ... (36 more added lines; see GitHub link above)
```

#### 148. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L567` → after: `L2736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R2736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L2736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L2736) · [Before (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L567)

```diff
-     Nz._V8PerformanceHack = new Nz(.5, .5, .5, .5);
+     sv._IdentityReadOnly = sv.Identity();
```

#### 149. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L569` → after: `L2738-L2741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R2738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L2738-L2741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L2738-L2741) · [Before (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L569)

```diff
-     bz.Color3 = (0, Fz.c)(3, uz.Black), bz.Color4 = (0, Fz.c)(3, (() => new Nz(0, 0, 0, 0)));
+     Cv.fa = (0, Sv.h)(11, Wv.Zero), Cv.Matrix = (0, Sv.h)(2, sv.Identity), Cv.Quaternion = (0, Sv.h)(3, av.Zero);
+     class iv {}
+     iv.Vector2 = (0, Sv.h)(3, Tv.Zero), iv.fa = (0, Sv.h)(13, Wv.Zero), iv.Vector4 = (0, Sv.h)(3, wv.Zero), iv.Quaternion = (0, Sv.h)(3, av.Zero), iv.Matrix = (0, Sv.h)(8, sv.Identity);
+     const cv = sv.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
```

#### 150. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L587` → after: `L2766-L2780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R2766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L2766-L2780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L2766-L2780) · [Before (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L587)

```diff
-       }), (0, Oz.g)("BABYLON.Color3", uz), (0, Oz.g)("BABYLON.Color4", Nz))
+       }), Object.defineProperties(av.prototype, {
+         dimension: {
+           value: [4]
+         },
+         rank: {
+           value: 1
+         }
+       }), Object.defineProperties(sv.prototype, {
+         dimension: {
+           value: [4, 4]
+         },
+         rank: {
+           value: 2
+         }
+       }), (0, Nv.c)("BABYLON.Vector2", Tv), (0, Nv.c)("BABYLON.Vector3", Wv), (0, Nv.c)("BABYLON.Vector4", wv), (0, Nv.c)("BABYLON.Matrix", sv))
```

#### 151. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L590` → after: `L2783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R2783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L2783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L2783) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L590)

```diff
-   36479: (zz, tz, sz) => {
+   36618: (vv, zv, Pv) => {
```

#### 152. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L592-L594` → after: `L2785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R2785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L2785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L2785) · [Before (L592-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L592-L594)

```diff
-       c: () => Xz,
-       f: () => Fz,
-       i: () => Wz
+       c: () => gv
```

#### 153. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L596-L754` → after: `L2787-L2800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R2787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L2787-L2800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L2787-L2800) · [Before (L596-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L596-L754)

```diff
-     const Fz = 1 / 2.2,
-       Wz = 2.2;
-     Math.sqrt(5);
-     let Xz = .001
-   },
-   36507: (zz, tz, sz) => {
-     function Fz(zz) {
-       return parseInt(zz.toString().replace(/\W/g, ""))
-     }
- 
-     function Wz(zz, tz) {
-       let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
-       return Math.abs(zz - tz) <= sz
-     }
- 
-     function Xz(zz, tz, sz) {
- ... (143 more removed lines; see GitHub link above)
+     const hv = "undefined" !== typeof WeakRef;
+     class Sv {
+       constructor(vv) {
+         let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           Pv = arguments.length > 2 ? arguments[2] : void 0,
+           hv = arguments.length > 3 ? arguments[3] : void 0;
+         this.initialize(vv, zv, Pv, hv)
+       }
+       initialize(vv) {
+         let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           Pv = arguments.length > 2 ? arguments[2] : void 0,
+           hv = arguments.length > 3 ? arguments[3] : void 0;
+         return this.mask = vv, this.skipNextObservers = zv, this.target = Pv, this.currentTarget = hv, this
+       }
```

#### 154. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L756-L758` → after: `L2802-L2810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R2802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L2802-L2810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L2802-L2810) · [Before (L756-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L756-L758)

```diff
- 
-     function Wz(zz, tz) {
-       return Fz(zz, tz)
+     class ev {
+       constructor(vv, zv) {
+         let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         this.callback = vv, this.mask = zv, this.scope = Pv, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
+       }
+       remove() {
+         let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         this._remove && this._remove(vv)
+       }
```

#### 155. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L760-L774` → after: `L2812-L2836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R2812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L2812-L2836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L2812-L2836) · [Before (L760-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L760-L774)

```diff
-     sz.d(tz, {
-       c: () => Fz,
-       d: () => Wz,
-       f: () => Oz
-     });
-     const Xz = ["push", "splice", "pop", "shift", "unshift"];
- 
-     function Oz(zz, tz) {
-       const sz = Xz.map((sz => function(zz, tz, sz) {
-         const Fz = zz[tz];
-         if ("function" !== typeof Fz) return null;
-         const Wz = function() {
-           const Fz = zz.length,
-             Xz = Wz.previous.apply(zz, arguments);
-           return sz(tz, Fz), Xz
+     class gv {
+       static FromPromise(vv, zv) {
+         const Pv = new gv;
+         return vv.then((vv => {
+           Pv.notifyObservers(vv)
+         })).catch((vv => {
+           if (!zv) throw vv;
+           zv.notifyObservers(vv)
+         })), Pv
+       }
+       get observers() {
+         return this._observers
+       }
+       constructor(vv) {
+         let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         this.notifyIfTriggered = zv, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Sv(0), vv && (this._onObserverAdded = vv)
+ ... (9 more added lines; see GitHub link above)
```

#### 156. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L776-L780` → after: `L2838-L2855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R2838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L2838-L2855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L2838-L2855) · [Before (L776-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L776-L780)

```diff
-         return Fz.next = Wz, Wz.previous = Fz, zz[tz] = Wz, () => {
-           const sz = Wz.previous;
-           if (!sz) return;
-           const Fz = Wz.next;
-           Fz ? (sz.next = Fz, Fz.previous = sz) : (sz.next = void 0, zz[tz] = sz), Wz.next = void 0, Wz.previous = void 0
+         return Sv._remove = function() {
+           let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+           const zv = gv.deref();
+           zv && (vv ? zv.remove(Sv) : zv._remove(Sv))
+         }, Sv
+       }
+       addOnce(vv) {
+         return this.add(vv, void 0, void 0, void 0, !0)
+       }
+       remove(vv) {
+         if (!vv) return !1;
+         vv._remove = null;
+         return -1 !== this._observers.indexOf(vv) && (this._deferUnregister(vv), !0)
+       }
+       removeCallback(vv, zv) {
+         for (let Pv = 0; Pv < this._observers.length; Pv++) {
+ ... (2 more added lines; see GitHub link above)
```

#### 157. `bundles/bloxd.io/chunks/js/226.js` (Changed code · before: `L782-L784` → after: `L2857-L2915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65R2857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-5bcfffbf20f413dc970a521ea17b3aee1ea462ed374254fd9351669328b9ec65) · [After (L2857-L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/226.js#L2857-L2915) · [Before (L782-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/226.js#L782-L784)

```diff
-       }(zz, sz, tz)));
-       return () => {
-         for (const zz of sz) zz?.()
+         return !1
+       }
+       _deferUnregister(vv) {
+         vv._willBeUnregistered || (this._numObserversMarkedAsDeleted++, vv.unregisterOnNextCall = !1, vv._willBeUnregistered = !0, setTimeout((() => {
+           this._remove(vv)
+         }), 0))
+       }
+       _remove(vv) {
+         let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         if (!vv) return !1;
+         const Pv = this._observers.indexOf(vv);
+         return -1 !== Pv && (zv && this._numObserversMarkedAsDeleted--, this._observers.splice(Pv, 1), !0)
+       }
+       makeObserverTopPriority(vv) {
+         this._remove(vv, !1), this._observers.unshift(vv)
+       }
+ ... (43 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/227.js` (7rj44.0704ff61 → qepqb8.0352199c)

- **File**: `bundles/bloxd.io/chunks/js/227.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c)

#### 1. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/227.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/227.js#L4)

```diff
-   36502: (zz, tz, sz) => {
+   36751: (vv, zv, Pv) => {
```

#### 2. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L6` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/227.js#L6-L9) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/227.js#L6)

```diff
-       c: () => Wz
+       b: () => Tv,
+       e: () => Wv,
+       h: () => sv,
+       k: () => wv
```

#### 3. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L8` → after: `L11-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L11-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/227.js#L11-L30) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/227.js#L8)

```diff
-     var Fz = sz(36505);
+     var hv = Pv(36602),
+       Sv = Pv(36599),
+       ev = Pv(36620),
+       gv = Pv(36631);
+ 
+     function pv(vv) {
+       return Math.pow(vv, Sv.h)
+     }
+ 
+     function dv(vv) {
+       return vv <= .04045 ? .0773993808 * vv : Math.pow(.947867299 * (vv + .055), 2.4)
+     }
+ 
+     function Nv(vv) {
+       return Math.pow(vv, Sv.g)
+     }
+ ... (4 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L10-L17` → after: `L32-L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L32-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/227.js#L32-L588) · [Before (L10-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/227.js#L10-L17)

```diff
-       static get LastCreatedEngine() {
-         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
-       }
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
-       }
-     }
-     Wz.Instances = [], Wz.OnEnginesDisposedObservable = new Fz.c, Wz._LastCreatedScene = null, Wz.UseFallbackTexture = !0, Wz.FallbackTexture = ""
+       constructor() {
+         let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.r = vv, this.g = zv, this.b = Pv
+       }
+       toString() {
+         return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
+       }
+       getClassName() {
+         return "Color3"
+       }
+       getHashCode() {
+         let vv = 255 * this.r | 0;
+         return vv = 397 * vv ^ 255 * this.g, vv = 397 * vv ^ 255 * this.b, vv
+       }
+ ... (541 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L19` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/227.js#L590) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/227.js#L19)

```diff
-   38091: (zz, tz, sz) => {
+   36599: (vv, zv, Pv) => {
```

#### 6. `bundles/bloxd.io/chunks/js/227.js` (Changed code · before: `L21` → after: `L592-L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2cR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3220023aa696762b979a751ccfe8cd9783511981...d79e7a2661218b0ab4730d2223cf98546ac10a83#diff-f78886e0c43ac7f001bb49cab333d5d2b37f178aa0ec8dc795abf8bdd6c4af2c) · [After (L592-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d79e7a2661218b0ab4730d2223cf98546ac10a83/bundles/bloxd.io/chunks/js/227.js#L592-L594) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3220023aa696762b979a751ccfe8cd9783511981/bundles/bloxd.io/chunks/js/227.js#L21)

```diff
-       d: () => Xz
+       e: () => ev,
+       g: () => hv,
+       h: () => Sv
```
